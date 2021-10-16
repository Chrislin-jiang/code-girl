---
autoGroup-7: 树
title: 树知识点
---

## 树
[coderwhy-树结构](https://www.jianshu.com/p/b7d501591eb7)

## 二叉树
二叉树的表示方式：
1. 动态的表示方式，用指针 node.left node.right
2. 用一个数组（顺序存储二叉树）通过索引值检索父节点、左侧、右侧子节点的值
	* 对于给定位置 index 的节点
	* 左侧子节点的位置 2 * index + 1 (如果位置可用)；
	* 右侧子节点的位置 2 * index + 2 (如果位置可用)；
	* 父节点位置 Math.floor((index - 1)/2);
3. 用一个二维数组
```js
[[父节点,子节点],[父节点,子节点],[父节点,子节点],...,[父节点,子节点]]
```

### 二叉搜索树 BST
[coderwhy-二叉搜索树](https://www.jianshu.com/p/ad811c95aad3)

#### 什么是二叉搜索树?
二叉搜索树（BST，Binary Search Tree），也称二叉排序树或二叉查找树

二叉搜索树是一颗二叉树, 可以为空；如果不为空，满足以下性质：
* 非空左子树的所有键值小于其根结点的键值。
* 非空右子树的所有键值大于其根结点的键值。
* 左、右子树本身也都是二叉搜索树。

#### 二叉搜索树的操作
* insert(key)：向树中插入一个新的键。
* search(key)：在树中查找一个键，如果结点存在，则返回true；如果不存在，则返回false。
* inOrderTraverse：通过**中序**遍历方式遍历所有结点。    左**根**右
* preOrderTraverse：通过**先序**遍历方式遍历所有结点。   **根**左右
* postOrderTraverse：通过**后序**遍历方式遍历所有结点。  左右**根**
* min：返回树中最小的值/键。
* max：返回树中最大的值/键。
* remove(key)：从树中移除某个键。

#### 二叉搜索树的实现
可以使用数组
可以使用链表

学习JavaScript数据结构与算法-10.3

```js
/* 
书 
 */
class Node {
	constructor(key) {
		this.key = key
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	// insert(key)：向树中插入一个新的键。
	// insert(key)是外部调用方法
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key)
		}
	}
	// insertNode(node, key)是内部调用方法
	insertNode(node, key) {
		if (node.key > key) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
	// search(key)：在树中查找一个键，如果结点存在，则返回true；如果不存在，则返回false。
	search(key) {
		return this.searchNode(this.root, key)
	}
	searchNode(node, key) {
		if (node == null) {
			return false
		}
		if (key < node.key) {  // 传入的值 小于 当前节点,向左边继续查找
			this.searchNode(node.left, key)
		} else if (key > node.key) {  // 传入的值 大于 当前节点,向右边继续查找
			this.searchNode(node.right, key)
		} else {  // 传入的值 等于 当前节点---说明找到啦
			return true
		}
	}
	// inOrderTraverse：通过中序遍历方式遍历所有结点。
	// inOrderTraverse 接受一个回调函数作为参数，用来定义对遍历到的每个节点进行的操作 
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right, callback)
		}
	}
	// preOrderTraverse：通过先序遍历方式遍历所有结点。
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback)
	}
	preOrderTraverseNode(node, callback) {
		if (node != null) {
			callback(node.key)
			this.preOrderTraverseNode(node.left, callback)
			this.preOrderTraverseNode(node.right, callback)
		}
	}
	// postOrderTraverse：通过后序遍历方式遍历所有结点。
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback)
	}
	postOrderTraverseNode(node, callback) {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback)
			this.postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}
	// min：返回树中最小的值/键。
	min() {
		return this.minNode(this.root)
	}
	minNode(node) {
		let current = node
		while (current !== null && current.left !== null) {
			current = current.left
		}
		return current
	}

	// max：返回树中最大的值/键。
	max() {
		return this.maxNode(this.root)
	}
	maxNode(node) {
		let current = node
		while (current !== null && current.right !== null) {
			current = current.right
		}
		return current
	}
	// remove(key)：从树中移除某个键。
	// 这是难点部分
	remove(key) {
		// 注意:这里 root 被赋值为 removeNode 方法的返回值
		this.root = this.removeNode(this.root, key)
	}
	removeNode(node, key) {
		// 如果正在检索的节点为null,说明键不在树中,直接返回null
		if (node == null) {
			return null
		}
		if (key < node.key) { // 传入的值 小于 当前节点,向左边继续查找
			node.left = this.removeNode(node.left, key)
			return node
		} else if (key > node.key) { // 传入的值 大于 当前节点,向右边继续查找
			node.right = this.removeNode(node.right, key)
			return node
		} else { // 传入的值 等于 当前节点--说明找到了要移除的节点--接下来有三种情况
			// 1.如果移除的是一个叶节点
			if (node.left == null && node.right == null) {
				node = null
				return node
			}
			// 2.如果移除有一个左侧或者右侧子节点的节点
			if (node.left == null) {
				node = node.right
				return node
			} else if (node.right == null) {
				node = node.left
				return node
			}
			// 3.移除有两个子节点的节点
			// 到其右子树中找到最小节点 aux
			const aux = this.minNode(node.right)
			// 让 aux 的值 替换 要移除的节点
			node.key = aux.key
			// 右子树最小节点还存在,这个时候,需要把它移除掉
			node.right = this.removeNode(node.right, aux.key)
			return node
		}
	}
}
```
测试：
```js
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(8);
tree.insert(15);
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(12);
tree.insert(3);
tree.insert(17);
tree.insert(9);
const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);
```
输出：2 3 6 8 9 10 11 12 15 17

## 红黑树  
记录
2020.04.28
### 二叉搜索树存在的问题

coderwhy 

二叉搜索树的优势
* 可以快速找到给定关键字的数据项，并且可以快速地插入和删除数据项

二叉搜索树的缺陷
* 但是，二叉搜索树有一个很麻烦的问题
* 如果插入的数据是有序的数据，比如下面的情况
* 初始化一个9 8 12 的二叉树，插入下面的数据 7 6 5 4 3 2 1 ，会造成二叉树的深度很深--退化成链表？？

非平衡树
* 比较好的二叉搜索树数据应该是左右分布均匀的
* 但是插入连续数据后，分布不均匀，称这种树为非平衡树
* 对于一棵平衡二叉树来说，插入/查找等操作的效率是O(logN)
* 对于一棵非平衡二叉树，相当于编写了一个链表，查找效率变成了O(N)

### 王争
平衡二叉查找树不仅满足上面平衡二叉树的定义，还满足二叉查找树的特点。最先被发明的平衡二叉查找树是AVL 树，它严格符合我刚讲到的平衡二叉查找树的定义，即任何节点的左右子树高度相差不超过 1，是一种高度平衡的二叉查找树。

但是很多平衡二叉查找树其实并没有严格符合上面的定义（树中任意一个节点的左右子树的高度相差不能大于 1），比如我们下面要讲的红黑树，它从根节点到各个叶子节点的最长路径，有可能会比最短路径大一倍。

**我们学习数据结构和算法是为了应用到实际的开发中的，所以，我觉得没必去死抠定义。对于平衡二叉查找树这个概念，我觉得我们要从这个数据结构的由来，去理解“平衡”的意思。**

发明平衡二叉查找树这类数据结构的初衷是，解决普通二叉查找树在频繁的插入、删除等动态更新的情况下，出现时间复杂度退化的问题。

所以，平衡二叉查找树中“平衡”的意思，其实就是让整棵树左右看起来比较“对称”、比较“平衡”，不要出现左子树很高、右子树很矮的情况。这样就能让整棵树的高度相对来说低一些，相应的插入、删除、查找等操作的效率高一些。

所以，如果我们现在设计一个新的平衡二叉查找树，只要树的高度不比 log2n 大很多（比如树的高度仍然是对数量级的），尽管它不符合我们前面讲的严格的平衡二叉查找树的定义，但我们仍然可以说，这是一个合格的平衡二叉查找树。

### !important 王争-内容小结 
很多同学都觉得红黑树很难，的确，它算是最难掌握的一种数据结构。其实红黑树最难的地方是它的实现，我们今天还没有涉及，下一节我会专门来讲。

**不过呢，我认为，我们其实不应该把学习的侧重点，放到它的实现上。那你可能要问了，关于红黑树，我们究竟需要掌握哪些东西呢？**

还记得我多次说过的观点吗？我们学习数据结构和算法，要学习它的由来、特性、适用的场景以及它能解决的问题。对于红黑树，也不例外。你如果能搞懂这几个问题，其实就已经足够了。

红黑树是一种平衡二叉查找树。它是为了解决普通二叉查找树在数据更新的过程中，复杂度退化的问题而产生的。红黑树的高度近似 log2n，所以它是近似平衡，插入、删除、查找操作的时间复杂度都是 O(logn)。

因为红黑树是一种性能非常稳定的二叉查找树，所以，在工程中，但凡是用到动态插入、删除、查找数据的场景，都可以用到它。不过，它实现起来比较复杂，如果自己写代码实现，难度会有些高，这个时候，我们其实更倾向用跳表来替代它。

### 26
红黑树是一个让我又爱又恨的数据结构，“爱”是因为它稳定、高效的性能，“恨”是因为实现起来实在太难了。我今天讲的红黑树的实现，对于基础不太好的同学，理解起来可能会有些困难。**但是，我觉得没必要去死磕它。**

**我为什么这么说呢？因为，即便你将左右旋背得滚瓜烂熟，我保证你过不几天就忘光了。因为，学习红黑树的代码实现，对于你平时做项目开发没有太大帮助。对于绝大部分开发工程师来说，这辈子你可能都用不着亲手写一个红黑树。除此之外，它对于算法面试也几乎没什么用，一般情况下，靠谱的面试官也不会让你手写红黑树的。**

如果你对数据结构和算法很感兴趣，想要开拓眼界、训练思维，我还是很推荐你看一看这节的内容。但是如果学完今天的内容你还觉得懵懵懂懂的话，也不要纠结。我们要有的放矢去学习。你先把平时要用的、基础的东西都搞会了，如果有余力了，再来深入地研究这节内容。

--------------------------------------------------
### 内容小结

“红黑树一向都很难学”，有这种想法的人很多。**但是我感觉，其实主要原因是，很多人试图去记忆它的平衡调整策略。实际上，你只需要能看懂我讲的过程，没有知识盲点，就算是掌握了这部分内容了**。毕竟实际的软件开发并不是闭卷考试，当你真的需要实现一个红黑树的时候，可以对照着我讲的步骤，一点一点去实现。

**现在，我就来总结一下，**如何比较轻松地看懂我今天讲的操作过程。

* 第一点，把红黑树的平衡调整的过程比作魔方复原，不要过于深究这个算法的正确性。你只需要明白，只要按照固定的操作步骤，保持插入、删除的过程，不破坏平衡树的定义就行了。

* 第二点，找准关注节点，不要搞丢、搞错关注节点。因为每种操作规则，都是基于关注节点来做的，只有弄对了关注节点，才能对应到正确的操作规则中。在迭代的调整过程中，关注节点在不停地改变，所以，这个过程一定要注意，不要弄丢了关注节点。

* 第三点，插入操作的平衡调整比较简单，但是删除操作就比较复杂。针对删除操作，我们有两次调整，第一次是针对要删除的节点做初步调整，让调整后的红黑树继续满足第四条定义，“每个节点到可达叶子节点的路径都包含相同个数的黑色节点”。但是这个时候，第三条定义就不满足了，有可能会存在两个红色节点相邻的情况。第二次调整就是解决这个问题，让红黑树不存在相邻的红色节点。

### bobo
红黑树 与 2-3树

红黑树 与 2-3树 的等价性

理解 红黑树 与 2-3树 之间的关系

红黑树并不难

2-3树

学习2-3树，不仅对于理解红黑树有帮助

对于理解B类树，也是有巨大帮助的

[bobo老师的笔记](https://www.cnblogs.com/hello-shf/p/11364565.html)

bobo

13-2

使用纸笔对自己的测试数据进行一定的模拟

在这里还是想向大家强调一下，学习抽象的数据结构或者算法的时候，其中一个非常重要的学习方法就是

用一个比较的数据集对自己所写代码，或者已经有的代码进行模拟

在模拟的过程中，可以更深刻地理解这个逻辑

整体的运转过程

13-1
13-2
13-4 
13-5 
红黑树 与 2-3树 的等价性

13-6
红黑树添加新元素
保持根节点为黑色和左旋转

了解以上内容可以应付大多数面试

面试一般不会让你实现一个红黑树

如果有这样的面试题
面试官可能是在刁难你
bobo老师觉得

但这里还是会讲解

红黑树添加新元素
希望同学们头脑中始终记着
2-3树 是如何添加新元素并进行相关处理的
红黑树 与 2-3树 的等价性


13-3 颜色反转和右旋转
13-7 向红黑树中添加节点
？？？
这几节有点乱

13-8 红黑树的性能测试

13-9 更多和红黑树相关的话题
红黑树中删除节点
比添加节点还要复杂
也是要分各种情况

**对于绝大多数人来说，没有太多的意义**

面试过程99%是不会让你具体去实现的

**一般都是问你了不了解**
* 红黑树的由来
* 实现原理
* 解决的问题
* 与 2-3树 的等价关系
* 红黑树满足的性质
* 本质上是保持黑平衡的数据结构
* 在某种程度上牺牲了平衡性
* 但在添加节点、删除节点这些操作上比 AVL 更好

补充
* 左倾红黑树---比较标准的实现方式
* 右倾红黑树---也是可以实现的

**红黑树统计性能更优**

另一种统计性能优秀的树结构
* Splay Tree 伸展树
* 局部性原理：刚被访问的内容下次高概率被再次访问

基于红黑树的 Map 和 Set
* java.util 的 TreeMap 和 TreeSet 基于红黑树

红黑树的其他实现
* 有兴趣的同学可以去看看---算法导论中红黑树的实现

着急准备面试的同学，理解红黑树就行


## 堆
* 堆是一种具有以下性质的完全二叉树：每个节点的值都小于或等于其左右孩子节点的值，称为小顶堆。
* 注意：没有要求节点的左孩子的值和右孩子的值的大小关系。
* 用**数组**来存储数据，通过索引值检索父节点、左侧、右侧子节点的值。

对于给定位置 index 的节点：
* 左侧子节点的位置 2 * index + 1 (如果位置可用)；
* 右侧子节点的位置 2 * index + 2 (如果位置可用)；
* 父节点位置 Math.floor((index - 1)/2);

在堆数据结构中进行三个主要操作：
* insert(value):这个方法是向堆中插入一个新的值。如果插入成功，返回true，否则返回false；
* extract():这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值；
* findMinimum():这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。

向堆中插入值 insert(value):
* 将值插入堆的底部叶节点（数组的最后一个位置），再执行 siftUp 方法，表示我们要将这个值和它的父节点进行交换，直到父节点小于这个插入的值。

移除堆中的最小值 extract():
* 移除最小值（最小堆）表示移除数组中的第一个元素（堆的根节点）；
* 具体代码实现：
	* 将数组中的第一个元素（堆的根节点）与数组（堆）中的最后一个元素交换位置；
	* 移除最后一个元素
	* 然后执行 siftDown 方法，表示要交换元素直到堆的结构正常。

```js
// 将要移除的最小值暂存起来，用于最后返回这个值
const removeValue = findMinimum();

// 将数组中的第一个元素（堆的根节点）与数组（堆）中的最后一个元素交换位置
swap(this.heap, 0, this.size()-1);
// 移除最后一个元素
this.heap.pop();

// 执行 siftDown 方法，表示要交换元素直到堆的结构正常
this.siftDown(0);
return removeValue;
```

* 或者-具体代码实现：
	* 将堆的最后一个元素移动到根部
	* 然后执行 siftDown 方法，表示要交换元素直到堆的结构正常。
```js
// 将要移除的最小值暂存起来，用于最后返回这个值
const removeValue = findMinimum();

// 将堆的最后一个元素移动到根部
this.heap[0] = this.heap.pop();
		
// 执行 siftDown 方法，表示要交换元素直到堆的结构正常
this.siftDown(0);
return removeValue;
```


### 最小堆

```js
function swap(array, a, b) {
	/* const temp = array[a];
	array[a] = array[b];
	array[b] = temp; */
	[array[a], array[b]] = [array[b], array[a]];
}

class MinHeap {
	constructor() {
		this.heap = [];
	}
	getLeftIndex(index) {
		return 2 * index + 1;
	}
	getRightIndex(index) {
		return 2 * index + 2;
	}
	getParentIndex(index) {
		if (index === 0) {
			return undefined;
		}
		return Math.floor((index - 1) / 2);
	}
	
	insert(value) {
		if (value !== null) {
			this.heap.push(value);
			this.shiftUp(this.heap.length - 1);
			return true;
		}
		return false;
	}
	// 将这个值和它的父节点进行交换，直到父节点小于这个插入的值
	siftUp(index) {
		let parent = this.getParentIndex(index);
		while (index > 0 && this.heap[parent] > this.heap[index]) {
			swap(this.heap, parent, index);
			index = parent;
			parent = this.getParentIndex(index);
		}
	}
	size() {
		return this.heap.length;
	}
	isEmpty() {
		return this.size() === 0;
	}
	findMinimum() {
		return this.isEmpty() ? undefined : this.heap[0];
	}
	extract() {
		if (this.isEmpty()) {
			return undefined;
		}
		if (this.size() === 1) {
			return this.heap.shift();
		}
		// 将要移除的最小值暂存起来，用于最后返回这个值
		const removeValue = findMinimum();
		// 将堆的最后一个元素移动到根部
		this.heap[0] = this.heap.pop();
		
		// 执行 siftDown 方法，表示要交换元素直到堆的结构正常
		this.siftDown(0);
		return removeValue;
	}
	siftDown(index) {
		let curIndex = index;
		const left = this.getLeftIndex(index);
		const right = this.getRightIndex(index);
		const size = this.size();
		// 找到左右子节点中较小的那个
		if (left < size && this.heap[curIndex] > this.heap[left]) {
			curIndex = left;
		}
		if (right < size && this.heap[curIndex] > this.heap[right]) {
			curIndex = right;
		}
		
		// 找到最小子节点的位置之后，检验它的值是否与 index 相同，
		// 因为和自己交换没有意义
		// 如果不相等，就将 index 和 curIndex 表示的值交换位置
		// 重复这个过程，直到 curIndex 被放在正确的位置 
		if (curIndex !== index) {
			swap(this.heap, index, curIndex);
			this.siftDown(curIndex);
		}
	}
}
```

### 堆排序
堆排序是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最好、最坏、平均复杂度均为O(nlogn)，它是不稳定排序。
* 升序排序---大顶堆
* 降序排序---小顶堆

堆排序（降序排列）的思想：
* 将待排序序列构成一个小顶堆；
* 此时，整个序列的最小值就是堆的根节点；
* 将其与末尾元素进行交换，此时末尾就是最小值；
* 然后将其剩余 n-1 个元素重新构造成一个堆，这样会得到 n 个元素的次小值；
* 如此反复执行，便能得到一个有序序列。

堆排序（升序排列）的思想：
* 将待排序序列构成一个大顶堆；
* 此时，整个序列的最大值就是堆的根节点；
* 将其与末尾元素进行交换，此时末尾就是最大值；
* 然后将其剩余 n-1 个元素重新构造成一个堆，这样会得到 n 个元素的次大值；
* 如此反复执行，便能得到一个有序序列。
```js
/**
 * 堆排序
 *
 * Author: nameczz
 */

// 忽视数组的第一位
class HeapSort {
	constructor(originArray) {
		this.originArray = originArray
		console.log(this.originArray)
	}
	buildHeap() {
		const arr = this.originArray
		const startIndex = Math.floor(arr.length)
		for (let i = startIndex; i >= 1; i--) {
			this.heapify(arr, arr.length, i)
		}
		return arr
	}

	heapify(arr, len, i) {
		while (true) {
			let maxPos = i
			// 如果index i拥有叶左节点 并且左节点较大
			if (i * 2 <= len && arr[i] < arr[i * 2]) {
				maxPos = i * 2
			}
			// 如果index i拥有叶右节点 与Max节点比较大小，选出父/左/右中最大的一个
			if (i * 2 + 1 <= len && arr[maxPos] < arr[i * 2 + 1]) {
				maxPos = i * 2 + 1
			}
			if (maxPos === i) break // 循环直到i节点为最大值
			this.swap(arr, i, maxPos) // 交换位置, 父节点为父/左/右中最大的一个
			i = maxPos // i为左/右节点，并尝试向下查找更大的值
		}
	}

	sort() {
		const arr = this.buildHeap() // 先建堆
		let len = arr.length - 1
		while (len > 1) {
			this.swap(arr, 1, len) // 交换顶元素和最后一位。顶元素永远是最大的。
			len--
			this.heapify(arr, len, 1) //剩下的元素重新建堆 直到len === 1 停止
		}
		console.log(arr)
	}

	swap(arr, i, max) {
		let temp = arr[i]
		arr[i] = arr[max]
		arr[max] = temp
	}
}

const arr = [null]
let i = 0
while (i <= 10) {
	const num = Math.floor(Math.random() * 100)
	arr.push(num)
	i++
}
const testHeap = new HeapSort(arr)
testHeap.sort()
```