---
autoGroup-1: 数组
title: 数组的应用
---

# 数组的应用
## 做题前必看

**切题四件套-覃超**
1. **clarification** 询问题目细节，边界条件，可能的极端错误情况
2. **possible solutions** 所有可能的解法都和面试官沟通一遍
* 时间/空间复杂度
* 寻找最优解
3. **coding** 多写代码
4. **test cases** 测试用例

> 做题时按照以上步骤，逐渐形成肌肉记忆，条件反射...加油

## 1-两数求和问题

::: tip 真题描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```js
示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
	
}
```
:::

题目来源：
[leetcode-1-两数之和](https://leetcode-cn.com/problems/two-sum/)
[掘金小册](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46ce51882521ee5fc965)
[瓶子君-4](https://leetcode-cn.com/problems/two-sum/solution/qian-duan-jin-jie-suan-fa-liang-shu-zhi-he-by-user/)



### 思路分析
::: details Possible solutions
```js
1. 暴力求解：两层循环
时间复杂度：O(N^2)
2. Map/Set
for循环 i:0->length O(N)
Map: 9-nums[i] 是否在数组中存在 O(1)
总的时间复杂度：O(N)
```

【分析】
* 当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。
* 这道题**空间换时间，Map 来帮忙**--增加一个 Map 来记录已经遍历过的数字及其对应的索引值。
* **几乎所有的求和问题，都可以转化为求差问题。**

:::

### 题解

这里只给出时间复杂度为O(N)的题解

#### 解法一

::: details 小册所示方法

```js
// 小册所示方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
	// 这里我用对象来模拟 map 的能力
	const diffs = {}
	// 缓存数组长度
	const len = nums.length
	// 遍历数组
	for (let i = 0; i < len; i++) {
		// 判断当前值对应的 target 差值是否存在（是否已遍历过）
		if (diffs[target - nums[i]] !== undefined) {
			// 若有对应差值，那么答案get！
			return [diffs[target - nums[i]], i]
		}
		// 若没有对应差值，则记录当前值
		diffs[nums[i]] = i
	}
}
```
:::

#### 解法二
::: details 用 ES6 中的 Map 来实现
```js
const twoSum = function(nums, target) {
	const map = new Map();
	const len = nums.length;
	for (i = 0; i < len; i++) {
		let temp = target - nums[i];
		if (map.has(temp)) {
			return [map.get(temp), i]
		}
		map.set(nums[i], i);
	}
}

```

**对应官方题解**

方法三：一遍哈希表

事实证明，我们可以一次完成。在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。如果它存在，那我们已经找到了对应解，并立即将其返回。

复杂度分析：
* 时间复杂度：O(n)
我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1) 的时间。
* 空间复杂度：O(n)
所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n 个元素。

作者：LeetCode
链接：https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

:::

#### 做题记录
::: details 做题记录
* 修言小册-数组部分
* 覃超-哈希表部分
* 2020.05.01-自测
:::

## 88-合并两个有序数组
::: tip 真题描述

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 

你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
```js
示例: 
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6]
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

};
```
:::
题目来源：
[leetcode-88](https://leetcode-cn.com/problems/merge-sorted-array/)
[瓶子君-3](https://leetcode-cn.com/problems/merge-sorted-array/)
[修言-数组](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46ce51882521ee5fc965#h5o-10)

### 思路分析
:::details Possible solutions
1. 合并后排序

最朴素的解法就是将两个数组合并之后再排序。

复杂度分析
* 时间复杂度 : O((n+m)log(n+m))。
* 空间复杂度 : O(1)。

2. 双指针 / 从前往后

一般而言，对于有序数组可以通过 双指针法 达到O(n + m)的时间复杂度。

最直接的算法实现是将指针p1 置为 nums1的开头， p2为 nums2的开头，在每一步将最小值放入输出数组中。

由于 nums1 是用于输出的数组，需要将nums1中的前m个元素放在其他地方，也就需要 O(m) 的空间复杂度。

复杂度分析
* 时间复杂度 : O(n + m)。
* 空间复杂度 : O(m)。

3. 双指针 / 从后往前

方法二已经取得了最优的时间复杂度O(n + m)，但需要使用额外空间。这是由于在从头改变nums1的值时，需要把nums1中的元素存放在其他位置。

如果我们从结尾开始改写 nums1 的值又会如何呢？这里没有信息，因此不需要额外空间。

这里的指针 p 用于追踪添加元素的位置。

**由于 nums1 的有效部分和 nums2 并不一定是一样长的。我们还需要考虑其中一个提前到头的这种情况：**
* 如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。
* 如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作。

复杂度分析
* 时间复杂度 : O(n + m)。
* 空间复杂度 : O(1)。


:::

### 题解

#### 双指针 / 从后往前
::: details
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    // 初始化两个指针的指向，初始化 nums1 尾部索引k
    let i = m - 1, j = n - 1, k = m + n - 1
    // 当两个数组都没遍历完时，指针同步移动
    while(i >= 0 && j >= 0) {
        // 取较大的值，从末尾往前填补
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i] 
            i-- 
            k--
        } else {
            nums1[k] = nums2[j] 
            j-- 
            k--
        }
    }
    
    // nums2 留下的情况，特殊处理一下 
    while(j>=0) {
        nums1[k] = nums2[j]  
        k-- 
        j--
    }
};
```
稍稍改造一下：
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let i = m - 1, j = n - 1, k = m + n - 1
	while (i >= 0 && j >= 0) {
		if (nums1[i] <= nums2[j]) {
			nums1[k--] = nums2[j--]
		} else {
			nums1[k--] = nums1[i--]
		}
	}
	while (j >= 0) {
		nums1[k--] = nums2[j--]
	}
};
```
:::

#### 双指针 / 从前往后
::: details
```js
var merge = function(nums1, m, nums2, n) {
	let nums1Copy = nums1.slice()
	// 指针 p1 置为 nums1Copy 的开头，p2 为 nums2 的开头，p 为 nums 的开头
	let p1 = 0,
		p2 = 0,
		p = 0
	nums1 = []
	while (p1 < m && p2 < n) {
		if (nums1Copy[p1] <= nums2[p2]) {
			nums1[p] = nums1Copy[p1]
			p1++
			p++
		} else {
			nums1[p] = nums2[p2]
			p2++
			p++
		}
	}
	// nums1Copy 有剩余
	while (p1 < m) {
		nums1[p] = nums1Copy[p1]
		p1++
		p++
	}
	// nums2 有剩余
	while (p2 < n) {
		nums1[p] = nums2[p2]
		p2++
		p++
	
	}
};
// 测试
let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;
merge(nums1, m, nums2, n)
console.log(nums1) // [1,2,3,0,0,0]
```
不知道哪里有问题？？？
待解决
:::



#### 做题记录
::: details 做题记录
* 修言
* 2020.05.01-自测+补充【双指针 / 从前往后】解法

[leetcode-others](https://leetcode-cn.com/problems/merge-sorted-array/solution/88-he-bing-liang-ge-you-xu-shu-zu-by-alexer-660/)

**疑问1**
```js
// 发现这样写函数有问题,并不能满足题目的要求,nums1全局下并未得到改变.
const mergeArray = function(nums1, m, nums2, n) {
	nums1.splice(m); // 一旦调用函数, 执行到这里, 会修改所传人的 nums1
	nums2.splice(n);
	// 这里是重新申请了一个内存空间来存放 nums1, 并未改变全局的 nums1 ?
	nums1 = [...nums1, ...nums2].sort((a, b) => a - b);
	console.log(nums1);  // [1, 2, 2, 3, 5, 6]
}
let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3;
let nums2 = [2, 5, 6],
	n = 3;
mergeArray(nums1, m, nums2, n);
console.log(nums1);  // [1, 2, 3]
```
**疑问2**

我所给出的【双指针 / 从前往后】解法，测试不通过

**思考**
* 这两种方法与归并排序的关系


:::


## 15-三数求和问题

**双指针法**能处理的问题多到你想不到。不信来瞅瞅两数求和它儿子——三数求和问题！

俗话说，青出于蓝而胜于蓝，三数求和虽然和两数求和只差了一个字，但是思路却完全不同。

::: tip 真题描述-三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

```js
示例： 
给定数组 nums = [-1, 0, 1, 2, -1, -4]， 
满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

};
```
:::

题目来源：
[leetcode-15](https://leetcode-cn.com/problems/3sum/)
[修言-数组](https://juejin.im/book/5cb42609f265da035f6fcb65/section/5cea46ce51882521ee5fc965#h5o-10)

### 思路分析
::: details Posible solutions

思路
1. 暴力：三层循环  O(N^3)
2. 两层暴力+hash(Map/Set)  O(N^2)  
3. 先排序，再夹逼  时间复杂度取决于排序算法  --经典解法

审题
* 返回不重复的三元组
* 会有复数，无序？
* 可能不存在（实际要求返回空数组）
* a+b=-c
* 数组内有重复数字，结果有可能有重复

反馈：
* 通过一些边界条件，加速代码

问题：
* 如何在hash很好的避免结果集重复？

可参考
* [leetcode-others-js](https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/)
* [leetcode-others-java-思路清晰](https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-javajian-ji-ti-jie-by-wang-zi-hao-z/)

相关题目[leetcode-python](https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-tu-jie-by-ml-zimingmeng/)
1.两数之和
18.四数之和
454. 四数相加 II
:::

### 题解
#### 两层暴力+hash(Map/Set)
::: details 很无奈
```js 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	const len = nums.length
	let result = new Set()
	for (let i = 0; i < len - 2; i++) {
		let target = -nums[i]
		let diff = new Set()
		for (let j = i + 1; j < len; j++) {
			const exist = target - nums[j]
			if (diff.has(exist)) {
				/* result.add([nums[i], nums[j], exist])
				[[-1, 1, 0],[-1, -1, 2],[0, -1, 1]] */
				let list = [nums[i], nums[j], exist]
				list.sort((a, b) => a - b)
				result.add(list)
				/* 
				本以为排序能解决问题，但输出 [[-1, 0, 1],[-1, -1, 2],[-1, 0, 1]]
				然后 幡然醒悟 数组也是对象，保存的是内存地址
				两个 [-1, 0, 1] 内存地址不同，所以。。。
				真的坑呀，我暂时没有办法了
				 */
			} else {
				diff.add(nums[j])
			}
		}
	}
	return result
};

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
```
:::

#### **先排序，再夹逼**
::: details
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
	// 用于存放结果数组
	let res = []
	// 目标值为0
	let sum = 0
	// 给 nums 排序
	nums.sort((a, b) =>  a - b)
	// 缓存数组长度
	const len = nums.length
	// 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
	for (let i = 0; i < len - 2; i++) {
		// 左指针 j
		let j = i + 1
		// 右指针k
		let k = len - 1
		// 如果遇到重复的数字，则跳过
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		while (j < k) {
			// 三数之和小于0，左指针前进
			if (nums[i] + nums[j] + nums[k] < 0) {
				j++
				// 处理左指针元素重复的情况
				while (j < k && nums[j] === nums[j - 1]) {
					j++
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				// 三数之和大于0，右指针后退
				k--

				// 处理右指针元素重复的情况
				while (j < k && nums[k] === nums[k + 1]) {
					k--
				}
			} else {
				// 得到目标数字组合，推入结果数组
				res.push([nums[i], nums[j], nums[k]])

				// 左右指针一起前进
				j++
				k--

				// 若左指针元素重复，跳过
				while (j < k && nums[j] === nums[j - 1]) {
					j++
				}

				// 若右指针元素重复，跳过
				while (j < k && nums[k] === nums[k + 1]) {
					k--
				}
			}
		}
	}

	// 返回结果数组
	return res
};

```
:::

#### 做题记录
::: details 做题记录
* 修言
* 覃超
* 2020.05.01 
> 1.两层暴力+hash(Map/Set)-并未得到期待的结构，很无奈，怎么解决呢？

> 2.一些边界问题没有考虑到，比如
> ```if (i > 0 && nums[i] === nums[i - 1])```  
> ```while (j < k && nums[j] === nums[j - 1])```

**记录**
* **双指针法**用在涉及求和、比大小类的数组题目里时，大前提往往是：**该数组必须有序**。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义。
* tips：这个数组在题目中要求了“不重复的三元组”，因此我们还需要做一个重复元素的跳过处理。这一点在编码实现环节大家会注意到。

**注意**
- 排好序
:::



### 双指针法中的“对撞指针”法
在上面这道题中，左右指针一起从两边往中间位置相互迫近，这样的特殊双指针形态，被称为“对撞指针”。

什么时候你需要联想到对撞指针？
这里我给大家两个关键字——“有序”和“数组”。
没错，见到这两个关键字，立刻把双指针法调度进你的大脑内存。普通双指针走不通，立刻想对撞指针！

即便数组题目中并没有直接给出“有序”这个关键条件，我们在发觉普通思路走不下去的时候，也应该及时地尝试手动对其进行排序试试看有没有新的切入点——没有条件，创造条件也要上。

对撞指针可以帮助我们缩小问题的范围，这一点在“三数求和”问题中体现得淋漓尽致：因为数组有序，所以我们可以用两个指针“画地为牢”圈出一个范围，这个范围以外的值不是太大就是太小、直接被排除在我们的判断逻辑之外，这样我们就可以把时间花在真正有意义的计算和对比上。如此一来，不仅节省了计算的时间，更降低了问题本身的复杂度，我们做题的速度也会大大加快。

## 18-四数之和
[leetcode-18](https://leetcode-cn.com/problems/4sum/)
::: tip leetcode-18-四数之和

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

```js
示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

};
```
:::

### 思路分析
::: details Possible solutions
1. 暴力循环-四重循环，注意去重
2. 利用hash表改造暴力循环的最后一重循环，空间换时间
3. 排序 + 双指针 => 注意去重判断

[leetcode-others-js-可参考题解](https://leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-jin-ji-de-xiao-chao-ren/)

:::
### 题解
::: details 两循环+两指针
```js {29}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	let result = []
	const len = nums.length
	// 新增
	if (len < 4) {
		return result
	}
	nums.sort((a, b) => a - b)
	for (let a = 0; a < len - 3; a++) {
		// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
		if (a > 0 && nums[a] === nums[a - 1]) continue;
		if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
		if (nums[a] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
		for (let b = a + 1; b < len; b++) {
			// 左指针
			let c = b + 1
			// 右指针
			let d = len - 1
			// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
			// 注意这里的判断条件
			// 因为当前b = a + 1
			// 这里判断的是后一个数字是否和现在的数字相等
			// 所以后一个数字的b至少为 b+1 = a+2
			// 所以此处的判断条件为b - 1 > a
			if (b > a + 1 && nums[b] === nums[b - 1]) continue;
			while (c < d) {
				if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
					c++
					while (c < d && nums[c] === nums[c - 1]) {
						c++
					}
				} else if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
					d--
					while (c < d && nums[d] === nums[d + 1]) {
						d--
					}
				} else {
					result.push([nums[a], nums[b], nums[c], nums[d]])
					c++
					d--
					while (c < d && nums[c] === nums[c - 1]) {
						c++
					}
					while (c < d && nums[d] === nums[d + 1]) {
						d--
					}
				}

			}

		}
	}
	return result
};
// 测试
let nums = [-2, 0, 0, 0, 0, 2]
console.log(fourSum(nums, 0))

/* 
注意这个判断条件
if (b > a + 1 && nums[b] === nums[b - 1]) continue;
输出[[-2, 0, 0, 2],[0, 0, 0, 0]]
if (b > 0 && nums[b] === nums[b - 1]) continue;
只输出[-2, 0, 0, 2]
 */
```
:::


::: details 参考别人的代码 
[leetcode-others-js-可参考题解](https://leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-jin-ji-de-xiao-chao-ren/)
```js
/* [leetcode-others-js-可参考题解](https://leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-jin-ji-de-xiao-chao-ren/)
作者： bin - bi - de - xiao - chao - ren
链接： https: //leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-bin-bi-de-xiao-chao-ren/ 
	来源： 力扣（ LeetCode）
著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。 */

// 替换字母
var fourSum = function(nums, target) {
	let result = []
	const len = nums.length
	// 新增
	if (len < 4) {
		return result
	}
	nums.sort((a, b) => a - b)
	for (let a = 0; a < len - 3; a++) {
		// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
		if (a > 0 && nums[a] === nums[a - 1]) continue;
		if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
		if (nums[a] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
		for (let b = a + 1; b < len - 2; b++) {
			let c = b + 1;
			let d = len - 1;
			// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
			// 注意这里的判断条件
			// 因为当前b = a + 1
			// 这里判断的是后一个数字是否和现在的数字相等
			// 所以后一个数字的b至少为 b+1 = a+2
			// 所以此处的判断条件为b - 1 > a
			if (b - 1 > a && nums[b] === nums[b - 1]) continue;
			while (c < d) {
				if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
					result.push([nums[i], nums[b], nums[c], nums[d]]);
					while (c < d && nums[c] === nums[c + 1]) {
						c++;
					}
					while (c < d && nums[d] === nums[d - 1]) {
						d--;
					}
					// 执行到这里，左右指针都指向了最后一个与c值相同的位置，
					// 此时我们还需要将左右指针再次向前进位，跳过最后一个重复值
					// [1,1,1,1,2,3,4,5,6]
					// 此时c指针在最后一个1处，还是与最开头的1重复，所以再次
					// 加1,指针指向不重复的值
					c++;
					d--;
				} else {
					nums[a] + nums[b] + nums[c] + nums[d] > target ?
						d--
						:
						c++
				}
			}
		}
	}
	return result;
}

```
:::

#### 做题记录
::: details 
2020.05.02
:::




## [914]卡牌分组
::: tip 真题描述
```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {

};
```
:::

题目来源：
[leetcode-914-卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

### 思路分析
::: details Possible solutions
1. 暴力？先统计每个数出现的次数，用对象 temp 保存，记其中最小的值为 min，然后从 2 到 min 枚举，看能否有数字可以将 temp 中的所有元素整除。
2. {}/Map + 最大公约数
:::

### 题解
[leetcode](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/solution/javascriptzhan-zhuan-xiang-chu-fa-tong-su-yi-dong-/)

#### 解法一
::: details
```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let temp = {},
        len = deck.length
    for (let i = 0; i < len; i++) {
        if (temp[deck[i]] == undefined) {
            temp[deck[i]] = 1
        } else {
            temp[deck[i]] += 1
        }
    }
    let tempVal = Object.values(temp)
    for (let i = 2; i <= len; i++) {
        let flag = true
        for (let j = 0; j < tempVal.length; j++) {
            if (tempVal[j] % i !== 0) {
                flag = false
                continue
            }
        }
        if (flag) {
            return true
        }

    }
    return false
};
```
:::

#### 解法二
::: details
{} + 最大公约数
```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // 最大公约数计算公式   最大公约数-greatest common divisor-gcd
    function gcd(a, b) {
    	// 利用辗转相除法来计算最大公约数
		let c = a % b
		if(c === 0) return b
		return gcd(b, c)
    }
   let map = {}
   if (deck.length) {
       deck.forEach(item => {
           map[item] = map[item] ? map[item]+1 : 1
       })
   }
   let mapAry = []
   for (let item in map) {
       mapAry.push(map[item])
   }
   /*
   最大公约数
   因为该数组是出现次数数组，最小值至少为1（至少出现1次），所以默认赋值为数组首位对公约数计算无干扰
   */
   let g = mapAry[0];
   // 遍历出现次数，计算最大公约数
   mapAry.forEach(time => {
   	// 因为需要比较所有牌出现次数的最大公约数，故需要一个中间值
   	g = gcd(g, time);
   });
   
   return g >= 2
};
```
Map + 最大公约数
```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
	// 最大公约数计算公式  最大公约数-greatest common divisor-gcd
	function gcd(a, b) {
		// 利用辗转相除法来计算最大公约数
		return b === 0 ? a : gcd(b, a % b);
	}

	// 相同牌出现次数Map
	let map = new Map();

	// 遍历牌
	deck.forEach(num => {
		// 统计每张牌出现的次数
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	});
	/* for (let i = 0; i < deck.length; i++) {
		if (map.has(deck[i])) {
			map.set(deck[i], map.get(deck[i]) + 1);
		} else {
			map.set(deck[i], 1);
		}
	} */

	// Map.prototype.values()返回的是一个新的Iterator对象，所以可以使用扩展运算符(...)来构造成数组
	let mapAry = [...map.values()];

	/*
	最大公约数
	因为该数组是出现次数数组，最小值至少为1（至少出现1次），所以默认赋值为数组首位对公约数计算无干扰
	*/
	let g = mapAry[0];

	// 遍历出现次数，计算最大公约数
	mapAry.forEach(time => {
		// 因为需要比较所有牌出现次数的最大公约数，故需要一个中间值
		g = gcd(g, time);
	});

	// 判断是否满足题意
	return g >= 2;
};
```
:::
[求最大公约数的4种方法](https://www.cnblogs.com/schips/p/10658253.html)
```js
// 最大公约数计算公式   最大公约数-greatest common divisor-gcd
function gcd(a, b) {
	// 利用辗转相除法来计算最大公约数
	let c = a % b
	if (c === 0) return b
	return gcd(b, c)
}
function gcd2(a, b) {
	// 利用辗转相除法来计算最大公约数
	return b === 0 ? a : gcd(b, a % b);
}
```
## [605]种花问题
::: tip 真题描述
```js
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False
注意:

