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



// ------> _.difference(array, [values])
// 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
// 注意: 不像 _.pullAll，这个方法会返回一个新数组。
console.log('---------------------------difference------------------------------');

r = _.difference([3, 2, 1], [4, 2]); // => [3, 1]
console.log(r);



// ------> _.differenceBy(array, [values], [iteratee=_.identity])
// 类似_.difference ，除了它接受一个 iteratee。调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
// 注意: 不像 _.pullAllBy，这个方法会返回一个新数组。
console.log('---------------------------differenceBy------------------------------');

r = _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor); // => [3.1, 1.3]
console.log(r);

// The `_.property` iteratee shorthand.
r = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // => [{ 'x': 2 }]
console.log(r);



// ------> _.differenceWith(array, [values], [comparator])
// 类似_.difference ，除了它接受一个 comparator(比较器)。它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
// 注意: 不像 _.pullAllWith, 这个方法会返回一个新数组。
console.log('---------------------------differenceWith------------------------------');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

r = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual); // => [{ 'x': 2, 'y': 1 }]
console.log(r);



// ------> without
// without() 返回一个删除所有values值后的 array副本。
console.log('---------------------------without------------------------------');

nums = _.without([2, 1, 2, 3], 1, 2);
console.log(nums);



// ------> _.drop(array, [n=1])
// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
console.log('---------------------------drop------------------------------');

console.log(_.drop([1, 2, 3])); // => [2, 3]
console.log(_.drop([1, 2, 3], 2)); // => [3]
console.log(_.drop([1, 2, 3], 5)); // => []
console.log(_.drop([1, 2, 3], 0)); // => [1, 2, 3]



// ------> _.dropRight(array, [n=1])
// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
console.log('---------------------------dropRight------------------------------');

console.log(_.dropRight([1, 2, 3])); // => [1, 2]
console.log(_.dropRight([1, 2, 3], 2)); // => [1]
console.log(_.dropRight([1, 2, 3], 5)); // => []
console.log(_.dropRight([1, 2, 3], 0)); // => [1, 2, 3]



// ------> _.dropRightWhile(array, [predicate=_.identity])
// 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
console.log('---------------------------dropRightWhile------------------------------');

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];

r = _.dropRightWhile(users, function(o) { return !o.active; }); // => objects for ['barney']
console.log(r);

r = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false }); // => objects for ['barney', 'fred']
console.log(r);

r = _.dropRightWhile(users, ['active', false]); // => objects for ['barney']
console.log(r);

r = _.dropRightWhile(users, 'active'); // => objects for ['barney', 'fred', 'pebbles']
console.log(r);



// ------> _.dropWhile(array, [predicate=_.identity])
// 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
console.log('---------------------------dropWhile------------------------------');

r = _.dropWhile(users, function(o) { return !o.active; }); // => objects for ['pebbles']
console.log(r);

r = _.dropWhile(users, { 'user': 'pebbles', 'active': false }); // => objects for ['fred', 'pebbles']
console.log(r);

r = _.dropWhile(users, ['active', false]); // => objects for ['pebbles']
console.log(r);

r = _.dropWhile(users, 'active'); // => objects for ['barney', 'fred', 'pebbles']
console.log(r);



// ------> _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
console.log('---------------------------findIndex/findLastIndex------------------------------');

r = _.findIndex(users, function(o) { return o.user == 'barney'; }); // => 0
console.log(r);

r = _.findIndex(users, { 'user': 'fred', 'active': false }); // => 1
console.log(r);

r = _.findIndex(users, ['active', false]); // => 0
console.log(r);

r = _.findIndex(users, 'active'); // => 2
console.log(r);

// _.findLastIndex()类似_.findIndex()， 区别是它是从右到左的迭代集合array中的元素。



// ------> indexOf/lastIndexOf
// indexOf()        返回value在该 array 中的索引值，如果value不存在 array中就返回-1。
// lastIndexOf()    返回value在该 array 中的从最后开始的索引值，如果value不存在 array中就返回-1。
console.log('---------------------------indexOf/lastIndexOf------------------------------');

nums = [1, 2, 1, 2];

r = _.indexOf(nums, 2); // => 1
console.log(r);
// Search from the `fromIndex`.
r = _.indexOf(nums, 2, 2); // => 3
console.log(r);

r = _.lastIndexOf(nums, 2); // => 3
console.log(r);
// Search from the `fromIndex`.
r = _.lastIndexOf(nums, 2, 2); // => 1
console.log(r);



