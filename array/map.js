let myarr = [
    'Trần',
    'Thị',
    'Tuyến'
];
let mapped = myarr.map((value, index)=>{
    if(index == 0) return 'Vũ';
        else if(index == 1) return 'Ngọc';
            else return 'Hải';
});
mapped.forEach((value, index)=>{
    console.log(value);
});