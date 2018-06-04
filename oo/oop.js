// JavaScript 面向对象

// 动物类
class Animal {
    // 构造函数
    constructor(name) {
        this.name = name;
    }

    // 实例方法
    eat() {
       console.log(`动物[${this.name}]在吃东西...`);
    }

    // 静态方法
    static getSomeThing() {
        return "something";
    }
}

// 静态属性
// 目前， 只有这种写法可行， 因为 ES6 明确规定， Class 内部只有静态方法， 没有静态属性。
Animal.invokeCount = 0;


// 狗 继承自动物
class Dog extends Animal{
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    // 重写方法
    eat() {
        // super.eat(); // 调用父类方法
        console.log(`小狗[${this.name}]在吃骨头...`);
    }

    play() {
        console.log(`小狗[${this.name}]在玩棒球...`);
    }
}

// 猫 继承自动物
class Cat extends Animal{
    catchMice() {
        console.log(`小猫[${this.name}]在抓老鼠...`);
    }
}

var animal = new Animal("动物");
animal.eat();
console.log(`Animal.invokeCount = ${Animal.invokeCount}`);
console.log(`Animal.getSomeThing() = ${Animal.getSomeThing()}`);

var dog = new Dog("旺财", "黄色");
dog.eat();
dog.play();
console.log(`Dog.getSomeThing() = ${Dog.getSomeThing()}`);

var cat = new Cat("猫咪");
cat.eat();
cat.catchMice();
console.log(`Cat.getSomeThing() = ${Cat.getSomeThing()}`);