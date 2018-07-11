let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'))
            resolve(a + b)
        }, 1000);
    })
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'));
            resolve(a * b)
        }, 1000);
    })
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'));
            if (b === 0) return reject('divide 0');
            resolve(a / b)
        }, 1000);
    })
}

//để tái sử dụng promise liên tiếp ta cần return về promise
//.then trả về 1 promise. đó là promise được trả về từ hàm xử lý kết quả resolve.
let tinhDienTichHinhThang = (a, b, h) => {
    return add(a, b)
        .then(res => {
            return multiply(res, h)
        })
        .then(res => {
            return divide(res, 2)
        })
}

//sau đó ta có thể .then và .catch để xử lý kết quả trả về của promise.
tinhDienTichHinhThang(2, 3, 2)
    .then(res => console.log(res))
    .catch(err => console.log(err + ''))