数组内已种好的花不会违反种植规则。
输入的数组长度范围为 [1, 20000]。
n 是非负整数，且不会超过输入数组的大小。

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

};
```
:::

题目来源：
[leetcode-605-种花问题](https://leetcode-cn.com/problems/can-place-flowers/)

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
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
	let max = 0;
	// 左右边界都补充 0，不用考虑边界问题
	flowerbed.push(0);
	flowerbed.unshift(0);
	for (let i = 1, len = flowerbed.length - 1; i < len; i++) {
		if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
			max++;
			i++;
		}
	}
	return max >= n;
};
```

```js
var canPlaceFlowers = function(flowerbed, n) {
    let max = 0;
	// 右边界补充 0，最后一块地能不能种只取决于前面的是不是 1，所以默认最后一块地的右侧是 0（无须考虑右侧边界有阻碍）
    flowerbed.push(0);
    for (let i = 0, len = flowerbed.length - 1; i < len; i = i + 1) {
        if (flowerbed[i] === 0) {
            if (i === 0 && flowerbed[1] === 0) {
                max++;
                i++;
            }else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                max++;
                i++;
      }
    }
  }
  return max >= n;
};
```
:::

## [17]电话号码的字母组合【中等】
::: tip 真题描述

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

```js
示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

};
```
:::

