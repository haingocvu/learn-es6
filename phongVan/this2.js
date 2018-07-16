"use strict";
var name = 'Hoang';
var obj = {
    name: 'Aladin',
    props: {
        name: 'Alisabet',
        getName: function () {
            return this.name
        }
    }
};

console.log(obj.props.getName());

var test = obj.props.getName;

console.log(test())

//trong strict mode thì không có default biding đến global object
//do đó mà kết quả trả về sẽ là Alisabet ở dòng 13

//còn ở dòng 17, do không có default biding global object cho nên nó sẽ không hiểu this là gì.
//do đó mà sẽ văng ra lỗi. Cannot read property 'name' of undefined