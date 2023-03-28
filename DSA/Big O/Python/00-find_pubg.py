all_games = ['cod', 'valorant', 'pubg']

def find_pubg(game_list):
    """this function takes 'game_list' as an parameter & check the 'pubg' game inside the list"""

    for game in game_list:
        if game == "pubg":
            print(f'found pubg in index number {game_list.index(game)}')

find_pubg(all_games)
