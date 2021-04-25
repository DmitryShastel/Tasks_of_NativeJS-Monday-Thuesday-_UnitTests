// Write a function that takes an integer as input, and returns the number of bits that are equal to one
//  in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const base = (n).toString(2).split('');
   
// make a sum with the array and make the index a Number
const result = base.reduce((sum, num) => sum + Number(num), 0);

return result;



// Given an array (arr) as an argument complete the function countSmileys that should return the total 
// number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D

let count = 0;
let validFace = [
  ":)",
  ";)",
  ":-)",
  ";-)",
  ":~)",
  ";~)",
  ":D",
  ";D",
  ":-D",
  ";-D",
  ":~D",
  ";~D"
];
arr.map(item => {
  validFace.map(vitem => {
    if (item.includes(vitem)) count++;
  });
});
return arr.length == 0 ? 0 : count;