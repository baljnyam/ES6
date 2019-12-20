ES6 - Language Specification:
https://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf


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
String.raw `In ES5 "\n" is a line-feed.`

//Construct an HTTP request prefix is used to intrepret the replacements and 
//construction
GET `http://foo.org/bar?a=${a}&b=${b}
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

