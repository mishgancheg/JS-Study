// 3. Написать функцию которая преобразует текст в веррхний регистр
// сделать разными способами, если получится
let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и',
    'т', 'ь', 'б', 'ю', 'ё', ' '];

function toUpper (string) {
    let splitString = string.split("");
    for (let i = 0; i < splitString.length; i++) {
        if (!letters.includes(splitString[i].toLowerCase())) {
            splitString.splice(i, 1);
            i--;
        }
    }
    return splitString.join("").toUpperCase();
}

console.log(toUpper("тес1тОВая _123строка"));


const str = 'тес1тОВая _123строка';
console.log(str.replace(/[^а-я ]/ig, '').toUpperCase());