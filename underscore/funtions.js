// 因为underscore本来就是为了充分发挥JavaScript的函数式编程特性，所以也提供了大量JavaScript本身没有的高阶函数。

var _ = require('underscore');

// ------> bind
// 绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object
console.log('---------------------------bind------------------------------');

var s = '   Hello  ';
var fn = _.bind(s.trim, s);
console.log(fn());



// ------> partial
// partial() 为一个函数创建偏函数。
console.log('---------------------------partial------------------------------');

// 固定住第一个参数
// 以下类似于Math.pow(2, y), 用于计算2的y次方：
var pow2N = _.partial(Math.pow, 2);
console.log(pow2N(3)); // 8
console.log(pow2N(5)); // 32
console.log(pow2N(10)); // 1024

// 固定住第二个参数，用_作占位符
// 以下类似于Math.pow(x, 3), 用于计算x的3次方：
var cube = _.partial(Math.pow, _, 3);
console.log(cube(3)); // 27
console.log(cube(5)); // 125
console.log(cube(10)); // 1000



// ------> memoize
// memoize()方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。如果传递了 hashFunction 参数，就用 hashFunction 的返回值作为key存储函数的计算结果。
//  hashFunction 默认使用function的第一个参数作为key。memoized值的缓存可作为返回函数的cache属性。
console.log('---------------------------memoize------------------------------');

var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
});

console.log(factorial(10)); // 3628800
// 对于相同的调用，比如连续两次调用factorial(10)，第二次调用并没有计算，而是直接返回上次计算后缓存的结果。
console.log(factorial(10)); // 3628800
// 因为使用到了递归，所以factorial(9)也被缓存了。
console.log(factorial(9)); // 362880



// ------> after
// 创建一个函数, 只有在运行了 count 次之后才有效果
console.log('---------------------------after------------------------------');

// 执行2次之后才有效果
var sayHello = _.after(2, function () {
    console.log('sayHello!');
});

// 测试效果:
sayHello();
sayHello(); // 这里开始生效
sayHello();



// ------> before
// 创建一个函数,调用不超过count 次。 当count已经达到时，最后一个函数调用的结果将被记住并返回。
console.log('---------------------------before------------------------------');

// 不超过3次，也就是最多执行2次
var login = _.before(3, function () {
    console.log('Login ok!');
});

// 测试效果:
login();
login();
login();



// ------> once
// once()保证某个函数执行且仅执行一次。实际上就是 _.once = _.partial(_.before, 2);
console.log('---------------------------once------------------------------');

register = _.once(function () {
    console.log('Register ok!');
});

// 测试效果:
register();
register();
register();



// ------> delay
// delay()可以让一个函数延迟执行，效果和setTimeout()是一样的，但是代码明显简单了
console.log('---------------------------delay------------------------------');

function show(){
    console.log('您好！现在是两秒后。')
}

// 2秒后调用show():
_.delay(show, 2000);

// 如果要延迟调用的函数有参数，把参数也传进去：
var log = _.bind(console.log, console);
_.delay(log, 2300, 'Hello,', 'world!'); // 2秒后打印'Hello, world!':