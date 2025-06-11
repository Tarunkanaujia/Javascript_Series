//@1 topic ************************************

function myName(){                        // This is the simple way to create function
    console.log("My name is Tarun")
}
// myName()              //Execution of Function


// @2 topic********************** Add Two Number using function  **********************

function addTwoNumbers(num1,num2){

    // console.log(num1 + num2)

//   let result = num1 + num2             //  first way
//   return  num1 + num2
 
                // OR

    // return  num1 + num2            // Second Way

}
// addTwoNumbers(3,5)
// addTwoNumbers(3,"5")

const Result = addTwoNumbers(3,5)          // "Result" and "result" Variable both are different because of scope.
// console.log(Result);                      // if we don't pass the return then result will be showing Undefined.


//@3 topic ************************************

function student(username){
 return ` My Name is ${username} and i'm 25yr old.`
}
// student("Tarun")                               // if we call this funciton than it will show us undefined.
  
//  console.log(student("Tarun"));   


//@4 topic ****  Checking Username ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  function loginUsername(username){
//     if(!username){                                        // here "!username" is equivalent to " username === undefined" We can write any of them both are same.
//          console.log("Please enter username")
//         return
//     }
//      return ` My Name is ${username} and i'm 25yr old.`

//  }
// console.log( loginUsername("tarun"));
// console.log( loginUsername());


//@5 topic ****  Checking Username ************************************************

function loginUsername(username = "John"){   // Minimum value of username is "John"
    if(!username){                                        // here "!username" is equivalent to " username === undefined" We can write any of them both are same.
         console.log("Please enter username")
        return
    }
     return ` My Name is ${username} and i'm 25yr old.`

 }
// console.log( loginUsername("tarun"));       // overright the value 
console.log( loginUsername());


// ***@6 topic ***************************


function fruitValue(Apple , banana , ...Mango){
return [Apple,banana, Mango] 
}
console.log(fruitValue(30,40 , 70,54,65,4,5))


// ***@7 topic ********************* Function with Object *****************

const studentId = {
    Name : "Tarun",
    Batch : "2022",
    ID : "123456"
}

function showId(MyID){
    console.log(`my name is ${MyID.Name} and Batch ${MyID.Batch} and this is my id ${MyID.ID}.`)
}
// showId(studentId)
  
                            //OR
showId({                    // you can pass the object inside the Arguement.
    Name : "Virat",
    Batch : "2024",
    Id : "4251785"
})


// ***@7 topic ********************* Function with Array *****************


const vegitablePrice = [20,15,40,85,90]

function vegPrice(veggie){
    return veggie[2]
}
// console.log(vegPrice(vegitablePrice));

console.log(vegPrice([200,400,450]));   // you can pass the Array inside the Arguement.

