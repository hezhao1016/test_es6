// 链式调用

var _ = require('lodash');

var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
    .chain(users)
    .sortBy('age')
    .map(function(o) {
        return o.user + ' is ' + o.age;
    })
    .head()
    .value();

console.log(youngest);