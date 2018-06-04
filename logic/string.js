// 'use strict';
/**
 * String对象
 */

// IE10 之下不支持trim()方法，可以自己实现一个：
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/gm, '');
};

var str = "        Hello World!        ";
str = str.trim();
console.log(str);

// 自己实现一个判断字符串是否包含某个字符的方法
String.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
console.log(str.contains('W'));


// 获取字符串某个指定位置的字符
console.log('-----------------索引取值-----------------');
var s = 'Hello, world!';
console.log(s[0]); // 'H'
console.log(s[6]); // ' '
console.log(s[7]); // 'w'
console.log(s[12]); // '!'
console.log(s[13]); // undefined 超出范围的索引不会报错，但一律返回undefined


// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
console.log('-----------------索引赋值-----------------');
var s = 'Test';
s[0] = 'X';
console.log(s); // s仍然为'Test'


console.log('-----------------常用方法-----------------');
// toUpperCase() 把一个字符串全部变为大写
var s = 'Hello';
console.log(s.toUpperCase()); // 返回'HELLO'

// toLowerCase() 把一个字符串全部变为小写
console.log(s.toLowerCase()); // 'hello'


// indexOf() 搜索指定字符串出现的位置
var s = 'hello, world';
console.log(s.indexOf('world')); // 返回7
console.log(s.indexOf('World')); // 没有找到指定的子串，返回-1
console.log(s.lastIndexOf('l')); // 最后匹配


// substring() 从开始索引开始截取元素，到结束索引截止，不包含结束索引
console.log('-----------------substring-----------------');
console.log(s.substring(0, 5)); // 从索引0开始到5（不包括5），返回'hello'
console.log(s.substring(5, 0)); // 需要注意的地方就是：substring是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。
console.log(s.substring(4, 7)); // 从索引0开始到5（不包括5），返回'hello'
console.log(s.substring(7)); // 从索引7开始到结束，返回'world'
console.log(s.substring(3, -4)); // 任何一个参数为负数被替换为0(即该值会成为start参数)

// slice() 从开始索引开始截取元素，到结束索引截止，不包含结束索引(和substring一样)
// slice中的start如果为负数，会从尾部算起，-1表示倒数第一个，-2表示倒数第2个，此时end必须为负数，并且是大于start的负数，否则返回空字符串
console.log('-----------------slice-----------------');
console.log(s.slice(0, 5));
console.log(s.slice(5, 0)); // 如果end绝对值超过原字符串长度或者为0，返回空字符串
console.log(s.slice(4, 7));
console.log(s.slice(7));
console.log(s.slice(3, -4)); // slice的end如果为负数，同样从尾部算起

// 若该参数为负数或0，都将返回空字符串
console.log('-----------------substr-----------------');
console.log(s.substr(0, 5));
console.log(s.substr(5, 0)); // substr的end参数表示，要截取的长度,若该参数为负数或0，都将返回空字符串
console.log(s.substr(4, 7));
console.log(s.substr(7));
console.log(s.substr(3, -4));


// split() 按照指定分隔符分割字符串，返回数组
console.log('-----------------split-----------------');
var str = '1,2,3,4,5';
var arr = str.split(',');
console.log(arr);


// 字符串填充
console.log('-----------------字符串填充-----------------');
console.log("abc".padStart(6)); // "    abc"  未填写填充字符时候以空格填充
console.log("abc".padStart(6,"3")); // "333abc"
console.log("abc".padStart(6,"3").length); // 6
console.log("abc".padStart(6,"123456")); // "123abc" 自动忽略句尾多余的填充字符
console.log("abc".padStart(2,"123456")); // "abc" 原字符串大于要求的数据时候则不发生变化返回原字符串

console.log("123".padEnd(8));             // "123     "
console.log("123".padEnd(8,"c"));         // "123ccccc"
console.log("123".padEnd(8,"c").length);  // 8
console.log("123".padEnd(8,"123456"));    // "12312345"
console.log("123".padEnd(2,"123456"));    // "123"
