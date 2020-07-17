var logger = require('./logger')

console.log(logger.message('Func is imported and called from other file'))
console.log(logger.addition(3,4))
console.log(logger.addition(logger.PIval,4))