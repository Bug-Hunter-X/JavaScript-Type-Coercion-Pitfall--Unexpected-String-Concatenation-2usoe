function foo(a,b){
  //Check if both inputs are numbers
if(typeof a === 'number' && typeof b === 'number'){
    return a + b; 
  } else {
    // Handle non-number inputs appropriately
    console.error("Invalid input: Both parameters must be numbers.");
    return NaN; // or throw an error
  }
}
console.log(foo(2,3)); //outputs 5
console.log(foo(2,"3")); //outputs Invalid input: Both parameters must be numbers. NaN
console.log(foo("2",3)); //outputs Invalid input: Both parameters must be numbers. NaN
console.log(foo("2","3")); //outputs Invalid input: Both parameters must be numbers. NaN