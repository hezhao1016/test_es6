// 引入ES6模块

import {firstName, lastName, year} from './export.js';
import {sayHello as sayHi} from './export.js';

console.log(`${firstName} - ${lastName} is ${year} year.`);
sayHi("Horace");



/*
import命令输入的变量都是只读的,不允许在加载模块的脚本里面，改写接口。
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;

但是，如果a是一个对象，改写a的属性是允许的。
import {a} from './xxx.js'
a.foo = 'hello'; // 合法操作
*/