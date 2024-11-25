 
 /* Difference b/w slice and splice */
 
 const myarr = [10,20,30,40,50,60,70]
 console.log("Real array ",myarr);

 const myarr1 = myarr.slice(1,3)
 console.log(myarr1); // slice method returns slice elements in the new array.
 console.log("Second check",myarr); // here array didn't change

 const myarr2 = myarr.splice(1,3)
 console.log(myarr2);   // here he got deleted array in a new array
 console.log("Third check",myarr); // That's why "myarr" is change here!



 /*------------Using Push,Pop,Unshift,shift method-----------------------------*/


 const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

fruits.push("Litchi")  // Add a new item to the end of an array:
console.log(fruits);


fruits.unshift("kiwi")
console.log(fruits);   // Add a new item to the initial of an array:


fruits.pop()   // Removes the last element from an array and returns that element
console.log(fruits);


fruits.shift()  //Removes the first element from an array and returns that removed element
console.log(fruits);


// Inbuilt  loop Method

const number = [10,20,25,30,45,95]
const newnumbers = number.map((item,index,array) => {
    // console.log(item,index,array)
    return item + 10;
})
console.log(newnumbers);