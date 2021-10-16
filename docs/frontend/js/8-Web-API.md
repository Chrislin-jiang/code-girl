---
autoGroup-4: Web-API
title: 8.Web-API
---

## 知识点梳理

*   BOM 操作
*   DOM 操作
*   事件绑定
*   Ajax
*   存储

* * *

## BOM

BOM - Browser Object Model（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址。

*   `navigator`
*   `screen`
*   `location`
*   `history`

这些对象就是一堆非常简单粗暴的 API，没任何技术含量，讲起来一点意思都没有，大家去 MDN 或者 w3school 这种网站一查就都明白了。面试的时候，面试官基本不会出太多这方面的题目，因为只要基础知识过关了，这些 API 即便你记不住，上网一查也都知道了。下面列举一下常用功能的代码示例

获取浏览器特性（即俗称的`UA`）然后识别客户端，例如判断是不是 Chrome 浏览器

```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)

```

获取屏幕的宽度和高度

```js
console.log(screen.width)
console.log(screen.height)

```

获取网址、协议、path、参数、hash 等

```js
// 例如当前网址是 https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.href)  // https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.protocol) // https:
console.log(location.pathname) // /timeline/frontend
console.log(location.search) // ?a=10&b=10
console.log(location.hash) // #some

```

另外，还有调用浏览器的前进、后退功能等

```js
history.back()
history.forward()

```

* * *

## DOM

> 题目：DOM 和 HTML 区别和联系

### 什么是 DOM
DOM - Document Object Model - 文档对象模型
讲 DOM 先从 HTML 讲起，讲 HTML 先从 XML 讲起。XML 是一种可扩展的标记语言，所谓可扩展就是它可以描述任何结构化的数据，它是一棵树！

```js
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
  <other>
    <a></a>
    <b></b>
  </other>
</note>

```

HTML 是一个有既定标签标准的 XML 格式，标签的名字、层级关系和属性，都被标准化（否则浏览器无法解析）。同样，它也是一棵树。

```js
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
        <p>this is p</p>
    </div>
</body>
</html>

```

我们开发完的 HTML 代码会保存到一个文档中（一般以`.html`或者`.htm`结尾），文档放在服务器上，浏览器请求服务器，这个文档被返回。因此，最终浏览器拿到的是一个文档而已，文档的内容就是 HTML 格式的代码。

但是浏览器要把这个文档中的 HTML 按照标准渲染成一个页面，此时浏览器就需要将这堆代码处理成自己能理解的东西，也得处理成 JS 能理解的东西，因为还得允许 JS 修改页面内容呢。

基于以上需求，浏览器就需要把 HTML 转变成 DOM，HTML 是一棵树，DOM 也是一棵树。对 DOM 的理解，可以暂时先抛开浏览器的内部因素，先从 JS 着手，即可以认为 DOM 就是 JS 能识别的 HTML 结构，一个普通的 JS 对象或者数组。

<img :src="$withBase('/frontend/js/8-DOM图示.png')" alt="8-DOM图示">

### 获取 DOM 节点

最常用的 DOM API 就是获取节点，其中常用的获取方法如下面代码示例：

```js
// 通过 id 获取
var div1 = document.getElementById('div1') // 元素

// 通过 tagname 获取
var divList = document.getElementsByTagName('div')  // 集合
console.log(divList.length)
console.log(divList[0])

// 通过 class 获取
var containerList = document.getElementsByClassName('container') // 集合

// 通过 CSS 选择器获取
var pList = document.querySelectorAll('p') // 集合

```

> 题目：property 和 attribute 的区别是什么？

### property

DOM 节点就是一个 JS 对象，它符合之前讲述的对象的特征 —— 可扩展属性，因为 DOM 节点本质上也是一个 JS 对象。因此，如下代码所示，`p`可以有`style`属性，有`className` `nodeName` `nodeType`属性。注意，**这些都是 JS 范畴的属性，符合 JS 语法标准的**。

