[TOC]
#  知识整理 

***
### 格式


### css  12.09
- opacity  透明度  `opacity:1`
- `position:fixed`  
    生成绝对定位的元素，相对于浏览器窗口进行
- `left: 50%`  
    是以左上角为原点，故不处于中心位置
- `transform: translateX(-50%)`
    作用是，往上（x轴）,左（y轴）移动自身长宽的 50%，以使其居于中心位置。 
- `align-items:center`
    居中对齐弹性盒的各项 div 元素
-  `flex:1`  
    让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容：
-  `background-size: cover`
    把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。 
-   `justify-content: center` 
    居中对齐 


- 字体  `font-family: aaa` 定义字体的类名
- round 平铺
- stretch 拉伸
- 居中 `:auto`
- `translate()`函数是css3的新特性.在不知道自身宽高的情况下，可以利用它来进行水平垂直居中.。
- `background`
    ```
    background:url('./ ') no reapt;  //地址 不重复
    background-size:80px 60px;      // 指定背景图大小
    background-size:cover           // 设置cover之后会跟着容器大小走

    background-img:27 round        //添加背景图片
    background
    ```
- 边框 `border`
    - `border-radius` 圆角 
        - border-radius: 15px 50px 30px 5px:   四个值 四个边角
        - border-top-left-radius	    //定义了左上角的弧度
        - border-top-right-radius	    //定义了右上角的弧度
        - border-bottom-right-radius	//定义了右下角的弧度
        - border-bottom-left-radius	    //定义了左下角的弧度
    - `box-shadow: 10px 10px 5px #888888` //盒阴影  添加阴影
    - `border-image:url(border.png) 30 30 round` //边界图片   设置所有边框图像 ;
- 模糊图片(高斯模糊)、滤镜 `filter:blur(1px)`
- 动画
    - `transform:rotateZ(120deg)`   // 类似于平面转  XYZ轴
    - `transform-origin:bottom`     // 往上缩   top bottom 上下
- 文字阴影     `box-shadow:1px 1px 1px #000` //水平x 垂直y 模糊半径 颜色

- `background-size`
    ```
    background: url('./0.jpg') no-repeat; 

        /如果写一个值是按照宽来走，高就自适应   
    background-size:50px auto;  

        //一个是设置宽一个是设置高
    background-size:200px 200px; 

        //填满整个区域*/
    background-size:cover; 

        //任意填满一边就够了
    background-size:contain; 
    ```
  
***
***
> #### css选择器
- !important  权重:     
- style             1000
- 类选择器           100     #

- class选择器         10            .   

- 伪类

- targName            1
```
通用选择器(*)、子选择器(>)、相邻选择器(+)、同胞选择器(~)  ->   权重值为0
```


***
#### css3新特性
- 选择器
    - 属性选择器
        ```
            <input type="class">
            <input type="class2">

        input[class2]
        ```
        ```
            <div class="a">
            <div class="a2">
            <div class="a-2">

            //或者  class要么是a 要么是a-开头
            div[class|="a"]
        ```
    - 选择父元素的某个元素
        - `E:nth-child(n)`选择父元素的`第N个`子元素，N是整数（1,2,3）、关键字（even、odd）、公式（2n+1），n的初始值为1.
        - `E:nth-last-child(n)`选择父元素的`倒数第n个`子元素
        - `E:nth-of-type(n)`选择父元素内`具有指定类型`的`第n个`元素
        - `E:nth-last-of-type(n)`选择父元素内`具有指定类型`的`倒数第n个`元素
        - `E:first-of-type`选择父元素内`具有指定类型`的`第一个`元素
        - `E:last-of-type`选择父元素内`具有指定类型`的`最后一个`元素
        - `E:only-child`选择父元素只包含一个子元素
        - `E:only-of-type`选择父元素只包含一个同类型的子元素
        - `E:empty`选择没有子元素的元素，并且该元素没有任何文本节点
    - `::before`和`::after`，用来插入额外内容的位置，生成的内容不会成为DOM的一部分，


***
#### 音频
```
 <button id="btn1">播放</button>
 <button id="btn2">暂停</button>
 <button id="btn3">音量</button>
 <button id="btn4">调进度</button>

 <div id="bar">
     <div id="bar2"></div>
 </div>
 
 <audio id="au" src="需要你自己配置MP3" controls></audio>
<script>


```

***
***
***
### 布局  12.09/10
- 移动:
    - flex布局
    - rem布局
    - 响应式布局
    - 百分比布局
    - table布局

***
***
#### 响应式布局 
    (非常繁琐)  次于主流
    一个项目要写若干css去适配
    根据不同设备的尺寸 开发的可以适应各种尺寸的页面的常用方法

`@media screen and (max-width:980px){}`
- @media    空格 
- screen    支持什么设备
    - all   所有设备
    - screen    用于电脑屏幕,平板电脑,智能手机等
    - print     用于打印机和打印预览  
- and       并且 空格
- (max-width:980px) 什么样的条件
    - max-width  屏幕最大(≤)的时候就干什么事情
    - min-width  屏幕最小(≥)的时候就干什么事情
- {} 里   满足了这个条件要干嘛

- 样式多了以后就可以使用link media 的方式去写代码





***
#### flex布局    12.0
    弹性布局 容器
    操作父级盒子控制子级   `fdisplay:flex`
    一般来说给父级添加属性操作子级,所有子元素成为容器成员
    景深 基准点 设置子级3d
