'use strict';

// Set 存储一组不重复的元素


// 要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
console.log(s2);


// 重复元素在Set中自动被过滤
console.log('-----------------------');
var s = new Set([1, 2, 3, 3, '3']);
// 注意数字3和字符串'3'是不同的元素。
console.log(s); // Set {1, 2, 3, "3"}


// 添加元素
console.log('-----------------------');
s.add(4);
console.log(s); // Set {1, 2, 3, 4}
s.add(4);
console.log(s); // 仍然是 Set {1, 2, 3, 4}


// 删除元素
console.log('-----------------------');
var s = new Set([1, 2, 3]);
console.log(s); // Set {1, 2, 3}
s.delete(3);

// 元素是否存在
console.log(s.has(3));


// 获取长度
console.log('------------------------');
var s = new Set([1, 2, 3]);
console.log(`size:${s.size}`);

// 遍历set
console.log('------------let of set------------');
for (let value of s){
    console.log(value);
}

// forEach遍历
console.log('------------forEach------------');
s.forEach(function (value, key, self) { // 注意，回调函数的顺序是：参数1：value，参数2：key，参数3：set本身
    console.log(value);
});

// 清空集合
console.log('------------------------');
s.clear();
console.log(s);