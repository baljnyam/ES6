// ES6 - Language Specification:
// https://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf


// Arrows and Lexical this

// Expression bodies
var odds = evens.map(v => v + 1)
var nums = evens.map((v, i) => v + i)

// statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v)
})

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriend() {
    this._friends.forEach(f =>
      console.log(this._name + " know " + f))
  }
}

// Lexical argument
function square() {
  let example = () => {
    let numbers = []
    for (let number of arguments) {
      numbers.push(number * number)
    }

    return numbers
  }
  return example()
}

square(2, 4, 7, 8, 11, 21)

/*Class
ES2015 classes are syntactc sugar over the prototype-based OO patterm.
Having a single convenient declarative from makes class patterns easies to us, amd encourages interoerability. classe support
prototype-based inheritance, sugar instance and static methods and constructors.
*/

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials)

    this.idMatrix = SkinnedMesh.defaultMatrix()
    this.bones = []
    this.boneMatrices = []
    //...
  }
  update(camera) {
    //...
    super.update()
  }
  static defaultMatrix() {
    return new THREE.Matrix4()
  }
}

// Enhance Onject Literals
/*Object literal are extended to support setting the prototype at construction,shorthand for foo:foo
assignments, defining methods and making super calls. Together, these also bring object literals and
class declarations closer together, and object-based design benefit from some of the same conveniences.*/

var obj = {
  // Set the prototype. "__proto__" or '__proto__' would also work.
  __proto__: theProtoObj,
  //Computed property name does not set prototype or trigger early error for
  // duplicate __proto__ properties.
  ['__proto__']: somethingElse,
  //Shorthand for 'handler: handler'
  handler,
  //Methods
  toString() {
    // Super calls
    return "d " + super.toString()
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42
}

  // Template String
  // Basic string literal string creation
  `This is a pretty little template string`

  // Multiline strings
  `In ES5 this 
is not legal.`

// Intropolate variable bindings
var name = "Bob",
  time = "today"
    `hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

//Construct an HTTP request prefix is used to intrepret the replacements and 
//construction
GET`http://foo.org/bar?a=${a}&b=${b}
Content-Type:application/json
X-Credentials: ${credentials}
{"foo": ${foo},
"bar": ${bar}}`(myOnReadyStateChangeHandler)

// Destructuring

//list matching
var [a, , b] = [1, 2, 3]
a === 1
b === 3

//object matching
var {
  op: a,
  lhs: {
    op: b
  },
  rhs: c
} = getASTNode()

var {
  op,
  lhs,
  rhs
} = getASTNode()

// can be used in parameter position
function g({
  name: x
}) {
  console.log(x)
}
g({
  name: 5
})

//Fail-soft destructuring
var [a] = []
a === undefined

//Fail - soft destructuring with defaults
var [a = 1] = []
a === 1

// Destructuring +defaults arguments
function r({
  x,
  y,
  w = 10,
  h = 10
}) {
  return x + y + w + h
}
r({
  x: 1,
  y: 2
}) === 23

// Default + Rest + Spread

function f(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y
}
f(3) == 15

function f(x, ...y) {
  // y is an Array
  return x * y.length
}
f(3, "hello", true) == 6

function f(x, y, z) {
  return x + y + z
}

f(...[1, 2, 3]) == 6

//Let + Const
function f() {
  {
    let x {
      // This is ok since it's a block scoped name
      const x = "sneaky"
      //error, was just defined with `const` above
      x = "foo"
    }
    // This is ok since it was declared with `let`
    x = "bar"
    // error, already declared above in this block
    let x = "inner"
  }
}

// Iterator + For..Of
/* Iterator objects enable custom iteration like clr IEnumearble or java iterable. Generaliz for ..in to custom iterator-based iteration with for..of.
Don't require realizing an array, enabling lazy design pattern like LINQ*/

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1
    return {
      next() {
        [prem, cur] = [cur, pre + cur]
        return {
          done: false,
          value: cur
        }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break
  console.log(n)
}

// Iteratiobn is based on these duck-typed interface(using TypeScript type syntax for exposition only):
interface IteratorResult {
  done: Boolean
  value: any
}
interface Iterator {
  next(): IteratorResult
}
interface Iterable {
  [Symbol.iterator](): Iterator
}

//Generators
var fibonacci = {
  [Symbol.iterator]: function* () {
    var pre = 0,
      cur = 1;
    for (; ;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}

//typescript polyfill needed
interface Generator extends Iterator {
  next(value?: any): IteratorResult
  throw(exception: any)
}

// Comprehension removed from babel so it is dropped

// Modules 
export function sum(x, y) {
  return x + y
}

// Dynamic loading = 'System' is default loader
System.import("lib/math").then(function (m) {
  alert("2π = " + m.sum(m.pi, m.pi))
})

// Create execution sandboxes - new loadr

var loader = new loader({
  global: fixup(window) // replace 'console.log'
})
loader.eval("console.log(\"hello world!\")")

// Directly manipulate module cache

System.get("jquery")
System.set("jquery", Modul({
  $: $
})) // Warning: not yet finalized

// Map + Set + WeakMap + WeakSet

// Set
var s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true

// Maps
var m = new Map()
m.set("hello", 42)
m.set(s, 34)

// Weak Maps
var wm = new WeajMap()
wm.set(s, {
  extra: 42
})
wm.size === undefined

// Weak Sets
var ws = new WeakSet()
ws.add({
  data: 42
})
// Because the added object has no other references, it will not be held in the set

// Proxying a normal object
var target = {}
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`
  }
}

