// underscore为集合类对象提供了一致的接口。集合类是指Array和Object，暂不支持Map和Set。

var _ = require('underscore');

// ------> map/filter
// 和Array的map()与filter()类似，但是underscore的map()和filter()可以作用于Object。
// 当作用于Object时，传入的函数为function (value, key)，第一个参数接收value，第二个参数接收key：
console.log('---------------------------map/filter------------------------------');

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

// map, 返回值数组
var upper = _.map(obj, function (value, key) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

console.log(JSON.stringify(upper));


// mapObject() 就是针对object的map版本
var upperObj = _.mapObject(obj, function (value, key) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

console.log(JSON.stringify(upperObj));



// ------> reduce/reducRight
// reduce 把一个函数作用在这个Array的每个元素上，reduce()把结果继续和序列的下一个元素做累积计算
// reducRight 是从右侧开始组合元素的reduce函数
console.log('---------------------------reduce/reduceRight------------------------------');

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat);



// ------> reject/each
// reject 过滤元素，与filter相反
// each 遍历list中的所有元素，按顺序用每个元素当做参数调用 iteratee 函数。
console.log('---------------------------reject/each------------------------------');

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);

_.each([1, 2, 3], function (value, index, self) {
    console.log(value);
});
_.each({one: 1, two: 2, three: 3}, function (value, index, self) {
    console.log(index, value);
});



// find/where/findWhere
// find 在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，如果没有元素通过检测则返回 undefined。 如果找到匹配的元素，函数将立即返回，不会遍历整个list。
// where 遍历list中的每一个值，返回一个数组，这个数组里的元素包含 properties 所列出的键 - 值对。
// findWhere 遍历整个list，返回匹配 properties参数所列出的所有 键 - 值 对的第一个值。如果没有找到匹配的属性，或者list是空的，那么将返回undefined。
console.log('---------------------------find/where/findWhere------------------------------');

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);

var listOfPlays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611},
    {title: "The Tempest 2", author: "Horace", year: 1711},
];
var result = _.where(listOfPlays, {author: "Shakespeare", year: 1611});
console.log(result);

result = _.findWhere(listOfPlays, {author: "Shakespeare"});
console.log(result);



// ------> every/some
// 当集合的所有元素都满足条件时，_.every()函数返回true，当集合的至少一个元素满足条件时，_.some()函数返回true
console.log('-----------------------------every/some----------------------------');

// 所有元素都大于0？
var result = _.every([1, 4, 7, -3, -9], (x) => x > 0); // false
console.log(result);

// 检查所有元素是否不为空、false、null
result = _.every([true, 1, null, 'yes'], _.identity);
console.log(result);

// 至少一个元素大于0？
result = _.some([1, 4, 7, -3, -9], (x) => x > 0); // true
console.log(result);

// 至少一个元素不为空、false、null
result = _.some([null, 0, 'yes', false]);
console.log(result);

// 当集合是Object时，我们可以同时获得value和key：
var r1 = _.every(obj, function (value, key) {
    // 判断key和value是否全部是小写：
    return /^[a-z]+$/.test(key + value);
});
var r2 = _.some(obj, function (value, key) {
    return /^[a-z]+$/.test(key + value);
});

console.log(r1);
console.log(r2);



// ------> max/min
// 这两个函数直接返回集合中最大和最小的数：
console.log('---------------------------max/min------------------------------');

var arr = [3, 5, 7, 9];
console.log(_.max(arr)); // 9
console.log(_.min(arr)); // 3

// 空集合会返回-Infinity和Infinity，所以要先判断集合不为空：
console.log(_.max([])); // -Infinity
console.log(_.min([])); // Infinity

// 注意，如果集合是Object，max()和min()只作用于value，忽略掉key：
console.log(_.max({ a: 1, b: 2, c: 3 })); // 3



// ------> groupBy
// groupBy()把集合的元素按照key归类，key由传入的函数返回：
console.log('---------------------------groupBy------------------------------');

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});

console.log(groups);
// 结果:
// {
//   A: [81, 91, 88, 99],
//   B: [75, 77, 66, 72],
//   C: [20, 40, 59]
// }



// ------> countBy
// 排序一个列表组成多个组，并且返回各组中的对象的数量的计数。类似groupBy，但是不是返回列表的值，而是返回在该组中值的数目。
console.log('---------------------------countBy------------------------------');

var counts = _.countBy([1, 2, 3, 4, 5], function(num) {
    return num % 2 == 0 ? 'even': 'odd';
});

console.log(counts);



// ------> shuffle/sample
// shuffle()用洗牌算法随机打乱一个集合,sample()则是随机选择一个或多个元素
console.log('---------------------------shuffle/sample------------------------------');

var arr = [1, 2, 3, 4, 5, 6];

// 注意每次结果都不一样：
console.log(_.shuffle(arr));

// 随机选1个：
console.log(_.sample(arr));
// 随机选3个：
console.log(_.sample(arr, 3));



// ------> toArray
// 把list(任何可以迭代的对象)转换成一个数组，在转换 arguments 对象时非常有用。
console.log('---------------------------toArray------------------------------');
(function() {
    var args = _.toArray(arguments);
    console.log(args);
})(1, "a", true, ["x", "y"]);
