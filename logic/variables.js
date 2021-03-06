'use strict';
/**
 * JavaScript中有三种声明变量的方式：var、let、const 的区别。
  */

// 1.const定义的常量不可以修改，而且必须初始化。const是块级作用域。
console.log('-------------------const--------------------');
const b = 2; // 正确
// const b; / /错误，必须初始化
// b = 5; // 错误，常量无法修改
console.log('函数外const定义b：' + b); // 有输出值


// 2.var定义的变量可以修改，如果不初始化会输出undefined，不会报错。作用域是全局的或者是函数级的
console.log('-------------------var--------------------');
var a = 1;
// var a; // 不会报错
console.log('函数外var定义a：' + a); // 输出1

function changeVar(){
    a = 4;
    console.log('函数内var定义a：' + a);//输出4
}
changeVar();
console.log('函数调用后var定义a为函数内部修改值：' + a); // 输出4


// 3.let是块级作用域，函数内部使用let定义后，对函数外部无影响。默认值为undefined
console.log('-------------------let--------------------');
let c = 3;
console.log('函数外let定义c：' + c); // 输出3

function changeLet(){
    let c = 6;
    console.log('函数内let定义c：' + c); // 输出6
}

changeLet();
console.log('函数调用后let定义c不受函数内部定义影响：' + c); //输出3