const d = new Date ()
console.log(d)
//printes out the current date and time

const v = d.getMonth()
console.log(v)
const n = d.setTime()

console.log(n)
 // date convertion to Universal time format
const y = new Date('2022-12-13T15:21:42.749Z')
var date = y.toUTCString()

console.log(date)
// gives us the current hour 
var date = y.getUTCHours()
console.log(date)


