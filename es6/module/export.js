// 不同于CommonJS，ES6使用 export 和 import 来导出、导入模块。

// 第一种写法：
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;


// export的写法，除了像上面这样，还有另外一种。
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

function hello(name) {
    console.log(`Hello, ${name}!`);
}

export {firstName, lastName, year, hello as sayHello};



/*

// ------> 还可以输出函数或类（class）
export function multiply(x, y) {
    return x * y;
}


// ------> 可以使用as关键字重命名
function v1() { ... }
function v2() { ... }

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};


// ------> 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

// 报错
export 1;

// 报错
var m = 1;
export m;

// 上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};


// ------> 同样的，function和class的输出，也必须遵守这样的写法。

// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};



// ------> 使用export default命令，为模块指定默认输出。
// export-default.js
export default function () {
  console.log('foo');
}

// 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
// import-default.js
import customName from './export-default';
customName(); // 'foo'
//上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。

*/