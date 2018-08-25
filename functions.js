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
