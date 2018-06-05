var _ = require('lodash');

// ------> clone
// clone() 把原有对象的所有属性都复制到新的对象中
console.log('---------------------------clone------------------------------');

var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};

var copied = _.clone(source);

console.log(JSON.stringify(copied, null, '  '));

// 注意，clone()是“浅复制”。所谓“浅复制”就是说，两个对象相同的key所引用的value其实是同一对象
// 也就是说，修改source.skills会影响copied.skills。反过来修改copied.skills也会影响source.skills
// 总之，会影响object类型的数据，对string、int等无影响。
console.log(source.skills === copied.skills); // true

// 测试修改属性
copied.skills.pop();
console.log(source.skills);



// ------> cloneDeep
// 类似_.clone，除了它会递归拷贝 value。（也叫深拷贝）。
console.log('---------------------------cloneDeep------------------------------');

var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};

var copied = _.cloneDeep(source);

console.log(JSON.stringify(copied, null, '  '));

console.log(source.skills === copied.skills); // false

// 测试修改属性
copied.skills.pop();
console.log(source.skills);



// ------> eq(value, other)
// 执行 SameValueZero 比较两者的值，来确定它们是否相等。
console.log('---------------------------eq------------------------------');

var object = { 'a': 1 };
var other = { 'a': 1 };

var r = _.eq(object, object); // => true
console.log(r);

r = _.eq(object, other); // => false
console.log(r);

r = _.eq('a', 'a'); // => true
console.log(r);

r = _.eq('a', Object('a')); // => false
console.log(r);

r = _.eq(NaN, NaN); // => true
console.log(r);



// ------> gt(value, other)
// 检查 value是否大于 other。如果value 大于 other 返回 true，否则返回 false。
console.log('---------------------------gt------------------------------');

console.log(_.gt(3, 1)); // => true
console.log(_.gt(3, 3)); // => false
console.log(_.gt(1, 3)); // => false



// ------> gte(value, other)
// 检查 value是否大于或者等于 other。如果value 大于或者等于 other 返回 true，否则返回 false。
console.log('---------------------------gte------------------------------');

console.log(_.gte(3, 1)); // => true
console.log(_.gte(3, 3)); // => true
console.log(_.gte(1, 3)); // => false



// ------> lt(value, other)
// 检查 value 是否小于 other。如果value 小于 other 返回 true，否则返回 false。
console.log('---------------------------lt------------------------------');

console.log(_.lt(1, 3)); // => true
console.log(_.lt(3, 3)); // => false
console.log(_.lt(3, 1)); // => false



// ------> lte(value, other)
// 检查 value 是否小于等于 other。如果value 小于等于 other 返回 true，否则返回 false。
console.log('---------------------------lte------------------------------');

console.log(_.lte(1, 3)); // => true
console.log(_.lte(3, 3)); // => true
console.log(_.lte(3, 1)); // => false



// ------> isEqual
// isEqual() 对两个object进行深度比较，如果内容完全相同，则返回true
console.log('---------------------------isEqual------------------------------');

var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};

console.log(o1 === o2); // false
console.log(_.isEqual(o1, o2)); // true

// isEqual()其实对Array也可以比较
o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];

console.log(o1 === o2); // false
console.log(_.isEqual(o1, o2)); // true



// ------> isMatch
// 告诉你properties中的键和值是否包含在object中
console.log('---------------------------isMatch------------------------------');

var stooge = {name: 'moe', age: 32};
result = _.isMatch(stooge, {age: 32});
console.log(result); // true



// ------> isEmpty
// 如果object 不包含任何值(没有可枚举的属性)，返回true。 对于字符串和类数组（array-like）对象，如果length属性为0，那么_.isEmpty检查返回true。
console.log('---------------------------isEmpty------------------------------');

console.log(_.isEmpty([1, 2, 3])); // false
console.log(_.isEmpty({})); // true
console.log(_.isEmpty([])); // true
console.log(_.isEmpty('')); // true
console.log(_.isEmpty(null)); // true
console.log(_.isEmpty(undefined)); // true



// ------> isNil
// 检查 value 是否是 null 或者 undefined。
console.log('---------------------------isNil------------------------------');

console.log(_.isNil(null)); // true
console.log(_.isNil(undefined)); // true
console.log(_.isNil(void 0)); // true
console.log(_.isNil(NaN)); // false



// ------> isNull
// 如果object的值是 null，返回true。
console.log('---------------------------isNull------------------------------');

console.log(_.isNull(null)); // true
console.log(_.isNull(undefined)); // false



// ------> isUndefined
// 如果value是undefined，返回true。
console.log('---------------------------isUndefined------------------------------');

var zzz;
console.log(_.isUndefined(zzz)); // true
console.log(_.isUndefined(null)); // false



// ------> isArray
// 如果object是一个数组，返回true。
console.log('---------------------------isArray------------------------------');
console.log(_.isArray([1,2,3])); // true



// ------> isMap
// 检查 value 是否为一个 Map 对象。
console.log('---------------------------isMap------------------------------');

console.log(_.isMap(new Map)); // => true
console.log(_.isMap(new WeakMap)); // => false



// ------> isSet
// 检查 value 是否是一个Set对象。
console.log('---------------------------isSet------------------------------');

console.log(_.isSet(new Set)); // => true
console.log(_.isSet(new WeakSet)); // => false



