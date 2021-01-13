let int = 100;
let divisor = 2;
while (int !== 1){
    if(int % divisor === 0){
        int = int / divisor;
        console.log(divisor);
        divisor = 2;
    }
    else {
        divisor++;
    }
}
//2*2*5*5