```js
var pList = document.querySelectorAll('p')
var p = pList[0]
console.log(p.style.width)  // 获取样式
p.style.width = '100px'  // 修改样式
console.log(p.className)  // 获取 class
p.className = 'p1'  // 修改 class

// 获取 nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)

```

### attribute

property 的获取和修改，是直接改变 JS 对象，而 attribute 是直接改变 HTML 的属性，两种有很大的区别。attribute 就是对 HTML 属性的 get 和 set，和 DOM 节点的 JS 范畴的 property 没有关系。

```js
var pList = document.querySelectorAll('p')
var p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'juejin')
p.getAttribute('style')
p.setAttribute('style', 'font-size:30px;')

```

而且，get 和 set attribute 时，还会触发 DOM 的查询或者重绘、重排，频繁操作会影响页面性能。

> 题目：DOM 操作的基本 API 有哪些？

### DOM 树操作

新增节点

```js
var div1 = document.getElementById('div1')

// 添加新节点
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1) // 添加新创建的元素

// 移动已有节点。注意，这里是“移动”，并不是拷贝
var p2 = document.getElementById('p2')
div1.appendChild(p2)

```

获取父元素

```js
var div1 = document.getElementById('div1')
var parent = div1.parentElement

```

获取子元素

```js
var div1 = document.getElementById('div1')
var child = div1.childNodes

```

删除节点

```js
var div1 = document.getElementById('div1')
var child = div1.childNodes
div1.removeChild(child[0])

```

还有其他操作的API，例如获取前一个节点、获取后一个节点等，但是面试过程中经常考到的就是上面几个。

* * *

## 事件

### 事件基础
#### DOM事件的级别
```
DOM0: element.onclick=function(){}
DOM2: element.addEventListener('click',function(){},false)(true表示在捕获阶段触发，false表示在冒泡阶段触发，默认是false)；
DOM3: element.addEventListener('keyup',function(){},false)(true表示在捕获阶段触发，false表示在冒泡阶段触发，默认是false)，增加了很多事件类型；
```
#### DOM事件模型
事件捕获：从上往下找到目标元素

事件冒泡：从目标元素往上查找
#### DOM事件流
浏览器为当前页面和用户做交互的过程中发生的过程，一个完整的事件流分三个阶段。
* 事件捕获
* 目标阶段
* 事件冒泡
事件通过捕获到达目标元素，这个时候就是目标阶段，第三个阶段就是从目标元素上传到window对象。
#### 描述DOM事件捕获的具体流程
```
    window 
--> document 
--> html(用js表示html节点的方法：document.documentElement;) 
--> body 
--> ··· 
--> 目标元素
```

```html
<body>
    <div id="ev">
        <style>
            #ev {
                width: 300px;
                height: 100px;
                background: #f00;
                color: #fff;
                text-align: center;
                line-height: 100px;
            }
        </style>
        目标元素
    </div>
    <script type="text/javascript">
        var ev = document.getElementById("ev");
        ev.addEventListener('click', function() {
            console.log("ev capture");
        }, true);
        window.addEventListener('click', function() {
            console.log("window capture");
        }, true);
        document.addEventListener('click', function() {
            console.log("document capture");
        }, true);
        document.documentElement.addEventListener('click', function() {
            console.log("html capture");
        }, true);
        document.body.addEventListener('click', function() {
            console.log("body capture");
        }, true);
    </script>
</body>
```

::: details 打印结果是
window capture
document capture
html capture
body capture
ev capture
:::

