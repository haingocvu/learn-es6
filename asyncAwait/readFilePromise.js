let fs = require('fs');

let readFile = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data)
        })
    })
}

readFile('./demo.tx').then(result => console.log(result)).catch(err => console.log(err.toString()))