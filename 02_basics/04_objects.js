//const tinderUser = new Object();----singleton object and next line non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Naaveen"
tinderUser.isloggedin = false

//console.log(tinderUser)

const regularUser = {
    email : "naveen@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Naveen",
            lastname : "Tiwari"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 :"a", 2 :"b"}
const obj2 = {3 :"c", 4 :"d"}
const obj4 = {5 :"e", 6 :"f"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

const users = [
    { id : 1,
        email : "n@gmail.com"
    },
    { id : 1,
        email : "n@gmail.com"
    },
    { id : 1,
        email : "n@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isloggedin"))
// console.log(tinderUser.hasOwnProperty("islogged"))

const course = {
    coursename : "js in hindi",
    price : "888",
    courseInstructor : "Naveen"
}
const {courseInstructor: instructor } = course
//console.log(courseInstructor)
console.log(instructor)

// {
//     "name" : "Naveen",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }