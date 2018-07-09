// let square = (a, b, h) => (a + b) * h / 2;

let add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('not a number'), undefined);
        }
        cb(undefined, a + b);
    }, 1000);
}

let multiple = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('not a number'), undefined)
        }
        cb(undefined, a * b)
    }, 1000);
}

let divide = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') return cb(new Error('not a number'), undefined);
        if (b === 0) return cb(new Error('devided 0'), undefined);
        cb(undefined, a / b)
    }, 1000);
}

let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if (err) return cb(err, undefined);
        multiple(result, h, (err, result) => {
            if (err) return cb(err, undefined);
            divide(result, 2, (err, result) => {
                if (err) return cb(err, undefined);
                cb(undefined, result)
            })
        })
    })
}