// ------> flatten/flattenDeep/flattenDepth
// flatten(array) 减少一级array嵌套深度。
// flattenDeep(array) 将array递归为一维数组。
// flattenDepth(array, [depth=1]) 根据 depth 递归减少 array 的嵌套层级
console.log('---------------------------flatten/flattenDeep/flattenDepth------------------------------');

var array = [1, [2, [3, [4]], 5]];

r = _.flatten(array); // => [1, 2, [3, [4]], 5]
console.log(r);

r = _.flattenDeep(array); // => [1, 2, 3, 4, 5]
console.log(r);

r = _.flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
console.log(r);
r = _.flattenDepth(array, 2); // => [1, 2, 3, [4], 5]
console.log(r);



// ------> _.fromPairs(pairs)
// 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
console.log('---------------------------fromPairs------------------------------');

r = _.fromPairs([['fred', 30], ['barney', 40]]); // => { 'fred': 30, 'barney': 40 }
console.log(r);



// ------> head/last
// head(array) 获取数组 array 的第一个元素。别名first()
// last(array) 获取array中的最后一个元素。
console.log('---------------------------head/last------------------------------');

console.log(_.head([1, 2, 3])); // => 1
console.log(_.first([1, 2, 3])); // => 1
console.log(_.last([1, 2, 3])); // => 1



// ------> take/takeRight/takeRightWhile/takeWhile
// take(array, [n=1])           创建一个数组切片，从array数组的起始元素开始提取n个元素。
// takeRight(array, [n=1])      创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
// takeRightWhile(array, [predicate=_.identity])    从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
// takeWhile(array, [predicate=_.identity])         从array数组的起始元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
console.log('---------------------------take/takeRight/takeRightWhile/takeWhile------------------------------');

array = [1, 2, 3];

console.log(_.take(array)); // => [1]
console.log(_.take(array, 2)); // => [1, 2]
console.log(_.take(array, 5)); // => [1, 2, 3]
console.log(_.take(array, 0)); // => []

console.log('-------------');
console.log(_.takeRight(array)); // => [1]
console.log(_.takeRight(array, 2)); // => [1, 2]
console.log(_.takeRight(array, 5)); // => [1, 2, 3]
console.log(_.takeRight(array, 0)); // => []

console.log('-------------');
r = _.takeRightWhile(users, function(o) { return !o.active; }); // => objects for ['fred', 'pebbles']
console.log(r);
r = _.takeRightWhile(users, { 'user': 'pebbles', 'active': false }); // => objects for ['pebbles']
console.log(r);
r = _.takeRightWhile(users, ['active', false]); // => objects for ['fred', 'pebbles']
console.log(r);
r = _.takeRightWhile(users, 'active'); // => []
console.log(r);


console.log('-------------');
users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false},
    { 'user': 'pebbles', 'active': true }
];
r = _.takeWhile(users, function(o) { return !o.active; }); // => objects for ['barney', 'fred']
console.log(r);
r = _.takeWhile(users, { 'user': 'pebbles', 'active': false }); // => objects for ['barney']
console.log(r);
r = _.takeWhile(users, ['active', false]); // => objects for ['barney', 'fred']
console.log(r);
r = _.takeWhile(users, 'active'); // => []
console.log(r);



// ------> union/intersection
// union() 返回传入的 arrays（数组）并集：按顺序返回，返回数组的元素是唯一的，可以传入一个或多个 arrays （数组）。
// intersection() 返回传入 arrays（数组）交集。结果中的每个值是存在于传入的每个arrays（数组）里。
console.log('---------------------------union/intersection------------------------------');

var nums = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(nums);

nums = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(nums);



// ------> uniq
// 返回 array去重后的副本, 使用 === 做相等测试
console.log('---------------------------uniq------------------------------');

console.log(_.uniq([1, 2, 1, 3, 1, 4]));



// ------> zip/unzip
// zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。例如，你有一个Array保存了名字，另一个Array保存了分数，现在，要把名字和分数给对上，用zip()轻松实现：
// unzip()则是反过来
console.log('---------------------------zip/unzip------------------------------');

var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
var namesAndScores = _.zip(names, scores);
console.log(namesAndScores); // [['Adam', 85], ['Lisa', 92], ['Bart', 59]]

// var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
console.log(_.unzip(namesAndScores)); // [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]