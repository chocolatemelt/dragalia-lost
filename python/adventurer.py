import main

FILE_NAME = "adventurer"

ABILITY_LEVEL = {
    "5": {
        "Abilities11": 10,
        "Abilities12": 30,
        "Abilities21": 10,
        "Abilities22": 40,
        "Abilities31": 20,
        "Abilities32": 45,
    },
    "res": {
        "Abilities11": 10,
        "Abilities12": 30,
        "Abilities21": 10,
        "Abilities22": 40,
        "Abilities31": 45,
    },
}


def set_adventurer():
    table = "Adventurers"
    fields = (
        "Id,VariationId,Name,NameJP,WeaponType,Rarity,ElementalType,"
        + "MinHp3,MinHp4,MinHp5,MaxHp,PlusHp0,PlusHp1,PlusHp2,PlusHp3,PlusHp4,McFullBonusHp5,"
        + "MinAtk3,MinAtk4,MinAtk5,MaxAtk,PlusAtk0,PlusAtk1,PlusAtk2,PlusAtk3,PlusAtk4,McFullBonusAtk5,"
        + "Skill1Name,Skill2Name,Abilities11,Abilities12,Abilities21,Abilities22,Abilities31,Abilities32,"
        + "DefCoef,IsPlayable"
    )
    group = "Id,VariationId"
    parse_int = [
        "MinHp3",
        "MinHp4",
        "MinHp5",
        "MaxHp",
        "PlusHp0",
        "PlusHp1",
        "PlusHp2",
        "PlusHp3",
        "PlusHp4",
        "McFullBonusHp5",
        "MinAtk3",
        "MinAtk4",
        "MinAtk5",
        "MaxAtk",
        "PlusAtk0",
        "PlusAtk1",
        "PlusAtk2",
        "PlusAtk3",
        "PlusAtk4",
        "McFullBonusAtk5",
        "DefCoef",
    ]

    raw_data = main.get_data(table, fields, group)

    abilities = main.set_abilities()
    skills = main.set_skills()

    names = main.load_name(FILE_NAME)
    o_len = len(names)
    data_list = []
    data_dict = {}
    data_new = []

    for i in raw_data:
        item = i["title"]
        if item["IsPlayable"] == "1":
            uid = "{}_0{}".format(item["Id"], item["VariationId"])
            name = main.set_name(names, item, data_new)
            weapon = item["WeaponType"]
            rarity = item["Rarity"]
            new_item = {
                "id": uid,
                "name": name,
                "weapon": weapon,
                "element": item["ElementalType"],
                "rarity": rarity,
            }

            for k in parse_int:
                new_item[k] = int(item[k])

            inc_LV = {}
            inc_Value = {}

            for a in [
                "Abilities11",
                "Abilities12",
                "Abilities21",
                "Abilities22",
                "Abilities31",
                "Abilities32",
            ]:
                ability = abilities.get(item[a])
                if ability:
                    # new_item[a.lower()] = ability['Might']
                    new_item[a.lower()] = ability

                    level = a[-1]

                    if "STR" in ability:
                        inc_LV["STRLV" + level] = ABILITY_LEVEL.get(
                            rarity, ABILITY_LEVEL["res"]
                        )[a]
                        inc_Value["incSTR" + level] = ability["STR"]

                    if "def" in ability:
                        inc_LV["defLV" + level] = ABILITY_LEVEL.get(
                            rarity, ABILITY_LEVEL["res"]
                        )[a]
                        inc_Value["incDef" + level] = ability["def"]

            for s in ["Skill1Name", "Skill2Name"]:
                skill = skills.get(item[s], {})
                if skill:
                    new_item[s[0:6].lower()] = skill

            new_item.update(inc_LV)
            new_item.update(inc_Value)

            data_list.append(new_item)
            data_dict[uid] = new_item

    main.save_file("list", FILE_NAME, data_list)
    main.save_file("dict", FILE_NAME, data_dict)

    if len(names) != o_len:
        print(data_new)
        main.save_file("locales", FILE_NAME, names)
        main.download_images(FILE_NAME, data_new)


if __name__ == "__main__":
    print(__file__)
    set_adventurer()
