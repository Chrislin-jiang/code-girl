---
autoGroup-4: 队列
title: 队列知识点
---
## 队列的介绍
[coderwhy](https://www.jianshu.com/p/ca1bb95ada76)

## 队列的操作

* enqueue(element)：向队列尾部添加一个（或多个）新的项。
* dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
* front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
* isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
* size()：返回队列包含的元素个数，与数组的length属性类似。


## 基于数组的队列
```js
class Queue {
	constructor() {
		this.items = [];
	}
	// enqueue(element)：向队列尾部添加一个（或多个）新的项。
	enqueue(element) {
		this.items.push(element);
	}
	// dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
	dequeue() {
		this.items.shift();
	}
	// front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
	front() {
		return this.items[0];
	}
	// isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
	isEmpty() {
		return this.items.length === 0;
	}
	// size()：返回队列包含的元素个数，与数组的length属性类似。
	size() {
		return this.items.length;
	}

}
```
## 基于对象的队列
```js
class Queue {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}
	// enqueue(element)：向队列尾部添加一个（或多个）新的项。
	enqueue(element) {
		this.items[this.count] = element;
		this.count++;
	}
	// dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
	}
	// front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
	front() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.lowestCount];
	}
	// isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
	isEmpty() {
		return this.size() === 0;
	}
	// size()：返回队列包含的元素个数，与数组的length属性类似。
	size() {
		return this.count - this.lowestCount;
	}

	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; i++) {
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}
}
```
## 双端队列
```js
// 双端队列:允许同时从前端和后端添加和移除元素
class Deque {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}
	addFront(element) {
		// 第一种场景:如果这个双端队列为空
		if (this.isEmpty()) {
			this.addBack();
		} else if (this.lowestCount > 0) {
			// 第二种场景:一个元素已经从双端队列的前端移除
			this.lowestCount--;
			this.items[this.lowestCount] = element;
		} else {
			// 第三种场景:lowestCount=0的情况
			for (let i = this.count; i > 0; i--) {
				this.items[i] = this.items[i - 1];
			}
			this.count++;
			this.lowestCount = 0;
			this.items[0] = element;
		}
	}
}
```
## 循环队列