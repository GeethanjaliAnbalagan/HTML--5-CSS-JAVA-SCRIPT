// Const objects can be modified

const user = {
    name: "John"
  };
  console.log(user.name);
  user.name = "Pete"; // (*)
  
  console.log(user.name); // Pete