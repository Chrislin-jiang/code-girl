---
title: 剑指 offer
sidebarDepth: 1
autoNext: Dynamic-Programming
---

## 【Array】
[剑指offer-Array](https://leetcode-cn.com/problemset/lcof/?topicSlugs=array)
## 3-数组中重复的数字
::: tip 真题描述
找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

```js
示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	
};

```


:::
题目来源：
[剑指offer-3-数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

### 思路分析
::: details Possible solutions
1. {}
* 新建一个对象
* 遍历数组
* 将已经遍历到的数组值及下标存放在对象中{ value : key + 1 }
* 这里 key + 1 是为了方便处理 nums[0] 也是重复的数字之一

2. Set，数组长度进行比较
3. 先排序，然后遍历，如果当前值与前一个值相等，则出现重复，返回该值
:::

### 题解


#### 解法一

::: details 
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	let map = {}
	let len = nums.length
	for (let i = 0; i < len; i++) {
		if (map[nums[i]]) {
			return nums[i]
		} else {
			map[nums[i]] = i + 1
		}
	}
};
```

:::

#### 解法二

::: details 
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	let set = new Set(),
		len = nums.length
	for (let i = 0; i < len; i++) {
		set.add(nums[i])
		if (set.size < i + 1) {
			return nums[i]
		}
	}
};
```
:::


#### 解法三

::: details 
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	let len = nums.length
	let nums2 = nums.sort((a, b) => a - b)
	for (let i = 1; i < len; i++) {
		if (nums2[i] === nums2[i - 1]) {
			return nums2[i]
		}
	}
};
```
:::

#### 做题记录
::: details 做题记录
* 2020.10.12
:::


## 4-二维数组中的查找
::: tip 真题描述
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
```js
示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {

};
```
:::
题目来源：
[剑指offer-4-二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

### 思路分析
::: details Possible solutions
1. 两层遍历
2. 从右上角 往左下找
* 横纵都是递增的, 所以从矩阵的 右上角 往 左下查找
* 当前比目标大, 如果目标存在, 只能在左下边, 此时范围缩小一列
* 当前比目标小, 目标存在的话, 只能在下边, 当前行不存在目标值, 此时范围缩小一行
:::

### 题解


#### 解法一

::: details 
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
	if (matrix == null || matrix.length == 0 || matrix[0].length == 0 || target < matrix[0][0]) {
		return false;
	}
	let m = matrix[0].length
	let n = matrix.length
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] == target) {
				return true
			}
		}
	}
	return false
};
```
:::

#### 解法二

::: details 
```js
var findNumberIn2DArray = function(matrix, target) {
  let m = matrix.length
  if(!m) return false
  let n = matrix[0].length
  let i = 0, j = n - 1
  while (i < m && j >= 0) {  // 从右上角 往左下找
    let t = matrix[i][j]
    if (t === target) {
      return true
    } else if (t > target) { // 大于目标, 说明在左/下边
      j--
    } else {                 // 小于目标, 说明在下边
      i++
    }
  }
  return false
};

```
:::
[LeetCode-别人的题解](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solution/er-fen-cha-zhao-by-shetia-6/)

#### 做题记录
::: details 做题记录

:::

::: details 记录--一个错误解法
思路：
* 先遍历第一行，如果找到 target，将其返回；
* 如果没找到，就找到第一个大于 target 的值的下标；
* 再到对应的前一列进行查找
* 这样需要考虑很多情况，满足不了题目要求
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
	if (matrix == null || matrix.length == 0 || matrix[0].length == 0 || target < matrix[0][0]) {
		return false;
	}
	if (matrix.length == 1 && matrix[0].length == 1) {
		return matrix[0][0] == target ? true : false
	}
	let len1 = matrix[0].length
	let len2 = matrix.length
	// 找到可能的所在列
	let temp1
	if(target == matrix[0][len1 - 1]){
		return true
	}else if (target > matrix[0][len1 - 1]) {
		temp1 = len1 - 1
	} else {
		for (let i = 0; i < len1 ; i++) {
			if (matrix[0][i] == target) {
				return true
			} else if (matrix[0][i] > target) {
				temp1 = i - 1
				break
			}
		}
	}
	if (len2 == 1) {
		return false
	} else {
		for (let j = 0; j < len2;) {
			if (matrix[j][temp1] == target) {
				return true
			} else if (matrix[j][temp1] > target) {
				break
			} else {
				j++
			}
		}
	}
	let temp2
	if(target == matrix[len2 - 1][0]){
		return true
	}else if (target > matrix[len2 - 1][0]) {
		temp2 = len2 - 1
	} else {
		for (let i = 0; i < len2 ; i++) {
			if (matrix[i][0] == target) {
				return true
			} else if (matrix[i][0] > target) {
				temp2 = i - 1
				break
			}
		}
	}
	if (len1 == 1) {
		return false
	} else {
		for (let j = 0; j < len1;) {
			if (matrix[temp2][j] == target) {
				return true
			} else if (matrix[temp2][j] > target) {
				break
			} else {
				j++
			}
		}
	}
	return false
};

