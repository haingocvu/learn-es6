'use strict';
(function () {
    var a = b = 5;
})();
console.log(b)
//bien b la bien chua duoc dinh nghia.
//trong strict mode thi b chua duoc dinh nghia nen se văng ra lỗi là b is not defined.
//strict mode khong tu dong tao bien global.