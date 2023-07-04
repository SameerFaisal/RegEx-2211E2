// let str='2THIS IS 1 BIKE'
// let pattern=/[^A-M]/gi

// let text = "re, green, red, 8723465 green, gren, gr, blue, yellow";
// let pattern= /\d/g;
// console.log(`Original string: ${text}`)
// let result=text.replace(pattern,'Purple')
// console.log(`Replaced string: ${result}`)


// let pattern =/\w/g
// console.log(text.match(pattern))
// console.log(text.search(pattern))
// console.log(pattern.test(str))


// let ph=prompt("Enter your phone number")
// let pattern= /\d/g;
// let result=ph.match(pattern)
// console.log(result.length)

// let stdName=prompt("Enter your name")
// let pattern=/.com\b/gi
// let result=pattern.test(stdName)
// if(result===true){
//     alert(`Email is valid`)
// }
// else if(result===false){
//     alert('Invalid email address.')
  
// }

// let n=prompt("Enter your name")
// let pattern=/[A-Z]/g
// let result=pattern.test(n[n.length-1])

// console.log(result)

// let text = "Hellooo World! Hello W3Schools!"; 

// let pt=/lo*/gi
// let result = text.match(pt);

// console.log(result)

// let text = "100, 1000 or 10000?";

// let pattern=/\d{11}/g

// let result = text.match(pattern);

// console.log(result)

// let text = "10, 100, 1000 , 10000 , 100000";

// let pattern=//g

// let result = text.match(pattern);

// console.log(result)

let text = "Is this his";
let pattern = /is(?= all)/i;
let result = pattern.test(text);

console.log(result)