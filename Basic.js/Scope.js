  let a = 10
  const b = 20

  if(true){
    let a = 25
    const b = 250
    // console.log ("Inner",a)
    // console.log ("Inner",b)
  }

    // console.log ("outer",a)
    // console.log ("outer",b)

// ****************Function Scope check ******************

    function one (){
      const username = "Tarun"
      function two(){
        const website = "Youtube"
        console.log(username);
        
      }
      // console.log(website);
      two()
    }
    // one()


    // *************** Through loops ********************


    if(true){
      const username = "Virat"
      if(username === "Virat"){
        const website = "Youtube"
    //  console.log(username + website);
     
      }
      // console.log(website);
      
    }
      // console.log(username);


      // *************************************

      one(4)   // Can access 'One' before initialization
      function one (num){
        return num + 1 
      }

      
      holdfun(5)  // Cannot access 'holdfun' before initialization
       const holdfun = function one (num){
        return num + 1 
      }