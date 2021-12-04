//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
let gamma = "";
let epsilon = "";
let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < data.length; index++) {

    for (let jindex = 0; jindex < data[index].length; jindex++) {

        numbers[jindex] += parseInt(data[index][jindex])
    }

};

let convert = function (number, cant) {
    let response = 0

    if (number / cant >= 0.5) {
        return 1
    }

    return response
}

for (let index = 0; index < numbers.length; index++) {
    numbers[index] = convert(numbers[index], data.length);

}
numbers.forEach(element => {
    element = convert(element, data.length)
});

numbers.forEach(element => {
    gamma += element
    if (element == 1) {
        epsilon += 0
    } else {
        epsilon += 1
    }
});

console.log("Gamma: " + gamma + " Parsed: " + parseInt(gamma, 2)) // 935 
console.log("Epsilon: " + epsilon + " Parsed: " + parseInt(epsilon, 2)) // 3160
console.log("Response: " + parseInt(gamma, 2) * parseInt(epsilon, 2)) // 2954600

//Part2
let co2scrubber
let o2generator

numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < numbers.length; index++) {

    for (let jindex = 0; jindex < data.length; jindex++) {

        numbers[index] += parseInt(data[jindex][index])

    }

    numbers[index] = convert(numbers[index], data.length)

    let i = data.length - 1
    while (i >= 0 && data.length != 1) {

        if (data[i][index] != numbers[index]) {
            data.splice(i, 1)
        }
        i--
    }

}

o2generator = data[0]

data = readFileSync("./data.txt").toString().split("\r\n");
numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < numbers.length; index++) {

    for (let jindex = 0; jindex < data.length; jindex++) {

        numbers[index] += parseInt(data[jindex][index])

    }

    numbers[index] = convert(numbers[index], data.length)

    if (numbers[index] == 0) { numbers[index] = 1 } else { numbers[index] = 0 }

    let i = data.length - 1
    while (i >= 0 && data.length != 1) {

        if (data[i][index] != numbers[index]) {
            data.splice(i, 1)
        }

        i--
    }

}

co2scrubber = data[0]

console.log("O2 generator: " + o2generator + " Parsed: " + parseInt(o2generator, 2)) // 573
console.log("CO2 scrubber: " + co2scrubber + " Parsed: " + parseInt(co2scrubber, 2)) // 2902
console.log("Response: " + parseInt(o2generator, 2) * parseInt(co2scrubber, 2)) // 1662846