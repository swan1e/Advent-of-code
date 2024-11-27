import fs from "fs";
//surface area = 2*l*w + 2*w*h + 2*h*

let total = 0;

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const lines = data.trim().split("\n");

  for (let i = 0; i < lines.length; i++) {
    const [l, w, h] = lines[i].split("x");

    //const a1 = l * w;
    //const a2 = w * h;
    //const a3 = h * l;

    const [smallest1, smallest2] = [l, w, h].sort((a, b) => a - b);

    const ribbon = 2 * smallest1 + 2 * smallest2;

    const bow = eval(lines[i].replace(/x/g, "*"));

    const feet = ribbon + bow;
    total = feet + total;

    //const surfaceArea = 2 * a1 + 2 * a2 + 2 * a3 + minSide;
    //total = surfaceArea + total;
  }

  console.log(total);
});
