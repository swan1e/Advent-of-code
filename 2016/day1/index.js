import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8").trim().split(", ");

let x = 0;
let y = 0;
let pos = 0;
const direction = ["N", "E", "S", "W"];

const cab = () => {
  for (let i = 0; i < input.length; i++) {
    const turn = input[i].charAt(0);
    const distance = parseInt(input[i].slice(1));

    if (turn === "R") pos = (pos + 1) % 4;
    if (turn === "L") pos = (pos + 3) % 4;

    if (direction[pos] === "N") y += distance;
    if (direction[pos] === "E") x += distance;
    if (direction[pos] === "S") y -= distance;
    if (direction[pos] === "W") x -= distance;
  }
  const total = x + y;
  console.log(total);
};

cab();
