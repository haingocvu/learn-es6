let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number')
                return reject(new Error('not a number'));
            resolve(a + b)
        }, 1000);
    })
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number')
                return reject(new Error('not a number'))
            resolve(a * b)
        }, 1000);
    })
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number')
                return reject(new Error('not a number'))
            if (b === 0) return reject(new Error('divide 0'));
            resolve(a / b)
        }, 1000);
    })
}

let tinhDienTichHinhThang = async (a, b, h) => {
    try {
        let sum = await add(a, b);
        let mul = await multiply(sum, h);
        let result = await divide(mul, 2);
        return result;
    } catch (error) {
        return error
    }
}

tinhDienTichHinhThang('2', 3, 2).then(result => console.log(result.toString()));

// add(2, '3').then(result => console.log(result), err => console.log(err.toString()))