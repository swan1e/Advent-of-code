import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trim();

let x = 0;
let y = 0;

let santaX = 0;
let santaY = 0;

let roboX = 0;
let roboY = 0;

let visited = new Set(["0,0"]);

const deliveredPresents = () => {
  for (let i = 0; i < input.length; i++) {
    const isStanta = i % 2 == 0;

    if (isStanta) {
      x = santaX;
      y = santaY;
    } else {
      x = roboX;
      y = roboY;
    }

    if (input[i] === "^") y++;
    if (input[i] === "v") y--;
    if (input[i] === ">") x++;
    if (input[i] === "<") x--;

    if (isStanta) {
      santaX = x;
      santaY = y;
    } else {
      roboX = x;
      roboY = y;
    }

    visited.add(`${x},${y}`);
  }
  console.log(visited.size);
};
deliveredPresents();
