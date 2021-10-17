---
title: 动态规划
sidebarDepth: 2
---

## 动态规划
当递归过程中（递归树中）有重复子问题时候，考虑动态规划

## 学习
动态规划
* [告别动态规划，连刷 40 道题，我总结了这些套路，看不懂你打我（万字长文）](https://zhuanlan.zhihu.com/p/91582909)
* [「算法与数据结构」一张脑图带你看动态规划算法之美](https://juejin.im/post/6872115031501340679)
* [[力扣] DP问题分类汇总](https://zhuanlan.zhihu.com/p/126546914)
* 学习视频-bilibili

### 模型分类
* 线性模型
* 区间 DP
* 背包 DP
* 数位 DP
* 状态压缩 DP
* 树状 DP



### 常见的 DP 优化方法
* 滚动数组优化（空间）
* 矩阵乘法优化（空间）
* 斜率优化
* 四边形不等式优化
* 决策单调性优化
* 数据结构优化



## LeetCode-DP-Simple
### 面试题 08.01. 三步问题
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
```js
示例1:

 输入：n = 3 
 输出：4
 说明: 有四种走法
示例2:

 输入：n = 5
 输出：13
```
[面试题 08.01. 三步问题](https://leetcode-cn.com/problems/three-steps-problem-lcci/)
```js
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
	let dp = new Array(n + 1)
	// 初始化
	dp[0] = 0
	dp[1] = 1
	dp[2] = 2
    dp[3] = 4
	for (let i = 4; i < n + 1; i++) {
		// 状态转移方程
		dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
	}
	return dp[n]
};
```

### 面试题 17.16. 按摩师
一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动
```js
示例 1：

输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
示例 2：

输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
```
[面试题 17.16. 按摩师](https://leetcode-cn.com/problems/the-masseuse-lcci/)
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
	let len = nums.length
    if(!len) return 0
	let dp = new Array(len)
	dp[0] = nums[0]
	dp[1] = Math.max(nums[0], nums[1])
	for (let i = 2; i < len; i++) {
		// 状态转移方程
		// 第 i 个，有两种方案，选择它 和 不选择它，取它们中的最大值
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
	}
	return dp[len - 1]
};
```
优化空间
```js
/**
 * @param {number[]} nums
 * @return {number}
 */

var massage = function(nums) {
	if (nums.length == 0) {
		return 0;
	}
	if (nums.length == 1) {
		return nums[0];
	}
	let a = 0,
		b = nums[0],
		max;
	for (let i = 2; i <= nums.length; i++) {
		max = Math.max(a + nums[i - 1], b);
		a = b;
		b = max;
	}
	return max;
};
```

### 面试题 16.17. 连续数列
给定一个整数数组，找出总和最大的连续数列，并返回总和。
```js
示例：
输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶：
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
```
[面试题 16.17. 连续数列](https://leetcode-cn.com/problems/contiguous-sequence-lcci/)
* 同[53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
* 同[剑指offer-42-连续子数组的最大和](https://chrislin-jiang.github.io/code-girl/algorithms/exercise/offer.html#_42-%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C)
### 53. 最大子序和
[53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
同[剑指offer-42-连续子数组的最大和](https://chrislin-jiang.github.io/code-girl/algorithms/exercise/offer.html#_42-%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C)


### 121. 买卖股票的最佳时机
[LeetCode-121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
#### 解法1-暴力法
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let len = prices.length
	let dp = new Array(len)
	// 初始化
	dp[0] = 0
	dp[1] = prices[1] > prices[0] ? prices[1] - prices[0] : 0
	for (let i = 2; i < len; i++) {
		let temp = Number.MIN_VALUE
		for (let j = 0; j < i; j++) {
			if (prices[j] < prices[i]) {
				temp = Math.max(prices[i] - prices[j], temp)
			}
		}
		if (temp == Number.MIN_VALUE) {
			dp[i] = 0
		} else {
			dp[i] = temp
		}
	}
	return Math.max(...dp)
};
```
自己做的时候，想着用动态规划，但后面发现空有dp壳子，没有用到动态规划，并且空间复杂度为N，有待优化
#### 解法1改进-空间优化
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices == null || prices.length == 0) {
		return 0
	}
	let len = prices.length
	let max = Number.MIN_VALUE
	//两层循环找到 max(nums[j]>nums[i])
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			let temp = prices[j] - prices[i]
			if (temp > max) {
				max = temp
			}
		}
	}
	return max
}
```

#### 解法2-变量存储
一层循环，minNum 存储 price[i] 之前的最小值，value 存储最大利润；遍历过程中，不断比较，如果需要，则进行替换，最终输出 value
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minNum = Number.MAX_VALUE,
        value = 0,
        len = prices.length
    for (let i = 0; i < len; i++) {
        if (minNum > prices[i]) {
            minNum = prices[i]
        } else {
            if (prices[i] - minNum > value) {
                value = prices[i] - minNum
            }
        }
    }
    return value
};
// 执行结果：
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了85.21%的用户
// 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了48.93%的用户
```

