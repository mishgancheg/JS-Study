
// Создать массив объектов людей с информацией имя человека, возраст, пол
// 6. Написать функцию, которая принимает людей, строку и минимальный и максимальный возраст и
// выдаёт массив людей которые по возрасту подходят и которые в имени имеют заданую строчку

const arrOfPeople = [
    { name: "Jack", age: 12, gender: "m" },
    { name: "Ann", age: 17, gender: "f" },
    { name: "George", age: 22, gender: "m" },
    { name: "Raze", age: 15, gender: "f" }
];

function analisePeople (arr, minAge, maxAge, str) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].name.toLowerCase().includes(str)) && arr[i].age >= minAge && arr[i].age <= maxAge) {
            console.log(arr[i].name);
        }
    }
}

const minAge1 = 12;
const maxAge1 = 21;
const str1 = "a";

analisePeople(arrOfPeople, minAge1, maxAge1, str1);
