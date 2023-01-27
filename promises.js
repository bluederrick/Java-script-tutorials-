let v = 4 - 3; 
    if (v === 1){
console.log(" v ios corrected")  
    }
    else{console.log(" v is wrong ");}

    v.then((message )=>{
        console.log("v is correctd " + message);
    }).catch (()=>{console.log("v does not exist " + message) });