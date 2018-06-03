'use strict'; // 严格模式

/**
 * 一些新特性、小技巧
  */

// 给多个变量赋值
console.log('-------------------多个变量赋值--------------------');
var a = 1, b = 'A', c = true;
console.log(a, b, c);

var a = 1,
    b = 'A',
    c = [1, 2, 3];
console.log(a, b, c);


// 模板|多行 字符串
console.log('-------------------模板|多行 字符串--------------------');
var name = 'Horace';
console.log(`Hello, ${name}!`);
console.log(`1 + 2 * 3 = ${1+2*3}`);

// 多行字符串，用来输出HTML十分方便
var str = `<div>
<p>这是一个多行字符串</p>
</div>`;
console.log(str);


console.log('------------------- == 与 === --------------------');
// == 与 ===
// ==  它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果
// === 它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较
// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。
console.log('false == 0 is >>> ', false == 0);
console.log('false === 0 is >>>', false === 0);
console.log('\'1\' == 1 is >>>', '1' == 1);
console.log('\'1\' === 1 is >>>', '1' === 1);

// NaN这个特殊的Number与所有其他值都不相等
console.log('NaN == NaN is >>>', NaN == NaN);
// 唯一能判断NaN的方法是通过is >>>NaN()函数
console.log('isNaN(NaN) is >>>', isNaN(NaN));

console.log('Infinity == Infinity is >>>', Infinity == Infinity);
console.log('undefined == undefined is >>>', undefined == undefined);
console.log('null == null is >>>', null == null);

// null 等于 undefined
console.log('null == undefined is >>>', null == undefined);
console.log('null === undefined is >>>', null === undefined);