import fs from "fs";
//( mean he should go up one floor
//) mean he should go down one floor
// never reach the top or bottom floor
// set ( to be an increment plus 1
// set ) to be an decrement minus 1
// find the position of the first character that is -1;
// cheak every iteration to see if that position is -1;

let nums = [];
let count = 0;
let pos = 1;

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "(") {
      count++;
      nums.push(count);
    }

    if (data[i] == ")") {
      count--;
      nums.push(count);
    }
  }
  for (let j = 1; j < nums.length; j++) {
    pos++;
    if (nums[j] == -1) {
      console.log(pos);
    }
  }
});