- 当父级写了flex之后就等同于左浮动(所有的子级),之前的浮动就没有效果了
ustify-content属性：定义项目在主轴上的对齐方式。
- 默认方向是左对齐 `justify-content:flex-start`;
- 可以设置右对齐`justify-content:flex-end`
- 居中对齐`justify-content:center`
- 第一个和最后一个分别顶着父级的边,中间平均`justify-content:space-betwee    'wn`
- 平均分配剩余的空间`justify-content:space-eenly`
- 间距平均分配`justify-content:space-evenly`
flex-wrap属性：定义换行情况
- 强制换行  (flax布局默认是不换行的  默认**一行**显示) `flex-wrap:wrap`
- 两行颠倒`flex-wrap:wrap-reverse`
flex-direction属性：决定主轴的方向（即项目的排列方向）
- 默认的主轴为x轴`flex-direction: row` x轴
- x轴并翻转 `flex-direction:row-reverse`
- Y轴`flex-direction:column`
- Y轴并翻转`flex-direction:column-reverse`
align-items属性：定义在交叉轴上的对齐方式.默认值为auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch
- 默认坐上对齐`align-items:flex-start`
- 底部对齐 `align-items:flex-end`
- 文本对齐`align-items:baseline`
- 拉扯 没有设置高度的会被拉扯`align-items:stretch`


- 基准点:    `transform-origin:bottom`
- 景深   `perspective:500px`
- 多行  `align-content`
- 复合样式:
    ```
        flow (下面2个的结合体)
            -> 
                flex-wrap;
                flex-direction

        flex-flow:row wrap;
    ```

- flex:给子级分配剩余部分的空间占比
- order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0.
- align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖
- align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch。

***
#### rem布局
    样式可以自动按照比例获取了
    随着屏幕大小的改变 页面也会跟着改变  //rem 的目的

- em 按照父级或者自身字体的大小来设置单位
- rem => (root em)   
    - 单位 根据html 的字体大小来设置单位
    - root -> 根 -> HTML
    - html 的字体大小就是1rem
- 手动通过媒体查询设置font-size,所有的单位都走rem就行


***
***
***
### 原生
-  forEach
-  Date
```
let nowtime = +new Date
let nowtime = Date.now()
让时间变成字符串 时间戳  不再显示一团报时
```

***
#### 字符串  string  
    插入到引号中的任何字符。可以使用单引号或双引号
    可以存储一系列字符，如 "John Doe"。
- `string.trim()`  用于去除字符串两端的空格
```
{
    width:{}
}
变成   {}  
json[key]={}
```

****
#### 正则
-     <input type="text" placeholder="请输入纯数字" pattern="\d+" title="请输入纯数字"/>

***
***
***
### ES6

- let const

- 解构赋值  分解js中对象的结构      封装ajax 的get post 请求时用到

- 字符串操作

- 函数操作

- 数组新增方法
    foreach findindex  find map reduce  filter  every some
- 浅拷贝深拷贝
    浅拷贝  `assign`
        Object.assgin(object1,object2)

        consolel.og({...obj1,...obj2})

    深拷贝
        JSON。parse(JSON.stringify)
    
- class类操作
    class关键字 可以创建各种类
- 集和操作 set map
    `set` 一堆东西的集和 类似于数组 里面不能有重复的内容 
    `map` 键值对的集和  类似于对象 


***
***
#### 解构赋值


***
***
***
### 找变量
1. 自执行函数中  不变化，为函数本身
```
let a = 10;
(function a(){
    a = 20;
    console.log(a) 
})()

// a = ƒ a(){
        a = 20;
        console.log(a)
    }
```

***
***
***
### this
- `use strict`  严格模式
- 函数名+括号 this指向window
- 在`事件函数`中，事件触发是谁，this就是谁
```
    document.onclick = function(){
        console.log(this);  //document
    }
```

> - `函数直接调用`，默认this为window
```
    function fn(){
        console.log(this);  //window
    }
    fn();  //window.fn();
```

> - `方法`（函数前面有主的都叫方法）,this就是.前面的主（箭头函数例外）
```
    let obj = {
        fn:function (){
            console.log(this);
        }
    }
    obj.fn(); //obj
```

> - `箭头函数`，它的this为函数定义时的上下文作用域
```
    document.onclick = function(){
        let fn = ()=>{
            console.log(this);
        }
        fn();
    }
```

***
***
***
### json
-  {"":""}'   
 `json` => 长的像对象和数组的字符串, 本质是字符串  ( 一种数据结构)



    json 转 对象    JSON.parse()        '{}' -> {}
        // parse必须为标准格式的json格式   '{"":""}'   才能成功转化

    对象 转 json    json.stringify()   {} -> '{}'
        //副作用是 函数和undefined 的会被过滤掉

    '[]' JSON -> []数组
    '{}' JOSON-> {}对象

- 布操作 简单的用数组      层次深的用对象



***


### 转化
- 对象转&拼接 console.log(''+ obj)




***
 ### 事件
- `ev.target`  事件源 源头


***
#### onload  12.07
    当静态文件加载完后执行事件中的代码         
- 弊端: 当静态资源比较大,加载慢的时候, 会影响用户体验


```
window.onload= function(){

}

```


***
#### `ready`  12.07
    当dom加载完触发,只管标签,不管静态资源(适合网页开发)

