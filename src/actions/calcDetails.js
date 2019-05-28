/* eslint-disable no-unused-vars */
import { mightDict, dungeonInfo, elements, values } from '../data';
import { getLimit, getHalidomSectionKey } from './selectors';

const MAX_WYRMPRINT_STR = 20;
const MAX_WYRMPRINT_DEF = 20;
const MAX_WYRMPRINT_RES = 15;
const MAX_WYRMPRINT_COUNTER = 25;

const getAbilityMight = ability => {
  if (ability === 0) {
    return 0;
  }
  return ability.might;
};

const getAdventurerMight = adventurer => {
  const { mana, ex, rarity } = adventurer;

  const skillMight = mightDict.adventurerSkill[mana];

  // Euden: 100001_01
  const abilitySet =
    adventurer.rarity === '5' || adventurer.id === '100001_01'
      ? mightDict.adventurerAbility['5'][mana]
      : mightDict.adventurerAbility.res[mana];

  const abilityMight = abilitySet.reduce((acc, k) => {
    if (adventurer[k]) {
      return acc + getAbilityMight(adventurer[k]);
    }

    return acc;
  }, 0);

  // TODO pleaaaaase clean this up dear lord
  const fsMight =
    mana * 1 >= 40
      ? mightDict.fs['40']
      : mana * 1 >= 10
      ? mightDict.fs['10']
      : 0;
  const exMight = mightDict.ex[rarity][ex];

  return skillMight + abilityMight + fsMight + exMight;
};

const getWeaponMight = weapon => {
  // unbind === 4, skill LV2, else skill LV1
  let skillMight = 0;
  if (weapon.skill)
    skillMight =
      weapon.unbind === '4'
        ? mightDict.itemSkill['4']
        : mightDict.itemSkill['0'];
  return (
    getAbilityMight(weapon.abilities11) +
    getAbilityMight(weapon.abilities21) +
    skillMight
  );
};

const getWyrmprintMight = wyrmprint => {
  const {
    unbind,
    abilities11,
    abilities12,
    abilities13,
    abilities21,
    abilities22,
    abilities23,
    abilities31,
    abilities32,
    abilities33,
  } = wyrmprint;

  if (unbind === '4') {
    return (
      getAbilityMight(abilities13) +
      getAbilityMight(abilities23) +
      getAbilityMight(abilities33)
    );
  }
  if (wyrmprint.unbind * 1 >= 2) {
    return (
      getAbilityMight(abilities12) +
      getAbilityMight(abilities22) +
      getAbilityMight(abilities32)
    );
  }
  return (
    getAbilityMight(abilities11) +
    getAbilityMight(abilities21) +
    getAbilityMight(abilities31)
  );
};

const getDragonMight = dragon => {
  const bondBonus = dragon.bond * 10;
  if (dragon.unbind * 1 === 4) {
    return (
      getAbilityMight(dragon.abilities12) +
      getAbilityMight(dragon.abilities22) +
      bondBonus +
      mightDict.itemSkill['4']
    );
  }
  return (
    getAbilityMight(dragon.abilities11) +
    getAbilityMight(dragon.abilities21) +
    bondBonus +
    mightDict.itemSkill['0']
  );
};

export const calcSection = section => {
  if (!section) {
    return { HP: 0, STR: 0 };
  }

  let HP;
  let STR;
  HP = 0;
  STR = 0;
  Object.keys(section).forEach(itemKey => {
    const { type, level } = section[itemKey];
    const value = values[type][level];
    HP += value.HP;
    STR += value.STR;
  });

  return { HP, STR };
};
const getMCBonus = (adventurer, key, mana) => {
  const index = ['50', '45', '40', '30', '20', '10', '0'].indexOf(mana);
  const statArray = [
    adventurer[`McFullBonus${key}5`],
    adventurer[`Plus${key}4`],
    adventurer[`Plus${key}3`],
    adventurer[`Plus${key}2`],
    adventurer[`Plus${key}1`],
    adventurer[`Plus${key}0`],
    0,
  ];

  return statArray.slice(index).reduce((acc, cur) => acc + cur, 0);
};

const getMight = (statsKey, item) => {
  switch (statsKey) {
    case 'adventurer':
      return getAdventurerMight(item);
    case 'weapon':
      return getWeaponMight(item);
    case 'wyrmprint1':
    case 'wyrmprint2':
      return getWyrmprintMight(item);
    case 'dragon':
      return getDragonMight(item);
    default:
      return 0;
  }
};

