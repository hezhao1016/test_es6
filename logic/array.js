'use strict';
/**
 * 数组
 */

// Array可以包含任意数据类型
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(`length： ${arr.length}`); // 6

// 直接给Array的length赋一个新的值会导致Array大小的变化
var arr = new Array(1, 2, 3);
console.log(arr.length); // 3
arr.length = 6;
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
console.log(arr); // arr变为[1, 2]

// 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
var arr = [1, 2, 3];
arr[5] = 'x';
console.log(arr); // arr变为[1, 2, 3, undefined, undefined, 'x']


// indexOf() 搜索一个指定的元素的位置
console.log('-----------------indexOf-----------------');
var arr = [10, 20, '30', 'xyz'];
console.log(arr.indexOf(10)); // 元素10的索引为0
console.log(arr.indexOf(20)); // 元素20的索引为1
console.log(arr.indexOf(30)); // 元素30没有找到，返回-1
console.log(arr.indexOf('30')); // 元素'30'的索引为2


// slice() 从开始索引开始截取元素，到结束索引截止，不包含结束索引
console.log('-----------------slice-----------------');
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
console.log(arr); // arr本身并没有改变。

// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。
// 可以实现copy功能
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(aCopy === arr); // false


// concat() 把当前的Array和另一个Array连接起来，并返回一个新的Array
console.log('-----------------concat-----------------');
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added); // ['A', 'B', 'C', 1, 2, 3]
console.log(arr); // ['A', 'B', 'C']

// 请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
// 实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里
console.log(arr.concat(1, 2, [3, 4])); // ['A', 'B', 'C', 1, 2, 3, 4]


// join() 把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
console.log('-----------------join-----------------');
var arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-')); // 'A-B-C-1-2-3'


// push() 向Array的末尾添加若干元素,返回新数组的长度
console.log('-----------------push-----------------');
var arr = [1, 2];
console.log(arr.push('A', 'B')); // 返回Array新的长度: 4
console.log(arr); // [1, 2, 'A', 'B']


// pop() 删除数组最后一个元素，并返回该元素
console.log('-----------------pop-----------------');
console.log(arr.pop()); // pop()返回'B'
console.log(arr); // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
console.log(arr); // []
console.log(arr.pop()); // 空数组继续pop不会报错，而是返回undefined
console.log(arr); // []


// unshift() 将一个或多个元素加入到数组的开始位置，原有元素位置自动后移，返回新数组的长度
console.log('-----------------unshift-----------------');
var arr = [1, 2];
console.log(arr.unshift('A', 'B')); // 返回Array新的长度: 4
console.log(arr); // ['A', 'B', 1, 2]


// shift() 删除第一个元素，数组元素位置自动前移，返回被删除的元素
console.log('-----------------shift-----------------');
console.log(arr.shift()); // 'A'
console.log(arr); // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
console.log(arr); // []
console.log(arr.shift()); // 空数组继续shift不会报错，而是返回undefined
console.log(arr); // []


// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
// 语法：
// array.splice(start,delCount,item1,item2……itemN);
// 从start的位置开始向后删除delCount个元素，然后从start的位置开始插入一个或多个新元素。item是可选的
console.log('-----------------splice-----------------');
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];

// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
console.log(arr); // ['Microsoft', 'Apple', 'Oracle']

// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// sort() 对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
console.log('-----------------sort-----------------');
var arr = ['B', 'C', 'A'];
arr.sort();
console.log(arr); // ['A', 'B', 'C']

// 自定义排序， 按照age升序
var persons = [
    {name:'Tom', age: 28},
    {name:'Bob', age: 18},
    {name:'Jack', age: 29}
];
persons.sort(function (a, b) {
    return a.age - b.age;
});
console.log(persons);

// reverse() 反转数组
console.log('-----------------reverse-----------------');
var arr = ['one', 'two', 'three'];
arr.reverse();
console.log(arr); // ['three', 'two', 'one']


// 多维数组
console.log('-----------------多维数组-----------------');
var arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr);
console.log(arr[1][1]);