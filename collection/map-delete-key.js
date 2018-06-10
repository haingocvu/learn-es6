let mobj = new Map();
mobj.set('color', 'red')
    .set('id', 8)
    .set('sport', 'football')
    .set(1, '121')
    .set(2, 88);
console.log(mobj.has('sport'));
mobj.delete('sport');
console.log(mobj.has('sport'));