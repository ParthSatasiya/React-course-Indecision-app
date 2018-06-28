var varName = 'Parth';
var varName = 'Hardik';
console.log('varName', varName);

let letName = 'Parth';
letName = 'Hardik';
console.log('letName', letName);

const constName = 'Parth';
console.log('constName', constName);

//function scope

var fullName = 'Parth Satasiya';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);