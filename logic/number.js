// 数字

// 格式化数字，格式化金额
function number_format(number, decimals, dec_point, thousands_sep) {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

// 使用
var num = number_format(1234567.089, 2, ".", ","); // 1,234,567.09
console.log(num);


// 四舍五入并保留两位小数
console.log('-----------四舍五入并保留两位小数-------------');
var n = 2.10435;
console.log("2位小数点:" + n.toFixed(2));
console.log("4位小数点:" + n.toFixed(4));

// 使用Math.round()实现
console.log("Math.round() 2位小数点:" + Math.round(n * 100) / 100);


// 随机数
console.log('-----------随机数-------------');

// 0-1之间随机数
console.log(Math.random());
// 1-10之间随机数
var num = Math.floor(Math.random() * 10 + 1);
console.log(num);


// 常用方法
console.log('-----------常用方法-------------');

// 向下取整
console.log(Math.floor(1.62));

// 向上取整
console.log(Math.ceil(1.12));

// 绝对值
console.log(Math.abs(-1.12));

// 最大值
console.log(Math.max(5, 3, 10, 34, 7));

// 最小值
console.log(Math.min(5, 3, 10, 34, 7));