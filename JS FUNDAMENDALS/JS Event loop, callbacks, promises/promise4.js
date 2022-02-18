//Promise Rejected
var promise = new Promise(function(resolve, reject) {
	throw new Error('Some error has occurred')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	})
	.catch(function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	});