- 原生的ready 高版本浏览器使用  DOMContentLoaded
- 低版本Ie浏览器中是通过onreadystatechange事件去监听的,监听doScrolli的('left')


```
//ready事件:
// 写法1
$(function(){
    alert(1)
})

//写法2
$(document).ready(function(){

})
```



***
#### 发布订阅  12-07
    模拟  element.addEventListener()
    xx.addEventListener() 某元素下的一个方法 , 可以调用
```
xx.fn('click',function(){})    订阅的过程
xx.fn('click',function(){})  给某个元素的事件订阅一个事件函数
```
- ` 订阅  `一个对象
    - 给某个元素的事件订阅一个事件函数 , 
    - 订阅池就要成为一个列表(能够储存多个值的对象) [ ], 这个对象存储的是同一个元素下的不同事件
    - 在同一个事件下,又有事件池,他为数组[] 
    - 这个列表在每次订阅事件和事件函数的时候,在订阅池中存储某个相同事件，在相同事件的事件池中添加不同的事件函数
    - 存储某个不同的函数
      - xx.fn('click',function(){}) 订阅的过程 

-  `发布 `  某个专有事件下的数组
    - 当事件触发后,发布之前订阅的所有事件函数(循环订阅池,依次调用)
    - { click:[function(){},function()] }

- `解绑 `
    - { removeEvent }

```
// 订阅
class 0{
    constructor(){
        this.subscrbe = {}; //大的订阅池
    }
    add(obj,name,fn){
        this.subscribe
    }
}


// 订阅器 存储器
addEvent(btn,'click',function(){
    alert(1)
}) 

addEvent(btn,'click',function(){
    alert(2)
})

// 订阅 
function addEvent(obj,evName,fn){

}


// 发布  先看obj下有没有订阅池和事件池
function publish(obj,evName){
    // 订阅池      事件池
    if(!obj.subscribe || !obj.subscribe[evName]){
        return null
    }

    obj.subscribe[evName].forEach(item=> item.call(obj) );
}

// 解绑  有订阅池事件池才解绑
//解绑事件池中的事件函数
//把要解除绑定的函数挑出来删除
function removeEvent(obj,evName,fn){
    if(!obj.subscribe || !obj.subscribe[evName]){
        return null;
    }
    for(let i=0;i< obj.subscribe[evName].length ; i++){
        if(obj.subscribe[evName][i] === fn){
            obj.subscribe[evName].splice(i,1);
            break;
        }
    }
}

document.onclick = function(ev){
    if(ev.target.tagName === 'BUTTON'){
        console.log(1)
        publish(btn,'click');
    }
}

```
- 先看看obj有没有订阅池,    { }
    - 如果之前就已经有了,那么就直接在以前的订阅
    - 如果没有,要创建一个订阅池,然后在这个新的订阅池中添加事件和函数
- 往事件池中添加事件函数    [ ]
    - 先看订阅池中有没有这个事件,
        - 有就用之前的事件池再次追加事件函数,
        - 如果没有,就在订阅池中添加这个事件,并且在这个事件池中添加事件
    - 有了事件池之后,把传入的函数push到事件池中即可
- 发布
- 先看obj下有没有订阅池和事件池
- 循环事件池,把事件池中的每个函数依次调用即可

***
***
#### 移动端事件 12-07
- 移动端三大事件
    1. `ontouchstart`  手指按下
    2. `ontouchmove`  手指移动
    3. `ontochend`  手指抬起
    
- 他们比鼠标事件更加快捷,大大提升了用户体验

- 一个目标上按下,移动,抬起是一套事件,按下在哪个元素身上,当抬起的时候就算不在按下的元素身上,触发抬起也是按下的哪个元素,   所以不用嵌套绑定事件函数
- 也就是说,在某个元素上按下之后,在屏幕任意位置move或者end 都会触发

- 在移动端开发时尽量少用DOM 0 ,都用DOM 2
    - 因为DOM 0 在有些浏览器上是不正常的,但是真机上是ok的 ,所以为了方便开发.移动端的事件都用DOM 2绑定


***
##### 点透
- `移动端的300毫秒问题`: 
    - 手机浏览器认为用户在3000毫秒之内如果在某个坐标点上连续触发了两次判定为双击,浏览器就会在某个坐标点上监听,这个时候,如果上层元素消失或者偏移,正好下层元素是一个焦点元素(a,input....),这个时候就会触发焦点行为,
    - 解决方案:
        - 让下层元素不是焦点元素  a->div、span....   
        - `a href = "可以让搜索引擎优化"`
        - 超过300ms之后再让上层元素消失或者偏移
