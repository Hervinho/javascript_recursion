//Implementing factorial function.
var factorial = function(number) {
  console.log('Factorial function with for loop');
  console.log('---------------------------------');
  var result = 1;
  var count;
  var check = 0;
  for (count = number; count > 1; count--) {
	  check++;
    result *= count;
	console.log('Iteration: ' + check, ' Result: ' + result);
  }
  return result;
};
console.log(factorial(5));
console.log(' ******* ');

//Implementing recursive countdown fucntion.
console.log('Recursive countdown function');
console.log('---------------------------------');
var countdown = function(value) {
	
    if (value > 0) {
        console.log('Countdown Value: ', value);
        return countdown(value - 1);
    } else {
		console.log('Countdown Value: ', value);
        return value;
    }
};
countdown(4);
console.log(' ******* ');

//Implementing recursive factorial function.
console.log('Recursive factorial function');
console.log('---------------------------------');
var factorialRecurse = function(number) {
  
  var result = 1;
  var count;
  if(number <= 0){//stop here.
	  return 1;
  }
  else{
	  console.log('Number after iteration: ', number);
	  return (number * factorialRecurse(number - 1));
  }
  return result;
};
console.log(factorialRecurse(4));