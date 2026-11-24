const input = require("fs").readFileSync("day_01_input.txt").toString().split("\n")
let dial_state = 50
let zero_count = 0

//parse input 
input.forEach(line => {
    let direction = line.slice(0, 1)
    let number = parseInt(line.slice(1))
    let set_number = Math.abs(number%100)
    turnDial({d: direction, n: set_number})
})



function turnDial (instruction) {
    let {d, n} = instruction
    let new_n
    if (d === "R") new_n = dial_state + n 
    else if (d === "L" ) new_n = dial_state - n
    else { console.error(instruction)}
    //edge cases
    if (new_n < 0) {
        dial_state = 100 + new_n
    } else if (new_n > 99) {
        dial_state = new_n - 100
    } else {
        dial_state = new_n
    }
    if (dial_state === 0) zero_count++
}

console.log({zero_count})