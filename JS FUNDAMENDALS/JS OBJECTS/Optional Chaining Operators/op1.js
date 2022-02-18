function getUser(id) {

    if(id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...
    
    // if user was found, return the user
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}
let user = getUser(1);
let profile = user.profile;
console.log(profile);

let user1 = getUser(2);
let profile1 = user1 && user1.profile;
console.log(profile1);

//The optional chaining operator implicitly 
//checks if the user is not null or undefined before attempting to access the user.profile:
let user3 = getUser(2);
let profile2 = user3 ?. profile;
console.log(profile2);

//Technically, it is equivalent to the following
let user4 = getUser(2);
let profile3 = (user4 !== null || user4 !== undefined)
            ? user.profile
            : undefined;
console.log(profile3);

// To avoid the error, you can use the optional chaining operator multiple times like this
let user5 = getUser(-1);
let avatar12 = user5 ?. profile ?. avatar;
console.log(avatar12);

