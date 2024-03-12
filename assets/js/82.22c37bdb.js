(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{552:function(v,_,l){"use strict";l.r(_);var i=l(35),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"浏览器中的页面循环系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的页面循环系统"}},[v._v("#")]),v._v(" 浏览器中的页面循环系统")]),v._v(" "),l("p",[v._v("1.消息队列和事件循环")]),v._v(" "),l("ul",[l("li",[v._v("使用单线程处理安排好的任务，使用单线程顺序处理")])]),v._v(" "),l("p",[v._v("1.2.在线程运行过程中处理新任务")]),v._v(" "),l("ul",[l("li",[v._v("循环机制")]),v._v(" "),l("li",[v._v("事件")])]),v._v(" "),l("p",[v._v("1.3.处理其他线程发送过来的任务")]),v._v(" "),l("ul",[l("li",[v._v("引入消息队列")]),v._v(" "),l("li",[v._v("步骤")]),v._v(" "),l("li",[v._v("添加一个消息队列")]),v._v(" "),l("li",[v._v("IO 线程中产生的新任务添加进消息队列尾部")]),v._v(" "),l("li",[v._v("渲染主线程会循环地从消息队列头部中读取任务，执行任务")])]),v._v(" "),l("p",[v._v("1.4.处理其他进程发送过来的任务")]),v._v(" "),l("ul",[l("li",[v._v("渲染进程专门有一个 IO 线程用来接收其他进程传进来的消息")]),v._v(" "),l("li",[v._v("接收到消息之后，会将这些消息组装成任务发送给渲染主线程")]),v._v(" "),l("li",[v._v("后续的步骤就和前面讲解的“处理其他线程发送的任务”一样")])]),v._v(" "),l("p",[v._v("1.5.消息队列中的任务类型")]),v._v(" "),l("p",[v._v("1.6.如何安全退出")]),v._v(" "),l("ul",[l("li",[v._v("确定要退出当前页面时，页面主线程会设置一个退出标志的变量，在每次执行完一个任务时，判断是否有设置退出标志")]),v._v(" "),l("li",[v._v("如果设置了，那么就直接中断当前的所有任务，退出线程")])]),v._v(" "),l("p",[v._v("1.7.页面使用单线程的缺点")]),v._v(" "),l("ul",[l("li",[v._v("第一个问题是如何处理高优先级的任务")]),v._v(" "),l("li",[v._v("微任务")]),v._v(" "),l("li",[v._v("把消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列")]),v._v(" "),l("li",[v._v("第二个是如何解决单个任务执行时长过久的问题")]),v._v(" "),l("li",[v._v("回调功能")])]),v._v(" "),l("p",[v._v("2.WebAPI-setTimeout")]),v._v(" "),l("ul",[l("li",[v._v("浏览器怎么实现 setTimeout")]),v._v(" "),l("li",[v._v("渲染进程会将该定时器的回调任务添加到延迟队列中")]),v._v(" "),l("li",[v._v("ProcessDelayTask 函数")])]),v._v(" "),l("p",[v._v("2.2.使用 setTimeout 的一些注意事项")]),v._v(" "),l("ol",[l("li",[v._v("如果当前任务执行时间过久，会影响延迟到期定时器任务的执行")]),v._v(" "),l("li",[v._v("如果 setTimeout 存在嵌套调用，那么系统会设置最短时间间隔为 4 毫秒")]),v._v(" "),l("li",[v._v("未激活的页面，setTimeout 执行最小间隔是 1000 毫秒")]),v._v(" "),l("li",[v._v("延时执行时间有最大值")]),v._v(" "),l("li",[v._v("使用 setTimeout 设置的回调函数中的 this 不符合直觉")])]),v._v(" "),l("ul",[l("li",[v._v("问题--如果被 setTimeout 推迟执行的回调函数是某个对象的方法，那么该方法中的 this 关键字将指向全局环境，而不是定义时所在的那个对象")]),v._v(" "),l("li",[v._v("解决")])]),v._v(" "),l("ol",[l("li",[v._v("第一种是将MyObj.showName放在匿名函数中执行")]),v._v(" "),l("li",[v._v("第二种是使用 bind 方法，将 showName 绑定在 MyObj 上面")])]),v._v(" "),l("p",[v._v("3.WebAPI-XMLHttpRequest")]),v._v(" "),l("p",[v._v("3.1.准备知识")]),v._v(" "),l("ul",[l("li",[v._v("回调函数")]),v._v(" "),l("li",[v._v("将一个函数作为参数传递给另外一个函数，那作为参数的这个函数就是回调函数")]),v._v(" "),l("li",[v._v("分类--")])]),v._v(" "),l("ol",[l("li",[v._v("同步回调；\n2.异步回调")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("异步回调是指回调函数在主函数之外执行")])]),v._v(" "),l("li",[l("p",[v._v("一般有两种方式")]),v._v(" "),l("ul",[l("li",[v._v("第一种是把异步函数做成一个任务，添加到信息队列尾部")]),v._v(" "),l("li",[v._v("第二种是把异步函数添加到微任务队列中，这样就可以在当前任务的末尾处执行微任务了")])])]),v._v(" "),l("li",[l("p",[v._v("消息队列和主线程循环机制保证了页面有条不紊地运行")])]),v._v(" "),l("li",[l("p",[v._v("系统调用栈")])])]),v._v(" "),l("p",[v._v("3.2.XMLHttpRequest 运作机制")]),v._v(" "),l("ul",[l("li",[v._v("新建 XMLHttpRequest 请求对象")]),v._v(" "),l("li",[v._v("注册相关事件回调处理函数")]),v._v(" "),l("li",[v._v("打开请求")]),v._v(" "),l("li",[v._v("配置参数")]),v._v(" "),l("li",[v._v("发送请求")])]),v._v(" "),l("p",[v._v("3.3.XMLHttpRequest 使用过程中的“坑”")]),v._v(" "),l("ol",[l("li",[v._v("跨域问题")]),v._v(" "),l("li",[v._v("HTTPS 混合内容的问题")]),v._v(" "),l("li",[v._v("使用 XMLHttpRequest 混合资源失效")])]),v._v(" "),l("p",[v._v("4.宏任务与微任务")]),v._v(" "),l("p",[v._v("4.1.宏任务")]),v._v(" "),l("ul",[l("li",[v._v("在WHATWG 规范中是怎么定义事件循环机制的")]),v._v(" "),l("li",[v._v("消息队列中宏任务的执行过程")]),v._v(" "),l("li",[v._v("先从多个消息队列中选出一个最老的任务，这个任务称为 oldestTask")]),v._v(" "),l("li",[v._v("然后循环系统记录任务开始执行的时间，并把这个 oldestTask 设置为当前正在执行的任务")]),v._v(" "),l("li",[v._v("当任务执行完成之后，删除当前正在执行的任务，并从对应的消息队列中删除掉这个 oldestTask")]),v._v(" "),l("li",[v._v("最后统计执行完成的时长等信息")]),v._v(" "),l("li",[v._v("所以说宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合了，比如后面要介绍的监听 DOM 变化的需求")])]),v._v(" "),l("p",[v._v("4.2.复习")]),v._v(" "),l("ul",[l("li",[v._v("异步回调")]),v._v(" "),l("li",[v._v("第一种是把异步回调函数封装成一个宏任务，添加到消息队列尾部，当循环系统执行到该任务的时候执行回调函数\n"),l("ul",[l("li",[v._v("比如 setTimeout 和 XMLHttpRequest")])])]),v._v(" "),l("li",[v._v("第二种方式的执行时机是在主函数执行结束之后、当前宏任务结束之前执行回调函数，\n"),l("ul",[l("li",[v._v("这通常都是以微任务形式体现的")])])])]),v._v(" "),l("p",[v._v("4.3.微任务")]),v._v(" "),l("ul",[l("li",[v._v("微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前")]),v._v(" "),l("li",[v._v("微任务队列")]),v._v(" "),l("li",[v._v("每个宏任务都关联了一个微任务队列")]),v._v(" "),l("li",[v._v("微任务产生的时机")]),v._v(" "),l("li",[v._v("在现代浏览器里面，产生微任务有两种方式\n"),l("ul",[l("li",[v._v("第一种方式是使用 MutationObserver 监控某个 DOM 节点，然后再通过 JavaScript 来修改这个节点，或者为这个节点添加、删除部分子节点，当 DOM 节点发生变化时，就会产生 DOM 变化记录的微任务")]),v._v(" "),l("li",[v._v("第二种方式是使用 Promise，当调用 Promise.resolve() 或者 Promise.reject() 的时候，也会产生微任务")])])]),v._v(" "),l("li",[v._v("执行微任务队列的时机")]),v._v(" "),l("li",[v._v("WHATWG 把执行微任务的时间点称为检查点\n"),l("ul",[l("li",[v._v("通常情况下，在当前宏任务中的 JavaScript 快执行完成时，也就在 JavaScript 引擎准备退出全局执行上下文并清空调用栈的时候，JavaScript 引擎会检查全局执行上下文中的微任务队列，然后按照顺序执行队列中的微任务")]),v._v(" "),l("li",[v._v("当然除了在退出全局执行上下文式这个检查点之外，还有其他的检查点，不过不是太重要，这里就不做介绍了")])])]),v._v(" "),l("li",[v._v("如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到微任务队列中，V8 引擎一直循环执行微任务队列中的任务，直到队列为空才算执行结束")]),v._v(" "),l("li",[v._v("也就是说在执行微任务过程中产生的新的微任务并不会推迟到下个宏任务中执行，而是在当前的宏任务中继续执行")]),v._v(" "),l("li",[v._v("监听 DOM 变化方法演变")]),v._v(" "),l("li",[v._v("轮询检测")]),v._v(" "),l("li",[v._v("Mutation Event\n"),l("ul",[l("li",[v._v("Mutation Event 采用了观察者的设计模式，当 DOM 有变动时就会立刻触发相应的事件，这种方式属于同步回调")])])]),v._v(" "),l("li",[v._v("MutationObserver\n"),l("ul",[l("li",[v._v("将响应函数改成异步调用，可以不用在每次 DOM 变化都触发异步调用，而是等多次 DOM 变化后，一次触发异步调用")]),v._v(" "),l("li",[v._v("并且还会使用一个数据结构来记录这期间所有的 DOM 变化。这样即使频繁地操纵 DOM，也不会对性能造成太大的影响")]),v._v(" "),l("li",[v._v("综上所述\n"),l("ul",[l("li",[v._v("MutationObserver 采用了“异步 + 微任务”的策略")]),v._v(" "),l("li",[v._v("通过异步操作解决了同步操作的性能问题")]),v._v(" "),l("li",[v._v("通过微任务解决了实时性的问题")])])])])])]),v._v(" "),l("img",{attrs:{src:v.$withBase("/frontend/browser/13-1-浏览器中的页面循环系统.jpg"),alt:"13-1-浏览器中的页面循环系统.jpg"}}),v._v(" "),l("h2",{attrs:{id:"浏览器中的-event-loop"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的-event-loop"}},[v._v("#")]),v._v(" 浏览器中的 Event Loop")]),v._v(" "),l("p",[v._v("event loop它的执行顺序：")]),v._v(" "),l("ol",[l("li",[v._v("一开始整个脚本作为一个宏任务执行")]),v._v(" "),l("li",[v._v("执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列")]),v._v(" "),l("li",[v._v("当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完")]),v._v(" "),l("li",[v._v("执行浏览器UI线程的渲染工作")]),v._v(" "),l("li",[v._v("检查是否有Web Worker任务，有则执行")]),v._v(" "),l("li",[v._v("执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空")])]),v._v(" "),l("ul",[l("li",[v._v("微任务包括：MutationObserver、Promise.then()或catch()、Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程、Node独有的process.nextTick。")]),v._v(" "),l("li",[v._v("宏任务包括：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering。")])]),v._v(" "),l("div",{staticClass:"custom-block warning"},[l("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),l("p",[v._v("在所有任务开始的时候，由于宏任务中包括了script，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务(例如setTimeout)将被放到下一轮宏任务中来执行。")]),v._v(" "),l("p",[v._v("这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);