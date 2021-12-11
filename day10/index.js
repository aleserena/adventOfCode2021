//Part 1
import { readFileSync } from 'fs';

let data = readFileSync("..txt").toString().split("\r\n");

let open = ["<", "(", "[", "{"]
let close = [">", ")", "]", "}"]
