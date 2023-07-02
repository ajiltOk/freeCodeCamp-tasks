const Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(newFirstName) {
     return firstName = newFirstName;
  };
  this.setLastName = function(newLastName) {
     return lastName = newLastName;
  };
  this.setFullName = function(newFullName) {
      firstName = bob.setFirstName(newFullName.split(' ')[0]);
      lastName = bob.setLastName(newFullName.split(' ')[1]);
  };
};

const bob = new Person('Bob Ross');
