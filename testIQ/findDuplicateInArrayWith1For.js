let arr = [0, 8, 9, 10, 5, 9, 0, 0];

let counts = {}

arr.forEach(value => {
    counts[value] = (counts[value] ? counts[value] : 0) + 1;
})

console.log(counts)