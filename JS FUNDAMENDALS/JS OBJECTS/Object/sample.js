const obj = new Object();   //{}
obj.name ="geeth";
obj.location = "cbe";
obj.DOB = 1990;

obj.display = function(){
console.log(`${obj.name} from ${obj.location} in year ${obj.DOB}`);
            }
obj.display();