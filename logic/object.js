// 对象, JavaScript对象的键都是字符串类型，值可以是任意数据类型。

var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

console.log(xiaohong['middle-school']);
console.log(xiaohong.name);
console.log(xiaohong.age); // 不存在，返回undefined


// 新增一个age属性
xiaohong.age = 18;
console.log(xiaohong.age); // 18

// 删除age属性
delete xiaohong.age;
console.log(xiaohong.age); // 18 // undefined

// 删除name属性
delete xiaohong['name'];
console.log(xiaohong.name); // undefined

// 删除一个不存在的school属性也不会报错
delete xiaohong.school;

// 检测对象是否拥有某一属性，包括继承得来的
console.log('---------------in-----------------');
console.log('middle-school' in xiaohong); // true
console.log('grade' in xiaohong); // false
console.log('toString' in xiaohong); // true， 通过继承object得到的属性

// 判断一个属性是否是自身拥有的，而不是继承得到的
console.log('---------------hasOwnProperty-----------------');
console.log(xiaohong.hasOwnProperty('middle-school')); // true
console.log(xiaohong.hasOwnProperty('toString')); // false