// ------> isObject
// 如果object是一个对象，返回true。需要注意的是JavaScript数组和函数是对象，字符串和数字不是。
console.log('---------------------------isObject------------------------------');

console.log(_.isObject({})); // true
console.log(_.isObject([])); // true
console.log(_.isObject(() => {})); // true
console.log(_.isObject(1)); // false



// ------> isBuffer
// 检查 value 是否是个 buffer。
console.log('---------------------------isBuffer------------------------------');

console.log(_.isBuffer(new Buffer(2))); // => true
console.log(_.isBuffer(new Uint8Array(2))); // => false



// ------> isArguments
// 如果object是一个参数对象，返回true。
console.log('---------------------------isArguments------------------------------');

(function(){ console.log(_.isArguments(arguments)); })(1, 2, 3); // true
console.log(_.isArguments([1,2,3])); // false



// ------> isFunction
// 如果object是一个函数（Function），返回true。
console.log('---------------------------isFunction------------------------------');
console.log(_.isFunction(console.log)); // true



// ------> isNative
// 检查 value 是否是一个原生函数。
// 注意： 这种方法不能可靠地检测在core-js包中存在的本地函数，因为 core-js 规避这种检测。尽管有多个请求，core-js 维护者已经明确表态：任何试图修复检测将受阻。这样一来，我们别无选择，只能抛出一个错误。不幸的是，这也影响其他的包，比如依赖于 core-js的babel-polyfill。
console.log('---------------------------isNative------------------------------');

console.log(_.isNative(Array.prototype.push)); // true
console.log(_.isNative(_)); // false



// ------> isString
// 如果object是一个字符串，返回true。
console.log('---------------------------isString------------------------------');
console.log(_.isString("moe")); // true



// ------> isNumber
// 如果object是一个数值，返回true (包括 NaN)。
console.log('---------------------------isNumber------------------------------');
console.log(_.isNumber(8.4 * 5)); // true



// ------> isInteger
// 检查 value 是否为一个整数。
// 注意: 这个方法基于 Number.isInteger.
console.log('---------------------------isInteger------------------------------');

console.log(_.isInteger(3)); // => true
console.log(_.isInteger(Number.MIN_VALUE)); // => false
console.log(_.isInteger(Infinity)); // => false
console.log(_.isInteger('3')); // => false



// ------> isFinite
// 如果object是一个有限的数字，返回true。
console.log('---------------------------isFinite------------------------------');

console.log(_.isFinite(-101)); // true
console.log(_.isFinite(-Infinity)); // false



// ------> isNaN
// 如果object是 NaN，返回true。
// 注意： 这和原生的isNaN 函数不一样，如果变量是undefined，原生的isNaN 函数也会返回 true 。
console.log('---------------------------isNaN------------------------------');

console.log(_.isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(_.isNaN(undefined)); // false



// ------> isBoolean
// 如果object是一个布尔值，返回true，否则返回false。
console.log('---------------------------isBoolean------------------------------');

console.log(_.isBoolean(null)); // false
console.log(_.isBoolean(false)); // true



// ------> isDate
// 如果object是一个日期（Date），返回true。
console.log('---------------------------isDate------------------------------');
console.log(_.isDate(new Date())); // true



// ------> isRegExp
// 如果object是一个正则表达式，返回true。
console.log('---------------------------isRegExp------------------------------');
console.log(_.isRegExp(/moe/)); // true



// ------> isError
// 如果object继承至 Error 对象，那么返回 true。
console.log('---------------------------isError------------------------------');

try {
    throw new TypeError("Example");
} catch (o_O) {
    console.log(_.isError(o_O)); // true
}



// ------> toString
// 转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。
console.log('---------------------------toString------------------------------');

console.log(_.toString(null)); // => ''
console.log(_.toString(-0)); // => '-0'
console.log(_.toString([1, 2, 3])); // => '1,2,3'



// ------> toArray
// 把list(任何可以迭代的对象)转换成一个数组，在转换 arguments 对象时非常有用。
console.log('---------------------------toArray------------------------------');

(function() {
    var args = _.toArray(arguments);
    console.log(args);
})(1, "a", true, ["x", "y"]);



// ------> toInteger
// 转换 value 为一个整数。
// 注意: 这个方法基于 ToInteger.
console.log('---------------------------toInteger------------------------------');

console.log(_.toInteger(3.2)); // => 3
console.log(_.toInteger(Number.MIN_VALUE)); // => 0
console.log(_.toInteger(Infinity)); // => 1.7976931348623157e+308
console.log(_.toInteger('3.2')); // => 3



// ------> toSafeInteger
// 转换 value 为安全整数。 安全整数可以用于比较和准确的表示。
console.log('---------------------------toSafeInteger------------------------------');

console.log(_.toSafeInteger(3.2)); // => 3
console.log(_.toSafeInteger(Number.MIN_VALUE)); // => 0
console.log(_.toSafeInteger(Infinity)); // => 9007199254740991
console.log(_.toSafeInteger('3.2')); // => 3



// ------> toNumber
// 转换 value 为一个数字。
console.log('---------------------------toNumber------------------------------');

console.log(_.toNumber(3.2)); // => 3.2
console.log(_.toNumber(Number.MIN_VALUE)); // => 5e-324
console.log(_.toNumber(Infinity)); // => Infinity
console.log(_.toNumber('3.2')); // => 3.2
