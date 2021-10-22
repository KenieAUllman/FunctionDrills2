////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER
const multiplication = (x, y) => {
  return x * y
}

const addition = (x, y) => {
  return x + y
}

const subtraction = (x, y) => {
  return x - y
}

const maths = (x, y, callback) => {
  let answer = callback(x, y)
  console.log('The answer is ' + answer) //should console.log 12
}

maths(5, 8, multiplication)
maths(5, 8, addition)
maths(7, 4, subtraction)


////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

const first = (names, firstName) => {
  console.log('The first name in names is ' + firstName(names[0]))
}

const allCaps = (yelling) => {
  return yelling.toUpperCase() 
}

first(names, allCaps)

////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last = (names, lastName) => {
   console.log('The last name in names is ' + lastName(names[names.length - 1]))
}

last(names, allCaps)


////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains = (names, name, result) => {
   if(result(names, name)){
     console.log(name + ' is in the array')
   } else {
     console.log(name + ' is not in the array')
   }
}

const isInArray = (names, subject) => {
  return names.includes(subject)
}

contains(names, 'Cayla', isInArray)

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the 
  modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
const uniq = (names, different) => {
  return different(names)
}

const different = (names) => {
  let newArray = []
  for (let idx = 0; idx < names.length; idx++) {
    const ilement = names[idx];
    if(!newArray.includes(ilement))
      newArray.push(ilement)
  }
  return newArray
}

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
let newNames = uniq(names, different)
const uniqPRINT = (uniqArr) => {
  console.log('The new names array with all the duplicate items removed is ' + uniqArr)
}

uniqPRINT(newNames) 

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as 
  arguments.
*/

// CODE HERE 
const each = (names, callback) => {
  for (let index = 0; index < names.length; index++) {
    callback(names[index], index) 
  }
}


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
const anotherPrint = (item, index) => {
  console.log('The item at index ' + index + ' is ' + item + '.')
}
each(names, anotherPrint)

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), 
  an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById = (users, id, callback) => {
  for (let index = 0; index < users.length; index++) {
    if (users[index].id === id) {
      callback(users[index])
    }
  }
}

const displayUser = (user) => {
  console.log(user.name + " has volunteered as tribute")
}

getUserById(users, '16t', displayUser)
getUserById(users, '12c', displayUser)

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE