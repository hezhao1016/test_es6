// 正则表达式

// 创建正则表达式
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

// 测试
console.log('---------------------测试-----------------------');
var re = /^\d{3}\-\d{3,8}$/;
console.log(re.test('010-12345')); // true
console.log(re.test('010-1234x')); // false
console.log(re.test('010 12345')); // false

// 切分字符串
console.log('---------------------切分字符串-----------------------');
console.log('a,b;; c  d'.split(/[\s\,\;]+/)); // ['a', 'b', 'c', 'd']

// 分组
console.log('---------------------分组-----------------------');
var re = /^(\d{3})-(\d{3,8})$/;
console.log(re.exec('010-12345')); // ['010-12345', '010', '12345']
console.log(re.exec('010 12345')); // null


// 提取子串，识别合法的时间
console.log('---------------------提取子串-----------------------');
var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
console.log(re.exec('19:05:30')); // ['19:05:30', '19', '05', '30']

// 贪婪匹配，默认
console.log('---------------------贪婪匹配-----------------------');
var re = /^(\d+)(0*)$/;
console.log(re.exec('102300')); // ['102300', '102300', '']

// 非贪婪匹配
console.log('---------------------非贪婪匹配-----------------------');
var re = /^(\d+?)(0*)$/;
console.log(re.exec('102300')); // ['102300', '1023', '00']

// 全局搜索
console.log('---------------------全局搜索-----------------------');
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

// 例子
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;

// 使用全局匹配:
console.log(re.exec(s)); // ['JavaScript']
console.log(re.lastIndex); // 10

console.log(re.exec(s)); // ['VBScript']
console.log(re.lastIndex); // 20

console.log(re.exec(s)); // ['JScript']
console.log(re.lastIndex); // 29

console.log(re.exec(s)); // ['ECMAScript']
console.log(re.lastIndex); // 44

console.log(re.exec(s)); // null，直到结束仍没有匹配到

// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。



// 验证Email地址
console.log('---------------------验证Email地址-----------------------');
var re = /^[a-zA-Z0-9\_\.]+\@[a-zA-Z0-9\_]+\.[a-zA-Z]+$/;
console.log(re.test("abc@test.com"));
console.log(re.test("abc@-test.com"));


// 验证并提取出带名字的Email地址
var re = /^\<([a-zA-Z0-9\_\.\s]+)\>\s+([a-zA-Z0-9\_\.]+\@[a-zA-Z0-9\_]+\.[a-zA-Z]+)$/;
console.log(re.exec('<Tom Paris> tom@voyager.org'));