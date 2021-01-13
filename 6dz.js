// Создать массив объектов людей с информацией имя человека, возраст, пол
// 6. Написать функцию, которая принимает людей, строку и минимальный и максимальный возраст и
// выдаёт массив людей которые по возрасту подходят и которые в имени имеют заданую строчку

const arrOfPeople = [
    { name: "Jack", age: 22, gender: "m", prof: "doc"},
    { name: "Ann", age: 27, gender: "f", prof: "doc" },
    { name: "George", age: 25, gender: "m", prof: "tch" },
    { name: "Raze", age: 25, gender: "f", prof: "tch" },
    { name: "Grew", age: 24, gender: "m", prof: "prg"},
    { name: "Elisabeth", age: 26, gender: "f", prof: "tch" },
    { name: "Andrew", age: 26, gender: "m", prof: "prg" },
    { name: "Mia", age: 22, gender: "f", prof: "prg" }
];

// function analisePeople (arr, minAge, maxAge, str) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i].name.toLowerCase().includes(str)) && arr[i].age >= minAge && arr[i].age <= maxAge) {
//             console.log(arr[i].name);
//         }
//     }
// }
// analisePeople(arrOfPeople, minAge1, maxAge1, str1);


const queryOptions = {
    minAge: 0, // null
    maxAge: 30,
    namePart: "",
    profession: "doc",
    gender: "m",
};
console.log(queryOptions[1]);
function includeNamePart (man, queryOptions) {
    return man.name.toLowerCase().includes(queryOptions.namePart);
}

function minAge (man, queryOptions) {
    return man.age < Number(queryOptions.minAge);
}

function maxAge (man, queryOptions) {
    return man.age > Number(queryOptions.maxAge);
}

function checkProfession(man, queryOptions) {
    return man.prof === queryOptions.profession;
}

function checkGender(man, queryOptions) {
    return man.gender === queryOptions.gender;
}
const filterArray = [includeNamePart, minAge, maxAge, checkProfession, checkGender];


function filterPeople (peopleArray, selectFunctionArray, data) {
    const result = [];
    for (let i = 0; i < peopleArray.length; i++) {
        const man = peopleArray[i];
        let checkResult = true;
        for (let j = 0; checkResult && j < selectFunctionArray.length; j++) {
            const fn = selectFunctionArray[j]
            if(!fn(man, data)){
                checkResult = false;

            }
        }
        if(checkResult){
            result.push(man);
        }
    }
    return result;
}
const filtered = filterPeople(arrOfPeople, filterArray, queryOptions)
console.log(filtered);
// filterPeople(arrOfPeople, filterArray, {
//     minAge: 0,
//     maxAge: Number.MAX_VALUE,
//     namePart: "",
// });


// 1. Поиск по части имени
// 2. Поиск по полному совпадению имени
// 3. Поиск по минимальному возрасту
// 4. Максимальному возрасту
// 5. Поиск по полу
// 6. Поиск про профессии

