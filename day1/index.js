//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
let response = 0;

for (let i = 0; i < data.length - 1; i++) {

    if (data[i] - data[i + 1] < 0) {
        response++
    };

};

console.log(`The number of increased is: ${response}`); // 1676

//Part 2
let newData = [];
let response2 = 0;

for (let i = 0; i < data.length - 2; i++) {

    newData.push(parseInt(data[i]) + parseInt(data[i + 1]) + parseInt(data[i + 2]));

};

for (let i = 0; i < newData.length - 1; i++) {

    if (newData[i] - newData[i + 1] < 0) {
        response2++
    };

};

console.log(`The number of increased when taking 3 values is: ${response2}`); // 1706
