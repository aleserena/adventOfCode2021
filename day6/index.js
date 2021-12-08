//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
data = data[0].split(",")

let data2 = readFileSync("./data.txt").toString().split("\r\n");
data2 = data2[0].split(",")

let daysPassBetter = function (_data, days) {

    let fishes = { "zero": 0, "one": 0, "two": 0, "three": 0, "four": 0, "five": 0, "six": 0, "seven": 0, "eight": 0 }

    _data.forEach(element => {
        if (element == 0) { fishes.zero++ }
        if (element == 1) { fishes.one++ }
        if (element == 2) { fishes.two++ }
        if (element == 3) { fishes.three++ }
        if (element == 4) { fishes.four++ }
        if (element == 5) { fishes.five++ }
        if (element == 6) { fishes.six++ }
        if (element == 7) { fishes.seven++ }
        if (element == 8) { fishes.eight++ }


        for (let jindex = 0; jindex < days; jindex++) {

            fishes = dayPassBetter(fishes)

        }
    });

    let fishesSum = fishes.zero + fishes.one + fishes.two + fishes.three + fishes.four + fishes.five + fishes.six + fishes.seven + fishes.eight
    console.log(fishes)

    console.log(`After ${days} days, there is: ${fishesSum}`)
}

let daysPass = function (_data, days) {

    for (let jindex = 0; jindex < days; jindex++) {
        for (let index = _data.length - 1; index >= 0; index--) {
            if (_data[index] == 0) {
                _data[index] = 6
                _data.push(8)
            } else {
                _data[index]--
            }
        }
    }

    console.log(`After ${days} days, there is: ${_data.length}`)
}

let dayPassBetter = function (fishes) {
    let tempFishes = { "zero": 0, "one": 0, "two": 0, "three": 0, "four": 0, "five": 0, "six": 0, "seven": 0, "eight": 0 }

    tempFishes.eight = fishes.zero
    tempFishes.seven = fishes.eight
    tempFishes.six = fishes.seven + fishes.zero
    tempFishes.five = fishes.six
    tempFishes.four = fishes.five
    tempFishes.three = fishes.four
    tempFishes.two = fishes.three
    tempFishes.one = fishes.two
    tempFishes.zero = fishes.one

    return tempFishes
}

daysPass(data, 80)

daysPassBetter(data2, 256)