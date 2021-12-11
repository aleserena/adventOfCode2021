//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("C:/Users/Alejandro/OneDrive/Documents/Projects/adventOfCode/day10/data.txt").toString().split("\r\n");

let open = ["<", "(", "[", "{"]
let close = [">", ")", "]", "}"]
