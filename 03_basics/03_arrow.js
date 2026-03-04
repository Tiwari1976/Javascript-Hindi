const users = {
    username: "Naveen",
    price: 299,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// users.welcomeMessage();
// users.username = "kavin"
// users.welcomeMessage();

// function chai(){
//     let username = "Naveen"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Naveen"
//     console.log(this.username)
// }
const chai = () =>{
    let username = "Naveen"
    console.log(this.username)
}

chai()