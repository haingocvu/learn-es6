let setobj = new Set();
setobj.add('yellow')
    .add('red')
    .add('green')
    .add('blue');
console.log(setobj.has('red'));
setobj.delete('red');
console.log(setobj.has('red'));