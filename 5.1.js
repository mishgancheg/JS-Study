
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
    peopleArr.sort((a, b) => {
        return a.age - b.age;
    })
    let result = {};
    let people = { age: null, names: [] };
    for (let i = 0; i < peopleArr.length; i++) {
        if (i === 0) {
            people.age = peopleArr[i].age;
            people.names.push(peopleArr[i].name);
        } else {
            if (peopleArr[i - 1].age !== peopleArr[i].age) {
                if (people.names.length >= minP) {
                    result[people.age] = people.names;

                }
                people = { age: null, names: [] };
                people.age = peopleArr[i].age;
                people.names.push(peopleArr[i].name);
            } else {
                people.names.push(peopleArr[i].name);
            }
        }

    }
    if (people.names.length >= minP) {
        result[people.age] = people.names;
    }
    return result;
}

console.log(sameAge(arrOfPeople, minPeople));






