//thứ tự thực hiện hàm là từ trên xuống.
//cái nào có trước sẽ thực hiện trước
//tuy nhiên không chắc là nó sẽ kết thúc trước
//ở trường hợp async function thì nó sẽ kết thúc sau như dưới đây.
setTimeout(() => {
    console.log('da het 1 giay')
}, 0);

console.log('ket thuc');
let x = 8;
x++;
console.log(x)

//trong 1 tac vu bat dong bo. các cái callback function của nó
//chỉ được thực hiện sau khi tất cả tác vụ đồng bộ của nó đã thực thi xong hết.
//do đó ta sẽ thấy kết quả log ra là
//kết thúc
//9
//da het 1 giay
