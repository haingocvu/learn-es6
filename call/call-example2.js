//bỏ comment chỗ use strict để thấy sự thay đổi.
//"use strict";

let name = "Anna";

function sayHello() {
    console.log("Hello: " + name);
    console.log(this);
}

sayHello.call();

//không truyền tham số this vào thì this sẽ bind đến default.
//trường hợp này là bind đến global object. dùng node thì sẽ là node object.
//dùng browser thì sẽ là window object
//use strict sẽ loại bỏ default binding. lúc này this sẽ là undefined.