function createUser(name, surname) {
  return {
    name,
    surname,
  };
};

let user = createUser("John", 'Smith');

console.log(user.name);
console.log(user.surname);