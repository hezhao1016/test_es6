/*
Lodash 是一款非常知名的 JavaScript 工具库，能够让开发者十分便捷地操纵数组和对象。

lodash和underscore都是现在非常流行的两个javascript库，提供了一套函数式编程的实用功能。
而lodash本身最初也是underscore的一个fork，因为和其他(Underscore.js的)贡献者意见相左。

lodash主要使用了延迟计算，所以也使得lodash的性能远远超过了Underscore。
在lodash中使用延迟计算，也就意味着当我们使用链式方法时，在直接或间接调用value()之前是不会执行的。

中文文档：http://www.css88.com/doc/lodash/
*/


var _ = require('lodash');

// ------> _.chunk(array, [size=1])
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
console.log('---------------------------chunk------------------------------');

var r = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
console.log(r);

r = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
console.log(r);



// ------> _.compact(array)
// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
console.log('---------------------------compact------------------------------');

r = _.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
console.log(r);



// ------> _.concat(array, [values])
// 创建一个新数组，将array与任何数组 或 值连接在一起。
console.log('---------------------------concat------------------------------');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]



