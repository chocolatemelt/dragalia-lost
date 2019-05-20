import re
import requests
import pprint
import json
from pathlib import Path
import urllib.request
MAX = 500
BASE_URL = 'https://dragalialost.gamepedia.com/api.php?action=cargoquery&format=json&limit={}'.format(
    MAX)

ABBR_FIELDS = {
    'HP': 'HP',
    'strength': 'STR',
    'strength and HP': 'Hybrid',
    'defense': 'def'
}


def get_data(table, fields, group):
    def get_api_request(table, fields, group, offset):
        return '{}&tables={}&fields={}&group_by={}&offset={}'.format(BASE_URL, table, fields, group, offset)
    offset = 0
    data = []
    while offset % MAX == 0:
        url = get_api_request(table, fields, group, offset)
        r = requests.get(url).json()
        try:
            data += r['cargoquery']
            offset += len(data)
        except:
            print(r)
            raise Exception
    return data


def print_data(data):
    pp = pprint.PrettyPrinter(indent=2)
    pp.pprint(data)


def regex(details):
    result = {}
    result.update(regex_HP_STR_Def_DragonRes(details))
    result.update(regexRes(details))

    return result


skill_pattern = re.compile(
    r'(Stance.*?|upgraded.*?|Phase.*?)?([Dd]eals\s+)?([a-zA-Z0-9]+)\s+(shot|hit)s?\s+(and \d delayed hits? )?of\s+'
    r'&lt;span style=&quot;color:#[a-zA-Z0-9]{6}; font-weight:bold;&quot;&gt;([\d.]+)%&lt;/span&gt;',
    re.IGNORECASE
)


def regex_skill_modifier(details=''):
    matched = skill_pattern.findall(details)
    if len(matched) == 0:
        return 0
    mod_list = []
    for r in matched:
        upgrade, deals, hit, _, delayed_hit, modifier = r
        if len(modifier) == 0:
            continue
        if not hit.isdigit():
            if hit == 'two':
                hit = 2
            else:
                hit = 1
        else:
            hit = int(hit)
        if len(delayed_hit) > 0:
            hit += int(delayed_hit[4])
        # mod_list.append(round(hit * float(modifier), 2))
        if len(deals) > 0 or len(upgrade) > 0:
            mod_list.append(round(hit * float(modifier), 2))
        else:
            if len(mod_list) == 0:
                print(details)
                print(r)
                print(mod_list)
            mod_list[-1] += round(hit * float(modifier), 2)

    return mod_list


dragon_aura_pattern = re.compile(
        r'([a-zA-Z0-9]+)?:?\s*' +
        r'increases (strength|HP|defense|strength and HP) by (?:\'\'\')?(\d+)%(?:\'\'\')?' +
        r'(?:\.' +
        r'| and adds \'\'\'(\d+)%\'\'\' to (Flame|Water|Wind|Light|Shadow) resistance' +
        r'| when HP is| and)', re.IGNORECASE)


def regex_HP_STR_Def_DragonRes(details=''):
    r = dragon_aura_pattern.search(details)

    if r:
        req, field, v, res, resEle = r.groups()
        result = {}
        result['req'] = req or ''
        result[ABBR_FIELDS[field]] = int(v)

        if resEle:
            result.update({'resEle': resEle.capitalize(), 'res': int(res)})

        return result

    return {}


def regexRes(details=''):
    # test = [
    #     "Reduces damage taken from High Midgardsormr by '''20%'''.",
    #     "Reduces shadow damage taken by '''3%'''.",
    # ]
    # details = test[1]

    r = re.search(
        r'Reduces (?:(Flame|Water|Wind|Light|Shadow) )?damage taken ' +
        r'(?:from (High Midgardsormr|High Brunhilda|High Mercury) )?' +
        r'by \'\'\'(\d+)%\'\'\'', details, re.IGNORECASE
    )

    if r:
        # print(r.groups())
        resEle, dungeon, v = r.groups()
        v = int(v)

        if resEle:
            resEle = resEle.capitalize()
            return {
                'resEle': resEle,
                'res': v,
            }
        elif dungeon:
            abbr = {
                "High Midgardsormr": "hms",
                "High Brunhilda": "hbh",
                "High Mercury": "hmc"
            }

            return {
                'dungeon': abbr[dungeon],
                'counter': v,
            }

    return {}


def set_abilitylimitedgroup():
    table = 'AbilityLimitedGroup'
    fields = 'Id,IsEffectMix,MaxLimitedValue'
    group = 'Id'

    raw_data = get_data(table, fields, group)

    results = {}
    for i in raw_data:
        item = i['title']
        new_item = {
            'IsEffectMix': not bool(item['IsEffectMix']),
            'MaxLimitedValue': int(item['MaxLimitedValue']) or 0
        }
        results[item['Id']] = new_item

    return results


def set_abilities():
    table = 'Abilities'
    fields = 'Id,Name,Details,PartyPowerWeight,AbilityLimitedGroupId1'
    group = 'Id'

    raw_data = get_data(table, fields, group)
    ability_limit = set_abilitylimitedgroup()

    results = {}
    for i in raw_data:
        item = i['title']
        details = item['Details']

        new_item = {
            'name': item['Name'],
            'details': details,
            'might': int(item['PartyPowerWeight']) or 0,
            'limit': ability_limit[item['AbilityLimitedGroupId1']]
            if item['AbilityLimitedGroupId1'] in ability_limit.keys() else 0
        }

        updates = regex(details)

        if len(updates):
            new_item.update(updates)

        results[item['Id']] = new_item

    return results


