---
autoGroup-1: JS-基础
title: 4.this
---

首先明确，作用域链和 this 是两套不同的系统，它们之间基本没太多联系

极客时间-《浏览器的工作原理与实践》-[浏览器中的 JavaScript 执行机制]

**---11.this：从JavaScript执行上下文的视角讲清楚this**

<img :src="$withBase('/frontend/js/41-this-李兵.png')" alt="41-this-李兵.png">


**《你不知道的JavaScript》(上卷) 中对 this 的相关介绍：**

<img :src="$withBase('/frontend/js/42-this-你不知道的JavaScript.png')" alt="42-this-你不知道的JavaScript.png">

## 分类
1. 全局执行上下文中的 this，指向 window 对象
2. 函数执行上下文中的 this，
* 通过函数的 call/apply/bind 方法设置，this 指向 call/apply/bind 方法中的第一个参数
* 通过对象调用方法设置，this 指向对象本身
* 通过构造函数中设置，this 指向 new 的实例对象
3. eval 中的 this

## this 的设计缺陷以及应对方案
1. 嵌套函数中的 this 不会从外层函数中继承
* 在函数中声明一个变量 self 用来保存 this
* 使用 ES6 中的箭头函数，这是因为 ES6 中的箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 this 取决于它的外部函数

2. 普通函数中的 this 默认指向全局对象 window
* 如果要让函数执行上下文中的 this 指向某个对象，最好的方式是通过 call 方法来显示调用。
* 通过设置 JavaScript 的“严格模式”，在严格模式下，默认执行一个函数，其函数的执行上下文中的 this 值是 undefined


## 判断this 

可以参考 yck《前端面试手册》中的建议：

<img :src="$withBase('/frontend/js/43-this-1.png')" alt="43-this-1">

## 小结

推荐练习：
[再来40道this面试题酸爽继续(1.2w字用手整理)](https://juejin.im/post/6844904083707396109)

练习题得重复看几次：
* 3.2
* 3.3
* 3.4
* 4.2
* 4.3
* 7.3
* 8.3
* 8.4

::: tip 箭头函数部分总结
7.箭头函数部分
* 如果箭头函数外面是一个定义在window下的字面量对象，则箭头函数的this指向window；--> 7.6
* 如果箭头函数外面是一个非箭头函数包裹着，箭头函数的this就是函数部分的this？？？ --> 7.5
* 7.3


OK👌，来总结一下箭头函数需要注意的点吧：
* 它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时
* 字面量创建的对象，作用域是window，如果里面有箭头函数属性的话，this指向的是window
* 构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的this是指向新建的对象的，因此this指向这个对象。
* 箭头函数的this是无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。

优点
* 箭头函数写代码拥有更加简洁的语法(当然也有人认为这是缺点)
* this由外层作用域决定，所以在某些场合我们不需要写类似const that = this这样的代码

避免使用的场景

根据箭头函数的特性，所以我们应该避免在以下四种场景中使用它：
1. 使用箭头函数定义对象的方法
```js
let obj = {
    value: 'LinDaiDai',
    getValue: () => console.log(this.value)
}
obj.getValue() // undefined
```

2. 定义原型方法
```js
function Foo (value) {
    this.value = value
}
Foo.prototype.getValue = () => console.log(this.value)

const foo1 = new Foo(1)
foo1.getValue() // undefined
```

3. 构造函数使用箭头函数
```js
const Foo = (value) => {
    this.value = value;
}
const foo1 = new Foo(1)
// 事实上直接就报错了 Uncaught TypeError: Foo is not a constructor
console.log(foo1);
```

4. 作为事件的回调函数
```js
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});
```
[掘金-LinDaiDai-this](https://juejin.im/post/6844904083707396109)

:::