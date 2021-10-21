// 测试这个代码
var fourSum = function(nums, target) {
	let result = []
	const len = nums.length
	if (len < 4) {
		return result
	}
	nums.sort((a, b) => a - b)
	for (let a = 0; a < len - 3; a++) {
		if (a > 0 && nums[a] === nums[a - 1]) continue;
		if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
		if (nums[a] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
		for (let b = a + 1; b < len - 2; b++) {
			let c = b + 1;
			let d = len - 1;
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
					c++;
					d--;
				} else {
          // 这里有没有问题
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