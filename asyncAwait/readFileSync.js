let fs = require('fs');
let rs = fs.readFileSync('./demo.txt', 'utf8');
console.log(rs);
console.log('da ket thuc');

//READFILESYNC là 1 tác dụng đồng bộ do đó nó sẽ kết thúc trước code line 4