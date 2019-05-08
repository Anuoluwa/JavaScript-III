/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayAge () {
    console.log(`My age is ${this.age}`)
  }
  
  const user = {
    name: 'Anu',
    age: 26
  }

  window.age = 27

  sayAge() // My age is undefined

// Principle 2

// code example for Implicit Binding

const student = {
    firstName: 'Anuoluwapo',
    lastName: 'Apiti',
    class: 'WEBEU2',
    email: 'anu.apt@anu.com',
    fullName () {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    },
    getClass() {
        console.log(`The currently class is ${this.class}`)
    }
}
student.fullName();
student.getClass();


// Principle 3

// code example for New Binding

function Employee (name, email, password, mealTicket) {
    this.name = name,
    this.email = email,
    this.password = password,
    this.logIn = function() {
        console.log(`My name is ${name}, is this my login details; ${this.email} and ${this.password}.`)
    }    
}

const alex = new Employee('Alex', 'alex@ng.com', 'qwerty');
const borja = new Employee('Borja', 'borja@ng.com', 'asdfgh');

alex.logIn();
borja.logIn();



// Principle 4

// code example for Explicit Binding

function studentInfo() {
    console.log(`The is the student information :
     ${this.class},
     ${this.email},
     ${this.stack},
    `)
}

const lambda = {
    firstName: 'John',
    lastName: 'Doe',
    class: 'WEBEU2',
    email: 'anu.apt@anu.com',
    stack: 'Computer Science/ JavaScript',
    speakInfo() {
        console.log(`My is ${this.name} ${this.lastName}, I'm in Lambda ${this.class}, studying ${this.stack} `)
    }
}
studentInfo.call(lambda);
