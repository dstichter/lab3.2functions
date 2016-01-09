var testString = prompt("Enter String");
console.log(isString(testString));
var num1 = prompt("Number 1");
var num2 = prompt("Number 2");
console.log(numSmaller(num1, num2));
var s1 = "1";
var s2 = "2";
var s3 = "3";
var s4 = "4";
var s5 = "5";
console.log(con(s1,s2,s3));
console.log(con(s1,s2));
console.log(con(s1,s2,s3,s4,s5));

function isString(varString){
  console.log(typeof varString)
  if(typeof varString === 'string')
    return true;
  else
    return false;

}
function numSmaller(varNumber1, varNumber2) {
  parseInt(varNumber2);
  parseInt(varNumber1);
  if(varNumber1 < varNumber2)
    return "First Number Smaller"
  if(varNumber2 < varNumber1)
    return "Second Number Smaller"
  if(varNumber2 === varNumber1)
    return "Numbers are equal"
  else
    return;
}
function con(){
var finalString = "";
for(var i = 0; i<arguments.length; i++)
  finalString += arguments[i];
  return finalString;
}
