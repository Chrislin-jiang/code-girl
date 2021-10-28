/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const maxSlidingWindow = function (nums, k) {
	let m = 0, n = k, res = []
	while (n <= nums.length) {
		res.push(Math.max(...nums.slice(m, n)))
		m++
		n++
	}
	return res
};

// 2
const maxSlidingWindow = function (nums, k) {
	const calMax = (nums, left, right) => {
		let partMax = nums[left]
		for (let i = left; i <= right; i++) {
			if (nums[i] > partMax) {
				partMax = nums[i]
			}
		}
		return partMax
	}
	let m = 0, n = k, res = []
	while (n <= nums.length) {
		res.push(calMax(nums, m, n))
		m++
		n++
	}
	return res
};
// 题目
/* 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值。

进阶：
你能在线性时间复杂度内解决此题吗？ */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 核心的思路是维护一个有效的递减队列。
// 维持递减队列的目的，就在于确保队头元素始终是当前窗口的最大值。
const maxSlidingWindow = function (nums, k) {
	
};
// 双端队列
const maxSlidingWindow = function (nums, k) {
	let deque = [], res = []
	deque = nums[0]
	for (let i = 1; i < nums.length - k; i++) {
		if (i < k) {
			while (nums[i] >= deque[deque.length - 1]) {
				deque.pop()
			}
			deque.push(nums[i])
		} else {
			res.push(deque[0])
			if (nums[i - 1] === deque[0]) {
				deque.shift()
			}
		}
	}
    return res
};
