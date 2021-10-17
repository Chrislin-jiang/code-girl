---
autoGroup-2: 链表
title: 链表知识点
---

## 1.链表的介绍
[coderwhy](https://www.jianshu.com/p/7a2d072a6c3e)

## 2.单向链表的完整封装
### 2.1 常见操作
链表中应该有哪些常见的操作
* append(element)：向列表尾部添加一个新的项
* insert(index, element)：向列表的特定位置插入一个新的项。
* remove(element)：从列表中移除一项。
* indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
* removeAt(index)：从列表的特定位置移除一项。
* isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
* size()：返回链表包含的元素个数。与数组的length属性类似。
* toString()：由于列表项使用了Node类，就需要重写继承自 JavaScript 对象默认的toString方法，让其只输出元素的值。

### 2.2 单向链表的完整封装
::: details 框架
``` js 
function defaultEquals(a, b) {
	return a === b;
}
class Node {
	constructor(element) {
		
	}
}
class LinkedList {
	constructor(equalsFn = defaultEquals) {
		
	}
	// 向链表尾部添加元素
	push(element) {
		
	}

	// 从链表中特定位置移除一个元素
	removeAt(index) {
		
	}

	// 循环迭代链表直到目标元素 返回链表中特定位置的元素
	getElementAt(index) {
		
	}

	// 重构 removeAt 方法
	removeAt(index) {
		
	}

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	/* insert(index, element) {
		
	} */

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	// 借用 getElementAt()
	insert(index, element) {
		
	}

	// indexOf()方法:返回一个元素的位置
	indexOf(element) {
		
	}

	// 从链表中移除元素
	remove(element) {
		
	}
	size() {

	}
	isEmpty() {
		
	}
	getHead() {
		
	}

	// toString
	toString() {
		
	}

	// 改/更新元素
	/* update(index, element) {
		
	} */
	
	// update(index，element)：修改某个位置的元素；
	// 借助 getElementAt()
	update(index, element) {
		
	}
}
```
:::

::: details 代码实现
```js
function defaultEquals(a, b) {
	return a === b;
}
class Node {
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}
class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}
	// 向链表尾部添加元素
	push(element) {
		const node = new Node(element);
		if (this.head == null) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}

	// 从链表中特定位置移除一个元素
	removeAt(index) {
		// 越界判断
		if (index >= 0 && index < this.count) {
			let current = this.head;
			// 情况1：删除第一个节点
			if (index === 0) {
				this.head = current.next;
			} else {
				// 情况2
				let previous;
				for (let i = 0; i < index; i++) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}

	/* removeAt(index) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return undefined;
		}
		// 情况1：删除第一个节点
		let current = this.head;

		if (index === 0) {
			this.head = current.next;
		} else {
			// 情况2
			let previous;
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			}
			previous = current.next;
		}
		this.count--;
		return current.element;
	} */

	// 循环迭代链表直到目标元素 返回链表中特定位置的元素
	getElementAt(index) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return undefined;
		}
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}

	// 重构 removeAt 方法
	removeAt(index) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return undefined;
		}

		let current = this.head;
		// 情况1：删除第一个节点
		if (index === 0) {
			this.head = current.next;
		} else {
			// 情况2
			let previous = this.getElementAt(index - 1);
			current = previous.next;
			previous.next = current.next;
			// previous.next = previous.next.next;
		}
		this.count--;
		return current.element;
	}

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	/* insert(index, element) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return false;
		}
		let node = new Node(element);
		// 在链表
		if (index === 0) {
			node.next = this.head;
			this.head = node;
		} else {
			let current = this.head;
			let previous;
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
		}
	} */

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	// 借用 getElementAt()
	insert(index, element) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return false;
		}
		let node = new Node(element);
		// 在链表
		if (index === 0) {
			node.next = this.head;
			this.head = node;
		} else {
			const previous = this.getElementAt(index - 1);
			const current = previous.next;
			node.next = current;
			previous.next = node;
		}
		return true;
	}

	// indexOf()方法:返回一个元素的位置
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current !== null; i++) {
			if (equalsFn(current.element, element)) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	// 从链表中移除元素
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}
	size() {
		return this.count;
	}
	isEmpty() {
		return this.size() === 0;
	}
	getHead() {
		return this.head;
	}

	// toString
	toString() {
		if (this.head == null) {
			reture '';
		}
		let objString = this.head.element;
		let current = this.head.next;
		for (let i = 0; i < this.size() && current !== null; i++) {
			objString = `${objString},${current}`;
			current = current.next;
		}
		return objString;
	}

	// 改/更新元素
	/* update(index, element) {
		// 越界判断
		if (index < 0 || index >= this.count) {
			return false;
		}
		if (index === 0) {
			this.head.element = element;
		} else {
			let current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
			current.element = element;
		}
		return true;
	} */
	
	// update(index，element)：修改某个位置的元素；
	// 借助 getElementAt()
	update(index, element) {
		if (index < 0 || index >= this.count) {
			return false;
		}
		if (index === 0) {
			this.head.element = element;
		} else {
			const current = this.getElementAt(index);
			current.element = element;
		}
		return true;
	}
}
```


:::
## 3. 双向链表
### 3.1 双向链表介绍
**单向链表**
* 只能从头遍历到尾或者从尾遍历到头(一般从头到尾)，也就是链表相连的过程是单向的. 实现的原理是上一个链表中有一个指向下一个的引用.

**单向链表有一个比较明显的缺点:**
* 我们可以轻松的到达下一个节点, 但是回到钱一个节点是很难的. 但是, 在实际开发中, 经常会遇到需要回到上一个节点的情况
* 举个例子: 假设一个文本编辑用链表来存储文本. 每一行用一个String对象存储在链表的一个节点中. 当编辑器用户向下移动光标时, 链表直接操作到下一个节点即可. 但是当用于将光标向上移动呢? 这个时候为了回到上一个节点, 我们可能需要从first开始, 依次走到想要的节点上.

**双向链表**
* 既可以从头遍历到尾, 又可以从尾遍历到头
* 也就是链表相连的过程是双向的. 那么它的实现原理, 你能猜到吗?
* 一个节点既有向前连接的引用, 也有一个向后连接的引用.
* 双向链表可以有效的解决单向链表中提到的问题.

**双向链表有什么缺点呢?**
* 每次在插入或删除某个节点时, 需要处理四个节点的引用, 而不是两个. 也就是实现起来要困难一些
* 并且相当于单向链表, 必然占用内存空间更大一些.
* 但是这些缺点和我们使用起来的方便程度相比, 是微不足道的.


### 3.2 双向链表的完整封装
::: details 框架
```js
class DoubleNode extends Node {
	constructor(element, next, prev) {
		
	}
}

class DoubleLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		
	}
	// 向链表尾部添加元素
	push(element) {
		
	}
	// 向任意位置插入新元素
	/* insert(element, index) {
		
	} */

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	// 借用 getElementAt()
	insert(element, index) {
		
	}

	// 从链表中特定位置移除一个元素
	removeAt(index) {
		
	}
	// indexOf(element)：返回元素在链表中的索引，如果链表中没有元素就返回-1；
	/* indexOf(element) {
	  
	} */
	indexOf(element) {
		
	}

	getHead() {

	}
	getTail() {
		
	}
	clear() {
		
	}
	toString() {
		
	}
	inverseToString() {
		
	}
}
```
:::

::: details 完整实现
```js
class DoubleNode extends Node {
	constructor(element, next, prev) {
		super(element, next);
		this.prev = prev;
	}
}

class DoubleLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
		this.tail = undefined;
	}
	// 向链表尾部添加元素
	push(element) {
		const node = new DoubleNode(element);
		if (this.head == null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.count++;
	}
	// 向任意位置插入新元素
	/* insert(element, index) {
		// 越界检查
		if (index < 0 || index >= this.count) {
			return false;
		}
		const node = new DoubleNode(element);

		// 情况1:原链表为空
		if (this.head == null) {
			this.head = node;
			this.tail = node;
		} else {
			// 情况2:原链表不为空
			// 在双向链表第一个位置(起点)插入一个新元素
			if (index === 0) {
				node.next = this.head;
				this.head.prev = node;
				this.head = node;
			} else if (index === this.count-1) { // 在双向链表最后一个位置插入一个新元素
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			} else { // 在双向链表中间插入一个新元素
				let current = this.head;
				for (let i = 0; i < index; i++) {
					current = current.next;
				}
				current.prev.next = node;
				current.prev = node;
				node.prev = current.prev;
				node.next = current;
				
			}
		}
		this.count++;
		return true;
	} */

	// 在任意位置插入元素 向链表的特定位置插入一个元素
	// 借用 getElementAt()
	insert(element, index) {
		// 越界检查
		if (index < 0 || index >= this.count) {
			return false;
		}
		const node = new DoubleNode(element);

		// 情况1:原链表为空
		if (this.head == null) {
			this.head = node;
			this.tail = node;
		} else {
			// 情况2:原链表不为空
			// 在双向链表第一个位置(起点)插入一个新元素
			if (index === 0) {
				node.next = this.head;
				this.head.prev = node;
				this.head = node;
			} else if (index === this.count) { // 在双向链表最后一个位置插入一个新元素
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			} else { // 在双向链表中间插入一个新元素
				let current = this.getElementAt(index);
				current.prev.next = node;
				current.prev = node;
				node.prev = current.prev;
				node.next = current;
			}
		}
		this.count++;
		return true;
	}

	// 从链表中特定位置移除一个元素
	removeAt(index) {
		// 越界检查
		if (index < 0 || index >= this.count) {
			return undefined;
		}
		// 情况1:链表中只有一个结点
		if (this.count === 1) {
			this.head = undefined;
			this.tail = undefined;
		} else { // 情况2
			//定义在最上面方便以下各种情况返回 current.element
			let current;
			// 从头部移除一个元素
			if (index === 0) {
				current = this.head;
				current.next.prev = null;
				current = current.next;
			} else if (index === this.count) { // 从尾部移除一个元素
				current = this.tail;
				current.prev.next = null;
				current = current.prev;
			} else { // 从中间移除一个元素
				current = this.head;
				for (let i = 0; i < index; i++) {
					current = current.next;
				}
				current.next.prev = current.prev;
				current.prev.next = current.next;
			}
			this.count--;
			return current.element;
		}
	}
	// indexOf(element)：返回元素在链表中的索引，如果链表中没有元素就返回-1；
	/* indexOf(element) {
	  let current = this.head;
	  let index = 0;
	  while (current != null) {
	    if (this.equalsFn(element, current.element)) {
	      return index;
	    }
	    index++;
	    current = current.next;
	  }
	  return -1;
	} */
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current !== null) {
			if (this.equalsFn(current.element, element)) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	getHead() {
		return this.head;
	}
	getTail() {
		return this.tail;
	}
	clear() {
		super.clear();
		this.tail = undefined;
	}
	toString() {
		if (this.head == null) {
			return '';
		}
		let objString = `${this.head.element}`;
		let current = this.head.next;
		while (current != null) {
			objString = `${objString},${current.element}`;
			current = current.next;
		}
		return objString;
	}
	inverseToString() {
		if (this.tail == null) {
			return '';
		}
		let objString = `${this.tail.element}`;
		let previous = this.tail.prev;
		while (previous != null) {
			objString = `${objString},${previous.element}`;
			previous = previous.prev;
		}
		return objString;
	}
}
```
::: 

## 王争
### 哨兵
？？？

### 检查边界条件
软件开发中，代码在一些边界或者异常情况下，最容易产生 Bug。链表代码也不例外。

要实现没有 Bug 的链表代码，一定要在编写的过程中以及编写完成之后，检查边界条件是否考虑全面，以及代码在边界条件下是否能正确运行。

经常用来检查链表代码是否正确的边界条件有这样几个：
* 如果链表为空时，代码是否能正常工作？
* 如果链表只包含一个结点时，代码是否能正常工作？
* 如果链表只包含两个结点时，代码是否能正常工作？
* 代码逻辑在处理头结点和尾结点的时候，是否能正常工作？

当你写完链表代码之后，除了看下你写的代码在正常的情况下能否工作，还要看下在上面我列举的几个边界条件下，代码仍然能否正确工作。如果这些边界条件下都没有问题，那基本上可以认为没有问题了。

### 技巧六：多写多练，没有捷径
如果你已经理解并掌握了我前面所讲的方法，但是手写链表代码还是会出现各种各样的错误，也不要着急。因为我最开始学的时候，这种状况也持续了一段时间。

现在我写这些代码，简直就和“玩儿”一样，其实也没有什么技巧，就是把常见的链表操作都自己多写几遍，出问题就一点一点调试，熟能生巧！

所以，我精选了 5 个常见的链表操作。你只要把这几个操作都能写熟练，不熟就多写几遍，我保证你之后再也不会害怕写链表代码。
* 单链表反转
* 链表中环的检测
* 两个有序的链表合并
* 删除链表倒数第 n 个结点
* 求链表的中间结点

### 内容小结
正确链表代码的六个技巧。分别是：
1. **理解指针或引用的含义**

什么是指针？指针是一个变量，该变量中存的是其它变量的地址。将普通变量赋值给指针变量，其实是把它的地址赋值给指针变量。

2. **警惕指针丢失和内存泄漏**

在插入和删除结点时，要注意先持有后面的结点再操作，否者一旦后面结点的前继指针被断开，就无法再访问，导致内存泄漏。

3. **利用哨兵简化难度**

链表的插入、删除操作，需要对插入第一个结点和删除最后一个节点做特殊处理。利用哨兵对象可以不用边界判断，链表的哨兵对象是只存指针不存数据的头结点。

4. **重点留意边界条件处理**

操作链表时要考虑链表为空、一个结点、两个结点、头结点、尾结点的情况。学习数据结构和算法主要是掌握一系列思想，能在其它的编码中也养成考虑边界的习惯。

5. **举例画图，辅助思考**

对于比较复杂的操作，可以用纸笔画一画，释放脑容量来做逻辑处理(时间换空间思想)，也便于完成后的检查。

6. **多写多练，没有捷径**

孰能生巧，不管是什么算法，只有经过反复的练习，才能信手拈来。

我觉得，写链表代码是最考验逻辑思维能力的。因为，链表代码到处都是指针的操作、边界条件的处理，稍有不慎就容易产生 Bug。链表代码写得好坏，可以看出一个人写代码是否够细心，考虑问题是否全面，思维是否缜密。所以，这也是很多面试官喜欢让人手写链表代码的原因。所以，这一节讲到的东西，你一定要自己写代码实现一下，才有效果。
