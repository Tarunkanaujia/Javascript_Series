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

// const obj3 = {obj1,obj2}  // merge two object

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

