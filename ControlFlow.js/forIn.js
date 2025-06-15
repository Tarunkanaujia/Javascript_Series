
// Forin loop on Object 

const Country = {
 In : " India",
 USA : "United State of America",
 UAE : " United Arab Emirates"
}
for (const key in Country) {
//   console.log(`${Country[key]} , ${key}`);  // here we can iterate because we are using "for in" loop.
  
}


// Here  I am trying to use "for in loop on  Array "

const name = ["Vishal" , " Suraj" , "ROhit" , " Tarun" , "Abhishek" ,  " Nitesh"]

for (const key in name) {
//    console.log(key);   // this is for keys

 //  console.log(name[key]);   // this is for Vaules
   
}

// Here  I am trying to use "for in loop on  map but it is not iterable"

const map = new Map()

map.set('IN' , "India")
map.set('SA' , "South Africa")
map.set('USA' , "United State Of America")
map.set('UAE' , "United Arab Emirates")
map.set('UAE' , "United Arab Emirates")


for (const key in map) {
 console.log(key);
 
}