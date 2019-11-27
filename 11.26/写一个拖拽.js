// <div id="box"></div>

// 拖拽
$('#box').mousedown(function(ev){
    let disX = ev.pageX - $('#box').offset().left
    let disY = ev.pageY - $('#box').offset().top

    $(document).mousemove(function(){
        $('#box').css({
            left:ev.pageX- disX,
            top:ev.pageY - disY
        })
    })

    $(document).mouseup(function(){
        $(document).off('mousemove')
        $(document).off('mouseup')
        // 清掉自己的原因 : mouseup 抬起后 在其他位置点击也会触发,清掉自己后不会触发
    })
})



// 拖动时拖拽影子  新建一个影子并在拖动时影子放进去

$('#box').mousedown(function(ev){
    let $box2 = $('<div id = "boxShadow"></div>')
    $box2.css({
        left:$('#box').offset().left,
        top:$('#box').offset().top,
    })

    $(body).apend($box2)

    let disX = ev.pageX - $('#box').offset().left
    let disY = ev.pageY - $('#box').offset().top

    $(document).mousemove(function(ev){
        $box2.css({
            left:ev.pageX- disX,
            top:ev.pageY - disY
        })

        $(document).mouseup(function(ev){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })
    })
    return false

})


// 拖动吸顶  用if
$('#box').mousedown(function(ev){
    let $box2 = $('<div id = "boxShadow"></div>')
    $box2.css({
        left:$('#box').offset().left,
        top:$('#box').offset().top,
    })

    $(body).apend($box2)

    let disX = ev.pageX - $('#box').offset().left
    let disY = ev.pageY - $('#box').offset().top

    $(document).mousemove(function(ev){

        let t = ev.pageY - disY;
        if(t<100){
            t = 0
        }


        $box2.css({
            left:ev.pageX- disX,
            top:ev.pageY - disY
        })

        $(document).mouseup(function(ev){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })
    })
    return false

})