export const calcDetails = (statsKey, item, sameEle = false) => {
  let HP;
  let STR;
  let might;
  HP = 0;
  STR = 0;
  might = 0;
  if (item) {
    const { level, mana, rarity, curRarity } = item;
    const temp = statsKey === 'adventurer' ? '5' : rarity;
    const MAX_LEVEL = getLimit(statsKey, temp);

    if (level * 1 === MAX_LEVEL) {
      HP = item.MaxHp;
      STR = item.MaxAtk;
    } else {
      let baseHP;
      let baseSTR;
      let stepHP;
      let stepSTR;
      if (statsKey === 'adventurer') {
        baseHP = item[`MinHp${curRarity}`];
        baseSTR = item[`MinAtk${curRarity}`];
        stepHP = 'MinHp5';
        stepSTR = 'MinAtk5';
      } else {
        baseHP = item.MinHp;
        baseSTR = item.MinAtk;
        stepHP = 'MinHp';
        stepSTR = 'MinAtk';
      }

      if (level * 1 === 1) {
        HP = baseHP;
        STR = baseSTR;
      } else {
        HP =
          baseHP +
          ((level - 1) / (MAX_LEVEL - 1)) * (item.MaxHp - item[stepHP]);
        STR =
          baseSTR +
          ((level - 1) / (MAX_LEVEL - 1)) * (item.MaxAtk - item[stepSTR]);
      }
    }

    if (statsKey === 'adventurer') {
      HP += getMCBonus(item, 'Hp', mana);
      STR += getMCBonus(item, 'Atk', mana);
    }

    HP = Math.ceil(HP);
    STR = Math.ceil(STR);

    if (sameEle) {
      // adventurer equipt same element weapon || dragon has 1.5 bonus
      HP = Math.ceil(HP * 1.5);
      STR = Math.ceil(STR * 1.5);
    }

    might = HP + STR + getMight(statsKey, item);
  }

  return {
    HP,
    STR,
    might,
  };
};

export const getDetails = (stats, halidom) => {
  // getDetails uses with stats.adventurer exists, so no need recheck here.
  const details = {};

  const { adventurer, wyrmprint1, wyrmprint2, dragon } = stats;

  let HP;
  let STR;
  let might;
  let totalHP;
  let totalSTR;
  let totalMight;
  HP = 0;
  STR = 0;
  might = 0;
  totalHP = 0;
  totalSTR = 0;
  totalMight = 0;

  // calc adventurer, weapon, wyrmprint, dragon
  Object.keys(stats).forEach(statsKey => {
    const sameEle =
      (statsKey === 'weapon' || statsKey === 'dragon') &&
      // adventurer &&
      stats[statsKey] &&
      adventurer.element === stats[statsKey].element;

    const value = calcDetails(statsKey, stats[statsKey], sameEle);
    totalHP += value.HP;
    totalSTR += value.STR;
    totalMight += value.might;
    details[statsKey] = value;
  });

  // calc halidom
  const keys = getHalidomSectionKey(stats);
  const element = calcSection(halidom.element[keys.element]);
  const weapon = calcSection(halidom.weapon[keys.weapon]);
  const fafnir = calcSection(halidom.dragon[keys.dragon]);

  // TODO due to in game bug, fafnir statue bonus doesn't calc correctly,
  // so keep the same as in game with wrong value.
  const fakeDragonValue = calcDetails('dragon', stats.dragon);
  HP =
    Math.ceil(details.adventurer.HP * (element.HP + weapon.HP) * 0.01) +
    Math.ceil(fakeDragonValue.HP * fafnir.HP * 0.01);
  STR =
    Math.ceil(details.adventurer.STR * (element.STR + weapon.STR) * 0.01) +
    Math.ceil(fakeDragonValue.STR * fafnir.STR * 0.01);
  might = HP + STR;
  details.halidom = { HP, STR, might };

  totalHP += HP;
  totalSTR += STR;
  totalMight += might;

  // calc real halidom values
  HP =
    Math.ceil(details.adventurer.HP * (element.HP + weapon.HP) * 0.01) +
    Math.ceil(details.dragon.HP * fafnir.HP * 0.01);
  STR =
    Math.ceil(details.adventurer.STR * (element.STR + weapon.STR) * 0.01) +
    Math.ceil(details.dragon.STR * fafnir.STR * 0.01);
  might = HP + STR;
  details.trueHalidom = { HP, STR, might };

  // calc ability
  // Version 1.7.1, details calc item STR ability, shows in ability section
  let totalIncHP = 0;
  let totalIncSTR = 0;
  // adventurer's STR ability
  if (adventurer.incSTR1) {
    if (adventurer.incSTR2 && adventurer.mana * 1 >= adventurer.STRLV2) {
      totalIncSTR += adventurer.incSTR2;
    } else if (adventurer.mana * 1 >= adventurer.STRLV1) {
      totalIncSTR += adventurer.incSTR1;
    }
  }

  // weapon's STR ability
  if (
    stats.weapon &&
    stats.weapon.incSTR &&
    adventurer.element.indexOf(stats.weapon.reqEle) !== -1
  ) {
    totalIncSTR += stats.weapon.incSTR;
  }

  // wyrmprint's STR ability
  // TODO: in game bug, when wear two MUB wyrmprints will exceed the MAX_WYRMPRINT_STR limit
  let wSTR = 0;
  let w1MUB = false;
  let w2MUB = false;
  if (wyrmprint1 && wyrmprint1.incSTR1) {
    let stage = 1;
    const unbind = wyrmprint1.unbind * 1;
    if (unbind === 4) {
      stage = 3;
      w1MUB = true;
    } else if (unbind >= 2) {
      stage = 2;
    }

    wSTR += wyrmprint1[`incSTR${stage}`];
  }

  if (wyrmprint2 && wyrmprint2.incSTR1) {
    let stage = 1;
    const unbind = wyrmprint2.unbind * 1;
    if (unbind === 4) {
      stage = 3;
      w2MUB = true;
    } else if (unbind >= 2) {
      stage = 2;
    }

    wSTR += wyrmprint2[`incSTR${stage}`];
  }

  if ((!w1MUB || !w2MUB) && wSTR > MAX_WYRMPRINT_STR) {
    wSTR = MAX_WYRMPRINT_STR;
  }

  totalIncSTR += wSTR;

  if (adventurer && dragon && adventurer.element === dragon.element) {
    const aLV = dragon.unbind === '4' ? '2' : '1';
    totalIncHP += dragon[`incHP${aLV}`];
    totalIncSTR += dragon[`incSTR${aLV}`];
  }

  HP = Math.ceil(totalHP * totalIncHP * 0.01);
  STR = Math.ceil(totalSTR * totalIncSTR * 0.01);
  totalHP += HP;
  totalSTR += STR;

  details.ability = { HP, STR, might: 0 };

  details.total = { HP: totalHP, STR: totalSTR, might: totalMight };

  return details;
};

