exports.caesarCipher = function(str, move) {
    
    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let answer = []
    
    for(let i of str){
        //Handles lower case values and (index + move)s that're larger than 26 and lower than 0
        if(alpha.includes(i)){
            if(alpha.indexOf(i) + move > 25){
                answer.push(alpha[(alpha.indexOf(i) + move) % 26])
            }
            else if(alpha.indexOf(i) + move < 0){
                answer.push(alpha[(alpha.indexOf(i) + move) + 26])
            }
            answer.push(alpha[alpha.indexOf(i) + move])
        }
        //Handles upper case values and (index + move)s that're larger than 26 and lower than 0
        else if(upperAlpha.includes(i)){
            if(upperAlpha.indexOf(i) + move > 25){
                answer.push(upperAlpha[(upperAlpha.indexOf(i) + move) % 26])
            }
            else if(upperAlpha.indexOf(i) + move < 0){
                answer.push(upperAlpha[(upperAlpha.indexOf(i) + move) + 26])
            }
            answer.push(upperAlpha[upperAlpha.indexOf(i) + move])
        }
        //If value is not a letter just push to string
        else answer.push(i)
    }
    return answer.join('')
}