#### Event对象的常见应用
* ```event.preventDeault()```：阻止默认行为；
* ```event.stopPropation()```：阻止事件冒泡；
* ```event.stopImmeidiatePropagation()```：阻止其他事件（若一个按钮绑定了两个或多个事件：事件a、事件b、……。当下场景想要实现点击按钮的时候只执行事件a，其他事件不执行，则在事件a的函数中加上```event.stopImmeidiatePropagation()```就能实现）；
* ```event.currentTarget```：当前所被绑定的事件；
* ```event.target```：当前被点击的元素（早期的ie版本不支持，早期ie用```event.srcElement```）；
#### 自定义事件（模拟事件）
自定义事件和自定义触发事件的过程(只能指定事件名，不能给事件加数据)
```js
// eve就当作普通的事件
var eve = new Event("custome");
// ev就是普通的DOM节点
ev.addEventListener("custome",function(){
    console.log("custome");
},false);
// 此时是自动触发事件，通常和其他事件结合使用
ev.dispatchEvent(eve);
// 延时5秒后触发
setTimeout(function() {
    ev.dispatchEvent(eve);
}, 5000);
```

CustomeEvent(除了指定事件名，还能给事件加一个Object，用来传递自定义参数)；
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<div id="myDiv">
		    div with custom event
		</div>
		<script>
			const data = { name: 'jackkk',  } // 创建event对象的初始化数据
			const cusEvent = new CustomEvent('any', {
			    bubbles: true,
			    detail: data
			})
			/* // 监听
			document.getElementById('myDiv').addEventListener('any', (data)=>{
				console.log('your custom event trigger the process method', data)
			})
			// 触发any 事件
			document.getElementById('myDiv').dispatchEvent(cusEvent); */
			const evv = document.getElementById('myDiv');
			// 监听
			evv.addEventListener('any', (data)=>{
				console.log('your custom event trigger the process method'+data, data);
			})
			// 触发any 事件
			evv.dispatchEvent(cusEvent); 
		</script>
	</body>
</html>
```

### 事件绑定

普通的事件绑定写法如下：

```js
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    // event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})

```

为了编写简单的事件绑定，可以编写通用的事件绑定函数。这里虽然比较简单，但是会随着后文的讲解，来继续完善和丰富这个函数。

```js
// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}
var a = document.getElementById('link1')
// 写起来更加简单了
bindEvent(a, 'click', function(e) {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})

```

最后，**如果面试被问到 IE 低版本兼容性问题，我劝你果断放弃这份工作机会**。现在互联网流量都在 App 上， IE 占比越来越少，再去为 IE 浪费青春不值得，要尽量去做 App 相关的工作。

> 题目：什么是事件冒泡？

### 事件冒泡

```html
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>

```

对于以上 HTML 代码结构，要求点击`p1`时候进入激活状态，点击其他任何`<p>`都取消激活状态，如何实现？代码如下，注意看注释：

```js
var body = document.body
bindEvent(body, 'click', function (e) {
    // 所有 p 的点击都会冒泡到 body 上，因为 DOM 结构中 body 是 p 的上级节点，事件会沿着 DOM 树向上冒泡
    alert('取消')
})

var p1 = document.getElementById('p1')
bindEvent(p1, 'click', function (e) {
    e.stopPropagation() // 阻止冒泡
    alert('激活')
})


```

如果我们在`p1` `div1` `body`中都绑定了事件，它是会根据 DOM 的结构来冒泡，从下到上挨个执行的。但是我们使用`e.stopPropagation()`就可以阻止冒泡

> 题目：如何使用事件代理？有何好处？

### 事件代理

事件委托也叫事件代理，《Javascript高级程序设计》中写道：事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。


我们设定一种场景，如下代码，一个`<div>`中包含了若干个`<a>`，而且还能继续增加。那如何快捷方便地为所有`<a>`绑定事件呢？

```html
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>

```

这里就会用到事件代理。我们要监听`<a>`的事件，但要把具体的事件绑定到`<div>`上，然后看事件的触发点是不是`<a>`。

```js
var div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    // e.target 可以监听到触发点击事件的元素是哪一个
    var target = e.target
    if (e.nodeName === 'A') {
        // 点击的是 <a> 元素
        alert(target.innerHTML)
    }
})

