function calcMoney(startMoney, percent, currentYear, LastYear){
    let res = 1000000;
    for (let i = currentYear; i < LastYear; i++) {
        res += res* percent/100;
    }
    return res;
}
console.log(calcMoney(100000, 5, 2020, 2100));