```

![mistake1](offer_files/mistake1.jpg)
:::


## 29-顺时针打印矩阵
::: tip 真题描述
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

```js
示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

```
:::
题目来源：
[剑指offer-29-顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) return [0];
    let l = 0,
        r = matrix[0].length - 1,
        t = 0,
        b = matrix.length - 1,
        x = 0;
    let res = [];
    while (true) {
        for (let i = 1; i <= r; i++) {
            res[x++] = matrix[t][i];
            if (++t > b) break;
        }
        for (let i = t; i <= b; i++) {
            res[x++] = matrix[i][r];
            // top to bottom.
            if (l > --r) break;
        }
        for (let i = r; i >= l; i--) {
            res[x++] = matrix[b][i];
            // right to left.
            if (t > --b) break;
        }
        for (let i = b; i >= t; i--) {
            res[x++] = matrix[i][l];
            // bottom to top.
            if (++l > r) break;
        }
        return res;
    }
};
```
:::

#### 解法二

::: details 
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    let flag = true
    while(matrix.length) {
        // 从左到右
        if(flag){
            // 第一层
            res = res.concat(matrix.shift())
            // '现在'的第一层到最后一层的末尾
            for(let i=0; i<matrix.length; i++){
                matrix[i].length && res.push(matrix[i].pop())
            }
        // 右到左   
        } else {
            // 最后一层
           	res = res.concat(matrix.pop().reverse())
            // '现在'的最后一层到第一层 
            for(let i=matrix.length - 1; i> 0; i--){
               matrix[i].length && res.push(matrix[i].shift())
            }
        }
        flag = !flag
    }
    return res
};
```
:::




#### 做题记录
::: details 做题记录
```js
// 一个错误的题解，边界没有考虑清楚
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) return []
    let res = []
    let l = 0,
        r = matrix[0].length - 1,
        t = 0,
        b = matrix.length - 1
    while (l <= r - 1 && t <= b - 1) {
        for (let i = l; i <= r; i++) {
            res.push(matrix[t][i])
        }
        t++
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r])
        }
        r--
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i])
        }
        b--
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l])
        }
        l++
    }
    if (l == r && t == b) {
        res.push(matrix[t][l])
    } else if (l == r) {
        while (t <= b) {
            res.push(matrix[t][l])
            t++
        }
    } else {
        while (l <= r) {
            res.push(matrix[t][l])
            l++
        }
    }
    return res
};
```
:::




## 53-I-在排序数组中查找数字I
::: tip 真题描述
统计一个数字在排序数组中出现的次数。
```js
示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

};
```
:::
题目来源：
[剑指offer-53-I-在排序数组中查找数字I](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)

### 思路分析
::: details Possible solutions
1. 直接按顺序查找
2. 双指针，两边向中间找
3. 二分查找的思想-两次二分查找，分别找到第一个大于等于target的值的下标 p、最后一个小于等于target的下标 q，一般情况下，返回 q - p + 1
4. 二分查找的思想，先找到目标值的下标，然后分别向左向右查找
【注意】
排序数组中的搜索问题，首先想到 二分法 解决。
:::

### 题解


#### 解法一

::: details 


:::

#### 解法二
::: details 
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (nums[left] < target) {
		left++
	}
	while (nums[right] > target) {
		right--
	}
	if (left > right) {
		return 0
	} else if (left == right) {
		return 1
	} else {
		return right - left + 1
	}

};
```
:::

别人写的代码，较简短
```js
// ac地址：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
// 原文地址：https://xxoo521.com/2020-03-13-find-num-in-sorted/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if (!nums.length) return 0;

	let left = 0,
		right = nums.length - 1;
	while (nums[left] !== target && left < nums.length) {
		++left;
	}
	while (nums[right] !== target && right >= 0) {
		--right;
	}

	return left <= right ? right - left + 1 : 0;
};
```


#### 解法三
```js
var search = function(nums, target) {
	if (!nums.length) return 0;
	if (nums.length == 1) return nums[0] == target ? 1 : 0;
	let left = 0,
		right = nums.length - 1;
	let p, q;
	// 二分查找，找到第一个大于等于 target 的值的下标，赋值给 p
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] >= target) {
			if (mid == 0 || nums[mid - 1] < target) {
				p = mid;
				break;
			}
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	// 二分查找，找到最后一个小于等于target的下标 q
	left = 0;
	right = nums.length - 1;
	while (left <= right) {
		let mid2 = Math.floor((left + right) / 2);
		if (nums[mid2] <= target) {
			if (mid2 == nums.length - 1 || nums[mid2 + 1] > target) {
				q = mid2;
				break;
			}
			left = mid2 + 1

		} else {
			right = mid2 - 1
		}
	}
	if (p == undefined || q == undefined) {
		return 0
	} else {
		return q - p + 1;
	}
};

```

#### 解法四
```js
var search = function(nums, target) {
	if (!nums.length) return 0;
	if (nums.length == 1) return nums[0] == target ? 1 : 0;
	let left = 0,
		right = nums.length - 1;
	let index;
	// 二分查找，找到第一个大于等于 target 的值的下标，赋值给 p
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] == target) {
			index = mid;
            break;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1
		}
	}
	if (index === undefined) {
		return 0
	} else {
		let start = index,
			end = index;
		while (nums[start] == target) {
			start--;
		}
		while (nums[end] == target) {
			end++;
		}
		return end - start - 1;
	}
};
```


