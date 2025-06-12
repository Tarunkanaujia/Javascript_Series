 const username = {
    studentName : "Tarun",
    Id : "123456",
    batch : function(){
console.log(`hi my name is ${this.studentName} and my id is ${this.Id}`);
console.log(this);
    }
 }
//  console.log(username)
//  username.batch()
//  username.studentName = " jhon"
//  username.batch()
// console.log(this);  // it will show us empty object. Because we are in node environment . Same thing if we apply on the browers it will show us window which is a global object.

function name (){
    let username = "Thor"
    console.log(this);  // this will work 
    
    console.log(this.username);    // here "this" method will not work 
    
}
// name()



// ************************ Arrow function ***********************************************************************


// @ First way to declare arrow function

const one =  ()=>{
    let username = "Thor"
    console.log(this.username);    
}
// one()


// @ Second way to declare arrow function implicit method.

const two = (num1,num2)=>{
    console.log("First implict method")
    return num1 + num2
}
console.log(two(5,9))

//*************/
const Three = (num1,num2)=> (console.log("Second implict method"), num1 + num2)
   
console.log(Three(5,10))


const Four = (num1,num2)=>  (num1 + num2)
console.log("Four implict method")
   
console.log(Four(5,11))


const Five = (num1,num2)=>  (num1 + num2)
console.log("Four implict method")
   
console.log(Four(5,11))