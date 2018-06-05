// 数学相关

var _ = require('lodash');

// ------> add 两个数相加
console.log('---------------------------add------------------------------');
console.log(_.add(6, 4)); // 10

// ------> subtract 两个数相减
console.log('---------------------------subtract------------------------------');
console.log(_.subtract(6, 4)); // 2

// ------> multiply 两个数相乘
console.log('---------------------------multiply------------------------------');
console.log(_.multiply(6, 4)); // 24

// ------> divide 两个数相除
console.log('---------------------------divide------------------------------');
console.log(_.add(6, 4)); // 1.5

// ------> sum
// 计算 array 中值的总和
console.log('---------------------------sum------------------------------');
console.log(_.sum([4, 2, 8, 6])); // 20

// ------> mean
// 计算 array 的平均值。
console.log('---------------------------mean------------------------------');
console.log(_.mean([4, 2, 8, 6])); // 5

// ------> max
// 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
console.log('---------------------------max------------------------------');
console.log(_.max([4, 2, 8, 6])); // 8
console.log(_.max([])); // undefined

// ------> min
// 计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。
console.log('---------------------------min------------------------------');
console.log(_.min([4, 2, 8, 6])); // 2
console.log(_.min([])); // undefined

// ------> ceil
// 根据 precision（精度） 向上舍入 number。（precision（精度）可以理解为保留几位小数。）
console.log('---------------------------ceil------------------------------');
console.log(_.ceil(4.006)); // 5
console.log(_.ceil(6.004, 2)); // 6.01
console.log(_.ceil(6040, -2)); // 6100

// ------> floor
// 根据 precision（精度） 向下舍入 number。（precision（精度）可以理解为保留几位小数。）
console.log('---------------------------floor------------------------------');
console.log(_.floor(4.006)); // 4
console.log(_.floor(0.046, 2)); // 0.04
console.log(_.floor(4060, -2)); // 4000