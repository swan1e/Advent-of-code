import fs from "fs";
//( mean he should go up one floor
//) mean he should go down one floor
// never reach the top or bottom floor
// set ( to be an increment plus 1
// set ) to be an decrement minus 1

let count = 0;

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      count++;
    }

    if (data[i] === ")") {
      count--;
    }
  }
  console.log(count);
});
