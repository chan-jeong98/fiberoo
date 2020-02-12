function fib() {
  const fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;
  for (let i = 2; i < 50; i++) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  }
  return fibArray;
}

console.log(fib());

function numsToStrings(nums) {
  return _.map(nums, function (num) { return num.toString(); });
}

console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  const evenArray = _.filter(nums, function (num) { return num % 2 === 0; });
  return evenArray.length;
}

console.log(numEvenNums(fib()));
