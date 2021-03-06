/**
 * Promise-承诺
 *
 * 异步编程的一种解决方案，它有三种状态，分别是pending-进行中、resolved-已完成、rejected-已失败
 * 当Promise的状态又pending转变为resolved或rejected时，会执行相应的方法，并且状态一旦改变，就无法再次改变状态，这也是它名字promise-承诺的由来
 *
 * then()方法
 *
 * 简单来讲，then 方法就是把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。
 */

//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');

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

function wash(data){
    console.log('开始洗碗：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('洗碗完毕!');
            resolve('干净的碗筷');
        }, 2000);
    });
    return p;
}


// cook()
//     .then(function(data){
//         return eat(data);
//     })
//     .then(function(data){
//         return wash(data);
//     })
//     .then(function(data){
//         console.log(data);
//     });

// 可以简化成如下:

cook()
    .then(eat)
    .then(wash)
    .then(function(data){
        console.log(data);
    });