// 日期

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function(fmt) {
    if(typeof (fmt) == undefined || fmt == null || fmt == ""){
        fmt = "yyyy-MM-dd HH:mm:ss";
    }
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};

// now
console.log(new Date().format('yyyy-MM-dd HH:mm:ss'));

// 字符串形式的日期转换格式类型
var strTime = '2018-06-04 12:12:00';
var date = new Date(Date.parse(strTime.replace(/-/g,  "/")));
console.log(date.format('yyyy/MM/dd HH:mm'));


// 获取系统当前时间
console.log('------------------------now------------------------');
var now = new Date();
console.log(now); // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
console.log("year:" + now.getFullYear()); // 2015, 年份
console.log("month:" + now.getMonth()); // 5, 月份，注意月份范围是0~11，5表示六月
console.log("date:" + now.getDate()); // 24, 表示24号
console.log("day:" + now.getDay()); // 3, 表示星期三
console.log("hours:" + now.getHours()); // 19, 24小时制
console.log("minutes:" + now.getMinutes()); // 49, 分钟
console.log("seconds:" + now.getSeconds()); // 22, 秒
console.log("milliSedeconds:" + now.getMilliseconds()); // 875, 毫秒数
console.log("time:" + now.getTime()); // 1435146562875, 以number形式表示的时间戳

// 指定日期和时间
console.log('------------------------指定日期------------------------');
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d);

// 使用Date.parse()时传入的字符串使用实际月份01~12，转换为Date对象后getMonth()获取的月份值为0~11。
var time = Date.parse('2015-06-24T19:49:22.875+08:00'); // 返回时间戳
console.log(time);
var d = new Date(time);
console.log(d);


// 时区
console.log('------------------------时区------------------------');
var d = new Date(1435146562875);
console.log(d.toLocaleString()); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
console.log(d.toUTCString()); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

// 那么在JavaScript中如何进行时区转换呢？实际上，只要我们传递的是一个number类型的时间戳，我们就不用关心时区转换。任何浏览器都可以把一个时间戳正确转换为本地时间。
// 获取当前时间戳
console.log('------------------------时间戳------------------------');
if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}

// 1970年到现在的年数
var years = Math.floor(new Date().getTime() / 1000 / 3600 / 24 / 365);
console.log(`1970年到现在的年数:${years} 年！`);