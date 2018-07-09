let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('da thanh cong');
        reject(new Error('that bai'))
    }, 1000);
})

aPromise.then(result => console.log(`ket qua: ${result}`), err => console.log(err.toString()));