var database = [
    {
        username: "max",
        password: "secret"
    },
    {
        username: "dog",
        password: "123"
    },
    {
        username: "cat",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Learning is great!"
    },

    {
        username: "Alex",
        timeline: "I like my cat!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPropmpt = prompt("What's your password?");

function isUserValid (username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        } 
        
    }
    return false;
}

function signIn (username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password")
    }
}


//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsFeed);
//     }
//     else {
//         alert("Sorry, wrong username or password")
//     }
// }

signIn(userNamePrompt, passwordPropmpt);
