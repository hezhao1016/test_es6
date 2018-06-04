// class继承
// 关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。

// ------> 定义类
class Student {
    // 构造函数
    constructor(name) {
        this.name = name; // ES6只支持在构造函数中定义实例属性
    }

    // 定义方法
    hello() {
        console.log(`Hello, ${this.name}!`);
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();


// ------> class继承
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 用super调用父类的构造函数
        this.grade = grade;
    }

    myGrade() {
        console.log(`I am at grade ${this.grade}`);
    }
}

console.log('------------------------------');
var xiaohong = new PrimaryStudent('小红', 2);
console.log(xiaohong.name); // '小明'
console.log(xiaohong.grade); // 2
xiaohong.hello();
xiaohong.myGrade();

// 验证原型:
console.log(xiaohong.__proto__ === PrimaryStudent.prototype); // true
console.log(xiaohong.__proto__.__proto__ === Student.prototype); // true

// 验证继承关系:
console.log(xiaohong instanceof PrimaryStudent); // true
console.log(xiaohong instanceof Student); // true