```

我们现在完善一下之前写的通用事件绑定函数，加上事件代理。

```js
function bindEvent(elem, type, selector, fn) {
    // 这样处理，可接收两种调用方式 bindEvent(div1, 'click', 'a', function () {...}) 和 bindEvent(div1, 'click', function () {...}) 这两种
    if (fn == null) {
        fn = selector
        selector = null
    }

    // 绑定事件
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            // 有 selector 说明需要做事件代理
            // 获取触发时间的元素，即 e.target
            target = e.target
            // 看是否符合 selector 这个条件
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            // 无 selector ，说明不需要事件代理
            fn(e)
        }
    })
}

```

然后这样使用，简单很多。

```js
// 使用代理，bindEvent 多一个 'a' 参数
var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHTML)
})

// 不使用代理
var a = document.getElementById('a1')
bindEvent(div1, 'click', function (e) {
    console.log(a.innerHTML)
})

```

**事件代理的好处：**
* 只绑定一次事件，无频繁访问DOM，性能较高
* 当有新DOM生成时，无需重复绑定事件，代码清晰简洁

**应用场景：**
* 需要给动态添加的标签绑定事件
* 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上

### 补充阅读
* [面试整理之DOM事件阶段](https://www.cnblogs.com/LIUYANZUO/p/5332583.html)
* [事件冒泡、事件捕获、DOM2事件流和事件委托、DOM事件中Event对象](https://blog.csdn.net/u014465934/article/details/87915995)

## Ajax
### AJAX简介
1. 什么是AJAX
* AJAX = Asynchronous JavaScript and XML（**异步的 JavaScript 和 XML**）。
* AJAX 不是新的编程语言，而是一种使用现有标准的新方法。
* AJAX **是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。**

2. 为什么使用AJAX？
* Ajax 的优点：
	* 通过异步模式，提升了用户体验；
	* 优化了浏览器和服务器之间的传输，减少了不必要的数据往返，减少了带宽占用；
	* Ajax引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载。
* Ajax 的缺点：
	* 不支持浏览器 back 按钮；
	* 安全问题，Ajax 暴露了与服务器交互的细节；
	* 对搜索引擎的支持比较弱

### XMLHttpRequest 对象
**什么是XMLHttpRequest**
* 是一种支持异步请求的技术，是 Ajax 的核心。

**XMLHttpRequest的作用**
* 可以向服务器提出请求并处理响应，而不阻塞用户；
* 可以在页面加载以后进行页面的局部更新

**如何使用Ajax**
要完整实现一个Ajax异步调用和局部更新，通常需要以下几个步骤：
* 步骤1：创建 XMLHttpRequest 对象，也就是创建一个异步调用对象；
* 步骤2：创建一个新的 HTTP 请求，并指定该HTTP请求的方法、URL；
* 步骤3：设置响应 HTTP 请求状态变化的函数。
* 步骤4：发送 HTTP 请求
* 步骤5：获取异步调用返回的数据
* 步骤6：使用 JavaScript 和 DOM 实现局部刷新

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script>
			function loadXMLDoc() {
				// 1.先创建一个XMLHttpRequest 对象
				var xhr;
				if (window.XMLHttpRequest) {
					// code for IE7+, Firefox, Chrome, Opera, Safari
					xhr = new XMLHttpRequest();
				} else {
					// code for IE6, IE5
					xhr = new ActiveXObject(Microsoft.XMLHTTP);
				}
				// 3.设定响应 HTTP 变化的函数
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4 && xhr.status === 200) {
						// 5.获取异步调用返回的数据
						// 6.数据渲染
						document.getElementById("myDiv").innerHTML = xhr.responseText;
					}
				}
		
				// 2.创建一个新的HTTP请求，并设定请求方法和URL
				xhr.open("GET", "ajax-replace.txt", true);
				// 4.发送
				xhr.send();
			}
		</script>
	</head>
	<body>
		<div id="myDiv">
			<h2>让我们来尝试一下Ajax吧！！！</h2>
		</div>
		<button type="button" onclick="loadXMLDoc()">click me</button>
	</body>
</html>
```

同目录下 ajax-replace.txt 文件内容
```
可以看见我吗？？？
```

