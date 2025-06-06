let balance = new Number(100);
console.log(balance)

console.log(balance.toString().length)


const othernumber = 12345.89365
console.log(othernumber.toFixed(2))
console.log(othernumber.toPrecision(6)) //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits


const bankbalance = 75431946679;
console.log(bankbalance.toLocaleString("en-IN"))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.ceil(42.6))
console.log(Math.round(42.6))
console.log(Math.abs(-42))
console.log(Math.floor(42.6))
console.log(Math.min(4,5,6,4,8,93))
console.log(Math.max(4,5,6,4,8,93))
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))



