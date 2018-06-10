let arr1 = [
    1,
    2,
    3
];
let arr2 = [
    'hello',
    'hi',
    'nihao'
];
let concatafter = arr1.concat(arr2, [4, 5, 6]);
concatafter.forEach((value, index)=>{
    console.log(value);
})