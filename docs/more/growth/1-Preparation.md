---
title: 面试准备
---

## 题目1

请说出以下代码输出内容

```js
const a = {}
const b = Symbol('1')
const c = Symbol('1')
a[b] = '子君'
a[c] = '君子'

// 我是子君还是君子呢
console.log(a[b])

const d = {}
const e = {key: '1'}
const f = {key: '2'}
d[e] = '子君'
d[f] = '君子'

// 我是子君还是君子呢
console.log(d[e])
复制代码
```

**答案**

```js
const a = {}
const b = Symbol('1')
const c = Symbol('1')
a[b] = '子君'
a[c] = '君子'

// 输出子君
console.log(a[b])

const d = {}
const e = {key: '1'}
const f = {key: '2'}
d[e] = '子君'
d[f] = '君子'

// 输出君子
console.log(d[e])
```

<img :src="$withBase('/more/growth/symbol-1.png')" alt="symbol-1">


对于第一个输出，`Symbol()`函数会返回**「symbol」**类型的值，而`Symbol`函数传的参数仅仅是用于标识的，不会影响值的唯一性

对于第二个输出， 因为`e`和`f`都是对象，而对象的`key`只能是数值或字符，所以会将对象转换为字符，对象的`toString`方法返回的是`[object Object]`, 所有输出的是君子。

## 题目2

【注】：

1. 包装类型在运算的时候，会先转换为原始类型。

转换流程：调用内置的`[ToPrimitive]`函数，对于该函数而言，其逻辑如下：

* 如果`Symbol.toPrimitive()`方法，优先调用再返回

* 调用`valueOf()`，如果转换为原始类型，则返回

* 调用`toString()`，如果转换为原始类型，则返回

* 如果都没有返回原始类型，会报错

加法运算、减法运算

