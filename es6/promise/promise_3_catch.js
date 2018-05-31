/**
 * catch()方法
 *
 * 1、可以和 then 的第二个参数一样，用来指定 reject 的回调
 * 2、当执行 resolve 的回调（也就是上面 then 中的第一个参数）时，如果抛出异常了（代码出错了），那么也不会报错卡死 js，而是会进到这个 catch 方法中。
 */

//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');

            // 通过reject 方法就是把 Promise 的状态置为已失败（Rejected）
            // reject('烧焦的米饭');

            // 通过 resolve 方法把 Promise 的状态置为完成态（Resolved）
            resolve('鸡蛋炒饭');
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

// cook()
//     .then(eat)
//     .catch(function (data) {
//         console.log(data + '没法吃!');
//     });

// 异常
cook()
    .then(function (data) {
        throw new Error('米饭被打翻了!');
        eat(data);
    })
    .catch(function (data) {
        console.log(data);
    });


// 可以添加多个 catch，实现更加精准的异常捕获
/*
somePromise.then(function() {
    return a();
}).catch(TypeError, function(e) {
    //If a is defined, will end up here because
    //it is a type error to reference property of undefined
}).catch(ReferenceError, function(e) {
    //Will end up here if a wasn't defined at all
}).catch(function(e) {
    //Generic catch-the rest, error wasn't TypeError nor
    //ReferenceError
});
*/