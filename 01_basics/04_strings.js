//const name = "Naveen"
//const repoCount = 45

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Naveen-gta')
//console.log(gameName [0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherName = gameName.slice(-8, 4);
console.log(anotherName);

const newStringOne ="  Naveen  "
console.log(newStringOne);
console.log(newStringOne.trim());