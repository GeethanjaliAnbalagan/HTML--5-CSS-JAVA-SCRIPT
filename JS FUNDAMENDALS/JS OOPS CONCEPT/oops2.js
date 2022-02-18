//Using Object.create() method: The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 

// Object.create() example a
// simple object with some properties
const coder = {
	isStudying : false,
	printIntroduction : function(){
		console.log(`My name is ${this.name}. Am I
		studying?: ${this.isStudying}.`)
	}
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();
