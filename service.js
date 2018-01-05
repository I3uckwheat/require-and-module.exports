const sum = require('./utility.js');


let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalbalance = sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance]);
console.log(totalbalance);