题目来源：
[leetcode-17-电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

### 思路分析
::: details Possible solutions
```js

```

:::

### 题解


#### 解法一
::: details

:::


## [89]格雷编码【中等】
::: tip 真题描述
```js
格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

格雷编码序列必须以 0 开头。

示例 1:

输入: 2
输出: [0,1,3,2]
解释:
00 - 0
01 - 1
11 - 3
10 - 2

对于给定的 n，其格雷编码序列并不唯一。
例如，[0,2,3,1] 也是一个有效的格雷编码序列。

00 - 0
10 - 2
11 - 3
01 - 1
示例 2:

输入: 0
输出: [0]
解释: 我们定义格雷编码序列必须以 0 开头。
     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
     因此，当 n = 0 时，其格雷编码序列为 [0]。
```
:::

题目来源：
[leetcode-89-格雷编码](https://leetcode-cn.com/problems/gray-code/)

### 思路分析
::: details Possible solutions
```js
解法一：找规律
n = 0, [0]
n = 1, [0,1] //新的元素1，为0+2^0
n = 2, [0,1,3,2] // 新的元素[3,2]为[0,1]->[1,0]后分别加上2^1
n = 3, [0,1,3,2,6,7,5,4] // 新的元素[6,7,5,4]为[0,1,3,2]->[2,3,1,0]后分别加上2^2->[6,7,5,4]

最终肯定会输出整个数组， 0 - 2^n-1
```
[leetcode-others](https://leetcode-cn.com/problems/gray-code/solution/89ge-lei-bian-ma-by-qiuww/)
:::

### 题解


#### 解法一
::: details
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let res = [0],
        right;
    let i = 1;
    while (i <= n) {
        right = res
            .slice(0)
            .reverse()
            .map((item) => item + Math.pow(2, i - 1));
        res = res.concat(right);
        i++;
    }
    return res;
};
```
:::

## 【283】移动零
::: tip 真题描述
```js
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

};

```
:::

题目来源：
[leetcode-283-移动零](https://leetcode-cn.com/problems/move-zeroes/)

### 思路分析
::: details Possible solutions
```js
1. 定义一个指针 j，让它从数组左边开始移动；当遍历数组的时候，发现某个值不等于0，同时满足 i !== j 就让 nums[j] 与 nums[i] 交换位置，j++
```

:::

### 题解


#### 解法一
::: details
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}
};
```

稍稍改造一下：
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			// nums[j] = nums[i];
			// if (i !== j) {
			// 	nums[i] = 0;
			// }
            if (i !== j) {
			    [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            j++;
		}
	}
};
```
:::

## 【11】盛最多水的容器【中等】
::: tip 真题描述
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};
```
:::

