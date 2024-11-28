import fs from "fs";
import crypto from "crypto";

let input = fs.readFileSync("./input.txt", "utf8").trim();
let num = 0;

const AdventCoins = () => {
  while (true) {
    const code = hash(input, num);
    if (code.startsWith("000000")) {
      console.log(num);
      break;
    }
    num++;
  }
};

const hash = (input, num) => {
  return crypto
    .createHash("md5")
    .update(input + num)
    .digest("hex");
};

AdventCoins();
