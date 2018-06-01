/**
 * 数组的一些扩展方法：
 * remove       在原数组上删除元素
 * del          删除元素，不影响原数组　
 * clone        克隆数组，返回副本
 * distinct     去重, 返回去重后的数组
 * each         循环数组中的每个元素
 * map          传入一个函数，将依次作用在每个元素上
 * reduce       把一个函数作用在这个Array的每个元素上，reduce()把结果继续和序列的下一个元素做累积计算
 * filter       过滤Array的某些元素，然后返回剩下的元素
 * indexOf      查找元素在数组中的下标,返回第一个匹配
 * lastIndexOf  过滤Array的某些元素，然后返回剩下的元素
 * contains     判断一个数组是否包含某个元素
 * toString     重写toString()方法
 */

/**
　*　方法:Array.remove(index)
　*　功能:在原数组上删除元素
　*　参数:index删除元素的下标.
　*　返回:删除的元素
　*/
if (!Array.remove) {
    Array.prototype.remove = function (index) {
        if (isNaN(index) || index >= this.length || index < 0) {
            return false;
        }
        var removeItem = this[index];
        for (var i = 0, n = 0, len = this.length; i < len; i++) {
            if (this[i] != this[index]) {
                this[n++] = this[i];
            }
        }
        this.length -= 1;
        return removeItem;
    };
}

/**
 *　方法：Array.del(index)
 *　功能：删除元素，不影响原数组　
 *　参数:index删除元素的下标
 *　返回:返回改动后的新数组
 */
if (!Array.del) {
    Array.prototype.del = function (index) {
        if (isNaN(index) || index >= this.length || index < 0) {
            return false;
        }
        var aCopy = this.slice();
        aCopy.remove(index);
        return aCopy;
    };
}

/**
 * 克隆数组，返回副本
 * @returns {Array}
 */
if (!Array.clone) {
    Array.prototype.clone = function () {
        var o = [];
        this.each(function (element, index) {
            o[index] = element;
        });
        return o;
    };
}

/**
 * 去重, 返回去重后的数组
 * @returns {Array}
 */
if (!Array.distinct) {
    Array.prototype.distinct = function () {
        var arr = [],
            obj = {},
            i = 0,
            len = this.length,
            result;
        for (; i < len; i++) {
            result = this[i];
            if (obj[result] !== result) {
                arr.push(result);
                obj[result] = result;
            }
        }

        return arr;
    };
}

/**
 * 循环数组中的每个元素
 * @param fun(element, index, self) 回调函数，element表示值,index表示下标，self：当前数组
 */
if (!Array.each) {
    Array.prototype.each = function (fun) {
        for (var i = 0, len = this.length; i < len; i++) {
            fun(this[i], i, this);
        }
    };
}

/**
 * 传入一个函数，将依次作用在每个元素上
 * @param fun(x) 回调函数，接受一个参数
 * @returns {Array} 返回计算结果，一个数组
 */
if (!Array.map) {
    Array.prototype.map = function (fun) {
        var o = [];
        this.each(function (element, index) {
            o[index] = fun(element);
        });
        return o;
    };
}

/**
 * 把一个函数作用在这个Array的每个元素上，reduce()把结果继续和序列的下一个元素做累积计算
 * @param fun(x, y) 回调函数，接受两个参数
 * @returns {*} 返回计算结果
 */
if (!Array.reduce) {
    Array.prototype.reduce = function (fun) {
        var result = 0;
        for (var i = 0, len = this.length; i < len; i++) {
            if (i <= len - 1) {
                if (i <= len - 2) {
                    result += fun(this[i], this[i + 1]);
                    i++;
                } else {
                    result += this[i];
                }
            }
        }
        return result;
    };
}

/**
 * 过滤Array的某些元素，然后返回剩下的元素
 * @param fun(element, index, self) 回调函数，element:元素，index：元素下标，self：当前数组
 * @returns {Array} 返回过滤后的数组
 */
if (!Array.filter) {
    Array.prototype.filter = function (fun) {
        var o = [];
        for (var i = 0, len = this.length; i < len; i++) {
            if (fun(this[i], i, this)) {
                o.push(this[i]);
            }
        }
        return o;
    };
}

/**
 * 查找元素在数组中的下标,返回第一个匹配
 * @param obj 元素
 * @returns {number} 下标，未找到返回-1
 */
if (!Array.indexOf) {
    Array.prototype.indexOf = function (obj) {
        for (var i = 0, len = this.length; i < len; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * 查找元素在数组中的下标,返回最后一个匹配
 * @param obj 元素
 * @returns {number} 下标，未找到返回-1
 */
if (!Array.lastIndexOf) {
    Array.prototype.lastIndexOf = function (obj) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * 判断一个数组是否包含某个元素
 * @param obj 元素
 * @returns {boolean} 包含返回true，否则返回false
 */
if (!Array.contains) {
    Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    };
}

/**
 * 重写Array类原有的toString()方法
 * @returns {string} 字符串
 */
if (!Array.toString) {
    Array.prototype.toString = function () {
        var str = "[";
        this.each(function (element, index) {
            str += index + ":" + element + ", ";
        });
        str = str.substring(0, str.length - 2);
        str += "]";
        return str;
    };
}


// ----------------------------------测试代码----------------------------------
// 测试删除功能
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.del(5));
console.log(arr);

console.log(arr.remove(5));
console.log(arr);

// 测试each函数
var arr = [1,2,3,4];
var str = "";
arr.each(function (element, index){
    str += index + ":" + element + "\t";
});
console.log(str);

// 测试clone函数
var r = arr.clone();
console.log(r);

// 测试map函数
r = arr.map(function(x){
    return x*x;
});
console.log(r);

// 测试reduce函数
var sum = arr.reduce(function(x, y){
    return x + y;
});
console.log(sum);

// 测试toString函数
console.log(r.toString());

// 测试去重
var arr = ['a', 'b', 'c', 'a'];
console.log(arr.distinct());

// 测试filter函数
// 删掉偶数，只保留奇数
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]

// 把一个Array中的空字符串删掉
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r); // ['A', 'B', 'C']

// 利用filter，可以巧妙地去除Array的重复元素
var r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r.toString());

// 测试indexOf
console.log(arr.indexOf('strawberry'));
console.log(arr.lastIndexOf('strawberry'));
console.log(arr.contains('strawberry'));