let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'));
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
            if (b === 0) return reject(new Error('divide 0'));
            resolve(a / b)
        }, 1000);
    })
}

let rs = Promise.all([add(2, 8), multiply(1, 10), divide(10, 0)])
    .then(res => console.log(res))
    .catch(err => console.log(err + ''))