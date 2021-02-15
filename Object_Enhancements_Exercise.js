/** @format */

//SAME KEYS AND VALUES ES2015
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// COMPUTED PROPERTY NAMES ES2015
let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

//OBJECT METHODS ES2015
const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};

// CREATE ANIMAL FUNCTION
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]: verb,
    [verb]() {
      console.log(noise);
    },
  };
}
