/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

var isPalindrome = function (num) {
  var tempString = '';
  for (var i = String(num).length - 1; i >= 0; i--) {
    tempString += String(num)[i];
  }

  return tempString === String(num);
};

var palindromes = [];
for (var i = 999; i > 99; i--) {
  for (var j = i; j > 99; j--) {
    if (isPalindrome(i * j)) {
      palindromes.push(i * j);
    }
  }
}

console.log(Math.max(...palindromes));
