const userdetails = {
    name: "vishal",
    email: "Xya@gmail.com",
    isloggedIn : ["mon","sat"]     // we can also use the array inside the Object.
}
// console.log(userdetails)
// console.log(userdetails["name"])

userdetails.email = "john.@gmail.com"  // if we want to replace the mail or something else.
// Object.freeze(userdetails)  // We can also freeze the object than  we can't anything.
// userdetails.name= "Suraj"   // here i am trying to change the name but i can't. because of freeze method.
// console.log(userdetails)

userdetails.greeting = function(){
    console.log(`hello my name is ${this.name}`)
}
// console.log(userdetails.greeting())  // target greeting
// console.log(userdetails.greeting) // copy of function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderuser = new Object()    // singleton Object
const tinderuser = {}   // this is also an object but not singleton

tinderuser.name = "Virat"
tinderuser.email = "xyz@gamil.com"
// console.log(tinderuser)



// ******************************** NESTED OBJECT

const college = {
    email : "college@gamil.com",
    studentName : {
        Name : "Virat",
        lastName : "kohli"
    }
}
// console.log(college.studentName)

const obj1 = {1 : " A" , 2 : " B"}
const obj2 = {3 : " C" , 4 : " D"}
const obj4 = {5 : " E" , 6: " F"}


// const obj3 = {obj1,obj2}  // merge two object

// const obj3 = Object.assign({},obj1,obj2,obj4)   // Second way

const obj3 = {...obj1,...obj2,...obj4}    // Spread Operator
// console.log(obj3) 



// ++++++++++++++++++++++ Here we are discuss about ,if data come from any database than how we access them  ++++++++++++++++++++++++++

const DatacomefromDB = 
    [
        {
            email:"Rohit@gmail.com",
            id:123456
        },
        {
       email:"Virat@gmail.com",
       id:123445
        },
        {
email:"Shreyas@gmail.com",
id:1234758
        }
    ]
// console.log(DatacomefromDB[1].email)  //This is how we can access the data which is come from any database.


// ++++++++++++++++++++++++ How do we get key or Value form the Object ++++++++++++++++++++++++++++++

const CollegeId = {
    name : "Tarun",
    Enroll: "1234567890",
    Branch : "CSE",
    StudyYear : 4

}
console.log(Object.keys(CollegeId))   // target all keys
console.log(Object.values(CollegeId))   // target all Value

console.log(CollegeId.hasOwnProperty('name'))   // here i am checking this key is available or not. if it is available than True comes orhterwise False


//+++++++++++++++++++++++++++  De-structing Object +++++++++++++++++++++++++++++++++++++++++++

const fruitprice ={

    mango:"30", apple:"100", Banana:"70", Grapes:"50", Guava:"25", Litchi:"90"

}
console.log(fruitprice["Banana"])  

const {mango : M,Banana}  = fruitprice  // De- structure Object

// console.log(mango)
console.log(Banana)
console.log(M)     // rename of mango

// ++++++++++ JSON +++++++++++++++++

// {
//     "name" : "tarun",
//     "Branch" : "CSE"
// }