`
```
box.ontouchend = function(){

}
```

***
##### touches  
-  `touches` : 当前位于屏幕上的所有手指触摸点的一个列表
    - 作用于整个屏幕,表示当前根州的触摸操作的Touch对象的数组,点击触摸时有多少个Touch对象 
-  `targetTouches` : 当前元素对象上的所有触摸点的列表
    - 作用于一开始start的元素,  特定于事件目标的Touch对象的数组 - 点击触摸时有多少个Touch对象
-  `changeTouches` : 涉及当前事件的触摸点的列表 
    - 一上来触摸的元素,并且不会累计手指数量 ,  表示自上次触摸以来发生了什么改变的Touch对象的数组 -   发生改变的   当前是多少touch对象, 即相当于touchmove





***
***
***
###  DOM 
- `toggle`      

- `.classList`

-  `.classList.toggle`


-  `parentNode`

-  `DMContentLoad` 

***
***
***
### jq
    1.  $.  工具方法
    2.  $()  功能方法

***
***
#### 工具方法
-  `$.each  循环`
    ```
    let ary = [1,2,3,4,5]
    $.each(ary,function(i,item){
        console.log(i,item)
    })
    ```
-  `$.ajax()`  拿数据  请求数据

    ``` 
    $.ajax({
        url:'./1.json',   // 后台给的地址 './1.json'
        success:function(d){
            console.log(d)
        }
    })

    // 结构
    $.ajax({
        method:'post',
        url:'http://www.baidu.com/s',
        data:{

        },       
        dataType:'jsonp',
        success:function(data){
            console.log(data) 
            data.foreach(item=>{
                let $li = $('<li>'+ietm.q+'</li>');
                $('#ul').append($li);
            })
        }
    })

    // 原生方法
    fetch('./1.json').then().then()
    ```

- ` $.extend()`  浅拷贝  插件的扩展/写插件小功能
    ```
    //obj   
    let obj = {
        name:''
    };
    let obj2 = $.extend({},obj);
    cosole.log(obj2 == obj);  // false  浅拷贝 赋值不是赋址

    // ary  
    let ary = [1,2,3,4];
    let ary2 = $.extend(true,[],ary);   // 加个true  就代表深度克隆
    ary2[2].push(5);
    console.log(ary2)

    ```
    - 插件的扩展  
        $.extend
        `$.fn.extend`
        ```
        $.extend({
            //扩展的方法 extend 里面写一个对象，对象的属性就是添加的方法名，值就是函数
            trimLeft:function(){    
                console.log(this);  //12345
            };
            trimLeft:function(){

            }
        })
        $.trimLeft('12345')

    ```



***
***
#### 获取
-  `height()`
    `clinetHeight`
    `offsetHeight`
    `lineHeight`
    `innerHeight()`
    `scrollHeight()` 内容撑开高度
-  `$('#div').sublings('') `   #div 的同胞元素
-  `$('#div').find('apan')`   #div 的后代中所有span元素


***
***
***
### 同步异步
    js 单线程  从上往下解读代码  会走事件调用  可同步可异步

- `事件调用` => 把任务交给了事件引擎 ( 所有的js事件都是异步的)
- `事件堆列` => 时间任务放到堆列里
- `事件循环` => 当主线程空闲的时候执行压入的代码,执行完后再从异步队列中压入异步代码到主线程中的过程叫事件循环

> `同步`:
- 代码从上往下执行,如果一个地方卡住了,下面代码就不执行了
- 利于开发维护, 上面执行完才执行下面
>` 异步`:
- 代码从上往下执行,如果一个地方卡住了,不会阻止代码向下执行
- 定时器,所有的事件,promise

```
    主线程(先)                   异步队列(微任务 宏任务)

主线程 -> 异步队列 ->微任务(promise) -> 宏任务(定时器) -> 宏任务中的微任务
```
- `顺序` (promise中 then 中的才是微任务, 其中的为同步,promise中的为主线程 )
    - `先执行主线程的代码`
    - 主线程中有异步代码(定时器,promise或者事件)时,会把异步代码放到异步队列中,条件成立时,   再把异步代码压入主线程中执行
    - 有微任务先执行微任务,执行完后执行宏任务
    - 如果宏任务中还有微任务,先执行宏任务,再执行宏任务中的微任务

***

- 请求数据方面
    - 只有异步才能够进行设置超时和监听超时
    - 如果是异步才需要使用onreadystatechange去监听
#### promise
- ` promise`  => 承诺 => 
 解决异步编程顺序问题,让异步的代码同步执行
    - 异步的操作是不容易进行维护开发的,会干扰判断同步才利于维护
    - 如果用回调函数的方法去解决,那么会出现回调地狱
    - 从上往下的阅读方式,方便开发人员调试和判断
    - 没有promise也能进行开发,不过维护起来麻烦点

-  `介绍下promise`
    - 是异步编程的一种解决方法,代码有同步编程、异步编程, 同步编程是...(),异步编程是...()
    - 这就牵扯到了异步队列和主线程,代码执行时,会先执行主线程的代码...()
    - 是es6 的一个语法,内部有三个状态:pending(进行中)、fulfiled(已成功)、rejected(已失败)   , 状态改变只能进行一次,然后就状态就会冻结在这个状态,只能是从pendig->fulfiled或者   pending->rejected,
    - promise会返回一个对象,对象会加状态pending,resolved,rejected ,失败进catch(状态 rejected),成功进then(resolved), finally 是不管层高还是失败都会进的回调函数
    - promise.all ...()
    - promise.race ...()
    - promise.resolve ...()

- ` promise 的结构`
```

let p = new Promise((resove,reject)=>{
    //放入异步代码,把异步代码的结果放到resolve或者reject身上,方便进the或者catch中
    resolve()
});
p.then(function(data)){
    console.log(data)
}


new Promise(function(resolve,reject){
    //主线程
    // 异步代码执行完,通过异步代码的结果去调用resolve或者reject
    // 异步代码有可能报错或者错误,如果报错或者错误就执行reject
    // 一般都是resolve(放异步的结果)
    resolve()
});
//他有一个返回值,返回值是promise对象,这个对象有then方法

