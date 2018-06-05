// 常用工具

var _ = require('lodash');

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