题目来源：
[leetcode-11-盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

### 思路分析
::: details Possible solutions
1. 枚举 O(n^2)
2. 左右夹逼，设置左右边界 i,j 向中间收敛 O(n)
:::

### 题解


#### 解法一
::: details
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let max = 0;
	for (let i = 0; i < height.length - 1; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let area = (j - i) * Math.min(height[i], height[j]);
			max = Math.max(max, area);
		}
	}
	return max;
};
```
执行用时：1296 ms, 在所有 JavaScript 提交中击败了 7.63% 的用户
内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了 7.65% 的用户
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    for (let i = 0; i < height.length; i++) {
        let j = height.length - 1
        while (j > i) {
			// temp 记录暂时最大的面积的高度，当指针不断向左移动的时候，高度小于所记录的高度直接跳过
            let temp
            if (temp == undefined || height[j] > height[temp]) {
                let area = Math.min(height[i], height[j]) * (j - i);
                if (area > max) {
                    max = area
                    temp = j
                }
            }
			j--
        }
    }
    return max
};
```
执行结果：太慢了
执行用时：1340 ms, 在所有 JavaScript 提交中击败了 6.32% 的用户
内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了 15.89% 的用户
:::

#### 解法二
::: details
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let max = 0;
	for (let i = 0, j = height.length - 1; i < j;) {
		let minHeight = height[i] < height[j] ? height[i++] : height[j--];
		let area = (j - i + 1) * minHeight;
		max = Math.max(max, area);
	}
	return max;
};
```

稍稍改造一下：
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let max = 0;
	for (let i = 0, j = height.length - 1; i < j;) {
		max = height[i] < height[j] ?
			Math.max(max, (j - i) * height[i++]) :
			Math.max(max, (j - i) * height[j--]);
	}
	return max;
};
```
:::


