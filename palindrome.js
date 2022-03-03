function isPalindrome(word) {
  for(let i = 0; i <= Math.ceil(word.length / 2); i++) {
    let leftToRight = i;
    let rightToLeft = word.length - (1 + i);
    if(word[leftToRight] === word[rightToLeft]) {
      return true
    } else {
      return false
    }
  }
}


/* 
  the word is a string
    could be split up, compared, then joined?
    could loop over it from front and back and match? middle out?
    use length property 2? what happens with even numbers?

    for loop limited to length of word / 2 rounded up with Math.ceil(#)
      if statement ()

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
//   // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
