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

// Working with objects. Details of the object model
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

function Employee(name, dept) {
  this.name = name || ''
  this.dept = dept || 'general'
}

/*
public class Employee {
  public String name
  public String dept
  public Employee () {
    this("", "general")
  }
  public Empoyee (String name) {
    this(name, "general")
  }
  public Employee (String name, String dept) {
    this.name = name
    this.dept = dept
  }
}
*/
function WorkerBee(projs) {
  this.projects = projs || p[]
}
WorkerBee.prototype = new Employee

/*
public class WorkerBee extends Employee {
  public String[] projects
  public WorkerBee () {
    this(new String[0])
  }
  public WorkerBee (String[] projs) {
    projects = projs
  }
}
*/
function Engineer(mach) {
  this.dept = 'engineering'
  this.machine = mach || ''
}
Engineer.prototype = new WorkerBee

/*
public class Engineer extends WorkerBee {
  public String machine
  public Engineer () {
    dept = "engineering"
    machine = ""
  }
  public Engineer (String mach) {
    dept = "engineering"
    machine = mach
  }
}
*/

function Employee() {
  this.dept = 'general'
}
Employee.prototype.name = ''

function WorkerBee() {
  this.projects = []
}
WorkerBee.prototype = new Employee

var amy = new WorkerBee
Employee.prototype.name = 'Unknown'

var f = new Foo()
var isTrue = (f instanceof Foo)
var chris = new Engineer('Pigman, Chris', ['jsd'], 'fiji')

chris.__proto__ == Engineer.prototype
chris.__proto__.__proto__ == WorkerBee.prototype
chris.__proto__.__proto__.__proto__ == Employee.prototype
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null

function instanceOf(object, constructor) {
  object = object.__proto__
  while (object != null) {
    if (object == construct.prototye)
      return true
    if (typeof object == 'xml') {
      return constructor.prototye == XMLDocument.prototype
    }
    object = object.__proto__
  }
  return false
}
// Global variable

var idCounter = 1

function Employee(name, dept) {
  this.name = name || ''
  this.dept = dept || 'general'
  this.id = idCounter++
}

var idCounter = 1

function Employee(name, dept) {
  this.name = name || ''
  this.dept = dept || 'general'
  this.id = idCounter++
}

function Manager(name, dept, reports) {... }
Manager.prototype = new Employee

function WorkBee(name, dept, projs) {... }
WorkerBee.prototype = new Employee

function Engineer(name, projs, mach) {... }
Engineer.prototype = new WorkerBee

function SalesPerson(name, projs, quota) {... }
SalesPerson.prototype = new WorkerBee

var mac = new Engineer('Wood, Mac')

function Employee(name, dept) {
  this.name = name || ''
  this.dept = dept || 'general'
  if (name)
    this.id = idCounter++
}

// No multiple inheritence but there is some trick for it

function Hobbyist(hobby) {
  this.hobby = hobby || 'scuba'
}

function Engineer(name, projs, mach, hobby) {
  this.base1 = WorkerBee
  this.base1(name, 'engineering', projs)
  this.base2 = Hobbyist
  this.base2(hobby)
  this.machine = mach || ''
}
Engineer.prototype = new WorkerBee

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo')

dennis.name == 'Doe, Dennis'
dennis.dept == 'engineering'
dennis.projects == ['collabra']
dennis.machine == 'hugo'
dennis.hobby == 'scuba'

Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd']


// Summary
/*
JS is function-property based. class inheritance go through function object prototype from properties
however multiple inheritance not allowed, or || is possible and useful.
*/

// 





