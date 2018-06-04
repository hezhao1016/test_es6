// ES6标准新增了一种新的函数：Arrow Function（箭头函数），相当于匿名函数。

/*
x >= x * x;

上面的箭头函数相当于：

function (x) {
    return x * x;
}
*/

// 没有参数 必须写空括号
var fn1 = () => console.log('Hello, Arrow Function');

// 一个参数，括号可写可不写， 一行代码可以省略return语句
var fn2 = (x) => x * x;
var fn3 = x => x * x;

// 两个参数，用括号括起来
var fn4 = (x, y) => x * y;

// 多行代码可以用括号括起来，不能省略return语句
var fn5 = (x, y) => {
    console.log('Hello, Arrow Function2');
    return x * y;
};

// 可变参数
var fn6 = (x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getTempItem = id => ({ id: id, name: "Temp" });


fn1();
console.log(fn2(2));
console.log(fn3(2));
console.log(fn4(2, 3));
console.log(fn5(2, 3));
console.log(fn6(2, 3, 4, 5));
console.log(getTempItem(111));



// this
// 箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。
console.log('-----------------------------------');

// 回顾前面的例子，由于JavaScript函数对this绑定的错误处理，下面的例子无法得到预期结果：
/*var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};*/

// 现在，箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj.getAge()); // 25

// 如果使用箭头函数，以前的那种hack写法：
// var that = this;
// 就不再需要了。

// 由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
console.log(obj.getAge(2015)); // 25


// 使用箭头函数简化sort排序
var arr = [10, 20, 1, 2];
arr.sort((x, y) => x - y);
console.log(arr); // [1, 2, 10, 20]