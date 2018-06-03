// 对象的方法

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming.age); // [Function: age]
console.log(xiaoming.age());


// 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。
console.log('---------------------------------------');
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age); // 正常结果
console.log(getAge()); // NaN


// 这样也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用！
console.log('---------------------------------------');
var fn = xiaoming.age; // 先拿到xiaoming的age函数
console.log(fn()); // NaN


// this的使用
// 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
// 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
// 在strict模式下函数的this指向undefined

// this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined
// 用一个that变量首先捕获this,可以在函数内部定义的函数中使用this
console.log('---------------------------------------');
xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};
console.log(xiaoming.age());


// apply()
// 指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
console.log('---------------------------------------');
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());
console.log(getAge.apply(xiaoming, [])); // this指向xiaoming, 参数为空


// 与apply()类似的方法是call()，唯一区别是：
// - apply()把参数打包成Array再传入；
// - call()把参数按顺序传入。
// 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
console.log('---------------------------------------');
console.log(Math.max.apply(null, [3, 5, 4])); // 5
console.log(Math.max.call(null, 3, 5, 4)); // 5


// 装饰器
// 利用apply()，我们还可以动态改变函数的行为。
// JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
// 现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：
console.log('---------------------------------------');
var count = 0;
var oldParseInt = parseInt; // 保存原函数

parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3