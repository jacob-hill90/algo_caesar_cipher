def caesar_cipher(str, move):
    alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    answer = []

    for i in str:
        if i.isalpha():
            if i == i.lower():
                if alpha.index(i) + move > 25:
                    answer.append(alpha[(alpha.index(i) + move) % 26])
                elif alpha.index(i) + move < 0:
                    answer.append(alpha[(alpha.index(i) + move) + 26])
                else: 
                    answer.append(alpha[alpha.index(i) + move])
            if i == i.upper():
                if upperAlpha.index(i) + move > 25:
                    answer.append(upperAlpha[(upperAlpha.index(i) + move) % 26])
                elif upperAlpha.index(i) + move < 0:
                    answer.append(upperAlpha[(upperAlpha.index(i) + move) + 26])
                else: 
                    answer.append(upperAlpha[upperAlpha.index(i) + move])
        else: answer.append(i)

    return "".join(answer)
