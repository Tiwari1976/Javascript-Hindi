// function sayMyName(){
//     console.log("N")
//     console.log("A")
//     console.log("V")
//     console.log("E")
//     console.log("E")
//     console.log("N")
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 7)

//console.log("Result is: ", result)

function loginUserMessage(username){
    if(username === undefined){
        return ("Please enter a username");
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "Naveen",
    price: 500
}

function handleObject(anyObject){
   // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username: "Dilip",
    price: 299
})

const myNewArray = [200, 300, 400, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 500, 700, 600]))