function max(numberArray) {
    return Math.max.apply(null, numberArray)
}

let numberArray = [
    1,
    2,
    3,
    4
];
console.log(max(numberArray))

//ứng dụng Math.max để tìm max cho 1 array. dùng apply