let fs = require('fs');

fs.readFile('./demo.txt', 'utf8', (err, data) => {
    if (err) return console.log(`error ${err}`);
    console.log(data);
})

console.log('đã kết thúc');

//vì readFile là async do đó nó sẽ kết thúc sau dòng code ở line thứ 8