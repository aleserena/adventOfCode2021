//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
data = data[0].split(",")

let findMaximum = function (data) {
    let max = 0
    data.forEach(element => {
        max = Math.max(max, element)
    });

    return max
}

let max = findMaximum(data)

let findDistance = function (start, finish) {
    let distance
    distance = Math.abs(finish - start)
    return distance
}

let response
for (let index = 0; index < max + 1; index++) {

    let thisRun = 0


    data.forEach(element => {
        thisRun = thisRun + findDistance(element, index)
    });


    if (response == undefined) { response = { number: thisRun, index } }
    else {
        let number = Math.min(response.number, thisRun)
        if (number == response.number) {

        } else {
            response = { number, index }
        }
    }
}

console.log("Part 1 response:" + JSON.stringify(response))

//Part2
let findDistancePart2 = function (start, finish) {
    let distanceBase
    let distanceComplex = 0
    distanceBase = Math.abs(finish - start)
    for (let index = 1; index < distanceBase + 1; index++) {

        distanceComplex += index

    }
    return distanceComplex
}

let response2
for (let index = 0; index < max + 1; index++) {

    let thisRun = 0


    data.forEach(element => {
        thisRun = thisRun + findDistancePart2(element, index)
    });


    if (response2 == undefined) { response2 = { number: thisRun, index } }
    else {
        let number = Math.min(response2.number, thisRun)
        if (number == response2.number) {

        } else {
            response2 = { number, index }
        }
    }
}

console.log("Part 2 response:" + JSON.stringify(response2))