#### 解法3-动态规划
[LeetCode-other](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/wu-chong-shi-xian-xiang-xi-tu-jie-121-mai-mai-gu-p/)

```js
var maxProfit = function(prices) {
	if (prices == null || prices.length == 0) {
		return 0
	}
	let len = prices.length
	//创建两个数组，一个记录每次卖出的最大收益，一个记录每次买入最大收益
	let sell = new Array(len)
	let buy = new Array(len)
	//初始化第一天收益
	sell[0] = 0
	buy[0] = -prices[0]
	for (let i = 1; i < len; ++i) {
		//第i天卖出收益 = max(第i-1天卖出收益，第i-1天买入收益+当天股价)
		sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
		//第i天买入收益 = max(第i-1天买入收益，-当天股价)
		buy[i] = Math.max(buy[i - 1], -prices[i])
	}
	return Math.max(sell[len - 1], buy[len - 1])
}
```




#### 解法4-动态规划
[LeetCode-weiwei](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/bao-li-mei-ju-dong-tai-gui-hua-chai-fen-si-xiang-b/)
```js
var maxProfit = function(prices) {
	let len = prices.length;
	// 特殊判断
	if (len < 2) {
	    return 0;
	}
	let dp = Array.from(new Array(len), () => new Array(2))
	
	// dp[i][0] 下标为 i 这天结束的时候，不持股，手上拥有的现金数
	// dp[i][1] 下标为 i 这天结束的时候，持股，手上拥有的现金数
	
	// 初始化：不持股显然为 0，持股就需要减去第 1 天（下标为 0）的股价
	dp[0][0] = 0;
	dp[0][1] = -prices[0];
	
	// 从第 2 天开始遍历
	for (let i = 1; i < len; i++) {
	    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
	    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
	}
	return dp[len - 1][0];
};
```

### 198. 打家劫舍
[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

与[面试题 17.16. 按摩师](https://leetcode-cn.com/problems/the-masseuse-lcci/)模型相同

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	let len = nums.length
	if(!len) return 0
	let dp = new Array(len)
	dp[0] = nums[0]
	dp[1] = Math.max(nums[0], nums[1])
	for (let i = 2; i < len; i++) {
		// 状态转移方程
		// 第 i 个，有两种方案，选择它 和 不选择它，取它们中的最大值
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
	}
	return dp[len - 1]
};
```

### 303. 区域和检索 - 数组不可变
给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

实现 NumArray 类：

NumArray(int[] nums) 使用数组 nums 初始化对象

int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 
```js
示例：

输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
```
[leetcode-303. 区域和检索 - 数组不可变](https://leetcode-cn.com/problems/range-sum-query-immutable/)
#### 解法1-JS数组API
拿到这道题，第一反应是用数组的API，但是这种方法运行速度很慢
```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	const self = this
	self.nums.push(0)
	let arr = self.nums.slice(i, j + 1)
	let res = arr.reduce((a, b) => a + b)
	return res
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```
由于数组不可变，所以将上述方法稍稍改变一下
```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	const self = this
	let nums = self.nums
	let len = nums.length
	let arr
	// 数组不可改变，所以不能用 self.nums.push(0)
	if (j == len - 1) {
		arr = nums.slice(i)
	} else {
		arr = self.nums.slice(i, j + 1)
	}
	let res = arr.reduce((a, b) => a + b)
	return res
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```
#### 解法2-动态规划
尝试使用动态规划，但没能想到最简便的方法，运行时间还是很长
```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	const self = this
	let nums = self.nums
	let len = nums.length
	let dp = new Array(len)
	dp[0] = nums[0]
	for (let i = 1; i < len; i++) {
		dp[i] = dp[i - 1] + nums[i]
	}
	if (i == 0) {
		return dp[j]
	} else {
		return dp[j] - dp[i - 1]
	}
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```

### 392. 判断子序列
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
```js
示例 1:
s = "abc", t = "ahbgdc"
返回 true.

示例 2:
s = "axc", t = "ahbgdc"
返回 false.

后续挑战 :
如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。
在这种情况下，你会怎样改变代码？
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

};
```
[LeetCode-392. 判断子序列](https://leetcode-cn.com/problems/is-subsequence/)
#### 解法1-双指针法
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	let n = s.length, m = t.length;
	let i = 0, j = 0;
	while (i < n && j < m) {
		if (s.charAt(i) == t.charAt(j)) {
			i++;
		}
		j++;
	}
	return i == n;
};
```
#### 解法2-动态规划
#### 解法3-二分查找

