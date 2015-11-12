var testString = prompt("Enter String");
console.log(isString(testString));
var num1 = prompt("Number 1");
var num2 = prompt("Number 2");
console.log(numSmaller(num1, num2));

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
function concatenates(string1, string2, string3){
  var finalString = string1 + " " + string2 + " " + string3
  return finalString;
}
