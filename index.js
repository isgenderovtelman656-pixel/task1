// birinci tapsiriq
function findThereeLettersWord(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length === 3){
            return arr[i];
        }
    }
}
console.log(findThereeLettersWord(["Green", "Red", "Blue"]));

// ikinci tapsiriq
function countEvensAndOdds(arr){
    let even = 0;
    let odd = 0;

    arr.forEach(function (num){
        if(num % 2 === 0){
            even++;
        }else{
            odd++;
        }
    });
    return{ even, odd };
}
console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6]));