### 746. 使用最小花费爬楼梯
```js
数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

示例 1:
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。

示例 2:
输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
注意：
cost 的长度将会在 [2, 1000]。
每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

};
```
[746. 使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
#### 解法
```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0)
	let len = cost.length
	let dp = new Array(len)
	// 第 0 级 cost[0] 种方案 
	dp[0] = cost[0]
	// 第 1 级，有两种情况
	// 1：分别踏上第0级与第1级台阶，花费cost[0] + cost[1]
	// 2：直接从地面开始迈两步直接踏上第1级台阶，花费cost[1]
	// dp[1] = min(cost[0] + cost[1], cost[1]) = cost[1]	
	dp[1] = cost[1]	
	for (let i = 2; i < len; i++) {
		dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i]
	}
	return dp[len - 1]
};
```
[LeetCode-瓶子君](https://leetcode-cn.com/problems/min-cost-climbing-stairs/solution/zi-jie-leetcode746shi-yong-zui-xiao-hua-fei-pa-lou/)

### 1025. 除数博弈
[1025. 除数博弈](https://leetcode-cn.com/problems/divisor-game/)

## LeetCode-DP-Medium### 300-最长上升子序列【中等】
::: tip 真题描述
```js
给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n^2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
```
:::
题目来源：
[剑指offer-300-最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

#### 解法1-动态规划
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	let len = nums.length
    if (len == 0) return 0
	let dp = new Array(len).fill(1)
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}
	return Math.max(...dp)
};
// 或者
var lengthOfLIS = function(nums) {
	let len = nums.length
	if (len == 0) return 0
	let max = 0
	let dp = new Array(len).fill(1)
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		max = Math.max(max, dp[i])
	}
	return max
};
```
时间复杂度：O(n^2)

#### 解法2-
```js

```


### 记录
* 当递归过程中（递归树中）有重复子问题时候，考虑动态规划
* 递归树中，有重复的子问题，考虑将其存放在数组里；递归 -> 非递归
* 对每种方案/每个数字，都有两种选择，一种是选择它，一种是不选择它


## 线性DP
### 120-三角形最小路径和【中等】
::: tip 真题描述
```js
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
```
:::
题目来源：
[LeetCode-120-三角形最小路径和](https://leetcode-cn.com/problems/triangle)

#### 解法1-动态规划
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // 获取行数和列数
    let m = triangle.length
    let n = triangle[m - 1].length
    let dp = Array.from(new Array(m).fill(0), () => new Array(n).fill(0))
    // 初始化
    dp[0][0] = triangle[0][0]
    // 转移方程
    for (let i = 1; i < m; i++) {
        // 初始化
        dp[i][0] = dp[i - 1][0] + triangle[i][0]
        // 转移方程
        for (let j = 1; j < i; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
        }
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
    }
    return Math.min(...dp[m - 1])
};
```



### 152-乘积最大子数组【中等】
::: tip 真题描述
```js
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```
:::
题目来源：
[LeetCode-152-乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/)

#### 解法1-动态规划
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let len = nums.length
    let maxArr = new Array(len)
    maxArr[0] = nums[0]
    let minArr = new Array(len)
    minArr[0] = nums[0]
    for (let i = 1; i < len; i++) {
        maxArr[i] = Math.max(maxArr[i - 1] * nums[i], Math.max(minArr[i - 1] * nums[i], nums[i]))
		// maxArr[i] = Math.max(maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i], nums[i])
        minArr[i] = Math.min(minArr[i - 1] * nums[i], Math.min(maxArr[i - 1] * nums[i], nums[i]))
		// minArr[i] = Math.min(minArr[i - 1] * nums[i], maxArr[i - 1] * nums[i], nums[i])
    }
    return Math.max(...maxArr)
};
```


## 学习题目
[^_^]: # (哔哩哔哩-动态规划)

### 题目1
给定一个数组，选择数组中不相邻的数字，使其相加的结果最大

[^_^]: # (笔记在截屏中)

#### 方法1：递归
```js
let recursionOpt = function(arr, i) {
	if (i == 0) {
		return arr[0]
	} else if (i == 1) {
		return Math.max(arr[0], arr[1])
	} else {
		let res1 = recursionOpt(arr, i - 2) + arr[i]
		let res2 = recursionOpt(arr, i - 1)
		return Math.max(res1, res2)
	}
}
// 测试
let arr = [1, 2, 4, 1, 7, 8, 3]
console.log(recursionOpt(arr, 6)) // 15
```
#### 方法2：动态规划
```js
let dpOpt = function(arr) {
	let len = arr.length
	let dp = new Array(len).fill(0)
	dp[0] = arr[0]
	dp[1] = Math.max(arr[0], arr[1])
	for (let i = 2; i < len; i++) {
		dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
	}
	return dp[len - 1]
}
// 测试
let arr = [1, 2, 4, 1, 7, 8, 3]
console.log(dpOpt(arr)) // 15
```

### 题目2
给定一个数组，给定一个数字，如果 存在数组中的元素相加==给定的数字，返回 true，否则，返回 false

[^_^]: # (笔记记录在本子上)

#### 方法1：递归
```js
let recSubset = function(arr, i, s) {
	if (s == 0) {
		return true
	} else if (i == 0) {
		return arr[0] == s
	} else if (arr[i] > s) {
		return recSubset(arr, i - 1, s)
	} else {
		let res1 = recSubset(arr, i - 1, s - arr[i])
		let res2 = recSubset(arr, i - 1, s)
		return res1 || res2
	}
}
// 测试
let arr = [3, 34, 4, 12, 5, 2]
console.log(recSubset(arr, 5, 9)) // true
```
#### 方法2：动态规划
用二维数组来保存中间的计算结果
```js
let dpSubset = function(arr, s) {
	let m = arr.length,
		n = s + 1
	let dp = Array.from(new Array(m), () => new Array(n));
	for (let i = 0; i < m; i++) {
		dp[i][0] = true
	}
	for (let i = 0; i < n; i++) {
		if (i == arr[0]) {
			dp[0][i] = true
		} else {
			dp[0][i] = false
		}
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (arr[i] > j) {
				dp[i][j] = dp[i - 1][j]
			} else {
				dp[i][j] = dp[i - 1][j - arr[i]] || dp[i - 1][j]
			}
		}
	}
	return dp[m - 1][n - 1]
}
// 测试
let arr = [3, 34, 4, 12, 5, 2]
console.log(dpSubset(arr, 9)) // true
console.log(dpSubset(arr, 10)) // true
console.log(dpSubset(arr, 11)) // true
console.log(dpSubset(arr, 12)) // true
console.log(dpSubset(arr, 13)) // false

