const weapon =
 [
  {
    "id": "301013_01_30101",
    "name": {
      "en": "Blazing Edge",
      "ja": "ハードヒートソード",
      "zh": "灼热之剑"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Blazing Cleaver",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;614%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;682%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 7330,
      "SPLv2": 7330,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301053_01_30101",
    "name": {
      "en": "Blazing Ingot",
      "ja": "ブレイズインゴット",
      "zh": "烈焰铸铁"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Flame) Physian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301006_01_30201",
    "name": {
      "en": "Rainbreaker",
      "ja": "レインブレイカー",
      "zh": "裂雨剑"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Rain Slicer",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;307%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;341%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals water damage to surrounding enemies.",
      "Sp": 7226,
      "SPLv2": 7226,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301061_01_30201",
    "name": {
      "en": "Furious Frost",
      "ja": "氷雪の魔剣",
      "zh": "冰雪魔剑"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Water) Undead's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301063_01_30201",
    "name": {
      "en": "Icy Ingot",
      "ja": "アイスインゴット",
      "zh": "冰霜铸铁"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 40,
    "MaxAtk": 136,
    "abilities11": {
      "name": "(Water) Physian's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301035_01_30301",
    "name": {
      "en": "Grassrunner",
      "ja": "グラスランナー",
      "zh": "草上飞"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Grass Slash",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;307%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;341%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals wind damage to surrounding enemies.",
      "Sp": 7226,
      "SPLv2": 7226,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301064_01_30301",
    "name": {
      "en": "Wind Ingot",
      "ja": "ウインドインゴット",
      "zh": "Wind Ingot"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Wind) Physian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301007_01_30401",
    "name": {
      "en": "Featherblade",
      "ja": "フェザーソード",
      "zh": "轻羽剑"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Merciless Cleaver",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;614%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;682%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 7330,
      "SPLv2": 7330,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301065_01_30401",
    "name": {
      "en": "Thunder Ingot",
      "ja": "サンダーインゴット",
      "zh": "雷霆铸铁"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Light) Physian's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301062_01_30401",
    "name": {
      "en": "Empty Flash",
      "ja": "稲妻の魔剣",
      "zh": "电闪魔剑"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 40,
    "MaxAtk": 136,
    "abilities11": {
      "name": "(Light) Undead's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301008_01_30501",
    "name": {
      "en": "Blood Price",
      "ja": "ブラッドデュエル",
      "zh": "鲜血决斗"
    },
    "weapon": "Sword",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Bloody Cleaver",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;614%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;682%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 7330,
      "SPLv2": 7330,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301030_01_39901",
    "name": {
      "en": "Knight's Sword",
      "ja": "ナイツソード",
      "zh": "骑士剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 25,
    "MaxAtk": 86,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301038_01_39901",
    "name": {
      "en": "Ensorcelled Sword",
      "ja": "エンチャントソード",
      "zh": "附魔剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Ensorcelled Slash",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of '''276%''' damage to surrounding enemies.",
      "description2": "Deals 2 hits of '''307%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 7226,
      "SPLv2": 7226,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301039_01_39901",
    "name": {
      "en": "Broadedge",
      "ja": "ワイドソード",
      "zh": "狂野之剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Broad Cleaver",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of '''553%''' damage to enemies directly ahead.",
      "description2": "Deals 1 hit of '''614%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7330,
      "SPLv2": 7330,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301047_01_39901",
    "name": {
      "en": "Lonely Ward",
      "ja": "退魔の剣",
      "zh": "退魔之剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 25,
    "MaxAtk": 86,
    "abilities11": {
      "name": "Undead's Bane +10%",
      "details": "Increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "301052_01_39901",
    "name": {
      "en": "Hefty Ingot",
      "ja": "ヘビィインゴット",
      "zh": "沉重铸铁"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 23,
    "MinAtk": 26,
    "MaxAtk": 88,
    "abilities11": {
      "name": "Physian's Bane +10%",
      "details": "Increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "301014_01_40101",
    "name": {
      "en": "Crimson Cry",
      "ja": "クリムゾンソード",
      "zh": "绯红剑"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Crimson Wave",
      "icon": "Icon_Skill_006",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;338%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;375%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 7508,
      "SPLv2": 7508,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301053_01_40101",
    "name": {
      "en": "Molten Ingot",
      "ja": "ヴォルカノインゴット",
      "zh": "火山铸铁"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Flame) Physian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301056_01_40101",
    "name": {
      "en": "Flame Apogee",
      "ja": "グレイテストフレイム",
      "zh": "无上烈焰"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "301009_01_40201",
    "name": {
      "en": "Mercurius",
      "ja": "メルクリウスソード",
      "zh": "墨丘利之剑"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Mercurial Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''15%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''12%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores the user's HP with '''18%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''15%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Gradually recovers the user's HP for 15 seconds.",
      "Sp": 14950,
      "SPLv2": 14950,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301061_01_40201",
    "name": {
      "en": "Fervent Frost",
      "ja": "猛雪の魔剣",
      "zh": "暴雪魔剑"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Water) Undead's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301063_01_40201",
    "name": {
      "en": "Blizzard Ingot",
      "ja": "ブリザードインゴット",
      "zh": "雪崩铸铁"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 60,
    "MinAtk": 64,
    "MaxAtk": 216,
    "abilities11": {
      "name": "(Water) Physian's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301034_01_40301",
    "name": {
      "en": "Wingblade",
      "ja": "ウイングソード",
      "zh": "灵翼剑"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Winged Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''15%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''12%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores the user's HP with '''18%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''15%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Gradually recovers the user's HP for 15 seconds.",
      "Sp": 14950,
      "SPLv2": 14950,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301067_01_40301",
    "name": {
      "en": "Gale Apogee",
      "ja": "グレイテストゲイル",
      "zh": "无上烈风"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "301064_01_40301",
    "name": {
      "en": "Tornado Ingot",
      "ja": "トルネードインゴット",
      "zh": "Tornado Ingot"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Wind) Physian's Bane +15%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301036_01_40401",
    "name": {
      "en": "Astral Edge",
      "ja": "七星剣",
      "zh": "七星剑"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Astral Radiance",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''15%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''12%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores the user's HP with '''18%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''15%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Gradually recovers the user's HP for 15 seconds.",
      "Sp": 14950,
      "SPLv2": 14950,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301058_01_40401",
    "name": {
      "en": "Luster Apogee",
      "ja": "グレイテストブライト",
      "zh": "无上光辉"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": {
      "name": "(Light) Skill Prep +25%",
      "details": "If the user is attuned to Light:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "301065_01_40401",
    "name": {
      "en": "Plasma Ingot",
      "ja": "プラズマインゴット",
      "zh": "电浆铸铁"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Light) Physian's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301062_01_40401",
    "name": {
      "en": "Abandoned Roar",
      "ja": "轟雷の魔剣",
      "zh": "轰雷魔剑"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 60,
    "MinAtk": 64,
    "MaxAtk": 216,
    "abilities11": {
      "name": "(Light) Undead's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "301011_01_40501",
    "name": {
      "en": "Dark Dementia",
      "ja": "狂乱の黒剣",
      "zh": "狂乱黑剑"
    },
    "weapon": "Sword",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Dark Wave",
      "icon": "Icon_Skill_006",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;338%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;375%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals shadow damage to enemies in a line.",
      "Sp": 7508,
      "SPLv2": 7508,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301040_01_49901",
    "name": {
      "en": "Knights' Grace",
      "ja": "騎士長の麗剣",
      "zh": "骑士长丽剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 62,
    "MaxAtk": 208,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301031_01_49901",
    "name": {
      "en": "Blade of Glory",
      "ja": "グロリアスソード",
      "zh": "荣耀之剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Glorious Wave",
      "icon": "Icon_Skill_006",
      "description1": "Deals 2 hits of '''304%''' damage to enemies in a line.",
      "description2": "Deals 2 hits of '''338%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 7508,
      "SPLv2": 7508,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301012_01_49901",
    "name": {
      "en": "Gilda Sword",
      "ja": "ギルダソード",
      "zh": "吉尔达之剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Gildan Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''15%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''12%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores the user's HP with '''18%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''15%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Gradually recovers the user's HP for 15 seconds.",
      "Sp": 14950,
      "SPLv2": 14950,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 77,
    "MaxAtk": 257,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301055_01_49901",
    "name": {
      "en": "Wind Apogee",
      "ja": "グレイテストウイング",
      "zh": "无上锐翼"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "301032_01_50101",
    "name": {
      "en": "Levatein",
      "ja": "レーヴァテイン",
      "zh": "雷瓦汀"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Calamitous Cleaver",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;149%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;165%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 6847,
      "SPLv2": 6847,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 143,
    "MinAtk": 166,
    "MaxAtk": 556,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301056_01_50101",
    "name": {
      "en": "Inferno Apogee",
      "ja": "グレイテストインフェルノ",
      "zh": "无上业火"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "301010_01_50201",
    "name": {
      "en": "Eoantide",
      "ja": "原初の白波",
      "zh": "原初白浪"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Eoantide Cleaver",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;149%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;165%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 6847,
      "SPLv2": 6847,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 143,
    "MinAtk": 166,
    "MaxAtk": 556,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301033_01_50301",
    "name": {
      "en": "Durandal",
      "ja": "デュランダル",
      "zh": "杜朗达尔"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Heroic Epic",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''30%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 47,
    "MaxHp": 158,
    "MinAtk": 157,
    "MaxAtk": 524,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301067_01_50301",
    "name": {
      "en": "Hurricane Apogee",
      "ja": "グレイテストハリケーン",
      "zh": "无上飓风"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "301015_01_50401",
    "name": {
      "en": "Zex's End",
      "ja": "エンド・オブ・ゼクス",
      "zh": "赛克斯的终焉"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Zex's Waltz",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;149%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;165%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 6847,
      "SPLv2": 6847,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 143,
    "MinAtk": 166,
    "MaxAtk": 556,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301058_01_50401",
    "name": {
      "en": "Aureole Apogee",
      "ja": "グレイテストオリオール",
      "zh": "无上圣耀"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": {
      "name": "(Light) Skill Prep +50%",
      "details": "If the user is attuned to Light:  fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "301081_01_50401",
    "name": {
      "en": "Fólkvangr",
      "ja": "フォルクヴァング",
      "zh": "弗尔克范格"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "5",
    "skill": null,
    "MinHp": 30,
    "MaxHp": 101,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": {
      "name": "HP Below 50% = Strength +15%",
      "details": "Increases strength by '''15%''' when HP is '''50%''' or below.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP Below 50%",
        "req_threshold": -50,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0
  },
  {
    "id": "301037_01_50501",
    "name": {
      "en": "Dáinsleif",
      "ja": "ダインスレイブ",
      "zh": "戴因斯莱夫"
    },
    "weapon": "Sword",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Eternal Strife",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''30%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 47,
    "MaxHp": 158,
    "MinAtk": 157,
    "MaxAtk": 524,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301041_01_59901",
    "name": {
      "en": "Hero's Sword",
      "ja": "英雄の剣",
      "zh": "英雄之剑"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 30,
    "MaxHp": 101,
    "MinAtk": 108,
    "MaxAtk": 362,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301042_01_59901",
    "name": {
      "en": "Hauteclaire",
      "ja": "オートクレール",
      "zh": "奥托克莱尔"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Noble Flash",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of '''134%''' damage to enemies directly ahead.",
      "description2": "Deals 5 hits of '''149%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 6847,
      "SPLv2": 6847,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 35,
    "MaxHp": 117,
    "MinAtk": 136,
    "MaxAtk": 456,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301043_01_59901",
    "name": {
      "en": "Gram",
      "ja": "グラム",
      "zh": "格拉墨"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Rage and Retribution",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 38,
    "MaxHp": 129,
    "MinAtk": 129,
    "MaxAtk": 430,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "301046_01_59901",
    "name": {
      "en": "Lucky Hanetsuki Paddle",
      "ja": "福招きの羽子板",
      "zh": "招福羽子板"
    },
    "weapon": "Sword",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Happiness Spike",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 hit '''668%''' damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of '''743%''' damage to the target and nearby enemies.",
      "description3": "",
      "Sp": 7773,
      "SPLv2": 7773,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 106,
    "MinAtk": 105,
    "MaxAtk": 351,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302006_01_30101",
    "name": {
      "en": "Valkaheim Blade",
      "ja": "バルカブレード",
      "zh": "巴尔加之刃"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Valkan Wave",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;790%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;878%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 7920,
      "SPLv2": 7920,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 15,
    "MaxHp": 53,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302042_01_30101",
    "name": {
      "en": "Crimson Steel",
      "ja": "朱鋼丸",
      "zh": "朱钢丸"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 9,
    "MaxHp": 33,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": {
      "name": "(Flame) Physian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302071_01_30101",
    "name": {
      "en": "Balefire Blade",
      "ja": "妖焔刀・燎火",
      "zh": "Balefire Blade"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 9,
    "MaxHp": 32,
    "MinAtk": 44,
    "MaxAtk": 149,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +10%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "302007_01_30201",
    "name": {
      "en": "Alighting Butterfly",
      "ja": "花蝶村雨",
      "zh": "花蝶村雨"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Butterfly Strike",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;790%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;878%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 7920,
      "SPLv2": 7920,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 15,
    "MaxHp": 53,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302049_01_30201",
    "name": {
      "en": "Azure Obsidian",
      "ja": "蒼曜丸",
      "zh": "苍曜丸"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Water) Physian's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302024_01_30301",
    "name": {
      "en": "Dragon Commander",
      "ja": "竜将刀",
      "zh": "龙将刀"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Commander's Blitz",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;264%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;293%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 7175,
      "SPLv2": 7175,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 15,
    "MaxHp": 50,
    "MinAtk": 70,
    "MaxAtk": 236,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302050_01_30301",
    "name": {
      "en": "Verdantbreeze Cutter",
      "ja": "翠琥丸",
      "zh": "Verdantbreeze Cutter"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 9,
    "MaxHp": 33,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": {
      "name": "(Wind) Physian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302027_01_30401",
    "name": {
      "en": "Chanzelian Blade",
      "ja": "シャンゼリアブレード",
      "zh": "香榭利亚之刃"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Chanzelian Strike",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;264%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;293%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 7175,
      "SPLv2": 7175,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 15,
    "MaxHp": 50,
    "MinAtk": 70,
    "MaxAtk": 236,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302051_01_30401",
    "name": {
      "en": "Obsidian Alabaster",
      "ja": "白曜丸",
      "zh": "白曜丸"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 9,
    "MaxHp": 33,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": {
      "name": "(Light) Physian's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302009_01_30501",
    "name": {
      "en": "Sanguine Rain",
      "ja": "妖刀血雨",
      "zh": "妖刀血雨"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Sanguine Blitz",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;264%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;293%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies in a line.",
      "Sp": 7175,
      "SPLv2": 7175,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 15,
    "MaxHp": 50,
    "MinAtk": 70,
    "MaxAtk": 236,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302054_01_30501",
    "name": {
      "en": "Resentment",
      "ja": "妖魔刀・怨嗟",
      "zh": "妖魔刀・怨嗟"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +10%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302021_01_39901",
    "name": {
      "en": "Subjugator",
      "ja": "討伐刀",
      "zh": "讨伐刀"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 20,
    "MinAtk": 28,
    "MaxAtk": 94,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302030_01_39901",
    "name": {
      "en": "High Shamshir",
      "ja": "ロードシャムシール",
      "zh": "舍施尔弯刀"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Shamshir Strike",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of '''238%''' damage to enemies directly ahead.",
      "description2": "Deals 3 hits of '''264%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7175,
      "SPLv2": 7175,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 9,
    "MaxHp": 32,
    "MinAtk": 44,
    "MaxAtk": 149,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302008_01_39901",
    "name": {
      "en": "Fusion Blade",
      "ja": "ネクストブレード",
      "zh": "次世代之刃"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Fusion Wave",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of '''710%''' damage to enemies in a line.",
      "description2": "Deals 1 hit of '''790%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 7920,
      "SPLv2": 7920,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 9,
    "MaxHp": 33,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302041_01_39901",
    "name": {
      "en": "Goliath Splitter",
      "ja": "鋼丸",
      "zh": "钢丸"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 21,
    "MinAtk": 27,
    "MaxAtk": 91,
    "abilities11": {
      "name": "Physian's Bane +10%",
      "details": "Increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "302055_01_39901",
    "name": {
      "en": "Rest Eternal",
      "ja": "妖刀・幽",
      "zh": "妖刀・幽"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 22,
    "MinAtk": 26,
    "MaxAtk": 88,
    "abilities11": {
      "name": "Blinded Punisher +10%",
      "details": "Increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "302015_01_40101",
    "name": {
      "en": "Flametongue",
      "ja": "緋炎刀",
      "zh": "绯炎刀"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Flame's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 108,
    "MaxAtk": 361,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302042_01_40101",
    "name": {
      "en": "Blazing Steel",
      "ja": "真打・紅焔鋼丸",
      "zh": "终极・红焰钢丸"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 50,
    "MinAtk": 70,
    "MaxAtk": 236,
    "abilities11": {
      "name": "(Flame) Physian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302045_01_40101",
    "name": {
      "en": "Scorching Edge",
      "ja": "烈斬刀・却火",
      "zh": "烈斩刀・劫火"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 88,
    "MaxAtk": 295,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "302057_01_40101",
    "name": {
      "en": "Hellfire Judgment",
      "ja": "火刃・獄炎丸",
      "zh": "Hellfire Judgment"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 88,
    "MaxAtk": 295,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +15%",
      "details": "If the user is attuned to Flame: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 15
  },
  {
    "id": "302071_01_40101",
    "name": {
      "en": "Balefire Votive",
      "ja": "妖焔刀・燎火燈明",
      "zh": "Balefire Votive"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 50,
    "MinAtk": 70,
    "MaxAtk": 236,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +15%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "302022_01_40201",
    "name": {
      "en": "Sousui",
      "ja": "蒼水刀",
      "zh": "苍水刀"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Whirlpool",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;869%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;966%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals water damage to surrounding enemies.",
      "Sp": 8178,
      "SPLv2": 8178,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 114,
    "MaxAtk": 383,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302049_01_40201",
    "name": {
      "en": "Obsidian Waterfall",
      "ja": "真打・爆流曜丸",
      "zh": "终极・瀑流曜丸"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Water) Physian's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302058_01_40201",
    "name": {
      "en": "Highwater Blade",
      "ja": "水刃・波濤丸",
      "zh": "水刃・波涛丸"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 20,
    "MaxHp": 69,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": {
      "name": "(Water) Full HP = Defense +15%",
      "details": "If the user is attuned to Water: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 15
  },
  {
    "id": "302011_01_40301",
    "name": {
      "en": "Tempest Blade",
      "ja": "テンペストブレード",
      "zh": "暴风之刃"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Tempest's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%'''  for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 108,
    "MaxAtk": 361,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302053_01_40301",
    "name": {
      "en": "Tempestrage",
      "ja": "烈斬刀・颶風",
      "zh": "烈斩刀・飓风"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 19,
    "MaxHp": 66,
    "MinAtk": 85,
    "MaxAtk": 286,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "302050_01_40301",
    "name": {
      "en": "Verdurewind Cutter",
      "ja": "真打・翠嵐琥丸",
      "zh": "Verdurewind Cutter"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 53,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": {
      "name": "(Wind) Physian's Bane +15%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302026_01_40401",
    "name": {
      "en": "Thunderfang",
      "ja": "纏雷斬蛇刀",
      "zh": "缠雷斩蛇刀"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Thunderstorm",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;869%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;966%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light-based damage to surrounding enemies.",
      "Sp": 8178,
      "SPLv2": 8178,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 114,
    "MaxAtk": 383,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302047_01_40401",
    "name": {
      "en": "Thunderous Edge",
      "ja": "烈斬刀・轟雷",
      "zh": "烈斩刀・轰雷"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 88,
    "MaxAtk": 295,
    "abilities11": {
      "name": "(Light) Skill Prep +25%",
      "details": "If the user is attuned to Light:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "302051_01_40401",
    "name": {
      "en": "Obsidian Scintillation",
      "ja": "真打・天光曜丸",
      "zh": "终极・天光曜丸"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 53,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": {
      "name": "(Light) Physian's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302029_01_40501",
    "name": {
      "en": "Ghizlam's Darkblade",
      "ja": "闇刀ジズラム",
      "zh": "暗刀齐兹拉姆"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Darkness's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 108,
    "MaxAtk": 361,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302054_01_40501",
    "name": {
      "en": "Unwelcome Meeting",
      "ja": "妖魔刀・怨憎会苦",
      "zh": "妖魔刀・怨憎会苦"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +15%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "302012_01_49901",
    "name": {
      "en": "Guardian Seal",
      "ja": "鎮守刀",
      "zh": "镇守刀"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 14,
    "MaxHp": 48,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302031_01_49901",
    "name": {
      "en": "Iron Blade",
      "ja": "クロガネブレード",
      "zh": "黑钢之刃"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Iron's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''15%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 69,
    "MinAtk": 83,
    "MaxAtk": 278,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302032_01_49901",
    "name": {
      "en": "Masamura's Pride",
      "ja": "機構刀サマラム",
      "zh": "机械刀正村"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Masamura's Slash",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of '''782%''' damage to surrounding enemies.",
      "description2": "Deals 1 hit of '''869%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 8178,
      "SPLv2": 8178,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 88,
    "MaxAtk": 295,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302044_01_49901",
    "name": {
      "en": "Bladewing",
      "ja": "斬刀・虚",
      "zh": "斩刀・虚"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 14,
    "MaxHp": 48,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "302056_01_49901",
    "name": {
      "en": "Wildhaze",
      "ja": "荒刃・朧",
      "zh": "荒刃・胧"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 53,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "Full HP = Defense +15%",
      "details": "Increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 15
      }
    },
    "abilities21": 0
  },
  {
    "id": "302013_01_50101",
    "name": {
      "en": "Heaven's Acuity",
      "ja": "天之尾羽張",
      "zh": "天之尾羽张"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Heaven's Flames",
      "icon": "Icon_Skill_010",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;319%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;354%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 8030,
      "SPLv2": 8030,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 39,
    "MaxHp": 132,
    "MinAtk": 171,
    "MaxAtk": 572,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302045_01_50101",
    "name": {
      "en": "Skyrender",
      "ja": "烈斬刀・天変却火",
      "zh": "烈斩刀・天变劫火"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 105,
    "MaxAtk": 353,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "302057_01_50101",
    "name": {
      "en": "Ogreslayer Judgment",
      "ja": "焔刃・鬼切獄炎",
      "zh": "Ogreslayer Judgment"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 114,
    "MaxAtk": 383,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +20%",
      "details": "If the user is attuned to Flame: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 20
  },
  {
    "id": "302010_01_50201",
    "name": {
      "en": "Maar Oasis",
      "ja": "マールオアシス",
      "zh": "火口绿洲"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Maar's Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12841,
      "SPLv2": 12841,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 143,
    "MinAtk": 163,
    "MaxAtk": 544,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302058_01_50201",
    "name": {
      "en": "Highwater Slicer",
      "ja": "浪刃・波濤一文字",
      "zh": "浪刃・波涛一文字"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 108,
    "MaxAtk": 361,
    "abilities11": {
      "name": "(Water) Full HP = Defense +20%",
      "details": "If the user is attuned to Water: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 20
  },
  {
    "id": "302023_01_50301",
    "name": {
      "en": "Anemone",
      "ja": "淡紫刀アネモネ",
      "zh": "淡紫刀银莲"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Verdant Wave",
      "icon": "Icon_Skill_010",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;319%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;354%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "Deals wind damage to enemies in a line.",
      "Sp": 8030,
      "SPLv2": 8030,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 39,
    "MaxHp": 132,
    "MinAtk": 171,
    "MaxAtk": 572,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302053_01_50301",
    "name": {
      "en": "Heavenrend",
      "ja": "烈斬刀・颶風断空",
      "zh": "烈斩刀・飓风断空"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 25,
    "MaxHp": 85,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "302025_01_50401",
    "name": {
      "en": "Heavenwing",
      "ja": "天の翼刀",
      "zh": "天翼之刀"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Winged Blessing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12841,
      "SPLv2": 12841,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 143,
    "MinAtk": 163,
    "MaxAtk": 544,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302047_01_50401",
    "name": {
      "en": "Primal Thunder",
      "ja": "烈斬刀・轟雷創世",
      "zh": "烈斩刀・轰雷创世"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 92,
    "MinAtk": 105,
    "MaxAtk": 353,
    "abilities11": {
      "name": "(Light) Skill Prep +50%",
      "details": "If the user is attuned to Light:  fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "302028_01_50501",
    "name": {
      "en": "Blackwing",
      "ja": "黒翼の呪刀",
      "zh": "黑翼咒刃"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Black Dance",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;192%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;213%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 7695,
      "SPLv2": 7695,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 37,
    "MaxHp": 125,
    "MinAtk": 177,
    "MaxAtk": 590,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302014_01_59901",
    "name": {
      "en": "Dane's Favor",
      "ja": "覇王号",
      "zh": "霸王号"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 25,
    "MaxHp": 84,
    "MinAtk": 118,
    "MaxAtk": 395,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302033_01_59901",
    "name": {
      "en": "Crimson Shade",
      "ja": "夜叉影光",
      "zh": "夜叉影光"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Shade's Flight",
      "icon": "Icon_Skill_010",
      "description1": "Deals 3 hits of '''287%''' damage to enemies in a line.",
      "description2": "Deals 3 hits of '''319%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 8030,
      "SPLv2": 8030,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 32,
    "MaxHp": 108,
    "MinAtk": 140,
    "MaxAtk": 469,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302034_01_59901",
    "name": {
      "en": "Souleater",
      "ja": "魂喰虎鉄",
      "zh": "魂喰虎铁"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Souleater's Feast",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of '''173%''' damage to enemies directly ahead.",
      "description2": "Deals 5 hits of '''192%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7695,
      "SPLv2": 7695,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 30,
    "MaxHp": 103,
    "MinAtk": 144,
    "MaxAtk": 483,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "302035_01_59901",
    "name": {
      "en": "Villagelight",
      "ja": "ヴィレッジライト",
      "zh": "村正"
    },
    "weapon": "Blade",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Swordsmith's Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12841,
      "SPLv2": 12841,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 35,
    "MaxHp": 117,
    "MinAtk": 133,
    "MaxAtk": 446,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303027_01_30101",
    "name": {
      "en": "Cruel Kukri",
      "ja": "クルーエルククリ",
      "zh": "无情反曲刀"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Cruel Assault",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;305%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;339%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 7339,
      "SPLv2": 7339,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 64,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303042_01_30101",
    "name": {
      "en": "Flaming Fungi Dagger",
      "ja": "アチアチキノコの短剣",
      "zh": "灼热蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303045_01_30101",
    "name": {
      "en": "Flaming Big Boy",
      "ja": "フレイムヘヴィ",
      "zh": "火焰重刃"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Flame) Physian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303021_01_30201",
    "name": {
      "en": "Water Dagger",
      "ja": "ウォーターダガー",
      "zh": "水之短剑"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Water Chain",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;152%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;169%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 6770,
      "SPLv2": 6770,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303040_01_30201",
    "name": {
      "en": "Chilly Crimini Dagger",
      "ja": "ヒエヒエキノコの短剣",
      "zh": "冰冷蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +10%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303052_01_30201",
    "name": {
      "en": "Hefty Aquanaut",
      "ja": "アクアへビィ",
      "zh": "水之重刃"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Water) Physian's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303007_01_30301",
    "name": {
      "en": "Stormspawn",
      "ja": "嵐の落とし子",
      "zh": "风暴之子"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Storm Chain",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;152%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;169%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 6770,
      "SPLv2": 6770,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303050_01_30301",
    "name": {
      "en": "Blustery Button Dagger",
      "ja": "ビュウビュウキノコの短剣",
      "zh": "呼啸蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 41,
    "MaxAtk": 137,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303053_01_30301",
    "name": {
      "en": "Breezy Big Boy",
      "ja": "ブラストヘヴィ",
      "zh": "Breezy Big Boy"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 12,
    "MaxHp": 40,
    "MinAtk": 38,
    "MaxAtk": 129,
    "abilities11": {
      "name": "(Wind) Physian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303008_01_30401",
    "name": {
      "en": "Conscience",
      "ja": "心ある懐剣",
      "zh": "含心怀刀"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Royal Assault",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;305%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;339%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 7339,
      "SPLv2": 7339,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 64,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303054_01_30401",
    "name": {
      "en": "Dazzling Big Boy",
      "ja": "スターライトヘヴィ",
      "zh": "星光重刃"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 12,
    "MaxHp": 40,
    "MinAtk": 38,
    "MaxAtk": 129,
    "abilities11": {
      "name": "(Light) Physian's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303062_01_30401",
    "name": {
      "en": "Radiant Bolete Dagger",
      "ja": "キラキラキノコの短剣",
      "zh": "Radiant Bolete Dagger"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303009_01_30501",
    "name": {
      "en": "Assassin's Knife",
      "ja": "アサシンナイフ",
      "zh": "暗杀之刃"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Assassin Strike",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;152%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;169%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 6770,
      "SPLv2": 6770,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303026_01_39901",
    "name": {
      "en": "Bejeweled Dagger",
      "ja": "宝飾の短剣",
      "zh": "宝饰短剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 25,
    "MaxAtk": 84,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303032_01_39901",
    "name": {
      "en": "Gear Knife",
      "ja": "ギアーズナイフ",
      "zh": "齿轮短剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Ancient Assault",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of '''275%''' damage to enemies directly ahead.",
      "description2": "Deals 2 hits of '''305%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7339,
      "SPLv2": 7339,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303003_01_39901",
    "name": {
      "en": "Lover's Ally",
      "ja": "ラブナイフ",
      "zh": "爱之匕首"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Lover's Strike",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of '''137%''' damage to enemies directly ahead.",
      "description2": "Deals 4 hits of '''152%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 6770,
      "SPLv2": 6770,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 12,
    "MaxHp": 40,
    "MinAtk": 38,
    "MaxAtk": 129,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303039_01_39901",
    "name": {
      "en": "Mushroom Dagger",
      "ja": "キノコの短剣",
      "zh": "蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 25,
    "MaxAtk": 84,
    "abilities11": {
      "name": "Thaumian's Bane +10%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "303044_01_39901",
    "name": {
      "en": "Big Boy",
      "ja": "ベリーヘヴィ",
      "zh": "重刃"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 25,
    "MaxAtk": 84,
    "abilities11": {
      "name": "Physian's Bane +10%",
      "details": "Increases damage to [[Class Banes|physians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "303015_01_40101",
    "name": {
      "en": "Scarlet Talon",
      "ja": "紅蓮の短剣",
      "zh": "红莲短剑"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Scarlet Spiral",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;167%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;186%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 7028,
      "SPLv2": 7028,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 93,
    "MinAtk": 106,
    "MaxAtk": 354,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303042_01_40101",
    "name": {
      "en": "Sizzling Enoki Dagger",
      "ja": "ゲキアツキノコの短剣",
      "zh": "炽热蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 65,
    "MaxAtk": 218,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303045_01_40101",
    "name": {
      "en": "Big Boy of Justice",
      "ja": "ジャスティスヘヴィ",
      "zh": "正义重刃"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 65,
    "MaxAtk": 218,
    "abilities11": {
      "name": "(Flame) Physian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303065_01_40101",
    "name": {
      "en": "Scarlet Pain",
      "ja": "アクアへビィ",
      "zh": "猩红之痛"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 81,
    "MaxAtk": 273,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "303057_01_40101",
    "name": {
      "en": "Flame Sting",
      "ja": "バーストスティンガー",
      "zh": "Flame Sting"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 22,
    "MaxHp": 75,
    "MinAtk": 79,
    "MaxAtk": 265,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +15%",
      "details": "If the user is attuned to Flame: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 15
  },
  {
    "id": "303018_01_40201",
    "name": {
      "en": "Ultramarine Knife",
      "ja": "蒼海の短剣",
      "zh": "沧海短剑"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Ultramarine Spin",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;167%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;186%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 7028,
      "SPLv2": 7028,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 93,
    "MinAtk": 106,
    "MaxAtk": 354,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303040_01_40201",
    "name": {
      "en": "Chilly Chanterelle Dagger",
      "ja": "メチャヒエキノコの短剣",
      "zh": "冰冻蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 65,
    "MaxAtk": 218,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +15%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303051_01_40201",
    "name": {
      "en": "Bloodlust",
      "ja": "血潮啜る狂牙",
      "zh": "嗜血狂牙"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 81,
    "MaxAtk": 273,
    "abilities11": {
      "name": "(Water) Slayer's Strength +3%",
      "details": "If the user is attuned to Water: increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "303052_01_40201",
    "name": {
      "en": "Hefty Splasher",
      "ja": "スプラッシュヘビィ",
      "zh": "水花重刃"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": {
      "name": "(Water) Physian's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303058_01_40201",
    "name": {
      "en": "Frost Sting",
      "ja": "フルストスティンガー",
      "zh": "冰霜之刺"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 22,
    "MaxHp": 75,
    "MinAtk": 79,
    "MaxAtk": 265,
    "abilities11": {
      "name": "(Water) Full HP = Defense +15%",
      "details": "If the user is attuned to Water: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 15
  },
  {
    "id": "303029_01_40301",
    "name": {
      "en": "Queensflight",
      "ja": "古妃の短剣",
      "zh": "王妃短剑"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Queen's Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 15976,
      "SPLv2": 15976,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 106,
    "MinAtk": 98,
    "MaxAtk": 327,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303050_01_40301",
    "name": {
      "en": "Stormy Shiitake Dagger",
      "ja": "ボウフウキノコの短剣",
      "zh": "风暴蘑菇短剑"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 65,
    "MaxAtk": 218,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +15%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303053_01_40301",
    "name": {
      "en": "Big Boy of Fortitude",
      "ja": "エアロブリーズヘヴィ",
      "zh": "Big Boy of Fortitude"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 19,
    "MaxHp": 64,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": {
      "name": "(Wind) Physian's Bane +15%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Fury Penetrator",
      "details": "If the user is attuned to Wind: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303066_01_40301",
    "name": {
      "en": "Aero Agony",
      "ja": "エアリアルペイン",
      "zh": "Aero Agony"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 81,
    "MaxAtk": 273,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "303017_01_40401",
    "name": {
      "en": "Nightbreaker",
      "ja": "ナイトメアブレイカー",
      "zh": "噩梦短剑"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Night Spiral",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;167%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;186%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 7028,
      "SPLv2": 7028,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 93,
    "MinAtk": 106,
    "MaxAtk": 354,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303054_01_40401",
    "name": {
      "en": "Big Boy of Temperance",
      "ja": "メテオシャワーヘヴィ",
      "zh": "流星重刃"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 19,
    "MaxHp": 64,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": {
      "name": "(Light) Physian's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|physians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303062_01_40401",
    "name": {
      "en": "Luminous Morel Dagger",
      "ja": "ギンギラキノコの短剣",
      "zh": "Luminous Morel Dagger"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +15%",
      "details": "If the user is attuned to Light:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "303011_01_40501",
    "name": {
      "en": "Dark Sacrifice",
      "ja": "カースサクリファイス",
      "zh": "诅咒献祭"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Avaricious Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 15976,
      "SPLv2": 15976,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 106,
    "MinAtk": 98,
    "MaxAtk": 327,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303033_01_49901",
    "name": {
      "en": "Hardbreaker",
      "ja": "ハードブレイカー",
      "zh": "破坏短剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 61,
    "MaxAtk": 204,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303012_01_49901",
    "name": {
      "en": "Wyrmfang",
      "ja": "竜牙の短剣",
      "zh": "龙牙短剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Fanged Recovery",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 15976,
      "SPLv2": 15976,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 75,
    "MaxAtk": 252,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303034_01_49901",
    "name": {
      "en": "The Dreamer's Greatsword",
      "ja": "夢想の大剣",
      "zh": "梦想大剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Dreamer's Spiral",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of '''150%''' damage to enemies directly ahead.",
      "description2": "Deals 4 hits of '''167%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7028,
      "SPLv2": 7028,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 81,
    "MaxAtk": 273,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303047_01_49901",
    "name": {
      "en": "Slaughterlust",
      "ja": "仇屠る狂牙",
      "zh": "屠仇狂牙"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 63,
    "MaxAtk": 210,
    "abilities11": {
      "name": "Slayer's Strength +3%",
      "details": "Increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": 0
  },
  {
    "id": "303056_01_49901",
    "name": {
      "en": "Hellish Sting",
      "ja": "ヘルスティンガー",
      "zh": "地狱之刺"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 61,
    "MaxAtk": 204,
    "abilities11": {
      "name": "Full HP = Defense +15%",
      "details": "Increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 15
      }
    },
    "abilities21": 0
  },
  {
    "id": "303064_01_49901",
    "name": {
      "en": "Impact Thrust",
      "ja": "スラストペイン",
      "zh": "迅捷之痛"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 63,
    "MaxAtk": 210,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "303013_01_50101",
    "name": {
      "en": "Aeternal Flame",
      "ja": "久遠の焔",
      "zh": "久远之焰"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Aeternal Assault",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;148%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;164%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 7323,
      "SPLv2": 7323,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 144,
    "MinAtk": 163,
    "MaxAtk": 545,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303065_01_50101",
    "name": {
      "en": "Vermillion Pain",
      "ja": "ヴァーミリオンペイン",
      "zh": "朱红之痛"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 93,
    "MinAtk": 106,
    "MaxAtk": 354,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "303057_01_50101",
    "name": {
      "en": "Searing Stinger",
      "ja": "クリムゾンスティンガー",
      "zh": "Searing Stinger"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 29,
    "MaxHp": 98,
    "MinAtk": 103,
    "MaxAtk": 344,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +20%",
      "details": "If the user is attuned to Flame: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 20
  },
  {
    "id": "303020_01_50201",
    "name": {
      "en": "Lux Lamina",
      "ja": "ラクスラーミナ",
      "zh": "湖光之刃"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Cobalt Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''40%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 7103,
      "SPLv2": 7103,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 45,
    "MaxHp": 152,
    "MinAtk": 158,
    "MaxAtk": 529,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303051_01_50201",
    "name": {
      "en": "Gorelust",
      "ja": "鮮血浴びる狂牙",
      "zh": "浴血狂牙"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 29,
    "MaxHp": 98,
    "MinAtk": 103,
    "MaxAtk": 344,
    "abilities11": {
      "name": "(Water) Slayer's Strength +4%",
      "details": "If the user is attuned to Water: increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "303058_01_50201",
    "name": {
      "en": "Frigid Sting",
      "ja": "フリジットスティンガー",
      "zh": "冰冻之刺"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 29,
    "MaxHp": 98,
    "MinAtk": 103,
    "MaxAtk": 344,
    "abilities11": {
      "name": "(Water) Full HP = Defense +20%",
      "details": "If the user is attuned to Water: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 20
  },
  {
    "id": "303028_01_50301",
    "name": {
      "en": "Karlsnautr",
      "ja": "カールスナウト",
      "zh": "清风灵剑"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Saga of the Soul",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;148%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;164%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 7323,
      "SPLv2": 7323,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 144,
    "MinAtk": 163,
    "MaxAtk": 545,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303066_01_50301",
    "name": {
      "en": "Turbulent Agony",
      "ja": "タービュラントペイン",
      "zh": "Turbulent Agony"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 93,
    "MinAtk": 106,
    "MaxAtk": 354,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "303030_01_50401",
    "name": {
      "en": "Thunderblade Sugaar",
      "ja": "雷刃シュガール",
      "zh": "雷刃修伽尔"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Sugaar's Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''40%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 7103,
      "SPLv2": 7103,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 45,
    "MaxHp": 152,
    "MinAtk": 158,
    "MaxAtk": 529,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303031_01_50501",
    "name": {
      "en": "Honor Edge",
      "ja": "名誉の紫短剣",
      "zh": "名誉紫短剑"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Unwavering Assault",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;148%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;164%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 7323,
      "SPLv2": 7323,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 144,
    "MinAtk": 163,
    "MaxAtk": 545,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303035_01_59901",
    "name": {
      "en": "Kris Naga",
      "ja": "クリスナーガ",
      "zh": "马来克力士剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 30,
    "MaxHp": 102,
    "MinAtk": 106,
    "MaxAtk": 355,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303014_01_59901",
    "name": {
      "en": "Treasure of the Iron Rose",
      "ja": "鉄薔薇摘みの宝剣",
      "zh": "铁蔷薇采摘宝剑"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Thorned Assault",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of '''133%''' damage to enemies directly ahead.",
      "description2": "Deals 5 hits of '''148%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7323,
      "SPLv2": 7323,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 35,
    "MaxHp": 118,
    "MinAtk": 134,
    "MaxAtk": 447,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "303036_01_59901",
    "name": {
      "en": "Hedgehog",
      "ja": "ヘッジホッグ",
      "zh": "刺猬之刃"
    },
    "weapon": "Dagger",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Hedgehog's Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 7103,
      "SPLv2": 7103,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 37,
    "MaxHp": 124,
    "MinAtk": 130,
    "MaxAtk": 434,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304018_01_30101",
    "name": {
      "en": "Argent Battleaxe",
      "ja": "白銀の騎士斧",
      "zh": "白银骑士之斧"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Argent Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;932%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 8824,
      "SPLv2": 8824,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 70,
    "MaxAtk": 234,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304006_01_30201",
    "name": {
      "en": "Axe of the Waves",
      "ja": "カレントアックス",
      "zh": "水流之斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Torrential Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;932%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 8824,
      "SPLv2": 8824,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 70,
    "MaxAtk": 234,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304052_01_30201",
    "name": {
      "en": "Snowy Relic",
      "ja": "スノーレリック",
      "zh": "冰雪遗物之斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 12,
    "MaxHp": 41,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Water) Undead's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "304007_01_30301",
    "name": {
      "en": "Singing Cyclone",
      "ja": "サイクロンシンガー",
      "zh": "飓风歌者"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Cyclonic Swing",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;466%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;518%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals wind damage to surrounding enemies and draws them toward the user.",
      "Sp": 8603,
      "SPLv2": 8603,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 65,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304008_01_30401",
    "name": {
      "en": "Flash Axe",
      "ja": "フラッシュアックス",
      "zh": "闪光战斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Flash Swing",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;466%&lt;/span&gt; light damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;518%&lt;/span&gt; light damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals light-based damage to surrounding enemies and draws them toward the user.",
      "Sp": 8603,
      "SPLv2": 8603,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 65,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304053_01_30401",
    "name": {
      "en": "Abandoned Relic",
      "ja": "シャインレリック",
      "zh": "闪耀遗物之斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 12,
    "MaxHp": 41,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Light) Undead's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "304009_01_30501",
    "name": {
      "en": "Soulreaver",
      "ja": "ソウルリーパー",
      "zh": "灵魂收割者"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Reaving Swing",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;466%&lt;/span&gt; shadow damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;518%&lt;/span&gt; shadow damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals shadow damage to surrounding enemies and draws them toward the user.",
      "Sp": 8603,
      "SPLv2": 8603,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 65,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304025_01_39901",
    "name": {
      "en": "Warrior's Axe",
      "ja": "戦士の斧",
      "zh": "战士之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 26,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304031_01_39901",
    "name": {
      "en": "Ennobled Axe",
      "ja": "ノーブルアックス",
      "zh": "高贵之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Ennobled Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of '''839%''' damage to enemies directly ahead.",
      "description2": "Deals 1 hit of '''932%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 8824,
      "SPLv2": 8824,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 44,
    "MaxAtk": 147,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304032_01_39901",
    "name": {
      "en": "Juggernaut",
      "ja": "ウォールクラッシャー",
      "zh": "城墙破坏者"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Juggernaut's Swing",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of '''419%''' damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of '''466%''' damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals non-elemental damage to surrounding enemies and draws them toward the user.",
      "Sp": 8603,
      "SPLv2": 8603,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    },
    "MinHp": 12,
    "MaxHp": 41,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304037_01_39901",
    "name": {
      "en": "Reclusive Relic",
      "ja": "レリックアックス",
      "zh": "遗物之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 26,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": {
      "name": "Undead's Bane +10%",
      "details": "Increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "304010_01_40101",
    "name": {
      "en": "Crimsonclaw",
      "ja": "クリムゾンアックス",
      "zh": "绯红战斧"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Crimson Swing",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;513%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;570%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 114,
    "MaxAtk": 380,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304043_01_40101",
    "name": {
      "en": "Heavenfire Gaze",
      "ja": "天炎グランサイト",
      "zh": "天火奇观之斧"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 73,
    "MinAtk": 87,
    "MaxAtk": 292,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "304011_01_40201",
    "name": {
      "en": "Aqua Labrys",
      "ja": "ディープラブリュス",
      "zh": "深海双刃斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Aqua Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 107,
    "MaxAtk": 357,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304050_01_40201",
    "name": {
      "en": "Wave Crux",
      "ja": "怒涛の戦斧",
      "zh": "怒涛战斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 82,
    "MaxAtk": 275,
    "abilities11": {
      "name": "(Water) Slayer's Strength +3%",
      "details": "If the user is attuned to Water: increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "304052_01_40201",
    "name": {
      "en": "Blizzard Relic",
      "ja": "ブリザードレリック",
      "zh": "暴雪遗物之斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 19,
    "MaxHp": 65,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Water) Undead's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "304016_01_40301",
    "name": {
      "en": "Winged Destruction",
      "ja": "双色翼の砕斧",
      "zh": "双色翼碎斧"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Winged Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 107,
    "MaxAtk": 357,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304054_01_40301",
    "name": {
      "en": "Stormwind Gaze",
      "ja": "翠嵐グランサイト",
      "zh": "翠岚奇观之斧"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 82,
    "MaxAtk": 275,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "304015_01_40401",
    "name": {
      "en": "Shining Axe",
      "ja": "シャイニングアックス",
      "zh": "闪耀之斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Lightning's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 107,
    "MaxAtk": 357,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304045_01_40401",
    "name": {
      "en": "Starlight Gaze",
      "ja": "星煌グランサイト",
      "zh": "星煌奇观之斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 73,
    "MinAtk": 87,
    "MaxAtk": 292,
    "abilities11": {
      "name": "(Light) Skill Prep +25%",
      "details": "If the user is attuned to Light:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "304053_01_40401",
    "name": {
      "en": "Banished Relic",
      "ja": "バニシングレリック",
      "zh": "灭绝遗物之斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 19,
    "MaxHp": 65,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Light) Undead's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "304030_01_40501",
    "name": {
      "en": "Traitor's Despair",
      "ja": "ディスペアーアックス",
      "zh": "绝望之斧"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Traitor Smiter",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;513%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;570%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 114,
    "MaxAtk": 380,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304026_01_49901",
    "name": {
      "en": "Plain Axe",
      "ja": "コモンアックス",
      "zh": "平凡之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304033_01_49901",
    "name": {
      "en": "The Tyrant",
      "ja": "タイラントアックス",
      "zh": "暴君之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Tyrant Swing",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of '''462%''' damage to enemies directly ahead.",
      "description2": "Deals 2 hits of '''513%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 21,
    "MaxHp": 73,
    "MinAtk": 87,
    "MaxAtk": 292,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304034_01_49901",
    "name": {
      "en": "Souvenir Axe",
      "ja": "スーベニアアックス",
      "zh": "纪念战斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Memento's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''15%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 6678,
      "SPLv2": 6678,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 81,
    "MinAtk": 82,
    "MaxAtk": 275,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304042_01_49901",
    "name": {
      "en": "Unerring Gaze",
      "ja": "グランサイト",
      "zh": "奇观之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 67,
    "MaxAtk": 225,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "304047_01_49901",
    "name": {
      "en": "Fury Crux",
      "ja": "怒号の戦斧",
      "zh": "怒号战斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 67,
    "MaxAtk": 225,
    "abilities11": {
      "name": "Slayer's Strength +3%",
      "details": "Increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": 0
  },
  {
    "id": "304027_01_50101",
    "name": {
      "en": "Axe of the Blazing King",
      "ja": "ヴォルカニックアックス",
      "zh": "火山战斧"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Blazing Boost",
      "icon": "Icon_Skill_032",
      "description1": "Adds '''40%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description2": "Adds '''50%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description3": "Increases the user's critical damage by '''50%''' for 30 seconds.",
      "Sp": 4711,
      "SPLv2": 4711,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 46,
    "MaxHp": 155,
    "MinAtk": 170,
    "MaxAtk": 567,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304043_01_50101",
    "name": {
      "en": "Heavenwrath Gaze",
      "ja": "天炎グランサイト・レイジ",
      "zh": "天火奇观・震怒"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 114,
    "MaxAtk": 380,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "304028_01_50201",
    "name": {
      "en": "Grand Seadragon",
      "ja": "グランドシードラゴン",
      "zh": "海龙战斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Seadragon's Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;376%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;418%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 175,
    "MaxAtk": 584,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304050_01_50201",
    "name": {
      "en": "Maelstrom Crux",
      "ja": "狂潤怒涛の戦斧",
      "zh": "狂澜怒涛战斧"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 114,
    "MaxAtk": 380,
    "abilities11": {
      "name": "(Water) Slayer's Strength +4%",
      "details": "If the user is attuned to Water: increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "304029_01_50301",
    "name": {
      "en": "Axe of the Southern Cross",
      "ja": "サザンクロスアックス",
      "zh": "南十字之斧"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Southern Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;376%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;418%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 175,
    "MaxAtk": 584,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304054_01_50301",
    "name": {
      "en": "Stormwrath Gaze",
      "ja": "翠嵐グランサイト・マリス",
      "zh": "翠岚奇观之斧・恶意"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 31,
    "MaxHp": 105,
    "MinAtk": 107,
    "MaxAtk": 357,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "304013_01_50401",
    "name": {
      "en": "Radiant Swath",
      "ja": "オプティカルアックス",
      "zh": "圣光战斧"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Radiant Boost",
      "icon": "Icon_Skill_032",
      "description1": "Adds '''40%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description2": "Adds '''50%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 4711,
      "SPLv2": 4711,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 175,
    "MaxAtk": 584,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304045_01_50401",
    "name": {
      "en": "Starwrath Gaze",
      "ja": "星煌グランサイト・ラース",
      "zh": "星煌奇观・愤怒"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 114,
    "MaxAtk": 380,
    "abilities11": {
      "name": "(Light) Skill Prep +50%",
      "details": "If the user is attuned to Light:  fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Light) Stunned Punisher +15%",
      "details": "If the user is attuned to Light:  increases damage to stunned enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "304014_01_50501",
    "name": {
      "en": "Primordial Titan",
      "ja": "ギガスセリクス",
      "zh": "巨灵霹雳"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Primordial Boost",
      "icon": "Icon_Skill_032",
      "description1": "Adds '''40%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description2": "Adds '''50%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description3": "Adds '''50%''' to the modifier applied to the user's critical damage for 30 seconds.",
      "Sp": 4711,
      "SPLv2": 4711,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 46,
    "MaxHp": 155,
    "MinAtk": 170,
    "MaxAtk": 567,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304012_01_59901",
    "name": {
      "en": "Victory Axe",
      "ja": "ヴィクトリーアックス",
      "zh": "胜利之斧"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 32,
    "MaxHp": 109,
    "MinAtk": 110,
    "MaxAtk": 368,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304035_01_59901",
    "name": {
      "en": "Executioner Axe Strafe",
      "ja": "処刑斧シュトラーフェ",
      "zh": "处刑斧制裁"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Executioner's Impact",
      "icon": "Icon_Skill_011",
      "description1": "Deals 3 hits of '''338%''' damage to enemies directly ahead.",
      "description2": "Deals 3 hits of '''376%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 9025,
      "SPLv2": 9025,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 36,
    "MaxHp": 120,
    "MinAtk": 143,
    "MaxAtk": 479,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "304036_01_59901",
    "name": {
      "en": "Halfling's Broadaxe",
      "ja": "怪童の鉞",
      "zh": "怪童之钺"
    },
    "weapon": "Axe",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Halfling's Focus",
      "icon": "Icon_Skill_032",
      "description1": "Adds '''30%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description2": "Adds '''40%''' to the modifier applied to the user's critical damage for 20 seconds.",
      "description3": "Adds '''50%''' to the modifier applied to the user's critical damage for 30 seconds.",
      "Sp": 4711,
      "SPLv2": 4711,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 38,
    "MaxHp": 127,
    "MinAtk": 139,
    "MaxAtk": 465,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305006_01_30101",
    "name": {
      "en": "Unsung Hero's Lance",
      "ja": "名もなき勇者たちの槍",
      "zh": "无名勇者之枪"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Hero's Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;685%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;761%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "Deals flame damage to the target and enemies near it.",
      "Sp": 7054,
      "SPLv2": 7054,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305047_01_30101",
    "name": {
      "en": "Lumenspore Lance",
      "ja": "パラソルバーナー",
      "zh": "喷火阳伞"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305080_01_30101",
    "name": {
      "en": "Soulfire Spear",
      "ja": "ソウルファイアスピア",
      "zh": "Soulfire Spear"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +10%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "305007_01_30201",
    "name": {
      "en": "Azure Jewel",
      "ja": "ブルージュエリー",
      "zh": "蓝宝石钢枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Azure Whirlwind",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;343%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;381%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals water damage to surrounding enemies.",
      "Sp": 7668,
      "SPLv2": 7668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305045_01_30201",
    "name": {
      "en": "Bubblespore Lance",
      "ja": "パラソルバブル",
      "zh": "泡沫阳伞"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +10%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305060_01_30201",
    "name": {
      "en": "Shiverlance",
      "ja": "戦慄の槍",
      "zh": "战栗之枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Water) Undead's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305017_01_30301",
    "name": {
      "en": "Gale Spear",
      "ja": "ゲイルスピア",
      "zh": "疾风之枪"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Gale's Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;685%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;761%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description3": "Deals wind damage to the target and nearby enemies.",
      "Sp": 7054,
      "SPLv2": 7054,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305057_01_30301",
    "name": {
      "en": "Gustspore Lance",
      "ja": "パラソルストリーム",
      "zh": "激流阳伞"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305008_01_30401",
    "name": {
      "en": "Moonpiercer",
      "ja": "ムーンピック",
      "zh": "月之枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Lunar Whirlwind",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;343%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;381%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light-based damage to surrounding enemies.",
      "Sp": 7668,
      "SPLv2": 7668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305028_01_30401",
    "name": {
      "en": "Jack-o'-Lance",
      "ja": "ジャック・オ・スピア",
      "zh": "杰克南瓜枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Pumpkin Barrage",
      "icon": "Icon_Skill_012",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;229%&lt;/span&gt;  light damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;254%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "",
      "Sp": 7668,
      "SPLv2": 7668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 55,
    "MinAtk": 59,
    "MaxAtk": 198,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305061_01_30401",
    "name": {
      "en": "Outcast's Wish",
      "ja": "願望の槍",
      "zh": "祈愿之枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 37,
    "MaxAtk": 125,
    "abilities11": {
      "name": "(Light) Undead's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305070_01_30401",
    "name": {
      "en": "Lightspore Lance",
      "ja": "パラソルライト",
      "zh": "Lightspore Lance"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 37,
    "MaxAtk": 125,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305034_01_30501",
    "name": {
      "en": "Lance of the Dark",
      "ja": "ダークスピア",
      "zh": "暗之枪"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Dark Whirlwind",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;343%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;381%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description3": "Deals shadow damage to surrounding enemies.",
      "Sp": 7668,
      "SPLv2": 7668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305062_01_30501",
    "name": {
      "en": "Quavering Bloodlust",
      "ja": "ブラッディスピア",
      "zh": "鲜血之枪"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +10%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305039_01_39901",
    "name": {
      "en": "Trident",
      "ja": "トライデント",
      "zh": "三叉戟"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305013_01_39901",
    "name": {
      "en": "Mailbreaker",
      "ja": "ブレイクスピア",
      "zh": "破坏之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Shattering Whirlwind",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of '''309%''' damage to surrounding enemies.",
      "description2": "Deals 2 hits of '''343%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 7668,
      "SPLv2": 7668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 41,
    "MaxAtk": 139,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305010_01_39901",
    "name": {
      "en": "Drill Lance",
      "ja": "ドリルランス",
      "zh": "钻头枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Spiralling Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of '''617%''' damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of '''685%''' damage to the target and nearby enemies.",
      "description3": "Deals non-elemental damage to the target and nearby enemies.",
      "Sp": 7054,
      "SPLv2": 7054,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 42,
    "MaxAtk": 143,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305044_01_39901",
    "name": {
      "en": "Leechspore Lance",
      "ja": "パラソルランス",
      "zh": "尖枪阳伞"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": {
      "name": "Thaumian's Bane +10%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "305049_01_39901",
    "name": {
      "en": "Solitary Desire",
      "ja": "未練の槍",
      "zh": "怨念之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": {
      "name": "Undead's Bane +10%",
      "details": "Increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "305063_01_39901",
    "name": {
      "en": "Heartseeker",
      "ja": "テリブルスピア",
      "zh": "恐怖之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 24,
    "MinAtk": 26,
    "MaxAtk": 87,
    "abilities11": {
      "name": "Blinded Punisher +10%",
      "details": "Increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "305031_01_40101",
    "name": {
      "en": "Flameserpent",
      "ja": "焔大蛇",
      "zh": "焰蟒"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Way of the Serpent",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''15%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''30%''' for 30 seconds.",
      "Sp": 5973,
      "SPLv2": 5973,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 29,
    "MaxHp": 99,
    "MinAtk": 107,
    "MaxAtk": 358,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305047_01_40101",
    "name": {
      "en": "Triggerspore Lance",
      "ja": "パラソルイグニション",
      "zh": "焚身阳伞"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305077_01_40101",
    "name": {
      "en": "Ragefire Lance",
      "ja": "猛炎の槍",
      "zh": "烈焰之枪"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 22,
    "MaxHp": 76,
    "MinAtk": 82,
    "MaxAtk": 276,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "305065_01_40101",
    "name": {
      "en": "Reisel, the Solar Flare",
      "ja": "紅炎槍ライゼル",
      "zh": "Reisel, the Solar Flare"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 85,
    "MaxAtk": 284,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +15%",
      "details": "If the user is attuned to Flame: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 15
  },
  {
    "id": "305080_01_40101",
    "name": {
      "en": "Spiritflame Spear",
      "ja": "スピリットフレイムスピア",
      "zh": "Spiritflame Spear"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +15%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "305016_01_40201",
    "name": {
      "en": "Abyssal Prize",
      "ja": "大海の宝槍",
      "zh": "大海宝枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Abyssal Barrage",
      "icon": "Icon_Skill_012",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;151%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;168%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 7282,
      "SPLv2": 7282,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 94,
    "MinAtk": 110,
    "MaxAtk": 369,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305045_01_40201",
    "name": {
      "en": "Shatterspore Lance",
      "ja": "パラソルスプラッシュ",
      "zh": "喷溅阳伞"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 58,
    "MinAtk": 68,
    "MaxAtk": 227,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +15%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305058_01_40201",
    "name": {
      "en": "Tidal Beast",
      "ja": "ウェーブビースト",
      "zh": "波澜凶兽之枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 85,
    "MaxAtk": 284,
    "abilities11": {
      "name": "(Water) Slayer's Strength +3%",
      "details": "If the user is attuned to Water: increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "305060_01_40201",
    "name": {
      "en": "Callous Lance",
      "ja": "戦慄と酷薄の槍",
      "zh": "战栗与冷酷之枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Water) Undead's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305066_01_40201",
    "name": {
      "en": "Strohm",
      "ja": "海渦槍シュトロム",
      "zh": "海涡枪斯托罗姆"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 24,
    "MaxHp": 80,
    "MinAtk": 80,
    "MaxAtk": 267,
    "abilities11": {
      "name": "(Water) Full HP = Defense +15%",
      "details": "If the user is attuned to Water: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 15
  },
  {
    "id": "305011_01_40301",
    "name": {
      "en": "Tempest Lance",
      "ja": "テンペストスピア",
      "zh": "风暴之枪"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Tempest Barrage",
      "icon": "Icon_Skill_012",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;151%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;168%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 7282,
      "SPLv2": 7282,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 94,
    "MinAtk": 110,
    "MaxAtk": 369,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305057_01_40301",
    "name": {
      "en": "Tornadospore Lance",
      "ja": "パラソルトルネード",
      "zh": "龙卷阳伞"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +15%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305078_01_40301",
    "name": {
      "en": "Stormsiege Lance",
      "ja": "震嵐の槍",
      "zh": "Stormsiege Lance"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 24,
    "MaxHp": 80,
    "MinAtk": 80,
    "MaxAtk": 267,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "305012_01_40401",
    "name": {
      "en": "Thunderbolt",
      "ja": "ライトニングランス",
      "zh": "电击长枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Thunder's Focus",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''15%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''30%''' for 30 seconds.",
      "Sp": 5973,
      "SPLv2": 5973,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 29,
    "MaxHp": 99,
    "MinAtk": 107,
    "MaxAtk": 358,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305061_01_40401",
    "name": {
      "en": "Lonesome Wish",
      "ja": "願望と奇跡の槍",
      "zh": "祈愿与奇迹之枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Light) Undead's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305070_01_40401",
    "name": {
      "en": "Shinespore Lance",
      "ja": "パラソルシャイン",
      "zh": "Shinespore Lance"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +15%",
      "details": "If the user is attuned to Light:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305035_01_40501",
    "name": {
      "en": "Hellish Lance",
      "ja": "ランスオブヘル",
      "zh": "地狱之枪"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Hellish Focus",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''15%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''30%''' for 30 seconds.",
      "Sp": 5973,
      "SPLv2": 5973,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 29,
    "MaxHp": 99,
    "MinAtk": 107,
    "MaxAtk": 358,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305062_01_40501",
    "name": {
      "en": "Spear of Tragedy",
      "ja": "バッドエンドスピア",
      "zh": "末路之枪"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 66,
    "MaxAtk": 220,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +15%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "305029_01_49901",
    "name": {
      "en": "Strong Halberd",
      "ja": "ストロングハルバード",
      "zh": "强者之戟"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305040_01_49901",
    "name": {
      "en": "Lance of the Innocent",
      "ja": "イノセントスピア",
      "zh": "圣洁之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Sharp Focus",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''10%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''15%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''30%''' for 30 seconds.",
      "Sp": 5973,
      "SPLv2": 5973,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 22,
    "MaxHp": 76,
    "MinAtk": 82,
    "MaxAtk": 276,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305041_01_49901",
    "name": {
      "en": "Ironside Lance",
      "ja": "鉄騎兵の槍",
      "zh": "铁骑兵之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Ironsides's Barrage",
      "icon": "Icon_Skill_012",
      "description1": "Deals 5 hits of '''136%''' damage to enemies directly ahead.",
      "description2": "Deals 5 hits of '''151%''' damage to enemies directly ahead.",
      "description3": "Deals non-elemental damage to enemies directly ahead.",
      "Sp": 7282,
      "SPLv2": 7282,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    },
    "MinHp": 21,
    "MaxHp": 72,
    "MinAtk": 85,
    "MaxAtk": 284,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305054_01_49901",
    "name": {
      "en": "Piercing Beast",
      "ja": "ワイルドビースト",
      "zh": "狂野凶兽之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 65,
    "MaxAtk": 219,
    "abilities11": {
      "name": "Slayer's Strength +3%",
      "details": "Increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": 0
  },
  {
    "id": "305064_01_49901",
    "name": {
      "en": "Attacker Lance",
      "ja": "撃槍アングリフ",
      "zh": "击枪安格里夫"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 61,
    "MaxAtk": 206,
    "abilities11": {
      "name": "Full HP = Defense +15%",
      "details": "Increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 15
      }
    },
    "abilities21": 0
  },
  {
    "id": "305076_01_49901",
    "name": {
      "en": "Great Aquila Lance",
      "ja": "巨鷲の槍",
      "zh": "巨鹫之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 63,
    "MaxAtk": 212,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "305030_01_50101",
    "name": {
      "en": "Calamity Trigger",
      "ja": "カラミティトリガー",
      "zh": "灾祸之匙"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Calamitous Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;415%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;461%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "Deals flame damage to the target and enemies near it.",
      "Sp": 8111,
      "SPLv2": 8111,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 145,
    "MinAtk": 170,
    "MaxAtk": 567,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305077_01_50101",
    "name": {
      "en": "Flamedance Lance",
      "ja": "炎轟乱舞の槍",
      "zh": "炎轰乱舞之枪"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 29,
    "MaxHp": 99,
    "MinAtk": 107,
    "MaxAtk": 358,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "305065_01_50101",
    "name": {
      "en": "Reiselfeld, the Solar Spray",
      "ja": "紅炎槍ライゼルフェルド",
      "zh": "Reiselfeld, the Solar Spray"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 94,
    "MinAtk": 110,
    "MaxAtk": 369,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +20%",
      "details": "If the user is attuned to Flame: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 20
  },
  {
    "id": "305014_01_50201",
    "name": {
      "en": "Ocean Lord",
      "ja": "オーシャンロード",
      "zh": "破浪之枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Ocean's Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to surrounding teammates with '''54%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to surrounding teammates with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to surrounding teammates.",
      "Sp": 14410,
      "SPLv2": 14410,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 49,
    "MaxHp": 165,
    "MinAtk": 156,
    "MaxAtk": 523,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305058_01_50201",
    "name": {
      "en": "Vortex Beast",
      "ja": "ヴォルテックスビースト",
      "zh": "漩涡之枪"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 32,
    "MaxHp": 107,
    "MinAtk": 102,
    "MaxAtk": 340,
    "abilities11": {
      "name": "(Water) Slayer's Strength +4%",
      "details": "If the user is attuned to Water: increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "305066_01_50201",
    "name": {
      "en": "Strohm Mare",
      "ja": "海渦槍シュトロムマーレ",
      "zh": "海涡枪斯托罗姆玛雷"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 31,
    "MaxHp": 104,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": {
      "name": "(Water) Full HP = Defense +20%",
      "details": "If the user is attuned to Water: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Water) High Brunhilda's Bane",
      "details": "If the user is attuned to Water:  increases damage to High Brunhilda by 20%.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {}
    },
    "req": "Water",
    "incDef": 20
  },
  {
    "id": "305032_01_50301",
    "name": {
      "en": "Spear of the Northern Cross",
      "ja": "ノーザンクロススピア",
      "zh": "北十字之枪"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Northern Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to surrounding teammates with '''54%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to surrounding teammates with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to surrounding teammates.",
      "Sp": 14410,
      "SPLv2": 14410,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 49,
    "MaxHp": 165,
    "MinAtk": 156,
    "MaxAtk": 523,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305078_01_50301",
    "name": {
      "en": "Stormpiercer Lance",
      "ja": "狂風大嵐の槍",
      "zh": "Stormpiercer Lance"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 31,
    "MaxHp": 104,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "305033_01_50401",
    "name": {
      "en": "Thunder King's Greatspear",
      "ja": "爆雷の豪槍",
      "zh": "雷霆豪枪"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Thunder's Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;415%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;461%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description3": "Deals light-based damage to the target and enemies near it.",
      "Sp": 8111,
      "SPLv2": 8111,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 145,
    "MinAtk": 170,
    "MaxAtk": 567,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305036_01_50501",
    "name": {
      "en": "Mistilteinn",
      "ja": "ミストルティン",
      "zh": "米斯特汀"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Heaven's Mistletoe",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;415%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;461%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description3": "Deals shadow damage to the target and enemies near it.",
      "Sp": 8111,
      "SPLv2": 8111,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 145,
    "MinAtk": 170,
    "MaxAtk": 567,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305015_01_59901",
    "name": {
      "en": "Pactspear",
      "ja": "ロウフルスピア",
      "zh": "护法之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 30,
    "MaxHp": 103,
    "MinAtk": 110,
    "MaxAtk": 369,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305042_01_59901",
    "name": {
      "en": "Compass Needle",
      "ja": "羅針槍",
      "zh": "罗盘枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Explosive Descent",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of '''373%''' damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of '''415%''' damage to the target and nearby enemies.",
      "description3": "Deals non-elemental damage to the target and nearby enemies.",
      "Sp": 8111,
      "SPLv2": 8111,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 35,
    "MaxHp": 119,
    "MinAtk": 139,
    "MaxAtk": 465,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "305043_01_59901",
    "name": {
      "en": "Gae Bolg",
      "ja": "ゲイボルグ",
      "zh": "千棘刺之枪"
    },
    "weapon": "Lance",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Accursed Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to surrounding teammates with '''54%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to surrounding teammates with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to surrounding teammates.",
      "Sp": 14410,
      "SPLv2": 14410,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 40,
    "MaxHp": 135,
    "MinAtk": 128,
    "MaxAtk": 429,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306006_01_30101",
    "name": {
      "en": "Flightfyre",
      "ja": "フライトファイア",
      "zh": "飞火弓"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Flare Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;235%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;261%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 7185,
      "SPLv2": 7185,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306041_01_30101",
    "name": {
      "en": "Firefungus",
      "ja": "ファイアファンガス",
      "zh": "火蘑弓"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306066_01_30101",
    "name": {
      "en": "Flickertorch Bow",
      "ja": "ゆらめく燈火の弓",
      "zh": "Flickertorch Bow"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 39,
    "MinAtk": 38,
    "MaxAtk": 127,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +10%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "306007_01_30201",
    "name": {
      "en": "Tidal Bow",
      "ja": "オーシャンボウ",
      "zh": "深海之弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Tidal Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''15%''' for 30 seconds.",
      "Sp": 6151,
      "SPLv2": 6151,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 62,
    "MaxAtk": 207,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306039_01_30201",
    "name": {
      "en": "Frostfungus",
      "ja": "アイスファンガス",
      "zh": "冰蘑弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +10%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306050_01_30201",
    "name": {
      "en": "Snowsquall Bow",
      "ja": "霜雪の弓",
      "zh": "霜雪之弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": {
      "name": "(Water) Undead's Bane +10%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306003_01_30301",
    "name": {
      "en": "Proof of the Wind",
      "ja": "エアリアルプルーフ",
      "zh": "狂风试炼"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Wind Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;235%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;261%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "Deals wind damage to enemies in a line.",
      "Sp": 7185,
      "SPLv2": 7185,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306048_01_30301",
    "name": {
      "en": "Windfungus",
      "ja": "ウインドファンガス",
      "zh": "风蘑弓"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306009_01_30401",
    "name": {
      "en": "Galvanic Bow",
      "ja": "エレクトロボウ",
      "zh": "雷电战弓"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Galvanic Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;235%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;261%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals light-based damage to enemies in a line.",
      "Sp": 7185,
      "SPLv2": 7185,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306051_01_30401",
    "name": {
      "en": "Cracklescent Bow",
      "ja": "清香の弓",
      "zh": "清香之弓"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 40,
    "MaxAtk": 135,
    "abilities11": {
      "name": "(Light) Undead's Bane +10%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306054_01_30401",
    "name": {
      "en": "Flashfungus",
      "ja": "フラッシュファンガス",
      "zh": "Flashfungus"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 40,
    "MaxAtk": 135,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306018_01_30501",
    "name": {
      "en": "Cimmerian Bow",
      "ja": "ダークボウ",
      "zh": "暗之魔弓"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Cimmerian Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''15%''' for 30 seconds.",
      "Sp": 6151,
      "SPLv2": 6151,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 62,
    "MaxAtk": 207,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306052_01_30501",
    "name": {
      "en": "Cacklemurk",
      "ja": "闇に哄笑する弓",
      "zh": "暗黑疯笑弓"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +10%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306026_01_39901",
    "name": {
      "en": "Composite Bow",
      "ja": "コンポジットボウ",
      "zh": "复合弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 23,
    "MinAtk": 24,
    "MaxAtk": 82,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306012_01_39901",
    "name": {
      "en": "Machine Bow",
      "ja": "マシンナリーボウ",
      "zh": "机械弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Mechanical Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of '''212%''' damage to enemies in a line.",
      "description2": "Deals 3 shots of '''235%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 7185,
      "SPLv2": 7185,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 10,
    "MaxHp": 35,
    "MinAtk": 40,
    "MaxAtk": 135,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306032_01_39901",
    "name": {
      "en": "Hunter's Bow",
      "ja": "ハンターボウ",
      "zh": "猎手弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Hunter's Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''20%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''15%''' for 30 seconds.",
      "Sp": 6151,
      "SPLv2": 6151,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 39,
    "MaxAtk": 131,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306038_01_39901",
    "name": {
      "en": "Fungus Bow",
      "ja": "ファンガスボウ",
      "zh": "蘑弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 23,
    "MinAtk": 24,
    "MaxAtk": 82,
    "abilities11": {
      "name": "Thaumian's Bane +10%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "306043_01_39901",
    "name": {
      "en": "Fragrant Bow",
      "ja": "香の弓",
      "zh": "芳香之弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 22,
    "MinAtk": 25,
    "MaxAtk": 85,
    "abilities11": {
      "name": "Undead's Bane +10%",
      "details": "Increases damage to [[Class Banes|undead]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "306053_01_39901",
    "name": {
      "en": "Mockery",
      "ja": "嘲弄の弓",
      "zh": "嘲弄之弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 23,
    "MinAtk": 24,
    "MaxAtk": 82,
    "abilities11": {
      "name": "Blinded Punisher +10%",
      "details": "Increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "306028_01_40101",
    "name": {
      "en": "Armored Inferno",
      "ja": "アーマードフレアボウ",
      "zh": "装甲弓"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Infernal Smash",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;777%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;863%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 7673,
      "SPLv2": 7673,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306041_01_40101",
    "name": {
      "en": "Blazefungus",
      "ja": "プロミネンスファンガス",
      "zh": "日珥蘑弓"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306061_01_40101",
    "name": {
      "en": "Vulcan",
      "ja": "紅蓮弓・ヴァルカン",
      "zh": "红莲弓・火山"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 23,
    "MaxHp": 77,
    "MinAtk": 75,
    "MaxAtk": 252,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "306066_01_40101",
    "name": {
      "en": "Wispfire Bow",
      "ja": "燃え上がる鬼火の弓",
      "zh": "Wispfire Bow"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 62,
    "MinAtk": 60,
    "MaxAtk": 201,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +15%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "306010_01_40201",
    "name": {
      "en": "Frostslinger Bow",
      "ja": "氷結弓",
      "zh": "冰结弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Frost Smash",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;777%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;863%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals water damage to enemies in a line.",
      "Sp": 7673,
      "SPLv2": 7673,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306039_01_40201",
    "name": {
      "en": "Glacial Fungus",
      "ja": "グレイスシャルファンガス",
      "zh": "冰川蘑弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +15%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306050_01_40201",
    "name": {
      "en": "Frostbillow",
      "ja": "霜涛の弓",
      "zh": "霜涛之弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 62,
    "MaxAtk": 207,
    "abilities11": {
      "name": "(Water) Undead's Bane +15%",
      "details": "If the user is attuned to Water: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Skill Resistance Penetrator",
      "details": "If the user is attuned to Water:  completely negates skill resistance.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306008_01_40301",
    "name": {
      "en": "Epidemic",
      "ja": "エピデミックボウ",
      "zh": "疫病之弓"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Gale Smash",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;777%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;863%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "Deals wind damage to enemies in a line.",
      "Sp": 7673,
      "SPLv2": 7673,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306048_01_40301",
    "name": {
      "en": "Stormfungus",
      "ja": "ストームファンガス",
      "zh": "风暴蘑弓"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 62,
    "MaxAtk": 207,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +15%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306062_01_40301",
    "name": {
      "en": "Wind, the Dustwhirler",
      "ja": "風塵弓・ヴィント",
      "zh": "Wind, the Dustwhirler"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 73,
    "MinAtk": 77,
    "MaxAtk": 259,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "306037_01_40401",
    "name": {
      "en": "Holy Bow",
      "ja": "ホーリーボウ",
      "zh": "神圣之弓"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Holy Energy",
      "icon": "Icon_Skill_032",
      "description1": "Increases max HP by '''15%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases max HP by '''20%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases the user's HP by '''25%''' for 30 seconds. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 11213,
      "SPLv2": 11213,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 30,
    "MaxHp": 103,
    "MinAtk": 96,
    "MaxAtk": 320,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306051_01_40401",
    "name": {
      "en": "Heaven's Bouquet",
      "ja": "天薫の弓",
      "zh": "天薰之弓"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "(Light) Undead's Bane +15%",
      "details": "If the user is attuned to Light: increases damage to [[Class Banes|undead]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Undead's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Dull Res",
      "details": "If the user is attuned to Light: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306054_01_40401",
    "name": {
      "en": "Glowfungus",
      "ja": "ライトニングファンガス",
      "zh": "Glowfungus"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 64,
    "MaxAtk": 214,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +15%",
      "details": "If the user is attuned to Light:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306016_01_40501",
    "name": {
      "en": "Macabre Malediction",
      "ja": "呪骸の魔弓",
      "zh": "呪骸魔弓"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Macabre Energy",
      "icon": "Icon_Skill_032",
      "description1": "Increases max HP by '''15%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases max HP by '''20%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases the user's HP by '''25%''' for 30 seconds. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 11213,
      "SPLv2": 11213,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 30,
    "MaxHp": 103,
    "MinAtk": 96,
    "MaxAtk": 320,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306052_01_40501",
    "name": {
      "en": "Howlshadow",
      "ja": "暗夜に狂笑する弓",
      "zh": "暗夜狂笑弓"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 62,
    "MaxAtk": 207,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +15%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "306013_01_49901",
    "name": {
      "en": "Executor",
      "ja": "エグゼキューター",
      "zh": "执行者之弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 60,
    "MaxAtk": 200,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306033_01_49901",
    "name": {
      "en": "Faerie Bow",
      "ja": "妖精の弓",
      "zh": "精灵弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Faerie Smash",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of '''699%''' damage to enemies in a line.",
      "description2": "Deals 1 shot of '''777%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 7673,
      "SPLv2": 7673,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 21,
    "MaxHp": 70,
    "MinAtk": 80,
    "MaxAtk": 267,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306011_01_49901",
    "name": {
      "en": "Duskhawk",
      "ja": "フローリデル",
      "zh": "弗洛里德尔"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Duskhawk's Energy",
      "icon": "Icon_Skill_032",
      "description1": "Increases max HP by '''10%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases max HP by '''15%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases the user's HP by '''25%''' for 30 seconds. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 11213,
      "SPLv2": 11213,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 23,
    "MaxHp": 79,
    "MinAtk": 73,
    "MaxAtk": 246,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306060_01_49901",
    "name": {
      "en": "Falkyn",
      "ja": "剛弓・ファルケン",
      "zh": "刚弓・飞鹰"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 57,
    "MaxAtk": 190,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "306027_01_50101",
    "name": {
      "en": "Lupis Solis",
      "ja": "イグニートウルフ",
      "zh": "炎狼弓"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Lupine Vision",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''25%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 155,
    "MaxAtk": 518,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306061_01_50101",
    "name": {
      "en": "Vulcanrage",
      "ja": "紅蓮弓・ヴァルカンレイジ",
      "zh": "红莲弓・火山之怒"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 30,
    "MaxHp": 100,
    "MinAtk": 98,
    "MaxAtk": 327,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "306029_01_50201",
    "name": {
      "en": "Peacock's Whorl",
      "ja": "創海弓アオクジャク",
      "zh": "蓝孔雀创海弓"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Peacock Shot",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''25%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 155,
    "MaxAtk": 518,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306030_01_50301",
    "name": {
      "en": "Stellar Pegasus",
      "ja": "天馬弓アステル",
      "zh": "天马弓阿斯特尔"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Pegasus Shot",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''25%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 44,
    "MaxHp": 147,
    "MinAtk": 155,
    "MaxAtk": 518,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306062_01_50301",
    "name": {
      "en": "Windhoze, the Dustblaster",
      "ja": "風塵弓・ヴィントホーゼ",
      "zh": "Windhoze, the Dustblaster"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 95,
    "MinAtk": 101,
    "MaxAtk": 337,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "306031_01_50401",
    "name": {
      "en": "Thunderbow",
      "ja": "天雷の弓",
      "zh": "天雷弓"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Divine Thunder",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;854%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;949%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals light-based damage to enemies in a line.",
      "Sp": 8075,
      "SPLv2": 8075,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 140,
    "MinAtk": 160,
    "MaxAtk": 534,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306014_01_50501",
    "name": {
      "en": "Necro Arcus",
      "ja": "ネクロアルクス",
      "zh": "亡骸之弓"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Necro Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;284%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;316%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals shadow damage to enemies in a line.",
      "Sp": 7501,
      "SPLv2": 7501,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 42,
    "MaxHp": 140,
    "MinAtk": 160,
    "MaxAtk": 534,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306015_01_59901",
    "name": {
      "en": "Nitralica's Koto",
      "ja": "琴弓ニトラリカ",
      "zh": "琴弓尼托拉里卡"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 29,
    "MaxHp": 98,
    "MinAtk": 104,
    "MaxAtk": 347,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306034_01_59901",
    "name": {
      "en": "Accelerator",
      "ja": "アクセラレートギア",
      "zh": "加速齿轮弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Midair Buster",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of '''769%''' damage to enemies in a line.",
      "description2": "Deals 1 shot of '''854%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 8075,
      "SPLv2": 8075,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 131,
    "MaxAtk": 438,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306035_01_59901",
    "name": {
      "en": "Starchaser",
      "ja": "スターチェイサー",
      "zh": "坠星弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Star Volley",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of '''256%''' damage to enemies in a line.",
      "description2": "Deals 3 shots of '''284%''' damage to enemies in a line.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 7501,
      "SPLv2": 7501,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 131,
    "MaxAtk": 438,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "306036_01_59901",
    "name": {
      "en": "Chimera's Guilt",
      "ja": "鵺穿",
      "zh": "鵺穿弓"
    },
    "weapon": "Bow",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Chimera's Boost",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's critical rate by '''15%''' for 10 seconds.",
      "description2": "Increases the user's critical rate by '''20%''' for 10 seconds.",
      "description3": "Increases the user's critical rate by '''40%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 36,
    "MaxHp": 121,
    "MinAtk": 127,
    "MaxAtk": 425,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307006_01_30101",
    "name": {
      "en": "Sunrise Scepter",
      "ja": "サンライズロッド",
      "zh": "旭日魔杖"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Sunrise Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;806%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;895%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "Deals flame damage to the target and enemies near it.",
      "Sp": 8355,
      "SPLv2": 8355,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307049_01_30101",
    "name": {
      "en": "The Wail",
      "ja": "ヒートヘッド",
      "zh": "灼热之首"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +10%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307072_01_30101",
    "name": {
      "en": "Heatshimmer Wand",
      "ja": "陽炎のロッド",
      "zh": "Heatshimmer Wand"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 38,
    "MinAtk": 39,
    "MaxAtk": 133,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +10%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "307033_01_30201",
    "name": {
      "en": "Oceandweller",
      "ja": "激流のロッド",
      "zh": "激流魔杖"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Ocean Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;806%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;895%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description3": "Deals water damage to the target and enemies near it.",
      "Sp": 8355,
      "SPLv2": 8355,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307047_01_30201",
    "name": {
      "en": "The Scream",
      "ja": "シャウトヘッド",
      "zh": "哀嚎之首"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +10%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307007_01_30301",
    "name": {
      "en": "Menace of the Storm",
      "ja": "ストームメイス",
      "zh": "威胁风暴"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Storm Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;806%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;895%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals wind damage to enemies in a line.",
      "Sp": 8062,
      "SPLv2": 8062,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 54,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307054_01_30301",
    "name": {
      "en": "The Bellow",
      "ja": "ノイズヘッド",
      "zh": "噪声之首"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 40,
    "MaxAtk": 136,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307021_01_30401",
    "name": {
      "en": "Thunder Wand",
      "ja": "サンダーロッド",
      "zh": "雷霆魔杖"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Electrical Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;806%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;806%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light-based damage to enemies in a line.",
      "Sp": 8062,
      "SPLv2": 8062,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 54,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307059_01_30401",
    "name": {
      "en": "The Panic",
      "ja": "パニックヘッド",
      "zh": "The Panic"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 11,
    "MaxHp": 37,
    "MinAtk": 40,
    "MaxAtk": 136,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +10%",
      "details": "If the user is attuned to Wind:  increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307008_01_30501",
    "name": {
      "en": "Meggidoth Ruiner",
      "ja": "メギトスブレイカー",
      "zh": "梅奇特斯破坏者"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Dark Discharge",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;806%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;895%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description3": "Deals shadow damage to the target and enemies near it.",
      "Sp": 8355,
      "SPLv2": 8355,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 16,
    "MaxHp": 56,
    "MinAtk": 66,
    "MaxAtk": 222,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307056_01_30501",
    "name": {
      "en": "Wickedheart",
      "ja": "邪心のロッド",
      "zh": "邪念魔杖"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "3",
    "skill": null,
    "MinHp": 10,
    "MaxHp": 34,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +10%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307042_01_39901",
    "name": {
      "en": "Wizard's Rod",
      "ja": "ウィザードロッド",
      "zh": "魔法师之杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 21,
    "MinAtk": 27,
    "MaxAtk": 91,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307004_01_39901",
    "name": {
      "en": "Sorcerer's Cudgel",
      "ja": "ソーサリーロッド",
      "zh": "巫术之杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Sorcerer's Blast",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of '''725%''' damage to surrounding enemies.",
      "description2": "Deals 1 hit of '''806%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to enemies in a line.",
      "Sp": 8062,
      "SPLv2": 8062,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 10,
    "MaxHp": 34,
    "MinAtk": 43,
    "MaxAtk": 144,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307037_01_39901",
    "name": {
      "en": "Conchoidal Rod",
      "ja": "シェルロッド",
      "zh": "海螺魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Conchoidal Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of '''725%''' damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of '''806%''' damage to the target and nearby enemies.",
      "description3": "Deals non-elemental damage to the target and nearby enemies.",
      "Sp": 8355,
      "SPLv2": 8355,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 10,
    "MaxHp": 36,
    "MinAtk": 42,
    "MaxAtk": 140,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307046_01_39901",
    "name": {
      "en": "The Scent",
      "ja": "アロマヘッド",
      "zh": "芳香之首"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 22,
    "MinAtk": 26,
    "MaxAtk": 88,
    "abilities11": {
      "name": "Thaumian's Bane +10%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "307057_01_39901",
    "name": {
      "en": "Clamor Wand",
      "ja": "ざわめきのロッド",
      "zh": "烦扰魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 6,
    "MaxHp": 21,
    "MinAtk": 27,
    "MaxAtk": 91,
    "abilities11": {
      "name": "Blinded Punisher +10%",
      "details": "Increases damage to blinded enemies by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 10
      }
    },
    "abilities21": 0
  },
  {
    "id": "307016_01_40101",
    "name": {
      "en": "Firefiend's Howl",
      "ja": "フレイムブルートハウル",
      "zh": "炎兽咆哮杖"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Firefiend's Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;886%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;984%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals flame damage to surrounding enemies.",
      "Sp": 8453,
      "SPLv2": 8453,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 26,
    "MaxHp": 87,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307049_01_40101",
    "name": {
      "en": "The Second Wail",
      "ja": "メルティングヘッド",
      "zh": "焚化之首"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 54,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": {
      "name": "(Flame) Thaumian's Bane +15%",
      "details": "If the user is attuned to Flame: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Dragon Delay Res",
      "details": "If the user is attuned to Flame: completely prevents dragon delaying.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307066_01_40101",
    "name": {
      "en": "Bewitching Scepter",
      "ja": "妖火の宝笏",
      "zh": "妖火宝笏"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 22,
    "MaxHp": 74,
    "MinAtk": 81,
    "MaxAtk": 270,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "307072_01_40101",
    "name": {
      "en": "Brightshimmer Wand",
      "ja": "煌々たる陽炎のロッド",
      "zh": "Brightshimmer Wand"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 18,
    "MaxHp": 61,
    "MinAtk": 63,
    "MaxAtk": 211,
    "abilities11": {
      "name": "(Flame) Blinded Punisher +15%",
      "details": "If the user is attuned to Flame:  increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) Full HP = Strength +8%",
      "details": "If the user is attuned to Flame: increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Strength",
        "ability_value": 8
      }
    },
    "req": "Flame",
    "incSTR": 8
  },
  {
    "id": "307036_01_40201",
    "name": {
      "en": "Rod of Tears",
      "ja": "ティアーズロッド",
      "zh": "泪之杖"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Lachrymal Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''30%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 96,
    "MinAtk": 105,
    "MaxAtk": 351,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307047_01_40201",
    "name": {
      "en": "The Second Scream",
      "ja": "スクリームヘッド",
      "zh": "悲鸣之首"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 64,
    "MaxAtk": 216,
    "abilities11": {
      "name": "(Water) Thaumian's Bane +15%",
      "details": "If the user is attuned to Water:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Dull Res",
      "details": "If the user is attuned to Water: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307055_01_40201",
    "name": {
      "en": "Wavewing",
      "ja": "波獣の翼",
      "zh": "波兽之翼"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 22,
    "MaxHp": 74,
    "MinAtk": 81,
    "MaxAtk": 270,
    "abilities11": {
      "name": "(Water) Slayer's Strength +3%",
      "details": "If the user is attuned to Water: increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "307018_01_40301",
    "name": {
      "en": "Tempest Wand",
      "ja": "テンペストロッド",
      "zh": "暴风魔杖"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Tempestuous Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;886%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;984%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals wind damage to surrounding enemies.",
      "Sp": 8453,
      "SPLv2": 8453,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 26,
    "MaxHp": 87,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307054_01_40301",
    "name": {
      "en": "The Fury",
      "ja": "レイジングヘッド",
      "zh": "狂怒之首"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 64,
    "MaxAtk": 216,
    "abilities11": {
      "name": "(Wind) Thaumian's Bane +15%",
      "details": "If the user is attuned to Wind: increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Wind) Copy Punisher",
      "details": "If the user is attuned to Wind: increases damage to copies created by Propagation by '''20x'''.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307067_01_40301",
    "name": {
      "en": "Scepter of the Gale",
      "ja": "烈風の宝笏",
      "zh": "Scepter of the Gale"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 20,
    "MaxHp": 67,
    "MinAtk": 86,
    "MaxAtk": 287,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "307010_01_40401",
    "name": {
      "en": "Conductor Rod",
      "ja": "ライトニングロッド",
      "zh": "闪光魔杖"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Conductive Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''30%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 28,
    "MaxHp": 96,
    "MinAtk": 105,
    "MaxAtk": 351,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307059_01_40401",
    "name": {
      "en": "The Madness",
      "ja": "クレイジーヘッド",
      "zh": "The Madness"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 64,
    "MaxAtk": 216,
    "abilities11": {
      "name": "(Light) Thaumian's Bane +15%",
      "details": "If the user is attuned to Light:  increases damage to [[Class Banes|thaumians]] by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Light) Copy Punisher",
      "details": "If the user is attuned to Light:  increases damage to copies created by Propagation.",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307011_01_40501",
    "name": {
      "en": "Accursed Vare",
      "ja": "カースロッド",
      "zh": "诅咒魔杖"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Accursed Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;886%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;984%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description3": "Deals shadow damage to surrounding enemies.",
      "Sp": 8453,
      "SPLv2": 8453,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 26,
    "MaxHp": 87,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307056_01_40501",
    "name": {
      "en": "Darkheart",
      "ja": "禍々しき邪心のロッド",
      "zh": "不详邪念魔杖"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "4",
    "skill": null,
    "MinHp": 16,
    "MaxHp": 54,
    "MinAtk": 68,
    "MaxAtk": 229,
    "abilities11": {
      "name": "(Shadow) Blinded Punisher +15%",
      "details": "If the user is attuned to Shadow: increases damage to blinded enemies by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Shadow) Dull Res",
      "details": "If the user is attuned to Shadow: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    }
  },
  {
    "id": "307012_01_49901",
    "name": {
      "en": "Latchkey",
      "ja": "キーロッド",
      "zh": "匙之杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 15,
    "MaxHp": 51,
    "MinAtk": 66,
    "MaxAtk": 221,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307038_01_49901",
    "name": {
      "en": "Rod of Alchemy",
      "ja": "アルケミーロッド",
      "zh": "炼金魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Alchemic Discharge",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of '''797%''' damage to surrounding enemies.",
      "description2": "Deals 1 hit of '''886%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 8453,
      "SPLv2": 8453,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 67,
    "MinAtk": 86,
    "MaxAtk": 287,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307039_01_49901",
    "name": {
      "en": "Moonlight Rod",
      "ja": "ムーンライトロッド",
      "zh": "月光魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Moonlight's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''30%''' for 30 seconds.",
      "Sp": 7316,
      "SPLv2": 7316,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 22,
    "MaxHp": 74,
    "MinAtk": 81,
    "MaxAtk": 270,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307051_01_49901",
    "name": {
      "en": "Beastwing",
      "ja": "獣の翼",
      "zh": "兽之翼"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 62,
    "MaxAtk": 208,
    "abilities11": {
      "name": "Slayer's Strength +3%",
      "details": "Increases strength by '''3%''' for every five enemies defeated (up to five times per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 3
      }
    },
    "abilities21": 0
  },
  {
    "id": "307065_01_49901",
    "name": {
      "en": "Scepter of Spirit",
      "ja": "魂の宝笏",
      "zh": "灵魂宝笏"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 17,
    "MaxHp": 57,
    "MinAtk": 62,
    "MaxAtk": 208,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "307015_01_50101",
    "name": {
      "en": "Terranigmus",
      "ja": "ランドメイカー",
      "zh": "大地之母"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Grand Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12668,
      "SPLv2": 12668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 45,
    "MaxHp": 152,
    "MinAtk": 158,
    "MaxAtk": 528,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307066_01_50101",
    "name": {
      "en": "Scepter of Infinite Fire",
      "ja": "無尽蔵の宝笏",
      "zh": "无尽焰宝笏"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 28,
    "MaxHp": 96,
    "MinAtk": 105,
    "MaxAtk": 351,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) High Midgardsormr's Bane",
      "details": "If the user is attuned to Flame: increases damage to High Midgardsormr by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {}
    }
  },
  {
    "id": "307032_01_50201",
    "name": {
      "en": "Ocean Monarch",
      "ja": "パシフィックモナーク",
      "zh": "大洋君主"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Monarch's Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;244%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;271%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description3": "Deals water damage to the target and enemies near it.",
      "Sp": 8757,
      "SPLv2": 8757,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 40,
    "MaxHp": 134,
    "MinAtk": 171,
    "MaxAtk": 573,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307055_01_50201",
    "name": {
      "en": "Tsunamiwing",
      "ja": "海嘯獣の翼",
      "zh": "海啸兽之翼"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 87,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": {
      "name": "(Water) Slayer's Strength +4%",
      "details": "If the user is attuned to Water: increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "(Water) HP 70% = Strength +5%",
      "details": "If the user is attuned to Water: increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Strength",
        "ability_value": 5
      }
    },
    "req": "Water",
    "incSTR": 5
  },
  {
    "id": "307014_01_50301",
    "name": {
      "en": "Phytalmios",
      "ja": "クラウドカローラ",
      "zh": "云之花冠"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Phytalmios's Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12668,
      "SPLv2": 12668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 45,
    "MaxHp": 152,
    "MinAtk": 158,
    "MaxAtk": 528,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307067_01_50301",
    "name": {
      "en": "Scepter of the Maelstrom",
      "ja": "碧嵐迅の宝笏",
      "zh": "Scepter of the Maelstrom"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 87,
    "MinAtk": 111,
    "MaxAtk": 372,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Broken Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to enemies in break state by '''15%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    }
  },
  {
    "id": "307034_01_50401",
    "name": {
      "en": "Twilight Shimmer",
      "ja": "スパークルナイト",
      "zh": "白昼之夜"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Twilight Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;244%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;271%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description3": "Deals light-based damage to the target and enemies near it.",
      "Sp": 8757,
      "SPLv2": 8757,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 40,
    "MaxHp": 134,
    "MinAtk": 171,
    "MaxAtk": 573,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307035_01_50501",
    "name": {
      "en": "Underworld Despair",
      "ja": "ディスペルハデス",
      "zh": "驱冥杖"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Persephone's Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12668,
      "SPLv2": 12668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 45,
    "MaxHp": 152,
    "MinAtk": 158,
    "MaxAtk": 528,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307031_01_59901",
    "name": {
      "en": "Wand of the Torrent",
      "ja": "タービュランスロッド",
      "zh": "乱流魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 27,
    "MaxHp": 90,
    "MinAtk": 115,
    "MaxAtk": 384,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307040_01_59901",
    "name": {
      "en": "Welkin Wand",
      "ja": "天空のロッド",
      "zh": "苍穹魔杖"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Welkin Blast",
      "icon": "Icon_Skill_020",
      "description1": "Deals 4 hits of '''220%''' damage to the target and nearby enemies.",
      "description2": "Deals 4 hits of '''244%''' damage to the target and nearby enemies.",
      "description3": "Deals non-elemental damage to the target and nearby enemies.",
      "Sp": 8757,
      "SPLv2": 8757,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 33,
    "MaxHp": 110,
    "MinAtk": 141,
    "MaxAtk": 470,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307041_01_59901",
    "name": {
      "en": "Chaotic Horizon",
      "ja": "カオスホライゾン",
      "zh": "混沌之源"
    },
    "weapon": "Wand",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Chaotic Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores the user's HP with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores the user's HP with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores the user's HP.",
      "Sp": 12668,
      "SPLv2": 12668,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 37,
    "MaxHp": 125,
    "MinAtk": 129,
    "MaxAtk": 433,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308006_01_30101",
    "name": {
      "en": "Staff of Punishing Flame",
      "ja": "猛き炎の杖",
      "zh": "烈焰之杖"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Flame Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;562%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;624%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals flame damage to surrounding enemies.",
      "Sp": 13822,
      "SPLv2": 13822,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 66,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308041_01_30101",
    "name": {
      "en": "Flamechant",
      "ja": "フリーファイアオーダー",
      "zh": "火焰唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "3",
    "skill": null,
    "MinHp": 12,
    "MaxHp": 42,
    "MinAtk": 38,
    "MaxAtk": 129,
    "abilities11": {
      "name": "(Flame) HP 70% = Defense +3%",
      "details": "If the user is attuned to Flame: increases defense by '''3%''' when HP is '''70%''' or above.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 3,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Flame",
    "incDef": 3
  },
  {
    "id": "308007_01_30201",
    "name": {
      "en": "Scendecipher",
      "ja": "ウェーブリポート",
      "zh": "观浪法杖"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Tidal Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;562%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;624%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals water damage to surrounding enemies.",
      "Sp": 13822,
      "SPLv2": 13822,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 19,
    "MaxHp": 66,
    "MinAtk": 61,
    "MaxAtk": 205,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308048_01_30201",
    "name": {
      "en": "Aqua Pura Order",
      "ja": "ウォータリィオーダー",
      "zh": "融水唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "3",
    "skill": null,
    "MinHp": 13,
    "MaxHp": 45,
    "MinAtk": 36,
    "MaxAtk": 123,
    "abilities11": {
      "name": "(Water) HP 70% = Defense +3%",
      "details": "If the user is attuned to Water: increases defense by '''3%''' when HP is '''70%''' or above.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 3,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Water",
    "incDef": 3
  },
  {
    "id": "308008_01_30301",
    "name": {
      "en": "Windreader",
      "ja": "ウェザーリポート",
      "zh": "气象法杖"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Wind's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''20%''' for 30 seconds.",
      "Sp": 14632,
      "SPLv2": 14632,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 69,
    "MinAtk": 59,
    "MaxAtk": 199,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308049_01_30301",
    "name": {
      "en": "Squallchant",
      "ja": "ツイストオーダー",
      "zh": "Squallchant"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "3",
    "skill": null,
    "MinHp": 13,
    "MaxHp": 45,
    "MinAtk": 36,
    "MaxAtk": 123,
    "abilities11": {
      "name": "(Wind) HP 70% = Defense +3%",
      "details": "If the user is attuned to Wind:  increases defense by '''3%''' when HP is '''70%''' or above.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "def": 3,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Wind) Recovery Potency +5%",
      "details": "If the user is attuned to Wind:  increases the potency of recovery skills by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 5
      }
    },
    "req": "Wind",
    "incDef": 3
  },
  {
    "id": "308009_01_30401",
    "name": {
      "en": "Astrolabe",
      "ja": "アストロラーベ",
      "zh": "星盘之杖"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Astro Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''20%''' for 30 seconds.",
      "Sp": 14632,
      "SPLv2": 14632,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 69,
    "MinAtk": 59,
    "MaxAtk": 199,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308026_01_30401",
    "name": {
      "en": "Vampire's Lantern",
      "ja": "ヴァンパイア・ランタン",
      "zh": "吸血鬼灯笼"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Vampire's Treat",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''180%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''207%''' [[Healing Formula|Recovery Potency]].",
      "description3": "",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 17,
    "MaxHp": 59,
    "MinAtk": 55,
    "MaxAtk": 185,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308050_01_30401",
    "name": {
      "en": "Gleamchant",
      "ja": "ホワイトオーダー",
      "zh": "白光唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "3",
    "skill": null,
    "MinHp": 13,
    "MaxHp": 45,
    "MinAtk": 36,
    "MaxAtk": 123,
    "abilities11": {
      "name": "(Light) HP 70% = Defense +3%",
      "details": "If the user is attuned to Light: increases defense by '''3%''' when HP is '''70%''' or above.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "def": 3,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Light",
    "incDef": 3
  },
  {
    "id": "308020_01_30501",
    "name": {
      "en": "Meggidoth Wisp",
      "ja": "メギトスウィスプ",
      "zh": "梅奇特斯的低语"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Meggidoth's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''25%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''20%''' for 30 seconds.",
      "Sp": 14632,
      "SPLv2": 14632,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 69,
    "MinAtk": 59,
    "MaxAtk": 199,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308002_01_39901",
    "name": {
      "en": "Staff of Grace",
      "ja": "恩恵の杖",
      "zh": "恩惠之杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 8,
    "MaxHp": 28,
    "MinAtk": 23,
    "MaxAtk": 77,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "307003_01_39901",
    "name": {
      "en": "Long Ankh",
      "ja": "ロングアンク",
      "zh": "长生符"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Ankh's Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''15%''' for 10 seconds.",
      "description2": "Increases the user's defense by '''20%''' for 10 seconds.",
      "description3": "Increases the user's defense by '''20%''' for 30 seconds.",
      "Sp": 14632,
      "SPLv2": 14632,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 13,
    "MaxHp": 44,
    "MinAtk": 37,
    "MaxAtk": 125,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308036_01_39901",
    "name": {
      "en": "Staff of the Horned Snake",
      "ja": "角蛇の杖",
      "zh": "角蛇之杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "3",
    "skill": {
      "name": "Horned Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of '''506%''' damage to surrounding enemies.",
      "description2": "Deals 1 hit of '''562%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 13822,
      "SPLv2": 13822,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 12,
    "MaxHp": 42,
    "MinAtk": 38,
    "MaxAtk": 129,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308040_01_39901",
    "name": {
      "en": "Aurachant",
      "ja": "シンプルオーダー",
      "zh": "简易唤魔法杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "3",
    "skill": null,
    "MinHp": 7,
    "MaxHp": 26,
    "MinAtk": 24,
    "MaxAtk": 81,
    "abilities11": {
      "name": "HP 70% = Defense +3%",
      "details": "Increases defense by '''3%''' when HP is '''70%''' or above.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 3
      }
    },
    "abilities21": 0
  },
  {
    "id": "308021_01_40101",
    "name": {
      "en": "Ark Voyager",
      "ja": "アークフレアスタッフ",
      "zh": "天火法杖"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Ark Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''180%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''207%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to the team member most in need.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308041_01_40101",
    "name": {
      "en": "Ashchant",
      "ja": "フルフレイムオーダー",
      "zh": "烈焰唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 58,
    "MaxAtk": 195,
    "abilities11": {
      "name": "(Flame) HP 70% = Defense +5%",
      "details": "If the user is attuned to Flame: increases defense by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 5,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "(Flame) Dull Res",
      "details": "If the user is attuned to Flame: completely prevents [[dull|dulling]].",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Flame",
    "incDef": 5
  },
  {
    "id": "308044_01_40101",
    "name": {
      "en": "Twilight Harbinger",
      "ja": "暁を報せるもの",
      "zh": "黄昏宣告"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 89,
    "MinAtk": 73,
    "MaxAtk": 244,
    "abilities11": {
      "name": "(Flame) Skill Prep +25%",
      "details": "If the user is attuned to Flame:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Flame) Skill Haste +4%",
      "details": "If the user is attuned to Flame:  increases skill gauge fill rate by '''4%'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 4
      }
    }
  },
  {
    "id": "308054_01_40101",
    "name": {
      "en": "Ignis Core",
      "ja": "コア・オブ・イグニ",
      "zh": "Ignis Core"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "4",
    "skill": null,
    "MinHp": 25,
    "MaxHp": 86,
    "MinAtk": 74,
    "MaxAtk": 249,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +15%",
      "details": "If the user is attuned to Flame: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 15
  },
  {
    "id": "308022_01_40201",
    "name": {
      "en": "Marine Staff",
      "ja": "マリーンスタッフ",
      "zh": "海洋之杖"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Marine Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''180%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''207%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to the team member most in need.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308048_01_40201",
    "name": {
      "en": "Aquafil Order",
      "ja": "アクアフィルオーダー",
      "zh": "驭水唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 58,
    "MaxAtk": 195,
    "abilities11": {
      "name": "(Water) HP 70% = Defense +5%",
      "details": "If the user is attuned to Water: increases defense by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "(Water) Scorching Air Res",
      "details": "If the user is attuned to Water:  completely nullifies damage from scorching air.",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Water",
    "incDef": 5
  },
  {
    "id": "308055_01_40201",
    "name": {
      "en": "Ocean Core",
      "ja": "コア・オブ・オーシャン",
      "zh": "大洋之核"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "4",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 89,
    "MinAtk": 73,
    "MaxAtk": 244,
    "abilities11": {
      "name": "(Water) Full HP = Defense +15%",
      "details": "If the user is attuned to Water: increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "(Water) Skill Haste +4%",
      "details": "If the user is attuned to Water:  increases skill gauge fill rate by '''4%'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 4
      }
    },
    "req": "Water",
    "incDef": 15
  },
  {
    "id": "308033_01_40301",
    "name": {
      "en": "Windeater Staff",
      "ja": "風喰いの杖",
      "zh": "食风之杖"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Windeater's Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 6645,
      "SPLv2": 6645,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 32,
    "MaxHp": 107,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308052_01_40301",
    "name": {
      "en": "Wind and Cloud",
      "ja": "風雲を呼ぶもの",
      "zh": "呼风唤雨"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 89,
    "MinAtk": 73,
    "MaxAtk": 244,
    "abilities11": {
      "name": "(Wind) Skill Prep +25%",
      "details": "If the user is attuned to Wind: fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Wind) HP 70% = Healing +8%",
      "details": "If the user is attuned to Wind: increases the potency of recovery skills by '''8%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP 70% = Healing",
        "ability_value": 8
      }
    }
  },
  {
    "id": "308049_01_40301",
    "name": {
      "en": "Stormchant",
      "ja": "ゲイルスパイラルオーダー",
      "zh": "Stormchant"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 58,
    "MaxAtk": 195,
    "abilities11": {
      "name": "(Wind) HP 70% = Defense +5%",
      "details": "If the user is attuned to Wind:  increases defense by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "def": 5,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "(Wind) Recovery Potency +5%",
      "details": "If the user is attuned to Wind:  increases the potency of recovery skills by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 5
      }
    },
    "req": "Wind",
    "incDef": 5
  },
  {
    "id": "308018_01_40401",
    "name": {
      "en": "Tonitrus",
      "ja": "雷電杖トニトルス",
      "zh": "雷电杖托尼托鲁斯"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Tonitrus's Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 6645,
      "SPLv2": 6645,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 32,
    "MaxHp": 107,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308046_01_40401",
    "name": {
      "en": "Daybreak Harbinger",
      "ja": "黄昏を告げるもの",
      "zh": "拂晓将至"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 26,
    "MaxHp": 89,
    "MinAtk": 73,
    "MaxAtk": 244,
    "abilities11": {
      "name": "(Light) Skill Prep +25%",
      "details": "If the user is attuned to Light:  fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "(Light) Recovery Potency +5%",
      "details": "If the user is attuned to Light:  increases the potency of recovery skills by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 5
      }
    }
  },
  {
    "id": "308050_01_40401",
    "name": {
      "en": "Luminchant",
      "ja": "ブリリアントオーダー",
      "zh": "闪耀唤魔法杖"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "skill": null,
    "MinHp": 21,
    "MaxHp": 71,
    "MinAtk": 58,
    "MaxAtk": 195,
    "abilities11": {
      "name": "(Light) HP 70% = Defense +5%",
      "details": "If the user is attuned to Light: increases defense by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "def": 5,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP 70% = Defense",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "(Light) Fury Penetrator",
      "details": "If the user is attuned to Light: ignores the effects of fury when attacking enemies.",
      "might": 50,
      "limit": 0,
      "values": {}
    },
    "req": "Light",
    "incDef": 5
  },
  {
    "id": "308019_01_40501",
    "name": {
      "en": "Sanity's Bane",
      "ja": "カースドスペリア",
      "zh": "诅咒之苏必利尔"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Force of Insanity",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''35%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 6645,
      "SPLv2": 6645,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 32,
    "MaxHp": 107,
    "MinAtk": 99,
    "MaxAtk": 333,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308005_01_49901",
    "name": {
      "en": "Staff of Life",
      "ja": "ライフスタッフ",
      "zh": "养生杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 20,
    "MaxHp": 68,
    "MinAtk": 56,
    "MaxAtk": 188,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308013_01_49901",
    "name": {
      "en": "Staff of Fortune",
      "ja": "フォーチュンスタッフ",
      "zh": "幸运权杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Fortuitous Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''25%''' for 30 seconds.",
      "Sp": 6645,
      "SPLv2": 6645,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 24,
    "MaxHp": 82,
    "MinAtk": 77,
    "MaxAtk": 257,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308010_01_49901",
    "name": {
      "en": "Beauty's Balm",
      "ja": "ビューティフルメイク",
      "zh": "美貌之杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "4",
    "skill": {
      "name": "Beautiful Healing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''180%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''207%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to the team member most in need.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 26,
    "MaxHp": 89,
    "MinAtk": 73,
    "MaxAtk": 244,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308043_01_49901",
    "name": {
      "en": "Forever Sky",
      "ja": "空を望むもの",
      "zh": "祈愿苍穹"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 20,
    "MaxHp": 68,
    "MinAtk": 56,
    "MaxAtk": 188,
    "abilities11": {
      "name": "Skill Prep +25%",
      "details": "Fills '''25%''' of skill gauges at the start of quests.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 25
      }
    },
    "abilities21": 0
  },
  {
    "id": "308053_01_49901",
    "name": {
      "en": "Soul Core",
      "ja": "コア・オブ・ソウル",
      "zh": "灵魂之核"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "4",
    "skill": null,
    "MinHp": 20,
    "MaxHp": 68,
    "MinAtk": 56,
    "MaxAtk": 188,
    "abilities11": {
      "name": "Full HP = Defense +15%",
      "details": "Increases defense by '''15%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 15
      }
    },
    "abilities21": 0
  },
  {
    "id": "308031_01_50101",
    "name": {
      "en": "Staff of the Red Emperor",
      "ja": "赤帝の炎杖",
      "zh": "赤帝炎杖"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Red Emperor's Spirit",
      "icon": "Icon_Skill_032",
      "description1": "Increases the potency of the user's recovery skills by '''15%''' for 5 seconds.",
      "description2": "Increases the potency of the user's recovery skills by '''20%''' for 5 seconds.",
      "description3": "Increases the potency of the user's recovery skills by '''30%''' for 30 seconds.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 53,
    "MaxHp": 178,
    "MinAtk": 146,
    "MaxAtk": 487,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308044_01_50101",
    "name": {
      "en": "Endless Demise",
      "ja": "終焉を導くもの",
      "zh": "末日终焉"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": {
      "name": "(Flame) Skill Prep +50%",
      "details": "If the user is attuned to Flame: fills '''50%''' of skill gauges at the start of quests.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Flame) Skill Haste +4%",
      "details": "If the user is attuned to Flame:  increases skill gauge fill rate by '''4%'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 4
      }
    }
  },
  {
    "id": "308054_01_50101",
    "name": {
      "en": "Igniflare Core",
      "ja": "コア・オブ・イグニフレア",
      "zh": "Igniflare Core"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "5",
    "skill": null,
    "MinHp": 33,
    "MaxHp": 112,
    "MinAtk": 96,
    "MaxAtk": 323,
    "abilities11": {
      "name": "(Flame) Full HP = Defense +20%",
      "details": "If the user is attuned to Flame: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "def": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Flame) HP 70% = Critical Rate +5%",
      "details": "If the user is attuned to Flame: increases critical rate by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP 70% = Critical Rate",
        "ability_value": 5
      }
    },
    "req": "Flame",
    "incDef": 20
  },
  {
    "id": "308011_01_50201",
    "name": {
      "en": "Bracing Waters",
      "ja": "アクアブレス",
      "zh": "水之祝福"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Bracing Spirit",
      "icon": "Icon_Skill_032",
      "description1": "Increases the potency of the user's recovery skills by '''15%''' for 5 seconds.",
      "description2": "Increases the potency of the user's recovery skills by '''20%''' for 5 seconds.",
      "description3": "Increases the potency of the user's recovery skills by '''30%''' for 30 seconds.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 53,
    "MaxHp": 178,
    "MinAtk": 146,
    "MaxAtk": 487,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308055_01_50201",
    "name": {
      "en": "Endless Azure Core",
      "ja": "コア・オブ・ブルーアビス",
      "zh": "蓝渊之核"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "5",
    "skill": null,
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": {
      "name": "(Water) Full HP = Defense +20%",
      "details": "If the user is attuned to Water: increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "def": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Full HP = Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Water) Skill Haste +4%",
      "details": "If the user is attuned to Water:  increases skill gauge fill rate by '''4%'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 4
      }
    },
    "req": "Water",
    "incDef": 20
  },
  {
    "id": "308032_01_50301",
    "name": {
      "en": "Ancient Mage's Windcane",
      "ja": "古代魔術の旋杖",
      "zh": "古代魔法旋杖"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Ancient Mage's Spirit",
      "icon": "Icon_Skill_032",
      "description1": "Increases the potency of the user's recovery skills by '''15%''' for 5 seconds.",
      "description2": "Increases the potency of the user's recovery skills by '''20%''' for 5 seconds.",
      "description3": "Deals wind damage to surrounding enemies.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 53,
    "MaxHp": 178,
    "MinAtk": 146,
    "MaxAtk": 487,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308052_01_50301",
    "name": {
      "en": "Rise and Fall",
      "ja": "興亡をもたらすもの",
      "zh": "亦兴亦亡"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "5",
    "skill": null,
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": {
      "name": "(Wind) Skill Prep +50%",
      "details": "If the user is attuned to Wind: fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) HP 70% = Healing +8%",
      "details": "If the user is attuned to Wind: increases the potency of recovery skills by '''8%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP 70% = Healing",
        "ability_value": 8
      }
    }
  },
  {
    "id": "308014_01_50401",
    "name": {
      "en": "Light of Judgment",
      "ja": "裁きの光杖",
      "zh": "制裁光杖"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Judgment Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;680%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;755%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light-based damage to surrounding enemies.",
      "Sp": 15205,
      "SPLv2": 15205,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 49,
    "MaxHp": 165,
    "MinAtk": 153,
    "MaxAtk": 513,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308046_01_50401",
    "name": {
      "en": "Genesis Bringer",
      "ja": "開闢を運ぶもの",
      "zh": "天地伊始"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "5",
    "skill": null,
    "MinHp": 34,
    "MaxHp": 115,
    "MinAtk": 95,
    "MaxAtk": 317,
    "abilities11": {
      "name": "(Light) Skill Prep +50%",
      "details": "If the user is attuned to Light:  fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Light) Recovery Potency +5%",
      "details": "If the user is attuned to Light:  increases the potency of recovery skills by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 5
      }
    }
  },
  {
    "id": "308015_01_50501",
    "name": {
      "en": "Caduceus",
      "ja": "ケリュケイオン",
      "zh": "商神杖"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Herald's Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;680%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;755%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description3": "Deals shadow damage to surrounding enemies.",
      "Sp": 15205,
      "SPLv2": 15205,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 49,
    "MaxHp": 165,
    "MinAtk": 153,
    "MaxAtk": 513,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308030_01_59901",
    "name": {
      "en": "Cane of Soul's Repose",
      "ja": "鎮魂の杖",
      "zh": "镇魂之杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "5",
    "skill": null,
    "MinHp": 35,
    "MaxHp": 119,
    "MinAtk": 98,
    "MaxAtk": 327,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308038_01_59901",
    "name": {
      "en": "Rainbow Cane",
      "ja": "虹の杖",
      "zh": "虹之杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Rainbow Spirit",
      "icon": "Icon_Skill_032",
      "description1": "Increases the potency of the user's recovery skills by '''10%''' for 5 seconds.",
      "description2": "Increases the potency of the user's recovery skills by '''15%''' for 5 seconds.",
      "description3": "Increases the potency of the user's recovery skills by '''30%''' for 30 seconds.",
      "Sp": 17748,
      "SPLv2": 17748,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 43,
    "MaxHp": 146,
    "MinAtk": 120,
    "MaxAtk": 400,
    "abilities11": 0,
    "abilities21": 0
  },
  {
    "id": "308039_01_59901",
    "name": {
      "en": "Otherworldly Bough",
      "ja": "異形樹の枝",
      "zh": "异形树枝杖"
    },
    "weapon": "Staff",
    "element": "None",
    "rarity": "5",
    "skill": {
      "name": "Ethereal Circle",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of '''612%''' damage to surrounding enemies.",
      "description2": "Deals 1 hit of '''680%''' damage to surrounding enemies.",
      "description3": "Deals non-elemental damage to surrounding enemies.",
      "Sp": 15205,
      "SPLv2": 15205,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 40,
    "MaxHp": 135,
    "MinAtk": 126,
    "MaxAtk": 421,
    "abilities11": 0,
    "abilities21": 0
  }
];
export default weapon;