//решение квадратного уравнения
let a = 1;
let b = 1;
let c = 1;
let discr = (b ** 2) - (4 * a * c);
if(discr > 0){
    const x1 = (-b + Math.sqrt(discr)) / (2 * a);
    const x2 = (-b - Math.sqrt(discr)) / (2 * a);
    console.log(`Ответ: ${x1}, ${x2}`);
}
else if(discr === 0){
    const x = (-b + Math.sqrt(discr)) / (2 * a))
    console.log(`Дискриминант: ${discr}. Ответ: ${x}`);
}
else if(discr < 0 ){
    console.log(`Дискриминант: ${discr}. Корней нет`);
}