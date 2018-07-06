let obj = {
    name: 'Julie',
    sayHello: function () {
        return "hello: " + this.name
    }
}

console.log(obj.sayHello()); //dùng như vầy thì ok. do con trỏ this đang được gọi bên trong 1 obj
//calling object là obj do đó thì nó vẫn hiểu được this. name. nghĩa là hiểu được con trỏ this

//nhưng nếu ta làm như sau thì nó sẽ hiểu this là global object.
//ta sẽ gán cái function sayHello vào 1 biến khác.
//trong trường hợp này ta dùng node nên global object sẽ là node.
//do đó nó sẽ không thể hiểu được this.name. vì this giờ là global object mà name lại là biến local trong hàm sayHello

let cloneSayHello = obj.sayHello; //clone sayHello ra.

//lúc này cloneSayHello sẽ không thể hiểu đươc this.name là gì.
//bỏ comment dùng ngay dưới đây để thấy kết quả là name: undefined

//console.log(cloneSayHello())

//để giải quyết vấn đề này ta dùng hàm function.bind(this,...args)
//args có thể có hoặc không.

cloneSayHello = cloneSayHello.bind(obj)

console.log(cloneSayHello())

//như các bạn thấy thì bây giờ đã có giá trị của this. name trong hàm cloneSayHello.
//như vậy là this đã được hiểu là obj chứ không phải là global object (có được do defaul binding) nữa.
//ứng dụng react thì trong component cũng sẽ sử dụng hàm bind này ở constructor
// để cung cấp con trỏ this cho function cần sử dụng this