#### 做题记录
::: details 做题记录

:::






## 53-II-0～n-1中缺失的数字
::: tip 真题描述
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
```js
示例 1:

输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```
:::
题目来源：
[剑指offer-53-II-0～n-1中缺失的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

### 思路分析
::: details Possible solutions
1. 直接遍历
2. 二分思想
:::

### 题解


#### 解法一
::: details 
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	// 只有一个数据的情况
	if (nums.length == 1) return nums[0] == 0 ? 1 : 0;
	if (nums[0] == 0 && nums[nums.length - 1] == nums.length - 1) return nums.length;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i) {
			return i;
		}
	}
};
```
:::

#### 解法二

::: details 
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 当数组是连续递增的，则缺失的是最后一项的值＋1 (这个判断可以省略)
	if (nums[nums.length - 1] == nums.length - 1) return nums.length;
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] == mid) {
			left = mid + 1; // 说明右边缺失，去右边找
		} else {
			right = mid - 1; // 说明左边缺失，去左边找
		}	
	}
	return left;
};
```

:::

#### 做题记录
::: details 做题记录

:::


## 【Linked List】
## 6-从尾到头打印链表
::: tip 真题描述
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

```js
示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {

};
```
:::
题目来源：
[剑指offer-3-数组中重复的数字](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 
```js
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
	let result = [];
	let cur = head;
	while (cur) {
		result.unshift(cur.val);
        cur = cur.next;
	}
	return result;
};

```
* 执行用时：100 ms, 在所有 JavaScript 提交中击败了47.49%的用户
* 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了9.99%的用户
:::

#### 解法二

::: details 
```js
var reversePrint = function(head) {
	let result = [];
	let cur = head;
	while (cur) {
		result.push(cur.val);
		cur = cur.next;
	}
	return result.reverse();
};
```
内置的 reverse() 性能挺差的。
:::

#### 做题记录
::: details 做题记录

:::


## 24-反转链表
::: tip 真题描述
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
```js
示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
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
[剑指offer-24-反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 
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
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
	let cur = head;
	let pre = null;
	while (cur) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
};
```
:::

#### 解法二

::: details 


:::

#### 做题记录
::: details 做题记录

:::



## 18-删除链表的节点
::: tip 真题描述
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

```js
示例 1:
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
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
var deleteNode = function(head, val) {

};
```
:::
题目来源：
[剑指offer-18-删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 
```js
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
	// 创建一个虚拟节点
	let dummy = new ListNode();
	dummy.next = head;
	let cur = dummy;
	while (cur && cur.next) {
		if (cur.next.val == val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return dummy.next;
};
```
:::

#### 解法二

::: details 


:::

#### 做题记录
::: details 做题记录

:::



## 22-链表中倒数第k个节点
::: tip 真题描述
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
```js
示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {

};
```
:::
题目来源：
[剑指offer-22-链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof)

### 思路分析
::: details Possible solutions

[个人博客-](https://chrislin-jiang.github.io/code-girl/algorithms/data-structures/22-linkedList-exercise.html#_19-%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC-n-%E4%B8%AA%E7%BB%93%E7%82%B9)
:::

### 题解


#### 解法一

::: details 
快慢指针
```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
	let slow = head,
		fast = head;
	while (k > 0) {
		fast = fast.next;
		k--
	}
	while(fast){
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};
```

:::

#### 解法二

::: details 


:::

#### 做题记录
::: details 做题记录

:::



## 52-两个链表的第一个公共节点
::: tip 真题描述
输入两个链表，找出它们的第一个公共节点。
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
};
```
:::
题目来源：
[剑指offer-52-两个链表的第一个公共节点](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

### 思路分析
::: details Possible solutions
[leetcode-xin-tan](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/shuang-jie-fa-ha-xi-biao-kuai-man-zhi-zhen-nei-cun/)
1. 遍历 + 哈希表记录 
* 时间复杂度是O(N)
* 空间复杂度是O(N)
思路：
* 开辟哈希表 map。key 是节点，value 是 boolean，代表节点是否出现过
* 对 list1 进行遍历，设置 map[节点]=true
* 对 list2 进行遍历，如果节点在 map 中出现过，那么说明这是两个链表的公共节点，返回

2. 快慢指针
* 时间复杂度是O(N)
* 空间复杂度是O(1)
题目提示了，空间复杂度可以降低到O(1)。这时候不能用哈希表，可以使用快慢指针的思路来处理。整体思路如下：
* 遍历得到两个链表的长度，以及长度差 diff
* 将慢指针 slow 指向较长链表，快指针 fast 指向较短链表
* slow 向前移动 diff 个距离
* slow 和 fast 同时向前移动，每次移动一个距离。若存在公共节点，那么它们一定会遇上。
:::

### 题解


#### 解法一

::: details 
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let map = new Map();
	while (headA) {
		map.set(headA, true);
		headA = headA.next;
	}
	while (headB) {
		if (map.has(headB)) {
			return headB;
		}
		headB = headB.next;
	}
	return null;
};
```
:::

#### 解法二

::: details 
```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let curA = headA,
		curB = headB;
	let lenA = 0,
		lenB = 0;
	while (curA) {
		lenA++;
		curA = curA.next;
	}
	if (!lenA) return null;
	while (curB) {
		lenB++;
		curB = curB.next;
	}
	if (!lenB) return null;

	let slow, fast, diff;
	if (lenA > lenB) {
		diff = lenA - lenB;
		slow = headA;
		fast = headB;
	} else {
		diff = lenB - lenA;
		slow = headB;
		fast = headA;
	}
	while (diff > 0) {
		slow = slow.next;
		diff--;
	}
	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};
```

:::

#### 做题记录
::: details 做题记录

:::


## 35-复杂链表的复制【中等】
::: tip 真题描述
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
};
```
:::
题目来源：
[剑指offer-35-复杂链表的复制](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 


:::

#### 解法二

::: details 


:::

#### 做题记录
::: details 做题记录

:::


## 【Stack】
## 9-用两个栈实现队列
::: tip 真题描述
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
```js
var CQueue = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {

};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
:::
题目来源：
[剑指offer-9-用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)

### 思路分析
::: details Possible solutions

[如风之枫](https://chrislin-jiang.github.io/code-girl/algorithms/data-structures/32-stack-exercise.html#_232-%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97)
解题思路：
* 栈后进先出，队列先进先出
* 双栈可以实现序列倒置：假设有 stack1=[1, 2, 3] 、 stack2=[] ，如果循环出栈 stack1 并将出栈元素进栈 stack2 ，则循环结束后， stack1=[] 、 stack2=[3, 2, 1] ，即通过 stack2 实现了 stack1 中元素的倒置
* 当需要删除队首元素时，仅仅需要 stack2 出栈即可；当 stack2 为空时，出队就需要将 stack1 元素倒置倒 stack2 ， stack2 再出队即可；如果 stack1 也为空，即队列中没有元素，返回 -1
:::

### 题解


#### 解法一

::: details 
```js
/* 用两个栈实现一个队列。
队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
分别完成在队列尾部插入整数和在队列头部删除整数的功能。
(若队列中没有元素，deleteHead 操作返回 -1 )
*/
var CQueue = function() {
	this.stack1 = [];
	this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
	this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
	if (this.stack1.length == 0 && this.stack2.length == 0) return -1;
	if (this.stack2.length) {
		return this.stack2.pop();
	}
	while (this.stack1.length) {
		this.stack2.push(this.stack1.pop());
	}
	return this.stack2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
:::

#### 解法二

::: details 


:::

#### 做题记录
::: details 做题记录

:::



## 30-包含min函数的栈
[如风之枫-leetcode-155](https://chrislin-jiang.github.io/code-girl/algorithms/data-structures/32-stack-exercise.html#_155-%E6%9C%80%E5%B0%8F%E6%A0%88)

#### 解法一
::: details
```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x);
    if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack1.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```
:::


#### 解法二
```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x);
    if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack1.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```
:::




## 【Queue】
## 59-I-滑动窗口的最大值
[如风之枫-leetcode-239](https://chrislin-jiang.github.io/code-girl/algorithms/data-structures/42-queue-exercise.html#_239-%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC)
::: tip 真题描述

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
[剑指offer-59-I-滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)


### 思路分析
::: details Possible solutions
1. 两层 for 循环-嵌套
O(m*n)
2. 最大堆
O(logk)
3. 双端队列
O(N)
* 维护一个递减的双端队列，用于获取窗口中的最大值，
* 双端队列存放的是数组的下标，便于判断 (双端队列的长度 <= k ) 是否满足；
4. 用 Map 来代替 双端队列，是否可行？
:::

### 题解
#### 解法三
::: details 
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	let res = [];
	let dequeue = [];
	for (let i = 0; i < nums.length; i++) {
		if ((i - dequeue[0]) >= k) {
			dequeue.shift();
		}
		while (nums[dequeue[[dequeue.length - 1]]] <= nums[i]) {
			dequeue.pop();
		}
		dequeue.push(i);
		if (i >= k - 1) {
			res.push(nums[dequeue[0]]);
		}
	}
	return res;
};
```
:::

