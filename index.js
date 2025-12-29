let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

newArr.pop();
let increasedArr = [];

for(let i = 0; i < newArr.length; i++){
    increasedArr.push(newArr[i] + 2);
}
console.log(arr);
console.log(increasedArr);

