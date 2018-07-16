function test() {
    console.log(func())
    var func = function () {
        return 10
    }
}
test();
//expression không hoisting.
//do đó sẽ xảy ra lỗi là func is not a funcion (func is not defined.)
