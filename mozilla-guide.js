// Standard guide ECMAScript 2015
// Language specifications
//Input: Reading, writing

// output 1: pomodoro 10 min-s
/*
scripting language. Only for browsers. Server side or web side. U can use both direction to use it.
Js has not any class or encapsulation inheritance. You can use as function. Function properties and property to inside functions.
*/

// input time 
// what is meaning of not inheritence and functional structure for js

// Mozilla JS try
// What is js?
// It is lightweighted, interpreted runtime interpret possible, functional base, it can used as variable in function into function.
// Mozilla -> blog for meaning of class and function - steve-yegge - Was not have much good explanations for me
// Mozilla class-based vs prototype(properties) - based
/*
Js has not have any kind of class structure until ECMA2015(ES6). in ES6, class structure used in js.
using constructor, this, super and prototype.
in js - variable can be function function can be prototype.
inheritence == prototype(this, super)
*/
// Creating hierarchy

// JS
class Employee {
  constructor() {
    this.name = '';
    this.dept = 'general'
  }
}
// JAVA
/*
public class Employee {
   public String name = ""
   public String dept = "general"
}
*/

//JS
function Manager() {
  Employee.call(this)
  this.reports = []
}
Manager.prototype = Object.create(Employee.prototye)
Manager.prototype.constructor = Manager

function WorkBee() {
  Employee.call(this)
  this.projects = []
}

WorkerBee.prototype = Object.create(Employee.prototype)
WorkerBee.prototype.constructor = WorkerBee

// JAVA
/*
public class Manager extends Employee {
  public Employee[] reports =
  new Employee[0]
}

public class WorkBee extends Employee {
  public String[] projects = new String[0]
}
*/

//JS

function SalesPerson() {
  WorkerBee.call(this)
  this.dept = 'sales'
  this.quota = 100
}
SalesPerson.prototype = Object.create(WorkerBee.prototype)
SalesPerson.prototype.constructor = SalesPerson

function Engineer() {
  WorkerBee.call(this)
  this.dept = 'Engineering'
  this.machine = ''
}
Engineer.prototype = Object.create(WorkerBee.prototype)
Engineer.prototype.constructor = Engineer


// JAVA
/*
public class Salesperson extends WorkerBee {
  public String dept = "sales"
  public double quota = 100.0
}

public class Engineer extends WorkerBee {
  public String dept = "engineering"
  public String machine = ""
}
*/






