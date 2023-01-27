//types of scope 

//block scope, function scope , global scope

//block scope can be only accessed inside the block 

if( false){
    const name = "derrick"
    console.log("name is " + name);
}
if(true){
    const name = "derrick"
    console.log("name is " + name);
}
    




function scope (){
    const name = "derrick";
    console.log("my name is " + name);
}
//can be accesed inside the scope of function scope only



// glabal scope can be accessed inside and outside the function 
let school = "emarid college"

function schools() {
    console.log(school);
}

schools()