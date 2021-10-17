---
autoGroup-6: 哈希表
title: 哈希表题目
---

## 242-有效的字母异位词
::: tip 题目描述
```js
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

};
```
:::
[leetcode-242-有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram)

[242](https://leetcode-cn.com/problems/valid-anagram/solution/242-you-xiao-de-zi-mu-yi-wei-ci-javascript-by-chri/)
### 方法1. 排序法  快排  O(NlogN)---字符串长度为N
```javascript
var isAnagram = function(s, t) {
	return s.split('').sort().join('') === t.split('').sort().join('')
};
```
执行用时：124 ms
内存消耗：38.2 MB

### 方法2. 用 Map 对每个字母出现的次数进行计数  
```js
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false

	let map = new Map()

	for (let item of s) {
		// 注意：这里不能用 if (map.has(item))... 来判断，可以自行调试观察
		if (map.get(item)) {
			map.set(item, map.get(item) + 1)
		} else {
			map.set(item, 1)
		}
	}
	for (let item of t) {
		if (map.get(item)) {
			map.set(item, map.get(item) - 1)
		} else {
			return false
		}
	}
	return true
};
```
执行用时：76 ms
内存消耗：37.9 MB

### 方法3. 用 对象 { letter:count }
```js
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false
	
	let map = {}

	for (let item of s) {
		if (map[item]) {
			map[item]++
		} else {
			map[item] = 1
		}
	}
	for (let item of t) {
		if (map[item]) {
			map[item]--
		} else {
			return false
		}
	}
	return true
};
```

执行用时：92 ms
内存消耗：37.7 MB

## 15-三数之和
## 18-四数之和