//Once you complete a problem, open up Chrome and check the answer in the console.



var name = 'Brandt';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
  if (name === 'Tyler') {
    return true;
  }
  else {
    return false;
  };
}

alert(isTyler(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
  return prompt("What is your name?");
}

alert(getName());
//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
  return alert("Welcome, " + getName() + "!");
}

welcome()
//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
The variable(s) inside of the parentheses in function statement is the parameter(s).

The data being passed to the function in the function call, inside the parentheses, is the argument(s).

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
false
0 (zero)
"" (empty string)
null
undefined
NaN

//Next Problem



//Create a function called myName that returns your name

  //Code Here
var myName = function() {
  return alert("Brandt");
}

myName()

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = function() {
  myName();
}
//Now alert the result of invoking newMyName

newMyName()

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function() {
  return function() {
    return alert("Brandt");
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();



//Now invoke innerFn.
innerFn()