'use strict';
function test() {
    console.log(a);
    console.log(foo())
    var a = 10;
    function foo() {
        return 8
    }
}
test()
//strict mode van hoisting binh thuong. @@
//chú ý điều này là hoisting chỉ được ngăn chặn khi sử dụng let và expresstion.
//strict mode không ảnh hưởng hoisting.