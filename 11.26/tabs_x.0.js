class tab{
    constructor(that){
        //opts 中的数据
        this.opts = {
            btns:[],
            content:[

            ]
        }
    }
    // 传入opts 以及运行功能
    init(opts){
        this.createBtn();
        this.createDiv();
        this.events()
    }
    //创建btn   每个btn上面显示的名字从数据中拿出来 btns
    createBtn(){
        this.opts.btns.forEach(ietm,i=>{
            this.box.append()
        })
    }
    //创建div 每个div上面显示的名字从数据中拿出来 content
    createDiv(){
        this.opts.content.forEach(item,i=>{

        })
    }
    // 事件 点击事件 点击某个btn 时 添加active属性  点击div时 添加show 属性
    events(){
        this.btns = this.box.find('button')
        this.divs = this.box.find('div')

        this.btns.click(function(){

        })
    }
}

// 移动选项卡插件 Drag
class Drag{
    constructor(that){
        this.box = that
    }
    position(){
        this.box.css()
    }

    //按住鼠标功能
    mousedown(){
        let that = this
        // 按住鼠标同时 点击事件发生  并且移动和抬起事件也运行
        this.box.mousedown(function(ev){
            that.disX
            that.disY
            that.mousemove()
            that.mouseup()

            return false
        })
    }

    // 选项卡移动事件
    mousemove(){
        let that = this ;
        $(document).mousemove()
    }

    // 鼠标抬起事件
    mouseup(){
        // 在页面松开鼠标时执行抬起事件 停止按住事件和移动事件
        $(document).mouseup(function(ev){
            $(this).off('mousemove');
            $(this).off('mouseup')
        })
    }
}

// extend 的 写插件的功能  $.fn.extend()
// tabs插件 选项卡   tabs:function(){}
$.fn.extend({
    tabs:function(){

    }
})








class Tab{
    constructor(that){
        this.box = that;
        this.opts = {
            btns:['按钮1','按钮2','按钮3'],
            content:[
                '111',
                '222',
                '333'
            ]
        }
    }
    init(opts){
        $.extend(true,this.opts,opts)
        this.createBtn();
        this.createDiv();
        this.events();
    }
    createBtn(){
        this.opts.btns.forEach(item,i=>{
            this.box.append($(`<button class="${i==0?'active':''}">${item}</button>`))
        })
    }
    createDiv(){
        this.opts.content.forEach(item,i=>{
            this.box.append($(`<div class = "${i==0?'show':''}">$(item)</div>`))
        })
    }
    events(){
        this.btns = this.box.find('button')
        this.divs = this.box.find('div')

        let that = this 

        this.btns.click(function(){
            $(this).addClass('active').siblings('button').removeClass('active')

            //$(this).addClass('active').siblings('button').removeclass('active')

            that.divs.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show')
        })
    }
}


class Drag{
    constructor(that){
        this.box = that;
        this.disX = 0;
        this.disY = 0;
    }
    positon(){
        this.box.css({
            positon:'absolute',
            top:0,
            left:0
        })
    }
    mousedown(){
        let that = this;
        this.box.mousedown(function(ev){
            that.disX = ev.pageX - $(this).offset().letf;
            that.disY = ev.pageY - $(this).offset().top;
            that.mousemove();
            that.mouseup();


            return false
        })
    }
    mousemove(){
        let that= this;
        $(document).mousemove(function(ev){
            that.box.css({
                top:ev.pageY - that.disY,
                left:ev.pageX - that.disX
            })
        })
    }
    mouseup(){
        $(document).mouseup(function(ev){
            $(this).off('mousemove')
            $(this).off('mouseup')
        })
    }
}





$.fn.extend({
    tabs:function(opts){
        let t = new Tab(this);
        t.init(opts);
        return this;
    },
    dialog:function(){
        let d = new DragEvent(this)
        d.position();
        d.mousedown();
    }
})