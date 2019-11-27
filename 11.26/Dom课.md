

增删改

    关系：
        父子，兄弟

        parentNode -> parent

        previousElementSibling -> prev()

        nextelementSibling -> next()

        parents() -> 某个元素的所有祖先节点，括号中可以精确匹配

        index()  - 基于父级

<div>1</div>
    插入到某个元素前面‘
     
   
$('#box').before($('<div>2</div>'))

$('button').clic(function(){
    $(this).index()
})


选项卡


$btns.click(dunction(){
    $(this).addClass('active').sliblings('button').removeClass('active')
    $div.eq($(this).index()).addClass('show').siblings('div').removeClass('show')
})