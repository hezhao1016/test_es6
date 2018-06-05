// 和Array类似，underscore也提供了大量针对Object的函数。

var _ = require('underscore');

// ------> keys/allKeys
// keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的
// allKeys()除了object自身的key，还包含从原型链继承下来的
console.log('---------------------------keys/allKeys------------------------------');

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);

console.log(_.keys(xiaoming)); // ['name', 'age']
console.log(_.allKeys(xiaoming)); // ['name', 'age', 'school']



// ------> values
// 和keys()类似，values()返回object自身但不包含原型链继承的所有值
// 注意，没有allValues()
console.log('---------------------------values------------------------------');

console.log(_.values(xiaoming)); // ['小明', 20]



// ------> mapObject
// mapObject() 就是针对object的map版本
console.log('---------------------------mapObject------------------------------');

var obj = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
var mapObj =_.mapObject(obj, (v, k) => 100 + v); // { a: 101, b: 102, c: 103 }
console.log(JSON.stringify(mapObj));



// ------> invert
// invert()把object的每个key-value来个交换，key变成value，value变成key
console.log('---------------------------invert------------------------------');

var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};

var reverseObj = _.invert(obj); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }
console.log(JSON.stringify(reverseObj));



// ------> extend/extendOwn
// extend()把多个object的key-value合并到第一个object并返回
//     注意：如果有相同的key，后面的object的value将覆盖前面的object的value。
// extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性。
console.log('---------------------------extend/extendOwn------------------------------');

var a = {name: 'Bob', age: 20};
var newa = _.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
console.log(newa);

// 变量a的内容也改变了：
console.log(a); // {name: 'Bob', age: 88, city: 'Beijing'}



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



// ------> 自己实现一个克隆方法 myClone()， 无论修改副本什么属性都不会影响原对象
console.log('---------------------------myClone------------------------------');

_.myClone = function (obj) {
    if (!_.isObject(obj)) return obj;
    // 数组
    if(_.isArray(obj)){
        var o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            // 如果元素是对象，那么就递归赋值
            if(_.isObject(obj[i])){
                o[i] = _.myClone(obj[i]);
            }else{
                o[i] = obj[i];
            }
        }
        return o;
    } else { // 对象
        var o = {};
        for (var key in obj) {
            // 过滤掉对象继承的属性
            if (obj.hasOwnProperty(key)) {
                // 如果值也是对象，那么就递归赋值
                if(_.isObject(obj[key])){
                    o[key] = _.myClone(obj[key]);
                }else{
                    o[key] = obj[key];
                }
            }
        }
        return o;
    }
};

source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};

copied = _.myClone(source);

console.log(JSON.stringify(copied, null, '  '));

console.log(source.skills === copied.skills); // true

// 测试修改属性
copied.skills.pop();
console.log(source.skills);



// ------> has
// 对象是否包含给定的键, 等同于object.hasOwnProperty(key)，但是使用hasOwnProperty 函数的一个安全引用，以防意外覆盖。
console.log('---------------------------has------------------------------');

var result = _.has({a: 1, b: 2, c: 3}, "b");
console.log(result);



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



// ------> isObject
// 如果object是一个对象，返回true。需要注意的是JavaScript数组和函数是对象，字符串和数字不是。
console.log('---------------------------isObject------------------------------');

console.log(_.isObject({})); // true
console.log(_.isObject([])); // true
console.log(_.isObject(() => {})); // true
console.log(_.isObject(1)); // false



// ------> isArguments
// 如果object是一个参数对象，返回true。
console.log('---------------------------isArguments------------------------------');

(function(){ console.log(_.isArguments(arguments)); })(1, 2, 3); // true
console.log(_.isArguments([1,2,3])); // false



// ------> isFunction
// 如果object是一个函数（Function），返回true。
console.log('---------------------------isFunction------------------------------');
console.log(_.isFunction(console.log)); // true



// ------> isString
// 如果object是一个字符串，返回true。
console.log('---------------------------isString------------------------------');
console.log(_.isString("moe")); // true



// ------> isNumber
// 如果object是一个数值，返回true (包括 NaN)。
console.log('---------------------------isNumber------------------------------');
console.log(_.isNumber(8.4 * 5)); // true



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