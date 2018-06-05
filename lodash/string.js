var _ = require('lodash');

// ------> camelCase
// 转换字符串为 驼峰写法。
console.log('---------------------------camelCase------------------------------');

var r = _.camelCase('Foo Bar'); // => 'fooBar'
console.log(r);

r = _.camelCase('--foo-bar--'); // => 'fooBar'
console.log(r);

r = _.camelCase('__FOO_BAR__'); // => 'fooBar'
console.log(r);



// ------> kebabCase
// 转换字符串为 kebab case.
console.log('---------------------------kebabCase------------------------------');

r = _.kebabCase('Foo Bar'); // => 'foo-bar'
console.log(r);

r = _.kebabCase('fooBar'); // => 'foo-bar'
console.log(r);

r = _.kebabCase('__FOO_BAR__'); // => 'foo-bar'
console.log(r);



// ------> snakeCase
// 转换字符串为 snake case.
console.log('---------------------------snakeCase------------------------------');

r = _.snakeCase('Foo Bar'); // => 'foo_bar'
console.log(r);

r = _.snakeCase('fooBar'); // => 'foo_bar'
console.log(r);

r = _.snakeCase('__FOO_BAR__'); // => 'foo_bar'
console.log(r);



// ------> lowerCase
// 转换字符串以空格分开单词，并转换为小写。
console.log('---------------------------lowerCase------------------------------');

r = _.lowerCase('Foo Bar'); // => 'foo bar'
console.log(r);

r = _.lowerCase('fooBar'); // => 'foo bar'
console.log(r);

r = _.lowerCase('__FOO_BAR__'); // => 'foo bar'
console.log(r);



// ------> upperCase
// 转换字符串为 空格 分隔的大写单词。
console.log('---------------------------upperCase------------------------------');

r = _.upperCase('--foo-bar'); // => 'FOO BAR'
console.log(r);

r = _.upperCase('fooBar'); // => 'FOO BAR'
console.log(r);

r = _.upperCase('__foo_bar__'); // => 'FOO BAR'
console.log(r);



// ------> startCase
// 转换 字符串为 start case.
console.log('---------------------------startCase------------------------------');

r = _.startCase('--foo-bar--'); // => 'Foo Bar'
console.log(r);

r = _.startCase('fooBar'); // => 'Foo Bar'
console.log(r);

r = _.startCase('__FOO_BAR__'); // => 'FOO BAR'
console.log(r);



// ------> capitalize
// 转换字符串首字母为大写，剩下为小写。
console.log('---------------------------capitalize------------------------------');

console.log(_.capitalize('FRED')); // => 'Fred'



// ------> lowerFirst
// 转换字符串的首字母为小写。
console.log('---------------------------lowerFirst------------------------------');

console.log(_.lowerFirst('Fred')); // => 'fred'
console.log(_.lowerFirst('FRED')); // => 'fRED'



// ------> upperFirst
// 转换字符串的首字母为大写。
console.log('---------------------------upperFirst------------------------------');

console.log(_.lowerFirst('Fred')); // => 'Fred'
console.log(_.lowerFirst('FRED')); // => 'FRED'



// ------> escape
// 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
console.log('---------------------------escape------------------------------');

console.log(_.escape('fred, barney, & pebbles'));
// => 'fred, barney, &amp; pebbles'



// ------> unescape
// _.escape的反向版。 这个方法转换string字符串中的 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符。
console.log('---------------------------unescape------------------------------');

console.log(_.unescape('fred, barney, &amp; pebbles'));
// => 'fred, barney, & pebbles'



// ------> escapeRegExp
// 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .
console.log('---------------------------escapeRegExp------------------------------');

console.log(_.escapeRegExp('[lodash](https://lodash.com/)'));
// => '\[lodash\]\(https://lodash\.com/\)'



// ------> endsWith
// 检查字符串是否以给定的target字符串结尾。
console.log('---------------------------endsWith------------------------------');

r = _.endsWith('abc', 'c'); // => true
console.log(r);

r = _.endsWith('abc', 'b'); // => false
console.log(r);

r = _.endsWith('abc', 'b', 2);// => true
console.log(r);



// ------> pad
// 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。
console.log('---------------------------pad------------------------------');

r = _.pad('abc', 8); // => '  abc   '
console.log(r);

r = _.pad('abc', 8, '_-'); // => '_-abc_-_'
console.log(r);

r = _.pad('abc', 3); // => 'abc'
console.log(r);

// 还有 padStart、padEnd



// ------> trim
// 从string字符串中移除前面和后面的 空格 或 指定的字符。
console.log('---------------------------trim------------------------------');

r = _.trim('  abc  '); // => 'abc'
console.log(r);

r = _.trim('-_-abc-_-', '_-'); // => 'abc'
console.log(r);

r = _.map(['  foo  ', '  bar  '], _.trim); // => ['foo', 'bar']
console.log(r);

// 还有 trimStart、trimEnd



// ------> replace
// 替换字符串
console.log('---------------------------replace------------------------------');

console.log(_.replace('Hi Fred', 'Fred', 'Barney')); // => 'Hi Barney'



// ------> split
// 根据separator 拆分字符串string。
console.log('---------------------------split------------------------------');

console.log(_.split('a-b-c', '-', 2)); // => ['a', 'b']



// ------> words
// 拆分字符串string中的词为数组 。
console.log('---------------------------words------------------------------');

r = _.words('fred, barney, & pebbles');
console.log(r);
// => ['fred', 'barney', 'pebbles']

r = _.words('fred, barney, & pebbles', /[^, ]+/g);
console.log(r);
// => ['fred', 'barney', '&', 'pebbles']



// ------> truncate
// 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。
console.log('---------------------------truncate------------------------------');

r = _.truncate('hi-diddly-ho there, neighborino');
console.log(r);
// => 'hi-diddly-ho there, neighbo...'

r = _.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': ' '
});
console.log(r);
// => 'hi-diddly-ho there,...'

r = _.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': /,? +/
});
console.log(r);
// => 'hi-diddly-ho there...'

r = _.truncate('hi-diddly-ho there, neighborino', {
    'omission': ' [...]'
});
console.log(r);
// => 'hi-diddly-ho there, neig [...]'