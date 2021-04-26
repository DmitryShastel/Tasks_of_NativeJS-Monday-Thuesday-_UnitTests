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




// Write a function that returns the sum of two numbers. The input numbers are strings 
// and the function must return a string.

a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  la = a.length;
  lb = b.length;
  var temp = [];
  var bit = 0;
  for(var i = 0; i < Math.max(la,lb); i++){
    if(i>=la){
      var cur = Number(b[i]);
    }else if(i>=lb){
      var cur =Number(a[i]);
    }else{
      var cur = Number(a[i]) + Number(b[i]);
    }     
    temp.push((cur+bit)%10);
    bit = Math.floor((cur+bit)/10);
  }
  if(bit==1){
    temp.push(1);
  }  
  var ans = "";
  for(var i=temp.length-1; i>=0; i--)
    ans+=temp[i];
  return ans;