---
title: 排序算法
sidebarDepth: 1
---

[常见排序算法及其对应的时间复杂度和空间复杂度](https://www.cnblogs.com/zwtgyh/p/10631760.html)

## 冒泡排序
::: tip
* 冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样。
* 第一趟将最大的数冒泡到最右边；
* 第二趟将第二大的数冒泡到右边倒数第二个；
* 。。。
:::
```js

function swap(arr, a, b) {
	const temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

const bubbleSort = function(arr) {
	const len = arr.length
	if (len <= 1) return
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}
```
时间复杂度 O(N^2)
空间复杂度 O(1)

## 选择排序
::: tip
选择排序大致的思路是找到数据结构中的最小值并将其放到第一位，接着找到第二小的值将其放在第二位，以此类推。
:::
```js
const selectionSort = function(arr) {
	const len = arr.length
	if (len <= 1) return
	for (let i = 0; i < len - 1; i++) {
		let minIndex = i
		// 需要注意这里的边界, 因为需要在内层进行 i+1 后的循环，所以外层需要 数组长度-1
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j // 找到整个数组的最小值
			}
		}
		swap(arr, i, minIndex)
	}
	return arr
}
```
时间复杂度 O(N^2)
空间复杂度 O(1)

## 插入排序
::: tip 思想
* 假定第一项已经排序了
* 接着，寻找第二项应该插入的位置，与前面的数逐一进行比较，判断第二项是应该待在原位还是插到第一位之前，根据判断结果做相应处理
* 这样前两项就已正确排序
* 接着，寻找第三项应该插入的位置，与前面的数逐一进行比较，判断它是该插入到第三、第二还是第一的位置
* 以此类推
:::
```js
const insertionSort = function(arr) {
	const len = arr.length
	// 外层循环: 外层循环是从1位置开始, 依次遍历到最后
	for (let i = 1; i < len; i++) {
		// 记录选出的元素, 放在变量 temp 中
		let temp = arr[i];
		// 从当前数的前一个开始比较
		let j = i - 1;
		// 内层循环: 内层循环不确定循环的次数, 最好使用 while 循环
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}
	return arr;
}
```


## 希尔排序

希尔排序是插入排序的一种高效的改进版, 并且效率比插入排序要更快.
```js
function shellSort(arr) {
	let len = arr.length;
	// 根据长度计算增量
	let gap = Math.floor(len / 2);
	// 增量不断变小, 大于 0 就继续排序
	while (gap > 0) {
		// 实现插入排序
		for (let i = gap; i < len; i++) {
			let j = i - gap;
			let temp = arr[i];
			while (j >= 0 && arr[j] > temp) {
				arr[j + gap] = arr[j];
				j = j - gap;
			}
			arr[j + gap] = temp;
		}
		// 重新计算新的间隔
		gap = Math.floor(gap / 2);
	}
	return arr;
}
```

另一种写法：
```js
const shellSort = function(arr) {
	const len = arr.length
	// 根据长度计算增量
	let gap = Math.floor(len / 2)

	// 增量不断变量小, 大于 0 就继续排序
	while (gap > 0) {
		// 实现插入排序
		for (let i = gap; i < len; i++) {
			let j = i
			let temp = arr[i]
			while (j > gap - 1 && arr[j - gap] > temp) {
				arr[j] = arr[j - gap]
				j -= gap
			}
			arr[j] = temp
		}
		// 重新计算新的间隔
		gap = Math.floor(gap / 2)
	}
	return arr
}
```
[数据结构(十七)之高级排序](https://www.jianshu.com/p/3c2184320514)

## 归并排序
::: tip 思想
* 这是一种分治算法。将原始数组切分成较小的数组，直到每个小数组只有一项，
* 然后在将小数组归并为排好序的较大数组，直到最后得到一个排好序的最大数组。
:::

### 书
```js
// 书上
const mergeSort = function(arr) {
	const len = arr.length
	// 当任意数组分解到只有一个时返回。
	if (len <= 1) return arr
	const middle = Math.floor(len / 2)
	// 递归 分解
	const left = mergeSort(arr.slice(0, middle))
	const right = mergeSort(arr.slice(middle))
	/* arr = merge(left, right)
	return arr */
	// 合并
	return merge(left, right)
}
const merge = (left, right) => {
	let result = []
	let i = 0
	let j = 0
	// 判断2个数组中元素大小，依次插入数组
	while (i < left.length && j < right.length) {
		// 书
		result.push(
			left[i] <= right[j] ? left[i++] : right[j++]
		)
		/* if (left[i] <= right[j]) {
			result.push(left[i])
			i++
		} else {
			result.push(right[j])
			j++
		} */
	}
	// 合并 多余数组
	// return result.concat(left.slice(i)).concat(right.slice(j))
	// 书
	return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
```

### 王争-GitHub
```js
// 王争-GitHub
const mergeSort = function(arr) {
	const len = arr.length
	// 当任意数组分解到只有一个时返回。
	if (len <= 1) return arr
	const middle = Math.floor(len / 2)
	const left = arr.slice(0, middle) // 分割数组
	const right = arr.slice(middle)
	// 递归 分解 合并
	return merge(mergeSort(left), mergeSort(right))
}
const merge = (left, right) => {
	let result = []
	let i = 0
	let j = 0
	// 判断2个数组中元素大小，依次插入数组
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			result.push(left[i])
			i++
		} else {
			result.push(right[j])
			j++
		}
	}
	// 合并 多余数组
	// return result.concat(left.slice(i)).concat(right.slice(j))
	// 书
	return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
```


### coderwhy
[归并排序的JavaScript实现](https://www.cnblogs.com/Bonnie3449/p/9574635.html)

代码
```js
function mergeSort(arr) {
    const length = arr.length;
    if (length === 1) { //递归算法的停止条件，即为判断数组长度是否为1
        return arr;
    }
    const mid = Math.floor(length / 2);
   
    const left = arr.slice(0,  mid);
    const right = arr.slice(mid, length);
  
    return merge(mergeSort(left), mergeSort(right)); //要将原始数组分割直至只有一个元素时，才开始归并
}

function merge(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    //left, right本身肯定都是从小到大排好序的
    while( il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
        
    }

    //不可能同时存在 left 和 right 都有剩余项的情况, 要么 left 要么 right 有剩余项, 把剩余项加进来即可
	// 剩余的若是前一个序列，则其直接按并入 result
    while (il < left.length) { 
        result.push(left[il]);
        il++;
    }
    while(ir < right.length) {
        result.push(right[ir]);
        ir++;
    }
    return result;
}
```
性能分析
* 时间复杂度：最好、平均、最坏O(nlogn)
* 空间复杂度: O(n), 稳定

## 快速排序
::: tip 思想
* 首先，从数组中选一个主元(pivot)---主元的选取方式后面进行说明
* 划分 partition 操作---创建两个指针，左边一个指向数组第一个值，右边一个指向数组最后一个值。移动左指针直到找到一个比主元大的值，移动右指针直到找到一个比主元小的值，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。
* 算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。
:::

### lin-1
```js
function quickSort(arr, left = 0, right = arr.length - 1) {
	if (arr.length > 1) {
		let index = partition(arr, left, right)
		if (left < index - 1) {
			quickSort(arr, left, index - 1)
		}
		if (index < right) {
			quickSort(arr, index, right)
		}
	}
	/* if (left >= right) return
	let index = partition(arr, left, right)
	quick(arr, left, index - 1)
	quick(arr, index, right) */

	return arr
}
// 划分过程
function partition(arr, left, right) {
	// 选取中间那个数作为主元
	const pivotIndex = Math.floor((left + right + 1) / 2)
	// 注意：这样会发生栈溢出
	// const pivotIndex = Math.floor((left + right) / 2)
	
	const pivot = arr[pivotIndex]
	// 将 主元 暂时与最右边的数交换，这样主元待在最后一个位置不动，等全部交换完毕之后，
	// 再将 主元 一次性 放回到 正确的位置
	swap(arr, pivotIndex, right)
	// 如果直接以最后一个数作为 pivot，上述三行代码 直接替换为 const pivot = arr[right]
	
	let i = left
	let j = right - 1
	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}
		while (arr[j] > pivot) {
			j--
		}
		/*
		if (i < j) {    // 测试不通过
		 */
		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	// 将枢纽放在正确的位置
	swap(arr, i, right)
	return i
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```
性能分析
* 时间复杂度：O(nlogn)
* 空间复杂度: O(1)
* 
### lin-2
```js
function quickSort(arr) {
	return quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
	let index
	if (arr.length > 1) {
		index = partition(arr, left, right)
		if (left < index - 1) {
			quick(arr, left, index - 1)
		}
		if (index < right) {
			quick(arr, index, right)
		}
	}
	return arr
}
// 划分过程
function partition(arr, left, right) {
	// 选取中间那个数作为主元
	const pivot = arr[Math.floor((left + right + 1) / 2)]
	// 注意：这样会发生栈溢出
	// const pivot = arr[Math.floor((left + right) / 2)]
	
	const pivot = arr[pivotIndex]
	// 将 主元 暂时与最右边的数交换，这样主元待在最后一个位置不动，等全部交换完毕之后，
	// 再将 主元 一次性 放回到 正确的位置
	swap(arr, pivotIndex, right)
	// 如果直接以最后一个数作为 pivot，上述三行代码 直接替换为 const pivot = arr[right]
	let i = left
	let j = right - 1
	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}
		while (arr[j] > pivot) {
			j--
		}
		/*
		if (i < j) {    // 测试不通过
		 */
		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	// 将枢纽放在正确的位置
	swap(arr, i, right)
	return i
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```
性能分析
* 时间复杂度：O(nlogn)
* 空间复杂度: O(1)

```js
/**
 * 快速排序
 *王争-GitHub
 * Author: nameczz
 */
const quickSort = (arr, left, right) => {
    if (left < right) {
        let pivot = right
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
}

// 获取 pivot 交换完后的index
const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex)
            startIndex++
        }
    }
    swap(arr, startIndex, pivot)
    return startIndex
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```

```js
// 快速排序实现
// coderwhy
ArrayList.prototype.quickSort = function () {
    this.quickSortRec(0, this.array.length - 1)
}

ArrayList.prototype.quickSortRec = function (left, right) {
    // 0.递归结束条件
    if (left >= right) return

    // 1.获取枢纽
    var pivot = this.median(left, right)

    // 2.开始进行交换
    // 2.1.记录左边开始位置和右边开始位置
    var i = left
    var j = right - 1
    // 2.2.循环查找位置
    while (true) {
        while (this.array[++i] < pivot) { }
        while (this.array[--j] > pivot) { }
        if (i < j) {
              // 2.3.交换两个数值
            this.swap(i, j)
        } else {
            // 2.4.当i<j的时候(一定不会=, 看下面解释中的序号3), 停止循环因为两边已经找到了相同的位置
            break
        }
    }

    // 3.将枢纽放在正确的位置
    this.swap(i, right - 1)

    // 4.递归调用左边
    this.quickSortRec(left, i - 1)
    this.quickSortRec(i + 1, right)
}
// 选择枢纽
ArrayList.prototype.median = function (left, right) {
    // 1.求出中间的位置
    var center = Math.floor((left + right) / 2)

    // 2.判断并且进行交换
    if (this.array[left] > this.array[center]) {
        this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
        this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
        this.swap(left, right)
    }

    // 3.巧妙的操作: 将center移动到right - 1的位置.
    this.swap(center, right - 1)

    // 4.返回pivot
    return this.array[right - 1]
}
```


```js
// 书-快速排序
function quickSort(arr) {
	return quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
	let index
	if (arr.length > 1) {
		index = partition(arr, left, right)
		if (left < index - 1) {
			quick(arr, left, index - 1)
		}
		if (index < right) {
			quick(arr, index, right)
		}
	}
	return arr
}

function partition(arr, left, right) {
	const pivot = arr[Math.floor((left + right) / 2)]
	let i = left
	let j = right
	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}
		while (arr[j] > pivot) {
			j--
		}
		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	return i
}
```



### 补充
[博客园-JavaScript 快速排序算法](https://www.cnblogs.com/hjx-blog/articles/9183453.html)
前段时间，看到一篇叫做**《面试官：阮一峰版的快速排序完全是错的》的文章**，恰巧此前不久也学习了阮一峰老师的快排，非常通俗易懂易实现，不得不说，标题一下抓住了我的眼球。
[知乎](https://www.zhihu.com/question/276746146/answer/389591896)

文章内容就是某面试官（简写成A，下同）微博公开说阮一峰老师（简写成R，下同）快排是完全错误的，重点是，所有面试者的快排都是R的，Google 前端快排 也都是R的，一个A认为完全错误的算法还一统前端的天下了，也许A在发博的时候带了情绪，亦或是有别的原因，措辞犀利，引起了前端界一波争议。而以上，都不是我关注的重点，我把重点投到了算法上：

一、阮一峰老师的快排js实现
[阮一峰](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
 思路：

1、选择数组中间数作为基数，并从数组中取出此基数；

2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器；

3、递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回。
```js
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
```

### 如何用快排思想在O(n)内查找第K小的元素？
解题：如果用快排的思想，按照从小到大排序，如果要找第K小的数，左边就应该有 K-1 个数，主元就是第K的数。此时它的下标是 k-1 ?
#### lin
```js
/**
 * 第k小的数
 * @param {array} arr 
 * @param {number} k  
 */
function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p !== k - 1) {
    if (p > k - 1) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function partition(arr, left, right) {
	const pivot = arr[right]
	let i = left
	let j = right - 1
	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}
		while (arr[j] > pivot) {
			j--
		}
		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	// 将枢纽放在正确的位置
	swap(arr, i, right)
	return i
}

function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
```

### 如何用快排思想在O(n)内查找第K大的元素？

#### lin
```js
/**
 * 王争-GitHub
 * 第k大的数
 * @param {array} arr 
 * @param {number} k  
 */
function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function partition(arr, left, right) {
	const pivot = arr[right]
	let i = left
	let j = right - 1
	while (i <= j) {
		while (arr[i] > pivot) {
			i++
		}
		while (arr[j] < pivot) {
			j--
		}
		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	// 将枢纽放在正确的位置
	swap(arr, i, right)
	return i
}

function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
```

#### 王争
```js
/**
 * 王争-GitHub
 * 第k大的数
 * @param {array} arr 
 * @param {number} k  
 */
function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function partition(arr, left, right) {
  let i = left;
  let pivot = arr[right];
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
```

## 补充
### 说明
代码部分来源有标注
王争-github
coderwhy

```js
function swap(arr, a, b) {
	const temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}
```

### 王争
#### 11-排序（上）：为什么插入排序比冒泡排序更受欢迎？

如何分析一个“排序算法”？
* 学习排序算法，我们除了学习它的算法原理、代码实现之外，更重要的是要学会如何评价、分析一个排序算法。那分析一个排序算法，要从哪几个方面入手呢？

排序算法的执行效率

对于排序算法执行效率的分析，我们一般会从这几个方面来衡量：

1. 最好情况、最坏情况、平均情况时间复杂度

我们在分析排序算法的时间复杂度时，要分别给出最好情况、最坏情况、平均情况下的时间复杂度。除此之外，你还要说出最好、最坏时间复杂度对应的要排序的原始数据是什么样的。

为什么要区分这三种时间复杂度呢？第一，有些排序算法会区分，为了好对比，所以我们最好都做一下区分。第二，对于要排序的数据，有的接近有序，有的完全无序。有序度不同的数据，对于排序的执行时间肯定是有影响的，我们要知道排序算法在不同数据下的性能表现。

2. 时间复杂度的系数、常数 、低阶

我们知道，时间复杂度反应的是数据规模 n 很大的时候的一个增长趋势，所以它表示的时候会忽略系数、常数、低阶。但是实际的软件开发中，我们排序的可能是 10 个、100 个、1000 个这样规模很小的数据，所以，在对同一阶时间复杂度的排序算法性能对比的时候，我们就要把系数、常数、低阶也考虑进来。

3. 比较次数和交换（或移动）次数

这一节和下一节讲的都是基于比较的排序算法。基于比较的排序算法的执行过程，会涉及两种操作，一种是元素比较大小，另一种是元素交换或移动。所以，如果我们在分析排序算法的执行效率的时候，应该把比较次数和交换（或移动）次数也考虑进去。

排序算法的内存消耗
* 我们前面讲过，算法的内存消耗可以通过空间复杂度来衡量，排序算法也不例外。不过，针对排序算法的空间复杂度，我们还引入了一个新的概念，原地排序（Sorted in place）。原地排序算法，就是特指空间复杂度是 O(1) 的排序算法。我们今天讲的三种排序算法，都是原地排序算法。

排序算法的稳定性
* 仅仅用执行效率和内存消耗来衡量排序算法的好坏是不够的。针对排序算法，我们还有一个重要的度量指标，稳定性。这个概念是说，如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变。

我通过一个例子来解释一下。比如我们有一组数据 2，9，3，4，8，3，按照大小排序之后就是 2，3，3，4，8，9。

这组数据里有两个 3。经过某种排序算法排序之后，如果两个 3 的前后顺序没有改变，那我们就把这种排序算法叫作稳定的排序算法；如果前后顺序发生变化，那对应的排序算法就叫作不稳定的排序算法。

我通过一个例子来解释一下。比如我们有一组数据 2，9，3，4，8，3，按照大小排序之后就是 2，3，3，4，8，9。

这组数据里有两个 3。经过某种排序算法排序之后，如果两个 3 的前后顺序没有改变，那我们就把这种排序算法叫作稳定的排序算法；如果前后顺序发生变化，那对应的排序算法就叫作不稳定的排序算法。

你可能要问了，两个 3 哪个在前，哪个在后有什么关系啊，稳不稳定又有什么关系呢？为什么要考察排序算法的稳定性呢？

很多数据结构和算法课程，在讲排序的时候，都是用整数来举例，但在真正软件开发中，我们要排序的往往不是单纯的整数，而是一组对象，我们需要按照对象的某个 key 来排序。

比如说，我们现在要给电商交易系统中的“订单”排序。订单有两个属性，一个是下单时间，另一个是订单金额。如果我们现在有 10 万条订单数据，我们希望按照金额从小到大对订单数据排序。对于金额相同的订单，我们希望按照下单时间从早到晚有序。对于这样一个排序需求，我们怎么来做呢？

最先想到的方法是：我们先按照金额对订单数据进行排序，然后，再遍历排序之后的订单数据，对于每个金额相同的小区间再按照下单时间排序。这种排序思路理解起来不难，但是实现起来会很复杂。

借助稳定排序算法，这个问题可以非常简洁地解决。解决思路是这样的：我们先按照下单时间给订单排序，注意是按照下单时间，不是金额。排序完成之后，我们用稳定排序算法，按照订单金额重新排序。两遍排序之后，我们得到的订单数据就是按照金额从小到大排序，金额相同的订单按照下单时间从早到晚排序的。为什么呢？

稳定排序算法可以保持金额相同的两个对象，在排序之后的前后顺序不变。第一次排序之后，所有的订单按照下单时间从早到晚有序了。在第二次排序中，我们用的是稳定的排序算法，所以经过第二次排序之后，相同金额的订单仍然保持下单时间从早到晚有序。


#### 12-排序（下）：如何用快排思想在O(n)内查找第K大元素？_files

归并排序使用的就是分治思想。分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了。

从我刚才的描述，你有没有感觉到，分治思想跟我们前面讲的递归思想很像。是的，分治算法一般都是用递归来实现的。分治是一种解决问题的处理思想，递归是一种编程技巧，这两者并不冲突。分治算法的思想我后面会有专门的一节来讲，现在不展开讨论，我们今天的重点还是排序算法。

前面我通过举例让你对归并有了一个感性的认识，又告诉你，归并排序用的是分治思想，可以用递归来实现。我们现在就来看看如何用递归代码来实现归并排序。


#### 14-排序优化：如何实现一个通用的、高性能的排序函数？_files
还有我们前面提到的递归太深会导致堆栈溢出的问题，qsort() 是通过自己实现一个堆上的栈，手动模拟递归来解决的。我们之前在讲递归那一节也讲过，不知道你还有没有印象？


## 总结
