'use strict';

// Map是一组键值对的结构，具有极快的查找速度。


// 初始化Map需要一个二维数组，或者直接初始化一个空Map
// 键可以是字符串、数字、boolean等。
var m = new Map([
    ['Michael', 95],
    [111, "我是数字111对应的值"],
    [true, "存在"],
]);

console.log(m);
// 根据键取值
console.log(m.get('Michael')); // 95
console.log(m.get(true));


console.log('-----------------------');
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
console.log(m.has('Adam')); // 是否存在key, 返回true/false
console.log(m.get('Adam')); // 67
console.log(m.delete('Adam')); // 删除key 'Adam', 返回true/false
console.log(m.get('Adam')); // undefined


// key 不能重复
console.log('-----------------------');
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
console.log(m.get('Adam')); // 88


// 获取长度
console.log('------------------------');
var m = new Map([['a', 1], ['b', 2]]);
console.log(`size:${m.size}`);

// 遍历key
console.log('------------let of keys------------');
for (let k of m.keys()){
    console.log(k);
}

// 遍历value
console.log('------------let of values------------');
for (let v of m.values()){
    console.log(v);
}

// 遍历map
console.log('------------let of map------------');
for (let obj of m){
    console.log(obj[0] + '=' + obj[1]);
}

// 返回iterable
console.log('------------let of entries------------');
for (let obj of m.entries()){
    console.log(obj[0] + '=' + obj[1]);
}

// forEach遍历
console.log('------------forEach------------');
m.forEach(function (value, key, self) { // 注意，回调函数的顺序是：参数1：value，参数2：key，参数3：map本身
    console.log(key, value);
});

// 清空集合
console.log('------------------------');
m.clear();
console.log(m);