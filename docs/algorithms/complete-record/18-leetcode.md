/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 两层循环+双指针
var fourSum = function(nums, target) {
	let result = []
	const len = nums.length
	nums.sort((a, b) => a - b)
	for (let a = 0; a < len - 3; a++) {
		if (a > 0 && nums[a] === nums[a - 1]) {
			continue
		}
		for (let b = a + 1; b < len; b++) {
			// 左指针
			let c = b + 1
			// 右指针
			let d = len - 1
			/* if (nums[i] === nums[i - 1]) {
				continue
			} */
			if (b > 0 && nums[b] === nums[b - 1]) {
				continue
			}
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

/* 
执行结果：
解答错误
显示详情
输入:
[0,0,0,0]
0
输出
[]
预期结果
[[0,0,0,0]]
 */
var fourSum = function(nums, target) {
	let result = []
	const len = nums.length
	// 新增
	if (len < 4) {
		return result
	}
	// 并不能达到目的
	/* if (len = 4) {
		nums[0] + nums[1] + nums[2] + nums[3] == target
	} */
	nums.sort((a, b) => a - b)
	for (let a = 0; a < len - 3; a++) {
		if (a > 0 && nums[a] === nums[a - 1]) {
			continue
		}
		for (let b = a + 1; b < len; b++) {
			// 左指针
			let c = b + 1
			// 右指针
			let d = len - 1
			/* if (nums[i] === nums[i - 1]) {
				continue
			} */
			if (b > 0 && nums[b] === nums[b - 1]) {
				continue
			}
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

// leetcode-others
/**
 * @description
 * 排序 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	let nums = nums.sort((a, b) => a - b);
	let len = nums.length;
	if (len < 4) return [];
	let result = [];
	for (let i = 0; i < len - 3; i++) {
		// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
		if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
		for (let b = i + 1; b < len - 2; b++) {
			let c = b + 1;
			let d = len - 1;
			// 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
			// 注意这里的判断条件
			// 因为当前b = i + 1
			// 这里判断的是后一个数字是否和现在的数字相等
			// 所以后一个数字的b至少为 b+1 = i+2
			// 所以此处的判断条件为b - 1 > i
			if (b - 1 > i && nums[b] === nums[b - 1]) continue;
			while (c < d) {
				if (nums[i] + nums[b] + nums[c] + nums[d] === target) {
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
					nums[i] + nums[b] + nums[c] + nums[d] > target ?
						d--
						:
						c++
				}
			}
		}
	}
	return result;
}


/* 作者： bin - bi - de - xiao - chao - ren
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


## 更改自己的代码
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



