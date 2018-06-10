let mobj = new Map();
mobj.set('name', 'Hai')
    .set('age', 28)
    .set('love', 'Tuyen')
    .set(1, 2);
if(mobj.has('name')){
    console.log(mobj.get('name'));
}
console.log(mobj);