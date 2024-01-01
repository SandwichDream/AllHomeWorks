let products = {
    Name: 'TV',
    price: '120$',
    discount: false,
    colors: ['black', 'red', 'green']
}

for(let key in products){
    console.log(key);
    console.log(products[key]);
}

let numbers = [45, 32, 28, 16, 25];

for(let index in numbers){
    console.log(`in: ${index}`);
    console.log(numbers[index]);
}

let buyList = ['fash', 'orange', 'eggs'];

for (const item of buyList) {
    console.log(`of: ${item}`);
}

let fruits = ['apple',  'orange', 'banana'];

fruits.forEach((item, index, arr)=>{console.log(`I have ${item} with index ${index} in ${arr}.`)});

let numbers1 = [1, 2, 3];

function double (item, index, arr) {
    arr[index] = item*2;
}

let tripNumbers = [1, 2, 3];

let newArr = tripNumbers.map((arrItem)=>arrItem*3)
console.log(`1: ${tripNumbers};\n2: ${newArr}.`)

let userAges = [32, 22, 17, 18, 20, 16, 15, 40];
function checkAge(age){
    return age >= 18;
}
let filtredAge = userAges.filter(checkAge);
console.log(filtredAge);

numbers = [1,2,3,4,5,6,7,8,9];

console.log("filter: " + numbers.filter((number)=>number%2===0));
console.log("map: " + numbers.map((number)=>number%2===0));

let users = [40, 24, 20, 30, 2, 10, 5, 13, 25, 26, 1, 50, 70];
console.log(users.sort());
console.log(`Sort corect: ${users.sort((a,b)=>a-b)}`);
console.log(`Sort corect reverse: ${users.sort((a,b)=>b-a)}`);