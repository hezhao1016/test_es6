// 异常处理

var r1, r2, s = null;
try {
    console.log('进入到try');
    r1 = s.length; // 此处应产生错误
    r2 = 100; // 该语句不会执行
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log('finally');
}


// 错误类型
// JavaScript有一个标准的Error对象表示错误，还有从Error派生的TypeError、ReferenceError等错误对象。
try {
    var c = a + b;
} catch (e) {
    if (e instanceof TypeError) {
        console.log('TypeError:' + e.message);
    } else if (e instanceof ReferenceError) {
        console.log('ReferenceError:' + e.message);
    } else if (e instanceof Error) {
        console.log('Error:' + e.message);
    } else {
        console.log('OtherError: ' + e);
    }
}


// 抛出错误
var r, n;
try {
    n = 'a';
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}


// 如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，直到被JavaScript引擎捕获，代码终止执行。