## 59-II-队列的最大值【中等】
::: tip 真题描述
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数 max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1
```js
示例 1：

输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]

var MaxQueue = function() {

};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

```
:::
题目来源：
[leetcode-59-II-队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

### 思路分析
::: details Possible solutions
1. 暴力
2. 两个队列：一个普通队列，执行push_back、pop_front操作；维护一个递减的双端队列，获取最大值。
:::

### 题解


#### 解法一

::: details 

:::

#### 解法二

::: details 
```js
var MaxQueue = function() {
	this.queue1 = [];
	this.dequeue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
	if (this.queue1.length == 0) {
		return -1;
	}
	return this.dequeue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
	this.queue1.push(value);
	while (
		this.dequeue.length &&
		value > this.dequeue[this.dequeue.length - 1]
	) {
		this.dequeue.pop();
	}
	this.dequeue.push(value);

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
	if (this.queue1.length == 0) {
		return -1;
	}
	if (this.queue1[0] === this.dequeue[0]) {
		this.dequeue.shift();
	}
	return this.queue1.shift();

};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```
:::

#### 做题记录
::: details 做题记录

:::

## 【Sort】
## 45-把数组排成最小的数【中等】
::: tip 真题描述
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

```js
示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {

};
```
:::
题目来源：
[leetcode-45-把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

### 思路分析
::: details Possible solutions
1. 暴力
2. 快速排序思想
3. 内置函数

[LeetCode-题解](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/)
:::

### 题解


#### 解法一

::: details 


:::

#### 解法二

::: details 


:::

#### 解法三

::: details 
```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a, b) => {
        const s1 = a + "" + b;
        const s2 = b + "" + a;

        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
    });
    return nums.join("");
};
```
:::

#### 做题记录
::: details 做题记录

:::


## 【Tree】
## 27-二叉树的镜像
::: tip 真题描述
请完成一个函数，输入一个二叉树，该函数输出它的镜像。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {

};
```
:::
题目来源：
[leetcode-27-二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

### 思路分析
::: details Possible solutions

:::

### 题解


#### 解法一

::: details 
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
	if (root == null) return null;
	
	// 交换当前节点的左右节点
	let temp = root.left;
	root.left = root.right;
	root.right = temp;
	// 对左右子树做相同操作
	mirrorTree(root.left);
	mirrorTree(root.right);
	return root;
};
```

稍稍改造一下
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
	if (root == null) return null;
	// 交换当前节点的左右节点
    [root.left, root.right] = [root.right, root.left];
	// 对左右子树做相同操作
	mirrorTree(root.left);
	mirrorTree(root.right);
	return root;
};
```

:::

#### 解法二

::: details 


:::

## 28-对称的二叉树
::: tip 真题描述
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

};
```
:::
题目来源：
[剑指-28-对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

### 思路分析
::: details Possible solutions



:::

### 题解


#### 解法一

::: details 
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	if (root == null) return true;
	return compare(root.left, root.right);
};
var compare = function(left, right) {
	if (!left && !right) {
		return true;
	}
	if ((!left && right) || (left && !right) || (left.val !== right.val)) {
		return false;
	}
	return compare(left.left, right.right) && compare(left.right, right.left);
}
```
:::

#### 解法二

::: details 


:::
## 55-I-二叉树的深度
::: tip 真题描述
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
```js
例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

};
```
:::
题目来源：
[剑指offer-55-I-二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

### 思路分析
::: details Possible solutions
1. 递归
* 一棵二叉树，它的高度等于左右子树的高度最大值，加上 1。
:::

### 题解


#### 解法一

::: details 
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	// write code here
	if (root == null) {
		return 0;
	}
	let leftDepth = maxDepth(root.left);
	let rightDepth = maxDepth(root.right);
	return Math.max(leftDepth, rightDepth) + 1;
};
```

