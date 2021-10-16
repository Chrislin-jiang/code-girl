---
title: 笔试
---

## 编程
记录笔试中的编程题和面试中的代码题

### 1-1-JS 实现 sleep
[^_^]: # (富途)

* sleep函数作用是让线程休眠，等到指定时间在重新唤起。

1. 方法一
这种实现方式是利用一个伪死循环阻塞主线程。因为JS是单线程的。所以通过这种方式可以实现真正意义上的sleep()。
```js
function sleep(delay) {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		continue;
	}
}

function test() {
	console.log('111');
	sleep(2000);
	console.log('222');
}

test()
```

2. 方法二：定时器
```js
function sleep1(ms, callback) {
	setTimeout(callback, ms)
}
//sleep 1s
sleep1(1000, () => {
	console.log(1000)
})
```

3. 方法三：ES6异步处理
```js
const sleep = time => {
	return new Promise(resolve => setTimeout(resolve, time))
}
sleep(1000).then(() => {
	console.log(1)
})
```

4. 方法四：yield后面是一个生成器 generator
```js
function sleepGenerator(time) {
	yield new Promise(function(resolve,reject){
		setTimeout(resolve,time);
	 }) 
} 
sleepGenerator(1000).next().value.then(()=>{console.log(1)}) 
```

5. 方法五：es7---- async/await是基于Promise的，是进一步的一种优化
```js
function sleep(time) {
	return new Promise(resolve => setTimeout(resolve,time)) 
} 
async function output() {
	let out = await sleep(1000); 
	console.log(1); 
	return out;
} 
output();
```

注意点：
* async用来申明里面包裹的内容可以进行同步的方式执行，await则是进行执行顺序控制，每次执行一个await，程序都会暂停等待await返回值，然后再执行之后的await。
* await后面调用的函数需要返回一个promise，另外这个函数是一个普通的函数即可，而不是generator。
* await只能用在async函数之中，用在普通函数中会报错。
* await命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try…catch 代码块中。
* 其实，async / await的用法和co差不多，await和yield都是表示暂停，外面包裹一层async 或者 co来表示里面的代码可以采用同步的方式进行处理。不过async / await里面的await后面跟着的函数不需要额外处理，co是需要将它写成一个generator的。