```

## DP分析法
[^_^]: # (哔哩哔哩-闫式 DP 分析法)
一般是求有限集的最值
动态规划：

化零为整---状态表示（一类）
* 集合
* 属性：max/min/count/存在/不存在

化整为零---状态计算

划分的依据：寻找最后一个不同点

想学好 DP 问题，可以把 DP 的各种模型都整理一遍

多做题

## 学习
[动态规划做题步骤详细总结](https://blog.csdn.net/weixin_44550963/article/details/107282087)
**动态规划题目类型**
1. 计数：
* 有多少种方式走到右下角
* 有多少种方法选出k个数使得和为Sum

2. 求最大最小值：
* 从左上角走到右下角路径的最大数字和
* 最长上升子序列长度

3. 求存在性：
* 取石子游戏，先手是否必胜
* 能不能选出k个数使得和是Sum

动态规划解题步骤
1. 确定状态
* 简单的说，就是解动态规划时需要开一个数组，数组的每个元素```f[i]```或者```f[i][j]```代表什么，类似解数学题中，xyz 代表什么一样，具体分为下面两个步骤：
	* 研究最优策略的最后一步
	* 化为子问题

2. 转移方程
* 根据子问题定义直接得到

3. 初始条件和边界情况
* 初始条件一般都是a[0]、a[1]这种，多看看
* 边界条件主要是看数组的边界，数组越不越界

4. 计算顺序
* 利用之前的计算结果

### LintCode-669-换硬币【中等】
[LintCode-669-换硬币](https://www.lintcode.com/problem/coin-change/description)
给出不同面额的硬币以及一个总金额. 写一个方法来计算给出的总金额可以换取的最少的硬币数量. 如果已有硬币的任意组合均无法与总金额面额相等, 那么返回 -1.
```js
样例
样例1
输入：
[1, 2, 5]
11
输出： 3
解释： 11 = 5 + 5 + 1
样例2