var p = new Proxy(target, handler)
p.world === "Hello, world!"

// Proxying a function object

var target = function () {
  return "I am the target"
}
var handler = {
  apply: function (receiver, ...args) {
    return " I am the proxy"
  }
}

var p = new Proxy(target, handler)
p() === "I am the proxy"

// There are traps available for all of the runtime-level meta-operations:

var handler = {
  // target.prop
  get: ...,
  // target.prop = value
  set: ...,
  // 'prop' in target
  has: ...,
  // delete target.prop
  deleteProperty: ...,
  // target(...args)
  apply: ...,
  // new target(...args)
  construct: ...,
  Object.getOwnPropertyDescriptor(target, 'prop')
  getOwnPropertyDescriptor: ...,
  // Object.defineProperty(target,'prop', descriptor)
  defineProperty: ...,
  // Object.getPrototypeOf(target), Reflect.getPrototypeOf(target),
  // target.__proto__, object.isPrototypeOf(target), object instanceof target
  getPrototypeOf: ...,
  // Object.setPrototypeOf(target), Reflect.setPrototypeOf(target)
  setPrototypeOf: ...,
  // for (let i in target) {}
  enumerate: ...,
  // Object.keys(target)
  ownKeys: ...,
  // Object.preventExtensions(target)
  preventExtensions: ...,
  // Object.isExtensible(target)
  isExtensible: ...
}

  // Symbols

  (function () {
    // module scoped symbol
    var key = Symbol("key")

    function MyClass(privateData) {
      this[key] = privateData
    }

    MyClass.prototype = {
      doStuff: function () {
      ...this[key]...
    }
  }

  // Limited support from Babel, full support requires
  // native implementation.
  typeof key === "symbols"
}) ()

var c = new MyClass("hello")
c["key"] === undefined

//Subclassable Built-ins
// User code of Array subclass
class MyArray extends Array {
  constructor(...args) {
    super(...args)
  }
}

var arr = new MyArray()
arr[1] = 12
arr.length == 2

// Math + Number + String + Object APIs

Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3)
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll("*")) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].findIndex(x => x == 2) // 1
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, {
  origin: new Point(0, 0)
})

0b111110111 === 503 // true
0o767 === 503 // true

//Promises

function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

var p = timeout(1000).then(() => {
  return timeout(2000)
}).then(() => {
  throw new Error("hmm")
}).cat(err => {
  return Promise.all([timeout(100), timeout(200)])
})

// Reflect API

var O = {
  a: 1
}
Object.defineProperty(O, 'b', {
  value: 2
})
O[Symbol('c')] = 3

Reflect.ownKeys(O) // ['a', 'b', symbol(c)]

function C(a, b) {
  this.c = a + b
}

var instance = Reflect.construct(C, [20, 22])
instance.c // 42

//Tail calls
function factorial(n, acc = 1) {
  "use strict"
  if (n <= 1) return acc
  return factorial(n - 1, n * acc)
}

//Stack overflow in most implementations today,
//but safe on arbitrary inputs in ES2015
factorial(100000)