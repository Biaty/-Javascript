const {getParents,bong,getChild,getChilds} = tools;
const $breadnNav = $('.path-nav');

let list = null;//存最新数据

// function createMenu(id){
//     $breadnNav.html('');
//     let pary = getParents(id); //找当前id下的所有父级包括自己
//     pary.forEach((item,i,all)=>{
//         let $navChild = null;
//         //如果item是数组的最后一项，那么元素应为span
//         if(i === all.length-1){
//             $navChild = $('<span>'+ item.title +'</span>')
//         }else{
//             $navChild = $('<a href="javascript:void(0);">'+ item.title +'</a>')
//         }
        
//         //点击面包屑，让文件夹和面包屑一起动
//         $navChild.click(function(){
            
//             // console.log(tools.getChild(data,3));
//             //每点击一次面包屑按钮都把全选的数据清除一次
//             tools.getChild(data,id).forEach(item=>item.checked = false);
//             render(item.id);
//             createMenu(item.id);
//         });
//         $breadnNav.append($navChild);
//     });
// }
// createMenu(0);


{/* <div class="path-nav clearFix">
                                <!-- <a href="javascript:;" style="z-index:10;">微云</a>
                                <a href="javascript:;" style="z-index:9;">微云</a>
                                <span class="current-path" style="z-index:7;">我的音乐</span> -->
                            </div> */}
            
function createMenu(id){
    $breadnNav.html('');
    let pary = getParents(id); //找当前id下的所有父级包括自己
    // console.log(pary)
    pary.forEach((item,i,all)=>{
        //面包屑  默认null 每次赋值
        let $navChild = null;
        //如果item是数组的最后一项，那么元素应为span
        if(i === all.length-1){
            $navChild = $('<span>'+ item.title +'</span>')
        }else{
            $navChild = $('<a href="javascript:void(0);">'+ item.title +'</a>')
        }
        // console.log($navChild)
        // //点击面包屑，让文件夹和面包屑一起动
        $navChild.click(function(){
            //每点击一次面包屑按钮都把全选的数据清除一次 两个参数
            tools.getChild(data,id).forEach(item=>item.checked = false);
            render(item.id);
            createMenu(item.id);
        });
        $breadnNav.append($navChild);
    });
}
createMenu(0);