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

console.log(test.call(obj.props));

//line 12 in ra Aladin là điều không thể bàn cãi

//line 16 thì ta đang gọi hàm test với context là obj.props
//hay nói cách khác. ta đang bind this cho hàm test. và this bây giờ là this.props
//do đó kết quả trả về là Aladin.