---
autoGroup-4: 队列
title: 队列题目
---

## 击鼓传花游戏
```js
function hotPotato(elementsList, num) {
	const queue = new Queue();
	const elimitatedList = [];
	const len = elementsList.length;
	for (let i = 0; i < len; i++) {
		queue.enqueue(elementsList[i]);
	}
	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		elimitatedList.push(queue.dequeue());
	}
	return {
		eliminated: elimitatedList,
		winner: queue.dequeue()
	}
}
```

## 232-用栈实现队列

## 225-用队列实现栈
- [225-用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)
- [用队列实现栈-JavaScript-三种方法](https://leetcode-cn.com/problems/implement-stack-using-queues/solution/yong-javascript-qiu-jie-gai-ti-mu-san-chong-fang-f/)
### 介绍
* 栈是一种 后进先出（last in - first out， LIFO）的数据结构，
* 栈内元素从顶端压入（push），从顶端弹出（pop）。
* 一般我们用数组或者链表来实现栈，但是这篇文章会来介绍如何用队列来实现栈。
* 队列是一种与栈相反的 先进先出（first in - first out， FIFO）的数据结构，
* 队列中元素只能从 后端（rear）入队（push），然后从 前端（front）端出队（pop）。
>本来我刚开始只想到方法2这一种解法，提交代码后，看到官方给的题解，就把其他方法用 JavaScript 实现了一下。下面的介绍部分参考自该文章。
### 方法1 两个队列-压入O(1) 弹出O(n)

**思路**
为了满足栈的特性，我们需要维护两个队列 q1 和 q2。同时，我们用一个额外的变量来保存栈顶元素。

**代码**
```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	this.q1 = []
	this.q2 = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
// 压入（push）
// 新元素永远从 q1 的后端入队，同时 q1 的后端也是栈的 栈顶（top）元素。
MyStack.prototype.push = function(x) {
	this.q1.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
/*
我们需要把栈顶元素弹出，就是 q1 中最后入队的元素。
考虑到队列是一种 FIFO 的数据结构，最后入队的元素应该在最后被出队。
因此我们需要维护另外一个队列 q2，这个队列用作临时存储 q1 中出队的元素。
q2 中最后入队的元素将作为新的栈顶元素。接着将 q1 中最后剩下的元素出队。
我们通过把 q1 和 q2 互相交换的方式来避免把 q2 中的元素往 q1 中拷贝。
*/
MyStack.prototype.pop = function() {
	while (this.q1.length > 1) {
		this.q2.push(this.q1.shift())
	}
	let top = this.q1.shift();
	[this.q1, this.q2] = [this.q2, this.q1]
	return top
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	while (this.q1.length > 1) {
		this.q2.push(this.q1.shift())
	}
	let top = this.q1[0];
	this.q2.push(this.q1.shift());
	[this.q1, this.q2] = [this.q2, this.q1]
	return top
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return this.q1.length === 0
};
```

ES6
```js
/**
 * Initialize your data structure here.
 */
class MyStack {
	constructor() {
		this.q1 = []
		this.q2 = []
	}
	/**
	 * Push element x onto stack. 
	 * @param {number} x
	 * @return {void}
	 */
	push(x) {
		if (this.q1.length === 0) {
			this.q2.push(x)
		} else {
			this.q1.push(x)
		}
	}
	/**
	 * Removes the element on top of the stack and returns that element.
	 * @return {number}
	 */
	pop() {
		if (this.q1.length === 0) {
			while (this.q2.length > 1) {
				this.q1.push(this.q2.shift())
			}
			return this.q2.shift()
		} else {
			while (this.q1.length > 1) {
				this.q2.push(this.q1.shift())
			}
			return this.q1.shift()
		}
	}
	/**
	 * Get the top element.
	 * @return {number}
	 */
	top() {
		if (this.q1.length === 0) {
			while (this.q2.length > 1) {
				this.q1.push(this.q2.shift())
			}
			let top = this.q2.shift()
			this.q1.push(top)
			return top
		} else {
			while (this.q1.length > 1) {
				this.q2.push(this.q1.shift())
			}
			let top = this.q1.shift()
			this.q2.push(top)
			return top
		}
	}
	/**
	 * Returns whether the stack is empty.
	 * @return {boolean}
	 */
	empty() {
		return this.q1.length === 0 && this.q2.length === 0
	}
}
```


### 方法2 两个队列，压入 -O(n) ， 弹出 -O(1)

```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	const this.queue1 = []
	const this.queue2 = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
/* 
push 方法，先将元素放入到空队列中，再将另一个队列中的元素依次取出来放进去
 */
MyStack.prototype.push = function(x) {
	if (this.queue1.length === 0) {
		this.queue1.push(x)

		while (this.queue2.length) {
			this.queue1.push(this.queue2.shift())
		}
	} else if (this.queue2.length === 0) {
		this.queue2.push(x)

		while (this.queue1.length) {
			this.queue2.push(this.queue1.shift())
		}
	}
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	if (this.queue1.length !== 0) {
		return this.queue1.shift()
	} else {
		return this.queue2.shift()
	}
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	if (this.queue1.length !== 0) {
		return this.queue1[0]
	} else {
		return this.queue2[0]
	}
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return !this.queue1.length && !this.queue2.length;
};
```

### 方法3 一个队列 压入O(n) 弹出O(1)
```javascript
/**
 * Initialize your data structure here.
 */


var MyStack = function() {
	this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
// 每当进入一个新元素时，将队列顺序反过来，也就是将队列元素“出队列”，然后又“入队列”
// 每当进入一个新元素时，将队列顺序反过来
/* 具体步骤：
1. 先将新元素 push 进队列
2. 将队列中除了新元素以外的元素依次 “出队列”，然后又“入队列”，循环 this.queue.length-1 次
*/
MyStack.prototype.push = function(x) {
	this.queue.push(x)
	for (let i = 1; i < this.queue.length; i++) {
		this.queue.push(this.queue.shift())
	}
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	return this.queue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	return this.queue[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

## 239-滑动窗口最大值
::: tip 真题
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值。

进阶：
你能在线性时间复杂度内解决此题吗？
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

};
```
:::
题目来源：
[leetcode-239-滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)

### 题解
#### 可能的解法
1. 两层 for 循环-嵌套
O(m*n)
2. 最大堆
O(logk)
3. 双端队列
O(N)

#### 使用双端队列法
核心的思路是维护一个有效的递减队列。

维持递减队列的目的，就在于确保队头元素始终是当前窗口的最大值。

放入双端队列的是数组的索引
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	// 初始化结果数组
	let res = []
	// 定义一个双端队列
	let deque = []
	const len = nums.length
	for (let i = 0; i < len; i++) {
		// 队尾元素与当前元素比较
		while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
			// 如果队尾元素小于当前元素，让队尾元素的从队列尾部出队
			// 目的，维护双端队列中索引所对应的值是递减趋势
			deque.pop()
		}
		// 放入双端队列的是数组的索引
		deque.push(i)
		if (deque.length && i - deque[0] >= k) {
			deque.shift()
		}
		// 当 i + 1 >= k 时，才往结果数组里 push 对应的值
		if (i + 1 >= k) {
			res.push(nums[deque[0]])
		}
	}
	return res
};
```