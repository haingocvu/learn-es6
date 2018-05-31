var add = (a, b, cb)=>{
    if(typeof a != 'number' || typeof b != 'number') return cb(new Error('not a number'));
    cb(undefined, a + b);
}
add(2, '8', (err, res)=>{
    if(err) return console.log(err + '');
    console.log(res);
})