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
    if (line[0][0] == line[1][0] || line[0][1] == line[1][1])

        filteredData.push(line)
})

// "Graph" = create a grid from 0-0 to 999-999 with 0
let graph = []
let graph2 = []
for (let index = 0; index < 1000; index++) {
    let row = []
    for (let jindex = 0; jindex < 1000; jindex++) {

        row.push(0)

    }
    graph.push(row)
    graph2.push(row)
}

// function to add the line to the grid

let paint = function (start, finish) {
    let toPaint = []
    let H
    start[0] = parseInt(start[0])
    start[1] = parseInt(start[1])
    finish[0] = parseInt(finish[0])
    finish[1] = parseInt(finish[1])
    let diagonalToPaint = []

    if (start[0] == finish[0]) {
        //horizontal
        H = true
        // check what to paint
        if (start[1] < finish[1]) {

            for (let index = start[1]; index < finish[1] + 1; index++) {

                toPaint.push(parseInt(index))
            }
        }

        if (start[1] > finish[1]) {

            for (let index = finish[1]; index < start[1] + 1; index++) {

                toPaint.push(parseInt(index))
            }
        }
    } else if (start[1] == finish[1]) {
        //vertical
        H = false
        if (start[0] < finish[0]) {

            for (let index = start[0]; index < finish[0] + 1; index++) {

                toPaint.push(index)
            }
        }

        if (start[0] > finish[0]) {

            for (let index = finish[0]; index < start[0] + 1; index++) {

                toPaint.push(index)
            }
        }

    } else {
        //TODO: Diagonals
        while (start[0] >= finish[0] && start[1] >= finish[1]) {

            graph2[parseInt(start[0])][start[1]]++

            start[0]--
            start[1]--
        }

        while (start[0] <= finish[0] && start[1] <= finish[1]) {

            graph2[parseInt(start[0])][start[1]]++

            start[0]++
            start[1]++
        }

        while (start[0] >= finish[0] && start[1] <= finish[1]) {

            graph2[parseInt(start[0])][start[1]]++

            start[0]--
            start[1]++
        }

        while (start[0] <= finish[0] && start[1] >= finish[1]) {

            graph2[parseInt(start[0])][start[1]]++

            start[0]++
            start[1]--
        }


    }


    toPaint.forEach(element => {

        if (H) {
            graph[parseInt(start[0])][element]++
        } else {
            graph[parseInt(element)][start[1]]++
        }
    });
}

// Paint
filteredData.forEach(line => {
    paint(line[0], line[1])
});


// count responses
let response = 0
graph.forEach(line => {
    line.forEach(number => {
        if (number > 1) {
            response++
        }
    });
});

console.log("Horizontal and vertical critical points: " + response)