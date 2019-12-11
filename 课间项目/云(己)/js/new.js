
const $btn = $('.create');
// const $box = $('.file-list')

let ary = [
    {
        title:'新建文件夹',
        id:0
    },
    {
        title:'新建文件夹(1)',
        id:1
    }
];

// 点击新建文件夹
$btn.click(function(){
    let $folder = $(`                           
     <div class="file-item ">
        <div class="item">
            <lable class="checkbox"></lable>
            <div class="file-img">
                <i></i>
            </div>
            <p class="file-title-box">

                <span class="file-edtor">
                    <input class="edtor" type="text" placeholder="请设置文件名"  value="新建文件夹">
                </span>
            </p>
        </div> 
    </div> 
    `);

    $folders.append($folder);
    let $txt = $folder.find('input');
    $txt.show(0)

    // let $title_box = $('.file-title-box')

    $txt.select(); //选中聚焦
    $txt.blur(function(){
        let val = $txt.val();
        let bool = ary.map(item=>item.title).includes(val);
        let nval = '';
        let num = 1; 
        nval = val ;

        while(bool){
            //如果重名了那么从1开始看有没有重名
            let s = val.replace(/\(\d\)$/,'') + '('+ num++ +')';
            bool = ary.map(item=>item.title).includes(s);
            nval = s;
        }
        ary.push({
            id:+new Date,
            title:nval
        });
        // render(data);
        render(num=0)
        // $txt.css("border","0")
    });//失焦事件
})