// .then() 中只能查函数 不是会穿透
// 第一个then的返回值,是第二个then 的参数
then(成功函数,失败函数)   // then中包含两个函数 (成功后的回调,失败后的可以不用写,直接在.then函数之后.catch就可以)
// 第一个then
//      成功函数里面的参数就是异步的结果
// 第二个then
//      第一个then 的返回值

// 如果代码有可能会报错,下面的代码是不会执行的,如果使用try,catch
// 那么try中的代码报错会进catch,报错是不会影响后面代码执行的

try{

}catch(){

}
// 报错的情况下使用,防止该代码报错,使用try,catch包一下就不会

```


***
***
##### `promise 中的 .then`
- then方法里有两个参数,一个成功resolve,一个reject

- .then里,再return也不会报错,相当于return了一个{}
- trow 是抛出异常  说明代码错误 进catch
- .then 和 .catch 的返回结果没有返回值时,返回结果undefined
- .then 和 .catch 的返回值不能是promise本身, 要不会造成死循环

- promise resolve 的值会穿透 
   - .then()中只能插函数 不是函数就穿透,穿透到下一项函数,没有的话直接穿透数字
   - 如果是函数,最后log接收的是最后一个函数的返回值




***
#### promise.all
- 将多个Promise实例，包装成一个新的Promise实例
- 数组中的异步操作(所有的promise实例)都要成功才返回成功结果
- 只要有一个进入reject p的状态就变成了reject
```
const p = PRomise.all([p1,p2,p3])
```

***
#### promise.race
- 将多个Promise实例，包装成一个新的Promise实例
- 在数组中只要有一个异步成功就返回这次成功的结果，
```
let p = Promise.race([myFetch('2.json'),myFetch('1.json')])
``` 


***
#### promise.resolve  
- 成功的promise 实例
- 现有对象转换成promise对象需要用到promise.resolve

```
promise.resole('foo')
        ⬇
new Promise(resolve => resolve('foo'))
```

***
#### promise.prototype.finally()
finally  方法 用于 指定不管Promise对象最后状态如何，都会执行的操作
```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```


***
***
***
###  动画


***
***
#### transform:            transform:rotate(10deg)  transform:()
-  :translate(x轴,y轴)  就好比说 left top  
    - translateX translateY  沿着X或者Y轴

- :rotate()  转角度
    -  单位deg    ratate(10deg) 转10度

-  :scal()       缩放
    - transform:scal   
    - 最初始值为1 比1大就是放大多少倍  0.5是缩小一半- 

-   :skew()    倾斜多少角度  两参数 一x轴一y轴
    - transform:skew(50deg,50deg)- 

-   transform-origin  基准点
    -默认为center,center  一般在动画之前设置
    - left center right length % 

***
***
#### transsition 
property 运动的属性 
> - 


***
####  动画帧   requestAnimationFrame
-  采用系统时间间隔,保持最佳绘制效率,不会因为间隔时间过短,造成过度绘制,增加开销,也不会因为降额时间太长,使用动画卡顿不流畅,让各种网页动画效果能够有一个统一的刷新机制,从而节省系统资源,提高系统性能,改善视觉效果


- 优点:
    会把每一帧中的所有DOM操作集中起来,在一次重绘或回流中就完成,并且重绘或者回流的时间间隔仅仅跟随浏览器的刷新频率

    在隐藏或者不可见的元素中,
    requestAnimationFrame 将不会重绘或者回流,这当然就意味着更少的cpu、Gpu和内存使用量

    requestAnimationFrame 是由浏览器专门为动画提供的API,在运行时浏览器会自动优化方法的调用,并且如果页面不是激活状态下的话,动画会自动暂停,有效节省了CPU开销
```
//写一个有名自执行函数，里面使用requestAnimationFrame
在里面调用有名自执行函数  
//也有一个返回值，返回值数字（编号)
let timer;
box.onclick = function(){
    (function move(){
        timer = requestAnimationFrame(function(){
            box.style.left = box.offsetLeft + 10 + 'px';
            move();
        })
    })();
}

btn.onclick = function(){
    cancelAnimationFrame(timer);
}

```


`cancelAnimatonFrame(编号)` 关闭动画



***
#### js运动
    c 总长度
    t 当前走了多少时间
    d 总时间
    b 初始的距离

    c*(t/d) + b; 
    当前走了多少时间(动) / 总时间(固定的) * 总长度(固定的) + 初始的距离(固定的)

```
box.onclick = function (){
    // alert(1)
    move(box,1000,1000,'left');
}

/*
    定时器用运动容易掉帧，而且性能会差，所以使用requestAnimationFrame
*/

function move(obj,c,d,attr){
    var timer;
    var t = 0;
    var b = parseFloat(getComputedStyle(obj)[attr]); //带单位
    c = c - b; //总长度 - 开始的位置 = 应该走的步长
    (function start(){
        timer = requestAnimationFrame(function (){
            start();
            t += 16.7;//每16.7毫秒走了多少时间
            //如果当前的时间大于等于总时间，那么就让当前时间等于总时间,为了让停下来的距离和设置距离一致
            if(t >= d){
                t = d;
                cancelAnimationFrame(timer);
            }
            obj.style[attr] = Tween.linear(t, b, c, d) + 'px';//c*(t/d) + b + 'px'; //在当前时间走了多少步长
        });
    })()
}

