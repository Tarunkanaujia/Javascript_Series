  let a = 10
  const b = 20

  if(true){
    let a = 25
    const b = 250
    console.log ("Inner",a)
    console.log ("Inner",b)
  }

    console.log ("outer",a)
    console.log ("outer",b)