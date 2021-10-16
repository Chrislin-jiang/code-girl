---
autoGroup-2: 链表
title: 链表题目
---

## 链表的简单应用
[修言-链表的应用](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5e5b4698f265da5749474beb)

链表的三类题目：
* 链表的处理：合并、删除等（删除操作画个记号，重点中的重点！）
* 链表的反转及其衍生题目
* 链表成环问题及其衍生题目


### 203-移除链表元素
::: tip 真题描述：
删除链表中等于给定值 val 的所有节点。
```js
示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

};
```
:::
题目来源：
[leetcode-203](https://leetcode-cn.com/problems/remove-linked-list-elements/)
bobo老师

#### 思路分析
::: details 
**删除结点的步骤**
* 找到该结点的前一个结点
* 进行删除操作

**三种方法**
* 删除头结点时另做考虑（由于头结点没有前一个结点）
* 添加一个虚拟头结点，删除头结点就不用另做考虑
* 递归
:::

#### 题解
::: details 添加一个虚拟头结点
```js
var removeElements = function(head, val) {
	// 创建一个虚拟头结点
	const dummy = new ListNode()
	dummy.next = head
	let prev = dummy
	// 确保当前结点后还有结点
	while (prev.next) {
		if (prev.next.val == val) {
			prev.next = prev.next.next;
		} else {
			prev = prev.next;
		}
	}
	return dummy.next
};
```
:::

::: details 递归
```js
const removeElements = function(head, val){
	if(head == null) return null;
	head.next = removeElements(head.next, val);
	return head.val === val ? head.next : head;
}

// 实际执行删除操作的是这一步 head.val === val ? head.next : head;
```
:::



### 21-链表的合并
::: tip 真题描述：
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

```js
示例： 
输入：1->2->4, 1->3->4 
输出：1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

};
```
:::
题目来源：
[leetcode-21-合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
[修言-链表](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5e5b4698f265da5749474beb)

#### 思路分析
:::details 
**处理链表的本质，是处理链表结点之间的指针关系**。

注意：
* l1 和 l2 两个链表长度不等的情况：
* 若其中一个链表已经完全被串进新链表里了，而另一个链表还有剩余结点，考虑到该链表本身就是有序的，可以直接把它整个拼到目标链表的尾部。
:::

#### 题解
:::details 
```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
	// 定义头结点，确保链表可以被访问到
	let head = new ListNode()
	// cur 这里就是咱们那根“针”
	let cur = head
	// “针”开始在 l1 和 l2 间穿梭了
	while (l1 && l2) {
		// 如果 l1 的结点值较小
		if (l1.val <= l2.val) {
			// 先串起 l1 的结点
			cur.next = l1
			// l1 指针向前一步
			l1 = l1.next
		} else {
			// l2 较小时，串起 l2 结点
			cur.next = l2
			// l2 向前一步
			l2 = l2.next
		}

		// “针”在串起一个结点后，也会往前一步
		cur = cur.next

	}

	// 处理链表不等长的情况
	cur.next = l1 !== null ? l1 : l2
	// 返回起始结点
	return head.next
};
```
:::

#### 做题记录
::: details
* 2020.05.02

```js
// 返回起始结点
return head.next
```
:::

### 83-链表结点的删除-基础题目

::: tip 真题描述：
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
```js
示例 1:
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

};
```
:::
题目来源：
[leetcode-83-删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
[修言-链表](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5e5b4698f265da5749474beb)
#### 思路分析
::: details
* 普通解法-将需要删除的目标结点的前驱结点 next 指针往后指一格
* 虚拟结点---此题可以不设置虚拟节点，因为第一个节点一定不会删除
* 递归

关于递归解法-思路来源于 bobo 老师的【玩转数据结构课程】5-4 链表的天然递归结构性质-解决链表中删除元素的问题-递归解决删除这个更小的链表中相应的元素-【平板-截屏】

近乎和链表相关的所有操作，都可以使用递归的形式完成

建议 对链表的增删改查，进行递归实现
:::

#### 题解
::: details 直接法
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
	// 设定 cur 指针，初始位置为链表第一个结点
	let cur = head;
	// 遍历链表
	while (cur != null && cur.next != null) {
		// 若当前结点和它后面一个结点值相等（重复）
		if (cur.val === cur.next.val) {
			// 删除靠后的那个结点（去重）
			cur.next = cur.next.next;
		} else {
			// 若不重复，继续遍历
			cur = cur.next;
		}
	}
	return head;
};
```
:::

::: details 虚拟节点
```js
var deleteDuplicates = function(head) {
	let dummy = new ListNode();
	dummy.next = head;
	let cur = dummy;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return dummy.next;
};
// 解答错误：
// 当输入[0,0,0,0,0]
// 输出为[]
// 预期结果[0]
```
:::

::: details 递归解法
关于递归解法-思路来源于 bobo 老师的【玩转数据结构课程】5-4 链表的天然递归结构性质-解决链表中删除元素的问题-递归解决删除这个更小的链表中相应的元素-【平板-截屏】

近乎和链表相关的所有操作，都可以使用递归的形式完成

建议 对链表的增删改查，进行递归实现

* 待完成
:::


#### 做题记录
::: details
* 修言
* 2020.05.02
* 2020.09.27
:::

### 82-删除排序链表中的重复元素 II
::: tip 真题描述：
给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
```js
示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

};
```
:::
题目来源：
[leetcode-82-删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
#### 思路分析
::: details Possible solutions
1. 对头结点进行特殊处理
2. 引入虚拟结点
3. 递归

**联系与区别**
* 弄清楚这道题与上一道题的区别，如果继续沿用刚才的思路，会发现有一些问题。
* cur 指针从第一个结点出发开始遍历的，无法定位到第一个结点的前驱结点，删除便无法完成。
* 所以当需要对第一个结点进行处理时，需要单独讨论-也就是特殊处理。

**如何解决**
* 这时可以引入**虚拟结点-dummy 结点**-定义第一个结点的前驱结点，确保链表中所有结点都有一个前驱结点，就能够用同样的逻辑来处理，不需要单独处理了。

**思考**
* 在链表题中，经常会遇到这样的问题：链表的第一个结点，因为没有前驱结点，导致我们需要特殊处理。
* 这时就可以引入一个 虚拟节点-dummy 结点来解决这个问题。
:::

#### 题解
::: details 常规解法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	let dummy = new ListNode()
	dummy.next = head
	let cur = dummy
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next
		} else {
			cur = cur.next
		}
	}
	return dummy.next
};
/*
输入
[1,2,3,3,4,4,5]
输出
[1,2,3,4,5]
预期结果
[1,2,5]
 */
```

* 注意以上解法，相当于跟上一题一样，会删除所有重复的元素，使得每个元素只出现一次。
* 如果需要将重复的元素都删除的话，应该更改代码，并且再多加一些逻辑
```js {18,19,20,21,22,23,24}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
	// 极端情况：0个或1个结点，则不会重复，直接返回
	if (!head || !head.next) {
		return head
	}
	// dummy 登场
	let dummy = new ListNode()
	// dummy 永远指向头结点
	dummy.next = head
	// cur 从 dummy 开始遍历
	let cur = dummy
	// 当 cur 的后面有至少两个结点时
	while (cur.next && cur.next.next) {
		// 因为要将重复的元素进行删除，所以 cur 应该代表 出现重复的前一个结点
		// 对 cur 后面的两个结点进行比较
		if (cur.next.val === cur.next.next.val) {
			// 若值重复，说明要进行删除操作了，先记下这个值
			let val = cur.next.val
			// 反复地排查后面的元素是否存在多次重复该值的情况
			while (cur.next && cur.next.val === val) {
				// 若有，则删除
				cur.next = cur.next.next
			}
		} else {
			// 若不重复，则正常遍历
			cur = cur.next
		}
	}
	// 返回链表的起始结点
	return dummy.next;
};
```
:::

::: details 递归解法
* 待完成
:::


## 链表的进阶题目
### 快慢指针与多指针
链表题目中，有一类会涉及到反复的遍历。涉及反复遍历的题目，题目本身虽然不会直接跟你说“你好，我是一道需要反复遍历的题目”，但只要你尝试用常规的思路分析它，你会发现它一定涉及反复遍历；同时，涉及反复遍历的题目，还有一个更明显的特征，就是它们往往会涉及相对复杂的链表操作，比如反转、指定位置的删除等等。

解决这类问题，我们用到的是双指针中的“快慢指针”。快慢指针指的是两个一前一后的指针，两个指针往同一个方向走，只是一个快一个慢。快慢指针严格来说只能有俩，不过实际做题中，可能会出现一前、一中、一后的三个指针，这种超过两个指针的解题方法也叫“多指针法”。

快慢指针+多指针，双管齐下，可以帮助我们解决链表中的大部分复杂操作问题。


### 19-删除链表的倒数第 N 个结点【中等】
::: tip 真题描述：
给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
```js
示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
说明： 给定的 n 保证是有效的。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

};
```
:::
题目来源：
[leetcode-19-删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
[修言-10](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46d451882504fc0a6351)

#### 思路分析
::: details Possible solutions
**方法一：两次遍历算法**

**思路**
* 两步走：1.先遍历链表，确定其结点个数；2.再从头开始，定位到需删除结点进行删除。
* **“倒数”变“正数”**，将原问题简化成另一个问题：删除从列表开头数起的第 (count−n+1) 个结点，其中 count 是列表的长度。

**算法**
* 添加一个**虚拟结点**作为辅助，该结点位于链表头部。
* **虚拟结点用来简化某些极端情况，例如链表中只含有一个结点，或需要删除链表的头部。**
* 在第一次遍历中，我们找出链表的长度 count。然后设置一个指向虚拟结点的指针，并移动它遍历链表，直至它到达第 (count−n) 个结点那里。我们把第 (count−n) 个结点的 next 指针重新链接至第 (count−n+2) 个结点，完成这个算法。

**复杂度分析**
* 时间复杂度：O(count)，该算法对链表进行了两次遍历，首先计算了链表的长度 count 其次找到第 (count−n) 个结点。 操作执行了 2count−n 步，时间复杂度为 O(count)。
* 空间复杂度：O(1)

**方法二：一次遍历-快慢指针**

**算法**
* 上述算法可以优化为只使用一次遍历
* 使用两个指针 fast&slow 而不是一个指针。
* fast 从链表的开头向前移动 n 步，
* 而 slow 将从链表的开头出发。
* 现在，这两个指针被 n 个结点分开。
* 过同时移动两个指针向前来保持这个恒定的间隔，直到 fast 指针到达最后一个结点。
* 此时 slow 指针将指向从最后一个结点数起的第 n 个结点。
* 重新链接 slow 的 next 指针指向该结点的下下个结点。

**复杂度分析**
* 时间复杂度：O(count)，该算法对含有 count 个结点的链表进行了一次遍历。因此时间复杂度为 O(count)。
* 空间复杂度：O(1)。

**总结**

链表删除问题中，若走两次遍历，我们做了两件事：
1.求长度
2.做减法，找定位。

若用**快慢指针**，把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“n”上（用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆），这样当快指针走到链表末尾（第 len 个）时，慢指针刚好就在 len - n 这个地方稳稳落地。

**小贴士**
* dummy 结点的使用
* 虚拟结点用来简化某些极端情况，例如链表中只含有一个结点，或需要删除链表的头部。
* 涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高），建议引入 dummy 

```js
const dummy = new ListNode()
// 这里的 head 是链表原有的第一个结点
dummy.next = head
```

:::

#### 题解
::: details 两次遍历
```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
	// 初始化 dummy 结点, 这样就不用单独讨论 头结点删除的情况
	const dummy = new ListNode()
	// dummy指向头结点
	dummy.next = head
	let cur = dummy
	// 定义变量 count 进行计数，求出链表的结点个数
	let count = 0
	// 第一次遍历，目的，求出链表结点总数【注意，这里引入了 dummy，count 比实际的 总数多 1】
	while (cur.next) {
		cur = cur.next
		count++
	}
	// 重新初始化 cur2 结点，让它从 dummy 出发
    let cur2 = dummy
	// 第二次遍历，定位，删除
	for (let i = 0; i < count - n ; i++) {
		cur2 = cur2.next
	}
	cur2.next = cur2.next.next
	return dummy.next
};
```
:::


::: details 快慢指针
```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
	// 初始化 dummy 结点
	const dummy = new ListNode()
	// dummy指向头结点
	dummy.next = head
	// 初始化快慢指针，均指向dummy
	let fast = dummy
	let slow = dummy

	// 快指针先走 n 步
	while (n !== 0) {
		fast = fast.next
		n--
	}

	// 快慢指针一起走
	while (fast.next) {
		fast = fast.next
		slow = slow.next
	}

	// 慢指针删除自己的后继结点
	slow.next = slow.next.next
	// 返回头结点
	return dummy.next
};
```
:::


### 链表的反转
### 206-反转链表-完全反转
::: tip 真题描述：
定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
```js
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

};
```
:::
题目来源：
[leetcode-206](https://leetcode-cn.com/problems/reverse-linked-list/solution/)
#### 思路分析
::: details Possible solutions
* 迭代
* 递归
:::

#### 题解
::: details 迭代
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    // 初始化前驱结点为 null
    let pre = null;
    // 初始化目标结点为头结点
    let cur = head;
    // 只要目标结点不为 null，遍历就得继续
    while (cur) {
        // 记录一下 next 结点
        let next = cur.next;
        // 反转指针
        cur.next = pre;
        // pre 往前走一步
        pre = cur;
        // cur往前走一步
        cur = next;
    }
    // 反转结束后，pre 就会变成新链表的头结点
    return pre
};
```

:::

::: details 递归
* 待完成
* [神三元](http://47.98.159.95/leetcode-js/linkedlist/001.html#no-1-%E7%AE%80%E5%8D%95%E7%9A%84%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8)
:::

### 92-反转链表II-局部反转

::: tip 真题描述：
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
```js
说明: 1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {

};
```
:::
题目来源：
[leetcode-92](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
[修言-10](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46d451882504fc0a6351)

#### 思路分析
::: details Possible solutions
1. 多指针
2. 递归
:::

#### 题解
::: details 多指针
<br/>
<img :src="$withBase('/algorithms/data-structure/92-局部反转一个链表.png')" alt="局部反转一个链表" width="100%" align="middle">

```js
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	const dummy = new ListNode()
	dummy.next = head
	let p = dummy
	for (let i = 0; i < m - 1; i++) {
		p = p.next
	}
	// 记录 leftHead
	let leftHead = p
	// 初始化 prev cur 
	let prev = p.next
	// 记录 第m个结点-反转区间的第一个结点
	let start = prev
	let cur = prev.next
	for (let i = m; i < n; i++) {
		let next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	leftHead.next = prev
	start.next = cur
	return dummy.next
};
```
:::

::: details 递归
* 待完成
:::

## 环形链表

### 141-环形链表

::: tip 真题描述：
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 

如果 pos 是 -1，则在该链表中没有环。
```js
示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
};
```
:::
题目来源：
[leetcode-141](https://leetcode-cn.com/problems/linked-list-cycle/)
#### 思路分析
::: details
1. 哈希表
* 通过检查一个结点此前是否被访问过来判断链表是否为环形链表。常用的方法是使用哈希表。
2. 立 flag
* 给每个已遍历过的节点加 标记，遍历链表，当出现下一个节点已被标记时，说明链表有环
3. 快慢指针
* 设置快慢两个指针，慢指针一次走一步，快指针一次走两步，如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇
:::
#### 题解

::: details 哈希表
```js
var hasCycle = function(head) {
    const map = new Map()
    while (head) {
        if (map.get(head)) {
            return true
        } else {
            map.set(head, true)
            head = head.next
        }
    }
    return false
};
```
:::

::: details 立flag
```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    // 只要结点存在，那么就继续遍历
    while(head){
        // 如果 flag 已经立过了，那么说明环存在
        if(head.flag){
            return true;
        }else{
            // 如果 flag 没立过，就立一个 flag 再往下走
            head.flag = true;
            head = head.next;
        }
    }
    return false;
};
```
:::

::: details 快慢指针
```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    let slow = head,fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
		// 慢指针一次走一步，快指针一次走两步
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
```
:::

### 142-环形链表II【中等】
::: tip 真题描述：定位环的起点
给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

说明：不允许修改给定的链表。
```js
示例 1：
输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 
解释：链表中有一个环，其尾部连接到第二个结点。

