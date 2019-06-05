const adventurer =
 [
  {
    "id": "100001_01",
    "name": {
      "en": "Euden",
      "ja": "ユーディル",
      "zh": "尤蒂尔"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 60,
    "MinHp5": 68,
    "MaxHp": 429,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 68,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 24,
    "MinAtk3": 28,
    "MinAtk4": 40,
    "MinAtk5": 46,
    "MaxAtk": 288,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Dragon's Claws I",
      "details": "Each shapeshift increases strength for the remainder  of the quest (up to three times per quest). On first shapeshift strength is increased by '''4%''' in total. On second shapeshift strength is increased by '''10%''' in total. On third shapeshift strength is increased by '''20%''' in total.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon's Claws",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Dragon's Claws II",
      "details": "Each shapeshift increases strength for the remainder  of the quest (up to three times per quest).  On first shapeshift strength is increased by '''5%''' in total. On second shapeshift strength is increased by '''13%''' in total. On third shapeshift strength is increased by '''25%''' in total.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon's Claws",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Player EXP +10%",
      "details": "Increases player EXP intake for clearing quests by '''10%'''. This ability does not stack with other similar abilities; the highest value will be applied.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 10
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Player EXP",
        "ability_value": 10
      }
    },
    "abilities32": {
      "name": "Player EXP +15%",
      "details": "Increases player EXP intake for clearing quests by '''15%'''. This ability does not stack with other similar abilities; the highest value will be applied.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 10
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Player EXP",
        "ability_value": 15
      }
    },
    "skill1": {
      "name": "Blazing Circlet",
      "icon": "Icon_Skill_004",
      "description1": "Deals two hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;304%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals two hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;338%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals two hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;375%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 2376,
      "SPLv2": 2376,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 676.0
        }
      }
    },
    "skill2": {
      "name": "Exalted Fire",
      "icon": "Icon_Skill_005",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;608%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;638%&lt;/span&gt; flame damage to enemies in a line, and reduces their defense by '''5%''' for 10 seconds with '''90%''' base chance.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;760%&lt;/span&gt; flame damage to enemies in a line, and reduces their defense by '''10%''' for 10 seconds with '''100%''' base chance.",
      "Sp": 4880,
      "SPLv2": 4880,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 638.0
        }
      }
    }
  },
  {
    "id": "100002_01",
    "name": {
      "en": "Elisanne",
      "ja": "エルフィリス",
      "zh": "埃尔菲莉丝"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 44,
    "MinHp4": 63,
    "MinHp5": 72,
    "MaxHp": 451,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 27,
    "MinAtk4": 38,
    "MinAtk5": 44,
    "MaxAtk": 276,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Buff Time +20%",
      "details": "Increases duration of buff skills by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Buff Time +25%",
      "details": "Increases duration of buff skills by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Brave Bastion",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''15%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''20%''' for 15 seconds.",
      "Sp": 3817,
      "SPLv2": 3817,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Hallowed Waters",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;679%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;754%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;838%&lt;/span&gt; water damage to the target and enemies near it.",
      "Sp": 5158,
      "SPLv2": 5158,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 679.0
        },
        "lvl2": {
          "BASE": 754.0
        }
      }
    }
  },
  {
    "id": "100002_02",
    "name": {
      "en": "Elisanne",
      "ja": "エルフィリス",
      "zh": "埃尔菲莉丝"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 475,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 289,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Gauge Accelerator +30%",
      "details": "Speeds the rate the mode gauge decreases by '''30%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 35
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Accelerator",
        "ability_value": 30
      }
    },
    "abilities32": {
      "name": "Gauge Accelerator +35%",
      "details": "Speeds the rate the mode gauge decreases by '''35%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 35
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Accelerator",
        "ability_value": 35
      }
    },
    "skill1": {
      "name": "Sacred Maiden",
      "icon": "Icon_Skill_022",
      "description1": "Deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;93%&lt;/span&gt; light damage to enemies directly ahead, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase II deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;93%&lt;/span&gt; light damage and increases the entire team's strength by '''5%''' for 15 seconds, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase III deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;93%&lt;/span&gt; light damage, increases the entire team's strength by '''5%''' for 15 seconds and adds health restoration with '''54%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "description2": "Deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;104%&lt;/span&gt; light damage to enemies directly ahead, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase II deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;104%&lt;/span&gt; light damage and increases the entire team's strength by '''8%''' for 15 seconds, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase III deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;104%&lt;/span&gt; light damage, increases the entire team's strength by '''8%''' for 15 seconds and adds health restoration with '''72%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "description3": "Deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;115%&lt;/span&gt; light damage to enemies directly ahead, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase II deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;115%&lt;/span&gt; light damage and increases the entire team's strength by '''10%''' for 15 seconds, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase III deals 7 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;115%&lt;/span&gt; light damage, increases the entire team's strength by '''10%''' for 15 seconds and adds health restoration with '''90%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "Sp": 2450,
      "SPLv2": 2450,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 651.0
        },
        "lvl2": {
          "BASE": 728.0
        },
        "lvl3": {
          "BASE": 805.0
        }
      }
    },
    "skill2": {
      "name": "Mischief Maker",
      "icon": "Icon_Skill_012",
      "description1": "Deals 10 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;75%&lt;/span&gt; light damage to enemies directly ahead, and fills the user's skill gauges by '''350''' SP if the attack connects.",
      "description2": "Deals 10 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;83%&lt;/span&gt; light damage to enemies directly ahead, and fills the user's skill gauges by '''500''' SP if the attack connects.",
      "description3": "Deals 10 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;92%&lt;/span&gt; light damage to enemies directly ahead, and fills the user's skill gauges by '''500''' SP if the attack connects.",
      "Sp": 5252,
      "SPLv2": 5252,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 750.0
        },
        "lvl2": {
          "BASE": 830.0
        }
      }
    }
  },
  {
    "id": "100003_01",
    "name": {
      "en": "Ranzal",
      "ja": "ランザーヴ",
      "zh": "兰扎卜"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 468,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Slayer's Strength +4%",
      "details": "Increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities12": {
      "name": "Slayer's Strength +5%",
      "details": "Increases strength by '''5%''' for every five enemies defeated (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Last Defense +50%",
      "details": "Buffs defense by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Tornado Bash",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;231%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;257%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;285%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 2805,
      "SPLv2": 2805,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 1028.0
        },
        "lvl3": {
          "BASE": 1140.0
        }
      }
    },
    "skill2": {
      "name": "Storm Wall",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a one-hit shield that nullifies damage less than '''20%''' of the user's HP. This does not stack with any other shields.",
      "description2": "Grants all teammates a one-hit shield that nullifies damage less than '''30%''' of the user's HP. This does not stack with any other shields.",
      "description3": "Grants all teammates a one-hit shield that nullifies water damage less than '''50%''' of the user's HP. This does not stack with any other shields.",
      "Sp": 7288,
      "SPLv2": 7288,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "100003_07",
    "name": {
      "en": "Ranzal",
      "ja": "ランザーヴ",
      "zh": "兰扎卜"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 452,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 301,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 48,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Experience's Boon I",
      "details": "Grants the user an Attack Gauge and a Burst Gauge. The Attack Gauge fills when regular attacks connect with enemies, while the Burst Gauge is filled when force strikes successfully connect. &lt;br&gt;\nThe user's defense is increased by '''5%''' for 1 completely filled gauge and '''10%''' if both gauges are completely filled. &lt;br&gt;\nAny filled gauges are consumed when using the [[Cyclone Blade]] skill, increasing its power by '''15%''' for 1 completely filled gauge and '''50%''' if both gauges are completely filled.",
      "might": 80,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Experience's Boon",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Experience's Boon II",
      "details": "Grants the user an Attack Gauge and a Burst Gauge. The Attack Gauge fills when regular attacks connect with enemies, while the Burst Gauge is filled when force strikes successfully connect.  &lt;br&gt;\nThe user's defense is increased by '''8%''' for 1 completely filled gauge and '''15%''' if both gauges are completely filled. &lt;br&gt;\nAny filled gauges are consumed when using the [[Cyclone Blade]] skill, increasing its power by '''20%''' for 1 completely filled gauge and '''80%''' if both gauges are completely filled.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Experience's Boon",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Relentless Spirit I",
      "details": "Reduces susceptibility to freeze and bog by '''50%'''.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Relentless Spirit",
        "ability_value": 1
      }
    },
    "abilities22": {
      "name": "Relentless Spirit II",
      "details": "Reduces susceptibility to freeze and bog by '''100%'''.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Relentless Spirit",
        "ability_value": 2
      }
    },
    "abilities31": {
      "name": "Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Cyclone Blade",
      "icon": "Icon_Skill_020",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;112%&lt;/span&gt; wind damage to the target and nearby enemies. Damage is increased when [[Experience's Boon]] has full gauges.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;124%&lt;/span&gt; wind damage to the target and nearby enemies. Damage is increased when [[Experience's Boon]] has full gauges.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;138%&lt;/span&gt; wind damage to the target and nearby enemies. Damage is increased when [[Experience's Boon]] has full gauges.",
      "Sp": 2661,
      "SPLv2": 2661,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 672.0
        },
        "lvl2": {
          "BASE": 744.0
        },
        "lvl3": {
          "BASE": 828.0
        }
      }
    },
    "skill2": {
      "name": "Wind Tactics",
      "icon": "Icon_Skill_035",
      "description1": "Activates &quot;Gale-Clad Sword.&quot; The next three force strikes will deal 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;75% (83%)&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;83% (92%)&lt;/span&gt; wind damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and can damage far-away enemies. &lt;br&gt;\nAlso increases the entire team's defense by '''8%''' for 10 seconds. &lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 3.3 for all hits of Gale-Clad Sword, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345. [[Combat Mechanics#Force Strikes|Gauge Gain]] is increased to 350 from 150.",
      "description2": "Activates &quot;Gale-Clad Sword.&quot; The next three force strikes will deal 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;75% (83%)&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;83% (92%)&lt;/span&gt; wind damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and can damage far-away enemies. &lt;br&gt;\nAlso increases the entire team's defense by '''10%''' for 10 seconds. &lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 3.3 for all hits of Gale-Clad Sword, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345. [[Combat Mechanics#Force Strikes|Gauge Gain]] is increased to 350 from 150.",
      "description3": "",
      "Sp": 5800,
      "SPLv2": 5800,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "100004_01",
    "name": {
      "en": "Cleo",
      "ja": "クラウ",
      "zh": "库菈乌"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 456,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Defense +8%",
      "details": "Increases defense by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Elder Cure",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|paralysis]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|paralysis]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Ancient Aegis",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''20%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''20%''' for 30 seconds.",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "100004_02",
    "name": {
      "en": "Cleo",
      "ja": "クラウ",
      "zh": "库菈乌"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 480,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 284,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "HP 70% = Strength +13%",
      "details": "Increases strength by '''13%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "35 Hits = Energy Level Up",
      "details": "Increases the user's energy level by '''one''' stage for every 35-hit combo.",
      "might": 70,
      "limit": 0,
      "values": {}
    },
    "abilities32": {
      "name": "30 Hits = Energy Level Up",
      "details": "Increases the user's energy level by '''one''' stage for every 30-hit combo.",
      "might": 100,
      "limit": 0,
      "values": {}
    },
    "skill1": {
      "name": "Starlit Gift",
      "icon": "Icon_Skill_916",
      "description1": "Deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;60%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance, and increases the energy levels of the user and nearby allies by '''one''' stage. This skill activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase II deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;60%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage and increases the strength of the user and nearby allies by '''10%''' for 10 seconds, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase III deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;60%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage, increases the strength of the user and nearby allies by '''10%''' for 10 seconds and increases their critical rate by '''8%''' for 10 seconds. Skill Shift ends when you connect again during Phase III.",
      "description2": "Deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;63%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance, and increases the energy levels of the user and nearby allies by '''one''' stage. This skill activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase II deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;63%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage and increases the strength of the user and nearby allies by '''10%''' for 10 seconds, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase III deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;63%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage, increases the strength of the user and nearby allies by '''10%''' for 10 seconds and increases their critical rate by '''8%''' for 10 seconds. Skill Shift ends when you connect again during Phase III.",
      "description3": "Deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;67%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance, and increases the energy levels of the user and nearby allies by '''one''' stage. This skill activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase II deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;67%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage and increases the strength of the user and nearby allies by '''10%''' for 10 seconds, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br&gt;&lt;br&gt;Phase III deals 11 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;67%&lt;/span&gt; water damage to enemies directly ahead, inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance, increases the energy levels of the user and nearby allies by '''one''' stage, increases the strength of the user and nearby allies by '''10%''' for 10 seconds and increases their critical rate by '''8%''' for 10 seconds. Skill Shift ends when you connect again during Phase III.",
      "Sp": 3136,
      "SPLv2": 3136,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 660.0
        },
        "lvl2": {
          "BASE": 693.0
        },
        "lvl3": {
          "BASE": 737.0
        }
      }
    },
    "skill2": {
      "name": "Empyrean Grace",
      "icon": "Icon_Skill_003",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;133%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;148%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "",
      "Sp": 4882,
      "SPLv2": 4882,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 665.0
        },
        "lvl2": {
          "BASE": 740.0
        }
      }
    }
  },
  {
    "id": "100005_01",
    "name": {
      "en": "Alex",
      "ja": "シャノン",
      "zh": "沙音"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 431,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 24,
    "MinAtk3": 28,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 285,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Full HP = Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Full HP = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "abilities21": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Blindness Res +100%",
      "details": "Reduces susceptibility to blindness by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Haste +5%",
      "details": "Increases skill gauge fill rate by '''5%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 5
      }
    },
    "skill1": {
      "name": "Shadow Weaver",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;151%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;159%&lt;/span&gt; shadow damage to surrounding enemies, and reduces their defense by '''5%''' for '''10''' seconds with '''40%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;166%&lt;/span&gt; shadow damage to surrounding enemies, and reduces their defense by '''5%''' for '''10''' seconds with '''40%''' base chance.",
      "Sp": 2243,
      "SPLv2": 2243,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 636.0
        },
        "lvl3": {
          "BASE": 664.0
        }
      }
    },
    "skill2": {
      "name": "Silent Reaper",
      "icon": "Icon_Skill_020",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;109%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;218%&lt;/span&gt; shadow damage to the target and nearby enemies. Against broken foes, deal 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;218%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;436%&lt;/span&gt; shadow damage instead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;121%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;241%&lt;/span&gt; shadow damage to the target and nearby enemies. Against broken foes, deal 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;242%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;482%&lt;/span&gt; shadow damage instead.",
      "description3": "",
      "Sp": 4925,
      "SPLv2": 4925,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 1635.0
        },
        "lvl2": {
          "BASE": 1812.0
        }
      }
    }
  },
  {
    "id": "100006_01",
    "name": {
      "en": "Luca",
      "ja": "リュカ",
      "zh": "卢卡"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 460,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +13%",
      "details": "Increases strength by '''13%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Radiant Bonds",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;699%&lt;/span&gt; light damage to the target.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;734%&lt;/span&gt; light damage to the target, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''66%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;771%&lt;/span&gt; light damage to the target, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''88.3%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "Sp": 2504,
      "SPLv2": 2504,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        },
        "lvl3": {
          "BASE": 771.0
        }
      }
    },
    "skill2": {
      "name": "Bolt of Light",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;699%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;777%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;863%&lt;/span&gt; light-based damage to enemies in a line.",
      "Sp": 5115,
      "SPLv2": 5115,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 777.0
        }
      }
    }
  },
  {
    "id": "100010_04",
    "name": {
      "en": "Mym",
      "ja": "ムム",
      "zh": "Mym"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 448,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 72,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 305,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flamewyrm's Nature I",
      "details": "Reduces susceptibility to burning by '''100%'''. When shapeshifting for the first time, [[Gala Mym|Mym]] will transform into [[Brunhilda]] regardless of what dragon she is equipped with, and her strength will increase by '''15%''' for the remainder of the quest. The second time onwards, she will transform into [[High Brunhilda]] instead, and her attack rate while shapeshifted will increase by '''15%'''.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flamewyrm's Nature",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Flamewyrm's Nature II",
      "details": "Reduces susceptibility to burning by '''100%'''. When shapeshifting for the first time, [[Gala Mym|Mym]] will transform into [[Brunhilda]] regardless of what dragon she is equipped with, her strength will increase by '''15%''' for the remainder of the quest, and the skill [[Flames of Passion]] will be powered up for the remainder of the quest. The second time onwards, she will transform into [[High Brunhilda]] instead, and her attack rate while shapeshifted will increase by '''15%'''.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flamewyrm's Nature",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Flamewyrm's Defiance I",
      "details": "Reduces susceptibility to stun by '''50%'''. When [[Gala Mym|Mym]] is hit by an attack that would have stunned her, the skill gauge for the [[Dragon Claw]] skill fills by '''25%'''. After activating, this gauge-filling effect will not activate again for 15 seconds.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flamewyrm's Defiance",
        "ability_value": 1
      }
    },
    "abilities22": {
      "name": "Flamewyrm's Defiance II",
      "details": "Reduces susceptibility to stun by '''100%'''. When [[Gala Mym|Mym]] is hit by an attack that would have stunned her, the skill gauge for the [[Dragon Claw]] skill fills by '''50%'''. After activating, this gauge-filling effect will not activate again for 15 seconds.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flamewyrm's Defiance",
        "ability_value": 2
      }
    },
    "abilities31": {
      "name": "Dragon Time +15%",
      "details": "Extends shapeshift time by '''15%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon Time",
        "ability_value": 15
      }
    },
    "abilities32": {
      "name": "Dragon Time +20%",
      "details": "Extends shapeshift time by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon Time",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Dragon Claw",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;249%&lt;/span&gt; flame damage to enemies directly ahead, and raises the dragon gauge by '''5%''' if the attack connects.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;276%&lt;/span&gt; flame damage to enemies directly ahead, and raises the dragon gauge by '''5%''' if the attack connects.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;307%&lt;/span&gt; flame damage to enemies directly ahead, and raises the dragon gauge by '''5%''' if the attack connects.",
      "Sp": 2914,
      "SPLv2": 2914,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 747.0
        },
        "lvl2": {
          "BASE": 828.0
        },
        "lvl3": {
          "BASE": 921.0
        }
      }
    },
    "skill2": {
      "name": "Flames of Passion",
      "icon": "Icon_Skill_025",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;187%&lt;/span&gt; flame damage to enemies in a line. &lt;br&gt;\nAfter [[Dragon Transformation|transformation]], '''Flames of Passion''' deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;281%&lt;/span&gt; flame damage instead for the remainder of the quest.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;207%&lt;/span&gt; flame damage to enemies in a line. &lt;br&gt;\nAfter [[Dragon Transformation|transformation]], '''Flames of Passion''' deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;311%&lt;/span&gt; flame damage instead for the remainder of the quest.",
      "description3": "",
      "Sp": 5736,
      "SPLv2": 5736,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 748.0,
          "After [[Dragon Transformation|transformation]], '''Flames of Passion'''": 1124.0
        },
        "lvl2": {
          "BASE": 828.0,
          "After [[Dragon Transformation|transformation]], '''Flames of Passion'''": 1244.0
        }
      }
    }
  },
  {
    "id": "100029_02",
    "name": {
      "en": "Sarisse",
      "ja": "シーリス",
      "zh": "希里丝"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 49,
    "MinHp4": 61,
    "MinHp5": 71,
    "MaxHp": 505,
    "PlusHp0": 59,
    "PlusHp1": 68,
    "PlusHp2": 81,
    "PlusHp3": 68,
    "PlusHp4": 34,
    "McFullBonusHp5": 28,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 290,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Sylvan Strength I",
      "details": "Increases the user's strength by '''2%''' and critical rate by '''1%''' for 15 seconds for every 25-hit combo.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sylvan Strength",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Sylvan Strength II",
      "details": "Increases the user's strength by '''2%''' and critical rate by '''1%''' for 15 seconds for every 20-hit combo.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sylvan Strength",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Woodland Blessing I",
      "details": "Reduces susceptibility to stun and sleep by '''50%'''.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Woodland Blessing",
        "ability_value": 1
      }
    },
    "abilities22": {
      "name": "Woodland Blessing II",
      "details": "Reduces susceptibility to stun and sleep by '''100%'''.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Woodland Blessing",
        "ability_value": 2
      }
    },
    "abilities31": {
      "name": "Buff Time +25%",
      "details": "Increases duration of buff skills by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Buff Time +30%",
      "details": "Increases duration of buff skills by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Brilliant Bolt",
      "icon": "Icon Skill 014",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;769%&lt;/span&gt; flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has with &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;77%&lt;/span&gt; flame damage each, for a maximum of 7 additional shots.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;854%&lt;/span&gt; flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has with &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;85%&lt;/span&gt; flame damage each, for a maximum of 7 additional shots.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;949%&lt;/span&gt; flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has with &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;95%&lt;/span&gt; flame damage each, for a maximum of 7 additional shots.",
      "Sp": 2803,
      "SPLv2": 2803,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 769.0
        },
        "lvl2": {
          "BASE": 854.0
        }
      }
    },
    "skill2": {
      "name": "Cheerful Assist",
      "icon": "Icon Skill 030",
      "description1": "Increases the entire team's strength by '''15%''' for 10 seconds. If used again, the skill will increase the entire team's defense by '''15%''' for 15 seconds instead, after which the skill will revert to its initial effect.",
      "description2": "Increases the entire team's strength by '''20%''' for 10 seconds. If used again, the skill will increase the entire team's defense by '''20%''' for 15 seconds instead, after which the skill will revert to its initial effect.",
      "description3": "",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110001_01",
    "name": {
      "en": "Alain",
      "ja": "アラン",
      "zh": "阿兰"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 470,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 29,
    "MinAtk3": 25,
    "MinAtk4": 31,
    "MinAtk5": 37,
    "MaxAtk": 262,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 42,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Defense +40%",
      "details": "Buffs defense by '''40%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "Last Defense +50%",
      "details": "Buffs defense by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Noble Flame",
      "icon": "Icon_Skill_012",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;206%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;229%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;254%&lt;/span&gt; flame damage to enemies directly ahead.",
      "Sp": 2581,
      "SPLv2": 2581,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 687.0
        },
        "lvl3": {
          "BASE": 762.0
        }
      }
    },
    "skill2": {
      "name": "Blazing Rondel",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;309%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;343%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;381%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 5112,
      "SPLv2": 5112,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 686.0
        }
      }
    }
  },
  {
    "id": "110002_01",
    "name": {
      "en": "Aoi",
      "ja": "アオイ",
      "zh": "葵"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 59,
    "MaxHp": 421,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 67,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 24,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 41,
    "MaxAtk": 295,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Overdrive Punisher +5%",
      "details": "Increases damage to enemies in overdrive state by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Overdrive Punisher +8%",
      "details": "Increases damage to enemies in overdrive state by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Searing Chakram",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;711%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;790%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;878%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 2630,
      "SPLv2": 2630,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 711.0
        },
        "lvl2": {
          "BASE": 790.0
        },
        "lvl3": {
          "BASE": 878.0
        }
      }
    },
    "skill2": {
      "name": "Foliage Flare",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;711%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;790%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;878%&lt;/span&gt; flame damage to enemies in a line.",
      "Sp": 5280,
      "SPLv2": 5280,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 711.0
        },
        "lvl2": {
          "BASE": 790.0
        }
      }
    }
  },
  {
    "id": "110003_01",
    "name": {
      "en": "Joe",
      "ja": "ジョー",
      "zh": "乔"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 433,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 281,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Burn +30%",
      "details": "Increases the chances of inflicting burn by '''30%''' when HP is '''full'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Burn",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Full HP = Burn +40%",
      "details": "Increases the chances of inflicting burn by '''40%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Burn",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Quillstorm",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;212%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;235%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals 3 shots of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;262%&lt;/span&gt; flame damage to enemies in a line.",
      "Sp": 2395,
      "SPLv2": 2395,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 636.0
        },
        "lvl2": {
          "BASE": 705.0
        },
        "lvl3": {
          "BASE": 786.0
        }
      }
    },
    "skill2": {
      "name": "Burning Arrow",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;635%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;667%&lt;/span&gt; flame damage to enemies in a line, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''60%''' damage every 3.99 seconds - with '''90%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;701%&lt;/span&gt; flame damage to enemies in a line, and inflicts [[Conditions#Afflictions|burn]].",
      "Sp": 5051,
      "SPLv2": 5051,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 635.0
        },
        "lvl2": {
          "BASE": 667.0
        }
      }
    }
  },
  {
    "id": "110004_01",
    "name": {
      "en": "Xania",
      "ja": "サニア",
      "zh": "桑妮雅"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 425,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 68,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 291,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Damage +15%",
      "details": "Increases attack skill damage by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Ivyblaze",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;725%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;805%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;895%&lt;/span&gt; flame damage to enemies in a line.",
      "Sp": 2759,
      "SPLv2": 2759,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        },
        "lvl3": {
          "BASE": 895.0
        }
      }
    },
    "skill2": {
      "name": "Pyreblossom",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;725%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 1 hit  of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;805%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;895%&lt;/span&gt; flame damage to the target and enemies near it.",
      "Sp": 5570,
      "SPLv2": 5570,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        }
      }
    }
  },
  {
    "id": "110005_01",
    "name": {
      "en": "Renelle",
      "ja": "ラシーヌ",
      "zh": "拉辛"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 454,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flurry Devastation +5%",
      "details": "Increases critical rate by '''5%''' when the combo count is 15 or higher.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Flurry Devastation +8%",
      "details": "Increases critical rate by '''8%''' when the combo count is 15 or higher.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Flamewhorl",
      "icon": "Icon_Skill_004",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;183%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;203%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;226%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 2318,
      "SPLv2": 2318,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 549.0
        },
        "lvl2": {
          "BASE": 609.0
        },
        "lvl3": {
          "BASE": 678.0
        }
      }
    },
    "skill2": {
      "name": "Subterfuge",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;275%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;288%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''30%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;303%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''10%''' for 10 seconds with '''30%''' base chance.",
      "Sp": 4892,
      "SPLv2": 4892,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 550.0
        },
        "lvl2": {
          "BASE": 576.0
        }
      }
    }
  },
  {
    "id": "110006_01",
    "name": {
      "en": "Aurien",
      "ja": "オーレイン",
      "zh": "欧雷因"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 458,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "HP 70% = Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "HP 70% = Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Healer's Luck",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Red Hot Jackpot",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;506%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;562%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;624%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 9214,
      "SPLv2": 9214,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 506.0
        },
        "lvl2": {
          "BASE": 562.0
        }
      }
    }
  },
  {
    "id": "110007_01",
    "name": {
      "en": "Vanessa",
      "ja": "ヴァネッサ",
      "zh": "凡妮莎"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 431,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 300,
    "PlusAtk0": 35,
    "PlusAtk1": 40,
    "PlusAtk2": 48,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Force Strike +40%",
      "details": "Increases force strike damage by '''40%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Last Offense +30%",
      "details": "Buffs strength by '''30%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Scarlet Geyser",
      "icon": "Icon_Skill_011",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;462%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;513%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;570%&lt;/span&gt; flame damage to enemies directly ahead.",
      "Sp": 3033,
      "SPLv2": 3033,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 1026.0
        },
        "lvl3": {
          "BASE": 1140.0
        }
      }
    },
    "skill2": {
      "name": "Crimson Impact",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;462%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;485%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''100%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;509%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''10%''' with '''100%''' base chance.",
      "Sp": 6016,
      "SPLv2": 6016,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 970.0
        }
      }
    }
  },
  {
    "id": "110008_01",
    "name": {
      "en": "Karl",
      "ja": "カール",
      "zh": "卡尔"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 65,
    "MaxHp": 461,
    "PlusHp0": 54,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 278,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 20,
    "DefCoef": 10,
    "abilities11": {
      "name": "Slayer's Strength +4%",
      "details": "Increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities12": {
      "name": "Slayer's Strength +5%",
      "details": "Increases strength by '''5%''' for every five enemies defeated (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Vanquishing Flame",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;304%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;338%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;375%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 2376,
      "SPLv2": 2376,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 676.0
        },
        "lvl3": {
          "BASE": 750.0
        }
      }
    },
    "skill2": {
      "name": "Soul Ignition",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''15%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''15%''' for 30 seconds.",
      "Sp": 6610,
      "SPLv2": 6610,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110009_01",
    "name": {
      "en": "Sinoa",
      "ja": "シノア",
      "zh": "希诺亚"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 456,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 25,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 283,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +13%",
      "details": "Increases strength by '''13%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Buff Time +20%",
      "details": "Increases duration of buff skills by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Custom Concoction",
      "icon": "Icon_Skill_032",
      "description1": "Applies one of the following at random to the entire team:&lt;br/&gt;Increases strength by '''15%''' for 15 seconds&lt;br/&gt;Increases defense by '''15%''' for 15 seconds&lt;br/&gt;Increases critical rate by '''15%''' for 10 seconds&lt;br/&gt;Increases max HP by '''5%''' for the remainder of the quest&lt;br/&gt;Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Applies one of the following at random to the entire team:&lt;br/&gt;Increases strength by '''20%''' for 15 seconds&lt;br/&gt;Increases defense by '''20%''' for 15 seconds&lt;br/&gt;Increases critical rate by '''20%''' for 10 seconds&lt;br/&gt;Increases max HP by '''10%''' for the remainder of the quest&lt;br/&gt;Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Applies one of the following at random to the entire team:&lt;br/&gt;Increases strength by '''25%''' for 15 seconds&lt;br/&gt;Increases defense by '''25%''' for 15 seconds&lt;br/&gt;Increases critical rate by '''25%''' for 10 seconds&lt;br/&gt;Increases max HP by '''15%''' for the remainder of the quest&lt;br/&gt;Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 3817,
      "SPLv2": 3817,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Blundering Bomber",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;399%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;443%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "",
      "Sp": 5422,
      "SPLv2": 5422,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 798.0
        },
        "lvl2": {
          "BASE": 886.0
        }
      }
    }
  },
  {
    "id": "110010_01",
    "name": {
      "en": "Mikoto",
      "ja": "ミコト",
      "zh": "米科特"
    },
    "weapon": "Blade",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 62,
    "MaxHp": 443,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 24,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 44,
    "MaxAtk": 311,
    "PlusAtk0": 36,
    "PlusAtk1": 42,
    "PlusAtk2": 50,
    "PlusAtk3": 42,
    "PlusAtk4": 21,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Critical Rate +8%",
      "details": "Increases critical rate by '''8%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "HP 70% = Critical Rate +10%",
      "details": "Increases critical rate by '''10%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Critical Rate +6%",
      "details": "Increases critical rate by '''6%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Rate",
        "ability_value": 6
      }
    },
    "abilities32": {
      "name": "Critical Rate +8%",
      "details": "Increases critical rate by '''8%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Rate",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Ravenous Fire",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;431%&lt;/span&gt; flame damage to enemies directly ahead, and activates &quot;Flare Stance&quot; for 20 seconds if the attack connects. During Flare Stance, the user's strength and skills are both increased by '''10%''' and gives access to Ravenous Fire (Flare).&lt;br/&gt;&lt;br/&gt;Ravenous Fire (Flare) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;287%&lt;/span&gt; flame damage, ends Flare Stance, and activates &quot;Ruin Stance&quot; for 15 seconds. During Ruin Stance, the user's strength and skills are both increased by '''15%''', and gives access to Ravenous Fire (Ruin).&lt;br/&gt;&lt;br/&gt;\nRavenous Fire (Ruin) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;173%&lt;/span&gt; flame damage, a final hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;345%&lt;/span&gt; flame damage and ends Ruin Stance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;479%&lt;/span&gt; flame damage to enemies directly ahead, and activates &quot;Flare Stance&quot; for 20 seconds if the attack connects. During Flare Stance, the user's strength and skills are both increased by '''10%''' and gives access to Ravenous Fire (Flare).&lt;br/&gt;&lt;br/&gt;Ravenous Fire (Flare) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;319%&lt;/span&gt; flame damage, ends Flare Stance, and activates &quot;Ruin Stance&quot; for 15 seconds. During Ruin Stance, the user's strength and skills are both increased by '''15%''', and gives access to Ravenous Fire (Ruin).&lt;br/&gt;&lt;br/&gt;Ravenous Fire (Ruin) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;192%&lt;/span&gt; flame damage, a final hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;383%&lt;/span&gt; flame damage and ends Ruin Stance.&lt;br/&gt;&lt;br/&gt;",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;532%&lt;/span&gt; flame damage to enemies directly ahead, and activates &quot;Flare Stance&quot; for 20 seconds if the attack connects. During Flare Stance, the user's strength and skills are both increased by '''10%''' and gives access to Ravenous Fire (Flare).&lt;br/&gt;&lt;br/&gt;Ravenous Fire (Flare) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;354%&lt;/span&gt; flame damage, ends Flare Stance, and activates &quot;Ruin Stance&quot; for 15 seconds. During Ruin Stance, the user's strength and skills are both increased by '''15%''', and gives access to Ravenous Fire (Ruin).&lt;br/&gt;&lt;br/&gt;Ravenous Fire (Ruin) deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;213%&lt;/span&gt; flame damage, a final hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;425%&lt;/span&gt; flame damage and ends Ruin Stance.",
      "Sp": 4500,
      "SPLv2": 4500,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 862.0,
          "Ravenous Fire (Flare)": 861.0,
          "Ravenous Fire (Ruin)": 864.0
        },
        "lvl2": {
          "BASE": 958.0,
          "Ravenous Fire (Flare)": 957.0,
          "Ravenous Fire (Ruin)": 959.0
        },
        "lvl3": {
          "BASE": 1064.0,
          "Ravenous Fire (Flare)": 1062.0,
          "Ravenous Fire (Ruin)": 1064.0
        }
      }
    },
    "skill2": {
      "name": "Kindled Heart",
      "icon": "Icon_Skill_032",
      "description1": "Increases the user's attack rate by '''15%''' for 10 seconds.",
      "description2": "Increases the user's attack rate by '''20%''' for 10 seconds.",
      "description3": "Increases the user's attack rate by '''25%''' for 10 seconds.",
      "Sp": 4500,
      "SPLv2": 4500,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110011_01",
    "name": {
      "en": "Ezelith",
      "ja": "エゼリット",
      "zh": "艾赛莉特"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 67,
    "MaxHp": 477,
    "PlusHp0": 56,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 29,
    "MinAtk3": 28,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 285,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flurry Debilitator +15%",
      "details": "Increases the chances of inflicting debuffs by '''15%''' when the combo count is 15 or higher.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Debilitator",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Flurry Debilitator +20%",
      "details": "Increases the chances of inflicting debuffs by '''20%''' when the combo count is 15 or higher.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Debilitator",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +25%",
      "details": "Increases damage to enemies in break state by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Broken Punisher +30%",
      "details": "Increases damage to enemies in break state by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Howling Meteor",
      "icon": "Icon_Skill_003",
      "description1": "Deals 10 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;46%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;203%&lt;/span&gt; flame damage to enemies directly ahead. Movement is possible during the attack.",
      "description2": "Deals 10 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;51%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;225%&lt;/span&gt; flame damage to enemies directly ahead. Movement is possible during the attack.",
      "description3": "Deals 10 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;57%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;250%&lt;/span&gt; flame damage to enemies directly ahead. Movement is possible during the attack.",
      "Sp": 2400,
      "SPLv2": 2400,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 663.0
        },
        "lvl2": {
          "BASE": 735.0
        },
        "lvl3": {
          "BASE": 820.0
        }
      }
    },
    "skill2": {
      "name": "Brilliant Inferno",
      "icon": "Icon_Skill_032",
      "description1": "Activates &quot;Inferno Mode&quot; for 15 seconds. During Inferno Mode, the user's strength is increased by '''10%''', and their normal attacks reduces enemy defense by '''5%''' for 5 seconds with '''15%''' base chance.",
      "description2": "Activates &quot;Inferno Mode&quot; for 15 seconds. During Inferno Mode, the user's strength is increased by '''15%''', and their normal attacks reduces enemy defense by '''5%''' for 5 seconds with '''15%''' base chance.",
      "description3": "Activates &quot;Inferno Mode&quot; for '''30''' seconds. During Inferno Mode, the user's strength is increased by '''20%''', and their normal attacks reduces enemy defense.",
      "Sp": 8940,
      "SPLv2": 8940,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    }
  },
  {
    "id": "110011_02",
    "name": {
      "en": "Ezelith",
      "ja": "エゼリット",
      "zh": "艾赛莉特"
    },
    "weapon": "Bow",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 471,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 75,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 276,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "40 Hits = Energy Level Up",
      "details": "Increases the user's energy level by '''one''' stage for every 40-hit combo.",
      "might": 60,
      "limit": 0,
      "values": {}
    },
    "abilities12": {
      "name": "35 Hits = Energy Level Up",
      "details": "Increases the user's energy level by '''one''' stage for every 35-hit combo.",
      "might": 70,
      "limit": 0,
      "values": {}
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Floral Explosion",
      "icon": "Icon_Skill_016",
      "description1": "Deals 8 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;87%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 8 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;91%&lt;/span&gt; flame damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''66%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "description3": "Deals 8 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;96%&lt;/span&gt; flame damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''88.3%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "Sp": 2708,
      "SPLv2": 2708,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 696.0
        },
        "lvl2": {
          "BASE": 728.0
        },
        "lvl3": {
          "BASE": 768.0
        }
      }
    },
    "skill2": {
      "name": "Piercing Rose",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;699%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;716%&lt;/span&gt; flame damage to enemies in a line, and reduces their defense by '''10%''' for 10 seconds with '''90%''' base chance.",
      "description3": "",
      "Sp": 5115,
      "SPLv2": 5115,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 716.0
        }
      }
    }
  },
  {
    "id": "110012_01",
    "name": {
      "en": "Rex",
      "ja": "レックス",
      "zh": "雷克斯"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 424,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 68,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 293,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 47,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Gauge Inhibitor +20%",
      "details": "Slows the rate the mode gauge increases by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Inhibitor",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Gauge Inhibitor +25%",
      "details": "Slows the rate the mode gauge increases by '''25%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Inhibitor",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Smash Hit",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;839%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;933%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; water damage to enemies directly ahead.",
      "Sp": 2942,
      "SPLv2": 2942,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 839.0
        },
        "lvl2": {
          "BASE": 933.0
        },
        "lvl3": {
          "BASE": 1036.0
        }
      }
    },
    "skill2": {
      "name": "Full Woodcutter",
      "icon": "Icon_Skill_001",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;839%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;933%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; water damage to enemies directly ahead.",
      "Sp": 5807,
      "SPLv2": 5807,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 839.0
        },
        "lvl2": {
          "BASE": 933.0
        }
      }
    }
  },
  {
    "id": "110013_01",
    "name": {
      "en": "Waike",
      "ja": "ウェイク",
      "zh": "威克"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 459,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Bog +30%",
      "details": "Increases the chances of inflicting bog by '''30%''' when HP is '''full'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Bog",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Full HP = Bog +40%",
      "details": "Increases the chances of inflicting bog by '''40%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Bog",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Noble Hunter",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;212%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;235%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals 3 shots of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;262%&lt;/span&gt; water damage to enemies in a line.",
      "Sp": 2395,
      "SPLv2": 2395,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 636.0
        },
        "lvl2": {
          "BASE": 705.0
        },
        "lvl3": {
          "BASE": 786.0
        }
      }
    },
    "skill2": {
      "name": "Cascade Shot",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;635%&lt;/span&gt; water damage to the target.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;667%&lt;/span&gt; water damage to the target, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''80%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;701%&lt;/span&gt; water damage to the target and enemies near it, and inflicts [[Conditions#Afflictions|bog]].",
      "Sp": 4989,
      "SPLv2": 4989,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 635.0
        },
        "lvl2": {
          "BASE": 667.0
        }
      }
    }
  },
  {
    "id": "110014_01",
    "name": {
      "en": "Cibella",
      "ja": "シュベール",
      "zh": "休贝尔"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 473,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 75,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 25,
    "MinAtk4": 31,
    "MinAtk5": 37,
    "MaxAtk": 262,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 42,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Recovery I",
      "details": "Grants an HP regen buff healing you for '''8%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Last Recovery II",
      "details": "Grants an HP regen buff healing you for '''10%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Virtuous Guard",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a one-hit shield that nullifies damage less than '''15%''' of the user's HP. This does not stack with any other shields.",
      "description2": "Grants all teammates a one-hit shield that nullifies damage less than '''20%''' of the user's HP. This does not stack with any other shields.",
      "description3": "Grants all teammates a one-hit shield that nullifies damage less than '''30%''' of the user's HP. This does not stack with any other shields.",
      "Sp": 2920,
      "SPLv2": 2920,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Holy Wreath",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;309%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;343%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;381%&lt;/span&gt; water damage to surrounding enemies.",
      "Sp": 5000,
      "SPLv2": 5000,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 686.0
        }
      }
    }
  },
  {
    "id": "110015_01",
    "name": {
      "en": "Zardin",
      "ja": "シャーディ",
      "zh": "夏迪"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 475,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 25,
    "MinAtk4": 31,
    "MinAtk5": 36,
    "MaxAtk": 258,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 41,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Full HP = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Zardin Blade",
      "icon": "Icon_Skill_011",
      "description1": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;552%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;614%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;682%&lt;/span&gt; water damage to enemies directly ahead.",
      "Sp": 2443,
      "SPLv2": 2443,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 614.0
        },
        "lvl3": {
          "BASE": 682.0
        }
      }
    },
    "skill2": {
      "name": "Zardin's Wrath",
      "icon": "Icon_Skill_014",
      "description1": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;552%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;614%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals one hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;682%&lt;/span&gt; water damage to enemies in a line.",
      "Sp": 5225,
      "SPLv2": 5225,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 614.0
        }
      }
    }
  },
  {
    "id": "110015_02",
    "name": {
      "en": "Zardin",
      "ja": "シャーディ",
      "zh": "夏迪"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 446,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 309,
    "PlusAtk0": 36,
    "PlusAtk1": 42,
    "PlusAtk2": 49,
    "PlusAtk3": 42,
    "PlusAtk4": 21,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Striker's Energy II",
      "details": "Increases energy level by '''two''' stages for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Energy",
        "ability_value": 2
      }
    },
    "abilities12": {
      "name": "Striker's Energy III",
      "details": "Increases energy level by '''three''' stages for every three enemies defeated with force strikes.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Energy",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities32": {
      "name": "HP 70% = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "skill1": {
      "name": "Ravishing Rainbow",
      "icon": "Icon_Skill_925",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;287%&lt;/span&gt; light damage to enemies directly ahead, reduces their strength and defense by '''5%''' with '''30%''' base chance, and increases the user's energy level by '''one''' stage.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;301%&lt;/span&gt; light damage to enemies directly ahead, reduces their strength and defense by '''5%''' with '''30%''' base chance, and increases the user's energy level by '''one''' stage.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;316%&lt;/span&gt; light damage to enemies directly ahead, reduces their strength and defense by '''5%''' with '''30%''' base chance, and increases the user's energy level by '''one''' stage.",
      "Sp": 3080,
      "SPLv2": 3080,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 861.0
        },
        "lvl2": {
          "BASE": 903.0
        },
        "lvl3": {
          "BASE": 948.0
        }
      }
    },
    "skill2": {
      "name": "Stunning Visage",
      "icon": "Icon_Skill_932",
      "description1": "Activates &quot;Stunning Beauty&quot; for 15 seconds and increases the user's energy level by '''one''' stage. During Stunning Beauty, the user's normal attacks inflict [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "description2": "Activates &quot;Stunning Beauty&quot; for 15 seconds and increases the user's energy level by '''two''' stages. During Stunning Beauty, the user's normal attacks inflict [[Conditions#Afflictions|stun]] for 5-6 seconds with '''100%''' base chance.",
      "description3": "",
      "Sp": 5000,
      "SPLv2": 5000,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110016_01",
    "name": {
      "en": "Jurota",
      "ja": "ジュウロウタ",
      "zh": "十郎太"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 423,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 67,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 294,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Broken Punisher +15%",
      "details": "Increases damage to enemies in break state by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Avalanche Blade",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;711%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;790%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;878%&lt;/span&gt; water damage to enemies in a line.",
      "Sp": 2640,
      "SPLv2": 2640,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 711.0
        },
        "lvl2": {
          "BASE": 790.0
        },
        "lvl3": {
          "BASE": 878.0
        }
      }
    },
    "skill2": {
      "name": "Yasha's Brand",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''20%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''30%''' for 5 seconds.",
      "Sp": 4101,
      "SPLv2": 4101,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110017_01",
    "name": {
      "en": "Ricardt",
      "ja": "リカート",
      "zh": "里卡多"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 65,
    "MaxHp": 460,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
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
    "abilities12": {
      "name": "Full HP = Defense +20%",
      "details": "Increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Measure of Mercy",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 7888,
      "SPLv2": 7888,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Holy Water (Skill)",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''34%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "Sp": 11832,
      "SPLv2": 11832,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110018_01",
    "name": {
      "en": "Karina",
      "ja": "カーリナ",
      "zh": "卡丽娜"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 67,
    "MaxHp": 478,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 76,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Healing Doublebuff II",
      "details": "Grants an HP regen buff healing you for '''2%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 2
      }
    },
    "abilities12": {
      "name": "Healing Doublebuff III",
      "details": "Grants an HP regen buff healing you for '''3%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Raging Tide",
      "icon": "Icon_Skill_011",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;440%&lt;/span&gt; water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;489%&lt;/span&gt; water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;543%&lt;/span&gt; water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "Sp": 3033,
      "SPLv2": 3033,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 880.0
        },
        "lvl2": {
          "BASE": 978.0
        },
        "lvl3": {
          "BASE": 1086.0
        }
      }
    },
    "skill2": {
      "name": "Black Flag",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;231%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;257%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;285%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 5610,
      "SPLv2": 5610,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 1028.0
        }
      }
    }
  },
  {
    "id": "110019_01",
    "name": {
      "en": "Thaniel",
      "ja": "セイナー",
      "zh": "塞纳"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 469,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Gauge Inhibitor +25%",
      "details": "Slows the rate the mode gauge increases by '''25%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Inhibitor",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Gauge Inhibitor +30%",
      "details": "Slows the rate the mode gauge increases by '''30%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Inhibitor",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Recovery Potency +8%",
      "details": "Increases the potency of recovery skills by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Healing Wave",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|burn]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|burn]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Seafarer's Pride",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''20%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''25%''' for 15 seconds.",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110020_01",
    "name": {
      "en": "Luther",
      "ja": "ルタ",
      "zh": "卢塔"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 66,
    "MaxHp": 466,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 74,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 275,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flurry Devastation +8%",
      "details": "Increases critical rate by '''8%''' when the combo count is 15 or higher.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Flurry Devastation +10%",
      "details": "Increases critical rate by '''10%''' when the combo count is 15 or higher.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Striker's Strength +4%",
      "details": "Increases strength by '''4%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Strength",
        "ability_value": 4
      }
    },
    "skill1": {
      "name": "Legato Step",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;151%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;167%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;186%&lt;/span&gt; water damage to surrounding enemies.",
      "Sp": 2343,
      "SPLv2": 2343,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 668.0
        },
        "lvl3": {
          "BASE": 744.0
        }
      }
    },
    "skill2": {
      "name": "Terpsichore",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;137%&lt;/span&gt; water damage to enemies directly ahead, and reduces their strength by '''5%''' for 10 seconds with '''90%''' base chance.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;144%&lt;/span&gt; water damage to enemies directly ahead, and reduces their strength by '''5%''' for 10 seconds with '''90%''' base chance. Also reduces their defense by '''5%''' for 10 seconds with '''30%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;151%&lt;/span&gt; water damage to enemies directly ahead, and reduces their strength and defense by '''10%''' for 10 seconds with '''90%''' base chance.",
      "Sp": 4904,
      "SPLv2": 4904,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 548.0
        },
        "lvl2": {
          "BASE": 576.0
        }
      }
    }
  },
  {
    "id": "110021_01",
    "name": {
      "en": "Xainfried",
      "ja": "ザインフラッド",
      "zh": "扎因弗拉德"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 474,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 290,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Dragon's Claws II",
      "details": "Each shapeshift increases strength for the remainder  of the quest (up to three times per quest).  On first shapeshift strength is increased by '''5%''' in total. On second shapeshift strength is increased by '''13%''' in total. On third shapeshift strength is increased by '''25%''' in total.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon's Claws",
        "ability_value": 2
      }
    },
    "abilities12": {
      "name": "Dragon's Claws III",
      "details": "Each shapeshift increases strength for the remainder  of the quest (up to three times per quest). On first shapeshift strength is increased by '''6%''' in total. On second shapeshift strength is increased by '''15%''' in total. On third shapeshift strength is increased by '''30%''' in total.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon's Claws",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Dragon Time +15%",
      "details": "Extends shapeshift time by '''15%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon Time",
        "ability_value": 15
      }
    },
    "abilities32": {
      "name": "Dragon Time +20%",
      "details": "Extends shapeshift time by '''20%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragon Time",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Dragon Frostfang",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;186%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;207%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;230%&lt;/span&gt; water damage to the target and nearby enemies.",
      "Sp": 2450,
      "SPLv2": 2450,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 4.0,
      "modifier": {
        "lvl1": {
          "BASE": 744.0
        },
        "lvl2": {
          "BASE": 828.0
        },
        "lvl3": {
          "BASE": 920.0
        }
      }
    },
    "skill2": {
      "name": "Guardian's Fury",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''15%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''20%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''25%''' for 15 seconds.",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110022_01",
    "name": {
      "en": "Xander",
      "ja": "アレクシス",
      "zh": "阿莱克西斯"
    },
    "weapon": "Sword",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 453,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 301,
    "PlusAtk0": 35,
    "PlusAtk1": 40,
    "PlusAtk2": 48,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Striker's Strength +5%",
      "details": "Increases strength by '''5%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Striker's Strength +6%",
      "details": "Increases strength by '''6%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Strength",
        "ability_value": 6
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Force Strike +40%",
      "details": "Increases force strike damage by '''40%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 40
      }
    },
    "abilities32": {
      "name": "Force Strike +50%",
      "details": "Increases force strike damage by '''50%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Majestic Tide",
      "icon": "Icon_Skill_008",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;668%&lt;/span&gt; water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;743%&lt;/span&gt; water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;825%&lt;/span&gt; water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage ('''+5%''' Skill Damage per buff).",
      "Sp": 2714,
      "SPLv2": 2714,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 668.0
        },
        "lvl2": {
          "BASE": 743.0
        },
        "lvl3": {
          "BASE": 825.0
        }
      }
    },
    "skill2": {
      "name": "Royal Maelstrom",
      "icon": "Icon_Skill_004",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;223%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;248%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;275%&lt;/span&gt; water damage to surrounding enemies.",
      "Sp": 4817,
      "SPLv2": 4817,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 669.0
        },
        "lvl2": {
          "BASE": 744.0
        }
      }
    }
  },
  {
    "id": "110022_02",
    "name": {
      "en": "Xander",
      "ja": "アレクシス",
      "zh": "阿莱克西斯"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 63,
    "MinHp5": 96,
    "MaxHp": 285,
    "PlusHp0": 80,
    "PlusHp1": 93,
    "PlusHp2": 109,
    "PlusHp3": 93,
    "PlusHp4": 46,
    "McFullBonusHp5": 36,
    "MinAtk3": 29,
    "MinAtk4": 42,
    "MinAtk5": 65,
    "MaxAtk": 194,
    "PlusAtk0": 54,
    "PlusAtk1": 63,
    "PlusAtk2": 74,
    "PlusAtk3": 63,
    "PlusAtk4": 31,
    "McFullBonusAtk5": 26,
    "DefCoef": 8,
    "abilities11": {
      "name": "Striker's Energy I",
      "details": "Increases energy level by '''one''' stage for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Energy",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Striker's Energy II",
      "details": "Increases energy level by '''two''' stages for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Energy",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Haste +5%",
      "details": "Increases skill gauge fill rate by '''5%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 5
      }
    },
    "skill1": {
      "name": "Starfrost Swell",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;399%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;418%&lt;/span&gt; water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''90%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;439%&lt;/span&gt; water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance.",
      "Sp": 2563,
      "SPLv2": 2563,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 798.0
        },
        "lvl2": {
          "BASE": 836.0
        },
        "lvl3": {
          "BASE": 878.0
        }
      }
    },
    "skill2": {
      "name": "Monarch's Boon",
      "icon": "Icon_Skill_930",
      "description1": "Increases the user and nearby allies's strength by '''10%''' for 10 seconds, and increases their energy levels by '''one''' stage.",
      "description2": "Increases the user and nearby allies's strength by '''15%''' for 10 seconds, and increases their energy levels by '''one''' stage.",
      "description3": "",
      "Sp": 9609,
      "SPLv2": 9609,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110023_01",
    "name": {
      "en": "Johanna",
      "ja": "イハンナ",
      "zh": "伊汉娜"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 468,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
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
    "abilities12": {
      "name": "Slayer's Strength +4%",
      "details": "Increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Unbridled Rage",
      "icon": "Icon_Skill_001",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;839%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;933%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; wind damage to enemies directly ahead.",
      "Sp": 2904,
      "SPLv2": 2904,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 839.0
        },
        "lvl2": {
          "BASE": 933.0
        },
        "lvl3": {
          "BASE": 1036.0
        }
      }
    },
    "skill2": {
      "name": "Cyclone Axe",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;420%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;466%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;518%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 5735,
      "SPLv2": 5735,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 840.0
        },
        "lvl2": {
          "BASE": 932.0
        }
      }
    }
  },
  {
    "id": "110024_01",
    "name": {
      "en": "Sophie",
      "ja": "ソフィ",
      "zh": "索菲"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 459,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Recovery Potency +5%",
      "details": "Increases the potency of recovery skills by '''5%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Recovery Potency +8%",
      "details": "Increases the potency of recovery skills by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Aspen Balm",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Angry Gale",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;506%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;562%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;624%&lt;/span&gt; wind damage to surrounding enemies.",
      "Sp": 9214,
      "SPLv2": 9214,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 506.0
        },
        "lvl2": {
          "BASE": 562.0
        }
      }
    }
  },
  {
    "id": "110025_01",
    "name": {
      "en": "Nicolas",
      "ja": "ニコラ",
      "zh": "尼古拉"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 426,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 68,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 26,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 291,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Healing Doublebuff I",
      "details": "Grants an HP regen buff healing you for '''1%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Healing Doublebuff II",
      "details": "Grants an HP regen buff healing you for '''2%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Wind Spell",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;725%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;805%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;895%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "Sp": 2785,
      "SPLv2": 2785,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        },
        "lvl3": {
          "BASE": 895.0
        }
      }
    },
    "skill2": {
      "name": "Storm Spell",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;725%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;805%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|stun]] for 3-4 seconds with '''90%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;895%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "Sp": 5518,
      "SPLv2": 5518,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        }
      }
    }
  },
  {
    "id": "110026_01",
    "name": {
      "en": "Francesca",
      "ja": "フランチェスカ",
      "zh": "弗兰切斯卡"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 455,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 73,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Force Strike +20%",
      "details": "Increases force strike damage by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Bog Res +25%",
      "details": "Reduces susceptibility to bog by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Bog Res +25%",
      "details": "Reduces susceptibility to bog by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Peregrine Blade",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;137%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;152%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;169%&lt;/span&gt; wind damage to enemies directly ahead.",
      "Sp": 2257,
      "SPLv2": 2257,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 548.0
        },
        "lvl2": {
          "BASE": 608.0
        },
        "lvl3": {
          "BASE": 676.0
        }
      }
    },
    "skill2": {
      "name": "Windwhistler",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;275%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;288%&lt;/span&gt; wind damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''30%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;303%&lt;/span&gt; wind damage to enemies directly ahead, and reduces their defense by '''10%''' for 10 seconds with '''30%''' base chance.",
      "Sp": 4892,
      "SPLv2": 4892,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 550.0
        },
        "lvl2": {
          "BASE": 576.0
        }
      }
    }
  },
  {
    "id": "110027_01",
    "name": {
      "en": "Melody",
      "ja": "メロディ",
      "zh": "米罗蒂"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 62,
    "MaxHp": 443,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 281,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Full HP = Critical Rate +6%",
      "details": "Increases critical rate by '''6%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Critical Rate",
        "ability_value": 6
      }
    },
    "abilities12": {
      "name": "Full HP = Critical Rate +8%",
      "details": "Increases critical rate by '''8%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Critical Rate",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Freeze Res +25%",
      "details": "Reduces susceptibility to freezing by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Maid for Mayhem",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''8%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''10%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''15%''' for 15 seconds.",
      "Sp": 2987,
      "SPLv2": 2987,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Tyro's Gyre",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;238%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;264%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;293%&lt;/span&gt; wind damage to enemies directly ahead.",
      "Sp": 4784,
      "SPLv2": 4784,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 714.0
        },
        "lvl2": {
          "BASE": 792.0
        }
      }
    }
  },
  {
    "id": "110028_01",
    "name": {
      "en": "Philia",
      "ja": "フィリア",
      "zh": "菲丽雅"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "3",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 434,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 69,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 25,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 280,
    "PlusAtk0": 32,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Scattershot",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;212%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;235%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;262%&lt;/span&gt; wind damage to enemies in a line.",
      "Sp": 2395,
      "SPLv2": 2395,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 636.0
        },
        "lvl2": {
          "BASE": 705.0
        },
        "lvl3": {
          "BASE": 786.0
        }
      }
    },
    "skill2": {
      "name": "Lovelorn Arrow",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;635%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;667%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|paralysis]] for 12 seconds - dealing '''60%''' damage every 3.99 seconds - with '''90%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;701%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|paralysis]] for 12 seconds - dealing '''60%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "Sp": 5051,
      "SPLv2": 5051,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 635.0
        },
        "lvl2": {
          "BASE": 667.0
        }
      }
    }
  },
  {
    "id": "110029_01",
    "name": {
      "en": "Aeleen",
      "ja": "エイル",
      "zh": "艾露"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 459,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 281,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Buff Time +20%",
      "details": "Increases duration of buff skills by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Buff Time +25%",
      "details": "Increases duration of buff skills by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Freeze Res +100%",
      "details": "Reduces susceptibility to freezing by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Slayer's Strength +4%",
      "details": "Increases strength by '''4%''' for every five enemies defeated (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 4
      }
    },
    "skill1": {
      "name": "Valkyrie Blast",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;679%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;754%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;838%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "Sp": 2579,
      "SPLv2": 2579,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 679.0
        },
        "lvl2": {
          "BASE": 754.0
        },
        "lvl3": {
          "BASE": 838.0
        }
      }
    },
    "skill2": {
      "name": "Valhallan Ballad",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''20%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''25%''' for 15 seconds.",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110029_02",
    "name": {
      "en": "Aeleen",
      "ja": "エイル",
      "zh": "艾露"
    },
    "weapon": "Staff",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 469,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "United Haste I",
      "details": "Increases skill gauge fill rate relative to the number of active team members. The more active members, the greater the increase will be.",
      "might": 60,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "United Haste",
        "ability_value": 1
      }
    },
    "skill1": {
      "name": "Medicinal Cure",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds, and activates &quot;Skill Shift.&quot; &lt;br&gt;\nPhase II adds an additional '''8%''' increase to the entire team's defense for '''5''' seconds, while Phase III adds an additional '''5%''' increase to the team's strength for '''10''' seconds.",
      "description2": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds, and activates &quot;Skill Shift.&quot; &lt;br&gt;\nPhase II adds an additional '''10%''' increase to the entire team's defense for '''5''' seconds, while Phase III adds an additional '''8%''' increase to the team's strength for '''10''' seconds.",
      "description3": "Restores HP to all allies with '''44%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds, and activates &quot;Skill Shift.&quot; &lt;br&gt;\nPhase II adds an additional '''15%''' increase to the entire team's defense for '''5''' seconds, while Phase III adds an additional '''10%''' increase to the team's strength for '''10''' seconds.",
      "Sp": 7888,
      "SPLv2": 7888,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Naturopathy",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the user and nearby allies with '''72%''' [[Healing Formula|Recovery Potency]], and removes [[Conditions#Afflictions|stun]].",
      "description2": "Restores HP to the user and nearby allies with '''90%''' [[Healing Formula|Recovery Potency]], and removes [[Conditions#Afflictions|stun]].",
      "description3": "",
      "Sp": 11832,
      "SPLv2": 11832,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110030_01",
    "name": {
      "en": "Musashi",
      "ja": "ムサシ",
      "zh": "武藏"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 431,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 24,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 301,
    "PlusAtk0": 35,
    "PlusAtk1": 40,
    "PlusAtk2": 48,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Offense +30%",
      "details": "Buffs strength by '''30%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Last Offense +40%",
      "details": "Buffs strength by '''40%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Overdrive Punisher +8%",
      "details": "Increases damage to enemies in overdrive state by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Belching Dragon",
      "icon": "Icon_Skill_009",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;391%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|poison]] - dealing '''28%''' damage every 3 seconds for 15 seconds with '''90%''' base chance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;411%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|poison]] - dealing '''39.6%''' damage every 3 seconds for 15 seconds with '''100%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;432%&lt;/span&gt; wind damage to enemies in a line, and inflicts [[Conditions#Afflictions|poison]] - dealing '''53%''' damage every 3 seconds for 15 seconds with '''110%''' base chance.",
      "Sp": 2567,
      "SPLv2": 2567,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 782.0
        },
        "lvl2": {
          "BASE": 822.0
        },
        "lvl3": {
          "BASE": 864.0
        }
      }
    },
    "skill2": {
      "name": "Force of the Wind",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''25%''' for 5 seconds.",
      "description2": "Increases the user's strength by '''30%''' for 5 seconds.",
      "description3": "Increases the user's strength by '''35%''' for 5 seconds.",
      "Sp": 4430,
      "SPLv2": 4430,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110031_01",
    "name": {
      "en": "Eleonora",
      "ja": "エレオノーラ",
      "zh": "艾蕾欧诺拉"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 62,
    "MaxHp": 443,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 286,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Poison +40%",
      "details": "Increases the chances of inflicting poison by '''40%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Poison",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "Full HP = Poison +50%",
      "details": "Increases the chances of inflicting poison by '''50%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Poison",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Viper Bolt",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;699%&lt;/span&gt; wind damage to the target.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;734%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''39.6%''' damage every 2.9 seconds - with '''100%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;771%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''53%''' damage every 2.9 seconds - with '''110%''' base chance.",
      "Sp": 2504,
      "SPLv2": 2504,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        },
        "lvl3": {
          "BASE": 771.0
        }
      }
    },
    "skill2": {
      "name": "Vendetta Arrow",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;699%&lt;/span&gt; wind damage to the target.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;734%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''39.6%''' damage every 2.99 seconds - with '''100%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;771%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''53%''' damage every 2.99 seconds - with '''110%''' base chance.",
      "Sp": 5115,
      "SPLv2": 5115,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        }
      }
    }
  },
  {
    "id": "110032_01",
    "name": {
      "en": "Maribelle",
      "ja": "メリィベル",
      "zh": "梅莉贝尔"
    },
    "weapon": "Wand",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 448,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 306,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 20,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "abilities12": {
      "name": "Full HP = Skill Damage +40%",
      "details": "Increases attack skill damage by '''40%''' when HP is '''full'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Save the Day!",
      "icon": "Icon_Skill_020",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;146%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;154%&lt;/span&gt; wind damage to the target and nearby enemies, and reduces their defense by '''5%''' for 10 seconds with '''50%''' base chance.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;161%&lt;/span&gt; wind damage to the target and nearby enemies, and reduces their defense by '''5%''' for 10 seconds with '''50%''' base chance.",
      "Sp": 2648,
      "SPLv2": 2648,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 876.0
        },
        "lvl2": {
          "BASE": 924.0
        },
        "lvl3": {
          "BASE": 966.0
        }
      }
    },
    "skill2": {
      "name": "Not One Step Closer!",
      "icon": "Icon_Skill_025",
      "description1": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;219%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;244%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;271%&lt;/span&gt; wind damage to enemies in a line.",
      "Sp": 5838,
      "SPLv2": 5838,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 876.0
        },
        "lvl2": {
          "BASE": 976.0
        }
      }
    }
  },
  {
    "id": "110032_02",
    "name": {
      "en": "Maribelle",
      "ja": "メリィベル",
      "zh": "梅莉贝尔"
    },
    "weapon": "Wand",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 447,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 307,
    "PlusAtk0": 36,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "abilities12": {
      "name": "Full HP = Skill Damage +40%",
      "details": "Increases attack skill damage by '''40%''' when HP is '''full'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +25%",
      "details": "Increases damage to enemies in break state by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Broken Punisher +30%",
      "details": "Increases damage to enemies in break state by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Study Break",
      "icon": "Icon_Skill_014",
      "description1": "Deals 12 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;73%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 12 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;77%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''5%''' for '''10''' seconds with '''50%''' base chance.",
      "description3": "Deals 12 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;80%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their defense by '''5%''' for '''10''' seconds with '''50%''' base chance.",
      "Sp": 2649,
      "SPLv2": 2649,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 876.0
        },
        "lvl2": {
          "BASE": 924.0
        },
        "lvl3": {
          "BASE": 960.0
        }
      }
    },
    "skill2": {
      "name": "Happy Memories",
      "icon": "Icon_Skill_018",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;613%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;644%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "",
      "Sp": 8300,
      "SPLv2": 8300,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 1226.0
        },
        "lvl2": {
          "BASE": 1288.0
        }
      }
    }
  },
  {
    "id": "110033_01",
    "name": {
      "en": "Linus",
      "ja": "ライナス",
      "zh": "莱纳斯"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 469,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 264,
    "PlusAtk0": 31,
    "PlusAtk1": 35,
    "PlusAtk2": 42,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Defense +5%",
      "details": "Increases defense by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "HP 70% = Defense +8%",
      "details": "Increases defense by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Valiant Axe",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;839%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;933%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; light damage to enemies directly ahead.",
      "Sp": 2942,
      "SPLv2": 2942,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 839.0
        },
        "lvl2": {
          "BASE": 933.0
        },
        "lvl3": {
          "BASE": 1036.0
        }
      }
    },
    "skill2": {
      "name": "Shining Vanguard",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;420%&lt;/span&gt; light damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;466%&lt;/span&gt; light damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;518%&lt;/span&gt; light-based damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 5735,
      "SPLv2": 5735,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 840.0
        },
        "lvl2": {
          "BASE": 932.0
        }
      }
    }
  },
  {
    "id": "110034_01",
    "name": {
      "en": "Malka",
      "ja": "マルカ",
      "zh": "马尔卡"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 64,
    "MaxHp": 451,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 275,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
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
    "abilities12": {
      "name": "Full HP = Defense +20%",
      "details": "Increases defense by '''20%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Defense",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Blaze of Gold",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;309%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;343%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;381%&lt;/span&gt; light damage to surrounding enemies.",
      "Sp": 2556,
      "SPLv2": 2556,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 686.0
        },
        "lvl3": {
          "BASE": 762.0
        }
      }
    },
    "skill2": {
      "name": "Pride of the Forge",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''8%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''10%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''15%''' for 30 seconds.",
      "Sp": 6610,
      "SPLv2": 6610,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110035_01",
    "name": {
      "en": "Raemond",
      "ja": "ライムンド",
      "zh": "莱蒙德"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 431,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 285,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Defense +40%",
      "details": "Buffs defense by '''40%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "Last Defense +50%",
      "details": "Buffs defense by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Alberian Cleave",
      "icon": "Icon_Skill_011",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;276%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;290%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 3-4 seconds with '''90%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;305%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "Sp": 2443,
      "SPLv2": 2443,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 580.0
        },
        "lvl3": {
          "BASE": 610.0
        }
      }
    },
    "skill2": {
      "name": "Alberian Majesty",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;276%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;307%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;341%&lt;/span&gt; light-based damage to surrounding enemies.",
      "Sp": 4817,
      "SPLv2": 4817,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 614.0
        }
      }
    }
  },
  {
    "id": "110036_01",
    "name": {
      "en": "Malora",
      "ja": "マローラ",
      "zh": "马萝拉"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 65,
    "MaxHp": 460,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Broken Punisher +15%",
      "details": "Increases damage to enemies in break state by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Morning Glow",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;212%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;235%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals 3 shots of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;262%&lt;/span&gt; light damage to enemies in a line.",
      "Sp": 2395,
      "SPLv2": 2395,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 636.0
        },
        "lvl2": {
          "BASE": 705.0
        }
      }
    },
    "skill2": {
      "name": "Provocative Shot",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;635%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;667%&lt;/span&gt; light damage to enemies in a line, and reduces their defense by '''5%''' for 10 seconds with '''80%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;701%&lt;/span&gt; light-based damage to enemies in a line, and reduces their defense by '''10%''' for 10 seconds with '''90%''' base chance.",
      "Sp": 5051,
      "SPLv2": 5051,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 635.0
        },
        "lvl2": {
          "BASE": 667.0
        }
      }
    }
  },
  {
    "id": "110037_01",
    "name": {
      "en": "Irfan",
      "ja": "イルファン",
      "zh": "伊尔凡"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 456,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 269,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Strength Doublebuff +5%",
      "details": "Increases strength by '''5%''' for 15 seconds each time a defense up buff is received.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Strength Doublebuff +8%",
      "details": "Increases strength by '''8%''' for 15 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Gleaming Talons",
      "icon": "Icon_Skill_004",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;183%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;203%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;226%&lt;/span&gt; light damage to surrounding enemies.",
      "Sp": 2318,
      "SPLv2": 2318,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 549.0
        },
        "lvl2": {
          "BASE": 609.0
        },
        "lvl3": {
          "BASE": 678.0
        }
      }
    },
    "skill2": {
      "name": "Hungry Fang",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;275%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;288%&lt;/span&gt; light damage to enemies directly ahead, and reduces their strength by '''5%''' for 10 seconds with '''80%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;303%&lt;/span&gt; light-based damage to enemies directly ahead, and reduces their strength by '''10%''' for 10 seconds with '''90%''' base chance.",
      "Sp": 4892,
      "SPLv2": 4892,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 550.0
        },
        "lvl2": {
          "BASE": 576.0
        }
      }
    }
  },
  {
    "id": "110038_01",
    "name": {
      "en": "Hope",
      "ja": "ホープ",
      "zh": "霍普"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 65,
    "MaxHp": 461,
    "PlusHp0": 54,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 15,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Healing +10%",
      "details": "Increases the potency of recovery skills by '''10%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Full HP = Healing +13%",
      "details": "Increases the potency of recovery skills by '''13%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Healing Hand",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Blessed Wall",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''15%''' for 30 seconds.",
      "Sp": 7633,
      "SPLv2": 7633,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110039_01",
    "name": {
      "en": "Ryozen",
      "ja": "リョウゼン",
      "zh": "梁泉"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 484,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 29,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Healing Doublebuff II",
      "details": "Grants an HP regen buff healing you for '''2%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 2
      }
    },
    "abilities12": {
      "name": "Healing Doublebuff III",
      "details": "Grants an HP regen buff healing you for '''3%''' Max HP every 3.9 seconds for 20 seconds each time a defense up buff is received.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 3
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Healing Doublebuff",
        "ability_value": 3
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Overdrive Punisher +8%",
      "details": "Increases damage to enemies in overdrive state by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Celestial Citadel",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''20%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''25%''' for 15 seconds.",
      "Sp": 4367,
      "SPLv2": 4367,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Lotus Lance",
      "icon": "Icon_Skill_012",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;136%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;151%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;168%&lt;/span&gt; light-based damage to enemies directly ahead.",
      "Sp": 4855,
      "SPLv2": 4855,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 680.0
        },
        "lvl2": {
          "BASE": 755.0
        }
      }
    }
  },
  {
    "id": "110040_01",
    "name": {
      "en": "Rawn",
      "ja": "ウルガ",
      "zh": "乌尔嘉"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 469,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Striker's Strength +4%",
      "details": "Increases strength by '''4%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Strength",
        "ability_value": 4
      }
    },
    "abilities12": {
      "name": "Striker's Strength +5%",
      "details": "Increases strength by '''5%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Strength",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Stunned Punisher +20%",
      "details": "Increases damage to stunned enemies by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Fiend Crush",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;699%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;734%&lt;/span&gt; light damage to enemies in a line, and reduces their strength by '''5%''' for 10 seconds with '''40%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;771%&lt;/span&gt; light damage to enemies in a line, and reduces their strength by '''5%''' for 10 seconds with '''40%''' base chance.",
      "Sp": 2558,
      "SPLv2": 2558,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        },
        "lvl3": {
          "BASE": 771.0
        }
      }
    },
    "skill2": {
      "name": "Critter Slayer",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;699%&lt;/span&gt; light damage to the target.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;734%&lt;/span&gt; light damage to the target, and inflicts [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;771%&lt;/span&gt; light damage to the target, and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''110%''' base chance.",
      "Sp": 5008,
      "SPLv2": 5008,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        }
      }
    }
  },
  {
    "id": "110041_01",
    "name": {
      "en": "Amane",
      "ja": "アマネ",
      "zh": "天音"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 61,
    "MaxHp": 436,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 70,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 41,
    "MaxAtk": 295,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Empyreal Levin",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;399%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;443%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;492%&lt;/span&gt; light damage to the target and nearby enemies.",
      "Sp": 2711,
      "SPLv2": 2711,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 798.0
        },
        "lvl2": {
          "BASE": 886.0
        },
        "lvl3": {
          "BASE": 984.0
        }
      }
    },
    "skill2": {
      "name": "Hallowed Raiments",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''10%''' for 10 seconds, and increases max HP by '''5%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases the user's strength by '''15%''' for 10 seconds, and increases max HP by '''10%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases the user's strength by '''20%''' for 30 seconds, and increases max HP by '''20%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 11449,
      "SPLv2": 11449,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110042_01",
    "name": {
      "en": "Julietta",
      "ja": "ジュリエッタ",
      "zh": "朱丽叶"
    },
    "weapon": "Axe",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 48,
    "MinHp4": 60,
    "MinHp5": 70,
    "MaxHp": 494,
    "PlusHp0": 57,
    "PlusHp1": 67,
    "PlusHp2": 79,
    "PlusHp3": 67,
    "PlusHp4": 33,
    "McFullBonusHp5": 28,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 278,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 20,
    "DefCoef": 10,
    "abilities11": {
      "name": "Slayer's Strength +5%",
      "details": "Increases strength by '''5%''' for every five enemies defeated (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Slayer's Strength +6%",
      "details": "Increases strength by '''6%''' for every five enemies defeated (up to five times per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 6
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Last Recovery III",
      "details": "Grants an HP regen buff healing you for '''12%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 3
      }
    },
    "abilities32": {
      "name": "Last Recovery IV",
      "details": "Grants an HP regen buff healing you for '''14%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 4
      }
    },
    "skill1": {
      "name": "Impending Sky",
      "icon": "Icon_Skill_011",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;508%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;564%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;627%&lt;/span&gt; light damage to enemies directly ahead.",
      "Sp": 3130,
      "SPLv2": 3130,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 1016.0
        },
        "lvl2": {
          "BASE": 1128.0
        },
        "lvl3": {
          "BASE": 1254.0
        }
      }
    },
    "skill2": {
      "name": "Glorious Guard",
      "icon": "Icon_Skill_031",
      "description1": "Increases the user's defense by '''50%''' for 10 seconds.",
      "description2": "Activates &quot;Indomitable Spirit&quot; for 10 seconds. The user gains a defense increase of '''50%''' and immunity to knockback.",
      "description3": "Activates &quot;Indomitable Spirit&quot; for 10 seconds. The user gains a defense increase of '''50%''' and immunity to knockback.",
      "Sp": 6296,
      "SPLv2": 6296,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110043_01",
    "name": {
      "en": "Hildegarde",
      "ja": "ヒルデガルド",
      "zh": "希尔德加德"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 59,
    "MinHp5": 68,
    "MaxHp": 485,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 30,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 278,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 20,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities12": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Healing +13%",
      "details": "Increases the potency of recovery skills by '''13%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Healing",
        "ability_value": 13
      }
    },
    "abilities32": {
      "name": "HP 70% = Healing +15%",
      "details": "Increases the potency of recovery skills by '''15%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Healing",
        "ability_value": 15
      }
    },
    "skill1": {
      "name": "Radiant Savior",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|curse]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|curse]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Sacred Guardian",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a shield that nullifies damage less than '''20%''' of the user's HP once, and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds. This does not stack with any other shields.",
      "description2": "Grants all teammates a shield that nullifies damage less than '''30%''' of the user's HP once, and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds. This does not stack with any other shields.",
      "description3": "Grants all teammates a shield that nullifies damage less than '''40%''' of the user's HP once. This does not stack with any other shields.",
      "Sp": 11832,
      "SPLv2": 11832,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110043_02",
    "name": {
      "en": "Hildegarde",
      "ja": "ヒルデガルド",
      "zh": "希尔德加德"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 482,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 280,
    "PlusAtk0": 32,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Striking Strength Debilitator I",
      "details": "Grants the user's force strikes a '''50%''' chance to reduce enemy strength by '''3%''' for 10 seconds.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striking Strength Debilitator",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Striking Strength Debilitator II",
      "details": "Grants the user's force strikes a '''70%''' chance to reduce enemy strength by '''3%''' for 10 seconds.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striking Strength Debilitator",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Blooming Love",
      "icon": "Icon_Skill_929",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]], increases the entire team's energy levels by '''one''' stage, and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]], increases the entire team's energy levels by '''one''' stage, and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies with '''44%''' [[Healing Formula|Recovery Potency]], increases the entire team's energy levels by '''one''' stage, and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "Sp": 7734,
      "SPLv2": 7734,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Holy Protection",
      "icon": "Icon_Skill_933",
      "description1": "Grants all teammates a one-use shield that nullifies damage less than '''20%''' of the user's maximum HP (but does not stack with any other shields), and increases their energy levels by '''one''' stage.",
      "description2": "Grants all teammates a one-use shield that nullifies damage less than '''30%''' of the user's maximum HP (but does not stack with any other shields), and increases their energy levels by '''two''' stages.",
      "description3": "",
      "Sp": 13188,
      "SPLv2": 13188,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110044_01",
    "name": {
      "en": "Taro",
      "ja": "タロウ",
      "zh": "太郎"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 59,
    "MaxHp": 420,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 67,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 23,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 296,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Defense +40%",
      "details": "Buffs defense by '''40%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "Last Defense +50%",
      "details": "Buffs defense by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Shadowslicer",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;238%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;264%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;293%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 2392,
      "SPLv2": 2392,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 714.0
        },
        "lvl2": {
          "BASE": 792.0
        },
        "lvl3": {
          "BASE": 879.0
        }
      }
    },
    "skill2": {
      "name": "Evilsbane",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;711%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;790%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;878%&lt;/span&gt; shadow damage to surrounding enemies.",
      "Sp": 5259,
      "SPLv2": 5259,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 711.0
        },
        "lvl2": {
          "BASE": 790.0
        }
      }
    }
  },
  {
    "id": "110045_01",
    "name": {
      "en": "Erik",
      "ja": "エリック",
      "zh": "埃里克"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 59,
    "MaxHp": 421,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 67,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 294,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Force Strike +20%",
      "details": "Increases force strike damage by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Tenacious Swing",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;420%&lt;/span&gt; shadow damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;466%&lt;/span&gt; shadow damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;518%&lt;/span&gt; shadow damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 2868,
      "SPLv2": 2868,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 840.0
        },
        "lvl2": {
          "BASE": 932.0
        },
        "lvl3": {
          "BASE": 1036.0
        }
      }
    },
    "skill2": {
      "name": "Wild Strike",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;839%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;933%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;1036%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 5883,
      "SPLv2": 5883,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 839.0
        },
        "lvl2": {
          "BASE": 933.0
        }
      }
    }
  },
  {
    "id": "110046_01",
    "name": {
      "en": "Rodrigo",
      "ja": "ロドリゴ",
      "zh": "罗德里戈"
    },
    "weapon": "Sword",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 60,
    "MaxHp": 427,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 68,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 24,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 40,
    "MaxAtk": 287,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Strength +5%",
      "details": "Increases strength by '''5%''' when HP is '''70%''' or above.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "HP 70% = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Bonecrusher",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;552%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;614%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;682%&lt;/span&gt; shadow damage to enemies in a line.",
      "Sp": 2613,
      "SPLv2": 2613,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 614.0
        },
        "lvl3": {
          "BASE": 682.0
        }
      }
    },
    "skill2": {
      "name": "Shadowpiercer",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;552%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;614%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;682%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 4886,
      "SPLv2": 4886,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 614.0
        }
      }
    }
  },
  {
    "id": "110047_01",
    "name": {
      "en": "Althemia",
      "ja": "イルテミア",
      "zh": "伊露缇米娅"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 446,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 278,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Full HP = Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Endless Nightmare",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;725%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;805%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;895%&lt;/span&gt; shadow damage to enemies in a line.",
      "Sp": 2759,
      "SPLv2": 2759,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        },
        "lvl3": {
          "BASE": 895.0
        }
      }
    },
    "skill2": {
      "name": "Dark Abyss",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;725%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;805%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;895%&lt;/span&gt; shadow damage to the target and enemies near it.",
      "Sp": 5570,
      "SPLv2": 5570,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        }
      }
    }
  },
  {
    "id": "110047_02",
    "name": {
      "en": "Althemia",
      "ja": "イルテミア",
      "zh": "伊露缇米娅"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 470,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 29,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "skill1": {
      "name": "Sweet Treat",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Bitter Trick",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;555%&lt;/span&gt; light damage to surrounding enemies, and restores the user's HP by '''4%''' of the damage inflicted.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;617%&lt;/span&gt; light damage to surrounding enemies, and restores the user's HP by '''5%''' of the damage inflicted.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;686%&lt;/span&gt; light-based damage to surrounding enemies, and restores the user's HP.",
      "Sp": 9662,
      "SPLv2": 9662,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 555.0
        },
        "lvl2": {
          "BASE": 617.0
        }
      }
    }
  },
  {
    "id": "110048_01",
    "name": {
      "en": "Vice",
      "ja": "ワイス",
      "zh": "华兹"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 453,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Broken Punisher +15%",
      "details": "Increases damage to enemies in break state by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Fatal Blow",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;137%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;152%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;169%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 2257,
      "SPLv2": 2257,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 548.0
        },
        "lvl2": {
          "BASE": 608.0
        },
        "lvl3": {
          "BASE": 676.0
        }
      }
    },
    "skill2": {
      "name": "Lethal Edge",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;275%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;288%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 3-4 seconds with '''90%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;303%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 4-5 seconds with '''100%''' base chance.",
      "Sp": 4892,
      "SPLv2": 4892,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 550.0
        },
        "lvl2": {
          "BASE": 576.0
        }
      }
    }
  },
  {
    "id": "110049_01",
    "name": {
      "en": "Edward",
      "ja": "エドワード",
      "zh": "爱德华"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 456,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Healing +10%",
      "details": "Increases the potency of recovery skills by '''10%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Full HP = Healing +13%",
      "details": "Increases the potency of recovery skills by '''13%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Impeccable Service",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Butler's Guard",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a shield that nullifies damage less than '''15%''' of the user's HP once. This does not stack with any other shields.",
      "description2": "Grants all teammates a shield that nullifies damage less than '''20%''' of the user's HP once. This does not stack with any other shields.",
      "description3": "Grants all teammates a shield that nullifies damage less than '''60%''' of the user's HP once. This does not stack with any other shields.",
      "Sp": 5840,
      "SPLv2": 5840,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110049_02",
    "name": {
      "en": "Edward",
      "ja": "エドワード",
      "zh": "爱德华"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 424,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 68,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 24,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 293,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 47,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 20,
    "DefCoef": 10,
    "abilities11": {
      "name": "Full HP = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''full'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Vampire Slash",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;238%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;264%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;293%&lt;/span&gt; light damage to enemies directly ahead.",
      "Sp": 2392,
      "SPLv2": 2392,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 714.0
        },
        "lvl2": {
          "BASE": 792.0
        }
      }
    },
    "skill2": {
      "name": "Nightmare Waltz",
      "icon": "Icon_Skill_004",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;711%&lt;/span&gt; light damage to surrounding enemies, and restores the user's HP by '''1%''' of the damage inflicted.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;747%&lt;/span&gt; light damage to surrounding enemies, and restores the user's HP by '''2%''' of the damage inflicted.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;784%&lt;/span&gt; light-based damage to surrounding enemies, and restores the user's HP.",
      "Sp": 5346,
      "SPLv2": 5346,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 711.0
        },
        "lvl2": {
          "BASE": 747.0
        }
      }
    }
  },
  {
    "id": "110050_01",
    "name": {
      "en": "Berserker",
      "ja": "ベルザーク",
      "zh": "贝尔扎克"
    },
    "weapon": "Sword",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 483,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Striker's Skill +6%",
      "details": "Increases skill damage by '''6%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Skill",
        "ability_value": 6
      }
    },
    "abilities12": {
      "name": "Striker's Skill +8%",
      "details": "Increases skill damage by '''8%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Skill",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Blindness Res +100%",
      "details": "Reduces susceptibility to blindness by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Last Offense +30%",
      "details": "Buffs strength by '''30%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Calamity Wheel",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;304%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;319%&lt;/span&gt; shadow damage to surrounding enemies, and reduces their strength by '''5%''' for 10 seconds with '''40%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;335%&lt;/span&gt; shadow damage to surrounding enemies, and reduces their strength by '''5%''' for 10 seconds with '''40%''' base chance.",
      "Sp": 2376,
      "SPLv2": 2376,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 638.0
        }
      }
    },
    "skill2": {
      "name": "Living Fortress",
      "icon": "Icon_Skill_032",
      "description1": "Increases max HP by '''5%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases max HP by '''10%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases max HP by '''20%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "Sp": 5750,
      "SPLv2": 5750,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110051_01",
    "name": {
      "en": "Kleimann",
      "ja": "クレイマン",
      "zh": "克雷伊曼"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 455,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 73,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 28,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 284,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "Force Strike +40%",
      "details": "Increases force strike damage by '''40%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Blindness Res +100%",
      "details": "Reduces susceptibility to blindness by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Shadowshackle",
      "icon": "Icon_Skill_023",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;797%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;886%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;984%&lt;/span&gt; shadow damage to enemies in a line.",
      "Sp": 2854,
      "SPLv2": 2854,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 797.0
        },
        "lvl2": {
          "BASE": 886.0
        },
        "lvl3": {
          "BASE": 984.0
        }
      }
    },
    "skill2": {
      "name": "Forbidden Sphere",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;399%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;419%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|sleep]] for 4-5 seconds with '''100%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;440%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|sleep]] for 5-6 seconds with '''110%''' base chance.",
      "Sp": 7090,
      "SPLv2": 7090,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 798.0
        },
        "lvl2": {
          "BASE": 838.0
        }
      }
    }
  },
  {
    "id": "110052_01",
    "name": {
      "en": "Orion",
      "ja": "オリオン",
      "zh": "俄里翁"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 65,
    "MaxHp": 463,
    "PlusHp0": 54,
    "PlusHp1": 62,
    "PlusHp2": 74,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 276,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flurry Devastation +8%",
      "details": "Increases critical rate by '''8%''' when the combo count is 15 or higher.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Flurry Devastation +10%",
      "details": "Increases critical rate by '''10%''' when the combo count is 15 or higher.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Love Goes Round",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;151%&lt;/span&gt; shadow damage to surrounding enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;159%&lt;/span&gt; shadow damage to surrounding enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''100%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;166%&lt;/span&gt; shadow damage to surrounding enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''110%''' base chance.",
      "Sp": 2213,
      "SPLv2": 2213,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 636.0
        },
        "lvl3": {
          "BASE": 664.0
        }
      }
    },
    "skill2": {
      "name": "Twilight Tryst",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;151%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;167%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;186%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 4904,
      "SPLv2": 4904,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 668.0
        }
      }
    }
  },
  {
    "id": "110052_03",
    "name": {
      "en": "Orion",
      "ja": "オリオン",
      "zh": "俄里翁"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 66,
    "MaxHp": 466,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 74,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 282,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Strength Doublebuff +5%",
      "details": "Increases strength by '''5%''' for 15 seconds each time a defense up buff is received.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Strength Doublebuff +8%",
      "details": "Increases strength by '''8%''' for 15 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Spinning Brûlée",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;276%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;290%&lt;/span&gt; flame damage to surrounding enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''60%''' damage every 3.99 seconds - with '''90%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;304%&lt;/span&gt; flame damage to surrounding enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''80.3%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "Sp": 2409,
      "SPLv2": 2409,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 580.0
        },
        "lvl3": {
          "BASE": 608.0
        }
      }
    },
    "skill2": {
      "name": "Sweet Protection",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description3": "",
      "Sp": 7633,
      "SPLv2": 7633,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110053_01",
    "name": {
      "en": "Nefaria",
      "ja": "ネファリエ",
      "zh": "奈法利耶"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 480,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 40,
    "MaxAtk": 283,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Blindness +50%",
      "details": "Increases the chances of inflicting blindness by '''50%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Blindness",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Full HP = Blindness +60%",
      "details": "Increases the chances of inflicting blindness by '''60%''' when HP is '''full'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Blindness",
        "ability_value": 60
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Blinded Punisher +25%",
      "details": "Increases damage to blinded enemies by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Blinded Punisher +30%",
      "details": "Increases damage to blinded enemies by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Night of Antiquity",
      "icon": "Icon_Skill_016",
      "description1": "Deals 8 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;96%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 8 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;101%&lt;/span&gt; shadow damage to the target and nearby enemies. Against blinded foes, deals 8 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;170.69%&lt;/span&gt; shadow damage instead.",
      "description3": "Deals 8 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;106%&lt;/span&gt; shadow damage to the target and nearby enemies. Against blinded foes, deals 8 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;184.44%&lt;/span&gt; shadow damage instead.",
      "Sp": 2713,
      "SPLv2": 2713,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 768.0
        },
        "lvl2": {
          "BASE": 1365.52
        },
        "lvl3": {
          "BASE": 1475.52
        }
      }
    },
    "skill2": {
      "name": "Twilight Oblivion",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Twilight Arrows.&quot; The next three force strikes will deal &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;31% (34%)&lt;/span&gt; shadow damage per hit for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''100%''' base chance.",
      "description2": "Activates &quot;Twilight Arrows.&quot; The next three force strikes will deal &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;33% (37%)&lt;/span&gt; shadow damage per hit for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''110%''' base chance.",
      "description3": "Activates &quot;Twilight Arrows.&quot; For the next three force strikes, the user will shoot special arrows that deal extra damage and inflict blindness for 8 seconds.",
      "Sp": 5599,
      "SPLv2": 5599,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110053_02",
    "name": {
      "en": "Nefaria",
      "ja": "ネファリエ",
      "zh": "奈法利耶"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 67,
    "MinHp5": 103,
    "MaxHp": 307,
    "PlusHp0": 86,
    "PlusHp1": 100,
    "PlusHp2": 118,
    "PlusHp3": 100,
    "PlusHp4": 50,
    "McFullBonusHp5": 37,
    "MinAtk3": 27,
    "MinAtk4": 39,
    "MinAtk5": 60,
    "MaxAtk": 179,
    "PlusAtk0": 50,
    "PlusAtk1": 58,
    "PlusAtk2": 68,
    "PlusAtk3": 58,
    "PlusAtk4": 29,
    "McFullBonusAtk5": 23,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Flurry Freezer I",
      "details": "When the combo count is 15 or higher, grants a 6-second buff that gives standard attacks a '''10%''' chance of inflicting freeze for 3-6 seconds.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Freezer",
        "ability_value": 1
      }
    },
    "skill1": {
      "name": "Starsquall Shot",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;233%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;259%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;288%&lt;/span&gt; water damage to enemies in a line.",
      "Sp": 2359,
      "SPLv2": 2359,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 777.0
        },
        "lvl3": {
          "BASE": 864.0
        }
      }
    },
    "skill2": {
      "name": "Special Delivery",
      "icon": "Icon_Skill_931",
      "description1": "Activates &quot;Gifts Ready&quot;. For the next two force strikes, each force strike will distribute gifts. These gifts grant nearby allies a one-use shield that nullifies damage less than '''10%''' of the user's HP, and increase their energy levels by '''one''' stage.",
      "description2": "Activates &quot;Gifts Ready&quot;. For the next two force strikes, each force strike will distribute gifts. These gifts grant nearby allies a one-use shield that nullifies damage less than '''15%''' of the user's HP, and increase their energy levels by '''one''' stage.",
      "description3": "",
      "Sp": 9476,
      "SPLv2": 9476,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110054_01",
    "name": {
      "en": "Serena",
      "ja": "セレナ",
      "zh": "Serena"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 484,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 29,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 15,
    "DefCoef": 10,
    "abilities11": {
      "name": "Barrage Obliteration +5%",
      "details": "Adds '''5%''' to the modifier applied to critical damage for every '''20'''-hit combo (up to three times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Barrage Obliteration",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Barrage Obliteration +6%",
      "details": "Adds '''6%''' to the modifier applied to critical damage for every '''20'''-hit combo (up to three times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Barrage Obliteration",
        "ability_value": 6
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Barrage Devastation +3%",
      "details": "Increases critical rate by '''3%''' for every '''30'''-hit combo (up to three times per quest).",
      "might": 60,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Barrage Devastation",
        "ability_value": 3
      }
    },
    "skill1": {
      "name": "Assault Flame",
      "icon": "Icon_Skill_006",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;284%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;315%&lt;/span&gt; flame damage to enemies in a line, and increases the user's critical rate by '''10%''' for '''5''' seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;350%&lt;/span&gt; flame damage to enemies in a line, and increases the user's critical rate by '''10%''' for '''5''' seconds.",
      "Sp": 2500,
      "SPLv2": 2500,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 568.0
        },
        "lvl2": {
          "BASE": 630.0
        },
        "lvl3": {
          "BASE": 700.0
        }
      }
    },
    "skill2": {
      "name": "Blazing Pain",
      "icon": "Icon_Skill_011",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;152%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;169%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "",
      "Sp": 4593,
      "SPLv2": 4593,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 676.0
        }
      }
    }
  },
  {
    "id": "110056_01",
    "name": {
      "en": "Yue",
      "ja": "ユエ",
      "zh": "悦"
    },
    "weapon": "Axe",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 58,
    "MinHp5": 67,
    "MaxHp": 476,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 29,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Defense +50%",
      "details": "Buffs defense by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Last Defense +60%",
      "details": "Buffs defense by '''60%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Defense",
        "ability_value": 60
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Recovery Potency +8%",
      "details": "Increases the potency of recovery skills by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Knockout Blow",
      "icon": "Icon_Skill_011",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;462%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;485%&lt;/span&gt; flame damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;509%&lt;/span&gt; flame damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''110%''' base chance.",
      "Sp": 3033,
      "SPLv2": 3033,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 970.0
        },
        "lvl3": {
          "BASE": 1018.0
        }
      }
    },
    "skill2": {
      "name": "Wild Instinct",
      "icon": "Icon_Skill_032",
      "description1": "Activates &quot;Wild Child&quot; for '''20''' seconds. During Wild Child, the user's critical rate is increased by '''15%''', their HP is restored by '''2%''' of damage inflicted, and their defense is reduced by '''40%'''.",
      "description2": "Activates &quot;Wild Child&quot; for '''20''' seconds. During Wild Child, the user's critical rate is increased by '''20%''', their HP is restored by '''3%''' of damage inflicted, and their defense is reduced by '''40%'''.",
      "description3": "",
      "Sp": 8000,
      "SPLv2": 8000,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110058_01",
    "name": {
      "en": "Jakob",
      "ja": "ジャン",
      "zh": "让"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 473,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 75,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 25,
    "MinAtk4": 31,
    "MinAtk5": 37,
    "MaxAtk": 262,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 42,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
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
    "abilities12": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Chain Sting",
      "icon": "Icon_Skill_012",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;206%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;216%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''80%''' base chance.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;227%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''90%''' base chance.",
      "Sp": 2581,
      "SPLv2": 2581,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 648.0
        },
        "lvl3": {
          "BASE": 681.0
        }
      }
    },
    "skill2": {
      "name": "Mercenary Guard",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''15%''' for 15 seconds.",
      "description3": "Grants all teammates a shield that nullifies damage less than 60% of the user's HP once. This does not stack with any other shields.",
      "Sp": 7633,
      "SPLv2": 7633,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110063_01",
    "name": {
      "en": "Estelle",
      "ja": "エステル",
      "zh": "艾丝蒂尔"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 65,
    "MaxHp": 461,
    "PlusHp0": 54,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 15,
    "DefCoef": 8,
    "abilities11": {
      "name": "Force Strike +20%",
      "details": "Increases force strike damage by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Healing Faith",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''225%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''250%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to the team member most in need with '''279%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 4930,
      "SPLv2": 4930,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Guardian's Grace",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''34%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "Sp": 11832,
      "SPLv2": 11832,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110064_01",
    "name": {
      "en": "Yachiyo",
      "ja": "ヤチヨ",
      "zh": "八千代"
    },
    "weapon": "Blade",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 52,
    "MinHp5": 61,
    "MaxHp": 432,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 26,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 300,
    "PlusAtk0": 35,
    "PlusAtk1": 40,
    "PlusAtk2": 48,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Paralysis = User Strength +10%",
      "details": "Buffs the user's strength by '''10%''' for 10 seconds upon successfully [[Afflictions|paralyzing]] an enemy. After activating, this ability will not activate again for five seconds.",
      "might": 60,
      "limit": 0,
      "values": {
        "req": "Paralysis",
        "req_threshold": null,
        "ability_type": "User Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Paralysis = User Strength +10%",
      "details": "Buffs the user's strength by '''15%''' for 10 seconds upon successfully [[Afflictions|paralyzing]] an enemy. After activating, this ability will not activate again for five seconds.",
      "might": 80,
      "limit": 0,
      "values": {
        "req": "Paralysis",
        "req_threshold": null,
        "ability_type": "User Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Paralyzed Punisher +20%",
      "details": "Increases damage to [[Conditions#List_of_Afflictions|paralyzed]] enemies by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralyzed Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Blossom Flash",
      "icon": "Icon_Skill_009",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;391%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;411%&lt;/span&gt; light damage to enemies in a line, and inflicts paralysis for '''13 seconds''' - dealing '''46.7%''' damage every 3.9 seconds with '''90%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;432%&lt;/span&gt; light damage to enemies in a line, and inflicts paralysis for '''13 seconds''' - dealing '''66%''' damage every 3.9 seconds with '''100%''' base chance.",
      "Sp": 2567,
      "SPLv2": 2567,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 782.0
        },
        "lvl2": {
          "BASE": 822.0
        },
        "lvl3": {
          "BASE": 864.0
        }
      }
    },
    "skill2": {
      "name": "Peerless Heart",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Dauntless Spirit.&quot; The user's next force strike will deal &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;634% (704%)&lt;/span&gt; damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2).&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 1.5x for all hits of Peerless Heart, from 6x.",
      "description2": "Activates &quot;Dauntless Spirit.&quot; The user's next force strike will deal &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;704% (782%)&lt;/span&gt; damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2).&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 1.5x for all hits of Peerless Heart, from 6x.",
      "description3": "Increases the damage dealt by the user's force strikes. Using this skill 3 times removes its effect.",
      "Sp": 4139,
      "SPLv2": 4139,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110066_01",
    "name": {
      "en": "Norwin",
      "ja": "ノーストン",
      "zh": "诺斯通"
    },
    "weapon": "Bow",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 62,
    "MaxHp": 442,
    "PlusHp0": 51,
    "PlusHp1": 60,
    "PlusHp2": 70,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 40,
    "MaxAtk": 287,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Blindness = Team Strength +8%",
      "details": "Buffs the entire team's strength by '''8%''' for 10 seconds upon successfully [[Afflictions|blinding]] an enemy. After activating, this ability will not activate again for five seconds.",
      "might": 60,
      "limit": 0,
      "values": {
        "req": "Blindness",
        "req_threshold": null,
        "ability_type": "Team Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Blindness = Team Strength +10%",
      "details": "Buffs the entire team's strength by '''10%''' for 10 seconds upon successfully [[Afflictions|blinding]] an enemy. After activating, this ability will not activate again for five seconds.",
      "might": 80,
      "limit": 0,
      "values": {
        "req": "Blindness",
        "req_threshold": null,
        "ability_type": "Team Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Blindness Res +100%",
      "details": "Reduces susceptibility to blindness by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Blinded Punisher +20%",
      "details": "Increases damage to blinded enemies by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blinded Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Storybook Ending",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;699%&lt;/span&gt; shadow damage to the target.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;734%&lt;/span&gt; shadow damage to the target, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''90%''' base chance.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;771%&lt;/span&gt; shadow damage to the target, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 secondss with '''100%''' base chance.",
      "Sp": 2503,
      "SPLv2": 2503,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 734.0
        },
        "lvl3": {
          "BASE": 771.0
        }
      }
    },
    "skill2": {
      "name": "Tragic Farce",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;233%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;245%&lt;/span&gt; shadow damage to enemies in a line. Blinded foes take 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;352.8%&lt;/span&gt; damage instead.",
      "description3": "",
      "Sp": 4716,
      "SPLv2": 4716,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 699.0
        },
        "lvl2": {
          "BASE": 1793.4
        }
      }
    }
  },
  {
    "id": "110067_01",
    "name": {
      "en": "Vida",
      "ja": "ヴィッテ",
      "zh": "维特"
    },
    "weapon": "Dagger",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 453,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Force Strike +20%",
      "details": "Increases force strike damage by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Force Strike +30%",
      "details": "Increases force strike damage by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Shadow Slash",
      "icon": "Icon_Skill_002",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;275%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;305%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;339%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 2446,
      "SPLv2": 2446,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 550.0
        },
        "lvl2": {
          "BASE": 610.0
        },
        "lvl3": {
          "BASE": 678.0
        }
      }
    },
    "skill2": {
      "name": "Scheming Slice",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Blinding Knives.&quot; The next three force strikes will deal 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;47% (52%)&lt;/span&gt; shadow damage and throw 3 knives in front of the user dealing &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;9% (10%)&lt;/span&gt; each for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''80%''' base chance. &lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 4.2x for all hits of Blinding Knives, from 8.4x on the first two hits.",
      "description2": "Activates &quot;Blinding Knives.&quot; The next three force strikes will deal 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;52% (57%)&lt;/span&gt; shadow damage and throw 3 knives in front of the user dealing &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;10% (11%)&lt;/span&gt; each for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''90%''' base chance. &lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 4.2x for all hits of Blinding Knives, from 8.4x on the first two hits.",
      "description3": "",
      "Sp": 5315,
      "SPLv2": 5315,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110252_01",
    "name": {
      "en": "Lily",
      "ja": "リリィ",
      "zh": "莉莉"
    },
    "weapon": "Wand",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 449,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 306,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Strength +13%",
      "details": "Increases strength by '''13%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 13
      }
    },
    "abilities12": {
      "name": "Full HP = Strength +15%",
      "details": "Increases strength by '''15%''' when HP is '''full'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Glacial Blossom",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;439%&lt;/span&gt; water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;461%&lt;/span&gt; water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;484%&lt;/span&gt; water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance.",
      "Sp": 2490,
      "SPLv2": 2490,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 878.0
        },
        "lvl2": {
          "BASE": 922.0
        },
        "lvl3": {
          "BASE": 968.0
        }
      }
    },
    "skill2": {
      "name": "Frozen Gale",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;877%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;974%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1082%&lt;/span&gt; water damage to surrounding enemies.",
      "Sp": 5909,
      "SPLv2": 5909,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 877.0
        },
        "lvl2": {
          "BASE": 974.0
        }
      }
    }
  },
  {
    "id": "110253_01",
    "name": {
      "en": "Orsem",
      "ja": "オルセム",
      "zh": "奥尔森"
    },
    "weapon": "Dagger",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 62,
    "MaxHp": 442,
    "PlusHp0": 51,
    "PlusHp1": 60,
    "PlusHp2": 70,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 40,
    "MaxAtk": 288,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Flurry Devastation +8%",
      "details": "Increases critical rate by '''8%''' when the combo count is 15 or higher.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "Flurry Devastation +10%",
      "details": "Increases critical rate by '''10%''' when the combo count is 15 or higher.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Critical Rate +6%",
      "details": "Increases critical rate by '''6%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 6
      }
    },
    "skill1": {
      "name": "Flurry Edge",
      "icon": "Icon_Skill_011",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;101%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;112%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;124%&lt;/span&gt; water damage to enemies directly ahead.",
      "Sp": 2311,
      "SPLv2": 2311,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 606.0
        },
        "lvl2": {
          "BASE": 672.0
        },
        "lvl3": {
          "BASE": 744.0
        }
      }
    },
    "skill2": {
      "name": "Triple Salchow",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;151%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;159%&lt;/span&gt; water damage to surrounding enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;166%&lt;/span&gt; water damage to surrounding enemies, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance.",
      "Sp": 4685,
      "SPLv2": 4685,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 636.0
        }
      }
    }
  },
  {
    "id": "110254_01",
    "name": {
      "en": "Zace",
      "ja": "ジーズ",
      "zh": "吉斯"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "3",
    "MinHp3": 41,
    "MinHp4": 51,
    "MinHp5": 60,
    "MaxHp": 425,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 68,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 26,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 291,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Skill Damage +15%",
      "details": "Increases attack skill damage by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Skull Hunter",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;617%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;648%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''90%''' base chance.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;680%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''100%''' base chance.",
      "Sp": 2352,
      "SPLv2": 2352,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 617.0
        },
        "lvl2": {
          "BASE": 648.0
        },
        "lvl3": {
          "BASE": 680.0
        }
      }
    },
    "skill2": {
      "name": "Bone Stinger",
      "icon": "Icon_Skill_012",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;206%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;229%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;254%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 5161,
      "SPLv2": 5161,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.0
        },
        "lvl2": {
          "BASE": 687.0
        }
      }
    }
  },
  {
    "id": "110255_01",
    "name": {
      "en": "Celliera",
      "ja": "セリエラ",
      "zh": "赛丽艾拉"
    },
    "weapon": "Blade",
    "element": "Water",
    "rarity": "4",
    "MinHp3": 41,
    "MinHp4": 41,
    "MinHp5": 60,
    "MaxHp": 423,
    "PlusHp0": 49,
    "PlusHp1": 57,
    "PlusHp2": 67,
    "PlusHp3": 57,
    "PlusHp4": 28,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 29,
    "MinAtk5": 41,
    "MaxAtk": 294,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Thaumian's Bane +20%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Thaumian's Bane +25%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Burn Res +25%",
      "details": "Reduces susceptibility to burning by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "HP 70% = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Ardent Stream",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;196%&lt;/span&gt; water damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Winter's Blade]] is active, this skill is upgraded to Ardent Stream Upgraded, which gains the effect to inflict [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''90%''' base chance.",
      "description2": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;218%&lt;/span&gt; water damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Winter's Blade]] is active, this skill is upgraded to Ardent Stream Upgraded, which gains the effect to inflict [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''100%''' base chance.",
      "description3": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;242%&lt;/span&gt; water damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Winter's Blade]] is active, this skill is upgraded to Ardent Stream Upgraded, which gains the effect to inflict [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance.",
      "Sp": 2537,
      "SPLv2": 2537,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 784.0
        },
        "lvl2": {
          "BASE": 872.0
        },
        "lvl3": {
          "BASE": 968.0
        }
      }
    },
    "skill2": {
      "name": "Winter's Blade",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''20%''' and upgrades the skill [[Ardent Stream]] with chance to inflict [[Conditions#Afflictions|freeze]], for 10 seconds.",
      "description2": "Increases the user's strength by '''25%''' and upgrades the skill [[Ardent Stream]] with chance to inflict [[Conditions#Afflictions|freeze]], for 10 seconds.",
      "description3": "",
      "Sp": 4877,
      "SPLv2": 4877,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110256_01",
    "name": {
      "en": "Louise",
      "ja": "ルイーゼ",
      "zh": "洛依泽"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 482,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 281,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "Overdrive Punisher +10%",
      "details": "Increases damage to enemies in overdrive state by '''10%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Overdrive Punisher +13%",
      "details": "Increases damage to enemies in overdrive state by '''13%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Strength Doublebuff +10%",
      "details": "Increases strength by '''10%''' for 15 seconds each time a defense up buff is received.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 10
      }
    },
    "abilities32": {
      "name": "Strength Doublebuff +13%",
      "details": "Increases strength by '''13%''' for 15 seconds each time a defense up buff is received.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 13
      }
    },
    "skill1": {
      "name": "Piercing Wind",
      "icon": "Icon_Skill_028",
      "description1": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;192%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''30.8%''' damage every 2.99 seconds - with '''100%''' base chance.",
      "description2": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;202%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''43.6%''' damage every 2.99 seconds - with '''110%''' base chance.",
      "description3": "Deals 4 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;212%&lt;/span&gt; wind damage to the target, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''58.2%''' damage every 2.99 seconds - with '''120%''' base chance.",
      "Sp": 2896,
      "SPLv2": 2896,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 768.0
        },
        "lvl2": {
          "BASE": 808.0
        },
        "lvl3": {
          "BASE": 848.0
        }
      }
    },
    "skill2": {
      "name": "Arrow Shower",
      "icon": "Icon_Skill_017",
      "description1": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;256%&lt;/span&gt; wind damage to enemies in a line. Poisoned foes take &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;345.6%&lt;/span&gt; wind damage per hit instead.",
      "description2": "Deals 3 shots of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;269%&lt;/span&gt; wind damage to enemies in a line. Poisoned foes take &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;403.5%&lt;/span&gt; wind damage per hit instead.",
      "description3": "",
      "Sp": 5001,
      "SPLv2": 5001,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 768.0
        },
        "lvl2": {
          "BASE": 807.0
        }
      }
    }
  },
  {
    "id": "110257_01",
    "name": {
      "en": "Lowen",
      "ja": "ルーエン",
      "zh": "卢恩"
    },
    "weapon": "Staff",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 469,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Recovery Potency +8%",
      "details": "Increases the potency of recovery skills by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Winds, Heal Us!",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|bog]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]] and removes [[Conditions#Afflictions|bog]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Winds, Protect Us!",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''15%''' for 15 seconds, and increases each adventurer's max HP by '''5%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description2": "Increases the entire team's defense by '''20%''' for 15 seconds, and increases each adventurer's max HP by '''10%''' for the remainder of the quest. Once HP buffs reach the limit of '''30%''', an HP recovery effect is granted instead.",
      "description3": "Increases the entire team's defense by '''15%''' for 30 seconds.",
      "Sp": 11449,
      "SPLv2": 11449,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110258_01",
    "name": {
      "en": "Pietro",
      "ja": "ピドット",
      "zh": "皮多特"
    },
    "weapon": "Axe",
    "element": "Water",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 468,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 15,
    "DefCoef": 10,
    "abilities11": {
      "name": "Critical Damage +10%",
      "details": "Adds '''10%''' to the modifier applied to critical damage.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Critical Damage +13%",
      "details": "Adds '''13%''' to the modifier applied to critical damage.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Blindness Res +50%",
      "details": "Reduces susceptibility to blindness by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Blindness Res +25%",
      "details": "Reduces susceptibility to blindness by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Blindness Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Quester's Best",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;420%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;466%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;518%&lt;/span&gt; water damage to surrounding enemies and draws them toward the user for 0.5 seconds.",
      "Sp": 2868,
      "SPLv2": 2868,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 840.0
        },
        "lvl2": {
          "BASE": 932.0
        },
        "lvl3": {
          "BASE": 1036.0
        }
      }
    },
    "skill2": {
      "name": "Indomitable Will",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a one-use shield that nullifies damage less than '''15%''' of the user's HP. This does not stack with any other shields.",
      "description2": "Grants all teammates a one-use shield that nullifies damage less than '''20%''' of the user's HP. This does not stack with any other shields.",
      "description3": "",
      "Sp": 5840,
      "SPLv2": 5840,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110261_01",
    "name": {
      "en": "Marty",
      "ja": "マーティ",
      "zh": "马蒂"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "3",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 474,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 26,
    "MinAtk3": 25,
    "MinAtk4": 31,
    "MinAtk5": 36,
    "MaxAtk": 259,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 41,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Skill Haste +4%",
      "details": "Increases skill gauge fill rate by '''4%'''.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 4
      }
    },
    "abilities12": {
      "name": "Skill Haste +5%",
      "details": "Increases skill gauge fill rate by '''5%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 5
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Spiral Hunter",
      "icon": "Icon_Skill_004",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;304%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;338%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;375%&lt;/span&gt; flame damage to surrounding enemies.",
      "Sp": 2409,
      "SPLv2": 2409,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 676.0
        },
        "lvl3": {
          "BASE": 750.0
        }
      }
    },
    "skill2": {
      "name": "Safeguard Surge",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a one-use shield that nullifies damage less than '''15%''' of the user's HP. This does not stack with any other shields.",
      "description2": "Grants all teammates a one-use shield that nullifies damage less than '''20%''' of the user's HP. This does not stack with any other shields.",
      "description3": "Increases the entire team's defense by 15% for 30 seconds.",
      "Sp": 5840,
      "SPLv2": 5840,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110266_01",
    "name": {
      "en": "Naveed",
      "ja": "ナジャーフ",
      "zh": "纳杰夫"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 452,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 302,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 48,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Slayer's Strength +5%",
      "details": "Increases strength by '''5%''' for every five enemies defeated (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Slayer's Strength +6%",
      "details": "Increases strength by '''6%''' for every five enemies defeated (up to five times per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 6
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Slayer's Strength",
        "ability_value": 6
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Crystalline Blades",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;138%&lt;/span&gt; flame damage to enemies directly ahead, and shoots 3 additional flame blades each dealing &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;23%&lt;/span&gt; flame damage for each time [[Radiant Bauble]] has been used, for a maximum of 15 additional blades.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;153%&lt;/span&gt; flame damage to enemies directly ahead, and shoots 3 additional flame blades each dealing &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;25%&lt;/span&gt; flame damage for each time [[Radiant Bauble]] has been used, for a maximum of 15 additional blades.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;170%&lt;/span&gt; flame damage to enemies directly ahead, and shoots 3 additional flame blades each dealing &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;28%&lt;/span&gt; flame damage for each time [[Radiant Bauble]] has been used, for a maximum of 15 additional blades.",
      "Sp": 2590,
      "SPLv2": 2590,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 552.0
        },
        "lvl2": {
          "BASE": 612.0
        },
        "lvl3": {
          "BASE": 680.0
        }
      }
    },
    "skill2": {
      "name": "Radiant Bauble",
      "icon": "Icon_Skill_034",
      "description1": "Activates &quot;Crystalline Blades Buffed&quot;. Increases the user's defense by '''10%''' for 10 seconds, and enhances the skill [[Crystalline Blades]] for the remainder of the quest. The skill can be enhanced up to five times.",
      "description2": "Activates &quot;Crystalline Blades Buffed&quot;. Increases the user's defense by '''15%''' for 10 seconds, and enhances the skill [[Crystalline Blades]] for the remainder of the quest. The skill can be enhanced up to five times.",
      "description3": "",
      "Sp": 3544,
      "SPLv2": 3544,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    }
  },
  {
    "id": "110267_01",
    "name": {
      "en": "Hawk",
      "ja": "ホーク",
      "zh": "霍克"
    },
    "weapon": "Bow",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 45,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 457,
    "PlusHp0": 53,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 41,
    "MaxAtk": 295,
    "PlusAtk0": 34,
    "PlusAtk1": 40,
    "PlusAtk2": 47,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Stun +50%",
      "details": "Increases the chances of inflicting stun by '''50%''' when HP is '''full'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Stun",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "Full HP = Stun +60%",
      "details": "Increases the chances of inflicting stun by '''60%''' when HP is '''full'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Stun",
        "ability_value": 60
      }
    },
    "abilities21": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Freeze Res +100%",
      "details": "Reduces susceptibility to freezing by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Stunned Punisher +25%",
      "details": "Increases damage to stunned enemies by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Stunned Punisher +30%",
      "details": "Increases damage to stunned enemies by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stunned Punisher",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Savage Hawk",
      "icon": "Icon_Skill_015",
      "description1": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;769%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;807%&lt;/span&gt; wind damage to enemies in a line. Stunned foes take &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;1678.56%&lt;/span&gt; wind damage instead.",
      "description3": "Deals 1 shot of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;848%&lt;/span&gt; wind damage to enemies in a line. Stunned foes take &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;1823.2%&lt;/span&gt; wind damage instead.",
      "Sp": 2723,
      "SPLv2": 2723,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 769.0
        },
        "lvl2": {
          "BASE": 807.0
        },
        "lvl3": {
          "BASE": 848.0
        }
      }
    },
    "skill2": {
      "name": "Hunter's Creed",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Shackling Arrows.&quot; The next three force strikes will deal &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;31% (34%)&lt;/span&gt; wind damage per hit for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "description2": "Activates &quot;Shackling Arrows.&quot; The next three force strikes will deal &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;33% (37%)&lt;/span&gt; wind damage per hit for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|stun]] for 5-6 seconds with '''100%''' base chance.",
      "description3": "Activates &quot;Shackling Arrows.&quot; For the next three force strikes, each force strike will shoot 7 shots of special arrows that deal extra damage and inflict [[Conditions#Afflictions|stun]] for 2-4 seconds.",
      "Sp": 5315,
      "SPLv2": 5315,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110268_01",
    "name": {
      "en": "Lin You",
      "ja": "リンユー",
      "zh": "林佑"
    },
    "weapon": "Axe",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 446,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 309,
    "PlusAtk0": 36,
    "PlusAtk1": 42,
    "PlusAtk2": 49,
    "PlusAtk3": 42,
    "PlusAtk4": 21,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Critical Rate +8%",
      "details": "Increases critical rate by '''8%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "HP 70% = Critical Rate +10%",
      "details": "Increases critical rate by '''10%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Haste +6%",
      "details": "Increases skill gauge fill rate by '''6%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 6
      }
    },
    "abilities32": {
      "name": "Skill Haste +8%",
      "details": "Increases skill gauge fill rate by '''8%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Typhoon Fist",
      "icon": "Icon_Skill_004",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;169%&lt;/span&gt; wind damage to enemies directly ahead.&lt;br&gt;&lt;br&gt;When [[Heaven's Breath]] is active, this skill is upgraded to deal 9 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;169%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;177%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 5-6 seconds with '''100%''' base chance.&lt;br&gt;&lt;br&gt;When [[Heaven's Breath]] is active, this skill is upgraded to deal 9 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;177%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 5-6 seconds with '''100%''' base chance.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;186%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 6-7 seconds with '''110%''' base chance.&lt;br&gt;&lt;br&gt;When [[Heaven's Breath]] is active, this skill is upgraded to deal 9 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;186%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|sleep]] for 6-7 seconds with '''110%''' base chance.",
      "Sp": 2969,
      "SPLv2": 2969,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 1014.0,
          "Heaven's Breath": 1521.0
        },
        "lvl2": {
          "BASE": 1062.0,
          "Heaven's Breath": 1593.0
        },
        "lvl3": {
          "BASE": 1116.0,
          "Heaven's Breath": 1674.0
        }
      }
    },
    "skill2": {
      "name": "Heaven's Breath",
      "icon": "Icon_Skill_032",
      "description1": "Restores the user's HP with '''31%''' Recovery Potency, and activates &quot;Heaven's Breath&quot; for 10 seconds. During Heaven's Breath, the user's attack rate is increased by '''15%''', and the skill [[Typhoon Fist]] is powered up.",
      "description2": "Restores the user's HP with '''36%''' Recovery Potency, and activates &quot;Heaven's Breath&quot; for 10 seconds. During Heaven's Breath, the user's attack rate is increased by '''20%''', and the skill [[Typhoon Fist]] is powered up.",
      "description3": "",
      "Sp": 8014,
      "SPLv2": 8014,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110269_01",
    "name": {
      "en": "Verica",
      "ja": "ウェルシェラ",
      "zh": "维尔莎拉"
    },
    "weapon": "Staff",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 468,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 33,
    "MinAtk5": 38,
    "MaxAtk": 271,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Healing +13%",
      "details": "Increases the potency of recovery skills by '''13%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 13
      }
    },
    "abilities12": {
      "name": "Full HP = Healing +15%",
      "details": "Increases the potency of recovery skills by '''15%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Recovery Potency +8%",
      "details": "Increases the potency of recovery skills by '''8%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Recovery Potency",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Blessings of Destiny",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]], removes [[Conditions#Afflictions|stun]], and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies with '''44%''' [[Healing Formula|Recovery Potency]], removes [[Conditions#Afflictions|stun]], and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Time's Respite",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the team member most in need with '''225%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to the team member most in need with '''250%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to the team member most in need with '''279%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 11832,
      "SPLv2": 11832,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110270_01",
    "name": {
      "en": "Melsa",
      "ja": "メルサ",
      "zh": "梅露莎"
    },
    "weapon": "Dagger",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 44,
    "MinHp4": 44,
    "MinHp5": 64,
    "MaxHp": 454,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 26,
    "MinAtk4": 26,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Physian's Bane +20%",
      "details": "Increases damage to [[Class Banes|physians]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Physian's Bane +25%",
      "details": "Increases damage to [[Class Banes|physians]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Physian's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Sleep Res +25%",
      "details": "Reduces susceptibility to sleep by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Flurry Devastation +8%",
      "details": "Increases critical rate by '''8%''' when the combo count is 15 or higher.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Heat Impulse",
      "icon": "Icon_Skill_003",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;101%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;112%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;124%&lt;/span&gt; flame damage to enemies directly ahead.",
      "Sp": 2311,
      "SPLv2": 2311,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 606.0
        },
        "lvl2": {
          "BASE": 672.0
        },
        "lvl3": {
          "BASE": 744.0
        }
      }
    },
    "skill2": {
      "name": "Molten Flare",
      "icon": "Icon_Skill_004",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;151%&lt;/span&gt; flame damage to surrounding enemies.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;167%&lt;/span&gt; flame damage to surrounding enemies.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;186%&lt;/span&gt; flame damage to enemies directly ahead, and reduces their strength by '''10%'''.",
      "Sp": 4685,
      "SPLv2": 4685,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 668.0
        }
      }
    }
  },
  {
    "id": "110274_01",
    "name": {
      "en": "Albert",
      "ja": "アルベール",
      "zh": "阿尔贝尔"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 454,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 300,
    "PlusAtk0": 35,
    "PlusAtk1": 40,
    "PlusAtk2": 48,
    "PlusAtk3": 40,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Force Strike +40%",
      "details": "Increases force strike damage by '''40%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "Force Strike +50%",
      "details": "Increases force strike damage by '''50%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Force Strike",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Electrically Charged I",
      "details": "Increases strength by '''20%''' when electrified.",
      "might": 80,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Electrically Charged",
        "ability_value": 1
      }
    },
    "abilities32": {
      "name": "Electrically Charged II",
      "details": "Increases strength by '''25%''' when electrified.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Electrically Charged",
        "ability_value": 2
      }
    },
    "skill1": {
      "name": "Lightning Burst",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;668%&lt;/span&gt; light damage to the target and nearby enemies.&lt;br&gt;&lt;br&gt;When [[Thunderous Impulse]] is active, this skill is upgraded to deal 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;1002%&lt;/span&gt; and 6 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;67%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;743%&lt;/span&gt; light damage to the target and nearby enemies.&lt;br&gt;&lt;br&gt;When [[Thunderous Impulse]] is active, this skill is upgraded to deal 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;1115%&lt;/span&gt; and 6 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;74%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;825%&lt;/span&gt; light damage to the target and nearby enemies.&lt;br&gt;&lt;br&gt;When [[Thunderous Impulse]] is active, this skill is upgraded to deal 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;1238%&lt;/span&gt; and 6 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;83%&lt;/span&gt; light damage to the target and nearby enemies.",
      "Sp": 2351,
      "SPLv2": 2351,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 668.0,
          "Thunderous Impulse": 1404.0
        },
        "lvl2": {
          "BASE": 743.0,
          "Thunderous Impulse": 1559.0
        },
        "lvl3": {
          "BASE": 825.0,
          "Thunderous Impulse": 1736.0
        }
      }
    },
    "skill2": {
      "name": "Thunderous Impulse",
      "icon": "Icon_Skill_030",
      "description1": "Electrifies the user for '''15''' seconds. When electrified the user's force strike will deal 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;83% (92%)&lt;/span&gt; light damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2) and inflict [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''66%''' damage every 3.99 seconds -  with '''90%''' base chance, and the skill [[Lightning Burst]] is powered up.&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 6x for all hits of Thunderous Impulse, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345. &lt;br&gt;\nWhen not electrified, the gauge for this skill will fill gradually with '''4,000''' SP every 0.99 seconds. Abilities that increase skill gauge fill rate will not affect this skill.",
      "description2": "Electrifies the user for '''20''' seconds. When electrified the user's force strike will deal 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;92% (102%)&lt;/span&gt; light damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2) and inflict [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''80.3%''' damage every 3.99 seconds -  with '''100%''' base chance, and the skill [[Lightning Burst]] is powered up.&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 6x for all hits of Thunderous Impulse, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345. &lt;br&gt;\nWhen not electrified, the gauge for this skill will fill gradually with '''4,000''' SP every 0.99 seconds. Abilities that increase skill gauge fill rate will not affect this skill.",
      "description3": "",
      "Sp": 160000,
      "SPLv2": 160000,
      "SpRegen": 4000,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110275_01",
    "name": {
      "en": "Annelie",
      "ja": "アンネリーエ",
      "zh": "安妮利艾"
    },
    "weapon": "Lance",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 475,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 76,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 289,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "HP 70% = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Energized: Strength +15%",
      "details": "Increases strength by '''15%''' for 15 seconds each time the user is [[Buffs|energized]].",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Energized: Strength",
        "ability_value": 15
      }
    },
    "abilities32": {
      "name": "Energized: Strength +20%",
      "details": "Increases strength by '''20%''' for 15 seconds each time the user is [[Buffs|energized]].",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Energized: Strength",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Stunning Display",
      "icon": "Icon_Skill_922",
      "description1": "Phase I deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;738%&lt;/span&gt; light damage to enemies directly ahead, draws them toward the center, increases the user's energy level by '''one''' stage, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase II deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;369%&lt;/span&gt; light damage, draws them toward the center, increases the user's energy level by '''two''' stages, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase III deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;321%&lt;/span&gt; light damage, and draws them towards the center. Skill Shift ends when you connect again during Phase III.",
      "description2": "Phase I deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;775%&lt;/span&gt; light damage to enemies directly ahead, draws them toward the center, inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''100%''' base chance, increases the user's energy level by '''one''' stage, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase II deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;388%&lt;/span&gt; light damage, draws them toward the center, inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''100%''' base chance, increases the user's energy level by '''two''' stages, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase III deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;337%&lt;/span&gt; light damage, draws them towards the center, and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''100%''' base chance. Skill Shift ends when you connect again during Phase III.",
      "description3": "Phase I deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;814%&lt;/span&gt; light damage to enemies directly ahead, draws them toward the center, inflicts [[Conditions#Afflictions|stun]] for 6-7 seconds with '''110%''' base chance, increases the user's energy level by '''one''' stage, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase II deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;407%&lt;/span&gt; light damage, draws them toward the center, inflicts [[Conditions#Afflictions|stun]] for 6-7 seconds with '''110%''' base chance, increases the user's energy level by '''two''' stages, and activates &quot;Skill Shift&quot; if the attack connects.&lt;br/&gt;&lt;br/&gt;Phase III deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;10%&lt;/span&gt; and 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;354%&lt;/span&gt; light damage, draws them towards the center, and inflicts [[Conditions#Afflictions|stun]] for 6-7 seconds with '''110%''' base chance. Skill Shift ends when you connect again during Phase III.",
      "Sp": 3051,
      "SPLv2": 3051,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "Phase I": 748.0,
          "Phase II": 758.0,
          "Phase III": 993.0
        },
        "lvl2": {
          "Phase I": 785.0,
          "Phase II": 796.0,
          "Phase III": 1041.0
        },
        "lvl3": {
          "Phase I": 824.0,
          "Phase II": 834.0,
          "Phase III": 1092.0
        }
      }
    },
    "skill2": {
      "name": "Smiles on Parade",
      "icon": "Icon_Skill_912",
      "description1": "Deals 10 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;74.6658%&lt;/span&gt; light damage to enemies directly ahead, and increases the entire team's energy levels by '''two''' stages.",
      "description2": "Deals 10 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;82.962%&lt;/span&gt; light damage to enemies directly ahead, and increases the entire team's energy levels by '''two''' stages.",
      "description3": "",
      "Sp": 10206,
      "SPLv2": 10206,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 746.66
        },
        "lvl2": {
          "BASE": 829.62
        }
      }
    }
  },
  {
    "id": "110276_01",
    "name": {
      "en": "Fritz",
      "ja": "フリッツ",
      "zh": "弗里茨"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 56,
    "MinHp5": 66,
    "MaxHp": 467,
    "PlusHp0": 54,
    "PlusHp1": 63,
    "PlusHp2": 74,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 275,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 16,
    "DefCoef": 10,
    "abilities11": {
      "name": "Striker's Skill +6%",
      "details": "Increases skill damage by '''6%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Skill",
        "ability_value": 6
      }
    },
    "abilities12": {
      "name": "Striker's Skill +8%",
      "details": "Increases skill damage by '''8%''' for every three enemies defeated with force strikes (up to five times per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Striker's Skill",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Strength Doublebuff +8%",
      "details": "Increases strength by '''8%''' for 15 seconds each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Strength Doublebuff",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Acrobatic Dagger",
      "icon": "Icon_Skill_003",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;151%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;159%&lt;/span&gt; light damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''40%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;167%&lt;/span&gt; light damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''40%''' base chance.",
      "Sp": 2452,
      "SPLv2": 2452,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 604.0
        },
        "lvl2": {
          "BASE": 636.0
        },
        "lvl3": {
          "BASE": 668.0
        }
      }
    },
    "skill2": {
      "name": "Dazzling Show",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Stunning Knives.&quot; The next three force strikes will deal 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;47% (52%)&lt;/span&gt; light damage and throw 8 knives around the user dealing &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;24% (26%)&lt;/span&gt; light damage each for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|stun]] for 3-4 seconds with '''90%''' base chance.&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 4.2x for all hits of Stunning Knives, from 8.4x on the first two hits.",
      "description2": "Activates &quot;Stunning Knives.&quot; The next three force strikes will deal 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;52% (57%)&lt;/span&gt; light damage and throw 8 knives around the user dealing &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;26% (29%)&lt;/span&gt; light damage each for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.&lt;br&gt;\nBonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 4.2x for all hits of Stunning Knives, from 8.4x on the first two hits.",
      "description3": "",
      "Sp": 5315,
      "SPLv2": 5315,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110277_01",
    "name": {
      "en": "Felicia",
      "ja": "フェリーチャ",
      "zh": "菲丽嘉"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 45,
    "MinHp4": 45,
    "MinHp5": 65,
    "MaxHp": 461,
    "PlusHp0": 54,
    "PlusHp1": 62,
    "PlusHp2": 73,
    "PlusHp3": 62,
    "PlusHp4": 31,
    "McFullBonusHp5": 26,
    "MinAtk3": 26,
    "MinAtk4": 26,
    "MinAtk5": 37,
    "MaxAtk": 265,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 15,
    "DefCoef": 8,
    "abilities11": {
      "name": "Undead Res +15%",
      "details": "Decreases damage from [[Class Banes|undead]] by '''15%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead Res",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Undead Res +20%",
      "details": "Decreases damage from [[Class Banes|undead]] by '''20%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Undead Res",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Heaven's Blessing",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''72%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Restores HP to all allies with '''90%''' [[Healing Formula|Recovery Potency]].",
      "description3": "Restores HP to all allies with '''108%''' [[Healing Formula|Recovery Potency]].",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Cleansing Dance",
      "icon": "Icon_Skill_033",
      "description1": "Grants all teammates a one-use shield that nullifies damage less than '''20%''' of the user's HP (but does not stack with any other shields), and removes [[Conditions#Afflictions|poison]].",
      "description2": "Grants all teammates a one-use shield that nullifies damage less than '''30%''' of the user's HP (but does not stack with any other shields), and removes [[Conditions#Afflictions|poison]].",
      "description3": "",
      "Sp": 7288,
      "SPLv2": 7288,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110280_01",
    "name": {
      "en": "Heinwald",
      "ja": "ハインヴァルト",
      "zh": "海因瓦尔德"
    },
    "weapon": "Staff",
    "element": "Shadow",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 482,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 281,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 16,
    "DefCoef": 8,
    "abilities11": {
      "name": "HP 70% = Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "HP 70% = Skill Damage +35%",
      "details": "Increases attack skill damage by '''35%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Damage",
        "ability_value": 35
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Call of Chaos",
      "icon": "Icon Skill 020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;258%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''27%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''3%''' of the damage inflicted as HP to all allies. This recovery caps at '''4%''' of the recipient's HP per hit.&lt;br&gt;&lt;br&gt;When [[Abyssal Connection]] is active, this skill is upgraded to deal 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;258%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''27%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''9%''' of the damage inflicted as HP to all allies. This recovery caps at '''8%''' of the recipient's HP per hit.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;286%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''3%''' of the damage inflicted as HP to all allies. This recovery caps at '''4%''' of the recipient's HP per hit.&lt;br&gt;&lt;br&gt;When [[Abyssal Connection]] is active, this skill is upgraded to deal 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;286%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''9%''' of the damage inflicted as HP to all allies. This recovery caps at '''8%''' of the recipient's HP per hit.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;318%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''3%''' of the damage inflicted as HP to all allies. This recovery caps at '''4%''' of the recipient's HP per hit.&lt;br&gt;&lt;br&gt;When [[Abyssal Connection]] is active, this skill is upgraded to deal 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;318%&lt;/span&gt; shadow damage to the target and nearby enemies, and restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]]. If the attack connects, restores an additional '''9%''' of the damage inflicted as HP to all allies. This recovery caps at '''8%''' of the recipient's HP per hit.",
      "Sp": 3352,
      "SPLv2": 3352,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 516.0
        },
        "lvl2": {
          "BASE": 572.0
        },
        "lvl3": {
          "BASE": 636.0
        }
      }
    },
    "skill2": {
      "name": "Abyssal Connection",
      "icon": "Icon Skill 030",
      "description1": "Activates &quot;Abyssal Connection&quot; for 10 seconds. During Abyssal Connection, the user's strength is increased by '''15%''', and the [[Call of Chaos]] skill is powered up. Also increases the strength of nearby allies by '''5%''' for 10 seconds.",
      "description2": "Activates &quot;Abyssal Connection&quot; for 10 seconds. During Abyssal Connection, the user's strength is increased by '''20%''', and the [[Call of Chaos]] skill is powered up. Also increases the strength of nearby allies by '''10%''' for 10 seconds.",
      "description3": "",
      "Sp": 4202,
      "SPLv2": 4202,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110281_01",
    "name": {
      "en": "Curran",
      "ja": "クーガー",
      "zh": "库格尔"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 62,
    "MaxHp": 443,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 44,
    "MaxAtk": 311,
    "PlusAtk0": 36,
    "PlusAtk1": 42,
    "PlusAtk2": 49,
    "PlusAtk3": 42,
    "PlusAtk4": 21,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Overdrive Punisher +10%",
      "details": "Increases damage to enemies in overdrive state by '''10%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "Overdrive Punisher +13%",
      "details": "Increases damage to enemies in overdrive state by '''13%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 13
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Last Offense +40%",
      "details": "Buffs strength by '''40%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 40
      }
    },
    "abilities32": {
      "name": "Last Offense +50%",
      "details": "Buffs strength by '''50%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Circular Judgment",
      "icon": "Icon Skill 019",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;169%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;508%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;178%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;533%&lt;/span&gt; shadow damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''50%''' base chance.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;187%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;560%&lt;/span&gt; shadow damage to enemies directly ahead, and reduces their defense by '''5%''' for 10 seconds with '''50%''' base chance.",
      "Sp": 3083,
      "SPLv2": 3083,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 1015.0
        },
        "lvl2": {
          "BASE": 1067.0
        },
        "lvl3": {
          "BASE": 1121.0
        }
      }
    },
    "skill2": {
      "name": "Merciless Blow",
      "icon": "Icon Skill 011",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;338%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;376%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;418%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "Sp": 6017,
      "SPLv2": 6017,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 1014.0
        },
        "lvl2": {
          "BASE": 1128.0
        }
      }
    }
  },
  {
    "id": "110291_01",
    "name": {
      "en": "Marth",
      "ja": "マルス",
      "zh": "马尔斯"
    },
    "weapon": "Sword",
    "element": "Flame",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 55,
    "MinHp5": 64,
    "MaxHp": 452,
    "PlusHp0": 53,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 29,
    "MinAtk4": 36,
    "MinAtk5": 42,
    "MaxAtk": 302,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 48,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Boost I",
      "details": "Fills '''50%''' of the entire team's skill gauges when the user's HP drops to '''30%''' (once per quest). This does not fill the skill gauges of dragons.",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Boost",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Last Boost II",
      "details": "Fills '''100%''' of the entire team's skill gauges when the user's HP drops to '''30%''' (once per quest). This does not fill the skill gauges of dragons.",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Boost",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Flurry Devastation +10%",
      "details": "Increases critical rate by '''10%''' when the combo count is 15 or higher.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 10
      }
    },
    "abilities32": {
      "name": "Flurry Devastation +13%",
      "details": "Increases critical rate by '''13%''' when the combo count is 15 or higher.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Flurry Devastation",
        "ability_value": 13
      }
    },
    "skill1": {
      "name": "Flickering Flames",
      "icon": "Icon_Skill_038",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;84%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;168%&lt;/span&gt; flame damage to enemies directly ahead, and gradually recovers the user's HP with '''4%''' [[Healing Formula|Recovery Potency]] every 2.9 seconds for 15 seconds.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;93%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;186%&lt;/span&gt; flame damage to enemies directly ahead, and gradually recovers the user's HP with '''5%''' [[Healing Formula|Recovery Potency]] every 2.9 seconds for 15 seconds.",
      "description3": "Deals 6 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;103%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;206%&lt;/span&gt; flame damage to enemies directly ahead, and gradually recovers the user's HP with '''6%''' [[Healing Formula|Recovery Potency]] every 2.9 seconds for 15 seconds.",
      "Sp": 2875,
      "SPLv2": 2875,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 672.0
        },
        "lvl2": {
          "BASE": 744.0
        },
        "lvl3": {
          "BASE": 824.0
        }
      }
    },
    "skill2": {
      "name": "Fire Emblem",
      "icon": "Icon_Skill_039",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;616%&lt;/span&gt; flame damage to enemies in a line, and activates &quot;Skill Shift&quot; if the attack connects. Phase I increases the user's strength by '''10%''' for 10 seconds.&lt;br/&gt;&lt;br/&gt;Phase II increases the entire team's strength by '''10%''' for 10 seconds, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase III increases the entire team's strength by '''10%''' and attack rate by '''20%''' for 10 seconds. Skill Shift ends when you connect again during Phase III.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;685%&lt;/span&gt; flame damage to enemies in a line, and activates &quot;Skill Shift&quot; if the attack connects. Phase I increases the user's strength by '''10%''' for 10 seconds.&lt;br/&gt;&lt;br/&gt;Phase II increases the entire team's strength by '''10%''' for 10 seconds, and activates &quot;Skill Shift&quot; if the attack connects. &lt;br/&gt;&lt;br/&gt;Phase III increases the entire team's strength by '''10%''' and attack rate by '''30%''' for 10 seconds. Skill Shift ends when you connect again during Phase III.",
      "description3": "",
      "Sp": 5700,
      "SPLv2": 5700,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 616.0
        },
        "lvl2": {
          "BASE": 685.0
        }
      }
    }
  },
  {
    "id": "110299_01",
    "name": {
      "en": "Xuan Zang",
      "ja": "サンゾウ",
      "zh": "Xuan Zang"
    },
    "weapon": "Lance",
    "element": "Flame",
    "rarity": "4",
    "MinHp3": 44,
    "MinHp4": 44,
    "MinHp5": 63,
    "MaxHp": 448,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 72,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 27,
    "MinAtk3": 27,
    "MinAtk4": 27,
    "MinAtk5": 39,
    "MaxAtk": 276,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Demihuman's Bane +20%",
      "details": "Increases damage to [[Class Banes|demihumans]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Demihuman's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Demihuman's Bane +25%",
      "details": "Increases damage to [[Class Banes|demihumans]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Demihuman's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Stun Res +25%",
      "details": "Reduces susceptibility to stun by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "HP 70% = Critical Rate +6%",
      "details": "Increases critical rate by '''6%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 6
      }
    },
    "skill1": {
      "name": "Flame Incursion",
      "icon": "Icon_Skill_012",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;204%&lt;/span&gt; flame damage to enemies directly ahead. Debuffed foes take 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;244.8%&lt;/span&gt; flame damage instead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;226%&lt;/span&gt; flame damage to enemies directly ahead. Debuffed foes take 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;271.2%&lt;/span&gt; flame damage instead.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;251%&lt;/span&gt; flame damage to enemies directly ahead. Debuffed foes take 3 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;302.4%&lt;/span&gt; flame damage instead.",
      "Sp": 2707,
      "SPLv2": 2707,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 1346.4
        },
        "lvl2": {
          "BASE": 1491.6
        },
        "lvl3": {
          "BASE": 1660.2
        }
      }
    },
    "skill2": {
      "name": "Heaven's Binding",
      "icon": "Icon_Skill_020",
      "description1": "Reduces the strength of the target and nearby enemies by '''3%''' with '''70%''' base chance, and their defense by '''8%''', for '''20''' seconds with '''70%''' base chance (STR DOWN and DEF DOWN rolled separately).",
      "description2": "Reduces the strength of the target and nearby enemies by '''5%''' with '''70%''' base chance, and their defense by '''10%''', for '''20''' seconds with '''70%''' base chance (STR DOWN and DEF DOWN rolled separately).",
      "description3": "",
      "Sp": 6000,
      "SPLv2": 6000,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110301_01",
    "name": {
      "en": "Odetta",
      "ja": "オデッタ",
      "zh": "欧蒂塔"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 62,
    "MaxHp": 440,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 70,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 291,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Strength +8%",
      "details": "Increases strength by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "HP 70% = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Poison Res +100%",
      "details": "Reduces susceptibility to poison by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Buff Time +20%",
      "details": "Increases duration of buff skills by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Buff Time",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Liberty Slash",
      "icon": "Icon_Skill_009",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;274%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;287%&lt;/span&gt; light damage to enemies in a line, and reduces their defense by '''5%''' for 10 seconds with '''40%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;302%&lt;/span&gt; light damage to enemies in a line, and reduces their defense by '''5%''' for 10 seconds with '''40%''' base chance.",
      "Sp": 2503,
      "SPLv2": 2503,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": {
        "lvl1": {
          "BASE": 548.0
        },
        "lvl2": {
          "BASE": 574.0
        }
      }
    },
    "skill2": {
      "name": "Freedom Ring",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to the user and nearby allies with '''52%''' [[Healing Formula|Recovery Potency]], and increases their strength by '''10%''' for 15 seconds.",
      "description2": "Restores HP to the user and nearby allies with '''60%''' [[Healing Formula|Recovery Potency]], and increases their strength by '''15%''' for 15 seconds.",
      "description3": "",
      "Sp": 6424,
      "SPLv2": 6424,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110302_01",
    "name": {
      "en": "Pia",
      "ja": "ピアチェ",
      "zh": "皮雅茜"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 482,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 37,
    "MaxAtk": 266,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 42,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Defense +8%",
      "details": "Increases defense by '''8%''' when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "HP 70% = Defense +10%",
      "details": "Increases defense by '''10%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Defense",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Energy Doublebuff",
      "details": "Increases [[Buffs|energy level]] by '''one''' stage each time a defense up buff is received.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 1
      },
      "values": {}
    },
    "skill1": {
      "name": "Ka-boom!",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;679%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;754%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;838%&lt;/span&gt; wind damage to the target and nearby enemies.",
      "Sp": 2579,
      "SPLv2": 2579,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 679.0
        },
        "lvl2": {
          "BASE": 754.0
        },
        "lvl3": {
          "BASE": 838.0
        }
      }
    },
    "skill2": {
      "name": "Cheer up, chums!",
      "icon": "Icon_Skill_032",
      "description1": "Increases the entire team's energy levels by '''one''' stage.",
      "description2": "Increases the entire team's energy levels by '''one''' stage.",
      "description3": "",
      "Sp": 4000,
      "SPLv2": 3636,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110303_01",
    "name": {
      "en": "Elias",
      "ja": "エリアス",
      "zh": "埃利亚斯"
    },
    "weapon": "Bow",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 47,
    "MinHp5": 68,
    "MaxHp": 483,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 24,
    "MinAtk4": 24,
    "MinAtk5": 35,
    "MaxAtk": 252,
    "PlusAtk0": 29,
    "PlusAtk1": 34,
    "PlusAtk2": 40,
    "PlusAtk3": 34,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Demon's Bane +20%",
      "details": "Increases damage to [[Class Banes|demons]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Demon's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Demon's Bane +25%",
      "details": "Increases damage to [[Class Banes|demons]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Demon's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Curse Res +25%",
      "details": "Reduces susceptibility to curses by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Last Offense +30%",
      "details": "Buffs strength by '''30%''' for 15 seconds when HP drops to '''30%''' (once per quest).",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Offense",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Uptempo Chord",
      "icon": "Icon_Skill_028",
      "description1": "Deals &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;699%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;777%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;893%&lt;/span&gt; light damage to enemies in a line.",
      "Sp": 2558,
      "SPLv2": 2558,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Virtuoso Anthem",
      "icon": "Icon_Skill_932",
      "description1": "Increases the entire team's energy levels by '''one''' stage.",
      "description2": "Increases the entire team's energy levels by '''one''' stage.",
      "description3": "",
      "Sp": 4000,
      "SPLv2": 3636,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110304_01",
    "name": {
      "en": "Vixel",
      "ja": "ヴィクセル",
      "zh": "维克塞尔"
    },
    "weapon": "Staff",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 66,
    "MaxHp": 470,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 29,
    "MinAtk3": 26,
    "MinAtk4": 32,
    "MinAtk5": 38,
    "MaxAtk": 270,
    "PlusAtk0": 31,
    "PlusAtk1": 36,
    "PlusAtk2": 43,
    "PlusAtk3": 36,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 18,
    "DefCoef": 8,
    "abilities11": {
      "name": "Full HP = Healing +13%",
      "details": "Increases the potency of recovery skills by '''13%''' when HP is '''full'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 13
      }
    },
    "abilities12": {
      "name": "Full HP = Healing +15%",
      "details": "Increases the potency of recovery skills by '''15%''' when HP is '''full'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "Full HP",
        "req_threshold": 100,
        "ability_type": "Healing",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "Sleep Res +50%",
      "details": "Reduces susceptibility to sleep by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Sleep Res +100%",
      "details": "Reduces susceptibility to sleep by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleep Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Spirited Song",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''31%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''25%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''36%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''29%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies with '''44%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''35%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "Sp": 5916,
      "SPLv2": 5916,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "skill2": {
      "name": "Agitato Assault",
      "icon": "Icon_Skill_032",
      "description1": "Increases the potency of the entire team's recovery skills by '''5%''' for 10 seconds, and increases their energy levels by '''one''' stage.",
      "description2": "Increases the potency of the entire team's recovery skills by '''10%''' for 10 seconds, and increases their energy level by '''one''' stage.",
      "description3": "",
      "Sp": 4819,
      "SPLv2": 4819,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110305_01",
    "name": {
      "en": "Lucretia",
      "ja": "ルクレツィア",
      "zh": "卢克雷齐娅"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 449,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 305,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 8,
    "abilities11": {
      "name": "Energized: Strength +15%",
      "details": "Increases strength by '''15%''' for 15 seconds each time the user is [[Buffs|energized]].",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Energized: Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Energized: Strength +20%",
      "details": "Increases strength by '''20%''' for 15 seconds each time the user is [[Buffs|energized]].",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Energized: Strength",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +25%",
      "details": "Increases damage to enemies in break state by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Broken Punisher +30%",
      "details": "Increases damage to enemies in break state by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Empowering Triplet",
      "icon": "Icon_Skill_925",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;292%&lt;/span&gt; light damage to enemies directly ahead, and increases the entire team's energy levels by '''one''' stage.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;307%&lt;/span&gt; light damage to enemies directly ahead, and increases the entire team's energy levels by '''one''' stage.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;322%&lt;/span&gt; light damage to enemies directly ahead, and increases the entire team's energy levels by '''one''' stage.",
      "Sp": 3530,
      "SPLv2": 3530,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 876.0
        },
        "lvl2": {
          "BASE": 921.0
        },
        "lvl3": {
          "BASE": 966.0
        }
      }
    },
    "skill2": {
      "name": "Crescendo Chorus",
      "icon": "Icon_Skill_930",
      "description1": "Increases the user's strength by '''10%''' for 10 seconds, and increases their energy level by '''one''' stage.",
      "description2": "Increases the user's strength by '''10%''' for 10 seconds, and increases their energy level by '''two''' stages.",
      "description3": "",
      "Sp": 4553,
      "SPLv2": 4553,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110310_01",
    "name": {
      "en": "Addis",
      "ja": "アディス",
      "zh": "阿迪斯"
    },
    "weapon": "Blade",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 53,
    "MinHp5": 61,
    "MaxHp": 435,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 69,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 25,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 305,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 48,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Bleeding Punisher +5%",
      "details": "Increases damage to bleeding enemies by '''5%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bleeding Punisher",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "Bleeding Punisher +8%",
      "details": "Increases damage to bleeding enemies by '''8%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bleeding Punisher",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Freeze Res +100%",
      "details": "Reduces susceptibility to freezing by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Broken Punisher +20%",
      "details": "Increases damage to enemies in break state by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 30
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Broken Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Bamboo Cutter",
      "icon": "Icon_Skill_003",
      "description1": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;196%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''28%''' damage every 2.99 seconds - with '''100%''' base chance.&lt;br/&gt;&lt;br/&gt;When [[Dignified Soul]] is active, this skill is upgraded to Bamboo Cutter Buffed, and instead of poison, inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''71%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description2": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;205%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''39.6%''' damage every 2.99 seconds - with '''100%''' base chance.&lt;br/&gt;&lt;br/&gt;When [[Dignified Soul]] is active, this skill is upgraded to Bamboo Cutter Buffed, and instead of poison, inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''99%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description3": "Deals 3 hits and 1 delayed hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;216%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''53%''' damage every 2.99 seconds - with '''100%''' base chance.&lt;br/&gt;&lt;br/&gt;When [[Dignified Soul]] is active, this skill is upgraded to Bamboo Cutter Buffed, and instead of poison, inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''132%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "Sp": 2537,
      "SPLv2": 2537,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 784.0
        },
        "lvl2": {
          "BASE": 820.0
        },
        "lvl3": {
          "BASE": 864.0
        }
      }
    },
    "skill2": {
      "name": "Dignified Soul",
      "icon": "Icon_Skill_830",
      "description1": "Increases the user's strength by '''20%''' and upgrades the skill [[Bamboo Cutter]] with chance to inflict [[Conditions#Special_Effects|bleeding]] instead of poison, for 10 seconds.",
      "description2": "Increases the user's strength by '''25%''' and upgrades the skill [[Bamboo Cutter]] with chance to inflict [[Conditions#Special_Effects|bleeding]] instead of poison, for 10 seconds.",
      "description3": "",
      "Sp": 4877,
      "SPLv2": 4877,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110311_01",
    "name": {
      "en": "Sazanka",
      "ja": "サザンカ",
      "zh": "山茶花"
    },
    "weapon": "Axe",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 481,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 275,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Gauge Accelerator +25%",
      "details": "Speeds the rate the mode gauge decreases by '''25%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 35
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Accelerator",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Gauge Accelerator +30%",
      "details": "Speeds the rate the mode gauge decreases by '''30%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 35
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Gauge Accelerator",
        "ability_value": 30
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Sleeping Punisher +20%",
      "details": "Increases damage to sleeping enemies by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Sleeping Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Dancing Blossoms",
      "icon": "Icon_Skill_804",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;231%&lt;/span&gt; shadow damage to surrounding enemies, draws them toward the user for 0.5 seconds, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''71%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;242%&lt;/span&gt; shadow damage to surrounding enemies, draws them toward the user for 0.5 seconds, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''99%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;255%&lt;/span&gt; shadow damage to surrounding enemies, draws them toward the user for 0.5 seconds, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''132%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "Sp": 2805,
      "SPLv2": 2805,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 924.0
        },
        "lvl2": {
          "BASE": 968.0
        },
        "lvl3": {
          "BASE": 1020.0
        }
      }
    },
    "skill2": {
      "name": "Blooming Cradle",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Slumber Strike Stance.&quot; The next three force strikes will deal &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;190% (209%)&lt;/span&gt; shadow damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|sleep]] for 3-4 seconds with '''90%''' base chance.",
      "description2": "Activates &quot;Slumber Strike Stance.&quot; The next three force strikes will deal &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;209% (230%)&lt;/span&gt; shadow damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2), and inflict [[Conditions#Afflictions|sleep]] for 4-5 seconds with '''100%''' base chance.",
      "description3": "",
      "Sp": 6400,
      "SPLv2": 6400,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110312_01",
    "name": {
      "en": "Botan",
      "ja": "ボタン",
      "zh": "牡丹"
    },
    "weapon": "Lance",
    "element": "Shadow",
    "rarity": "4",
    "MinHp3": 46,
    "MinHp4": 46,
    "MinHp5": 66,
    "MaxHp": 470,
    "PlusHp0": 55,
    "PlusHp1": 63,
    "PlusHp2": 75,
    "PlusHp3": 63,
    "PlusHp4": 31,
    "McFullBonusHp5": 28,
    "MinAtk3": 25,
    "MinAtk4": 25,
    "MinAtk5": 37,
    "MaxAtk": 263,
    "PlusAtk0": 30,
    "PlusAtk1": 35,
    "PlusAtk2": 42,
    "PlusAtk3": 35,
    "PlusAtk4": 17,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Thaumian's Bane +20%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Thaumian's Bane +25%",
      "details": "Increases damage to [[Class Banes|thaumians]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Thaumian's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Paralysis Res +25%",
      "details": "Reduces susceptibility to paralysis by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Skill Prep +50%",
      "details": "Fills '''50%''' of skill gauges at the start of quests.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 50
      }
    },
    "skill1": {
      "name": "Petal Piercer",
      "icon": "Icon_Skill_812",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;136%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''71%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;142%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''99%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description3": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;150%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''132%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "Sp": 2427,
      "SPLv2": 2427,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 680.0
        },
        "lvl2": {
          "BASE": 710.0
        },
        "lvl3": {
          "BASE": 750.0
        }
      }
    },
    "skill2": {
      "name": "Perennial Grace",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''10%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''15%''' for 15 seconds.",
      "description3": "",
      "Sp": 7634,
      "SPLv2": 7634,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": null
    }
  },
  {
    "id": "110313_01",
    "name": {
      "en": "Ieyasu",
      "ja": "イエヤス",
      "zh": "家康"
    },
    "weapon": "Blade",
    "element": "Shadow",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 62,
    "MaxHp": 442,
    "PlusHp0": 51,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 25,
    "MinAtk3": 30,
    "MinAtk4": 38,
    "MinAtk5": 44,
    "MaxAtk": 312,
    "PlusAtk0": 36,
    "PlusAtk1": 42,
    "PlusAtk2": 50,
    "PlusAtk3": 42,
    "PlusAtk4": 21,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Critical Rate +8%",
      "details": "Increases critical rate by '''8%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "HP 70% = Critical Rate +10%",
      "details": "Increases critical rate by '''10%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Rate",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Critical Damage +15%",
      "details": "Adds '''15%''' to the modifier applied to critical damage.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 15
      }
    },
    "abilities32": {
      "name": "Critical Damage +20%",
      "details": "Adds '''20%''' to the modifier applied to critical damage.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Sakura Flurry",
      "icon": "Icon_Skill_803",
      "description1": "Deals 7 hits and 1 delayed hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;108%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''77%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description2": "Deals 7 hits and 1 delayed hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;113%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''110%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "description3": "Deals 7 hits and 1 delayed hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;119%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''146%''' damage every 4.99 seconds - with '''80%''' base chance.",
      "Sp": 2467,
      "SPLv2": 2467,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 864.0
        },
        "lvl2": {
          "BASE": 904.0
        },
        "lvl3": {
          "BASE": 952.0
        }
      }
    },
    "skill2": {
      "name": "Blade Formation",
      "icon": "Icon_Skill_032",
      "description1": "Activates &quot;Blade Formation&quot; for 15 seconds. During Blade Formation, the user's HP gradually recovers with '''29%''' [[Healing Formula|Recovery Potency]] every 2.9 seconds, and their critical rate against bleeding enemies is increased by '''10%'''.",
      "description2": "Activates &quot;Blade Formation&quot; for 15 seconds. During Blade Formation, the user's HP gradually recovers with '''35%''' [[Healing Formula|Recovery Potency]] every 2.9 seconds, and their critical rate against bleeding enemies is increased by '''15%'''.",
      "description3": "",
      "Sp": 7913,
      "SPLv2": 7913,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110314_01",
    "name": {
      "en": "Su Fang",
      "ja": "スオウ",
      "zh": "苏方"
    },
    "weapon": "Dagger",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 42,
    "MinHp4": 42,
    "MinHp5": 61,
    "MaxHp": 432,
    "PlusHp0": 50,
    "PlusHp1": 58,
    "PlusHp2": 69,
    "PlusHp3": 58,
    "PlusHp4": 29,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 27,
    "MinAtk5": 40,
    "MaxAtk": 284,
    "PlusAtk0": 33,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 10,
    "abilities11": {
      "name": "Therion's Bane +20%",
      "details": "Increases damage to [[Class Banes|therions]] by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Therion's Bane",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "Therion's Bane +25%",
      "details": "Increases damage to [[Class Banes|therions]] by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Therion's Bane",
        "ability_value": 25
      }
    },
    "abilities21": {
      "name": "Bog Res +25%",
      "details": "Reduces susceptibility to bog by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Gale Slice",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;151%&lt;/span&gt;, 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;45%&lt;/span&gt;, and 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;105%&lt;/span&gt; wind damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Crackling Pyroblossom]] is active, this skill is upgraded to Gale Slice Buffed, which gains the effect to inflict [[Conditions#Afflictions|stun]] for 3-4 seconds with '''90%''' base chance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;167%&lt;/span&gt;, 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;50%&lt;/span&gt;, and 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;117%&lt;/span&gt; wind damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Crackling Pyroblossom]] is active, this skill is upgraded to Gale Slice Buffed, which gains the effect to inflict [[Conditions#Afflictions|stun]] for 4-5 seconds with '''100%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;186%&lt;/span&gt;, 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;56%&lt;/span&gt;, and 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;130%&lt;/span&gt; wind damage to enemies directly ahead.&lt;br/&gt;&lt;br/&gt;When [[Crackling Pyroblossom]] is active, this skill is upgraded to Gale Slice Buffed, which gains the effect to inflict [[Conditions#Afflictions|stun]] for 5-6 seconds with '''110%''' base chance.",
      "Sp": 2462,
      "SPLv2": 2462,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 452.0
        },
        "lvl2": {
          "BASE": 501.0
        },
        "lvl3": {
          "BASE": 558.0
        }
      }
    },
    "skill2": {
      "name": "Crackling Pyroblossom",
      "icon": "Icon_Skill_030",
      "description1": "Increases the user's strength by '''20%''' and upgrades the skill [[Gale Slice]] with chance to inflict [[Conditions#Afflictions|stun]], for 10 seconds.",
      "description2": "Increases the user's strength by '''25%''' and upgrades the skill [[Gale Slice]] with chance to inflict [[Conditions#Afflictions|stun]], for 10 seconds.",
      "description3": "",
      "Sp": 4877,
      "SPLv2": 4877,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 0.0,
      "modifier": null
    }
  },
  {
    "id": "110315_01",
    "name": {
      "en": "Ku Hai",
      "ja": "クガイ",
      "zh": "苦海"
    },
    "weapon": "Sword",
    "element": "Wind",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 53,
    "MinHp5": 62,
    "MaxHp": 438,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 70,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 26,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 292,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Critical Damage +13%",
      "details": "Adds '''13%''' to the modifier applied to critical damage.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 13
      }
    },
    "abilities12": {
      "name": "Critical Damage +15%",
      "details": "Adds '''15%''' to the modifier applied to critical damage.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 15
      }
    },
    "abilities21": {
      "name": "Bog Res +50%",
      "details": "Reduces susceptibility to bog by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Bog Res +100%",
      "details": "Reduces susceptibility to bog by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Bog Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Critical Damage +15%",
      "details": "Adds '''15%''' to the modifier applied to critical damage when HP is '''70%''' or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Critical Damage",
        "ability_value": 15
      }
    },
    "skill1": {
      "name": "Soaring Flicker",
      "icon": "Icon_Skill_011",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;152%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;169%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals 4 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;188%&lt;/span&gt; wind damage to enemies directly ahead.",
      "Sp": 2296,
      "SPLv2": 2296,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 608.0
        },
        "lvl2": {
          "BASE": 676.0
        },
        "lvl3": {
          "BASE": 752.0
        }
      }
    },
    "skill2": {
      "name": "Keen Blade",
      "icon": "Icon_Skill_030",
      "description1": "Activates &quot;Apsaras Formation&quot; for 10 seconds. During Apsaras Formation, the user's critical rate is increased by '''8%''', and their force strike will deal 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;68% (75%)&lt;/span&gt; wind damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2). Bonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 3.7x for all hits of Keen Blade, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345.",
      "description2": "Activates &quot;Apsaras Formation&quot; for 10 seconds. During Apsaras Formation, the user's critical rate is increased by '''10%''', and their force strike will deal 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;75% (83%)&lt;/span&gt; wind damage for [[Combat Mechanics#Force Strikes|Force Strike]] level 1 (level 2). Bonus [[Combat Mechanics#Force Strikes|OD Bar damage]] is reduced to 3.7x for all hits of Keen Blade, from 8x. [[Combat Mechanics#Force Strikes|SP Gain]] is reduced to 330 from 345.",
      "description3": "",
      "Sp": 2913,
      "SPLv2": 2913,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110316_01",
    "name": {
      "en": "Xiao Lei",
      "ja": "シャオレイ",
      "zh": "小蕾"
    },
    "weapon": "Wand",
    "element": "Light",
    "rarity": "3",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 449,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 27,
    "MinAtk4": 33,
    "MinAtk5": 39,
    "MaxAtk": 276,
    "PlusAtk0": 32,
    "PlusAtk1": 37,
    "PlusAtk2": 44,
    "PlusAtk3": 37,
    "PlusAtk4": 18,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "Skill Damage +15%",
      "details": "Increases attack skill damage by '''15%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "Skill Damage +20%",
      "details": "Increases attack skill damage by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "abilities22": {
      "name": "Poison Res +50%",
      "details": "Reduces susceptibility to poison by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 50
      }
    },
    "abilities31": {
      "name": "Poison Res +25%",
      "details": "Reduces susceptibility to poison by '''25%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Poison Res",
        "ability_value": 25
      }
    },
    "skill1": {
      "name": "Flash Strike",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;725%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;805%&lt;/span&gt; light damage to the target and nearby enemies.",
      "description3": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;895%&lt;/span&gt; light damage to the target and nearby enemies.",
      "Sp": 2785,
      "SPLv2": 2785,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 725.0
        },
        "lvl2": {
          "BASE": 805.0
        },
        "lvl3": {
          "BASE": 895.0
        }
      }
    },
    "skill2": {
      "name": "Tactical Analysis",
      "icon": "Icon_Skill_032",
      "description1": "Increases the entire team's critical rate by '''5%''' and adds '''30%''' to the modifier applied to critical damage for 10 seconds.",
      "description2": "Increases the entire team's critical rate by '''8%''' and adds '''40%''' to the modifier applied to critical damage for 10 seconds.",
      "description3": "",
      "Sp": 3909,
      "SPLv2": 3909,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110317_01",
    "name": {
      "en": "Laranoa",
      "ja": "ララノア",
      "zh": "拉拉诺亚"
    },
    "weapon": "Bow",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 47,
    "MinHp4": 58,
    "MinHp5": 68,
    "MaxHp": 483,
    "PlusHp0": 56,
    "PlusHp1": 65,
    "PlusHp2": 77,
    "PlusHp3": 65,
    "PlusHp4": 32,
    "McFullBonusHp5": 28,
    "MinAtk3": 27,
    "MinAtk4": 34,
    "MinAtk5": 39,
    "MaxAtk": 280,
    "PlusAtk0": 32,
    "PlusAtk1": 38,
    "PlusAtk2": 45,
    "PlusAtk3": 38,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 17,
    "DefCoef": 8,
    "abilities11": {
      "name": "25 Hits = Critical Damage +10%",
      "details": "Adds '''10%''' to the modifier applied to critical damage for '''20''' seconds for every '''25'''-hit combo.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": "25 Hits",
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "20 Hits = Critical Damage +10%",
      "details": "Adds '''10%''' to the modifier applied to critical damage for '''20''' seconds for every '''20'''-hit combo.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": "20 Hits",
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 10
      }
    },
    "abilities21": {
      "name": "Stun Res +50%",
      "details": "Reduces susceptibility to stun by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Stun Res +100%",
      "details": "Reduces susceptibility to stun by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Stun Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Damage +25%",
      "details": "Increases attack skill damage by '''25%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 25
      }
    },
    "abilities32": {
      "name": "Skill Damage +30%",
      "details": "Increases attack skill damage by '''30%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 30
      }
    },
    "skill1": {
      "name": "Vivid Volley",
      "icon": "Icon_Skill_016",
      "description1": "Deals 14 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;55%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 14 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;61%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals 14 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;68%&lt;/span&gt; water damage to enemies in a line.",
      "Sp": 2567,
      "SPLv2": 2567,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 770.0
        },
        "lvl2": {
          "BASE": 854.0
        },
        "lvl3": {
          "BASE": 952.0
        }
      }
    },
    "skill2": {
      "name": "Hunter's Intuition",
      "icon": "Icon_Skill_032",
      "description1": "For 10 seconds, increases the user and nearby allies' strength by '''10%''' and skill gauge fill rate by '''15%'''.",
      "description2": "For 10 seconds, increases the user and nearby allies' strength by '''10%''' and skill gauge fill rate by '''20%'''.",
      "description3": "",
      "Sp": 8534,
      "SPLv2": 8534,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110318_01",
    "name": {
      "en": "Sylas",
      "ja": "シャスト",
      "zh": "加斯特"
    },
    "weapon": "Lance",
    "element": "Wind",
    "rarity": "5",
    "MinHp3": 46,
    "MinHp4": 57,
    "MinHp5": 67,
    "MaxHp": 473,
    "PlusHp0": 55,
    "PlusHp1": 64,
    "PlusHp2": 75,
    "PlusHp3": 64,
    "PlusHp4": 32,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 41,
    "MaxAtk": 290,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Recovery III",
      "details": "Grants an HP regen buff healing you for '''12%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 3
      }
    },
    "abilities12": {
      "name": "Last Recovery IV",
      "details": "Grants an HP regen buff healing you for '''14%''' Max HP every 3.9 seconds for 20 seconds when HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 4
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Recovery",
        "ability_value": 4
      }
    },
    "abilities21": {
      "name": "Freeze Res +50%",
      "details": "Reduces susceptibility to freezing by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Freeze Res +100%",
      "details": "Reduces susceptibility to freezing by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Freeze Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "HP 70% = Strength +10%",
      "details": "Increases strength by '''10%''' when HP is '''70%''' or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities32": {
      "name": "HP 70% = Strength +13%",
      "details": "Increases strength by '''13%''' when HP is '''70%''' or above.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Strength",
        "ability_value": 13
      }
    },
    "skill1": {
      "name": "Woodland Spear",
      "icon": "Icon_Skill_013",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;373%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;392%&lt;/span&gt; wind damage to enemies directly ahead, reduces their strength by '''10%''' for '''10''' seconds with '''50%''' base chance, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''43.6%''' damage every 2.9 seconds - with '''110%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;411%&lt;/span&gt; wind damage to enemies directly ahead, reduces their strength by '''10%''' for '''10''' seconds with '''50%''' base chance, and inflicts [[Conditions#Afflictions|poison]] for 15 seconds - dealing '''58.2%''' damage every 2.9 seconds - with '''120%''' base chance.",
      "Sp": 3120,
      "SPLv2": 3120,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 746.0
        },
        "lvl2": {
          "BASE": 784.0
        },
        "lvl3": {
          "BASE": 822.0
        }
      }
    },
    "skill2": {
      "name": "Inspiriting Scent",
      "icon": "Icon_Skill_032",
      "description1": "Increases the entire team's skill gauge fill rate by '''15%''' for 15 seconds, and applies one of the following at random:&lt;br /&gt;Increases strength by '''15%''' for '''15''' seconds&lt;br /&gt;Increases defense by '''15%''' for '''15''' seconds&lt;br /&gt;Increases max HP by '''10%''' for the remainder of the quest.",
      "description2": "Increases the entire team's skill gauge fill rate by '''20%''' for 15 seconds, and applies one of the following at random:&lt;br /&gt;Increases strength by '''20%''' for '''15''' seconds&lt;br /&gt;Increases defense by '''20%''' for '''15''' seconds&lt;br /&gt;Increases max HP by '''15%''' for the remainder of the quest.",
      "description3": "",
      "Sp": 12000,
      "SPLv2": 12000,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110319_01",
    "name": {
      "en": "Fleur",
      "ja": "フルル",
      "zh": "芙露露"
    },
    "weapon": "Dagger",
    "element": "Light",
    "rarity": "4",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 62,
    "MaxHp": 443,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 24,
    "MinAtk3": 28,
    "MinAtk4": 35,
    "MinAtk5": 40,
    "MaxAtk": 287,
    "PlusAtk0": 33,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 18,
    "DefCoef": 10,
    "abilities11": {
      "name": "HP 70% = Skill Haste +6%",
      "details": "Increases skill gauge fill rate by '''6%''' when HP is 70% or above.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Haste",
        "ability_value": 6
      }
    },
    "abilities12": {
      "name": "HP 70% = Skill Haste +8%",
      "details": "Increases skill gauge fill rate by '''8%''' when HP is 70% or above.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "HP 70%",
        "req_threshold": 70,
        "ability_type": "Skill Haste",
        "ability_value": 8
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Paralyzed Punisher +20%",
      "details": "Increases damage to [[Conditions#List_of_Afflictions|paralyzed]] enemies by '''20%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralyzed Punisher",
        "ability_value": 20
      }
    },
    "skill1": {
      "name": "Captivating Canvas",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;302%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''46.7%''' damage every 3.99 seconds - with '''90%''' base chance. Against paralyzed foes, deal 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;554.6%&lt;/span&gt; light damage instead. Activates &quot;Skill Shift&quot; if the attack connects. &lt;br&gt;&lt;br&gt;\nPhase II increases paralysis's success rate to '''140%''' base chance. &lt;br&gt;&lt;br&gt;\nPhase III also restores HP to all allies with '''20%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;317%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''66%''' damage every 3.99 seconds - with '''100%''' base chance. Against paralyzed foes, deal 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;570.6%&lt;/span&gt; light damage instead. Activates &quot;Skill Shift&quot; if the attack connects. &lt;br&gt;&lt;br&gt;\nPhase II increases paralysis's success rate to '''150%''' base chance. &lt;br&gt;&lt;br&gt;\nPhase III also restores HP to all allies with '''25%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;333%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''88.3%''' damage every 3.99 seconds - with '''110%''' base chance. Against paralyzed foes, deal 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;599.4%&lt;/span&gt; light damage instead. Activates &quot;Skill Shift&quot; if the attack connects. &lt;br&gt;&lt;br&gt;\nPhase II increases paralysis's success rate to '''160%''' base chance. &lt;br&gt;&lt;br&gt;\nPhase III also restores HP to all allies with '''30%''' [[Healing Formula|Recovery Potency]]. Skill Shift ends when you connect again during Phase III.",
      "Sp": 3478,
      "SPLv2": 3478,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 1713.2
        },
        "lvl2": {
          "BASE": 1775.2
        },
        "lvl3": {
          "BASE": 1864.8
        }
      }
    },
    "skill2": {
      "name": "Palette Punch",
      "icon": "Icon_Skill_032",
      "description1": "Immediately readies the [[Captivating Canvas]] skill for use, and increases the user's strength by '''20%''' for 5 seconds.",
      "description2": "Immediately readies the [[Captivating Canvas]] skill for use, and increases the user's strength by '''25%''' for 5 seconds.",
      "description3": "",
      "Sp": 5934,
      "SPLv2": 5934,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    }
  },
  {
    "id": "110327_01",
    "name": {
      "en": "Alfonse",
      "ja": "アルフォンス",
      "zh": "阿尔冯斯"
    },
    "weapon": "Sword",
    "element": "Light",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 43,
    "MinHp5": 62,
    "MaxHp": 441,
    "PlusHp0": 51,
    "PlusHp1": 59,
    "PlusHp2": 70,
    "PlusHp3": 59,
    "PlusHp4": 29,
    "McFullBonusHp5": 27,
    "MinAtk3": 28,
    "MinAtk4": 28,
    "MinAtk5": 41,
    "MaxAtk": 291,
    "PlusAtk0": 34,
    "PlusAtk1": 39,
    "PlusAtk2": 46,
    "PlusAtk3": 39,
    "PlusAtk4": 19,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Burst I",
      "details": "Buffs strength by '''40%''' for 10 seconds when HP drops to '''30%''' (once per quest).",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Burst",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Last Burst II",
      "details": "Buffs strength by '''50%''' for 10 seconds when HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 60
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Burst",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Curse Res +50%",
      "details": "Reduces susceptibility to curses by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Curse Res +100%",
      "details": "Reduces susceptibility to curses by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Curse Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Haste +6%",
      "details": "Increases skill gauge fill rate by '''6%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 6
      }
    },
    "abilities32": {
      "name": "Skill Haste +8%",
      "details": "Increases skill gauge fill rate by '''8%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Haste",
        "ability_value": 8
      }
    },
    "skill1": {
      "name": "Blue Radiance",
      "icon": "Icon_Skill_042",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;271%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;301%&lt;/span&gt; light damage to enemies directly ahead and increases the user's strength by '''10%''' for 10 seconds.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;335%&lt;/span&gt; light damage to enemies directly ahead and increases the user's strength by '''15%''' for 10 seconds.",
      "Sp": 3500,
      "SPLv2": 3500,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 542.0
        },
        "lvl2": {
          "BASE": 602.0
        },
        "lvl3": {
          "BASE": 670.0
        }
      }
    },
    "skill2": {
      "name": "Sol",
      "icon": "Icon_Skill_043",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;334%&lt;/span&gt; light damage to surrounding enemies and restores the user's HP by '''3%''' of the damage inflicted. This recovery caps at '''7.5%''' of the user's HP per hit.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;351%&lt;/span&gt; light damage to surrounding enemies and restores the user's HP by '''3%''' of the damage inflicted. This recovery caps at '''7.5%''' of the user's HP per hit.",
      "description3": "",
      "Sp": 4983,
      "SPLv2": 4983,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 668.0
        },
        "lvl2": {
          "BASE": 702.0
        }
      }
    }
  },
  {
    "id": "110328_01",
    "name": {
      "en": "Fjorm",
      "ja": "フィヨルム",
      "zh": "菲约尔姆"
    },
    "weapon": "Lance",
    "element": "Water",
    "rarity": "5",
    "MinHp3": 44,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 450,
    "PlusHp0": 52,
    "PlusHp1": 61,
    "PlusHp2": 72,
    "PlusHp3": 61,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 29,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 304,
    "PlusAtk0": 35,
    "PlusAtk1": 41,
    "PlusAtk2": 48,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 19,
    "DefCoef": 10,
    "abilities11": {
      "name": "Last Bravery I",
      "details": "Increases the entire team's strength by '''20%''' and defense by '''30%''' for 15 seconds when the user's HP drops to '''30%''' (once per quest).",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Bravery",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Last Bravery II",
      "details": "Increases the entire team's strength by '''30%''' and defense by '''40%''' for 15 seconds when the user's HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Bravery",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Burn Res +50%",
      "details": "Reduces susceptibility to burning by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Burn Res +100%",
      "details": "Reduces susceptibility to burning by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Burn Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Frigid Smash",
      "icon": "Icon_Skill_036",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;373%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;392%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance.",
      "description3": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;411%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance.",
      "Sp": 2738,
      "SPLv2": 2738,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 746.0
        },
        "lvl2": {
          "BASE": 784.0
        },
        "lvl3": {
          "BASE": 822.0
        }
      }
    },
    "skill2": {
      "name": "Ice Mirror",
      "icon": "Icon_Skill_037",
      "description1": "Summons &quot;Ice Mirror,&quot; then deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;746%&lt;/span&gt; water damage to the target and nearby enemies. Additional bonus neutral-element damage will be dealt equal to &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1100%&lt;/span&gt; of the damage taken while &quot;Ice Mirror&quot; is active. Reflected damage receives no bonuses from Skill Damage or other damage modifiers.",
      "description2": "Summons &quot;Ice Mirror,&quot; then deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;829%&lt;/span&gt; water damage to the target and nearby enemies. Additional bonus neutral-element damage will be dealt equal to &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;1100%&lt;/span&gt; of the damage taken while &quot;Ice Mirror&quot; is active. Reflected damage receives no bonuses from Skill Damage or other damage modifiers.",
      "description3": "",
      "Sp": 4548,
      "SPLv2": 4548,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 746.0
        },
        "lvl2": {
          "BASE": 829.0
        }
      }
    }
  },
  {
    "id": "110333_01",
    "name": {
      "en": "Veronica",
      "ja": "ヴェロニカ",
      "zh": "维洛妮卡"
    },
    "weapon": "Wand",
    "element": "Shadow",
    "rarity": "5",
    "MinHp3": 43,
    "MinHp4": 54,
    "MinHp5": 63,
    "MaxHp": 446,
    "PlusHp0": 52,
    "PlusHp1": 60,
    "PlusHp2": 71,
    "PlusHp3": 60,
    "PlusHp4": 30,
    "McFullBonusHp5": 26,
    "MinAtk3": 30,
    "MinAtk4": 37,
    "MinAtk5": 43,
    "MaxAtk": 307,
    "PlusAtk0": 36,
    "PlusAtk1": 41,
    "PlusAtk2": 49,
    "PlusAtk3": 41,
    "PlusAtk4": 20,
    "McFullBonusAtk5": 20,
    "DefCoef": 8,
    "abilities11": {
      "name": "Last Destruction I",
      "details": "Increases the damage of the next attack skill used by each team member by '''30%''' when the user's HP drops to '''30%''' (once per quest).",
      "might": 70,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Destruction",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Last Destruction II",
      "details": "Increases the damage of the next attack skill used by each team member by '''40%''' when the user's HP drops to '''30%''' (once per quest).",
      "might": 100,
      "limit": 0,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Last Destruction",
        "ability_value": 2
      }
    },
    "abilities21": {
      "name": "Paralysis Res +50%",
      "details": "Reduces susceptibility to paralysis by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "Paralysis Res +100%",
      "details": "Reduces susceptibility to paralysis by '''100%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Paralysis Res",
        "ability_value": 100
      }
    },
    "abilities31": {
      "name": "Skill Prep +75%",
      "details": "Fills '''75%''' of skill gauges at the start of quests.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 75
      }
    },
    "abilities32": {
      "name": "Skill Prep +100%",
      "details": "Fills '''100%''' of skill gauges at the start of quests.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 100
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Skill Prep",
        "ability_value": 100
      }
    },
    "skill1": {
      "name": "Gespenst",
      "icon": "Icon_Skill_040",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;207%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;259%&lt;/span&gt; shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals. This increase caps at 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;465.75%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;582.75%&lt;/span&gt; shadow damage total.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;230%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;287%&lt;/span&gt; shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals. This increase caps at 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;517.5%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;645.75%&lt;/span&gt; shadow damage total.",
      "description3": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;255%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;319%&lt;/span&gt; shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals. This increase caps at 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;573.75%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;717.75%&lt;/span&gt; shadow damage total.",
      "Sp": 3291,
      "SPLv2": 3291,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 880.0,
          "1 HP": 1980.0
        },
        "lvl2": {
          "BASE": 977.0,
          "1 HP": 2198.25
        },
        "lvl3": {
          "BASE": 1084.0,
          "1 HP": 2439.0
        }
      }
    },
    "skill2": {
      "name": "Nosferatu",
      "icon": "Icon_Skill_041",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;292%&lt;/span&gt; shadow damage to surrounding enemies and restores the user's HP by '''5%''' of the damage inflicted. This recovery caps at '''5%''' of the user's HP per hit.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;307%&lt;/span&gt; shadow damage to surrounding enemies and restores the user's HP by '''5%''' of the damage inflicted. This recovery caps at '''5%''' of the user's HP per hit.",
      "description3": "",
      "Sp": 6186,
      "SPLv2": 6186,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 876.0
        },
        "lvl2": {
          "BASE": 921.0
        }
      }
    }
  }
];
export default adventurer;