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

// Adding greet method to Person prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor function with the name and age arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Setting the constructor property correctly for the Employee prototype
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
};

// Example usage:
var person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John, I am 30 years old.

var employee1 = new Employee("Jane", 25, "Manager");
employee1.greet(); // Output: Hello, my name is Jane, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Jane, I am 25 years old, and my job title is Manager.

