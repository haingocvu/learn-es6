"use strict"
var myf = ()=>{
    for(var i = 0; i<8; i++){
        console.log(i+1);
    }
    console.log("i can be access outside a block scope because i will be hoisted to function scope. the value of i is: " + i);

}
//console.log(i); can not
myf();