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

function Manager(name, dept, reports) {
  ...
}
Manager.prototype = new Employee

function WorkBee(name, dept, projs) {
  ...
}
WorkerBee.prototype = new Employee

function Engineer(name, projs, mach) {
  ...
}
Engineer.prototype = new WorkerBee

function SalesPerson(name, projs, quota) {
  ...
}
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

// Hoisting
//
//variable
console.log(x === undefined) //true
var x = 3

var myvar = 'my value'

(function () {
  console.log(myvar) // undefined
  var myvar = 'local value'
})
// function

foo()

function foo() {
  console.log('bar')
}

baz()

var baz = function () {
  console.log('baz2')
}

// null is not NULL it is non existing meaning
// dynamic auto conversions possible

// js Does not convert numeric to string

'37' - 7 // 30
  '37' + 7 // 

// Basic string literals
`in javaScript '\n' is a line-feed`

// Multiline strings
`in JavaScript, template strings can run over
multiple lines, but double and single quoted strings
cannot`

// String interpolation
var name = 'Bob',
  time = 'today'
`Hello ${name}, how are you ${time}`

// Construct an HTTP request prefix used to interpret the
// replacements and construction

POST `http://foo.or/bar?a=${a}&b=${b}
      Content-Type: application/json
      X-Credentials: ${credentials}
      {"foo": ${foo},
        "bar": ${bar}}`(myOnReadyStateChangeHandler)

// try catch
function getmonthName(mo) {
  mo = mo - 1 // adjust month number for array index (1 = Jan, 12 Dec)

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  if (months[mo]) {
    return months[mo]
  } else {
    throw 'InvalidMonthNo' // Throw keywords is used here
  }
}

try { // statements to tr
  monthName = getmonthName(myMonth)

} catch (e) {
  monthName = 'unknown'
  logMyErrors(e) // pass exception object to error handler -> your own function
}

// function

function square(something) {} // function declaration
const square = function (something) {} // function expression

// This means that function hoisting only works with function declarations—not with function expressions.

// Recursion
// normal
var x = 0
while (x < 10) { // "x < 10" is the loop condition
  x++
}

function loop(x) {
  if (x >= 10)
    return
  loop(x + 1)
}
loop(0)

function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1

  return a * b
}

multiply(5)

// rest parameter 

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x)
}

var arr = multiplier(2, 1, 2, 3)

// Arrow function
// Identifier => Expressions 
// skip typing function and return
var a = [
  'dan',
  'din',
  'don',
  'pan'
]

var a2 = a.map(function (s) {
  return s.length
})

console.log(a2)

var a3 = a.map(s => s.length)

console.log(a3)

//es5

var selected = allJobs.filter(function (job) {
  return jobs.isSelected()
})
//es6
var selected = allJobs.filter(jobs => jobs.isSelected())

//es5
var total = values.reduce(function (a, b) {
  return a + b
}, 0)
//es6
var total = values.reduce((a, b) => a + b, 0)

//es5
$("#confetti-btn").click(function (event) {
  playTrumpet();
  fireConfettiCannon();
});
//es6
$("#confetti-btn").click(event => {
  playTrumpet();
  fireConfettiCannon();
});

//es6
var chewToys = puppies.map(puppy => {}); // BUG!
var chewToys = puppies.map(puppy => ({})); // ok

// ES6
{
  addAll: function addAll(pieces) {
    _.each(pieces, piece => this.add(piece));
  }

}

// ES6 with method syntax
{
  addAll(pieces) {
    _.each(pieces, piece => this.add(piece));
  }
}

//No seperate this
//es5
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

//es6
function Person() {
  this.age = 0

  setInterval(() => {
    this.age++
  }, 1000)
}

var p = new Person()

// eval

console.log(eval('2 + 2'))
// expected output: 4

console.log(eval(new String('2 + 2')))
//expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'))
// true

console.log(eval('2 + 2') === eval(new String('2 + 2')))
// false

function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return "Number is Infinity!";
}

console.log(div(0));
// expected output: "Number is Infinity!""

console.log(div(1));
// expected output: "Number is NOT Infinity."

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees; // true
3 in trees; // true
6 in trees; // false

var myString = new String('coral');
'length' in myString; // true

//objects
var mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998
};
'make' in mycar; // true
'model' in mycar; // true

// spread

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

