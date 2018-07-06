function thisInGlobal(){
    return this;
}

console.log(thisInGlobal());

//sử dụng this ở global function, thì giá trị của this là global object
//ở đây t dùng node nên global object là node