```


***
***
***

 ### MVC
 - M : model 数据 
 - V : vuew 视图
 - C : controller 控制器 {(js)


***
***
***
 ### 视口   12.11
    布局视口
    视觉视口
    理想视口  //最想要的

- 布局视口
    - 有滚动条,宽度以整个页面(整个文档)为主,
    - document.doument
- 视觉视口
    - 能让pc上的页面,装到真个移动端浏览器上,但是会缩小体验不好
    - 是根据设备的宽度走的
    - window.innerWidth
- 理想视口
    - 一切显示都是根据设备来的
    - window.screen.width

- 代码:
    ```
    <meta name="viewport" content="user-scalable=no,maximum-scale=1.0,minimum-scale=1.0,width=device-width,initial-scalable=1.0">
    ```

- `initial-scale=1.0`    初始化缩放比例
- `width=device-width`   表示宽度为设备宽度
- `maximum-scale=1.0`    最大缩放比例
- `minimum-scale=1.0`    最小缩放比例
- `user-scalable=no`     是否允许缩放,no|0不能,yes|1 能


- 物理像素
    一个屏幕有多少个像素点

- 逻辑像素
    css设置的像素

    在pc上物理像素和逻辑像素是相等的,所以布局的时候,量多少就是多少

- web APP       html5 + css3
- Hybrid App    能一套代码兼容多个端
- 原生和 HTML5 团队 (Hybrid APP)
- Cordova       
    - 提供了一组设备相关的API，通过这组API，移动应用能够以JavaScript访问原生的设备功能，如摄像头、麦克风等
    - 还提供了一组统一的JavaScript类库，以及为这些类库所用的设备相关的原生后台代码
- JSBridege     小程序
- Flutter       谷歌的移动ui框架
***
***
***
### 组件



***
***
> #### 选择控件  12.11
    如何拿到用户传入的数据？

    在file控件元素下有一个files属性，files[0]就是上传的数据
    ```
    <input type="file" multiple name="" id="file" /><button id="btn">按钮</button>

    btn.onclick = function(){
        // console.dir(file.files[0]);
        console.dir(file.files.length);
    }
    ```
### fetch

#### fetch 的post 
    fetch(url,{
        metchod:'post',
        headers:{

        },
        body:'key=val&key2=val2',
        也可以写成
        body:''+new URLSea
    })
- 需要请求本体body

### AJAX  => 前后端数据交互的技术  12.14

    Asynchronous(异步) Javascript(js) And(和) XML(可扩展标记语言)
    异步的js 和 xml

- 目的:从后台拿数据

- 优点:可以局部刷新,减轻服务器压力,提升用户体验

- 难点:
    - 如何操作数据(各种数据类型的应用)
    - 拿到数据之后作什么,如何处理
- 对比
    - 传统的请求

    ``` 
        // 会刷新了页面
        action:请求的地址
        method:请求的方式(get,post...)
        name="user",name="pw":字段
            -> user=xxmz&pw=1234
    ```
#### ajax 的交互模型
    - 创建一个XMLHttpRequest对象  
    - 填写请求方式，和请求地址，是否异步
    - 发送请求
    - 监听数据响应
    - 接收到数据

#### 写一个ajax
    1. 创建一个电话
    2. 输入号码
    3. 按绿色键拨打
    4. 等待
    5. 通话
    ```
        user.onblur = function(){
            // 发起ajax 请求 (打电话模式)
            let xhr = new XMLHttpRequest;    // 创建一个电话
            xhr.open('get','/get?user='+this.value,true)    // 输入号码
            xhr.send();            // 按绿色按钮拨打
            xhr.onload = function(){
                console.log(JSON.parse(xhr.responseText))   // 通话
                <!--                     
                    let d = JSON.parse(xhr.responseText);    //后台返回的数据
                    if(d.code === 0){
                        user.style.border = '1px solid red';
                    }else if(d.code === 1){
                        user.style.border = '1px solid green';
                    } 
                -->
            }
            console.log()   //主线程
        }   
    ```
- 工作中请求方式
    ```
        $.ajax({})
        fetch('')
        axios.get('')
        wx.request('')
        jsonp_fetch('')
    ```
- `get写法`
    ```
    user.onblur = function(){
        let xhr = new HTMLhttpRequset()
        xhr.open('get','/get?user='+this.value,ture)
        xhr.send('user'+this.value)
        xhr.onload = function(){
            console.log(xhr.responseText)
        }
    }
    ```

- `post写法`
    ```
        user.onblur = function(){
            let xhr = new HTMLhttpRequset()
            xhr.open('post','/post',true)                  // 是否异步
            xhr.setquestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send('user'+this.value)
            xhr.onload = function(){
                console.log(xhr.responseText)
            }
        }
    ```

- `fetch 写法`
    ```
    fetch('/get?user='+user.value+'&pw='+pw.value).then(d=>d.json()).then(d=>{
        console.log(d);
    })
    ```
- `真实数据中的ajax`  
    真实数据发开中 封装ajax 看不见send
    结构
    ```
        $.ajax({
            method:'post',
            url:'http://www.baidu.com/s',
            data:{
                wd : 'zhufeng'
            },       
            dataType:'jsonp',
            success:function(data){
                console.log(data)
                data.foreach(item=>{
                    let $li = $('<li>'+ietm.q+'</li>');
                    $('#ul').append($li);
                })
            }
        })
    ```
#### get post  
    后台文档会写清楚是 get 还是 post

- `get`  
    - 通过`url`方式进行请求
    - 速度`快`,三步就能请求到
    - 被浏览器`缓存` 相对不安全  
        在请求的时候会显示在地址栏或者历史记录里面查到
    - 请求`体积有限` (会根据浏览器的标准来限制), 传大的东西传不了
    - %+ 两位
    - `中文需要转码` encodeRL('方')   中文 -> 码
        - 输入的内容是中文的时候，在IE下会出现错误请求和返回
        - 原因: 是因为IE的低版本在解析中文的时候解析会有问题。
        - 解决方案 :
            - 把中文转成URI编码
                ```
                encodeURI('续') -> %E7%BB%AD
                encodeURIComponent
                ```
            - URI编码转中文  
                ```
                decodeURI('%E7%BB%AD') -> 续
                decodeURIComponent('%E7%BB%AD')
                ```
    - 在低版本IE下有缓存问题(/get?user=liucheng)  
        - 第一次和第二次请求的url是一致的那么第二次会走第一次的缓存  
        - 解决:
            - 第一种:不用get 用 post
            - 第二种:每次url都不一致  
                    ```
                    /get?user=liucheng&random=3213321321
                    /get?user=liucheng&random=3213325748
                    ```

- `post`
    - 不走url,请求方式走`浏览器`发送,速度相对于get要慢
    - 比get`慢`,跟用户相关的信息,发送体积比较大的文件,`至少6步`才能成功发送请求
    - 理论上`体积无限大`
    - 不会被浏览器缓存 相对安全
    - 通过`send`  数据放在send中
        ```
            xhr.open('post','post')     // 把传后端的数据放在send中
            xhr.send('user='+this.value)

            xhr.setquestHeader('Content-Type','application/x-www-form-urlencoded')
        ```
    - 必须添加请求头
        ```
        xhr.setRequestHearder('content-type','application/x-www-form-urlencoded');
        ```
#### get写法 的缓存  
          
    ```
    user.onblur = function(){
        var xhr = new XMLHttpRequest;
        xhr.open('get','/get?user='+encodeURI(this.value)+'&myNizp='+Date.now(),true);
        xhr.send();
        xhr.onload = function(){
            console.log(xhr.responseText);
        }
    }
    ```


> #### Ajax 的 url

    url:
        http://localhost:80/3_ajax.html?page=1#hash=xy;
- `协议`  =>  http://
    - http://    =>   超文本传输协议
    - https://   =>   比http更加安全
    - file://    =>   本地文件传输传输协议
    - htp        =>   文件传输协议

- `域名`   =>  localhost  
    IP的别名
    - localhost
    - 14.215.177.39
    - baidu

- `端口`    =>   80  
    放在域名冒号后面的
    - 服务器默认端口为80

- `文件路径` =>  3_ajax.html  
    接口


- `查询信息`  =>  ?page=1 & id = 0 & wd=
    - 一个参数与另一个擦书用&符分割

- `hash`信息  =>   hash=xy

#### ajax 常用属性和事件
- `onerror`         // 请求失败
- `onload`          // 请求成功 
- `onprogress`      // 上传
- `onreadystatechange`    // 监听状态的变化 存储函数 ready
    - 是可以监听发送请求的状态
    - 5次状态 0-4，但是0你永远都监听不到，1-4
    - 放到send之前能够多监听一c次
    - 放到send之后就少监听一次
        -  0: 请求未初始化
        -  1: 服务器连接已建立
        -  2: 请求已接收
        -  3: 请求处理中
        -  4: 请求已完成，且响应已就绪

- `readstate`       // 状态进行到了哪一步, 0-4 一共5步, 状态为4的时候请求完成 0永远监听不到

- `reponseText`     // 后端返回的数据
- `responseXML`     // xml 的 document对象
- `status`          // HTTP状态码 比如:200 404

#### ajax封装 属性
- `datatype:'json'`  // 要请求的数据格式   json xml
- `url:''`
- `data:{}`
- `success`          // 成功
- `method:get`       // 请求方式  get post
- `timeout:0`        // 设置超时时间
- `ontimeout:function(){}`  // 超时之后干嘛
- `fail:function(){}`//失败之后干嘛

- `created:function(){}`    //当ajax请求的时候
- `unmount:function(){}`    // 当ajax请求完毕

##### 请求头和响应头


#### http
- 1-6开头状态码
- 1 消息
- 2 成功  200-207为成功
- 3 重定向  
    301 永久重定向

    302 请求的资源临时从不同的 URI响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的

    304 如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。

    305 需要代理

    307 请求的资源临时从不同的URI 响应请求


- 4 请求错误
    前端的锅
    400 Bad Request
        1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。
        2、请求参数有误。
    401 Unauthorized
        当前请求需要用户验证。

    403 Forbidden
        服务器已经理解请求，但是拒绝执行它
    404 请求失败


- 5、6 服务器错误
    只要出现5后端的问题


### 服务器    12.13
#### 如何启动服务器
- 点击服务器文件(hello world) (条件不能是中文)
- `安装依赖`  
    看看有没有node_modules 文件 ,有就不用管 ,没有要安装依赖文件
    - 第一种方式: shift + 鼠标右击  选择在此处打开终端
    - 第二种方式: 把服务器文件拖到vscode中,点击终端
        - npm install 安装依赖
- `运行服务器`
    1. 输入npm run install 或者输入 node app
    2. 按tab键 (自动补齐)
- `打开方式`  
    浏览器输入 localhost/xx.html
        - 默认打开的是 index.html
        - 不能直接运行文件 ,不能在本地打开,要用localhost 的方式打开
- `代码放到public下`

### 浏览器
- IE9 以下的浏览器是不支持on load的,但是所有的浏览器都支持onreadstatrchange  
    实可咦监听发送请求的状态
- json.parse 不支持低版本浏览器  
    eval 支持  
        - 尽量把能够转成js运行的代码尽量转了
    eval不能用
        - 就new function



### 跨域(源)
    你要用别人的东西   (别人借给你用) (变成自己的) (自己做一个和别人一样的东西)
- `同源策略`:一种关于安全方面的约定，它是浏览器最核心也最基本的安全功能，
    - 如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。
    - Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。
- `源`
    -  `协议`:
        ```
            http/https(比http更加安全，因为在传输的时候需要进行安全证书的认证)
            ftp
            file
            ....
        ```

    - `域名`:(IP的另一个名字)
        - www.baidu.com

    - `端口`:
        - 好比服务员、门牌号专门是做某件事情的
        - 8888,5500,80....
                
    - `同源`:同域名、同协议、同端口

    - `跨源`:不用域名、不同协议、不同端口，只要有一个不同就叫跨域

```
    https://www.baidu.com:80  我

    http://www.baidu.com:80  协议不一样=跨域

    https://www.baidu.com:81 端口不一样=跨域

    https://www.taobao.com:80 域名不一样=跨域

    https://news.baidu.com:80  跨域


    https://baidu.com   http://61.135.169.121
    https://blog.baidu.com   跨域