[参考](https://blog.csdn.net/qq_36711388/article/details/89787637)


### 1-2-获取给定范围的随机整数
[^_^]: # (富途)

实现一个获取范围内随机整数的方法：输入两个正数（可能是小数）m和n，m < n.随机输出一个大于等于m且小于n的整数。
```js
function getRandom(m, n) {
	if (isNaN(m)) {
		throw new Error('m must be a valid number');
	}
	if (isNaN(n)) {
		throw new Error('n must be a valid number');
	}
	m = m % 1 == 0 ? m : Math.floor(m) + 1;
	if (n % 1 == 0) {
		n = n - 1;
	} else {
		n = Math.floor(n);
	}
	return Math.floor(Math.random() * (n - m + 1)) + m;
}
let res = getRandom(3, 4);
console.log(res);
```

### 2-1-数组去重函数
[^_^]: # (兴业数金)

编程题
* 编写一个数组去重函数，对数组进行去重处理
* 输入：由数字、字符串、数组、对象等类型元素组成的数组
* 输出：去重后的数组

解法一：
```js
function unique(arr) {
    // 编写代码
    let b = [],
        hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (!hash[JSON.stringify(arr[i])]) {
            hash[JSON.stringify(arr[i])] = true;
            b.push(arr[i]);
        }
    }
    return b;
}
```

解法二：
```js
function unique(arr) {
    // 编写代码
    // JSON.stringify(item) 是把数组中的对象解析成字符串再进行比较
    let b = arr.map(item => {
        return JSON.stringify(item);
    })
    // Set(b) 用来对 b 去重，但是去重后的结果不是我们想要的数组的形式
    let c = Array.from(new Set(b));
    let d = c.map(item => {
        return JSON.parse(item);
    })
    return d;
}
```

【考点】深拷贝、数组去重


【这次笔试的感受是，对JS的一些 API 的输入输出不太清楚】


### 3-1 数组扁平化并去重
[^_^]: # (众安保险)
第一种写法：
```js
function fn(arr){
	let res = arr.flat(Infinity);
	return [...new Set(res)];
}
```
第二种写法：
```js
function fn(arr) {
	let res = arr.flat(Infinity);
	return Array.from(new Set(res));
}
```

### 3-2 按要求给数组分组
[^_^]: # (众安保险)
题目：给定一个由0/1组成的数组，要求将其划分为若干个组，其中，每组有且仅有一个1，问一共有多少种划分方式。
```js
输入：
[1, 0, 1, 1]
输出：
2
```

解答【不知道是否考虑到所有的情况】:
* 思路：当遇到1的时候，判断后面紧跟着有多少个0，遇到一个0，增加一种划分方式。
```js
function findFn(arr) {
	let len = arr.length;

	if (len == 1) {
		return arr[0] == 0 ? 0 : 1;
	}
	let count = 1;
	for (let i = 0; i < len; i++) {
		if (arr[i] == 1) {
			let j = i + 1;
			while (j < len && arr[j] == 0) {
				count++;
				j++;
			}
		}
	}
	return count;
}
```
测试：
```js
console.log(findFn([1])); // 1
console.log(findFn([1, 0, 0])); // 3
console.log(findFn([1, 0, 1, 1])); // 2
console.log(findFn([1, 0, 0, 0, 1, 1])); // 4
console.log(findFn([0, 0, 0, 0, 1, 1])); // 1
```


### 3-3 二维数组组合排序
[^_^]: # (众安保险)
题目：输入一个二维数组，实现按第一列```arr[i][0]```升序排列，当```arr[i][0]```相等的情况下，按```arr[i][1]```升序排列。
```js
function sortFn(arr) {
	return arr.sort(sortFunctionXY)
}
function sortFunctionXY(a, b) {
	if (a[0] === b[0]) {
		return (a[1] < b[1]) ? -1 : 1;
	} else {
		return (a[0] < b[0]) ? -1 : 1;
	}
}
```
测试：
```js
let c = [
	[12, 5],
	[58, 2],
	[28, 1],
	[18, 1],
	[12, 3],
	[12, 1]
];
console.log(sortFn(c));
```
输出：
```js
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0:(2) [12, 1]
1:(2) [12, 3]
2:(2) [12, 5]
3:(2) [18, 1]
4:(2) [28, 1]
5:(2) [58, 2]
//
[
	[12, 1],
	[12, 3],
	[12, 5],
	[18, 1],
	[28, 1],
	[58, 2]
]
```
#### 补充
二维数组按列排序
```js
// 按第一列升序排列
function sortFunctionX(a, b) {
	if (a[0] === b[0]) {
		return 0;
	} else {
		return (a[0] < b[0]) ? -1 : 1;
	}
}
// 按第二列升序排列
function sortFunctionY(a, b) {
	if (a[1] === b[1]) {
		return 0;
	} else {
		return (a[1] < b[1]) ? -1 : 1;
	}
}
```


### 4-1 一个字符串数组的最长公共后缀
[^_^]: # (浦发银行)
```js
function LongestCommonPrefix(...arguments) {
	let strs = [];
	// 将每个字符串反转
	// 将求解共同后缀转换为求解共同前缀
	for (let str of arguments) {
		strs.push(str.split('').reverse().join(''));
	}
	// console.log(strs);
	if (strs == null || strs.length == 0) return "";

	// 默认将第一个认为是最长的共同前缀
	let sameStr = strs[0]; 
	for (let i = 1; i < strs.length; i++) {
		let len = sameStr.length > strs[i].length ? strs[i].length : sameStr.length;
		let j;
		for (j = 0; j < len; j++) {
			// 逐个字符比较,不等的时候退出
			if (sameStr.charAt(j) != strs[i].charAt(j))
				break;
		}
		// 退出的 j 即当前的最小,整个遍历结束后就是整个的最小了
		sameStr = sameStr.substring(0, j);
	}
	return sameStr == '' ? null : sameStr;
}
```
测试：
```js
console.log(LongestCommonPrefix('abbb', 'abb')); // bb
console.log(LongestCommonPrefix('ccccd', 'd')); // d
console.log(LongestCommonPrefix('ddds', 'aaaa')); // null
console.log(LongestCommonPrefix('qwsa', 'sa', 'abbba')); // a
console.log(LongestCommonPrefix('daadaa', 'dadsa', 'adadl')); // null
```



### 获取对象的值
[^_^]: # (字节跳动-别人的面经)
```js
function getValue(obj, str, defaultValue) {
	let strArr = str.split('.');
	let Rep = /(\w+)\[(\d+)\]/;

	for (let i = 0; i < strArr.length; i++) {
		if (Rep.test(strArr[i])) {
			let index = strArr[i].match(Rep)[2],
				target = strArr[i].match(Rep)[1];
			obj = obj[target][parseInt(index)];
			continue;
		}
		if (obj.hasOwnProperty(strArr[i])) {
			obj = obj[strArr[i]];
		} else {
			return defaultValue;
		}
	}
	return obj;
}
const obj_1 = {a: {b: {c: {d: [{e: 4}]}}}}

console.log(getValue(obj_1, 'a.b.c.d[0].e', 1)) // 4
```
补充：
* [遍历对象](https://blog.csdn.net/longgege001/article/details/83592530)
* [字节跳动前端面经](https://www.nowcoder.com/discuss/537024?type=post&order=time&pos=&page=1&channel=1009&source_id=search_post)
* [面试总结 - 基础编程题 - 实现一个取obj值的方法](https://blog.csdn.net/weixin_41610178/article/details/93936493)
* [正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)


### 数组乱序
[^_^]: # (字节跳动-2020.11.12一面)
```js
// 对数组中的数据进行乱序
a = [1, 2, 3, 4, 5]
定义一个函数
function random(){
// code...
}
实现效果：
a.random() //  [2, 1, 5, 4, 3]
```

我的实现：
```js
Array.prototype.random = function() {
	const self = this
	let len = self.length
	let arrIndex = new Set()
	let result = []
	while (arrIndex.size <= len) {
		arrIndex.add(Math.floor(Math.random() * len - 1))
	}
	let arrIndex2 = Array.from(arrIndex)
	for (let i = 0; i < len; i++) {
		result[i] = self[arrIndex2[i]]
	}
	return result
}
a = [1, 2, 3, 4, 5]
console.log(a.random())
```

参考
* [如何将一个 JavaScript 数组打乱顺序](https://www.jianshu.com/p/4454eaf4bdf8)
* [数组乱序（打乱数组，至少两种方法）](https://blog.csdn.net/SpringRolls/article/details/109444688)
* [知乎-如何将一个 JavaScript 数组打乱顺序](https://www.zhihu.com/question/68330851/answer/266506621)
* [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

```js
let arr = [1, 2, 3, 4, 5, 'hello', 'bye', 6, 8, 'yes'];

function shuffle1(arr) {
	let len = arr.length
	let index, temp
	while (len > 0) {
		index = Math.floor(Math.random() * len)
		temp = arr[len - 1]
		arr[len - 1] = arr[index]
		arr[index] = temp
		len--
	}
	return arr
}
console.log(shuffle1(arr))
/* function shuffle(arr) {
	return arr.sort(function() {
		return Math.random() - 0.5;
	})
} */
function shuffle2(arr) {
	return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffle2(arr))
```


```js
Array.prototype.shuffle = function() {
	let arr = this
    let len = arr.length
    let index, temp
    while (len > 0) {
    	index = Math.floor(Math.random() * len)
    	temp = arr[len - 1]
    	arr[len - 1] = arr[index]
    	arr[index] = temp
    	len--
    }
    return arr
}
```