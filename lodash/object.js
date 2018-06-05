// 对象相关

var _ = require('lodash');

// ------> keys
// 创建一个 object 的自身可枚举属性名为数组。
console.log('---------------------------keys------------------------------');

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);

console.log(_.keys(xiaoming)); // ['name', 'age']



// ------> values
// 和keys()类似，values()返回object自身但不包含原型链继承的所有值
// 注意，没有allValues()
console.log('---------------------------values------------------------------');

console.log(_.values(xiaoming)); // ['小明', 20]



// ------> invert
// invert()把object的每个key-value来个交换，key变成value，value变成key
console.log('---------------------------invert------------------------------');

var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};

var reverseObj = _.invert(obj); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }
console.log(JSON.stringify(reverseObj));



// ------> extend/extendOwn
// extend()把多个object的key-value合并到第一个object并返回
//     注意：如果有相同的key，后面的object的value将覆盖前面的object的value。
// extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性。
console.log('---------------------------extend/extendOwn------------------------------');

var a = {name: 'Bob', age: 20};
var newa = _.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
console.log(newa);

// 变量a的内容也改变了：
console.log(a); // {name: 'Bob', age: 88, city: 'Beijing'}



// ------> has/hasIn
// has(object, path) 检查 path 是否是object对象的直接属性。
// hasIn(object, path) 检查 path 是否是object对象的直接或继承属性。
console.log('---------------------------has/hasIn------------------------------');

var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });

var r = _.has(object, 'a'); // => true
console.log(r);

r = _.has(object, 'a.b'); // => true
console.log(r);

r = _.has(object, ['a', 'b']); // => true
console.log(r);

r = _.has(other, 'a'); // => false
console.log(r);


r = _.hasIn(other , 'a'); // => true
console.log(r);

r = _.hasIn(other, 'a.b'); // => true
console.log(r);

r = _.hasIn(other, ['a', 'b']); // => true
console.log(r);

r = _.hasIn(other, 'b'); // => false
console.log(r);



// ------> create(prototype, [properties])
// 创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。
console.log('---------------------------create------------------------------');

function Shape() {
    this.x = 0;
    this.y = 0;
}

function Circle() {
    Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
});

var circle = new Circle;
r = circle instanceof Circle; // => true
console.log(r);

r = circle instanceof Shape; // => true
console.log(r);



// ------> invoke(object, path, [args])
// 调用object对象path上的方法。
console.log('---------------------------invoke------------------------------');

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

r = _.invoke(object, 'a[0].b.c.slice', 1, 3); // => [2, 3]
console.log(r);