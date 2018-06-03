// 函数

// 函数定义
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// 传入的参数可随意多少
console.log('------------函数定义-----------');
console.log(abs(10)); // 返回10
console.log(abs(10, 'blablabla')); // 返回10
console.log(abs(-9, 'haha', 'hehe', null)); // 返回9
// console.log(abs()); // 返回NaN


// arguments
// 只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
console.log('-----------arguments------------');
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

// arguments最常用于判断传入参数的个数
/**
 * foo2(a[, b], c)
 * 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
 * @param a
 * @param b
 * @param c
 */
function foo2(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    console.log(a, b, c);
    // ...
}
console.log('-----------arguments判断传入参数的个数------------');
foo2(1, 2, 3);
foo2(1, 3);


// rest 参数(ES6)
// 注意：rest参数只能写在最后，前面用...标识， 默认为空数组
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
console.log('------------rest 参数-----------');
foo(1, 2, 3, 4, 5); // 结果:a = 1, b = 2, Array [ 3, 4, 5 ]
foo(1); // 结果:a = 1, b = undefined, Array []


// return语句的大坑
// JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑：
/*
function foo() {
    return
    { name: 'foo' };
}

foo(); // undefined

// 要小心了，由于JavaScript引擎在行末自动添加分号的机制，上面的代码实际上变成了：
function foo() {
    return; // 自动添加了分号，相当于return undefined;
    { name: 'foo' }; // 这行语句已经没法执行到了
}

// 所以正确的多行写法是：
function foo() {
    return { // 这里不会自动加分号，因为{表示语句尚未结束
        name: 'foo'
    };
}
*/