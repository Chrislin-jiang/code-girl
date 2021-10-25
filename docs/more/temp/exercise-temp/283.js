// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
// 1. 定义一个指针 j，让它从数组左边开始移动；当遍历数组的时候，发现某个值不等于0，同时满足 i !== j 就让 nums[j] 与 nums[i] 交换位置，j++
// 1. 定义一个指针 j，让它从数组左边开始移动；当遍历数组的时候，发现某个值不等于0，就让 nums[j] = nums[i]，如果 i !== j, nums[i] = 0, j++
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      // i !== j 这个判断条件，主要是考虑数组第一个元素非0?
      if (i !== j) {
        nums[i] = 0
      }
      j++
    }
  }
};