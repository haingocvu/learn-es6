var name = 'Hoang';
var obj = {
    name: 'Alibaba',
    props: {
        name: 'Aladin',
        getname: function () {
            return this.name
        }
    }
};

console.log(obj.props.getname());

var test = obj.props.getname;

console.log(test());

//this là calling object
//do đó ở dòng 12 thì khi ta gọi trực tiếp obj.props.getname() thì calling object ở đây là thằng props.
//cho nên kết quả in ra sau khi thực hiện dòng 12 sẽ là "Aladin"

//ở dòng 14 ta lấy ra định nghĩa của hàm getname và gán vào biến test;
//sau đó ta gọi test(). ở đây không có calling object thì this ở function scope sẽ được default binding
//đến global object. (browser là window). cho nên kết quả sẽ là "Hoàng".
//biến name ở global có thể viết lại là window.name;