let encryptThis = function(text) {
    let arrOfWords = text.split(" ");
    let resArr = [];
    for (let i = 0; i < arrOfWords.length; i++) {
        let encryptedWord = [];
        let word = arrOfWords[i].split("");
        if(word.length === 1){
            encryptedWord.push(word[0].charCodeAt(0));
            encryptedWord = encryptedWord.join("");
            resArr.push(encryptedWord);
        }
        if(word.length === 2){
            encryptedWord.push(word[0].charCodeAt(0));
            encryptedWord.push(word[1]);
            encryptedWord = encryptedWord.join("");
            resArr.push(encryptedWord);
        }
        if(word.length > 2){
            let firstEncryptedLetter = word[0].charCodeAt(0);
            let secondLetter = word[1];
            let lastLetter = word[word.length-1];
            word.splice(0,1);
            word.splice(0,1);
            word.splice(word.length-1,1);
            encryptedWord.push(firstEncryptedLetter);
            encryptedWord.push(lastLetter);
            encryptedWord.push(word.join(""));
            encryptedWord.push(secondLetter);
            encryptedWord = encryptedWord.join("");
            resArr.push(encryptedWord);
        }


    }
    return resArr.join(' ');
}
