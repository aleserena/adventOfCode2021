//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("./data.txt").toString().split("\r\n");
let drawn = data.shift().split(",");
let boards = []

data.filter(function (element) {
    if (element == '') { return data.splice(data.indexOf(element), 1) }
})

let i = data.length / 5
while (i < data.length) {
    boards.push(data.splice(0, 5))

    i--
}

//TODO: separar rows en numeros individuales que queden de la forma: 

console.log([[13, 62, 38, 10, 41],
[93, 59, 60, 74, 75],
[79, 18, 57, 90, 28],
[56, 76, 34, 96, 84],
[78, 42, 69, 14, 19]])

//console.log(boards)

boards.forEach(board => {

    board.forEach(row => {
        
        //TODO: buscar numero en cada row, si lo encuentra reemplazarlo por una x
        //TODO: buscar si existen 
/* 
        if (row.includes("14")) {
            console.log(row.indexOf("14"))
            console.log(row[9])
            console.log(row[row.indexOf("14")])
          console.log(row.indexOf("14"))
        }
         */
//        console.log(row)
    });
    //console.log(board)

});

//console.log(boards)
