let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'));
            resolve(a + b)
        }, 1000);
    })
}

let addAsyn = async (a, b) => {
    try {
        let rs = await add(a, b);
        return Promise.resolve(rs)
    } catch (error) {
        return Promise.reject(error)
    }
}

addAsyn(2, '8').then(res => console.log(res)).catch(err => console.log(err+''))