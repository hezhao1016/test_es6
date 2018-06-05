var _ = require('lodash');

// ------> clamp(number, [lower], upper)
// 返回限制在 lower 和 upper 之间的值。
console.log('---------------------------clamp------------------------------');

var r = _.clamp(-10, -5, 5); // => -5
console.log(r);

r = _.clamp(10, -5, 5); // => 5
console.log(r);



// ------> inRange(number, [start=0], end)
// 检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。
console.log('---------------------------inRange------------------------------');

r = _.inRange(3, 2, 4); // => true
console.log(r);

r = _.inRange(4, 8); // => true
console.log(r);

r = _.inRange(4, 2); // => false
console.log(r);

r = _.inRange(2, 2); // => false
console.log(r);

r = _.inRange(1.2, 2); // => true
console.log(r);

r = _.inRange(5.2, 4); // => false
console.log(r);

r = _.inRange(-3, -2, -6); // => true
console.log(r);



// ------> random([lower=0], [upper=1], [floating])
// 产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
// 注意: JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
console.log('---------------------------random------------------------------');

r = _.random(0, 5); // => an integer between 0 and 5
console.log(r);

r = _.random(5); // => also an integer between 0 and 5
console.log(r);

r = _.random(5, true); // => a floating-point number between 0 and 5
console.log(r);

r = _.random(1.2, 5.2); // => a floating-point number between 1.2 and 5.2
console.log(r);