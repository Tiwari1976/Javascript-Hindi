// const temperature = 41;

// if (temperature < 40){
//     console.log("less than 50")
// } else {
//     console.log("temperature is greater than 50")
// }

const userLoggedIn = true
const debitCard = true

const userLoggedInFromGoogle  =true
const userLoggedInEmail= true

if(userLoggedIn && debitCard){
    console.log("Allow user to buy")
}


if(userLoggedInFromGoogle || userLoggedInEmail ){
    console.log("User Logged in")
}

