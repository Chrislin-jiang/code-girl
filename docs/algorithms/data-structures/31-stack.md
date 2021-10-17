---
autoGroup-3: 栈
title: 栈知识点
---

## 栈的介绍
[coderwhy](https://www.jianshu.com/p/eade026ffaf5)

## 栈的常见操作
* push(element): 添加一个新元素到栈顶位置.
* pop()：移除栈顶的元素，同时返回被移除的元素。
* peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
* isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
* clear()：移除栈里的所有元素。
* size()：返回栈里的元素个数。这个方法和数组的length属性很类似。

## 基于数组的栈
```js
class StackArray {
	constructor() {
		this.items = [];
	}
	push(element) {
		this.items.push(element);
	}
	pop() {
		return this.item.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
	clear() {
		this.items = [];
	}
	toArray() {
		return this.items;
	}
	toString() {
		return this.items.toString();
	}
}
```
## 基于对象的栈
```js
class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
	isEmpty() {
		return this.count === 0;
	}
	size() {
		return this.count;
	}
	clear() {
		this.items = {};
		this.count = 0;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; i++) {
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}
}

```

## JavaScript 中栈的应用
* 待补充
* 结合李兵老师的文章
* 参考瓶子君的那篇文章