/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000. */
var summation = function(limit){
	var sum = 0;
	for(var i = 0; i <= limit; i++){
		sum += i;
	}
	return sum;
}
var three = 3*summation(Math.floor(999/3));
var five = 5*summation(Math.floor(999/5));
var fifteen = 15*summation(Math.floor(999/15));
console.log(three + five - fifteen);
