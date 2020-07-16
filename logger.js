var url = "localhost:3000"
function func(msg){
    console.log("Function message",msg)
}
function func1(num1, num2){
    console.log("Function number",num1+num2)
}
module.exports = func;
module.exports = func1;
// module.exports = url;