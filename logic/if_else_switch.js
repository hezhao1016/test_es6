// 选择结构

// if-else
var hour = new Date().getHours();
if (hour > 20) {
    console.log("现在是晚上了，回家和家人团聚吧。");
} else if (hour > 14) {
    console.log("现在是下午时光，工作累了记得来杯咖啡。");
} else if (hour > 12) {
    console.log("现在是午餐时间。");
} else if (hour > 9) {
    console.log("现在是上午了，一天的工作由此开始。");
} else if (hour > 6) {
    console.log("现在是早晨，需要晨跑吗？");
} else {
    console.log("现在是深夜，安心睡觉吧。");
}

// 如果if的条件判断语句结果不是true或false怎么办？例如：
var s = '123';
// s = undefined;
if (s) {
    // JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此条件判断的结果是true。
    console.log('变量 s 不为空');
} else {
    console.log('变量 s 为空');
}


// switch
var day = new Date().getDay();
switch (day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("工作日");
        break;
    case 6:
        console.log("周六");
    default:
        console.log("周日");
}