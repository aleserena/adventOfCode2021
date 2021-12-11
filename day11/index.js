//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");

for (let index = data.length - 1; index >= 0; index--) {
    data[index] = data[index].split("")
}

let data2 = readFileSync("./data.txt").toString().split("\r\n");

for (let index = data2.length - 1; index >= 0; index--) {
    data2[index] = data2[index].split("")
}

let flash = function (x, y, data) {

    if (x - 1 >= 0) {
        if (data[y][x - 1] != 0 && data[y][x - 1] <= 9) {
            data[y][x - 1]++
        }
        if (y - 1 >= 0) {
            if (data[y - 1][x - 1] != 0 && data[y - 1][x - 1] <= 9) {
                data[y - 1][x - 1]++
            }
        }
        if (y + 1 <= data.length - 1) {
            if (data[y + 1][x - 1] != 0 && data[y + 1][x - 1] <= 9) {
                data[y + 1][x - 1]++
            }
        }
    }

    if (x + 1 < data[y].length) {
        if (data[y][x + 1] != 0 && data[y][x + 1] <= 9) {
            data[y][x + 1]++
        }
        if (y - 1 >= 0) {
            if (data[y - 1][x + 1] != 0 && data[y - 1][x + 1] <= 9) {
                data[y - 1][x + 1]++
            }
        }
        if (y + 1 <= data.length - 1) {
            if (data[y + 1][x + 1] != 0 && data[y + 1][x + 1] <= 9) {
                data[y + 1][x + 1]++
            }
        }
    }

    if (y - 1 >= 0) {
        if (data[y - 1][x] != 0 && data[y - 1][x] <= 9) {
            data[y - 1][x]++
        }
    }

    if (y + 1 <= data.length - 1) {
        if (data[y + 1][x] != 0 && data[y + 1][x] <= 9) {
            data[y + 1][x]++
        }
    }
}

let part1 = function (grid, steps) {
    let currentStep = 0
    let flashes = 0

    while (currentStep < steps) {
        //Step
        for (let index = 0; index < grid.length; index++) {
            for (let jindex = 0; jindex < grid[index].length; jindex++) {
                grid[index][jindex]++
            }
        }

        //Flash
        let allFlashed = false
        while (allFlashed == false) {
            allFlashed = true
            for (let index = 0; index < grid.length; index++) {
                for (let jindex = 0; jindex < grid[index].length; jindex++) {
                    if (grid[index][jindex] > 9) {
                        //upate each close to it different to 9 or 0
                        flash(jindex, index, grid)
                        //set it to 0
                        grid[index][jindex] = 0
                        allFlashed = allFlashed && false
                        flashes++
                    }
                }
            }
        }

        currentStep++
    }

    console.log(`After ${steps} steps, there was ${flashes} flashes`)
}


part1(data, 100) // 1673

let part2 = function (grid) {
    let currentStep = 0
    let allFlashing = false

    while (allFlashing == false) {
        allFlashing = true
        //Step
        for (let index = 0; index < grid.length; index++) {
            for (let jindex = 0; jindex < grid[index].length; jindex++) {
                grid[index][jindex]++
            }
        }

        //Flash
        let allFlashed = false
        while (allFlashed == false) {
            allFlashed = true
            for (let index = 0; index < grid.length; index++) {
                for (let jindex = 0; jindex < grid[index].length; jindex++) {
                    if (grid[index][jindex] > 9) {
                        //upate each close to it different to 9 or 0
                        flash(jindex, index, grid)
                        //set it to 0
                        grid[index][jindex] = 0
                        allFlashed = allFlashed && false
                    }
                }
            }
        }

        for (let index = 0; index < grid.length; index++) {
            for (let jindex = 0; jindex < grid[index].length; jindex++) {
                allFlashing = allFlashing && grid[index][jindex] == 0
            }
        }

        currentStep++
    }

    console.log(`After ${currentStep} steps, all the octopuses are sync`)
}

part2(data2)