[运算](https://wangdoc.com/javascript/operators/arithmetic.html#%E5%8A%A0%E6%B3%95%E8%BF%90%E7%AE%97%E7%AC%A6)

2. 两个基本类型相加，如果其中一方是字符，则将其他的转换为字符相加，否则将类型转换为`Number`,然后相加。



请说出以下代码输出的内容

```js
console.log([] + [])
console.log({} + [])
console.log([] == ![])
console.log(true + false)
```

**答案**

1. 第一行代码

```js
// 输出 "" 空字符串
console.log([] + [])
```

这行代码输出的是空字符串`""`， 包装类型在运算的时候，会先调用`valueOf`方法，如果`valueOf`返回的还是包装类型，那么再调用`toString`方法

```js
// 还是 数组
const val = [].valueOf()
// 数组 toString 默认会将数组各项使用逗号 "," 隔开, 比如 [1,2,3].toSting 变成了"1,2,3",空数组 toString 就是空字符串
const val1 = val.toString() // val1 是空字符串
```

所以上面的代码相当于

```js
console.log("" + "")
```

1. 第二行代码

```js
// 输出 "[object Object]"
console.log({} + [])
```

和第一题道理一样，对象 `{}`隐氏转换成了`[object Object]`,然后与`""`相加

2. 第三行代码

```js
// 输出 true
console.log([] == ![])
复制代码
```

对于`===`, 会严格比较两者的值，但是对于`==`就不一样了

所以对于上面的代码,看下面一步一步分析

```js
// 这个输出 false
console.log(![])
// 套用上面第三条 将 false 转换为 数值
// 这个输出 0
console.log(Number(false))
// 包装类型与 基本类型 == 先将包装类型通过 valueOf toString 转换为基本类型 
// 输出 ""
console.log([].toString())
// 套用第2条， 将空字符串转换为数值、
// 输出 0
console.log(Number(""))
// 所以
console.log(0 == 0)
```
1. 比如 `null == undefined`
2. 如果非`number`与`number`比较，会将其转换为`number`
3. 如果比较的双方中由一方是`boolean`,那么会先将`boolean`转换为`number`

4. 第四行代码

```js
// 输出 1
console.log(true + false)
```

两个基本类型相加，如果其中一方是字符，则将其他的转换为字符相加，否则将类型转换为`Number`,然后相加, `Number(true)` 是`1`, `Number(false)`是`0`, 所以结果是 `1`

[掘金-前端进击者](https://juejin.im/post/6859121743869509646)

补充：
[如风之枫-博客](https://chrislin-jiang.github.io/code-girl/frontend/js/1-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html#js%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)

## JS数据类型转换

### JS中类型转换有哪几种？
在 JS 中类型转换有三种情况，分别是：
- 转换为布尔值
- 转换为数字
- 转换为字符串

### == 和 ===有什么区别？
- ===叫做严格相等，是指：左右两边不仅值要相等，类型也要相等，例如'1'===1的结果是false，因为一边是string，另一边是number。
- ==不像===那样严格，对于一般情况，只要值相等，就返回true，
- ==涉及一些类型转换，它的转换规则如下：
- 首先会判断两者类型是否相同。相同的话就是比大小了
- 类型不相同的话，那么就会进行类型转换
- 会先判断是否在对比 null 和 undefined，是的话就会返回 true
- 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
- 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
- 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断

### 判断 [] == ![] 的结果
- 结果为true
- 解析:
- == 中，左右两边都需要转换为数字然后进行比较。
- []转换为数字为0。
- ![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为true,
- 因此![]为false，进而在转换成数字，变为0。
- 0 == 0 ， 结果为true




## 前端性能优化
<img :src="$withBase('/more/growth/optimization1.jpg')" alt="optimization1.jpg">

从输入URL到页面加载完成中，每一个过程都需要考虑性能优化的方案。

可以大体将其分为：网络层面 和 渲染层面。

### 对于网络层面：
* DNS解析相关
	* 可以通过DNS缓存---减少解析次数
	* DNS预解析---把解析前置---```<link rel = “dns-prefetch” href = “//yuchenkai.cn”>```
* TCP握手
	* 可以通过长连接、预连接
	* 我们前端能做得比较多的是：减少请求次数，减少单次请求花费时间、减少请求的体积
* 请求过程优化---HTTP请求优化
	* 构建工具性能优化---Webpack性能优化、打包、压缩
	* 图片优化---不同业务场景下的图片选型方案
* 减少网络请求---缓存、本地存储
	* 浏览器的缓存机制---强缓存、协商缓存
	* 离线存储技术---cookie、webstorage、indexDB

### 渲染层面
* JS性能方案---加载外部JS
	* async 和 defer 来避免不必要的阻塞
	* ```<script async src="index.js"></script>```
	* ```<script defer src="index.js"></script>```  JS 的加载是异步的，执行是被推迟的
* CSS性能方案
	* 避免使用通配符，只对需要用到的元素进行选择。
	* 关注可以通过继承实现的属性，避免重复匹配重复定义。
	* 少用标签选择器。如果可以，用类选择器替代。
	* 不要画蛇添足，id 和 class 选择器不应该被多余的标签选择器拖后腿。
	* 减少嵌套。
* DOM相关优化
	* 减少重绘与回流
	* 用 ```transform:translate``` 代替```margin-left/margin-top```改变
	* 用 opacity 代替 visibility
	* 不要使用table布局，可能很小的改动会造成整个table 的重新布局
	* 对于 resize、scroll 等进行防抖/节流处理。
* 对DOM查询做缓存
	* 将频繁操作改为一次性操作
	* 避免逐条改变样式，使用类名去合并样式
* 懒加载


【补充】：

* 从输入URL到页面加载完成，发生了什么？
	* DNS解析
	* TCP连接
	* HTTP请求抛出
	* 服务端请求处理、HTTP响应返回
	* 浏览器拿到响应数据后，解析响应内容，渲染页面，展示给用户

* 长连接
	* 长连接可以省去较多的TCP建立和关闭的操作，减少浪费，节约时间；
	* 而从HTTP/1.1起，默认使用长连接，用以保持连接特性。使用长连接的HTTP协议，会在响应头加入这行代码：
	* Connection:keep-alive

## 计算机网络
### TCP三次握手、四次挥手
* [TCP](http://47.98.159.95/my_blog/tcp/001.html)
* [掘金-TCP](https://juejin.im/post/6844904079974465544#heading-40)


## 正则表达式
[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)


## 响应式布局
### 媒体查询
```html
<div id="div0"></div>
```

```css
#div0 {
	width: 100px;
	height: 200px;
}

@media screen and (min-device-width:200px) and (max-device-width:300px) {
	#div0 {
		background-color: greenyellow;
	}
}

@media screen and (min-device-width:300px) and (max-device-width:500px) {
	#div0 {
		background-color: #FFC0CB;
	}
}
```