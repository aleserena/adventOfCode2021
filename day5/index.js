//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
let _data = []

//convert data to array of arrays
data.forEach(line => {
    line = line.split(" -> ")
    line[0] = line[0].split(",")
    line[1] = line[1].split(",")
    _data.push(line)
})

data = _data
let filteredData = []

//filter to only consider the H or V lines
data.forEach(line => {
   if (line[0][0] == line[1][0] || line[0][1] == line[1][1] )

   filteredData.push(line)
})

// "Graph" = create a grid from 0-0 to 999-999 with 0
let graph = []

for (let index = 0; index < 1000; index++) {
    let row = []
    for (let jindex = 0; jindex < 1000; jindex++) {
    
        row.push(0)
    
    }
    graph.push(row)
}

//TODO: function to add the line to the grid
//TODO: count number of points > 1