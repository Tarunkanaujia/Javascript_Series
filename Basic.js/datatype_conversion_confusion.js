let value = 38;
console.log(value);  //38
console.log(typeof (value)); // When we check the type of this variable then we got "number" datatype as output.

let value1 = "38";
console.log(value);  //38
console.log(typeof (value1)); // Here we got the "string" datatype as output.

// But here what happened.

let value2 = "38abc";   // When we assign this value in double quotes.
console.log(value2);   //  38abc
console.log(typeof (value2)); // String
let check = Number(value2); 
console.log(check);  //but when we check with datatype "Number" than it shows us what actual vaule is it which is NaN.*/


let value3 = Number("38");
console.log(value3);  //38
console.log(typeof (value3)); //  but here we got the "number" as output because of using Number datatype.


let value4 = null
console.log(value4); // null
console.log(typeof (value4));  // object


let value5 = undefined;
console.log(value5);
console.log(typeof (value5));  // undefined


    let booleanno = Boolean(0)
    console.log(booleanno);

    let booleanno1 = Boolean(1)
    console.log(booleanno1);

    let bigNumber  = 1245879924567n
     console.log( typeof bigNumber);