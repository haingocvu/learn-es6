let quickSort = arr => {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

let unsortArr = [2, 6, 8, 1, 9, 0];
let sorted = quickSort(unsortArr);
console.log(sorted)