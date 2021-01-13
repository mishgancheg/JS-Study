
// 5. Написать функцию которая делает транслитерацию
// Привет Женя! => Privet Zhenja
// п - p
// ж - zh
// Таблицы транслитерации
let transliteration1 = {
    'а':    'a',
    'б':	'b',
    'в':    'v',
    'г':	'g',
    'д':	'd',
    'е':	'e',
    'ё':	'jo',
    'ж':	'zh',
    'з':	'z',
    'и':	'i',
    'й':	'jj',
    'к':	'k',
    'л':	'l',
    'м':	'm',
    'н':	'n',
    'о':	'o',
    'п':	'p',
    'р':	'r',
    'с':	's',
    'т':	't',
    'у':	'u',
    'ф':	'f',
    'х':	'kh',
    'ц':	'c',
    'ч':	'ch',
    'ш':	'sh',
    'щ':	'shh',
    'ъ':	'"',
    'ы':	'y',
    'ь':	"'",
    'э':	'eh',
    'ю':	'ju',
    'я':	'ja'

}

function transliteration(str) {
    let arrOfChars = str.toLowerCase().split("");
    let newStr = [];
    for (let i = 0; i < arrOfChars.length; i++) {
        const inChar = arrOfChars[i];
        newStr.push(transliteration1[inChar] || inChar);
    }
    return newStr.join("");
}

let inputString = "строчка1";
console.log(transliteration(inputString));