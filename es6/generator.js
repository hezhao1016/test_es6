/*
generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
定义:
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}*/

// 编写一个产生斐波那契数列的函数
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return "ok";
}

// 创建一个generator对象
var f = fib(5);

// 通过next()调用
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。
// 返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
//
// 当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了。


// 用for ... of循环迭代generator对象
console.log('--------------------------------------');
for (var x of fib(10)) {
    console.log(x);
}



// generator的优点：就是把异步回调代码变成“同步”代码
// 例如：AJAX调用
/*
try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
}
catch (err) {
    handle(err);
}
*/


// 练习：实现计数器
console.log('--------------------------------------');

function* next_id() {
    var i = 0;
    while(true){
        yield ++i;
    }
}

g = next_id();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);