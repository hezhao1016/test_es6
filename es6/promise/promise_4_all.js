/**
 * all()方法
 *
 * all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
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

Promise
    .all([cutUp(), boil()])
    .then(function(results){
        console.log("准备工作完毕：");
        console.log(results);
    });