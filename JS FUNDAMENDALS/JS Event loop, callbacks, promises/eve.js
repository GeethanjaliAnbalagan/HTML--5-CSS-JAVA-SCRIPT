console.log("Before delay");

function delayBySeconds(sec) {
let start = now = Date.now()
while(now-start < (sec*1000)) {
	now = Date.now();
	console.log("delaying...");
}
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");
