//A function that accepts up to three arguments.
//  The map method calls the callbackfn function one time for each element in the array.
//  Calls a defined callback function on each element of an array, and returns an array that contains the results.

const number = [1,2,3,4,5,6,7,8,9,10]

const newNums = number.map((num) => num + 100)
// console.log(newNums);


// check through foreach.

 number.forEach((item) => {
  item = item * 10
    // console.log( item)

 })


 /// Chaining Method

const valuecheck =  number.map((item) => item * 10)
                        .map((item) => item + 50)
                        .filter((item) => item >= 70)
// console.log(valuecheck);



// Reduce Method

const someValue = [1,2,3,4]

const Totalsum = someValue.reduce(function (initialval ,currentval) {
    // console.log(`value of initailval is ${initialval} and currentval is ${currentval}`);
    
    return initialval + currentval
},0)
// console.log(Totalsum);

const Tsum = someValue.reduce((inital , current) => inital+current , 0 )
// console.log(Tsum);



const Courses = [

    {course : "js",
    price : 1000
},
    {course : "Backend developer",
    price : 8000
},
    {course : "data science",
    price : 23000
}
]

const subtotal = Courses.reduce((acc , curr) => acc + curr.price  , 0 )
console.log(subtotal);