def set_skills():
    table = 'Skills'
    fields = 'Name,SkillLv1IconName,Description1,Description2,Description3,' \
             'HideLevel3,Sp,SPLv2,SpRegen,IsAffectedByTension,IframeDuration'
    group = 'Name'

    parse_int = ['Sp', 'SPLv2', 'SpRegen']
    parse_bool = ['HideLevel3', 'IsAffectedByTension']

    raw_data = get_data(table, fields, group)

    result = {}

    for i in raw_data:
        item = i['title']
        if item['Name']:
            pk = item['Name']

            new_item = {
                'name': item['Name'],
                'icon': item['SkillLv1IconName'],
                'description1': item['Description1'],
                'description2': item['Description2'],
                'description3': item['Description3'],
            }

            for k in parse_int:
                new_item[k] = int(item[k]) if item[k] != '' else 0

            for k in parse_bool:
                new_item[k] = bool(item[k])

            new_item['iframe'] = float(item['IframeDuration'][0:2])

            new_item['modifier'] = {}
            parse_modifier = ['Description1', 'Description2', 'Description3']
            if new_item['HideLevel3']:
                parse_modifier = parse_modifier[0:2]
            for d in parse_modifier:
                mod = regex_skill_modifier(item[d])
                if mod == 0:
                    new_item['modifier'] = None
                    break
                new_item['modifier']['lvl' + d[-1]] = mod

            result[pk] = new_item
    return result


def load_name(file):
    path = Path(__file__).resolve().parent / 'locales/{}.json'.format(file)
    with open(path, encoding='utf-8') as f:
        data = json.load(f)

    return data


def set_name(names, item, new=[]):
    uid = item.get('BaseId', item.get('Id', None))

    if uid:
        if 'FormId' in item:
            uid += '_01_{}'.format(item['FormId'])

        if uid in names:
            if names[uid]['ja'] and names[uid]['zh']:
                return names[uid]
            else:
                en = names[uid]['en']
                return {
                    'en': en,
                    'ja': names[uid]['ja'] or en,
                    'zh': names[uid]['zh'] or en,
                }

        new.append(uid)

        en_name = item.get('Name', item.get('WeaponName', ''))
        ja_name = item.get('NameJP', '')

        names[uid] = {
            'en': en_name,
            'ja': ja_name,
            'zh': '',
        }

        return {
            'en': en_name,
            'ja': ja_name or en_name,
            'zh': en_name,
        }


def save_file(f_type, file, data):
    if f_type == 'locales':
        path = Path(__file__).resolve().parent / 'locales/{}.json'.format(file)
    elif f_type == 'list':
        path = Path(__file__).resolve().parent.parent / \
            'src/data/dataList/{}.js'.format(file)
    elif f_type == 'dict':
        path = Path(__file__).resolve().parent.parent / \
            'src/data/dataDict/{}.js'.format(file)
    elif f_type == 'facility':
        path = Path(__file__).resolve().parent.parent / \
            'src/locales/{}.js'.format(file)

    with open(path, 'w', encoding='utf-8') as f:
        if f_type != 'locales':
            f.write('const {} =\n '.format(file))
        json.dump(data, f, sort_keys=f_type == 'locales',
                  indent=2, ensure_ascii=False)

        if f_type != 'locales':
            f.write(';\nexport default {};'.format(file))
    f.close()
    print('save file: {}'.format(path))


def download_images(file_name, new_content=[]):
    pattern = {
        'adventurer': r'\d{6}_0\d_r0[345].png',
        'dragon': r'\d{6}_01.png',
        'weapon': r'\d{6}_01_\d{5}.png',
        'wyrmprint': r'\d{6}_0[12].png',
        'facility': r'TW02_(\d{6})_IMG_0(\d)',
    }

    start = {
        'adventurer': '100001_01_r04.png',
        'dragon': '210001_01.png',
        'weapon': '301001_01_19901.png',
        'wyrmprint': '400001_01.png',
        'facility': 'TW02_100101_IMG_01.png'
    }

    end = {
        'adventurer': '2',
        'dragon': '3',
        'weapon': '4',
        'wyrmprint': 'A',
        'facility': 'U',
    }

    download = {}
    f_max = {}
    aifrom = start[file_name]
    keep = True
    while keep:
        url = 'https://dragalialost.gamepedia.com/api.php?action=query&format=json&list=allimages&aifrom={}&ailimit=max'.format(
            aifrom)

        response = requests.get(url).json()
        try:
            data = response['query']['allimages']

            for i in data:
                name = i['name']
                if name[0] == end[file_name]:
                    keep = False
                    break
                r = re.search(pattern[file_name], name)
                if r and any(ele in name for ele in new_content):
                    if file_name == 'facility':
                        f_key, f_level = r.groups()
                        if f_level > f_max.get(f_key, ''):
                            f_max[f_key] = f_level
                            download['{}.png'.format(f_key)] = i['url']
                    else:
                        download[name] = i['url']

            con = response.get('continue', None)
            if con and con.get('aicontinue', None):
                aifrom = con['aicontinue']
            else:
                keep = False
                break

        except:
            raise Exception

    for k, v in download.items():
        path = Path(__file__).resolve().parent.parent / \
            'public/images/{}/{}'.format(file_name, k)
        urllib.request.urlretrieve(v, path)
        print('download image: {}'.format(path))


def clear_dict(file):
    names = load_name(file)
    for k in list(names):
        if not names[k]['ja'] or not names[k]['zh']:
            del names[k]
    save_file('locales', file, names)


if __name__ == '__main__':
    print(__file__)
    # download_images('facility', ['101002'])
    # facility = load_name('facility')
    # save_file('facility', 'facility', facility)
