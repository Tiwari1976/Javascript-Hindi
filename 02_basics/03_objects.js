const mySym = Symbol("key 1")

const JsUser = {
    name : "Naveen",
    "full name" : "Naveen Tiwari",
    [mySym] : "mykey1",
    age : 25,
    location : "Mumbai",
    email : "naveen@example.com",
    isloggedin : true,
    lastlogindays : ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "naveen@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "naveen@microsoft.com"
//console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());