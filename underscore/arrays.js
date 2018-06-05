/*
Underscore 是一个JavaScript实用库,提供了类似Prototype.js的一些功能,但是没有继承任何JavaScript内置对象。它弥补了部分jQuery没有实现的功能,同时又是Backbone.js必不可少的部分。

Underscore提供了80多个函数,包括常用的: map, select, invoke... 当然还有更多专业的辅助函数,如:函数绑定, JavaScript模板功能, 强类型相等测试, 等等.
在新的浏览器中, 有许多函数如果浏览器本身直接支持,将会采用原生的,如 forEach, map, reduce, filter, every, some 和 indexOf.

中文文档：http://www.css88.com/doc/underscore/
*/

// underscore为Array提供了许多工具类方法，可以更方便快捷地操作Array。

var _ = require('underscore');

// ------> first/last
// 顾名思义，这两个函数分别取第一个和最后一个元素
console.log('---------------------------first/last------------------------------');

var arr = [2, 4, 6, 8];
console.log(_.first(arr)); // 2
console.log(_.last(arr)); // 8



// ------> flatten
// flatten()接收一个Array，无论这个Array里面嵌套了多少个Array，flatten()最后都把它们变成一个一维数组：
console.log('---------------------------flatten------------------------------');

console.log(_.flatten([1, [2], [3, [[4], [5]]]])); // [1, 2, 3, 4, 5]



// ------> zip/unzip
// zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。例如，你有一个Array保存了名字，另一个Array保存了分数，现在，要把名字和分数给对上，用zip()轻松实现：
// unzip()则是反过来
console.log('---------------------------zip/unzip------------------------------');

var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
var namesAndScores = _.zip(names, scores)
console.log(namesAndScores); // [['Adam', 85], ['Lisa', 92], ['Bart', 59]]

// var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
console.log(_.unzip(namesAndScores)); // [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]



// ------> object
// 有时候你会想，与其用zip()，为啥不把名字和分数直接对应成Object呢？别急，object()函数就是干这个的：
console.log('---------------------------object------------------------------');

console.log(_.object(names, scores)); // {Adam: 85, Lisa: 92, Bart: 59}



// ------> range
// range()让你快速生成一个序列，不再需要用for循环实现了：
console.log('---------------------------range------------------------------');

// 从0开始小于10:
var nums = _.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums);

// 从1开始小于11：
nums = _.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums);

// 从0开始小于30，步长5:
nums = _.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]
console.log(nums);

// 从0开始大于-10，步长-1:
nums = _.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(nums);



// ------> union/intersection
// union() 返回传入的 arrays（数组）并集：按顺序返回，返回数组的元素是唯一的，可以传入一个或多个 arrays （数组）。
// intersection() 返回传入 arrays（数组）交集。结果中的每个值是存在于传入的每个arrays（数组）里。
console.log('---------------------------union/intersection------------------------------');

var nums = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(nums);

nums = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(nums);



// ------> without/intersection
// without() 返回一个删除所有values值后的 array副本。
// difference() 类似于without，但返回的值来自array参数数组，并且不存在于other 数组。
console.log('---------------------------without/intersection------------------------------');

nums = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
console.log(nums);

nums = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
console.log(nums);



// ------> uniq
// 返回 array去重后的副本, 使用 === 做相等测试
console.log('---------------------------uniq------------------------------');

console.log(_.uniq([1, 2, 1, 3, 1, 4]));



// ------> indexOf/lastIndexOf/findIndex/findLastIndex
// indexOf()        返回value在该 array 中的索引值，如果value不存在 array中就返回-1。
// lastIndexOf()    返回value在该 array 中的从最后开始的索引值，如果value不存在 array中就返回-1。
// findIndex()      类似于_.indexOf，当predicate通过真检查时，返回第一个索引值；否则返回-1。
// findLastIndex()  和_.findIndex类似，但反向迭代数组，当predicate通过真检查时，最接近末端的索引值将被返回。
console.log('---------------------------indexOf/lastIndexOf/findIndex/findLastIndex------------------------------');

nums = [1, 2, 3, 1, 2, 3];

var index = _.indexOf(nums, 2); // 1
console.log(index);

index = _.lastIndexOf(nums, 2); // 4
console.log(index);

var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
    {'id': 2, 'name': 'Ted', 'last': 'White'},
    {'id': 3, 'name': 'Frank', 'last': 'James'},
    {'id': 4, 'name': 'Ted', 'last': 'Jones'}];

index = _.findIndex(users, { name: 'Ted' }); // 1
console.log(index);

index = _.findLastIndex(users, { name: 'Ted' }); // 3
console.log(index);