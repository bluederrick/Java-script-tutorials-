const person = {
    name: 'John',
    sayname : function (name) {
        console.log(`this is my ${name}`)}

    }
function sayname(){
    console.log(`this name is ${this.name}`)

}

sayname.call(person)