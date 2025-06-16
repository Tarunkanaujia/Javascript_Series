const coding = ["js" , "py" , "Ruby"]

const vallue = coding.forEach((item1) => {

    // console.log(item1);
    
})
// console.log(vallue);   // We can not hold this value.


const Num1 = [1,2,3,4,5,6,7,8,9,10]

const valuehold = Num1.filter((item) => item > 5)
// console.log(valuehold)

// second way 

const newNums = []

Num1.forEach((num) => {
    if(num > 5 ){
       newNums.push(num)
        
    }
    
})
// console.log(newNums);


//***************************************************************** */

let fruitPrice = [
    {
        name : "mango",
        price : "30"
    },
    {name : "mango",
        price : "40"
    },

     {name : "Apple",
        price : "50"
    },


     {name : "Litchi",
        price : "60"
    }
]

const fruitPrices =  fruitPrice.filter((item) => { 
    return item.price >= "30" && item.name === "mango"
})

console.log(fruitPrices);

