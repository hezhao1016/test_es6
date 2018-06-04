// 面向对象编程
//
// JavaScript的面向对象编程和大多数其他语言如Java、C#的面向对象编程都不太一样。
// JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

// 把xiaoming的原型指向了对象Student
xiaoming.__proto__ = Student;

console.log(xiaoming.name);
console.log(xiaoming.height);
xiaoming.run();

// JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。
// 如果你把xiaoming的原型指向其他对象：
var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;

// 现在xiaoming已经无法run()了，他已经变成了一只鸟：
xiaoming.fly(); // 小明 is flying..

// 在JavaScrip代码运行时期，你可以把xiaoming从Student变成Bird，或者变成任何对象。


// 请注意，上述代码仅用于演示目的。在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__。
// Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，
// 因此，我们可以编写一个函数来创建xiaoming：

// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
console.log(xiaoming.__proto__ === Student); // true

// 这是创建原型继承的其中一种方法，JavaScript还有其他方法来创建对象