import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let leftNums = [];
let rightNums = [];
let count = {};
let similarityScore = 0;
//let total = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  const nums = input[i].split(/\s+/);
  leftNums.push(parseInt(nums[0]));
}

for (let i = 0; i < input.length; i++) {
  const nums = input[i].split(/\s+/);
  rightNums.push(parseInt(nums[1]));
}

const sortedLeftNums = (leftNums) => {
  if (leftNums.length <= 1) {
    return leftNums;
  }

  let pivot = leftNums[0];

  let left = [];
  let right = [];

  for (let i = 1; i < leftNums.length; i++) {
    leftNums[i] < pivot ? left.push(leftNums[i]) : right.push(leftNums[i]);
  }

  return sortedLeftNums(left).concat(pivot, sortedLeftNums(right));
};

const sortedRightNums = (rightNums) => {
  if (rightNums.length <= 1) {
    return rightNums;
  }

  let pivot = rightNums[0];

  let left = [];
  let right = [];

  for (let i = 1; i < rightNums.length; i++) {
    rightNums[i] < pivot ? left.push(rightNums[i]) : right.push(rightNums[i]);
  }

  return sortedRightNums(left).concat(pivot, sortedRightNums(right));
};

leftNums = sortedLeftNums(leftNums);
rightNums = sortedRightNums(rightNums);

for (let i = 0; i < rightNums.length; i++) {
  count[rightNums[i]] = 0;
}

for (let i = 0; i < leftNums.length; i++) {
  for (let j = 0; j < rightNums.length; j++) {
    if (leftNums[i] === rightNums[j]) {
      count[rightNums[j]]++;
    }
  }
}

for (let key in count) {
  var similarity = count[key] * key;
  similarityScore += similarity;
}

console.log(similarityScore);

//console.log(similarity);
//for (let i = 0; i < leftNums.length; i++) {
//  var nums = Math.abs(leftNums[i] - rightNums[i]);
//  total.push(nums);
//}

//for (let i = 0; i < total.length; i++) {
//  sum += total[i];
//}
//console.log(sum);