:::

#### 解法二

::: details 


:::


## 54-二叉搜索树的第k大节点
::: tip 真题描述
给定一棵二叉搜索树，请找出其中第k大的节点。
```js
示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4

```
:::
题目来源：
[剑指offer-54-二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解


#### 解法一

::: details 
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
	if (!root) return;
	let arr = [];
	inorder(root, arr);
	return arr[arr.length - k];
};
// 二叉搜索树中序遍历后，升序排列
var inorder = function(root, arr) {
	if (root != null) {
		inorder(root.left, arr);
		arr.push(root.val);
		inorder(root.right, arr);
	}
}
```

:::

#### 解法二

::: details 


:::

## 55-II-平衡二叉树
::: tip 真题描述
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
```js
示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

};
```
:::
题目来源：
[剑指offer-55-II-平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/)

### 思路分析
::: details Possible solutions
```js

```


:::

### 题解

#### 解法一

::: details 
```js

```

:::

#### 解法二

::: details 
```js

```

:::

## 68-I-二叉搜索树的最近公共祖先
::: tip 真题描述
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
};
```
:::
题目来源：
* [剑指offer-68-I-二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/)
* [235-二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

### 思路分析
::: details Possible solutions
1. 递归
2. 迭代
:::

### 题解

#### 解法一

::: details 
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	}
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	}
	return root;
};

