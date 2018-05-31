'use strict';

/**
 * 数组
 */

// Array可以包含任意数据类型
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(`length： ${arr.length}`); // 6

// 直接给Array的length赋一个新的值会导致Array大小的变化
var arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 6;
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
console.log(arr); // arr变为[1, 2]

// 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
var arr = [1, 2, 3];
arr[5] = 'x';
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, 'x']


// indexOf 搜索一个指定的元素的位置
console.log('-----------------indexOf-----------------');
var arr = [10, 20, '30', 'xyz'];
console.log(arr.indexOf(10)); // 元素10的索引为0
console.log(arr.indexOf(20)); // 元素20的索引为1
console.log(arr.indexOf(30)); // 元素30没有找到，返回-1
console.log(arr.indexOf('30')); // 元素'30'的索引为2


// slice 从开始索引开始截取元素，到结束索引截止，不包含结束索引
console.log('-----------------slice-----------------');
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']