// Regular expressions

// Assertion

lineLong = `tey, ihe light-greon apple
tangs on ihe greon traa`

lineLong = lineLong.replace(/^t/gim, 'h') //fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.

lineLong = lineLong.replace(/aa$/gim, 'ee.') // fix  'traa' => 'tree'.

lineLong = lineLong.replace(/\bi/gim, 't') // fix  'ihe' but does not touch 'light'.

lineLong = lineLong.replace(/\Bo/gim, 'e') // fix  'greon' but does not touch 'on'.

let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit))
let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));
let regex = /First(?= test)/g;
console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi // ["Do you want to have an orange?"] 

// Group and Ranges
var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g; // Number of vowels: 25

let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null); // 
// Character classes
var aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
var regexpWordStartingWithA = /\b[aA]\w+/g
console.table(aliceExcerpt.match(regexpWordStartingWithA)); // ['Ada', 'and', 'at', 'all']

var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25

//exec

var matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);

//test
var str = 'table football';

var regex = RegExp('foo*');
var globalRegex = RegExp('foo*', 'g');

console.log(regex.test(str)); // expected output: true

//matchAll
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];

console.log(array[0]); // Array ["test1", "e", "st1", "1"]

// Array indexed collections

// Array

// Creating array object

var arr = new Array(element, element1, ..., elementN)
var arr = Array(element, element1, ..., elementN)
var arr = [element, element1, ..., elementN]

// length - length property is special; it always returns the index of the last element plus one

var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

// iterating

var colors = ['red', 'green', 'blue']
colors.forEach(function (color) {
  console.log(color)
})

var colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))

// slice(start_index, upto_index)

var myArray = new Array('a', 'b', 'c', 'd', 'e')
myArray = myArray.slice(1, 4) // starts at index 1 and extracts all elements
// until index 3, returning ["b","c","d"]

var myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
//["1", "a", "b", "c", "d", "5"] //["2", "3", "4"]
var saying = new Map()
sayings.set('dog', 'woof')
saying.set('cat', 'meow')
saying.set('elephant', 'toot')
saying.size
saying.get('fox') // undefined
saying.has('bird') // false
saying.delete('dog')
saying.has('dog') // false

// Objects

objectName.propertyName // access the properties of an object with a simple dot-notation

var myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'
myCare.year = 1969

myCar.color // unassigned properties undefined(and not null)
myCar['make'] = 'Ford' // bracket notation - access
myCar['modle'] = 'Mustang'
myCar['year'] = 1969

// four variables are created and assigned in a single go
// separated by commas
var myobj = new Object(),
  str = 'myString',
  tand = Math.random(),
  obj = new Object()

// String or symbol property name
var propertyName = 'make'
myCar[propertyName] = 'Ford'

propertyName = 'model'
myCar[propertyName] = 'Mustang'

// for....in
function showProps(obj, objName) {
  var result = ``
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the
    // object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`
    }
  }
}

console.log(Object.keys(object));
console.log(Object.getOwnPropertyNames(object1));

// Constructor function

function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

var mycare = new Car('Eagle', 'Talon TSi', 1993)

// object init

var o = {
  a: 7,
  get b() {
    return this.a + 1
  },
  set c(x) {
    this.a = x / 2
  }
}

console.log(o.a) // 7
console.log(o.b) // 8
o.c = 50
console.log(a.a) // 25

//delete properties 
delete myobj.a;
delete g;

// Promise
function successCallback(result) {
  console.log("Ausdio file ready at URL: " + result)

}

function failureCallback(error) {
  console.error("Error generating audio file: " + error)
}

createAudioFileAsunc(audioSettings, successCallback, failureCallback)

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let iterationCount = 0

  const makeRangeIterator = {
    next: function () {
      let result
      if (nextIndex < end) {
        result = {
          value: nextIndex,
          done: false
        }
        nextIndex += step
        iterationCount++
        return result
      }
      return {
        value: iterationCount,
        don: true
      }
    }
  }
  return renageIterator
}

let it = makeRangeIterator(1, 10, 2)

let result = it.next()
while (!result.done) {
  console.log(result.value)
  result = it.next()
}

console.log("iterated ove sequence of size: ", result.value)

// proxy

var handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42
  }
}

var p = new Proxy({}, handler)
p.a = 1
console.log(p.a, p.b)