```

由二叉搜索树的性质，如果 p.val 和 q.val 都比 root.val 小，那么 p、q 肯定在 root 的左子树。

那问题规模就变小了，递归左子树就行。

如果 p.val 和 q.val 都比 root.val 大，则递归右子树。

其他情况，root 即为所求，不管是一个大于 root.val 一个小于 root.val，还是一个等于一个小于，还是一个等于一个大于。

为什么？

因为，只要不是 p 和 q 的值都大于（小于）root.val，即，不同处在 root 的一个子树中，就只有这三种情况：
* p 和 q 分居 root 的左右子树。
* root 就是 p，q 在 p 的子树中。
* root 就是 q，p 在 q 的子树中
这三种情况，p 和 q 的公共祖先都是 root。

[leetcode-others](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solution/di-gui-he-die-dai-fa-by-hyj8/)
:::

#### 解法二

::: details 
```js
var lowestCommonAncestor = (root, p, q) => {
	while (root) {
		if (p.val < root.val && q.val < root.val) {
			root = root.left;
		} else if (p.val > root.val && q.val > root.val) {
			root = root.right;
		} else {
			break;
		}
	}
	return root;
};
```
开启while 循环， 当 root 为 null 时结束循环（ 可以把 root 看作一个指针）。

如果 p 和 q 的节点值都小于 root.val， 即它们都在 root 的左子树中， 则root = root.left， 遍历到 root 的左子节点。

如果 p 和 q 的节点值都大于 root.val， 即它们都在 root 的右子树中， 则root = root.right， 遍历到 root 的右子节点。

否则， 其他情况下， 当前的 root 就是最近公共祖先， 找到了， 此时 break。

最后返回 root。
:::

## 68-II-二叉树的最近公共祖先
::: tip 真题描述
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
};
```
:::
题目来源：
* [剑指offer-68-II-二叉树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)
* [236-二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

### 思路分析
::: details Possible solutions
1. 递归
:::

### 题解

#### 解法一

::: details 
```js
var lowestCommonAncestor = function(root, p, q) {
	if (root == null || root == p || root == q) return root
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)
	if (left === null) return right
	if (right === null) return left
	return root
};

```

* 如果树为空树或 p 、q 中任一节点为根节点，那么 p 、q 的最近公共节点为根节点；
* 如果不是，即二叉树不为空树，且 p 、q 为非根节点，则递归遍历左右子树，获取左右子树的最近公共祖先；
* 如果 p 、q 节点在左右子树的最近公共祖先都存在，说明 p 、q 节点分布在左右子树的根节点上，此时二叉树的最近公共祖先为 root；
* 若 p 、q 节点在左子树最近公共祖先为空，那 p 、q 节点位于左子树上，最终二叉树的最近公共祖先为右子树上 p 、q 节点的最近公共祖先；
* 若 p 、q 节点在右子树最近公共祖先为空，同左子树 p 、q 节点的最近公共祖先为空一样的判定逻辑；
* 如果 p 、q 节点在左右子树的最近公共祖先都为空，则返回 null

[LeetCode-others](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/javascript236er-cha-shu-de-zui-jin-gong-gong-zu-xi/)
:::

#### 解法二

::: details 
```js

```


:::

## 32-I-从上到下打印二叉树【中等】
::: tip 真题描述
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
```js
例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {

};
```
:::
题目来源：
[剑指offer-32-I-从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

### 思路分析
::: details Possible solutions
1. 借助队列进行层序遍历
:::

### 题解

#### 解法一

::: details 
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
	if (root === null) return []
	let queue = []
	queue.push(root)
	let result = []
	while (queue.length > 0) {
		let node = queue.shift()
		if (node.left !== null) queue.push(node.left)
		if (node.right !== null) queue.push(node.right)
		result.push(node.val)
	}
	return result
};

```

层序遍历需要使用一个队列来存储有用的节点。整体的思路如下：
* 将 root 放入队列
* 取出队首元素，将 val 放入返回的数组中
* 检查队首元素的子节点，若不为空，则将子节点放入队列
* 检查队列是否为空，为空，结束并返回数组；不为空，回到第二步
* 时间复杂度和空间复杂度是 O(N)。

[LeetCode-xin-tan](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/solution/jie-zhu-dui-lie-jin-xing-ceng-xu-bian-li-javascrip/)
:::

#### 解法二

::: details 
```js

```

:::

## 32-II-从上到下打印二叉树 II
::: tip 真题描述
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

};
```
:::
题目来源：
[剑指offer-32-II-从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

### 思路分析
::: details Possible solutions
1. 借助queue
:::

### 题解

#### 解法一

::: details 
```js
var levelOrder = function(root) {
	if (root === null) return []
	let queue = []
	queue.push(root)
	let result = []
	let level = 0 // 代表当前层数
	while (queue.length > 0) {
		result[level] = [] // 第level层的遍历结果
		let levelNum = queue.length; // 第level层的节点数量
		while (levelNum--) {
			let node = queue.shift()
			if (node.left !== null) queue.push(node.left)
			if (node.right !== null) queue.push(node.right)
			result[level].push(node.val)
		}
		level++
	}
	return result
};

```

:::

#### 解法二

::: details 
```js

```

:::

## 32-III-从上到下打印二叉树 III【中等】
::: tip 真题描述
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

};
```
:::
题目来源：
[剑指offer-32-III-从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

### 思路分析
::: details Possible solutions
1. 层序遍历+按照层数reverse

:::

### 题解

#### 解法一

::: details 
```js
var levelOrder = function(root) {
	if (root === null) return []
	let queue = []
	queue.push(root)
	let result = []
	let level = 0 // 代表当前层数
	while (queue.length > 0) {
		result[level] = [] // 第level层的遍历结果
		let levelNum = queue.length; // 第level层的节点数量
		while (levelNum--) {
			let node = queue.shift()
			if (node.left !== null) queue.push(node.left)
			if (node.right !== null) queue.push(node.right)
			result[level].push(node.val)
		}
		// 行号是偶数时，翻转当前层的遍历结果
		if (level % 2) {
			result[level].reverse()
		}
		
		level++
	}
	return result
};
```
这题几乎和上题一样，唯一不同的是行数为奇数的从左到右打印，行数为偶数的从右到左打印。
:::

#### 解法二

::: details 
```js

```

:::

## 7-重建二叉树【中等】
::: tip 真题描述
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
```js
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
   
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

};
```
:::
题目来源：
[剑指offer-7-重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

### 思路分析
[LeetCode-xin-tan](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/qian-xu-zhong-xu-zhong-jian-er-cha-shu-fen-zhi-si-/)

### 题解

#### 解法一
```js
var buildTree = function(preorder, inorder) {
	if (!preorder.length || !inorder.length) {
		return null;
	}

	const rootVal = preorder[0];
	const node = new TreeNode(rootVal);

	let i = 0; // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
	for (; i < inorder.length; i++) {
		if (inorder[i] === rootVal) {
			break;
		}
	}

	node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
	node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
	return node;
};
```


#### 解法二
```js

