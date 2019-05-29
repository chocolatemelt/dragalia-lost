import main

FILE_NAME = "wyrmprint"


def set_wyrmprint():
    table = "Wyrmprints"
    fields = (
        "BaseId,Name,NameJP,Rarity,IsPlayable,"
        + "MinHp,MaxHp,MinAtk,MaxAtk,"
        + "Abilities11,Abilities12,Abilities13,Abilities21,Abilities22,Abilities23,Abilities31,Abilities32,Abilities33"
    )
    group = "BaseId"

    parse_int = ["MinHp", "MaxHp", "MinAtk", "MaxAtk"]

    raw_data = main.get_data(table, fields, group)
    abilities = main.set_abilities()

    names = main.load_name(FILE_NAME)
    o_len = len(names)

    data_new = []
    data_list = []
    data_dict = {}

    for i in raw_data:
        item = i["title"]
        rarity = int(item["Rarity"])
        if item["BaseId"] and item["IsPlayable"] == "1":
            uid = "{}".format(item["BaseId"])
            name = main.set_name(names, item, data_new)

            new_item = {"id": uid, "name": name, "rarity": item["Rarity"]}

            for k in parse_int:
                new_item[k] = int(item[k])

            addition1 = {}
            for a in [
                "Abilities11",
                "Abilities12",
                "Abilities13",
                "Abilities21",
                "Abilities22",
                "Abilities23",
                "Abilities31",
                "Abilities32",
                "Abilities33",
            ]:
                ability = abilities.get(item[a])
                if ability:
                    # new_item[a.lower()] = ability['Might']
                    new_item[a.lower()] = ability

                    level = a[-1]

                    if "STR" in ability:
                        addition1["incSTR" + level] = ability["STR"]

                    if "def" in ability:
                        addition1["incDef" + level] = ability["def"]

                    if "res" in ability:
                        addition1["resEle"] = ability["resEle"]
                        addition1["incRes" + level] = ability["res"]

                    if "dungeon" in ability:
                        addition1["dungeon"] = ability["dungeon"]
                        addition1["counter" + level] = ability["counter"]
                else:
                    new_item[a.lower()] = 0

            if len(addition1):
                new_item.update(addition1)

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
    set_wyrmprint()