输入： 
[2]
3
输出： -1
注意事项
你可以假设每种硬币均有无数个
总金额不会超过10000
硬币的种类数不会超过500, 每种硬币的面额不会超过100
```

#### 题解
动态规划
```js
/**
 * @param coins: a list of integer
 * @param amount: a total amount of money amount
 * @return: the fewest number of coins that you need to make up
 */
const coinChange = function(coins, amount) {
	let dp = new Array(amount + 1)
	let m = amount + 1,
		n = coins.length
	// 初始化
	dp[0] = 0
	for (let i = 1; i < m; i++) {
		dp[i] = Number.MAX_VALUE
		for (let j = 0; j < n; j++) {
			//第一个条件是防止数组越界；第二个条件是防止 MAX_VALUE + 1 越界
			if (i >= coins[j] && dp[i - coins[j]] !== Number.MAX_VALUE) {
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
			}
		}
	}
	if (dp[amount] == Number.MAX_VALUE) {
		dp[amount] = -1;
	}
	return dp[amount];
}
```

### LintCode-114-不同的路径
[LintCode-114-不同的路径](https://www.lintcode.com/problem/unique-paths/description)
有一个机器人的位于一个 m × n 个网格左上角。

机器人每一时刻只能向下或者向右移动一步。机器人试图达到网格的右下角。

问有多少条不同的路径？
```js
样例
Example 1:
Input: n = 1, m = 3
Output: 1	
Explanation: Only one path to target position.

Example 2:
Input:  n = 3, m = 3
Output: 6	
Explanation:
	D : Down
	R : Right
	1) DDRR
	2) DRDR
	3) DRRD
	4) RRDD
	5) RDRD
	6) RDDR
注意事项
n和m均不超过100
且答案保证在32位整数可表示范围内。
```
#### 思路分析
可用计数型动态规划来求解。

#### 题解
```js
/**
 * @param m: positive integer (1 <= m <= 100)
 * @param n: positive integer (1 <= n <= 100)
 * @return: An integer
 */
const uniquePaths = function(m, n) {
	let dp = Array.from(new Array(m), () => new Array(n))
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 || j == 0) {
				// 初始化
				dp[i][j] = 1
			} else {
				// 动态转移方程
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			}
		}
	}
	return dp[m - 1][n - 1]
}
```


### LintCode-116-跳跃游戏
[LintCode-116-跳跃游戏](https://www.lintcode.com/problem/jump-game/description)
给出一个非负整数数组，你最初定位在数组的第一个位置。　　　

数组中的每个元素代表你在那个位置可以跳跃的最大长度。　　　　

判断你是否能到达数组的最后一个位置。
```js
样例
样例 1
输入 : [2,3,1,1,4]
输出 : true

样例 2
输入 : [3,2,1,0,4]
输出 : false

注意事项
数组A的长度不超过5000，每个元素的大小不超过5000
```

#### 思路分析
这个问题有两个方法，一个是贪心和 动态规划。

贪心方法时间复杂度为O（N）。

动态规划方法的时间复杂度为为O（n^2）。

我们手动设置小型数据集，使大家可以通过测试的两种方式。这仅仅是为了让大家学会如何使用动态规划的方式解决此问题。如果您用动态规划的方式完成它，你可以尝试贪心法，以使其再次通过一次。

#### 方法1-动态规划
```js
/**
 * @param A: A list of integers
 * @return: A boolean
 */
const canJump = function(A) {
	// write your code here
	let len = A.length
	let dp = new Array(len)
	dp[0] = true
	for (let i = 1; i < len; i++) {
		dp[i] = false
		for (let j = 0; j < i; j++) {
			if (dp[j] && j + A[j] >= i) {
				dp[i] = true
				break
			}
		}
	}
	return dp[len - 1]
}
```

#### 方法2-贪心算法