```

## 26-树的子结构
::: tip 真题描述
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。
```js
例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {

};
```
:::
题目来源：
[剑指offer-26-树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

### 思路分析
[LeetCode-other](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/)
### 题解

#### 解法一
```js
var isSubStructure = function(A, B) {
	return (A != null && B != null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};

function recur(A, B) {
	if (B == null) return true;
	if (A == null || A.val != B.val) return false;
	return recur(A.left, B.left) && recur(A.right, B.right);
}
```
若树 B 是树 A 的子结构，则子结构的根节点可能为树 AA 的任意一个节点。因此，判断树 BB 是否是树 AA 的子结构，需完成以下两步工作：
* 先序遍历树 A 中的每个节点 n_A；（对应函数 isSubStructure(A, B)）
* 判断树 A 中 以 n_A 为根节点的子树 是否包含树 B 。（对应函数 recur(A, B)）

[LeetCode-jyd-图解很清晰](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/)

#### 解法二
```js
var isSubStructure = function(A, B) {
	// 1.定义一个标志位flag用来做判断
    let flag = false;

    if (A != null && B != null) {
        // 2.1 如果从根结点就找到，并且递归成功，返回true
        flag = DoesTree1HasTree(A, B);
        // 2.2 如果根结点开始的没有找到，从根结点的左子结点开始搜索
        if (!flag) {
            flag = isSubStructure(A.left, B);
        }
        // 2.3 如果以上都没有找到，就从根结点的右子节点开始搜索
        if (!flag) {
            flag = isSubStructure(A.right, B);
        }
    }

    // 3.最后返回flag即得到结果
    return flag;
};

//函数DoesTree1HasTree()实现判定A树是否包含B树结构的功能
function DoesTree1HasTree(A, B) {
    // 1.首先判断B是否为空，一旦B为空，说明B已经递归到叶子结点
    if (B == null) {
        return true;
    }
    // 2.如果A == null，则返回false
    if (A == null) {
        return false;
    }

    // 3.如果A.val != B.val，返回false
    if (A.val != B.val) {
        return false;
    }

    // 4.如果以上情况都不是，说明A.val == B.val，我们继续向下递归判断
    return DoesTree1HasTree(A.left, B.left) && DoesTree1HasTree(A.right, B.right);

}
```

## 34-二叉树中和为某一值的路径【中等】
::: tip 真题描述
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

```js
示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

};
```
:::
题目来源：
* [剑指offer-34-二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
* [leetcode-113-路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/)
### 思路分析

### 题解

#### 解法一
1. 深度优先遍历 + 回溯


#### 解法二
```js

```








## 【Recursion】
## 10-I-斐波那契数列
::: tip 真题描述
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
```js
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

};
```
:::
题目来源：
[剑指offer-10-I-斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

### 思路分析
::: details Possible solutions
1. 递归
2. 备忘录递归(自顶向下)
3. 动态规划
:::

### 题解

#### 解法一

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return (fib(n - 1) + fib(n - 2)) % 1000000007;
};

```
运行速度很慢，超出时间限制


#### 解法二

```js
/**
 * @param {number} N
 * @return {number}
 */
// 解法二：备忘录递归(自顶向下)
var fib = function(n) {
	if (n <= 1) return n
	// 缓存计算结果
	let memo = [0, 1] 
	const memoize = (n) => {
		// 如果已经计算过值并放入缓存数组中则直接返回，不必再次计算
		if (memo[n] || n <= 1) return memo[n] 
		// 计算结果加入缓存数组
		return memo[n] = (memoize(n - 1) + memoize(n - 2)) % 1000000007
	}
	return memoize(n)
};
```

