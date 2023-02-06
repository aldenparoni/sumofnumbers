const numbers = [1, 2, 3, 4, 5];
const index = numbers.length;

function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFor(numbers));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numbers));

function sumRecursion(arr, len) {
  if (len <= 0) {
    return 0;
  }
  return (sumRecursion(arr, len - 1) + arr[len - 1]);
}

console.log(sumRecursion(numbers, index));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay(numbers));
