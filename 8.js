// 7. Написать функцию, которая из заданного массива людей находит все группы людей одинакового возраста, если больше двух
// function y(peopleArr) {
//     return [
//         [],  // 20 лет
//         [],  // 30 лет
//         []
//     ];
// }
const arrOfPeople = [
    { name: "Jack", age: 13, gender: "m" },
    { name: "Ann", age: 17, gender: "f" },
    { name: "George", age: 14, gender: "m" },
    { name: "Raze", age: 17, gender: "f" },
    { name: "Roze", age: 12, gender: "m" },
    { name: "Andrew", age: 14, gender: "m" },
    { name: "Alex", age: 13, gender: "f" },
    { name: "Eva", age: 17, gender: "f" },

];

const minPeople = 2;
function sameAge (peopleArr, minP) {
    peopleArr.sort((a, b) => a.age - b.age)
    let accum = {};

    function print(){
        console.log(accum.age + ': ' + accum.names.join(', '));
    }

    peopleArr.forEach(({ name, age }, i) => {
        if (i === 0 || age !== peopleArr[i-1].age) {
            if (i > 1 && accum.names.length >= minP) {
                print()
            }
            accum = { age, names: [name]}
        } else {
            accum.names.push(name);
        }
    });
    if (accum.names.length > minP) {
        print()
    }
}

sameAge(arrOfPeople, minPeople);





