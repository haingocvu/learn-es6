let mobj = new Map();
mobj.set('name', 'Tuyen')
    .set('age', '28')
    .set('love', 'Hai');
mobj.forEach((value, key)=>{
    console.log("m[" + key + "] = " + value);
})