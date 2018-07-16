function test() {
    console.log(func())
    var func = () => {
        return 10
    }
}
test();
//arrow function is not hoisted
//do đó sẽ văng ra lỗi là func is not defined.