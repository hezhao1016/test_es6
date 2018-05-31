/**
 * reject()方法
 *
 * reject 方法就是把 Promise 的状态置为已失败（Rejected），这时 then 方法执行“失败”情况的回调（then 方法的第二参数）。
 */

//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');

            // 通过reject 方法就是把 Promise 的状态置为已失败（Rejected）
            reject('烧焦的米饭');
        }, 1000);
    });
    return p;
}

//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}


cook()
    .then(eat, function (data) {
        console.log(data + '没法吃!');
    });