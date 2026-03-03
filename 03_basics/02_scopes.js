var c =300   //<---- global scope

if(true) {
    let a=10
const b=20  
 //console.log("INNER: ", a)                     //<-----block scope

}


//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "Naveen"

    function two(){
        const website = "youtube"
        //console.log(username);

    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "Naveen"
    if(username === "Naveen"){
        const website = " youtube"
        //console.log(username, website);
    }
}

// ++++++++++++++++++++++++++++ Interesting  ++++++++++++++++++++++++

console.log(addone(5))

 function addone(num){
    return num + 1
 }

 console.log(addTwo(5))

 function addTwo(num){
    return num + 2
 }

