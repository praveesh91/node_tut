const PI = 3.14;
var func = function(msg){
    console.log("Function message",msg)
}
var func1 = function(num1, num2){
    console.log("Function number",num1+num2)
}
module.exports.message = func;
module.exports.addition = func1;
module.exports.PIval = PI;