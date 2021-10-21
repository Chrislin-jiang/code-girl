/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}

示例 1:
输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
示例 2:
输入: flowerbed = [1,0,0,0,1], n = 2
输入: flowerbed = [0,0,0,0,0,0,1], n = 2
输出: False
 */
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0, len = flowerbed.length
  // 考虑一些极端情况
  if (len === 0) {
    return 'False'
  }
  else if (len === 1) {
    return n === 1 ? 'True' : 'False'
  } else {
    for (let i = 0; i < len; i++) {
      if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        max = max + 1
        i++
      } else if (i === len - 1 && flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
        max = max + 1
        i++
      } else {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1]) {
          max = max + 1
          i++
        } else {
          continue
        }
      }
    }
  }
  return max >= n ? 'True' : 'False'
};
