const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What is ur weight?`, value => {
    //console.log(`Hi ${value}!`)
    var x = value;
  
    console.log(value);
    readline.close()
  })
  