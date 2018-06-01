// ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。
// 具有iterable类型的集合可以通过新的for ... of循环来遍历。

var a = ['ArrayA', 'ArrayB', 'ArrayC'];
var s = new Set(['SetA', 'SetB', 'SetC']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

console.log('-----------遍历Array-------------');
for (let x of a) { // 遍历Array
    console.log(x);
}
console.log('-----------遍历Set-------------');
for (let x of s) { // 遍历Set
    console.log(x);
}
console.log('-----------遍历Map-------------');
for (let x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

// for ... of循环和for ... in循环的区别：
// for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
// 当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：
console.log('-----------for ... in-------------');
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (let x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
// for ... in循环将把name包括在内，但Array的length属性却不包括在内。

// for ... of循环则完全修复了这些问题，它只循环集合本身的元素：
console.log('-----------for ... of-------------');
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (let x of a) {
    console.log(x); // 'A', 'B', 'C'
}


// forEach(ES5.1标准)
console.log('-----------forEach Array-------------');
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

// Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
console.log('-----------forEach Set-------------');
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

// Map的回调函数参数依次为value、key和map本身：
console.log('-----------forEach Map-------------');
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(key + ':' + value);
});


// 如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得Array的element：
console.log('-----------forEach 一个参数-------------');
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});