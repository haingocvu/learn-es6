let num = 2;
{
    let num = 4;
    let num2 = 8;
}
console.log(num);
//console.log(num2); num2 can not access here.
//if we use var keyword. the value of num will be 4;
//because var has a function scope. let has a bracket scope.