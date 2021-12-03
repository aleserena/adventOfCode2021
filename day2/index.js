//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
let horizontal = 0;
let depth = 0;

for (let i = 0; i < data.length; i++) {

    if (data[i].includes("up")) {
        depth -= parseInt(data[i].replace(/\D+/g, ''));
    } else if (data[i].includes("down")) {
        depth += parseInt(data[i].replace(/\D+/g, ''));
    } else if (data[i].includes("forward")) {
        horizontal += parseInt(data[i].replace(/\D+/g, ''));
    };

};

console.log("Horizontal: "+ horizontal); // 2105
console.log("Depth: "+ depth); // 807
console.log("Response: "+ horizontal * depth); // 1698735

//Part2
let aim = 0;
horizontal = 0;
depth = 0;

for (let i = 0; i < data.length; i++) {

    if (data[i].includes("up")) {
        aim -= parseInt(data[i].replace(/\D+/g, ''));
    } else if (data[i].includes("down")) {
        aim += parseInt(data[i].replace(/\D+/g, ''));
    } else if (data[i].includes("forward")) {
        horizontal += parseInt(data[i].replace(/\D+/g, ''));
        depth += parseInt(data[i].replace(/\D+/g, '')) * aim
    };

};

console.log("Horizontal: "+ horizontal); // 2105
console.log("Depth: "+ depth); // 807
console.log("Aim: "+ aim); // 807
console.log("Response: "+ horizontal * depth); // 1698735