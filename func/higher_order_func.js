// 高阶函数

// ------> map 传入一个函数，将依次作用在每个元素上
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 获取每个元素的二次方
var newarr = arr.map(function (x) {
    return x ** 2 ; // ES2016新特性：求幂运算符
});
console.log(newarr);

// 数字转字符串
newarr = arr.map(String);
console.log(newarr);


// ------> reduce 把一个函数作用在这个Array的每个元素上，reduce()把结果继续和序列的下一个元素做累积计算
console.log('-------------reduce-------------------');
var arr = [1, 3, 5, 7, 9];

// 相加
var result = arr.reduce(function (x, y) {
    return x + y;
});
console.log(result);

// 转成13579
result = arr.reduce(function (x, y) {
    return x * 10 + y;
});
console.log(result);


// Test:
console.log('----------------Test----------------');
// string2int 函数
var str = '12345';
var num = str.split('').map(function (x){ return +x;}).reduce(function (x,y){return x * 10 + y;});
console.log(num);

//英文名字格式化
var arr = ['adam', 'LISA', 'barT'];
var newarr = arr.map(function (name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
console.log(newarr);

// 字符串数组变成整数数组
var arr = ['1', '2', '3'];
r = arr.map(function(x){return parseInt(x)}); //感谢，抄来的，费了好大劲，似懂非懂
console.log(r);


// ------> filter 过滤元素
console.log('----------------filter---------------');
var arr = [1, 2, 4, 5, 6, 9, 10, 15];

// 删掉偶数，只保留奇数
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r);

// 删掉空字符串
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r);

// 去除重复元素
var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r = arr.filter(function (element, index, self) {
    // 去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
    return self.indexOf(element) === index;
});
console.log(r);

// 筛选出素数
var arr = [];
for (let x = 1; x < 100; x++) {
    arr.push(x);
}
var r = arr.filter(function (x) {
   if(x == 1)  return false;
   for(let i=2; i<x; i++)   if(x % i == 0)   return false;
   return true;
});
console.log(r);


// ------> sort 排序
console.log('---------------sort----------------');

// JavaScript的Array的sort()方法就是用于排序的，但是排序结果可能让你大吃一惊：
// 看上去正常的结果:
console.log(['Google', 'Apple', 'Microsoft'].sort()); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
console.log(['Google', 'apple', 'Microsoft'].sort()); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
console.log([10, 20, 1, 2].sort()); // [1, 10, 2, 20]

// 第二个排序把apple排在了最后，是因为字符串根据ASCII码进行排序，而小写字母a的ASCII码在大写字母之后。
// 第三个排序结果是什么鬼？简单的数字排序都能错？
//  这是因为Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。

// 如果不知道sort()方法的默认排序规则，直接对数字排序，绝对栽进坑里！


// 自定义排序:
// 通常规定，对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]


// 数字倒序排序
arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});
console.log(arr); // [20, 10, 2, 1]


// 忽略大小写，按照字母序排序
// 忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写（或者都变成小写），再比较。
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    var x1 = s1.toUpperCase();
    var x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});
console.log(arr); // ['apple', 'Google', 'Microsoft']


// sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
console.log(a1 === a2); // true, a1和a2是同一对象