#### 解法三

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	if (n === 0) {
		return 0
	}
	const dp = new Array(n)
	dp[1] = 1
	dp[2] = 1
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
	}
	return dp[n]
}
```



## 【Dynamic Programming】
## 42-连续子数组的最大和
::: tip 真题描述
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。
```js
示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

};
```
:::
题目来源：
[剑指offer-42-连续子数组的最大和](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)

### 思路分析
1. 动态规划
2. 动态规划 + 空间优化

### 题解

#### 解法一
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let dp = []
	dp[0] = nums[0]
	for (let i = 1; i < nums.length; i++) {
		if (dp[i - 1] > 0) {
			dp[i] = dp[i - 1] + nums[i]
		} else {
			dp[i] = nums[i]
		}
	}
	return Math.max(...dp)
};
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let len = nums.length
	let dp = new Array(len)
	dp[0] = nums[0]
	for (let i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
	}
	return Math.max(...dp)
};
```


#### 解法二
```js
var maxSubArray = function(nums) {
	let pre = 0,
		res = nums[0];
	nums.forEach((x) => {
		pre = Math.max(pre + x, x);
		res = Math.max(res, pre);
	});
	return res;
};
// 小变换
var maxSubArray = function(nums) {
	let res = nums[0];
	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
		res = Math.max(res, nums[i]);
	}
	return res;
};
```


## 14-I-剪绳子【中等】
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
::: tip 真题描述
```js
示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {

};
```
:::
题目来源：
[剑指offer-14-I-剪绳子](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

### 思路分析
1. 数学公式法
2. 动态规划
3. 贪心算法

[LeetCode-343-xintan](https://leetcode-cn.com/problems/integer-break/solution/shuang-jie-fa-dong-tai-gui-hua-tan-xin-fa-fu-zhao-/)

### 题解

#### 解法一
```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
	if (n <= 3) return n - 1;
	let a = Math.floor(n / 3),
		b = n % 3;
	if (b == 0) {
		return Math.pow(3, a);
	} else if (b == 1) {
		return Math.pow(3, a - 1) * 4;
	} else {
		return Math.pow(3, a) * 2;
	}
};
```
数学公式推理过程参考：[剑指offer-others](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/mian-shi-ti-14-i-jian-sheng-zi-tan-xin-si-xiang-by/)

#### 解法二
动态规划
```js
var cuttingRope = function(n) {
	const dp = new Array(n + 1).fill(1);

	for (let i = 3; i <= n; ++i) {
		for (let j = 1; j < i; ++j) {
			dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
		}
	}

	return dp[n];
};
```


## 14-II-剪绳子【中等】
::: tip 真题描述
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

```js
示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

来源：力扣（LeetCode）
链接：
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {

};
```
:::
题目来源：
[剑指offer-14-II-剪绳子](https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof)

### 思路分析


### 题解

#### 解法一
```js

```

#### 解法二
动态规划
```js

```

## 47-礼物的最大价值【中等】
::: tip 真题描述
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

```js
示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {

};
```
:::
题目来源：
[剑指offer-47-礼物的最大价值](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof)

### 思路分析
1. 动态规划
2. 动态规划（内存优化）
3. 
### 题解

#### 解法一
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
	let m = grid.length,
		n = grid[0].length
	let dp = Array.from(new Array(m), () => new Array(n));
	// 初始化
	dp[0][0] = grid[0][0]
	// 行
	for (let j = 1; j < n; j++) {
		dp[0][j] = dp[0][j - 1] + grid[0][j]
	}
	// 列
	for (let i = 1; i < m; i++) {
		dp[i][0] = dp[i - 1][0] + grid[i][0]
	}
	// 动态转移关系
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
		}
	}
	return dp[m - 1][n - 1]
};

```


#### 解法二
```js

```


## 63-股票的最大利润【中等】
::: tip 真题描述
假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
```js
示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};
```
:::
题目来源：
[剑指offer-63-股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/)

### 思路分析

### 题解

#### 解法一
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let cost = Number.MAX_VALUE,
		len = prices.length,
		dp = new Array(len),
		dp[0] = 0
	for (let i = 1; i < len; i++) {
		cost = Math.min(cost, prices[i]);
		dp[i] = Math.max(dp[i - 1], prices[i] - cost);
	}
	return dp[len - 1];
};
// 有错误
```


#### 解法二
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let cost = Number.MAX_VALUE,
		profit = 0;
	for (let price of prices) {
		cost = Math.min(cost, price);
		profit = Math.max(profit, price - cost);
	}
	return profit;
};
```












## 学习
### 动态规划
* [告别动态规划，连刷 40 道题，我总结了这些套路，看不懂你打我（万字长文）](https://zhuanlan.zhihu.com/p/91582909)
* [「算法与数据结构」一张脑图带你看动态规划算法之美](https://juejin.im/post/6872115031501340679)
* [[力扣] DP问题分类汇总](https://zhuanlan.zhihu.com/p/126546914)

### 技巧
#### JS 生成二维数组 m 行 n 列
```js
let dp = Array.from({
	length: m
}, () => new Array(n).fill(Number.MAX_VALUE))
let dp = Array.from(new Array(m), () => new Array(n));
let dp = Array.from(new Array(m).fill(0), () => new Array(n).fill(0));
```

### Q&A
[为什么要模1000000007？](https://www.cnblogs.com/jason0529/p/13915062.html)

## 总结
排序数组中的搜索问题，首先想到 二分法 解决。
