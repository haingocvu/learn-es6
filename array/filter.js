let myarr = [
    1,
    2,
    -8,
    -3,
    '5',
    '-9'
];
let afterFilter = myarr.filter((value, index)=>{
    return Math.abs(parseInt(value)) > 3;
});
afterFilter.forEach((value, index)=>{
    console.log(value);
});