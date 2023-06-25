// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;

// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
};

window.Person = Person;
window.Employee = Employee;

