let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') return reject(new Error('not a number'))
            resolve(a + b)
        }, 1000);
    })
}

let addAsync = async (a, b, cb) => {
    try {
        let ab = await add(a, b);
        cb(undefined, ab)
    } catch (error) {
        cb(error)
    }
}

addAsync(2, 3, (err, res) => {
    if (err) return console.log(err + '');
    console.log(res)
})