链表成环1

示例 2：

输入：head = [1,2]（如下图） 输出：tail connects to node index 0 
解释：链表中有一个环，其尾部连接到第一个结点。

链表成环2

示例 3：

输入：head = [1]（如下图） 输出：no cycle 解释：链表中没有环。

链表成环3
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
};
```
:::
题目来源：
[leetcode-142](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

#### 思路分析
::: details 
1. 哈希表
2. 立 flag
3. 快慢指针
:::

#### 题解
::: details 哈希表
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	let map = new Map()
	let cur = head
	while (cur != null) {
		if (map.has(cur)) {
			return cur
		}
		map.set(cur)
		cur = cur.next
	}
	return null
};
```
:::

::: details 立 flag
```js
const detectCycle = function(head) {
    while(head){
        if(head.flag){
            return head;
        }else{
            head.flag = true;
            head = head.next;
        }
    }
    return null;
};
```
:::

::: details 快慢指针

```js
const detectCycle = function(head) {
	// 1. 使用快慢指针
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow == fast) {
			// 带环的情况
			// cur 从链表头部出发
			// slow 从 fast 与 slow 的相遇点出发, 按照相同的速度同步往后走
			let cur = head
			while (cur !== slow) {
				cur = cur.next
				slow = slow.next
			}
			// 这个位置就是环的入口
			return cur
		}
	}
	return null
}
```
:::

## 总结
**处理链表的本质，是处理链表结点之间的指针关系**。

**快慢指针与多指针**
* 链表中涉及相对复杂的链表操作，比如反转、指定位置的删除等等，如果用常规解法，通常需要反复遍历。
* 快慢指针+多指针，可以帮助解决链表中的大部分复杂操作问题。

**小贴士**
* dummy 结点的使用
* 虚拟结点用来简化某些极端情况，例如链表中只含有一个结点，或需要删除链表的头部。
* 涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高），建议引入 dummy 

```js
const dummy = new ListNode()
// 这里的 head 是链表原有的第一个结点
dummy.next = head
```
--------------------------------------------------
* 单向链表有 head 和 next 两个属性，双向链表有 head、tail、next、prev 四个属性。处理好它们的指向，相当于将它们正确地连接在一起，这样就组成了一条链，这就是简单链表的实现。

* 不能靠 tail 和 head 来获取到需要操作的变量时，可采用 while/for 循环遍历的方式，找到需要操作的节点
[博客园](https://www.cnblogs.com/AhuntSun-blog/p/12441095.html)







