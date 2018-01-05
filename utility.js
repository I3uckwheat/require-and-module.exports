module.exports = function(numbersToSum){
  const sum = numbersToSum.reduce((accumulator, currentValue) => {
    currentValue += accumulator;
  });
  return sum;
}

// module.exports = function(numbersToSum) {
//   let sum = 0,
//     i = 0,
//     l = numbersToSum.length;
//     while (i < l) {
//         sum += numbersToSum[i++]
//     }
//     return sum
// }
