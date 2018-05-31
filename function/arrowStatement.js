let add = (a, b)=>{
    if(typeof a != "number" || typeof b != 'number') throw new Error('not a number');
    return a +  b;
}
try {
    console.log(add('2', 8));
} catch (error) {
    console.log(error + "");
}
//arrow statement is a arrow function with multiple statements