## 【70】爬楼梯
::: tip 真题描述
```js
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

};
```
:::

题目来源：
[leetcode-70-爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

### 思路分析
::: details Possible solutions
```js
n=1: f1 = 1
n=2: f2 = 2
n=3: f3 = 3 = f1+f2  // 因为一次只能爬 1 或 2 个台阶，所以最后一步也 只能爬 1 或 2 个台阶
n=4: f4 = f2+f3
...
n=n: fn=f(n-1)+f(n-2)
【类似于斐波那契数列-Fibonacci】

求解方法：
1. 循环迭代 O(n)
2. 递归
3. 递归 + 记忆化
4. 动态规划
```

:::

### 题解


#### 解法一
循环迭代
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if (n < 3) {
		return n;
	}
	let f1 = 1,
		f2 = 2,
		fn;
	for (let i = 2; i < n; i++) {
		fn = f2 + f1;
		f1 = f2;
		f2 = fn;
	}
	return fn;
};

```

稍稍改造一下
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if (n < 3) {
		return n;
	}
	let a = [1, 2]
	for (let i = 2; i < n; i++) {
		a[i] = a[i - 1] + a[i - 2]
	}
	return a[n-1];
};
```
更清晰一点：
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let arr = [0, 1, 2]
    if (n < 3) return arr[n]
    for (let i = 3; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
};
```


#### 解法二
递归
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if (n < 3) {
		return n;
	}
	return climbStairs(n - 1) + climbStairs(n - 2);
};
```
提交超出时间限制

