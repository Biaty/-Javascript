$(document).click(function(){
    $('#box').css({})
    
})

// hide show 也是有动画的

// 隐藏
$('#btn').click(function(){
    $('#box').hide(1000);  
    //hide()  里面加数字时, 动画效果是慢慢变小颜色透明度也变化   改变宽高透明度

    $('#box').toggle(1000);

    $('#box').slideToggle(1000);
    // 改变高度慢慢隐藏

    $('#box').fadeToggle(1000);
    // 渐隐渐现
})

// jq中动画 是堆列的  按照顺序
// 需要等待前一个运行完 再接着下一个
//  加个stop()  阻止前面动画执行








// 查: stop()