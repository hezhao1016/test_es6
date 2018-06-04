// 解构,ES6的新语法,可以同时对一组变量进行赋值。

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};

var {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);
// 等价于：
// var name = person.foo;
// var age = person.age;
// var passport = person.passport;

const { PI } = Math;
console.log(PI); // 3.141592653589793
// 等价于：
// const bar = Math.PI;

// 多层次
console.log('---------------------------------------');
var {name, address: {city, zipcode}} = person;
console.log(name, city, zipcode);

// 变量名和属性名不一致, 把passport属性赋值给变量id:
var {name, passport:id} = person;
console.log(name, id);

// 使用默认值
var {name, single=true} = person;
console.log(name, single);

// 有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误
// 这是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。解决方法是用小括号括起来
var name;
({name, single=true} = person);
console.log(name, single);


// 注意，对数组元素进行解构赋值时，多个变量要用[...]括起来。
console.log('---------------------------------------');
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log(x, y, z);
// 等价于：
// var array = ['hello', 'JavaScript', 'ES6'];
// var x = array[0];
// var y = array[1];
// var z = array[2];

var [x, [y, z]] = ['hello', ['JavaScript', 'ES6']]; // 多维数组，注意嵌套层次和位置要保持一致
console.log(x, y, z);

var [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
console.log(z); // 'ES6'


// 使用场景
console.log('---------------------------------------');

// 交换两个值
var x=1, y=2;
[x, y] = [y, x];
console.log(x, y);

// 使用解构直接把对象的属性绑定到变量中
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(buildDate({ year: 2017, month: 1, day: 1 }));
console.log(buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 }));