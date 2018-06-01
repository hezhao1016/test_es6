// 循环

// -------> for
var str = '';
for (var i=1; i<=20; i++) {
    if(i % 2 == 0){
        continue;
    }
    if (i > 10){
        break;
    }
    str += i + ' ';
}
console.log(str);


var x = 0;
for (;;) { // 将无限循环下去
    if (x >= 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
console.log(x);


// -------> for ... in
// for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

// function Person(){
//     this.name = "张三";
//     this.age = 14;
//     this.func1 = function(){ }
// }
// o = new Person();

var text = "";
for (var key in o) {
    // 过滤掉对象继承的属性
    if (o.hasOwnProperty(key)) {
        text += key + ":" + o[key] + ", ";
    }
}
console.log(text);

// 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引
// 请注意，for ... in对Array的循环得到的是String而不是Number
var a = ['A', 'B', 'C'];
text = "";
for (let i in a) {
    // console.log(typeof i); // string
    text += i + "-" + a[i] + ", ";
}
console.log(text);


// -------> while
var x = 0;
while (x == 100) {
    x += 1;
}
console.log(x);


// -------> do ... while
x = 0;
do {
    x += 1;
} while (x == 100);
console.log(x);


// -------> let of (ES6)
// ES6 借鉴 C++、Java、C# 和 Python 语言，引入了for...of循环，作为遍历所有数据结构的统一的方法。
// for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、Generator 对象，以及字符串。

var arr = ['a', 'b', 'c', 'd'];
text = "";
for (let a of arr) {
    text += a + " ";
}
console.log(text); // a b c d
