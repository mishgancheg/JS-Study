function fact(n) {
    if (n === 1) {
        return n;
    } else {
        return n * fact(n - 1);
    }
}
console.log(fact(5));
