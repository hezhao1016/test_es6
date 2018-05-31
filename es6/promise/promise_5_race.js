/**
 * all()方法
 *
 * race 的用法与 all 一样，只不过 all 是等所有异步操作都执行完毕后才执行 then 回调。而 race 的话只要有一个异步操作执行完毕，就立刻执行 then 回调。
 * 注意：其它没有执行完毕的异步操作仍然会继续执行，而不是停止。
 *
 * 有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现。
 */

//切菜
function cutUp(){
    console.log('开始切菜。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('切菜完毕！');
            resolve('切好的菜');
        }, 1000);
    });
    return p;
}

//烧水
function boil(){
    console.log('开始烧水。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('烧水完毕！');
            resolve('烧好的水');
        }, 2000);
    });
    return p;
}

// 这里由于烧水较慢，烧好的水将会被丢弃，最终返回结果是切好的菜
// Promise
//     .race([cutUp(), boil()])
//     .then(function(results){
//         console.log("准备工作完毕：");
//         console.log(results);
//     });



// race 使用场景很多。比如我们可以用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作。
//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        setTimeout(resolve, 5001, 'http://xxx.com/xxx.jpg');
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(reject, 5000, '图片请求超时');
    });
    return p;
}


// 如果 5 秒内图片请求成功那么便进入 then 方法，执行正常的流程。
// 如果 5 秒钟图片还未成功返回，那么则进入 catch，报“图片请求超时”的信息。
Promise
    .race([requestImg(), timeout()])
    .then(function(results){
        console.log(results);
    })
    .catch(function(reason){
        console.log(reason);
    });