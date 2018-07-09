//function có thể được lưu trong 1 biến
let doublevalue = a => a * 2;
let myarr1 = [
    1,
    2,
    3
];
//function có thể là tham số của 1 function khác
let myarr2 = myarr1.map(doublevalue);
console.log(myarr2)

//function return a function
let getFunction = num => () => console.log(num);

//tương đương với cách viết này.
// let getFunction = num => {
//     return () => {
//         console.log(num)
//     }
// }

getFunction(3)();