//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");

for (let index = data.length -1; index >= 0; index--) {
    
    data[index] = data[index].split("")
    
}

let isLowestPoint = function(x, y, data) {

    let isLowest = true

    if (x-1 >= 0) {
        isLowest = isLowest && (data[y][x] < data[y][x-1])
    } 

    if (x+1 < data[y].length || isLowest == false) {
        isLowest = isLowest && (data[y][x] < data[y][x+1])
    } 

    if (y-1 >= 0 || isLowest == false) {
        isLowest = isLowest && (data[y][x] < data[y-1][x])
    }

    if (y+1 <= data.length - 1 || isLowest == false) {
        isLowest = isLowest && (data[y][x] < data[y+1][x])
    }

    return isLowest
}

//checkEach
let response = 0

for (let index = 0; index < data.length; index++) {
    for (let jindex = 0; jindex < data[index].length; jindex++) {
        if (isLowestPoint(jindex, index, data)) {
            response+= (1 + parseInt(data[index][jindex]))
        }
    }
    
}

console.log("there are: " + response + " lowest points")
