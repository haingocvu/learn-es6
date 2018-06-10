let mapobj = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
let iterator = mapobj.values();
console.log(iterator);
console.log(iterator.next());