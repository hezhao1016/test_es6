// 链式语法

var _ = require('underscore');


// 可以在面向对象或者函数的风格下使用Underscore, 这取决于您的个人偏好. 以下两行代码都可以把一个数组里的所有数字乘以2.
console.log('-----------------------------------------');
var r = _.map([1, 2, 3], function(n){ return n * 2; });
console.log(r);

r = _([1, 2, 3]).map(function(n){ return n * 2; });
console.log(r);



// underscore提供了把对象包装成能进行链式调用的方法，就是chain()函数：
// 因为每一步返回的都是包装对象，所以最后一步的结果需要调用value()获得最终结果。
console.log('-----------------------------------------');
r = _.chain([1, 4, 9, 16, 25])
    .map(Math.sqrt)
    .filter(x => x % 2 === 1)
    .value();
console.log(r);



// value() 获取封装对象的最终值.
console.log('-----------------------------------------');
var val = _([1, 2, 3]).value();
console.log(val);



// 例子：计算一首歌的歌词里每一个单词出现的次数
// 数组原型方法 也通过代理加入到了链式封装的Underscore对象
console.log('-----------------------------------------');
var lyrics = [
    {line: 1, words: "I'm a lumberjack and I'm okay"},
    {line: 2, words: "I sleep all night and I work all day"},
    {line: 3, words: "He's a lumberjack and he's okay"},
    {line: 4, words: "He sleeps all night and he works all day"}
];

r = _.chain(lyrics)
    .map(function(line) { return line.words.split(' '); })
    .flatten()
    .reduce(function(counts, word) {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {})
    .value();
console.log(r);



// 例子：先按照年龄排序，然后进行map操作，最后取第一条数据
console.log('-----------------------------------------');
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
                .sortBy(function(stooge){ return stooge.age; })
                .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
                .first()
                .value();
console.log(youngest);