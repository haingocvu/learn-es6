"use strict";

function useThisInGlobalFunctionInStrictMode() {
    return this;
}

console.log(useThisInGlobalFunctionInStrictMode());

//khi sử dụng this trong global function ở strict mode. giá trị của this là undefined. 
//strict mode không cho phép default biding.