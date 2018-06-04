// 在JavaScript的世界里，一切都是对象。

// typeof 获取对象的类型，返回字符串
console.log('---------------------typeof-----------------------');
console.log(typeof 123);        // 'number'
console.log(typeof(NaN));        // 'number'
console.log(typeof 'str');      // 'string'
console.log(typeof true);       // 'boolean'
console.log(typeof undefined);  // 'undefined'
console.log(typeof Math.abs);   // 'function'
// 注意 null、数组的类型都是object
console.log(typeof null);       // 'object'
console.log(typeof []);         // 'object'
console.log(typeof {});         // 'object'


// 包装对象
console.log('---------------------包装对象-----------------------');
var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型

// 注意包装对象类型已经变为object了
console.log(typeof new Number(123)); // 'object'
console.log(new Number(123) === 123); // false

console.log(typeof new Boolean(true)); // 'object'
console.log(new Boolean(true) === true); // false

console.log(typeof new String('str')); // 'object'
console.log(new String('str') === 'str'); // false


console.log('---------------------Number()、Boolean()、String()-----------------------');
// 如果我们在使用Number、Boolean和String时，没有写new会发生什么情况？
// 此时，Number()、Boolean和String()被当做普通函数，把任何类型的数据转换为number、boolean和string类型（注意不是其包装类型）：
var n = Number('123'); // 123，相当于parseInt()或parseFloat()
console.log(typeof n); // 'number'

var b = Boolean('true'); // true
console.log(typeof b); // 'boolean'
var b2 = Boolean('false'); // true! 'false'字符串转换结果为true！因为它是非空字符串！
console.log(b2);
var b3 = Boolean(false); // false
console.log(b3);
var b4 = Boolean(''); // false
console.log(b4);


var s = String(123.45); // '123.45'
console.log(typeof s); // 'string'


// 总结一下，有这么几条规则需要遵守：
// - 不要使用new Number()、new Boolean()、new String()创建包装对象；
// - 用- parseInt()或parseFloat()来转换任意类型到number；
// - 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
// - 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
// - typeof操作符可以判断出number、boolean、string、function和undefined；
// - 判断Array要使用Array.isArray(arr)；
// - 判断null请使用myVar === null；
// - 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
// - 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。

console.log('-----------------------tips--------------------------');
// 另外,number对象调用toString()报SyntaxError：
// 遇到这种情况，要特殊处理一下：
console.log(123..toString()); // '123', 注意是两个点！
console.log((123).toString()); // '123'