#### 解法三
递归 + 记忆化
```js
/**
 * @param {number} n
 * @return {number}
 */
let f = []
var climbStairs = function(n) {
	if (n < 3) {
		return n
	}
	if (f[n] == undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
	return f[n]
};
```

#### 解法四
动态规划
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	// 初始化状态数组
	let dp = []
	// 初始化已知值
	dp[1] = 1, dp[2] = 2
	// 动态更新每一层楼梯对应的结果
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	return dp[n]
};
```

## 总结
强大的双指针法

什么时候你需要联想到对撞指针？
这里我给大家两个关键字——**“有序”和“数组”**。
没错，见到这两个关键字，立刻把双指针法调度进你的大脑内存。普通双指针走不通，立刻想对撞指针！

即便数组题目中并没有直接给出“有序”这个关键条件，我们在发觉普通思路走不下去的时候，也应该及时地尝试手动对其进行排序试试看有没有新的切入点——没有条件，创造条件也要上。


### lin
* 当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。
* 几乎所有的求和问题，都可以转化为求差问题。

数组本身这种数据结构不难，所以相关题目若想往难了出，那一定是要结合一些超越数据结构本身的东西——比如排序算法、二分思想、动态规划思想等等。因此，这部分对应的难题、综合题，我们需要等知识体系完全构建起来之后，在真题训练环节重新复盘。