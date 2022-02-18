let firstName = Symbol('first name'),
    lastName = Symbol('last name');

console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)

console.log(typeof firstName); // symbol

/** Since symbols are primitive values, you can use the  typeof operator to check whether a variable is a symbol. ES6 extended  typeof to return the symbol string when you pass in a symbol variable:
 */
 console.log(typeof firstName); // symbol


 // Sharing symbols
 let ssn = Symbol.for ('ssn');

 let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true

console.log(Symbol.keyFor(citizenID)); // 'ssn'
let systemID = Symbol('sys');
console.log(Symbol.keyFor(systemID)); // undefined