var promise = new Promise(function(resolve, reject) {
    const x = "geethanjali";
    const y = "geethanjali";
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are a GOOD');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
    