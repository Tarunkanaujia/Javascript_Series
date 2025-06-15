//  For of loop  ************************

const arr = [1,2,3,4,6,7,8,9]
for (const num of arr) {
    console.log(num);
    
}


const username = "Tarun Kohli"

for (const name of username) {
    // console.log(name);
    
}

// Map ************************

const map = new Map()

map.set('IN' , "India")
map.set('SA' , "South Africa")
map.set('USA' , "United State Of America")
map.set('UAE' , "United Arab Emirates")
map.set('UAE' , "United Arab Emirates")


for (const Maps of map) {      // using "for of loop on "Map"
   // console.log(Maps);   // output : comes in array form 
 
}


for (const [key , Value] of map) {   // De - Structure
    console.log(key , " : ",Value)
}



 // Trying to use "for of loop on object" ****************

const MyObject = {
    name : "Tarun",
    ID : "123456"
}
for (const username of MyObject) {
    // console.log(username);           //MyObject is not iterable , if we use "for of" loop , but we can use "for of " loop
    
}