const bananaDiv = document.getElementById('bananaDiv');
bananaDiv.innerHTML = "I'm a banana";

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

//counter = 3
console.log('This is my first counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'Marco';
const lastName = 'Crank';
// greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// Object shorthand notation
let name = 'Marco';
let age = '100000';

// let person = {
//   name: name,
//   age: age
// };

// If variables are names the same as the key you can just use the var name
let person = { name, age };

console.log('Person:', person.name);
