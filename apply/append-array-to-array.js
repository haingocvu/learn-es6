let myarr = [
    1,
    2,
    3
];
let a = [
    4,
    5,
    6
];
myarr.push.apply(myarr, a);
console.log(myarr);

//dùng apply để push 1 mảng vào 1 mảng khác.