```
#### 跨域的解决方案
1. `CORS`
    - 80端口下访问8080端口下的/kuayu接口

    - 需要高版本浏览的XMLHttpRequest + 后端设置白名单

    - 优点:
        前端什么都不用做，只需要后台添加白名单即可

    - 缺点:
        低版本不兼容

2. `服务器代理`

    - 服务器能够进行跨域请求第三方资源，服务器跨域的代码又和我端同源，就等同于我端跨域第三方资源

    - 优点:前端基本不用做什么，需要自己配置第三方资源路径

    - 缺点:别人变了的你也得变。
    ```
        http://localhost:80 -> https://movie.douban.com/j/search_subjects?type=tv&tag=国产剧
    ```

3. `jsonp`
    - json + padding 把数据内填充

    ```
        fn([1,2,3])
        fn2(1,2,3)

        function fn(a){
            alert(a)
        }
        function fn2(a){
            console.log(a)
        }
    ```


### jsonp
- 有的标签天生就支持跨域
```
a href = ""
img src = ""
link href="1.css"
script  src=""
```
script标签会尽量解析外链资源把资源变成js代码

- jsonp需要哪些条件
1. 全局定义一个函数
2. 后端的数据要知道你定义的函数叫什么名字
3. 后端把数据放到函数调用中
4. 通过script标签发送请求,等同于函数调用,还传了参给你

#### ajax和jsonp的区别
- ajax请求来的数据不带函数名加括号
- jsonp请求来的函是带函数名加括号的

- jsonp只能是get请求,因为走的是url
- ajax请求方式可以请求jsonp的数据,但是jsonp数据不能访问到ajax数据
    - 因为ajax-> xhr.responseText(fn('{"name":"zhufeng"}'))
    -   jsonp -> '{"name":"zhufeng"}'

### 存储
1. 刷新之后请求一次数据
2. 把数据存储在浏览器中
    -  cookie 
        - 后端技术，基于浏览器实现的(一般都是后端来设置,也可以前端来种)
        - 用来存储用户的操作信息
        - 一次http请求（填写用户名密码），后端只知道这次请求某人是否合法，http是无状态的，不能记录某人登录过账户
        所以说使用cookie去存储某个人操作，下次请求的时候，把上一次的操作发给后端，就知道某人是否登录过账户
    - localStorage
    - sessionStorage

#### cookie 
    用来存储用户的操作信息

- `cookie 的生命周期`
    -  默认的生命周期是当浏览器关闭，生命就结束
    -  如果不要走默认的生命周期使用 expires
        - expires=需要设置的时间 
        ```
            let o = new Date();
            o.setDate(new Date().getDate() + 1);  //比当前时间多1天
            document.cookie = 'name=pq; expires='+o;
        ```

- console.log(document.cookie); //`读操作`
    - 读操作需要注意的是，一次读取会把当前域名下的所有cookie都获取出来
    - `格式`为'key=val; key2=val2',分号后面有空格
- document.cookie = 'name=pq'; //`写操作`


-  `cookie必须使用服务器环境`   
- 刷新页面的时候取cookie，看看有没有user，有user说明已经登录过，否则没有人登录 

#### localStorage
    专门为前端准备的本地存储

- `生命周期`  
（跟域名走的）
 只要不删除，就永远留着

-  增:
localStorage.setItem(key,val)
- 删：
localStorage.removeItem(key)
- 查:
localStorage.getItem(key)
- 清除:
localStorage.clear()


### 小组件
#### 打开一个网页
    window.open(url,打开方式(默认新开一个窗口),控制浏览器[有兼容性问题])
`window.open`
-  必须人为手动来调用，才执行，不然会被高版本浏览器拦截
-  返回值是新打开的页面，可以使用close()
- `window.close()`; 关闭浏览器
