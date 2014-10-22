var add = require('./lib/add.js').add,
    multiply = require('./lib/multiply.js').multiply;

console.log("1 + 1 = %s", add(1, 1));
console.log("1 * 1 = %s", multiply(1, 1));
console.log("200 * 450 = %s", multiply(200, 450));

