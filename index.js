// Define the receivesAFunction function
function receivesAFunction(callback) {
  callback();
}

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function");
  };
}

// Define the returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function");
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
