const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'

}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "c++", "cpp", "java"]

for(const key in programming){
    console.log(programming[key])
}

const map = new  Map()
 map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for(const [key, value] in map){
   console.log(key, ':-', value);
 }
