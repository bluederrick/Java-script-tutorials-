function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 4, 5));

//transform to sum(a,b,c) to sum (a)(b)(c)
//function currying is instead of callig all arguments at once we will call one at a time
// nesting all the function inside each other , on at a time
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn (a,b,c);
                    
            }

        }
    }
}

const curriedsum = 




