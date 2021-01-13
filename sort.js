let numbers = [5,4 , 12, 34, 45, 92, 1];
function doSort(numbers){
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[j] > numbers[j + 1]){
                let x = numbers[j];
                numbers[j+1] = x;
                numbers[j] = y;
            }
        }
    }
    return numbers;
}

console.log(doSort(numbers));