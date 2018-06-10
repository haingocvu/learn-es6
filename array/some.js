let arr = [
    1,
    2,
    4,
    '8',
    'ten'
];
let _bool = arr.some((value, index)=>{
    return isNaN(value);
});
console.log(_bool?'not a nummeric array':'a nummeric array');