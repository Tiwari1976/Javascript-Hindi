// const arr = [1,2,3,4,5]

// for(const num of arr){
//     //console.log(num);
// }

// const greeting = ("Hello World!")

// for(const greet of greeting){
//     //console.log(`Each char id ${greet}`)
// }

// const map = newma Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}