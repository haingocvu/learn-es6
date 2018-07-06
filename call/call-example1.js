let obj = {
    name: 'Nhi',
    age: 28
}

function sayHello() {
    let sayhi = "Hello: " + this.name;
    console.log(sayhi);
}

sayHello.call(obj);

//ở đây là t truyền context cho this khi gọi hàm call.