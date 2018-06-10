let myarr = [
    1,
    2,
    '3',
    -8,
    '9'
];
let str = myarr.reduce((pre, cur)=>{
    return Math.abs(parseInt(pre)) + Math.abs(parseInt(cur));
});
console.log(str);
let myarr2 = [
    'I',
    'love',
    'you',
    'Trần',
    'Thị',
    'Tuyến'
];
let str1 = myarr2.reduce((pre, cur)=>{
    return pre + ' ' + cur;
});
console.log(str1);