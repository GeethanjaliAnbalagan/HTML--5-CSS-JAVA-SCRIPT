// It is important to note that we can not delete inherited properties or non-configurable properties
// in this manner.
let obj1 = {
	propfirst : "Baby"
}
// Output : Name
console.log(obj1.propfirst);
let obj2 = Object.create(obj1);

// Output : Baby
console.log(obj2.propfirst);
	
// Output : true.
console.log(delete obj2.propfirst);

	// Surprisingly Note that this will return true
	// regardless of whether the deletion was successful

	// Output : Baby	
	console.log(obj2.propfirst);
	//Baby
	console.log(obj1.propfirst);