export const calcDamage = (
  resist,
  str,
  baseMod,
  critMod,
  skillDmgMod,
  passiveMod,
  elementMod,
  def = 10,
  defMod = 1
) => {
  console.log(
    resist,
    str,
    baseMod,
    critMod,
    skillDmgMod,
    passiveMod,
    elementMod
  );
  const baseDmg =
    (5 *
      (1 - resist) *
      str *
      (baseMod / 100) *
      critMod *
      skillDmgMod *
      passiveMod *
      elementMod) /
    (3 * def * defMod);
  console.log(baseDmg);
  // return [Math.floor(baseDmg * 0.95), baseDmg, Math.floor(baseDmg * 1.05)]
  return Math.floor(baseDmg);
};

export const getAdventurerDamage = (stats, str) => {
  const { adventurer, weapon, dragon } = stats;
  // TODO: calculate skill damage
  // Formula: (5/3) * (1-damage res) * (str) * (mod) * (crit mod) * (skill damage) * (punisher) * (elemental) * (dragon) / (defense) * (defense mod)
  // assume def = 10
  // round down
  const textArea = [];
  const resist = 0; // elemental resist
  const critMod = 1; // crit modifier, 1.7 by default (?)
  const skillDmgMod = 1; // +skill damage%
  const passiveMod = 1; // punisher/bane/etc
  const elementMod = 1; // 1.5 for elemental advantage, 0.5 disadvantage

  // TODO: Adventurer Combo FS Dash - data is not in a cargo table
  // TODO: Adventurer Skill
  const advSkills = [adventurer.skill1, adventurer.skill2];
  textArea.push(['Adv. Skill', 'Level', 'Modifier', 'Damage']);
  advSkills.forEach((skill, idx) => {
    if (skill.modifier) {
      Object.keys(skill.modifier).forEach(lvl => {
        const modList = skill.modifier[lvl];
        modList.forEach(baseMod => {
          const dmg = calcDamage(
            resist,
            str,
            baseMod,
            critMod,
            skillDmgMod,
            passiveMod,
            elementMod
          );
          textArea.push([skill.name, lvl, baseMod, dmg]);
        });
      });
    } else {
      textArea.push([skill.name, 'N/A', 'N/A', 'N/A']);
    }
  });
  // TODO: Weapon Skill
  // TODO: Dragon Combo - data is not in a cargo table
  // TODO: Dragon Skill
  // const max = Math.floor(base * 1.05);
  // const min = Math.floor(base * 0.95);

  return textArea;
};

