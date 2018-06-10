let myarr = [
    3,
    -2,
    2,
    6,
    -8,
    '7',
    '9'
];
let rs = myarr.every((value, index)=>{
    return Math.abs(parseInt(value)) > 1;
});
console.log(rs);