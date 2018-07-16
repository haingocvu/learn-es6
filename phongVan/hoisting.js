function test() {
    console.log(a);
    console.log(foo());
    //console.log(b);
    var a = 8;
    function foo() {
        return 10;
    }
}
test();

//hoisting la hanh vi cua javascript mà sẽ đưa các định nghĩa của biến và hàm lên top.
//chỉ đưa định nghĩa chứ không phải là initial value;
//ví dụ trên có thể viết lại như thế này (sau khi hoisting)
// function test() {
//     var a;
//     function foo() {
//         return 10;
//     };
//     console.log(a);
//     console.log(foo())
// }