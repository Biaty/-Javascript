事件流
哪些事件 干嘛的
事件对象

   remove


    hover:
        on

jq中的所有事件全部都是事件绑定  都是on来二次封装

jq 的事件对象都是二次封装的
如果要拿到真正的原生js对象,都需要
ev.originalEvent (原生事件对象) 


// 移入移出时欸box添加'移入''移出'
$('box').on('mouseenter',function(){
    console.log('移入')
})


// 触发一次hover就绑定一次click 触发的越多 就绑定的越多
// 绑一次解一次 始终保持一次click'
$('#box').hover(functin(){
   $('this').css()
   // 解绑上一次,再加一次新的click
   $('button').off().click(fuction(){
        console.log('发送了一次请求')
   })
},{
   $('this').css()
})


$('#box').mouseover(function(){
    $('this').css({background:'skyblue'})
    $('button').click(fuction(){
        console.log('发送了一次请求')
    })

    //点击的时候会有两次  穿透  需要用mouseout
    // $('button') 写在$('#box')外面 
})


$('box').hover(function(){
    console.log('移入')

},function(){
    console.log('移出')
})





事件委托  
delegate  事件监听  子元素+事件+元素名 


$('#box').delegate('li',click,function(){
    console.log($(this).text())
})

$('#box').on('click','li',function(){
    console.log('点击'+this.innerText)
})




练:
$



jq 中 阻止冒泡和默认行为

直接 return false