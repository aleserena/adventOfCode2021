//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("C:/Users/Alejandro/OneDrive/Documents/Projects/adventOfCode/day4/data.txt").toString().split("\r\n");
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

let fix = function (board) {
    let newBoard = []
    for (let index = 0; index < board.length; index++) {

        let elements = board[index].split(" ")

        newBoard.push(elements)
    }


    newBoard.forEach(row => {

        var index = row.indexOf("");

        while (index > -1) {
            row.splice(index, 1);

            index = row.indexOf("")
        }
    });

    return newBoard
}

for (let index = 0; index < boards.length; index++) {

    boards[index] = fix(boards[index])

}

let checkVertical = function (board) {
    let bingo = true

    for (let index = 0; index < board[0].length; index++) {

        bingo = true

        for (let jindex = 0; jindex < board.length; jindex++) {

            bingo = bingo && board[jindex][index] == "x"

            if (bingo == false) {
                jindex = 10
            }
        }

        if (bingo) { return bingo }
    }

    return bingo
}

let checkHorizontal = function (board) {
    let bingo = true

    for (let index = 0; index < board.length; index++) {

        bingo = true

        for (let jindex = 0; jindex < board[index].length; jindex++) {

            bingo = bingo && board[index][jindex] == "x"

            if (bingo == false) {
                jindex = 10
            }
        }

        if (bingo) { return bingo }
    }

    return bingo
}

let notFinded = true
let notFinded2 = true
let response = 0
let last
let part2 = {}

drawn.forEach(draw => {

    if (draw == '15') {
        console.log("15")
    }

    let nindex = boards.length - 1
    while (nindex >= 0) {
        let board = boards[nindex]

        board.forEach(row => {

            var index = row.indexOf(draw);

            while (index > -1) {
                row[index] = "x"
                index = row.indexOf(draw);
            }

        });

        let isWinner = (checkHorizontal(board) || checkVertical(board))

        if (isWinner && notFinded) {
            console.log("BINGO!")
            console.log(board)
            last = draw
            board.forEach(row => {

                row.forEach(number => {
                    if (number != "x") {
                        response += parseInt(number)
                    }
                });

            });
            notFinded = false
        }

        if (boards.length == 1 && isWinner && notFinded2) {
            part2.board = boards[0]
            part2.last = draw

            let part2response = 0
            board.forEach(row => {

                row.forEach(number => {
                    if (number != "x") {
                        part2response += parseInt(number)
                    }
                });

            });

            part2.sum = part2response
            notFinded2 = false
            console.log(board)

        }

        if (isWinner) {

            var index = boards.indexOf(board);

            while (index > -1) {
                boards.splice(index, 1);

                index = boards.indexOf(board)
            }
        }

        nindex--
    }

});

console.log("Last drawn: " + last) // 17
console.log("Sum of all other numbers: " + response) // 829
console.log("Response: " + last * response) // 14093

//Part2
console.log("Part 2 Last drawn: " + part2.last) // 36
console.log("Part 2 Sum of all other numbers: " + part2.sum) // 483
console.log("Part 2 Response: " + part2.last * part2.sum) // 17388