<img :src="$withBase('/frontend/js/8-ajax1.png')" alt="8-ajax1">

<img :src="$withBase('/frontend/js/8-ajax2.png')" alt="8-ajax2">

jQuery
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript" src="../js/jquery-3.4.1.js"></script>
		<script>
			$(document).ready(function(){
				$("#btn").click(function(){
					htmlobj = $.ajax({
						url: "ajax-replace.txt",
						type: "GET", //默认
						async: true,
					});
					$("#myDiv").html(htmlobj.responseText);
				});
			})
	
		</script>
	</head>
	<body>
		<div id="myDiv">
			<h2>让我们来尝试一下Ajax吧！！！</h2>
		</div>
		<button id="btn" type="button">click me</button>
	</body>
</html>
```

补充阅读：
* [W3school-AJAX 教程](https://www.w3school.com.cn/ajax/index.asp)

服务器响应
* 如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

属性描述
* responseText 获得字符串形式的响应数据。
* responseXML 获得 XML 形式的响应数据。

### 状态码说明

上述代码中，有两处状态码需要说明。`xhr.readyState`是浏览器判断请求过程中各个阶段的，`xhr.status`是 HTTP 协议中规定的不同结果的返回状态说明。

`xhr.readyState`的状态码说明：

*   0 -代理被创建，但尚未调用 `open()` 方法。
*   1 -`open()` 方法已经被调用。
*   2 -`send()` 方法已经被调用，并且头部和状态已经可获得。
*   3 -下载中， `responseText` 属性已经包含部分数据。
*   4 -下载操作已完成

> 题目：HTTP 协议中，response 的状态码，常见的有哪些？

`xhr.status`即 HTTP 状态码，有 `2xx` `3xx` `4xx` `5xx` 这几种，比较常用的有以下几种：

*   `200` 正常
*   `3xx`
    *   `301` 永久重定向。如`http://xxx.com`这个 GET 请求（最后没有`/`），就会被`301`到`http://xxx.com/`（最后是`/`）
    *   `302` 临时重定向。临时的，不是永久的
    *   `304` 资源找到但是不符合请求条件，不会返回任何主体。如发送 GET 请求时，head 中有`If-Modified-Since: xxx`（要求返回更新时间是`xxx`时间之后的资源），如果此时服务器 端资源未更新，则会返回`304`，即不符合要求
*   `404` 找不到资源
*   `5xx` 服务器端出错了

看完要明白，为何上述代码中要同时满足`xhr.readyState == 4`和`xhr.status == 200`。

### 补充
如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
```js
xmlhttp.open("GET","test1.txt",true);
xmlhttp.send();
```
<img :src="$withBase('/frontend/js/8-ajax3.png')" alt="8-ajax3">

**GET 还是 POST**
* 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：
* 无法使用缓存文件（更新服务器上的文件或数据库）
* 向服务器发送大量数据（POST 没有数据量限制）
* 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

注意事项：
* open方法不会向服务器发送真正请求，它相当于初始化请求并准备向同一域中使用相同协议和端口的URL发送请求，否则会因为安全原因报错；
* url - 服务器上的文件
* open() 方法的 url 参数是服务器上文件的地址：

```xmlhttp.open("GET","ajax_test.asp",true);```
该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）。

**异步 - True 或 False？**
AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
```xmlhttp.open("GET","ajax_test.asp",true);```

对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。AJAX 出现之前，这可能会引起应用程序挂起或停止。

通过 AJAX，JavaScript 无需等待服务器的响应，而是：
* 在等待服务器响应时执行其他脚本
* 当响应就绪后对响应进行处理

**同步和异步的区别：**
* 同步：提交请求 -> 等待服务器处理 -> 处理完毕返回 【这个期间客户端浏览器不能干任何事】 alert
* 异步：请求通过事件触发 -> 服务器处理【这时浏览器仍然可以做其他事情】-> 处理完毕

【补充】js处理异步的方式
* 回调函数
* 事件监听
* 发布/订阅
* promise对象
* Generator
* async