export const getEnemyDamage = (stats, state) => {
  // getEnemyDamage uses with stats.adventurer exists, so no need recheck here.
  const { adventurer, weapon, wyrmprint1, wyrmprint2, dragon } = stats;
  const textArea = [];

  const { dungeon, exDef, def } = state;
  let temp;
  let tRes = 0;
  let tCounter = 0;
  let tDef = exDef * 1 + def * 1;

  if (adventurer.incDef1) {
    const { mana, defLV1, defLV2, incDef1, incDef2 } = adventurer;
    if (defLV2 && mana * 1 >= defLV2) {
      temp = incDef2;
    } else if (mana >= defLV1) {
      temp = incDef1;
    }
    if (temp) {
      tDef += temp;
      textArea.push(`adventurer,def,${temp}`);
      temp = null;
    }
  }

  // weapon Def
  if (
    weapon &&
    weapon.incDef &&
    adventurer.element.indexOf(weapon.reqEle) !== -1
  ) {
    tDef += weapon.incDef;
    textArea.push(`weapon,def,${weapon.incDef}`);
  }

  const info = dungeonInfo[dungeon];
  let wDef;
  let wCounter;
  let wRes;
  let level;
  wDef = 0;
  wCounter = 0;
  wRes = 0;

  if (wyrmprint1) {
    let stage = 1;
    const unbind = wyrmprint1.unbind * 1;

    if (unbind === 4) {
      stage = 3;
    } else if (unbind >= 2) {
      stage = 2;
    }

    if (wyrmprint1.incDef1) {
      temp = wyrmprint1[`incDef${stage}`] || wyrmprint1[`incDef${stage - 1}`];
      wDef += temp;
      textArea.push(`wyrmprint1,def,${temp}`);
    }

    if (dungeon === wyrmprint1.dungeon) {
      temp = wyrmprint1[`counter${stage}`] || wyrmprint1[`counter${stage - 1}`];
      wCounter += temp;
      textArea.push(`wyrmprint1,counter,${temp}`);
    }

    if (info.element === wyrmprint1.resEle) {
      temp = wyrmprint1[`incRes${stage}`] || wyrmprint1[`incRes${stage - 1}`];
      wRes += temp;
      textArea.push(`wyrmprint1,res,${temp}`);
    }
  }

  if (wyrmprint2) {
    let stage = 1;
    const unbind = wyrmprint2.unbind * 1;

    if (unbind === 4) {
      stage = 3;
    } else if (unbind >= 2) {
      stage = 2;
    }

    if (wyrmprint2.incDef1) {
      temp = wyrmprint2[`incDef${stage}`] || wyrmprint2[`incDef${stage - 1}`];
      wDef += temp;

      if (wDef > MAX_WYRMPRINT_DEF) {
        textArea.push(
          `wyrmprint2,def,${temp} -> ${MAX_WYRMPRINT_DEF - wDef + temp}`
        );
        wDef = MAX_WYRMPRINT_DEF;
      } else {
        textArea.push(`wyrmprint2,def,${temp}`);
      }
    }

    if (dungeon === wyrmprint2.dungeon) {
      temp = wyrmprint2[`counter${stage}`] || wyrmprint2[`counter${stage - 1}`];
      wCounter += temp;

      if (wCounter > MAX_WYRMPRINT_COUNTER) {
        textArea.push(
          `wyrmprint2,counter,${temp} -> ${MAX_WYRMPRINT_COUNTER -
            wCounter +
            temp}`
        );
        wCounter = MAX_WYRMPRINT_COUNTER;
      } else {
        textArea.push(`wyrmprint2,counter,${temp}`);
      }
    }

    if (info.element === wyrmprint2.resEle) {
      temp = wyrmprint2[`incRes${stage}`] || wyrmprint2[`incRes${stage - 1}`];
      wRes += temp;
      if (wRes > MAX_WYRMPRINT_RES) {
        textArea.push(
          `wyrmprint2,res,${temp} -> ${MAX_WYRMPRINT_RES - wRes + temp}`
        );
        wRes = MAX_WYRMPRINT_RES;
      } else {
        textArea.push(`wyrmprint2,res,${temp}`);
      }
    }
  }

  tDef += wDef;
  tRes += wRes;
  tCounter += wCounter;

  const { resEle } = dragon || {};
  if (info.element === resEle) {
    tRes += dragon.incRes;
    textArea.push(`dragon,res,${dragon.incRes}`);
  }

  let eleModifier = 1;
  if (adventurer.element === elements[info.element].disAdvantage) {
    eleModifier = 0.5;
  } else if (adventurer.element === elements[info.element].advantage) {
    eleModifier = 1.5;
  }

  const base =
    ((5 / 3) *
      info.STR *
      info.mult *
      eleModifier *
      (1 - tCounter * 0.01) *
      (1 - tRes * 0.01)) /
    (adventurer.DefCoef * (1 + tDef * 0.01));

  const max = Math.floor(base * 1.05);
  const min = Math.floor(base * 0.95);

  return { max, min, textArea };
};
