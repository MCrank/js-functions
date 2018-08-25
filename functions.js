// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal) {
  return `${animal} stix`;
}

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat')); // cat stix
console.log('bear:', nuggetizer('bear')); // bear stix

// Arrow function (Anonymous?)
const nuggetizer2 = animal => {
  return `${animal} jerkey`;
};

console.log('deer:', nuggetizer2('deer'));
console.log('cow:', nuggetizer2('cow')); // cat stix
console.log('snake:', nuggetizer2('snake')); // bear stix

const bearSticks = nuggetizer('bear');
const nomnom = (person, food) => {
  return `${person} devoured ${food}`;
};

console.log(nomnom('Marco', bearSticks)); // Marco devoured bear stix

// Function numberAdder that takes in a number and returns that number + 3
// so if input = 22, output=25

const numberAdder = num => {
  const finalNumber = num + 3;
  printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22); //25
numberAdder(2); //5
// console.log('Number Adder:', numberAdder(22));
