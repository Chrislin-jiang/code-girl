---
title: 搜索算法
---

## 顺序搜索
## 二分搜索
### 二分查找
```js
/**
 * 二分查找
 * 王争 GitHub
 * Author: nameczz
 */
// 数组必须有序 不存在重复
const binaryFind = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (sortedArr[mid] === target) {
			return mid
		} else if (sortedArr[mid] > target) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(biaryFind(arr, 44))
console.log(biaryFind(arr, 1))
console.log(biaryFind(arr, 102))
console.log(biaryFind(arr, 1111))
```


### 查找第一个等于给定值
```js
const biaryFindFirst = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)

		if (sortedArr[mid] > target) {
			high = mid - 1
		} else if (sortedArr[mid] < target) {
			low = mid + 1
		} else {
			// if (mid === 0 || sortedArr[mid - 1] < target) return mid
			if (mid === 0 || sortedArr[mid - 1] !== target) return mid
			high = mid - 1
		}
	}
	return -1
}
/* 
王争
 我们重点看第 11 行代码。如果 mid 等于 0，那这个元素已经是数组的第一个元素，那它肯定是我们要找的；
 如果 mid 不等于 0，但 sortedArr[mid - 1] 的前一个元素 sortedArr[mid - 1] 不等于 target，
 那也说明 sortedArr[mid - 1] 就是我们要找的第一个值等于给定值的元素。
 
 如果经过检查之后发现 sortedArr[mid - 1] 前面的一个元素 sortedArr[mid - 1] 也等于 target，
 那说明此时的 sortedArr[mid - 1] 肯定不是我们要查找的第一个值等于给定值的元素。
 那我们就更新 high=mid-1，因为要找的元素肯定出现在 [low, mid-1] 之间。
 */
```



### 查找最后一个相等的数
```js
const biaryFindLast = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (sortedArr[mid] > target) {
			high = mid - 1
		} else if (sortedArr[mid] < target) {
			low = mid + 1
		} else {
			// if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
			if (mid === sortedArr.length - 1 || sortedArr[mid + 1] !== target) return mid
			low = mid + 1
		}
	}
	return -1
}
/* 
else {
  if ((mid == n - 1) || (a[mid + 1] != target)) return mid;
  else low = mid + 1;
}
我们还是重点看第 11 行代码。如果 a[mid] 这个元素已经是数组中的最后一个元素了，那它肯定是我们要找的；
如果 a[mid] 的后一个元素 a[mid+1] 不等于 target，那也说明 a[mid] 就是我们要找的最后一个值等于给定值的元素。

如果我们经过检查之后，发现 a[mid] 后面的一个元素 a[mid+1] 也等于 target，
那说明当前的这个 a[mid] 并不是最后一个值等于给定值的元素。
我们就更新 low=mid+1，因为要找的元素肯定出现在 [mid+1, high] 之间。
 */
```

### 查找第一个大于等于给定值的元素
```js
const biaryFindFirstBig = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (sortedArr[mid] >= target) {
			if (mid === 0 || sortedArr[mid - 1] < target) return mid
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}

/* 
现在我们再来看另外一类变形问题。在有序数组中，查找第一个大于等于给定值的元素。
比如，数组中存储的这样一个序列：3，4，6，7，10。
如果查找第一个大于等于 5 的元素，那就是 6。
实际上，实现的思路跟前面的那两种变形问题的实现思路类似，代码写起来甚至更简洁。
public int bsearch(int[] a, int n, int target) {
  int low = 0;
  int high = n - 1;
  while (low <= high) {
    int mid =  low + ((high - low) >> 1);
    if (a[mid] >= target) {
      if ((mid == 0) || (a[mid - 1] < target)) return mid;
      else high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
如果 a[mid] 小于要查找的值 target，那要查找的值肯定在 [mid+1, high] 之间，所以，我们更新 low = mid + 1。
对于 a[mid] 大于等于给定值 target 的情况，我们要先看下这个 a[mid] 是不是我们要找的第一个值大于等于给定值的元素。
如果 a[mid] 前面已经没有元素，或者前面一个元素小于要查找的值 target，那 a[mid] 就是我们要找的元素。这段逻辑对应的代码是第 7 行。
如果 a[mid-1] 也大于等于要查找的值 target，那说明要查找的元素在 [low, mid-1] 之间，所以，我们将 high 更新为 mid-1。
 */
```

### 查找最后一个小于等于给定值的元素
```js
const biaryFindLastSmall = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (sortedArr[mid] <= target) {
			if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return -1
}

const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
const first = biaryFindFirst(arr, 4)
console.log(`FindFirst: ${first}`)

const last = biaryFindLast(arr, 4)
console.log(`FindLast: ${last}`)
const FisrtBig = biaryFindFistBig(arr, 5)
console.log(`FindFisrtBig: ${FisrtBig}`)
const LastSmall = biaryFindLastSmall(arr, 4)
console.log(`FindLastSmall: ${LastSmall}`)
```

## 内插搜索
