// using forEach loop on array.

const fruitName = [ " Mango" , "Apple" , "Banana" , " Litchi"]

fruitName.forEach(function (fruit) {    // Normal function
//    console.log(fruit);   
})

fruitName.forEach((fruit) => {   // Arrow function
//  console.log(fruit);
 
})


// here we get all the values like item name , index value  , whole array.

fruitName.forEach(( item , index , arr) =>{
    console.log(item , index, arr);
    
})


// Another way to get value using function

function fruit1(item2) {
    // console.log(item2);
    
}
// fruitName.forEach(fruit1)


// here i am creating an Object inside an Array . And then how we access them

const create_obj_in_array = [
    {
username : "tarun",
email : "tarun@12345"
    },    {
username : "vishal",
email : "vishal@12345"
    },    {
username : "suraj",
email : "suraj@12345"
    }
]

create_obj_in_array.forEach((item) => {
    console.log(item.username);
    
})