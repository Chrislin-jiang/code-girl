---
autoGroup-2: CSS 面试题
title: 面试题
---

## CSS 面试题
### CSS画圆有哪些方式
[CSS画圆](https://www.cnblogs.com/zzzeto/p/12289658.html)
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			div {
				width: 100px;
				height: 100px;
				text-align: center;
				line-height: 100px;
				margin: 50px auto;
				background-color: peachpuff;
			}

			.circle1 {
				border-radius: 50%;
			}

			.circle2 {
				clip-path: circle(50%);
			}

			.circle3 {
				background-image: radial-gradient(circle, orange, orange 66%, transparent 66%);
			}

		
		</style>
	</head>
	<body>
		<!-- https://www.cnblogs.com/zzzeto/p/12289658.html -->
		<div class="square">square</div>
		<div class="circle1">circle1</div>
		<div class="circle2">circle2</div>
		<div class="circle3">circle3</div>
		<svg viewBox="0 0 80 80" width="80" height="80">
			<circle class="circle" cx="40" cy="40" r="38" />
		</svg>
		
	</body>
</html>
```

补充：
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			div {
				width: 100px;
				height: 100px;
				text-align: center;
				line-height: 100px;
				margin: 50px auto;
				background-color: peachpuff;
			}
			
			.semi-circle {
				border-radius: 100px 100px 0 0;
				height: 50px;
			}
			
			.sector {
				border-radius: 100px 0 0;
			}
			
			.arc {
				border-radius: 100px 0;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				transform: rotate(45deg);
			}
			
			.triangle {
				border: 50px solid green;
				width: 0;
				height: 0;
				border-top-color: peachpuff;
				border-right-color: papayawhip;
				border-bottom-color: peachpuff;
				border-left-color: papayawhip;
			}
			
			.arrow {
				background: none;
				/*为了清除前面div设置的背景颜色*/
				border: 50px solid peachpuff;
				width: 0;
				height: 0;
				border-color: peachpuff transparent transparent transparent;
			}
			
			/*圆角矩形*/
			.rectangle {
				width: 200px;
				border-radius: 15px;
				position: relative;
			}
			
			/*小三角*/
			.rectangle::before {
				content: "";
				width: 0;
				height: 0;
				border: 15px solid peachpuff;
				border-color: peachpuff transparent transparent transparent;
				position: absolute;
				bottom: -30px;
				left: 40px;
			}
		</style>
	</head>
	<body>
		<div class="semi-circle">半圆</div>
		<div class="sector">扇形</div>
		<div class="arc">弧形</div>
		<div class="triangle"></div>
		<div class="arrow"></div>
		<div class="rectangle">疑问框</div>
	</body>
</html>
```


### 如何知道某个dom元素是否在当前可视窗口呢？ 
[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<style type="text/css">
		.box {
			width: 100%;
			height: 100px;
			background: pink;
			margin-bottom: 10px;
			text-align: center;
			color: #fff;
			line-height: 100px;
			font-family: microsoft yahei;
			font-size: 10px;

		}
	</style>
	<body>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
	</body>

	<script type="text/javascript">
		var box = document.getElementsByClassName('box');
		
		document.addEventListener('scroll', function() {
		
			//滚动条高度+视窗高度 = 可见区域底部高度
			var visibleBottom = window.scrollY + document.documentElement.clientHeight;
			//可见区域顶部高度
			var visibleTop = window.scrollY;
		
			for (var i = 0; i < box.length; i++) {
				var centerY = box[i].offsetTop + (box[i].offsetHeight / 2);
				if (centerY > visibleTop && centerY < visibleBottom) {
					box[i].innerHTML = `第${i}区域可见`
					box[i].setAttribute("class", 'box animate')
					console.log('第' + i + '个区域可见');
				} else {
					box[i].innerHTML = '';
					box[i].setAttribute("class", 'box')
					console.log('第' + i + '个区域不可见');
				}
			}
		})
		
		/* 
		//判断一个元素是否在可视区域内
		function isInVisibleArea(elem) {
			if (!elem || !elem.getBoundingClientRect) return false;
		
			var rect = elem.getBoundingClientRect();
		
			if (rect.top < window.innerHeight && rect.bottom > 0 &&
				rect.left < window.innerWidth && rect.right > 0) {
				return true;
			} else {
				return false;
			}
		} 
		 */
	</script>
</html>
```

### 原生 js 获取 scrollTop
1. 各浏览器下 scrollTop 的差异 
* IE6/7/8： 
	* 对于没有 doctype 声明的页面里可以使用 ```document.body.scrollTop``` 来获取 ```scrollTop``` 高度
	* 对于有 doctype 声明的页面则可以使用 ```document.documentElement.scrollTop```
* Safari: 
	* safari 比较特别，有自己获取 scrollTop 的函数: ```window.pageYOffset```
* Firefox: 
	* 火狐等等相对标准些的浏览器就省心多了，直接用 ```document.documentElement.scrollTop```
2. 获取 scrollTop值 
完美的获取 scrollTop 赋值短语:
```js
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
```

[原生 js 获取 scrollTop](https://www.cnblogs.com/vali/p/8986535.html)


### CSS 定位详解
[阮一峰-CSS 定位详解](http://www.ruanyifeng.com/blog/2019/11/css-position.html)

### 重绘与回流
[掘金-重绘与回流](https://juejin.im/post/6844903569087266823)

简单总结一下：
* 会引起元素位置变化的就会reflow，比如：窗口大小改变、字体大小改变、以及元素位置改变，都会引起周围的元素改变他们以前的位置；
* 不会引起位置变化的，只是在以前的位置进行改变背景颜色等，只会repaint；

如何避免引起重绘或者回流
* CSS
	* 避免使用 table 布局。
	* 尽可能在 DOM 树的最末端改变 class。
	* 避免设置多层内联样式。
	* 将动画效果应用到 positio n属性为 absolute 或 fixed 的元素上。
	* 避免使用 CSS 表达式（例如：calc()）。

* JavaScript
	* 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。
	* 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。
	* 也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。
	* 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
	* 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
