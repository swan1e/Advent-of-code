import fs from "fs";
//surface area = 2*l*w + 2*w*h + 2*h*l
//
var l = null;
var w = null;
var h = null;
l;
fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    [l, w, h] = data.split("x");
  }
  console.log(l);
});
