// const score = 500
// if(score>600){
//     console.log("fly")
// } else{
//     console.log("not fly")
// }


const userloggedIn = true
const debitCard  = true
const loggedInFromMail = true
const loggedInFromGoogle = false

if( userloggedIn && loggedInFromMail && debitCard){
    console.log("allow"); 
}

if( userloggedIn || loggedInFromMail || debitCard){
    console.log("allow him"); 
}


const price = 500
if(price == 500) console.log(price);   // We can also write like this . But this is not good way to write the code.

const checkBalance = 3000

if(checkBalance==300){

    console.log("OOPs! your bank balance is too low");
    
}else if(checkBalance <1000){
    console.log("Maintain your current bank balance");
    
}
else if(checkBalance == 3000){
    console.log("Current bank balance is in maintain ");
    
}

//***************************************************************/


const month = 1
switch (month) {

    case 1:
        console.log("jan");
        
        break;

         case 2 :
        console.log("Feb");
        
        break; 
        
        case 3 :
        console.log("Mar");
        
        break; 
        
        case 4 :
        console.log("Apr");
        
        break;
        
        case 4 :
        console.log("May");
        
        break;

    default:
                console.log("case is not match");

        break;
}


// Falsy value 

// false , 0 , -0 , null , undefined , Nan , BigInt 0n , ""


// Truthy value 

// something is write in string is truthy value , including space

//  "0" , true , [] , {} , function(){}



const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("yes it is truthy value");
    
}



// Nullish Coalescing Operator (??) : Null undefined

const val1 = 10 ?? 5
const val2 = null ?? 89
const val3 = undefined ?? 108

console.log(val1);
console.log(val2);
console.log(val3);


// Ternary Operator

// Condition ? true : false     Syntax

const chaiprice = 25

chaiprice <=15 ? console.log("more than fifteen") : console.log("you can buy it.");

