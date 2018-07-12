let quickSort = arr => {
    if (arr.length <= 1) return arr;
    let pivot = arr[0], left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

let binarySearch = (valueToSearch, arr) => {
    let left = 0; right = arr.length - 1; ret = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (valueToSearch === arr[mid]) {
            ret = mid;
            break;
        }
        else if (valueToSearch > arr[mid]) left = mid + 1
        else right = mid - 1;
    }
    return ret;
}

let unsort = [9, 2, 1, 8, 4, 0, 5, 6];

let sorted = quickSort(unsort)

let searchIndex = binarySearch(8, sorted);

console.log(sorted);

console.log(searchIndex)