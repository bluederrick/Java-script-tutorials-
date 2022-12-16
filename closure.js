// a combination of bunled functions
// function outer (){
// let counter = 0;
// function inner (){
//     counter = counter + 1 || counter ++;
// }
// inner();
// console.log(counter);
// }
// outer();
// outer();


function outer (){
    let counter = 0;
    function inner (){
        counter = counter + 1 || counter ++;
    }
    return inner;
    console.log(counter);
    }
    const fn =outer();
     
    fn();
    fn();
    
     