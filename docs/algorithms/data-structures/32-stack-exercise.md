---
autoGroup-3: 栈
title: 栈的题目
---

## 十进制转二进制

::: tip 3-3-栈的应用-书-P80
十进制转二进制

```js
function decimalToBinary(decNumber) {}
```

:::

### 题解

::: details

```js
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber; // 对 decNumber 进行保存
  let rem;
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}
// 2
const decimalToBinary = (decNumber) => {
  let temp = [],
    res = "";
  while (decNumber > 0) {
    temp.push(decNumber % 2);
    // 注意：Math.floor
    decNumber = Math.floor(decNumber / 2);
  }
  while (temp.length !== 0) {
    // 注意：toString()
    res = res + temp.pop().toString();
  }
  return res;
};
```

:::

## 十进制转任意进制

```js
// 十进制转换为基数为2~36的任意进制
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
// 2
const baseConverter = (decNumber, base) => {
  if (Number.isInteger(base) && base >= 2 && base <= 36) {
    let temp = [],
      res = "";
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while (decNumber > 0) {
      temp.push(digits[decNumber % base]);
      decNumber = Math.floor(decNumber / base);
    }
    while (temp.length !== 0) {
      res = res + temp.pop().toString();
    }
    return res;
  } else {
    return "";
  }
};
console.log(baseConverter(31, 1));
```

## 20-有效的括号

::: tip 题目描述：

```js
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};
```

:::
题目来源：
[leetcode-20](https://leetcode-cn.com/problems/valid-parentheses/)

### 思路分析

::: details

- `([]{(}))`
- 为什么会想到栈？
- 遍历这个字符串，如果遇到-左括号，将其对应的右括号放入栈中
- 如果遇到-右括号，就从栈顶抛出元素，判断其是否与该右括号相等
- 如果相等，继续-向后遍历
- 如果不相等，返回 false
  :::

### 题解

::: details

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};
const isValid = function(str) {
  if (!str) {
    return true;
  }
  let stack = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const ch = str[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(leftToRight[ch]);
    } else {
      // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
};
```

:::

#### 做题记录

::: details 做题记录

- 2020.4.21-边界问题考虑不完整

```js {17,18,23}
const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};
const isValid = function(str) {
  if (!str) {
    return true;
  }
  let stack = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const ch = str[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(leftToRight[ch]);
    } else {
      // 未考虑完整
      if (ch !== stack.pop()) {
        return false;
      }
    }
  }
  return true;
};
/* 
注意：
return true 
在leetcode进行测试
输入:
"["
输出
true
预期结果
false
 */
```

- 2020.05.03
  :::

## 739-每日温度

::: tip 题目描述:
根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

```js
例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
提示：气温 列表长度的范围是 [1, 30000]。
每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {

};
```

:::
题目来源：
[leetcode-739](https://leetcode-cn.com/problems/daily-temperatures/)

### 思路分析

::: details 思路分析

1. 暴力求解 O(N^2)

- 两层循环，第一层定位一个温度，
- 第二层定位离这个温度最近的一次升温是哪天，求出两个温度对应索引的差值。

2. 利用栈结构进行求解 O(N)

- 尝试维持一个递减栈
  :::

### 题解

#### 两层循环

::: details

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
  let result = [];
  const len = T.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (T[j] > T[i]) {
        result[i] = j - i;
        break;
      }
    }
    // 如果 result[i] 未定义，说明后面不存在温度上升的情况，直接赋值为0
    if (!result[i]) {
      result[i] = 0;
    }
  }
  return result;
};
/* 
执行用时 :1048 ms, 在所有 JavaScript 提交中击败了20.58%的用户
内存消耗 :42.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
```

:::

#### 利用栈结构

::: details

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 入参是温度数组
const dailyTemperatures = function(T) {
  const len = T.length;
  const stack = [];
  const res = new Array(len).fill(0); //  初始化结果数组，注意数组定长，占位为 0
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop();
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top;
    }
    // 注意栈里存的 是索引值，为了后面方便计算
    stack.push(i);
  }
  return res;
};
```

:::

#### 做题记录

::: details
相关题目推荐
利用堆栈，还可以解决如下常见问题：

- 求解算术表达式的结果（LeetCode 224、227、772、770)
- 求解直方图里最大的矩形区域（LeetCode 84）
  :::

## 155-最小栈

::: tip 题目描述：
设计一个支持 push ，pop ，top 操作，并能在**常数时间内**检索到最小元素的栈。

```js
push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.getMin(); --> 返回 -2.
/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

:::

### 思路分析

::: details

- 注意这道题目要求 getMin() 操作的时间复杂度是 O(1)
- 所以最直接的方法，如下，是不符合题目要求的

```js
// 按照一次遍历的思路取最小值
MinStack.prototype.getMin = function() {
  let minValue = Infinity;
  const { stack } = this;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] < minValue) {
      minValue = stack[i];
    }
  }
  return minValue;
};
```

要使得 getMin() 操作的时间复杂度是常数级的，可以有以下几种方法

- 基栈 + 辅助栈
- 一个栈，增加一个 min 变量来保存最小值
  这个方法要注意的问题，举个例子，如果把 min 更新为 2，那么之前的最小值 3 就丢失了，当执行 pop 操作后，如果正好把 2 弹出，min 不是 2，如何更新 min

更详细的题解可以参考[leetcode-others-js](https://leetcode-cn.com/problems/min-stack/solution/155-zui-xiao-zhan-by-alexer-660/)
[leetcode-others](https://leetcode-cn.com/problems/min-stack/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-38/)
:::

### 题解

#### 1.基栈+辅助栈

::: details

```js
const MinStack = function() {
  this.stack = [];
  // 定义辅助栈
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  // 若入栈的值小于当前最小值，则推入辅助栈栈顶
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack2[this.stack2.length - 1];
};
```

:::

#### 2.一个栈+min 变量

::: details

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  // Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数（maxinum safe integer)（2^53 - 1）
  this.min = Number.MAX_SAFE_INTEGER;
  // this.min = Infinity
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // 如果当前值比 min 值更小，要进行两次入栈操作
  if (this.min >= x) {
    // 将之前的 min 保存入栈
    this.stack.push(this.min);
    // 更新当前最小值
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 如果弹出值 == 当前最小值，要进行两次 出栈操作，并且要更新 min 的值
  if (this.stack.pop() == this.min) {
    this.min = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};
```

:::

## 232-用栈实现队列

::: tip

```js
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
示例:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
```

:::
题目来源：
[leetcode-232](https://leetcode-cn.com/problems/implement-queue-using-stacks)

### 思路分析

::: details

- 用两个栈来实现队列
- 待完善
  :::

### 题解

::: details

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack2.length) {
    return this.stack2.pop();
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stack2.length) {
    return this.stack2[this.stack2.length - 1];
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length - 1];
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.stack1.length == 0 && this.stack2.length == 0) {
    return true;
  }
  return false;
};
```

:::

## 总结

- 关于栈的一些题目就比较灵活了，因为题干本身可能不会说，让你用栈去实现什么什么功能，
- 需要根据题目的特点进行分析，
- 利用好栈的特点-FILO【先入后出】的特点
- 栈与队列的关系与区别要理清楚，总结一下它们分别的一个适用场景
