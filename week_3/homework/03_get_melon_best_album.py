genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]


def get_melon_best_album(genre_array, play_array): # O(n^2)
    n = len(genre_array)
    genres_play_dict = {}
    genres_play_index_dict = {}
    for i in range(n):
        genre = genre_array[i]
        play = play_array[i]
        if genre not in genres_play_dict:
            genres_play_dict[genre] = play
            genres_play_index_dict[genre] = [[i, play]]
        else:
            genres_play_dict[genre] += play
            genres_play_index_dict[genre].append([i, play])


    sorted_genre_play_array = sorted(genres_play_dict.items(), key=lambda item: item[1], reverse=True)

    # print(genres_play_dict)
    # print(genres_play_index_dict)
    # print(sorted_genre_play_array)

    result = []
    for genre, _vaule in sorted_genre_play_array:
        index_play_array = genres_play_index_dict[genre]
        sorted_genre_play_index_array = sorted(index_play_array, key=lambda item: item[1], reverse=True)

        for i in range(len(sorted_genre_play_index_array)):
            if i > 1:
                break
            result.append(sorted_genre_play_index_array[i][0])
    
    return result


print(get_melon_best_album(genres, plays))  # 결과로 [4, 1, 3, 0] 가 와야 합니다!