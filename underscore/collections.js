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

var upper = _.map(obj, function (value, key) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

console.log(JSON.stringify(upper));


// mapObject
var upperObj = _.mapObject(obj, function (value, key) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

console.log(JSON.stringify(upperObj));



// ------> every/some
// 当集合的所有元素都满足条件时，_.every()函数返回true，当集合的至少一个元素满足条件时，_.some()函数返回true
console.log('-----------------------------every/some----------------------------');

// 所有元素都大于0？
var result = _.every([1, 4, 7, -3, -9], (x) => x > 0); // false
console.log(result);

// 至少一个元素大于0？
result = _.some([1, 4, 7, -3, -9], (x) => x > 0); // true
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