### Fetch API

目前已经有一个获取 HTTP 请求更加方便的 API：`Fetch`，通过`Fetch`提供的`fetch()`这个全局函数方法可以很简单地发起异步请求，并且支持`Promise`的回调。但是 Fetch API 是比较新的 API，具体使用的时候还需要查查 [caniuse](https://caniuse.com/)，看下其浏览器兼容情况。

看一个简单的例子：

```js
fetch('some/api/data.json', {
  method:'POST', //请求类型 GET、POST
  headers:{}, // 请求的头信息，形式为 Headers 对象或 ByteString
  body:{}, //请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get 或head 方法中不能包含 body）
  mode:'', //请求的模式，是否跨域等，如 cors、 no-cors 或 same-origin
  credentials:'', //cookie 的跨域策略，如 omit、same-origin 或 include
  cache:'', //请求的 cache 模式: default、no-store、reload、no-cache、 force-cache 或 only-if-cached
}).then(function(response) { ... });

```

`Fetch` 支持`headers`定义，通过`headers`自定义可以方便地实现多种请求方法（ PUT、GET、POST 等）、请求头（包括跨域）和`cache`策略等；除此之外还支持 response（返回数据）多种类型，比如支持二进制文件、字符串和`formData`等。

## 跨域

* [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
* [什么是跨域 & 跨域的3种解决方案](https://www.cnblogs.com/n031/p/11828797.html)

什么是跨域？
概念：只要协议、域名、端口有任何一个不同，都被当作是不同的域。

但是 HTML 中几个标签能逃避过同源策略——`<script src="xxx">`、`<img src="xxxx"/>`、`<link href="xxxx">`，这三个标签的`src/href`可以加载其他域的资源，不受同源策略限制。

因此，这使得这三个标签可以做一些特殊的事情。

*   `<img>`可以做打点统计，因为统计方并不一定是同域的，在讲解 JS 基础知识异步的时候有过代码示例。除了能跨域之外，`<img>`几乎没有浏览器兼容问题，它是一个非常古老的标签。
*   `<script>`和`<link>`可以使用 CDN，CDN 基本都是其他域的链接。
*   另外`<script>`还可以实现 JSONP，能获取其他域接口的信息，接下来马上讲解。

但是请注意，所有的跨域请求方式，最终都需要信息提供方来做出相应的支持和改动，也就是要经过信息提供方的同意才行，否则接收方是无法得到它们的信息的，浏览器是不允许的。

如何解决跨域？
* 跨域资源共享 CORS
* 使用jsonp（常用）
* 代理

### 解决跨域 - CORS

这是需要在服务器端设置的，作为前端工程师我们不用详细掌握，但是要知道有这么个解决方案。而且，现在推崇的跨域解决方案是这一种，比 JSONP 简单许多。

```js
// CORS 跨域资源共享
response.setHeader("Access-Control-Allow-Origin", "http://m.juejin.com/");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*"
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");

```

* * *


### 解决跨域 - JSONP
(JSON with Padding) 是 json 的一种"使用模式"，

是应用JSON的一种新方法，是一种跨域解决方案

可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为同源策略。

同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。

jsonp由两部分组成：
* 回调函数和数据。
	* 回调函数是当响应到来时应该在页面中调用的函数，
	* 而数据就是传入回调函数中的json数据

jsonp的原理
* 直接用XMLHttpRequest请求不同域上的数据时，是不可以的。
* 但是，在页面上引入不同域上的js脚本文件却是可以的，
* jsonp正是利用这个特性来实现的

jsonp的原理
* 通过script标签引入js文件    [比如script便签的src属性  href]
* js文件载入成功后
* 执行我们在url参数中指定的函数

这其实就是JSONP的简单实现模式，或者说是JSONP的原型：创建一个回调函数，然后在远程服务上调用这个函数并且将JSON 数据形式作为参数传递，完成回调。

将JSON数据填充进回调函数，这就是JSONP的JSON+Padding的含义。

虽然XMLHttpRequest对象遵循同源政策，但是script标签不一样，它可以通过 src 填上目标地址从而发出 GET 请求，实现跨域请求并拿到响应。这也就是 JSONP 的原理，接下来我们就来封装一个 JSONP:

```js
const jsonp = ({ url, params, callbackName }) => {
  const generateURL = () => {
    let dataStr = '';
    for(let key in params) {
      dataStr += `${key}=${params[key]}&`;
    }
    dataStr += `callback=${callbackName}`;
    return `${url}?${dataStr}`;
  };
  return new Promise((resolve, reject) => {
    // 初始化回调函数名称
	let callbackFunctionName = 'lin' + Math.floor(Math.random() * 100000);
    callbackName = callbackName || callbackFunctionName;
    // 创建 script 元素并加入到当前文档中
    let scriptEle = document.createElement('script');
    scriptEle.src = generateURL();
    document.body.appendChild(scriptEle);
    // 绑定到 window 上，为了后面调用
    window[callbackName] = (data) => {
      resolve(data);
      // script 执行完了，成为无用元素，需要清除
      document.body.removeChild(scriptEle);
    }
  });
}
```

当然在服务端也会有响应的操作, 以 express 为例:
```js
let express = require('express')
let app = express()
app.get('/', function(req, res) {
  let { a, b, callback } = req.query
  console.log(a); // 1
  console.log(b); // 2
  // 注意哦，返回给script标签，浏览器直接把这部分字符串执行
  res.end(`${callback}('数据包')`);
})
app.listen(3000);
```

前端这样简单地调用一下就好了:
```js
jsonp({
  url: 'http://localhost:3000',
  params: { 
    a: 1,
    b: 2
  }
}).then(data => {
  // 拿到数据进行处理
  console.log(data); // 数据包
})
```
和CORS相比，JSONP 最大的优势在于兼容性好，IE 低版本不能使用 CORS 但可以使用 JSONP，缺点也很明显，请求方法单一，只支持 GET 请求。

### 推荐学习
* [Chrislinlin-前端常见跨域解决方案](https://www.cnblogs.com/chrislinlin/p/12984425.html)
* 补充：[三元-JSONP](http://47.98.159.95/my_blog/http/014.html#jsonp)
* [珠峰架构课-九种跨域方案详解](https://ke.qq.com/webcourse/index.html#cid=367589&term_id=100437143&taid=2972117369199589&vid=5285890788498535883)

### 具体笔记

## 存储

> 题目：cookie 和 localStorage 有何区别？

### cookie

cookie 本身不是用来做服务器端存储的，它是设计用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。

使用起来也非常简单，`document.cookie = ....`即可。

但是 cookie 有它致命的缺点：

*   存储量太小，只有 4KB
*   所有 HTTP 请求都带着，会影响获取资源的效率
*   API 简单，需要封装才能用

### localStorage 和 sessionStorage

后来，HTML5 标准就带来了`sessionStorage`和`localStorage`，先拿`localStorage`来说，它是专门为了浏览器端缓存而设计的。其优点有：

*   存储量增大到 5MB
*   不会带到 HTTP 请求中
*   API 适用于数据存储 `localStorage.setItem(key, value)` `localStorage.getItem(key)`

`sessionStorage`的区别就在于它是根据 session 过去时间而实现，而`localStorage`会永久有效，应用场景不同。例如，一些需要及时失效的重要信息放在`sessionStorage`中，一些不重要但是不经常设置的信息，放在`localStorage`中。

另外告诉大家一个小技巧，针对`localStorage.setItem`，使用时尽量加入到`try-catch`中，某些浏览器是禁用这个 API 的，要注意。

* * *

## 小结

本小节部分内容选自[Web 前端面试指南与高频考题解析-3](https://juejin.im/book/5a8f9ddcf265da4e9f6fb959)

总结了 W3C 标准中 Web-API 部分，面试中常考的知识点，这些也是日常开发中最常用的 API 和知识。