// JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。

// 序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming);
console.log(s);

// 缩进输出
s = JSON.stringify(xiaoming, null, '  ');
console.log(s);

// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
s = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
console.log(s);

// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理
s = JSON.stringify(xiaoming, function (key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase(); // 转大写
    }
    return value;
}, '  ');
console.log(s);

// 如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：
xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

s = JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
console.log(s);



// 反序列化
console.log('-----------------------JSON.parse---------------------');

var obj = JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
console.log(obj);

obj = JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
console.log(obj);

obj = JSON.parse('true'); // true
console.log(obj);

obj = JSON.parse('123.45'); // 123.45
console.log(obj);

// JSON.parse()还可以接收一个函数，用来转换解析出的属性
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}