---
autoGroup-1: 数组
title: 数组知识点
---

## 介绍
几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。

数组通常情况下用于存储一系列同一种数据类型的值。

但在JavaScript里，也可以在数组中保存不同类型的值。
但我们还是要遵守最佳实践，别这么做（大多数语言都没这个能力）。

数组相关的介绍可以参考这篇文章
[coderwhy](https://www.jianshu.com/p/9521594710d7)

我的补充

## 思考 & 数组的常见操作
1. 为什么要用数组？
2. 创建和初始化数组
3. 添加元素
* 3.1 在数组末尾插入元素
* 3.2 在数组开头插入元素
4. 删除元素
* 4.1 在数组末尾删除元素
* 4.2 在数组开头删除元素
5. 在任意位置添加或删除元素
6. 二维和多维数组
* 6.1 迭代二维数组的元素
* 6.2 多维数组
7. JavaScript 的数组方法参考

## 代码实现

```let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]```

### 3. 添加元素
3.1 在数组末尾插入元素
```js
numbers[numbers.length] = 10;
numbers.push(10);
```
3.2 在数组开头插入元素
```js
// Array.prototype.insertFirstPosition
Array.prototype.insertFirstPosition = function(value) {
	const len = this.length;
	for (let i = len; i > 0; i--) {
		this[i] = this[i - 1];
	}
	this[0] = value;
}
numbers.insertFirstPosition(-1);

/* let insertFirstPosition = function(numbers, value) {
	const len = numbers.length;
	for (i = len; i > 0; i--) {
		numbers[i] = numbers[i - 1];
	}
	numbers[0] = value;
} */
```

### 4. 删除元素
4.1 在数组末尾删除元素
```js
numbers[length - 1] = null; // numbers 的长度没有改变
numbers.pop();
```
4.2 在数组开头删除元素
```js
for(let i = 0; i < len; i++){
	this[i] = this[i + 1];
}
```
这样有问题,详情见书 P50,这样只是把数组第一位的值用第二位覆盖了，并没有删除元素。因为数组的长度和之前还是一样的，并且多了一个未定义的元素。

```js
Array.prototype.reIndex = function(myArray) {
	const newArray = [];
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i] !== undefined) {
			newArray.push(myArray[i]);
		}
	}
	return newArray;
}
// 手动移除第一个元素并重新排序
Array.prototype.removeFirstPosition = function() {
	for (let i = 0; i < len; i++) {
		this[i] = this[i + 1];
	}
	return this.reIndex(this);
}
```
上面的代码只应该用作示范，不应该在真实项目中使用。

要从数组开头删除元素，我们应该始终使用```shift```方法，

```js
numbers.shift();
```


### 5. 在任意位置添加或删除元素
```js
numbers.splice(5, 3);
```


### 6. 二维和多维数组
6.1 迭代二维数组的元素

6.2 多维数组

### 7. JavaScript 的数组方法参考

