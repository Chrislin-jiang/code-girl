(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{565:function(s,t,a){"use strict";a.r(t);var n=a(35),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"js-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-数据类型"}},[s._v("#")]),s._v(" JS 数据类型")]),s._v(" "),a("h3",{attrs:{id:"原始数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[s._v("#")]),s._v(" 原始数据类型")]),s._v(" "),a("p",[s._v("在 JS 中，存在着 6 种原始数据类型，分别是：")]),s._v(" "),a("ul",[a("li",[s._v("number")]),s._v(" "),a("li",[s._v("string")]),s._v(" "),a("li",[s._v("boolean")]),s._v(" "),a("li",[s._v("null")]),s._v(" "),a("li",[s._v("undefined")]),s._v(" "),a("li",[s._v("symbol")])]),s._v(" "),a("h3",{attrs:{id:"引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[s._v("#")]),s._v(" 引用数据类型:")]),s._v(" "),a("p",[s._v("对象Object")]),s._v(" "),a("ul",[a("li",[s._v("包含普通对象-Object，数组对象-Array，正则对象-RegExp，日期对象-Date，数学函数-Math，函数对象-Function")])]),s._v(" "),a("h3",{attrs:{id:"null是对象吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null是对象吗"}},[s._v("#")]),s._v(" null是对象吗")]),s._v(" "),a("ul",[a("li",[s._v("回答: null不是对象。")]),s._v(" "),a("li",[s._v("解释: 虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。\n"),a("ul",[a("li",[s._v("在 JS 的最初版本中，为了性能，使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。")])])])]),s._v(" "),a("h2",{attrs:{id:"类型判断的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型判断的方法"}},[s._v("#")]),s._v(" 类型判断的方法")]),s._v(" "),a("h3",{attrs:{id:"typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[s._v("#")]),s._v(" typeof")]),s._v(" "),a("p",[a("code",[s._v("typeof xxx")]),s._v("得到的值有以下几种类型："),a("code",[s._v("undefined")]),s._v(" "),a("code",[s._v("boolean")]),s._v(" "),a("code",[s._v("number")]),s._v(" "),a("code",[s._v("string")]),s._v(" "),a("code",[s._v("object")]),s._v(" "),a("code",[s._v("function")]),s._v("、"),a("code",[s._v("symbol")])]),s._v(" "),a("p",[s._v("这里需要注意几点：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("typeof null")]),s._v("结果是"),a("code",[s._v("object")]),s._v(" ，实际这是"),a("code",[s._v("typeof")]),s._v("的一个bug，null是原始值，非引用类型")]),s._v(" "),a("li",[a("code",[s._v("typeof [1, 2]")]),s._v("结果是"),a("code",[s._v("object")]),s._v("，结果中没有"),a("code",[s._v("array")]),s._v("这一项，引用类型除了"),a("code",[s._v("function")]),s._v("其他的全部都是"),a("code",[s._v("object")])]),s._v(" "),a("li",[a("code",[s._v("typeof Symbol()")]),s._v(" 用"),a("code",[s._v("typeof")]),s._v("获取"),a("code",[s._v("symbol")]),s._v("类型的值得到的是"),a("code",[s._v("symbol")]),s._v("，这是 ES6 新增的知识点")])]),s._v(" "),a("p",[s._v("对于原始类型来说，除了 null 都可以调用typeof显示正确的类型。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'number'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'undefined'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'boolean'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'symbol'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v('但对于引用数据类型，除了函数之外，都会显示"object"。')]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'object'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'object'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'function'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("因此采用 "),a("code",[s._v("typeof")]),s._v(" 判断对象数据类型是不合适的")]),s._v(" "),a("h3",{attrs:{id:"instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[s._v("#")]),s._v(" instanceof")]),s._v(" "),a("p",[a("code",[s._v("instanceof")]),s._v(" 运算符用于检测某个构造函数的 "),a("code",[s._v("prototype")]),s._v(" 属性是否出现在某个实例对象的原型链上。")]),s._v(" "),a("ul",[a("li",[s._v("语法")]),s._v(" "),a("li",[a("code",[s._v("object instanceof constructor")])]),s._v(" "),a("li",[s._v("参数")]),s._v(" "),a("li",[s._v("object 某个实例对象")]),s._v(" "),a("li",[s._v("constructor 某个构造函数")])]),s._v(" "),a("h2",{attrs:{id:"原始类型-vs-引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型-vs-引用类型"}},[s._v("#")]),s._v(" 原始类型 vs 引用类型")]),s._v(" "),a("h3",{attrs:{id:"对象类型和原始类型的不同之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象类型和原始类型的不同之处"}},[s._v("#")]),s._v(" 对象类型和原始类型的不同之处")]),s._v(" "),a("ul",[a("li",[s._v("原始类型存储的是值，")]),s._v(" "),a("li",[s._v("对象类型存储的是地址（指针）。")]),s._v(" "),a("li",[s._v("当创建一个对象类型的时候，将它分配到堆空间里面，分配后该对象会有一个在“堆”中的地址，然后再将该数据的地址写\n进 该对象 的变量值。")]),s._v(" "),a("li",[s._v("如果将变量赋值给另外一个变量时，复制的是原本变量的地址（指针），当进行数据修改的时候，就会修改存放在地址（指针）上的值，也就导致了两个变量的值都发生了改变。")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/frontend/js/11-原始类型-堆空间.jpg"),alt:"11-原始类型-堆空间"}}),s._v(" "),a("h4",{attrs:{id:"具体分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体分析"}},[s._v("#")]),s._v(" 具体分析")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'old'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value: new")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("通过代码执行，会发现：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("a")]),s._v("的值没有发生改变")]),s._v(" "),a("li",[s._v("而"),a("code",[s._v("b")]),s._v("的值发生了改变")])]),s._v(" "),a("p",[s._v("这就是因为"),a("code",[s._v("Number")]),s._v("类型的"),a("code",[s._v("a")]),s._v("是按值传递的，而"),a("code",[s._v("Object")]),s._v("类型的"),a("code",[s._v("b")]),s._v("是按共享传递的。")]),s._v(" "),a("p",[s._v("JS 中这种设计的原因是：按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。按共享传递的类型，是复制其引用，而不是整个复制其值（C 语言中的指针），保证过大的对象等不会因为不停复制内容而造成内存的浪费。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 说出下面运行的结果，并解释原因。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v("\n  person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" person\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cherry'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 结果:\np1：{name: “cherry”, age: 26}\np2：{name: “lin”, age: 18} */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("原因:")]),s._v(" "),a("ul",[a("li",[s._v("在函数传参的时候传递的是对象在堆中的内存地址值，")]),s._v(" "),a("li",[s._v("test 函数中的实参 person 是 p1 对象的内存地址，通过调用 "),a("code",[s._v("person.age = 26")]),s._v(" 确实改变了 p1 的值，")]),s._v(" "),a("li",[s._v("但随后 person 变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋给了 p2 。")])]),s._v(" "),a("h2",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[s._v("#")]),s._v(" 面试题")]),s._v(" "),a("h3",{attrs:{id:"_0-1-0-2为什么不等于0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2为什么不等于0-3"}},[s._v("#")]),s._v(" 0.1+0.2为什么不等于0.3？")]),s._v(" "),a("ul",[a("li",[s._v("0.1和0.2在转换成二进制后会无限循环，")]),s._v(" "),a("li",[s._v("由于标准位数的限制 后面 多余的位数会被截掉，此时就已经出现了精度的损失，")]),s._v(" "),a("li",[s._v("相加后 再将其转换为 十进制 就会变成0.30000000000000004。")])]),s._v(" "),a("h3",{attrs:{id:"_1-tostring-为什么可以调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tostring-为什么可以调用"}},[s._v("#")]),s._v(" '1'.toString()为什么可以调用？")]),s._v(" "),a("p",[s._v("其实在这个语句运行的过程中做了这样几件事情：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("第一步: 创建Object类实例。")]),s._v(" "),a("li",[s._v("注意为什么不是String ？ 由于Symbol和BigInt的出现，对它们调用new都会报错，目前ES6规范也不建议用new来创建基本类型的包装类。")]),s._v(" "),a("li",[s._v("第二步: 调用实例方法。")]),s._v(" "),a("li",[s._v("第三步: 执行完方法立即销毁这个实例。")])]),s._v(" "),a("p",[s._v("【回答】")]),s._v(" "),a("ul",[a("li",[s._v("在这种情况下，'1' 已经不是原始类型了，而是被强制转换成了 String 类型也就是对象类型，所以可以调用 toString 函数。")])]),s._v(" "),a("p",[s._v("【什么是基本包装类型】")]),s._v(" "),a("ul",[a("li",[s._v("三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。")]),s._v(" "),a("li",[s._v("所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。")]),s._v(" "),a("li",[s._v("这三个原生对象可以把原始类型的值变成（包装成）对象。")])]),s._v(" "),a("h2",{attrs:{id:"js数据类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型转换"}},[s._v("#")]),s._v(" JS数据类型转换")]),s._v(" "),a("h3",{attrs:{id:"js中类型转换有哪几种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中类型转换有哪几种"}},[s._v("#")]),s._v(" JS中类型转换有哪几种？")]),s._v(" "),a("p",[s._v("在 JS 中类型转换有三种情况，分别是：")]),s._v(" "),a("ul",[a("li",[s._v("转换为布尔值")]),s._v(" "),a("li",[s._v("转换为数字")]),s._v(" "),a("li",[s._v("转换为字符串")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/frontend/js/12-类型转换.jpg"),alt:"类型转换"}}),s._v(" "),a("h3",{attrs:{id:"和-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-有什么区别"}},[s._v("#")]),s._v(" == 和 ===有什么区别？")]),s._v(" "),a("ul",[a("li",[s._v("===叫做严格相等，是指：左右两边不仅值要相等，类型也要相等，例如'1'===1的结果是false，因为一边是string，另一边是number。")]),s._v(" "),a("li",[s._v("==不像===那样严格，对于一般情况，只要值相等，就返回true，")]),s._v(" "),a("li",[s._v("==涉及一些类型转换，它的转换规则如下：")]),s._v(" "),a("li",[s._v("首先会判断两者类型是否相同。相同的话就是比大小了")]),s._v(" "),a("li",[s._v("类型不相同的话，那么就会进行类型转换")]),s._v(" "),a("li",[s._v("会先判断是否在对比 null 和 undefined，是的话就会返回 true")]),s._v(" "),a("li",[s._v("判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number")]),s._v(" "),a("li",[s._v("判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断")]),s._v(" "),a("li",[s._v("判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/frontend/js/13-两等.jpg"),alt:"类型转换"}}),s._v(" "),a("h3",{attrs:{id:"判断-的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断-的结果"}},[s._v("#")]),s._v(" 判断 [] == ![] 的结果")]),s._v(" "),a("ul",[a("li",[s._v("结果为true")]),s._v(" "),a("li",[s._v("解析:")]),s._v(" "),a("li",[s._v("== 中，左右两边都需要转换为数字然后进行比较。")]),s._v(" "),a("li",[s._v("[]转换为数字为0。")]),s._v(" "),a("li",[s._v("![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为true,")]),s._v(" "),a("li",[s._v("因此![]为false，进而在转换成数字，变为0。")]),s._v(" "),a("li",[s._v("0 == 0 ， 结果为true")])]),s._v(" "),a("h3",{attrs:{id:"对象转原始类型是根据什么流程运行的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象转原始类型是根据什么流程运行的"}},[s._v("#")]),s._v(" 对象转原始类型是根据什么流程运行的？")]),s._v(" "),a("p",[s._v("对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：")]),s._v(" "),a("ol",[a("li",[s._v("如果Symbol.toPrimitive()方法，优先调用再返回")]),s._v(" "),a("li",[s._v("调用valueOf()，如果转换为原始类型，则返回")]),s._v(" "),a("li",[s._v("调用toString()，如果转换为原始类型，则返回")]),s._v(" "),a("li",[s._v("如果都没有返回原始类型，会报错")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("toPrimitive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出7")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"如何让if-a-1-a-2-条件成立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让if-a-1-a-2-条件成立"}},[s._v("#")]),s._v(" 如何让if(a == 1 && a == 2)条件成立？")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tvalue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);