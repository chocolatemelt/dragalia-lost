const dragon =
 {
  "210001_01": {
    "id": "210001_01",
    "name": {
      "en": "Midgardsormr",
      "ja": "ミドガルズオルム",
      "zh": "耶梦加得"
    },
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Tornado Tail",
      "icon": "Icon_Skill_004",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;155%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;173%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals wind damage to surrounding enemies.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 465.0
        },
        "lvl2": {
          "BASE": 519.0
        }
      }
    },
    "MinHp": 20,
    "MaxHp": 206,
    "MinAtk": 6,
    "MaxAtk": 66,
    "abilities11": {
      "name": "(Wind) HP &amp; Strength +8%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 8,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "(Wind) HP &amp; Strength +10%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''10%'''.",
      "might": 50,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 10,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 10
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 8,
    "incHP2": 10,
    "incSTR1": 8,
    "incSTR2": 10
  },
  "210002_01": {
    "id": "210002_01",
    "name": {
      "en": "Brunhilda",
      "ja": "ブリュンヒルデ",
      "zh": "布伦希尔德"
    },
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Muspelheim",
      "icon": "Icon_Skill_027",
      "description1": "Deals 7 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;116.2%&lt;/span&gt; flame damage to enemies directly ahead. Movement is possible during the attack.",
      "description2": "Deals 7 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;129.5%&lt;/span&gt; flame damage to enemies directly ahead. Movement is possible during the attack.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 813.4
        },
        "lvl2": {
          "BASE": 906.5
        }
      }
    },
    "MinHp": 20,
    "MaxHp": 203,
    "MinAtk": 7,
    "MaxAtk": 70,
    "abilities11": {
      "name": "(Flame) Strength +15%",
      "details": "If the user is attuned to Flame: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +20%",
      "details": "If the user is attuned to Flame: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 15,
    "incSTR2": 20
  },
  "210003_01": {
    "id": "210003_01",
    "name": {
      "en": "Mercury",
      "ja": "マーキュリー",
      "zh": "墨丘利"
    },
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Hydrocannon",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;554%&lt;/span&gt; water damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;616%&lt;/span&gt; water damage to enemies in a line.",
      "description3": "Deals water damage to enemies in a line.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 554.0
        },
        "lvl2": {
          "BASE": 616.0
        }
      }
    },
    "MinHp": 21,
    "MaxHp": 211,
    "MinAtk": 6,
    "MaxAtk": 62,
    "abilities11": {
      "name": "(Water) HP +15%",
      "details": "If the user is attuned to Water: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Water) HP +20%",
      "details": "If the user is attuned to Water: increases HP by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 15,
    "incHP2": 20,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210004_01": {
    "id": "210004_01",
    "name": {
      "en": "Jupiter",
      "ja": "ユピテル",
      "zh": "朱庇特"
    },
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Lightning Rood",
      "icon": "Icon_Skill_024",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;207.9%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;231%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light damage to surrounding enemies.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 415.8
        },
        "lvl2": {
          "BASE": 462.0
        }
      }
    },
    "MinHp": 20,
    "MaxHp": 207,
    "MinAtk": 6,
    "MaxAtk": 65,
    "abilities11": {
      "name": "(Light) HP &amp; Strength +8%",
      "details": "If the user is attuned to Light: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Light",
      "Hybrid": 8,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities12": {
      "name": "(Light) HP &amp; Strength +10%",
      "details": "If the user is attuned to Light: increases strength and HP by '''10%'''.",
      "might": 50,
      "limit": 0,
      "req": "Light",
      "Hybrid": 10,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 10
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 8,
    "incHP2": 10,
    "incSTR1": 8,
    "incSTR2": 10
  },
  "210005_01": {
    "id": "210005_01",
    "name": {
      "en": "Zodiark",
      "ja": "ゾディアーク",
      "zh": "佐迪亚克"
    },
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Accursed Venom",
      "icon": "Icon_Skill_025",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;529.2%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;588%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 529.2
        },
        "lvl2": {
          "BASE": 588.0
        }
      }
    },
    "MinHp": 20,
    "MaxHp": 202,
    "MinAtk": 7,
    "MaxAtk": 70,
    "abilities11": {
      "name": "(Shadow) Strength +15%",
      "details": "If the user is attuned to Shadow: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 15,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Shadow) Strength +20%",
      "details": "If the user is attuned to Shadow: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 20,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 15,
    "incSTR2": 20
  },
  "210006_01": {
    "id": "210006_01",
    "name": {
      "en": "Phoenix",
      "ja": "フェニックス",
      "zh": "菲尼克斯"
    },
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Regeneration Flame",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''45%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''36%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description2": "Restores HP to all allies with '''51%''' [[Healing Formula|Recovery Potency]] and applies Regen for 15 seconds, healing with '''41%''' [[Healing Formula|Regen Potency]] every 2.99 seconds.",
      "description3": "Restores HP to all allies and continues healing over the next 15 seconds.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 29,
    "MaxHp": 299,
    "MinAtk": 9,
    "MaxAtk": 97,
    "abilities11": {
      "name": "(Flame) HP +30%",
      "details": "If the user is attuned to Flame: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Flame",
      "HP": 30,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Flame) HP +45%",
      "details": "If the user is attuned to Flame: increases HP by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Flame",
      "HP": 45,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 30,
    "incHP2": 45,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210007_01": {
    "id": "210007_01",
    "name": {
      "en": "Ifrit",
      "ja": "イフリート",
      "zh": "伊夫利特"
    },
    "element": "Flame",
    "rarity": "4",
    "skill": {
      "name": "Lava Cascade",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;226.8%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;340.2%&lt;/span&gt; flame damage to enemies directly ahead and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''66%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;252%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;378%&lt;/span&gt; flame damage to enemies directly ahead and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''88.3%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 567.0
        },
        "lvl2": {
          "BASE": 630.0
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 295,
    "MinAtk": 10,
    "MaxAtk": 101,
    "abilities11": {
      "name": "(Flame) Strength +30%",
      "details": "If the user is attuned to Flame: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 30,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +45%",
      "details": "If the user is attuned to Flame: increases strength by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 45,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210008_01": {
    "id": "210008_01",
    "name": {
      "en": "Poliʻahu",
      "ja": "ポリアフ",
      "zh": "波丽亚芙"
    },
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Lilinoe's Mist",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;185.5%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;432.6%&lt;/span&gt; water damage to the target and nearby enemies and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;205.8%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;480.2%&lt;/span&gt; water damage to the target and nearby enemies and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''140%''' base chance.",
      "description3": "Deals water damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|freeze]] with ? base chance.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 618.1
        },
        "lvl2": {
          "BASE": 686.0
        }
      }
    },
    "MinHp": 30,
    "MaxHp": 301,
    "MinAtk": 9,
    "MaxAtk": 95,
    "abilities11": {
      "name": "(Water) HP &amp; Strength +15%",
      "details": "If the user is attuned to Water: increases strength and HP by '''15%'''.",
      "might": 60,
      "limit": 0,
      "req": "Water",
      "Hybrid": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Water) HP &amp; Strength +20%",
      "details": "If the user is attuned to Water: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Water",
      "Hybrid": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 15,
    "incHP2": 20,
    "incSTR1": 15,
    "incSTR2": 20
  },
  "210010_01": {
    "id": "210010_01",
    "name": {
      "en": "Sylvia",
      "ja": "シルヴィア",
      "zh": "希尔维亚"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Hurricane Drive",
      "icon": "Icon_Skill_013",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;131%&lt;/span&gt; wind damage per hit to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;146%&lt;/span&gt; wind damage per hit to enemies directly ahead.",
      "description3": "Deals &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;146%&lt;/span&gt; wind damage per hit to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 393.0
        },
        "lvl2": {
          "BASE": 438.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 225,
    "MinAtk": 7,
    "MaxAtk": 72,
    "abilities11": {
      "name": "(Wind) HP +20%",
      "details": "If the user is attuned to Wind: increases HP by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 20,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Wind) HP +30%",
      "details": "If the user is attuned to Wind: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210011_01": {
    "id": "210011_01",
    "name": {
      "en": "Stribog",
      "ja": "ストリボーグ",
      "zh": "斯特利伯格"
    },
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Test of Integrity",
      "icon": "Icon_Skill_018",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;226.8%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;252%&lt;/span&gt; wind damage to surrounding enemies and draws them toward the user.",
      "description3": "Deals wind damage to surrounding enemies and draws them toward the user.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 680.4
        },
        "lvl2": {
          "BASE": 756.0
        }
      }
    },
    "MinHp": 30,
    "MaxHp": 306,
    "MinAtk": 9,
    "MaxAtk": 91,
    "abilities11": {
      "name": "(Wind) HP +30%",
      "details": "If the user is attuned to Wind: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Wind) HP +45%",
      "details": "If the user is attuned to Wind: increases HP by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 45,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 30,
    "incHP2": 45,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210012_01": {
    "id": "210012_01",
    "name": {
      "en": "Unicorn",
      "ja": "ユニコーン",
      "zh": "独角兽"
    },
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Immaculate Light",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;567%&lt;/span&gt; light damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;630%&lt;/span&gt; light damage to enemies in a line.",
      "description3": "Deals light damage to enemies in a line.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 567.0
        },
        "lvl2": {
          "BASE": 630.0
        }
      }
    },
    "MinHp": 30,
    "MaxHp": 301,
    "MinAtk": 9,
    "MaxAtk": 95,
    "abilities11": {
      "name": "(Light) HP +30%",
      "details": "If the user is attuned to Light: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 30,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Light) HP +45%",
      "details": "If the user is attuned to Light: increases HP by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 45,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 30,
    "incHP2": 45,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210013_01": {
    "id": "210013_01",
    "name": {
      "en": "Lindworm",
      "ja": "リンドヴルム",
      "zh": "林德巴鲁姆"
    },
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Ethereal Gleam",
      "icon": "Icon_Skill_026",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;642.6%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;714%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 642.6
        },
        "lvl2": {
          "BASE": 714.0
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 297,
    "MinAtk": 10,
    "MaxAtk": 100,
    "abilities11": {
      "name": "(Light) Strength +30%",
      "details": "If the user is attuned to Light: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 30,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Light) Strength +45%",
      "details": "If the user is attuned to Light: increases strength by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 45,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210014_01": {
    "id": "210014_01",
    "name": {
      "en": "Juggernaut",
      "ja": "ジャガーノート",
      "zh": "札格纳特"
    },
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Shadow Carnage",
      "icon": "Icon_Skill_013",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;258.3%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;287%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 774.9
        },
        "lvl2": {
          "BASE": 861.0
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 294,
    "MinAtk": 10,
    "MaxAtk": 102,
    "abilities11": {
      "name": "(Shadow) Strength +30%",
      "details": "If the user is attuned to Shadow: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 30,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Shadow) Strength +45%",
      "details": "If the user is attuned to Shadow: increases strength by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 45,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210015_01": {
    "id": "210015_01",
    "name": {
      "en": "Silke",
      "ja": "シルキー",
      "zh": "希露姬"
    },
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Terror Sphere",
      "icon": "Icon_Skill_019",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;277.2%&lt;/span&gt; shadow damage to the target and nearby enemies, and reduces their defense by '''10%''' for 10 seconds with '''100%''' base chance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;308%&lt;/span&gt; shadow damage to the target and nearby enemies, and reduces their defense by '''15%''' for 10 seconds with '''100%''' base chance.",
      "description3": "Deals shadow damage to the target and nearby enemies, and reduces their defense by ?% with ? base chance.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 554.4
        },
        "lvl2": {
          "BASE": 616.0
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 299,
    "MinAtk": 9,
    "MaxAtk": 97,
    "abilities11": {
      "name": "(Shadow) HP &amp; Strength +15%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''15%'''.",
      "might": 60,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 15,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Shadow) HP &amp; Strength +20%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 20,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 15,
    "incHP2": 20,
    "incSTR1": 15,
    "incSTR2": 20
  },
  "210016_01": {
    "id": "210016_01",
    "name": {
      "en": "Agni",
      "ja": "アグニ",
      "zh": "阿格尼"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Devastation",
      "icon": "Icon_Skill_006",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;441%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;490%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line, and inflicts burn with ? base chance.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 5.0,
      "modifier": {
        "lvl1": {
          "BASE": 882.0
        },
        "lvl2": {
          "BASE": 980.0
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 369,
    "MinAtk": 12,
    "MaxAtk": 127,
    "abilities11": {
      "name": "(Flame) Strength +40%",
      "details": "If the user is attuned to Flame: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 40,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +60%",
      "details": "If the user is attuned to Flame: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 60,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210017_01": {
    "id": "210017_01",
    "name": {
      "en": "Leviathan",
      "ja": "リヴァイアサン",
      "zh": "利维坦"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Tidal Stream",
      "icon": "Icon_Skill_021",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;869.4%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''160%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;913.5%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''180%''' base chance.",
      "description3": "Deals water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] with ? base chance.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 869.4
        },
        "lvl2": {
          "BASE": 913.5
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 370,
    "MinAtk": 12,
    "MaxAtk": 125,
    "abilities11": {
      "name": "(Water) Strength +40%",
      "details": "If the user is attuned to Water: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 40,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Water) Strength +60%",
      "details": "If the user is attuned to Water: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 60,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210018_01": {
    "id": "210018_01",
    "name": {
      "en": "Zephyr",
      "ja": "ワキヤン",
      "zh": "瓦基扬"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Zephyr's Wrath",
      "icon": "Icon_Skill_018",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;254.1%&lt;/span&gt; wind damage to surrounding enemies, and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''160%''' base chance.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;267.4%&lt;/span&gt; wind damage to surrounding enemies, and inflicts [[Conditions#Afflictions|stun]] for 6-7 seconds with '''180%''' base chance.",
      "description3": "Deals wind damage to surrounding enemies, and inflicts [[Conditions#Afflictions|stun]] with ? base chance.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 762.3
        },
        "lvl2": {
          "BASE": 802.2
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 369,
    "MinAtk": 12,
    "MaxAtk": 126,
    "abilities11": {
      "name": "(Wind) Strength +40%",
      "details": "If the user is attuned to Wind: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 40,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Wind) Strength +60%",
      "details": "If the user is attuned to Wind: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 60,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210019_01": {
    "id": "210019_01",
    "name": {
      "en": "Nidhogg",
      "ja": "ニーズヘッグ",
      "zh": "尼德霍格"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Total Eclipse",
      "icon": "Icon_Skill_027",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;737.8%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''160%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;774.9%&lt;/span&gt; shadow damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''180%''' base chance.",
      "description3": "Deals shadow damage to enemies in a line, and inflicts [[Conditions#Afflictions|blindness]] with ? base chance.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 737.8
        },
        "lvl2": {
          "BASE": 774.9
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 374,
    "MinAtk": 12,
    "MaxAtk": 121,
    "abilities11": {
      "name": "(Shadow) HP &amp; Strength +20%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 20,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Shadow) HP &amp; Strength +30%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 30,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210020_01": {
    "id": "210020_01",
    "name": {
      "en": "Jeanne d'Arc",
      "ja": "ジャンヌダルク",
      "zh": "贞德"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Saint's Banner",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;743.4%&lt;/span&gt; light damage to surrounding enemies, and increases the entire team's defense by '''25%''' for 15 seconds.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;826%&lt;/span&gt; light damage to surrounding enemies, and increases the entire team's defense by '''30%''' for 15 seconds.",
      "description3": "Deals light-based damage to surrounding enemies, and increases the entire team's defense by '''30%''' for 30 seconds.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 743.4
        },
        "lvl2": {
          "BASE": 826.0
        }
      }
    },
    "MinHp": 38,
    "MaxHp": 384,
    "MinAtk": 11,
    "MaxAtk": 113,
    "abilities11": {
      "name": "(Light) HP +40%",
      "details": "If the user is attuned to Light: increases HP by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 40,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Light) HP +60%",
      "details": "If the user is attuned to Light: increases HP by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 60,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 40,
    "incHP2": 60,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210021_01": {
    "id": "210021_01",
    "name": {
      "en": "Homura",
      "ja": "ホムラリュウ",
      "zh": "火龙"
    },
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Fire Breath",
      "icon": "Icon_Skill_026",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;466%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;518%&lt;/span&gt; flame damage to enemies directly ahead.",
      "description3": "Deals flame damage to enemies directly ahead.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 466.0
        },
        "lvl2": {
          "BASE": 518.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 184,
    "MinAtk": 6,
    "MaxAtk": 63,
    "abilities11": {
      "name": "(Flame) Strength +10%",
      "details": "If the user is attuned to Flame: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 10,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +15%",
      "details": "If the user is attuned to Flame: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210022_01": {
    "id": "210022_01",
    "name": {
      "en": "Cinder Drake",
      "ja": "バーンドラコ",
      "zh": "焰龙"
    },
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Cinderball",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;454%&lt;/span&gt; flame damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;504%&lt;/span&gt; flame damage to enemies in a line.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 454.0
        },
        "lvl2": {
          "BASE": 504.0
        }
      }
    },
    "MinHp": 19,
    "MaxHp": 190,
    "MinAtk": 5,
    "MaxAtk": 57,
    "abilities11": {
      "name": "(Flame) HP +10%",
      "details": "If the user is attuned to Flame: increases HP by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Flame",
      "HP": 10,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Flame) HP +15%",
      "details": "If the user is attuned to Flame: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Flame",
      "HP": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210023_01": {
    "id": "210023_01",
    "name": {
      "en": "Kindling Imp",
      "ja": "キャンドルインプ",
      "zh": "烛魔"
    },
    "element": "Flame",
    "rarity": "3",
    "skill": {
      "name": "Ember Toss",
      "icon": "Icon_Skill_014",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;145%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;174%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "Deals flame damage to enemies in a line.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 290.0
        },
        "lvl2": {
          "BASE": 348.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 187,
    "MinAtk": 6,
    "MaxAtk": 60,
    "abilities11": {
      "name": "(Flame) HP &amp; Strength +5%",
      "details": "If the user is attuned to Flame: increases strength and HP by '''5%'''.",
      "might": 20,
      "limit": 0,
      "req": "Flame",
      "Hybrid": 5,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "(Flame) HP &amp; Strength +8%",
      "details": "If the user is attuned to Flame: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Flame",
      "Hybrid": 8,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 5,
    "incHP2": 8,
    "incSTR1": 5,
    "incSTR2": 8
  },
  "210024_01": {
    "id": "210024_01",
    "name": {
      "en": "Cerberus",
      "ja": "ケルベロス",
      "zh": "坎贝萝丝"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Infernal Damnation",
      "icon": "Icon_Skill_022",
      "description1": "Deals 7 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;105%&lt;/span&gt; flame damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''72.7%''' damage every 3.99 seconds - with '''110%''' base chance. Also reduces their strength by '''5%''' for 10 seconds with '''30%''' base chance and defense by '''5%''' for 10 seconds with '''100%''' base chance.",
      "description2": "Deals 7 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;110%&lt;/span&gt; flame damage to the target and nearby enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''97%''' damage every 3.99 seconds - with '''120%''' base chance. Also reduces their strength by '''5%''' for 10 seconds with '''30%''' base chance and defense by '''5%''' for 10 seconds with '''100%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 735.0
        },
        "lvl2": {
          "BASE": 770.0
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 369,
    "MinAtk": 12,
    "MaxAtk": 127,
    "abilities11": {
      "name": "(Flame) Strength +40%",
      "details": "If the user is attuned to Flame: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 40,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +60%",
      "details": "If the user is attuned to Flame: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 60,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210025_01": {
    "id": "210025_01",
    "name": {
      "en": "Poseidon",
      "ja": "ポセイドン",
      "zh": "波塞冬"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Poseidon's Trident",
      "icon": "Icon_Skill_020",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;166.6%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;387.8%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;184.8%&lt;/span&gt; and 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;431.2%&lt;/span&gt; water damage to the target and nearby enemies.",
      "description3": "Deals water damage to enemies in a line, and inflicts bog with ? base chance.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 721.0
        },
        "lvl2": {
          "BASE": 800.8
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 376,
    "MinAtk": 11,
    "MaxAtk": 119,
    "abilities11": {
      "name": "(Water) HP &amp; Strength +20%",
      "details": "If the user is attuned to Water: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Water",
      "Hybrid": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Water) HP &amp; Strength +30%",
      "details": "If the user is attuned to Water: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Water",
      "Hybrid": 30,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210026_01": {
    "id": "210026_01",
    "name": {
      "en": "Pazuzu",
      "ja": "パズズ",
      "zh": "帕祖祖"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Catastrophic Winds",
      "icon": "Icon_Skill_025",
      "description1": "Deals 8 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;82%&lt;/span&gt; wind damage to enemies in a line, reduces their defense by '''5%''' for '''10''' seconds with '''100%''' base chance, and inflicts [[Conditions#Afflictions|poison]] for 30 seconds - dealing '''21.8%''' damage every 2.99 seconds - with '''110%''' base chance.",
      "description2": "Deals 8 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;91%&lt;/span&gt; wind damage to enemies in a line, reduces their defense by '''5%''' for '''10''' seconds with '''100%''' base chance, and inflicts [[Conditions#Afflictions|poison]] for 30 seconds - dealing '''29.1%''' damage every 2.99 seconds - with '''120%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 656.0
        },
        "lvl2": {
          "BASE": 728.0
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 369,
    "MinAtk": 12,
    "MaxAtk": 126,
    "abilities11": {
      "name": "(Wind) Strength +35%",
      "details": "If the user is attuned to Wind: increases strength by '''35%'''.",
      "might": 65,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 35,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 35
      }
    },
    "abilities12": {
      "name": "(Wind) Strength +50%",
      "details": "If the user is attuned to Wind: increases strength by '''50%'''.",
      "might": 85,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 50,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Wind) Poisoned Punisher +15%",
      "details": "If the user is attuned to Wind: increases damage to poisoned enemies by '''15%'''.",
      "might": 5,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Poisoned Punisher",
        "ability_value": 15
      }
    },
    "abilities22": {
      "name": "(Wind) Poisoned Punisher +20%",
      "details": "If the user is attuned to Wind: increases damage to poisoned enemies by '''20%'''.",
      "might": 15,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Poisoned Punisher",
        "ability_value": 20
      }
    },
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 35,
    "incSTR2": 50
  },
  "210036_01": {
    "id": "210036_01",
    "name": {
      "en": "Garuda",
      "ja": "ガルーダ",
      "zh": "迦楼罗"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Tempestuous Kiss",
      "icon": "Icon_Skill_025",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;200%&lt;/span&gt; wind damage to enemies directly ahead, and restores the user's HP by '''33%''' of the damage inflicted.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;210%&lt;/span&gt; wind damage to enemies directly ahead, and restores the user's HP by '''35%''' of the damage inflicted.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 600.0
        },
        "lvl2": {
          "BASE": 630.0
        }
      }
    },
    "MinHp": 38,
    "MaxHp": 383,
    "MinAtk": 11,
    "MaxAtk": 114,
    "abilities11": {
      "name": "(Wind) HP +40%",
      "details": "If the user is attuned to Wind: increases HP by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 40,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Wind) HP +60%",
      "details": "If the user is attuned to Wind: increases HP by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 60,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 40,
    "incHP2": 60,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210038_01": {
    "id": "210038_01",
    "name": {
      "en": "High Midgardsormr",
      "ja": "真ミドガルズオルム",
      "zh": "真耶梦加得"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Grand Tempest",
      "icon": "Icon_Skill_021",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;619.5%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''160%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;650.3%&lt;/span&gt; wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] for 6-7 seconds with '''180%''' base chance.",
      "description3": "Deals wind damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|stun]] with ? base chance.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 619.5
        },
        "lvl2": {
          "BASE": 650.3
        }
      }
    },
    "MinHp": 35,
    "MaxHp": 356,
    "MinAtk": 11,
    "MaxAtk": 114,
    "abilities11": {
      "name": "(Wind) HP &amp; Strength +20%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 20,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Wind) HP &amp; Strength +30%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": {
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
    "abilities22": {
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
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210039_01": {
    "id": "210039_01",
    "name": {
      "en": "High Brunhilda",
      "ja": "真ブリュンヒルデ",
      "zh": "真布伦希尔德"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Crimson Inferno",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;851%&lt;/span&gt; flame damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''72.7%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;894%&lt;/span&gt; flame damage to enemies in a line, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''97%''' damage every 3.99 seconds - with '''120%''' base chance.",
      "description3": "Deals flame damage to enemies in a line, and inflicts [[Conditions#Afflictions|burn]] without fail.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 851.0
        },
        "lvl2": {
          "BASE": 894.0
        }
      }
    },
    "MinHp": 35,
    "MaxHp": 350,
    "MinAtk": 12,
    "MaxAtk": 120,
    "abilities11": {
      "name": "(Flame) HP &amp; Strength +20%",
      "details": "If the user is attuned to Flame: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Flame",
      "Hybrid": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Flame) HP &amp; Strength +30%",
      "details": "If the user is attuned to Flame: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Flame",
      "Hybrid": 30,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": {
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
    "abilities22": {
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
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210040_01": {
    "id": "210040_01",
    "name": {
      "en": "High Mercury",
      "ja": "真マーキュリー",
      "zh": "真墨丘利"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Aqua Spiral",
      "icon": "Icon_Skill_018",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;135%&lt;/span&gt; water damage to surrounding enemies, draws them toward the user, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''160%''' base chance.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;150%&lt;/span&gt; water damage to surrounding enemies, draws them toward the user, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''180%''' base chance.",
      "description3": "Deals water damage to surrounding enemies and draws them toward the user. Inflicts bog without fail.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 675.0
        },
        "lvl2": {
          "BASE": 750.0
        }
      }
    },
    "MinHp": 35,
    "MaxHp": 357,
    "MinAtk": 11,
    "MaxAtk": 113,
    "abilities11": {
      "name": "(Water) HP &amp; Strength +20%",
      "details": "If the user is attuned to Water: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Water",
      "Hybrid": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Water) HP &amp; Strength +30%",
      "details": "If the user is attuned to Water: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Water",
      "Hybrid": 30,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": {
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
    "abilities22": {
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
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210043_01": {
    "id": "210043_01",
    "name": {
      "en": "Liger",
      "ja": "ライガ",
      "zh": "雷牙"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Lightning Blitz",
      "icon": "Icon_Skill_013",
      "description1": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;130%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''66%''' damage every 3.99 seconds - with '''100%''' base chance.",
      "description2": "Deals 4 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;137%&lt;/span&gt; light damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|paralysis]] for 13 seconds - dealing '''88.3%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 520.0
        },
        "lvl2": {
          "BASE": 548.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 377,
    "MinAtk": 11,
    "MaxAtk": 119,
    "abilities11": {
      "name": "(Light) HP &amp; Strength +20%",
      "details": "If the user is attuned to Light: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Light",
      "Hybrid": 20,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Light) HP &amp; Strength +30%",
      "details": "If the user is attuned to Light: increases strength and HP by '''30%'''.",
      "might": 100,
      "limit": 0,
      "req": "Light",
      "Hybrid": 30,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210045_01": {
    "id": "210045_01",
    "name": {
      "en": "Phantom",
      "ja": "ファントム",
      "zh": "幽影"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Thorny Spiral",
      "icon": "Icon_Skill_004",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;137%&lt;/span&gt; shadow damage to surrounding enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''160%''' base chance.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;144%&lt;/span&gt; shadow damage to surrounding enemies, and inflicts [[Conditions#Afflictions|blindness]] (applies '''50%''' chance to miss on attacks) for 8 seconds with '''180%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 18.0,
      "modifier": {
        "lvl1": {
          "BASE": 685.0
        },
        "lvl2": {
          "BASE": 720.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 224,
    "MinAtk": 7,
    "MaxAtk": 73,
    "abilities11": {
      "name": "(Shadow) Strength +20%",
      "details": "If the user is attuned to Shadow: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 20,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Shadow) Strength +30%",
      "details": "If the user is attuned to Shadow: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 30,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210046_01": {
    "id": "210046_01",
    "name": {
      "en": "Nyarlathotep",
      "ja": "ニャルラトホテプ",
      "zh": "奈亚拉托提普"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "All-Encompassing Darkness",
      "icon": "Icon_Skill_013",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;331%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;368%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 662.0
        },
        "lvl2": {
          "BASE": 736.0
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 368,
    "MinAtk": 12,
    "MaxAtk": 128,
    "abilities11": {
      "name": "(Shadow) HP 30% = Strength +35%",
      "details": "If the user is attuned to Shadow: increases strength by '''35%''' when HP is '''30%''' or above.",
      "might": 35,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 35,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP 30% = Strength",
        "ability_value": 35
      }
    },
    "abilities12": {
      "name": "(Shadow) HP 30% = Strength +50%",
      "details": "If the user is attuned to Shadow: increases strength by '''50%''' when HP is '''30%''' or above.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 50,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP 30% = Strength",
        "ability_value": 50
      }
    },
    "abilities21": {
      "name": "(Shadow) Last Bulwark I",
      "details": "If the user is attuned to Shadow: grants the user a one-use shield that nullifies damage less than '''50%''' of their maximum HP when HP drops to '''30%'''. This does not stack with any other shields.",
      "might": 35,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Last Bulwark",
        "ability_value": 1
      }
    },
    "abilities22": {
      "name": "(Shadow) Last Bulwark II",
      "details": "If the user is attuned to Shadow: grants the user a one-use shield that nullifies damage less than '''60%''' of their maximum HP when HP drops to '''30%'''. This does not stack with any other shields.",
      "might": 50,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 2
      },
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Last Bulwark",
        "ability_value": 2
      }
    },
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 35,
    "incSTR2": 50
  },
  "210048_01": {
    "id": "210048_01",
    "name": {
      "en": "Gilgamesh",
      "ja": "ギルガメッシュ",
      "zh": "吉尔伽美什"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Subjugating Sword",
      "icon": "Icon_Skill_011",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;504%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;560%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 504.0
        },
        "lvl2": {
          "BASE": 560.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 371,
    "MinAtk": 12,
    "MaxAtk": 124,
    "abilities11": {
      "name": "(Light) Strength &amp; Shadow Res I",
      "details": "If the user is attuned to Light: increases strength by '''35%''' and adds '''15%''' to shadow resistance.",
      "might": 70,
      "limit": 0,
      "req": "Light",
      "STR": 35,
      "resEle": "Shadow",
      "res": 15,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength &amp; Shadow Res",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "(Light) Strength &amp; Shadow Res II",
      "details": "If the user is attuned to Light: increases strength by '''50%''' and adds '''15%''' to shadow resistance.",
      "might": 100,
      "limit": 0,
      "req": "Light",
      "STR": 50,
      "resEle": "Shadow",
      "res": 15,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength &amp; Shadow Res",
        "ability_value": 2
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 35,
    "incSTR2": 50,
    "resEle": "Shadow",
    "incRes": 15
  },
  "210049_01": {
    "id": "210049_01",
    "name": {
      "en": "Cupid",
      "ja": "キューピッド",
      "zh": "丘比特"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Lovely Pose",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''25%''' [[Healing Formula|Recovery Potency]], and increases their critical rate by '''20%''' for 15 seconds.",
      "description2": "Restores HP to all allies with '''30%''' [[Healing Formula|Recovery Potency]], and increases their critical rate by '''25%''' for 15 seconds.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 37,
    "MaxHp": 377,
    "MinAtk": 11,
    "MaxAtk": 119,
    "abilities11": {
      "name": "(Light) Strength +40%",
      "details": "If the user is attuned to Light: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 40,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Light) Strength +60%",
      "details": "If the user is attuned to Light: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 60,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210050_01": {
    "id": "210050_01",
    "name": {
      "en": "Roc",
      "ja": "フォーゲル",
      "zh": "沃格尔"
    },
    "element": "Wind",
    "rarity": "4",
    "skill": {
      "name": "Tactical Vortex",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;524.3%&lt;/span&gt; wind damage to surrounding enemies and inflicts [[Conditions#Afflictions|stun]] for 4-5 seconds with '''120%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;550.2%&lt;/span&gt; wind damage to surrounding enemies and inflicts [[Conditions#Afflictions|stun]] for 5-6 seconds with '''140%''' base chance.",
      "description3": "Deals wind damage to surrounding enemies, and inflicts [[Conditions#Afflictions|stun]] with ? base chance.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 524.3
        },
        "lvl2": {
          "BASE": 550.2
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 296,
    "MinAtk": 10,
    "MaxAtk": 101,
    "abilities11": {
      "name": "(Wind) Strength +30%",
      "details": "If the user is attuned to Wind: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Wind) Strength +45%",
      "details": "If the user is attuned to Wind: increases strength by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 45,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210051_01": {
    "id": "210051_01",
    "name": {
      "en": "Takemikazuchi",
      "ja": "タケミカヅチ",
      "zh": "建御雷"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Thunderous Charge",
      "icon": "Icon_Skill_013",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;179%&lt;/span&gt; light damage to enemies in a line, and inflicts stun for 4-5 seconds with '''120%''' base chance. Changing direction is possible during the attack.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;199%&lt;/span&gt; light damage to enemies in a line, and inflicts stun for 5-6 seconds with '''140%''' base chance. Changing direction is possible during the attack.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 895.0
        },
        "lvl2": {
          "BASE": 995.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 371,
    "MinAtk": 12,
    "MaxAtk": 124,
    "abilities11": {
      "name": "(Light) Strength +30%",
      "details": "If the user is attuned to Light: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 30,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Light) Strength +40%",
      "details": "If the user is attuned to Light: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 40,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "(Light) Overdrive Punisher +20%",
      "details": "If the user is attuned to Light: increases damage to enemies in overdrive state by '''20%'''.",
      "might": 5,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 20
      }
    },
    "abilities22": {
      "name": "(Light) Overdrive Punisher +25%",
      "details": "If the user is attuned to Light: increases damage to enemies in overdrive state by '''25%'''.",
      "might": 15,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 25
      }
    },
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 40
  },
  "210052_01": {
    "id": "210052_01",
    "name": {
      "en": "Prometheus",
      "ja": "プロメテウス",
      "zh": "普罗米修斯"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Promethean Flame",
      "icon": "Icon_Skill_019",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;504%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;560%&lt;/span&gt; flame damage to the target and nearby enemies.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 504.0
        },
        "lvl2": {
          "BASE": 560.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 374,
    "MinAtk": 12,
    "MaxAtk": 121,
    "abilities11": {
      "name": "(Flame) Strength &amp; Wind Res I",
      "details": "If the user is attuned to Flame: increases strength by '''35%''' and adds '''15%''' to wind resistance.",
      "might": 70,
      "limit": 0,
      "req": "Flame",
      "STR": 35,
      "resEle": "Wind",
      "res": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength &amp; Wind Res",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "(Flame) Strength &amp; Wind Res II",
      "details": "If the user is attuned to Flame: increases strength by '''50%''' and adds '''15%''' to wind resistance.",
      "might": 100,
      "limit": 0,
      "req": "Flame",
      "STR": 50,
      "resEle": "Wind",
      "res": 15,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength &amp; Wind Res",
        "ability_value": 2
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 35,
    "incSTR2": 50,
    "resEle": "Wind",
    "incRes": 15
  },
  "210057_01": {
    "id": "210057_01",
    "name": {
      "en": "Pele",
      "ja": "ペレ",
      "zh": "佩雷"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Blazing Pillars",
      "icon": "Icon_Skill_018",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;198%&lt;/span&gt; flame damage to surrounding enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''72.7%''' damage every 3.99 seconds - with '''110%''' base chance.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;220%&lt;/span&gt; flame damage to surrounding enemies, and inflicts [[Conditions#Afflictions|burn]] for 12 seconds - dealing '''97%''' damage every 3.99 seconds - with '''120%''' base chance.",
      "description3": "Deals flame damage to surrounding enemies and inflicts [[Conditions#Afflictions|burn]] with ? Base Chance",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 396.0
        },
        "lvl2": {
          "BASE": 440.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 221,
    "MinAtk": 7,
    "MaxAtk": 76,
    "abilities11": {
      "name": "(Flame) Strength +20%",
      "details": "If the user is attuned to Flame: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +30%",
      "details": "If the user is attuned to Flame: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 30,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210058_01": {
    "id": "210058_01",
    "name": {
      "en": "Vodyanoy",
      "ja": "ヴォジャノーイ",
      "zh": "沃加诺伊"
    },
    "element": "Water",
    "rarity": "4",
    "skill": {
      "name": "Relentless Torrent",
      "icon": "Icon_Skill_023",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;138.6%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;154%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 415.8
        },
        "lvl2": {
          "BASE": 462.0
        }
      }
    },
    "MinHp": 29,
    "MaxHp": 296,
    "MinAtk": 10,
    "MaxAtk": 100,
    "abilities11": {
      "name": "(Water) Strength +30%",
      "details": "If the user is attuned to Water: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 30,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Water) Strength +45%",
      "details": "If the user is attuned to Water: increases strength by '''45%'''.",
      "might": 80,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 45,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 45
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210059_01": {
    "id": "210059_01",
    "name": {
      "en": "Fubuki",
      "ja": "フブキリュウ",
      "zh": "雪龙"
    },
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Freezing Breath",
      "icon": "Icon_Skill_026",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;466%&lt;/span&gt; water damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;518%&lt;/span&gt; water damage to enemies directly ahead.",
      "description3": "Deals water damage to enemies directly ahead.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 466.0
        },
        "lvl2": {
          "BASE": 518.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 185,
    "MinAtk": 6,
    "MaxAtk": 63,
    "abilities11": {
      "name": "(Water) Strength +10%",
      "details": "If the user is attuned to Water: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 10,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Water) Strength +15%",
      "details": "If the user is attuned to Water: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Water",
      "STR": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210060_01": {
    "id": "210060_01",
    "name": {
      "en": "Tsumuji",
      "ja": "ツムジリュウ",
      "zh": "旋龙"
    },
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Air Tackle",
      "icon": "Icon_Skill_013",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;466%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;518%&lt;/span&gt; wind damage to enemies directly ahead.",
      "description3": "Deals wind damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 466.0
        },
        "lvl2": {
          "BASE": 518.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 184,
    "MinAtk": 6,
    "MaxAtk": 63,
    "abilities11": {
      "name": "(Wind) Strength +10%",
      "details": "If the user is attuned to Wind: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 10,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Wind) Strength +15%",
      "details": "If the user is attuned to Wind: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 15,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210061_01": {
    "id": "210061_01",
    "name": {
      "en": "Hinata",
      "ja": "ヒナタリュウ",
      "zh": "阳龙"
    },
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Shining Breath",
      "icon": "Icon_Skill_026",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;466%&lt;/span&gt; light damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;518%&lt;/span&gt; light damage to enemies directly ahead.",
      "description3": "Deals light-based damage to enemies directly ahead.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 466.0
        },
        "lvl2": {
          "BASE": 518.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 185,
    "MinAtk": 6,
    "MaxAtk": 62,
    "abilities11": {
      "name": "(Light) Strength +10%",
      "details": "If the user is attuned to Light: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 10,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Light) Strength +15%",
      "details": "If the user is attuned to Light: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Light",
      "STR": 15,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210062_01": {
    "id": "210062_01",
    "name": {
      "en": "Hikage",
      "ja": "ヒカゲリュウ",
      "zh": "影龙"
    },
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Gloom Tackle",
      "icon": "Icon_Skill_013",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;466%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;518%&lt;/span&gt; shadow damage to enemies directly ahead.",
      "description3": "Deals shadow damage to enemies directly ahead.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 466.0
        },
        "lvl2": {
          "BASE": 518.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 183,
    "MinAtk": 6,
    "MaxAtk": 64,
    "abilities11": {
      "name": "(Shadow) Strength +10%",
      "details": "If the user is attuned to Shadow: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 10,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Shadow) Strength +15%",
      "details": "If the user is attuned to Shadow: increases strength by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 15,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210063_01": {
    "id": "210063_01",
    "name": {
      "en": "Snow Drake",
      "ja": "アイスドラコ",
      "zh": "冰龙"
    },
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Snow Drop",
      "icon": "Icon_Skill_022",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;454%&lt;/span&gt; water damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;504%&lt;/span&gt; water damage to surrounding enemies.",
      "description3": "Deals water damage to surrounding enemies.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 454.0
        },
        "lvl2": {
          "BASE": 504.0
        }
      }
    },
    "MinHp": 19,
    "MaxHp": 191,
    "MinAtk": 5,
    "MaxAtk": 57,
    "abilities11": {
      "name": "(Water) HP +10%",
      "details": "If the user is attuned to Water: increases HP by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 10,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Water) HP +15%",
      "details": "If the user is attuned to Water: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 15,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210064_01": {
    "id": "210064_01",
    "name": {
      "en": "Gust Drake",
      "ja": "ウインドラコ",
      "zh": "风龙"
    },
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Gust Drop",
      "icon": "Icon_Skill_022",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;454%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;504%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "Deals wind damage to surrounding enemies.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 454.0
        },
        "lvl2": {
          "BASE": 504.0
        }
      }
    },
    "MinHp": 19,
    "MaxHp": 191,
    "MinAtk": 5,
    "MaxAtk": 57,
    "abilities11": {
      "name": "(Wind) HP +10%",
      "details": "If the user is attuned to Wind: increases HP by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 10,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Wind) HP +15%",
      "details": "If the user is attuned to Wind: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Wind",
      "HP": 15,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210065_01": {
    "id": "210065_01",
    "name": {
      "en": "Moon Drake",
      "ja": "ムーンドラコ",
      "zh": "月龙"
    },
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Moon Drop",
      "icon": "Icon_Skill_022",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;454%&lt;/span&gt; light damage to surrounding enemies.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;504%&lt;/span&gt; light damage to surrounding enemies.",
      "description3": "Deals light damage to surrounding enemies.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 454.0
        },
        "lvl2": {
          "BASE": 504.0
        }
      }
    },
    "MinHp": 19,
    "MaxHp": 192,
    "MinAtk": 5,
    "MaxAtk": 56,
    "abilities11": {
      "name": "(Light) HP +10%",
      "details": "If the user is attuned to Light: increases HP by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 10,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Light) HP +15%",
      "details": "If the user is attuned to Light: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Light",
      "HP": 15,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210066_01": {
    "id": "210066_01",
    "name": {
      "en": "Gloom Drake",
      "ja": "ダークドラコ",
      "zh": "暗龙"
    },
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Black Hole",
      "icon": "Icon_Skill_014",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;454%&lt;/span&gt; shadow damage to enemies in a line.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;504%&lt;/span&gt; shadow damage to enemies in a line.",
      "description3": "Deals shadow damage to enemies in a line.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 454.0
        },
        "lvl2": {
          "BASE": 504.0
        }
      }
    },
    "MinHp": 19,
    "MaxHp": 190,
    "MinAtk": 5,
    "MaxAtk": 58,
    "abilities11": {
      "name": "(Shadow) HP +10%",
      "details": "If the user is attuned to Shadow: increases HP by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Shadow",
      "HP": 10,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Shadow) HP +15%",
      "details": "If the user is attuned to Shadow: increases HP by '''15%'''.",
      "might": 30,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Shadow",
      "HP": 15,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210067_01": {
    "id": "210067_01",
    "name": {
      "en": "Wellspring Imp",
      "ja": "ウェルインプ",
      "zh": "井魔"
    },
    "element": "Water",
    "rarity": "3",
    "skill": {
      "name": "Noble Dance",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''20%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''25%''' for 15 seconds.",
      "description3": "Increases the entire team's defense by '''20%''' for 30 seconds.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 187,
    "MinAtk": 6,
    "MaxAtk": 60,
    "abilities11": {
      "name": "(Water) HP &amp; Strength +5%",
      "details": "If the user is attuned to Water: increases strength and HP by '''5%'''.",
      "might": 20,
      "limit": 0,
      "req": "Water",
      "Hybrid": 5,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "(Water) HP &amp; Strength +8%",
      "details": "If the user is attuned to Water: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Water",
      "Hybrid": 8,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 5,
    "incHP2": 8,
    "incSTR1": 5,
    "incSTR2": 8
  },
  "210068_01": {
    "id": "210068_01",
    "name": {
      "en": "Zephyr Imp",
      "ja": "エアリアルインプ",
      "zh": "气魔"
    },
    "element": "Wind",
    "rarity": "3",
    "skill": {
      "name": "Affinity Dance",
      "icon": "Icon_Skill_032",
      "description1": "Increases the entire team's critical rate by '''15%''' for 10 seconds.",
      "description2": "Increases the entire team's critical rate by '''20%''' for 10 seconds.",
      "description3": "Increases the entire team's critical rate by '''20%''' for 30 seconds.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 187,
    "MinAtk": 6,
    "MaxAtk": 60,
    "abilities11": {
      "name": "(Wind) HP &amp; Strength +5%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''5%'''.",
      "might": 20,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 5,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "(Wind) HP &amp; Strength +8%",
      "details": "If the user is attuned to Wind: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Wind",
      "Hybrid": 8,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 5,
    "incHP2": 8,
    "incSTR1": 5,
    "incSTR2": 8
  },
  "210069_01": {
    "id": "210069_01",
    "name": {
      "en": "Astral Imp",
      "ja": "スターインプ",
      "zh": "星魔"
    },
    "element": "Light",
    "rarity": "3",
    "skill": {
      "name": "Wisdom Dance",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''20%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''25%''' for 15 seconds.",
      "description3": "Increases the entire team's strength by '''20%''' for 30 seconds.",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 18,
    "MaxHp": 188,
    "MinAtk": 5,
    "MaxAtk": 59,
    "abilities11": {
      "name": "(Light) HP &amp; Strength +5%",
      "details": "If the user is attuned to Light: increases strength and HP by '''5%'''.",
      "might": 20,
      "limit": 0,
      "req": "Light",
      "Hybrid": 5,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "(Light) HP &amp; Strength +8%",
      "details": "If the user is attuned to Light: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Light",
      "Hybrid": 8,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 5,
    "incHP2": 8,
    "incSTR1": 5,
    "incSTR2": 8
  },
  "210070_01": {
    "id": "210070_01",
    "name": {
      "en": "Pallid Imp",
      "ja": "グレイヴインプ",
      "zh": "墓魔"
    },
    "element": "Shadow",
    "rarity": "3",
    "skill": {
      "name": "Grave Tidings",
      "icon": "Icon_Skill_014",
      "description1": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;145%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description2": "Deals 2 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;174%&lt;/span&gt; shadow damage to the target and nearby enemies.",
      "description3": "Deals shadow damage to enemies in a line.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 290.0
        },
        "lvl2": {
          "BASE": 348.0
        }
      }
    },
    "MinHp": 18,
    "MaxHp": 186,
    "MinAtk": 6,
    "MaxAtk": 61,
    "abilities11": {
      "name": "(Shadow) HP &amp; Strength +5%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''5%'''.",
      "might": 20,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 5,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 5
      }
    },
    "abilities12": {
      "name": "(Shadow) HP &amp; Strength +8%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''8%'''.",
      "might": 30,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 8,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 8
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 5,
    "incHP2": 8,
    "incSTR1": 5,
    "incSTR2": 8
  },
  "210072_01": {
    "id": "210072_01",
    "name": {
      "en": "Maritimus",
      "ja": "マリティムス",
      "zh": "玛利蒂姆斯"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Polar Roller",
      "icon": "Icon_Skill_013",
      "description1": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;120%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''110%''' base chance. Movement is possible during the attack.",
      "description2": "Deals 5 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;126%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''120%''' base chance. Movement is possible during the attack.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 3.0,
      "modifier": {
        "lvl1": {
          "BASE": 600.0
        },
        "lvl2": {
          "BASE": 630.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 224,
    "MinAtk": 7,
    "MaxAtk": 73,
    "abilities11": {
      "name": "(Shadow) HP &amp; Strength +10%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''10%'''.",
      "might": 50,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 10,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Shadow) HP &amp; Strength +15%",
      "details": "If the user is attuned to Shadow: increases strength and HP by '''15%'''.",
      "might": 60,
      "limit": 0,
      "req": "Shadow",
      "Hybrid": 15,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 15
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 10,
    "incHP2": 15,
    "incSTR1": 10,
    "incSTR2": 15
  },
  "210074_01": {
    "id": "210074_01",
    "name": {
      "en": "Yulong",
      "ja": "ギョクリュウ",
      "zh": "Yulong"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Subjugating Storm",
      "icon": "Icon_Skill_018",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;189%&lt;/span&gt; wind damage to surrounding enemies.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;210%&lt;/span&gt; wind damage to surrounding enemies.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 567.0
        },
        "lvl2": {
          "BASE": 630.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 225,
    "MinAtk": 7,
    "MaxAtk": 72,
    "abilities11": {
      "name": "(Wind) Strength +20%",
      "details": "If the user is attuned to Wind: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 20,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Wind) Strength +30%",
      "details": "If the user is attuned to Wind: increases strength by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Wind",
      "STR": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 20,
    "incSTR2": 30
  },
  "210075_01": {
    "id": "210075_01",
    "name": {
      "en": "Silke",
      "ja": "シルキー",
      "zh": "希露姬"
    },
    "element": "Light",
    "rarity": "4",
    "skill": {
      "name": "Pumpkin Prank",
      "icon": "Icon_Skill_018",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;580%&lt;/span&gt; light damage to surrounding enemies, and reduces their strength by '''10%''' for 10 seconds with '''100%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#bba500; font-weight:bold;&quot;&gt;644%&lt;/span&gt; light damage to surrounding enemies, and reduces their strength by '''15%''' for 10 seconds with '''100%''' base chance.",
      "description3": "Deals light damage to surrounding enemies, and reduces their strength by '''30%''' without fail.",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 580.0
        },
        "lvl2": {
          "BASE": 644.0
        }
      }
    },
    "MinHp": 30,
    "MaxHp": 301,
    "MinAtk": 9,
    "MaxAtk": 95,
    "abilities11": {
      "name": "(Light) HP &amp; Strength +15%",
      "details": "If the user is attuned to Light: increases strength and HP by '''15%'''.",
      "might": 60,
      "limit": 0,
      "req": "Light",
      "Hybrid": 15,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 15
      }
    },
    "abilities12": {
      "name": "(Light) HP &amp; Strength +20%",
      "details": "If the user is attuned to Light: increases strength and HP by '''20%'''.",
      "might": 70,
      "limit": 0,
      "req": "Light",
      "Hybrid": 20,
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "HP &amp; Strength",
        "ability_value": 20
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 15,
    "incHP2": 20,
    "incSTR1": 15,
    "incSTR2": 20
  },
  "210076_01": {
    "id": "210076_01",
    "name": {
      "en": "Jeanne d'Arc",
      "ja": "ジャンヌダルク",
      "zh": "贞德"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Frost Beam",
      "icon": "Icon_Skill_028",
      "description1": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;194%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''160%''' base chance.",
      "description2": "Deals 3 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;204%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|freeze]] for 3-6 seconds with '''180%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 582.0
        },
        "lvl2": {
          "BASE": 612.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 370,
    "MinAtk": 12,
    "MaxAtk": 125,
    "abilities11": {
      "name": "Dragonyule Blessing I",
      "details": "If the user is attuned to Water: increases strength by '''30%''' and critical rate by '''15%'''.",
      "might": 70,
      "limit": 0,
      "req": "Water",
      "STR": 30,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragonyule Blessing",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "Dragonyule Blessing II",
      "details": "If the user is attuned to Water: increases strength by '''45%''' and critical rate by '''20%'''.",
      "might": 100,
      "limit": 0,
      "req": "Water",
      "STR": 45,
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Dragonyule Blessing",
        "ability_value": 2
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210077_01": {
    "id": "210077_01",
    "name": {
      "en": "Marishiten",
      "ja": "マリシテン",
      "zh": "摩利支天"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Daybreak Flurry",
      "icon": "Icon_Skill_803",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;99%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''110%''' damage every 4.99 seconds - with '''90%''' base chance.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#521bce; font-weight:bold;&quot;&gt;104%&lt;/span&gt; shadow damage to enemies directly ahead, and inflicts [[Conditions#Special_Effects|bleeding]] for 30 seconds - dealing '''146%''' damage every 4.99 seconds - with '''100%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 594.0
        },
        "lvl2": {
          "BASE": 624.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 374,
    "MinAtk": 12,
    "MaxAtk": 121,
    "abilities11": {
      "name": "(Shadow) Strength +40%",
      "details": "If the user is attuned to Shadow: increases strength by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 40,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 40
      }
    },
    "abilities12": {
      "name": "(Shadow) Strength +60%",
      "details": "If the user is attuned to Shadow: increases strength by '''60%'''.",
      "might": 100,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Shadow",
      "STR": 60,
      "values": {
        "req": "Shadow",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 60
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 40,
    "incSTR2": 60
  },
  "210078_01": {
    "id": "210078_01",
    "name": {
      "en": "Shishimai",
      "ja": "シシマイ",
      "zh": "狮子舞"
    },
    "element": "Light",
    "rarity": "5",
    "skill": {
      "name": "Blessed Ritual",
      "icon": "Icon_Skill_032",
      "description1": "Applies one of the following at random to all allies:&lt;br/&gt;Increases strength by '''15%''' for 10 seconds&lt;br/&gt;Increases defense by '''15%''' for 10 seconds&lt;br/&gt;Increases critical rate by '''15%''' for 10 seconds.",
      "description2": "Applies one of the following at random to all allies:&lt;br/&gt;Increases strength by '''20%''' for 10 seconds&lt;br/&gt;Increases defense by '''20%''' for 10 seconds&lt;br/&gt;Increases critical rate by '''20%''' for 10 seconds.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 22,
    "MaxHp": 223,
    "MinAtk": 7,
    "MaxAtk": 75,
    "abilities11": {
      "name": "(Light) Critical Damage +50%",
      "details": "If the user is attuned to Light: adds '''50%''' to the modifier applied to critical damage.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 50
      }
    },
    "abilities12": {
      "name": "(Light) Critical Damage +70%",
      "details": "If the user is attuned to Light: adds '''70%''' to the modifier applied to critical damage.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 25
      },
      "values": {
        "req": "Light",
        "req_threshold": null,
        "ability_type": "Critical Damage",
        "ability_value": 70
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210079_01": {
    "id": "210079_01",
    "name": {
      "en": "Peng Lai",
      "ja": "ホウライ",
      "zh": "蓬莱"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Swift Stream",
      "icon": "Icon_Skill_028",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;630%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''160%''' base chance.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;662%&lt;/span&gt; water damage to enemies directly ahead, and inflicts [[Conditions#Afflictions|bog]] for 8 seconds with '''180%''' base chance.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 630.0
        },
        "lvl2": {
          "BASE": 662.0
        }
      }
    },
    "MinHp": 22,
    "MaxHp": 222,
    "MinAtk": 7,
    "MaxAtk": 75,
    "abilities11": {
      "name": "(Water) HP +20%",
      "details": "If the user is attuned to Water: increases HP by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 20,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 20
      }
    },
    "abilities12": {
      "name": "(Water) HP +30%",
      "details": "If the user is attuned to Water: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 30,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 20,
    "incHP2": 30,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210080_01": {
    "id": "210080_01",
    "name": {
      "en": "Long Long",
      "ja": "ロンロン",
      "zh": "龙龙"
    },
    "element": "Wind",
    "rarity": "5",
    "skill": {
      "name": "Howling Burst",
      "icon": "Icon_Skill_025",
      "description1": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;84%&lt;/span&gt; wind damage to enemies in a line.",
      "description2": "Deals 6 hits of &lt;span style=&quot;color:#25b700; font-weight:bold;&quot;&gt;93%&lt;/span&gt; wind damage to enemies in a line.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": {
        "lvl1": {
          "BASE": 504.0
        },
        "lvl2": {
          "BASE": 558.0
        }
      }
    },
    "MinHp": 36,
    "MaxHp": 369,
    "MinAtk": 12,
    "MaxAtk": 126,
    "abilities11": {
      "name": "(Wind) Strength &amp; Critical Damage I",
      "details": "If the user is attuned to Wind: increases strength by '''30%''' and adds '''50%''' to the modifier applied to critical damage.",
      "might": 70,
      "limit": 0,
      "req": "Wind",
      "STR": 30,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength &amp; Critical Damage",
        "ability_value": 1
      }
    },
    "abilities12": {
      "name": "(Wind) Strength &amp; Critical Damage II",
      "details": "If the user is attuned to Wind: increases strength by '''45%''' and adds '''55%''' to the modifier applied to critical damage.",
      "might": 100,
      "limit": 0,
      "req": "Wind",
      "STR": 45,
      "values": {
        "req": "Wind",
        "req_threshold": null,
        "ability_type": "Strength &amp; Critical Damage",
        "ability_value": 2
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 30,
    "incSTR2": 45
  },
  "210081_01": {
    "id": "210081_01",
    "name": {
      "en": "Simurgh",
      "ja": "シームルグ",
      "zh": "思摩夫"
    },
    "element": "Water",
    "rarity": "5",
    "skill": {
      "name": "Rainbow Bubbles",
      "icon": "Icon_Skill_026",
      "description1": "Deals 12 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;52%&lt;/span&gt; water damage to enemies directly ahead, and restores HP to all allies with '''25%''' [[Healing Formula|Recovery Potency]].",
      "description2": "Deals 12 hits of &lt;span style=&quot;color:#007cff; font-weight:bold;&quot;&gt;54%&lt;/span&gt; water damage to enemies directly ahead, and restores HP to all allies with '''30%''' [[Healing Formula|Recovery Potency]].",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 624.0
        },
        "lvl2": {
          "BASE": 648.0
        }
      }
    },
    "MinHp": 38,
    "MaxHp": 383,
    "MinAtk": 11,
    "MaxAtk": 113,
    "abilities11": {
      "name": "(Water) HP +30%",
      "details": "If the user is attuned to Water: increases HP by '''30%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 30,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 30
      }
    },
    "abilities12": {
      "name": "(Water) HP +40%",
      "details": "If the user is attuned to Water: increases HP by '''40%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "req": "Water",
      "HP": 40,
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "HP",
        "ability_value": 40
      }
    },
    "abilities21": {
      "name": "(Water) Overdrive Punisher +40%",
      "details": "If the user is attuned to Water:  increases damage to enemies in overdrive state by 40%.",
      "might": 5,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 40
      }
    },
    "abilities22": {
      "name": "(Water) Overdrive Punisher +60%",
      "details": "If the user is attuned to Water:  increases damage to enemies in overdrive state by 60%.",
      "might": 15,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 15
      },
      "values": {
        "req": "Water",
        "req_threshold": null,
        "ability_type": "Overdrive Punisher",
        "ability_value": 60
      }
    },
    "incHP1": 30,
    "incHP2": 40,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210082_01": {
    "id": "210082_01",
    "name": {
      "en": "Konohana Sakuya",
      "ja": "コノハナサクヤ",
      "zh": "Konohana Sakuya"
    },
    "element": "Flame",
    "rarity": "5",
    "skill": {
      "name": "Deciduous Dance",
      "icon": "Icon_Skill_020",
      "description1": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;594%&lt;/span&gt; flame damage to the target and nearby enemies, and increases the damage dealt by the user's next skill by '''30%'''.",
      "description2": "Deals 1 hit of &lt;span style=&quot;color:#ff1b00; font-weight:bold;&quot;&gt;660%&lt;/span&gt; flame damage to the target and nearby enemies, and increases the damage dealt by the user's next skill by '''40%'''.",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 2.0,
      "modifier": {
        "lvl1": {
          "BASE": 594.0
        },
        "lvl2": {
          "BASE": 660.0
        }
      }
    },
    "MinHp": 37,
    "MaxHp": 374,
    "MinAtk": 12,
    "MaxAtk": 121,
    "abilities11": {
      "name": "(Flame) Strength +10%",
      "details": "If the user is attuned to Flame: increases strength by '''10%'''.",
      "might": 20,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 10,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 10
      }
    },
    "abilities12": {
      "name": "(Flame) Strength +20%",
      "details": "If the user is attuned to Flame: increases strength by '''20%'''.",
      "might": 40,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 20
      },
      "req": "Flame",
      "STR": 20,
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Strength",
        "ability_value": 20
      }
    },
    "abilities21": {
      "name": "(Flame) Skill Damage +50%",
      "details": "If the user is attuned to Flame: increases attack skill damage by '''50%'''.",
      "might": 60,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 50
      }
    },
    "abilities22": {
      "name": "(Flame) Skill Damage +70%",
      "details": "If the user is attuned to Flame: increases attack skill damage by '''70%'''.",
      "might": 70,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 40
      },
      "values": {
        "req": "Flame",
        "req_threshold": null,
        "ability_type": "Skill Damage",
        "ability_value": 70
      }
    },
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 10,
    "incSTR2": 20
  },
  "210089_01": {
    "id": "210089_01",
    "name": {
      "en": "Bronze Fafnir",
      "ja": "ブロンズファフニール",
      "zh": "铜法芙纳"
    },
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Bronze Strength",
      "icon": "Icon_Skill_030",
      "description1": "Increases the entire team's strength by '''25%''' for 15 seconds.",
      "description2": "Increases the entire team's strength by '''30%''' for 15 seconds.",
      "description3": "",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 209,
    "MinAtk": 6,
    "MaxAtk": 63,
    "abilities11": {
      "name": "Adventurer EXP +100%",
      "details": "Increases adventurer EXP intake for clearing quests by '''100%'''.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Adventurer EXP",
        "ability_value": 100
      }
    },
    "abilities12": {
      "name": "Adventurer EXP +150%",
      "details": "Increases adventurer EXP intake for clearing quests by '''150%'''.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Adventurer EXP",
        "ability_value": 150
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210090_01": {
    "id": "210090_01",
    "name": {
      "en": "Silver Fafnir",
      "ja": "シルバーファフニール",
      "zh": "银法芙纳"
    },
    "element": "Shadow",
    "rarity": "4",
    "skill": {
      "name": "Silver Defense",
      "icon": "Icon_Skill_031",
      "description1": "Increases the entire team's defense by '''25%''' for 15 seconds.",
      "description2": "Increases the entire team's defense by '''30%''' for 15 seconds.",
      "description3": "",
      "Sp": 50,
      "SPLv2": 50,
      "SpRegen": 0,
      "HideLevel3": true,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 20,
    "MaxHp": 209,
    "MinAtk": 6,
    "MaxAtk": 63,
    "abilities11": {
      "name": "Mana +25%",
      "details": "Increases [[Mana]] intake for clearing quests by '''25%'''.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Mana",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Mana +50%",
      "details": "Increases [[Mana]] intake for clearing quests by '''50%'''.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 50
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Mana",
        "ability_value": 50
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 0,
    "incSTR2": 0
  },
  "210091_01": {
    "id": "210091_01",
    "name": {
      "en": "Gold Fafnir",
      "ja": "ゴールドファフニール",
      "zh": "金法夫纳"
    },
    "element": "Shadow",
    "rarity": "5",
    "skill": {
      "name": "Gold Heal",
      "icon": "Icon_Skill_029",
      "description1": "Restores HP to all allies with '''25%''' [[Healing Formula|Recovery Potency]]",
      "description2": "Restores HP to all allies with '''30%''' [[Healing Formula|Recovery Potency]]",
      "description3": "",
      "Sp": 30,
      "SPLv2": 30,
      "SpRegen": 0,
      "HideLevel3": false,
      "IsAffectedByTension": true,
      "iframe": 1.0,
      "modifier": null
    },
    "MinHp": 22,
    "MaxHp": 229,
    "MinAtk": 6,
    "MaxAtk": 69,
    "abilities11": {
      "name": "Rupies +25%",
      "details": "Increases rupie intake for clearing quests by 25%.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Rupies",
        "ability_value": 25
      }
    },
    "abilities12": {
      "name": "Rupies +50%",
      "details": "Increases rupie intake for clearing quests by 50%.",
      "might": 0,
      "limit": {
        "IsEffectMix": false,
        "MaxLimitedValue": 0
      },
      "values": {
        "req": null,
        "req_threshold": null,
        "ability_type": "Rupies",
        "ability_value": 50
      }
    },
    "abilities21": 0,
    "abilities22": 0,
    "incHP1": 0,
    "incHP2": 0,
    "incSTR1": 0,
    "incSTR2": 0
  }
};
export default dragon;