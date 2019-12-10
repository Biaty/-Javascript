// // const $folders = $('.file-list') //放文件夹的盒子
// const $f_empty = $(".f-empt")
// const $checkedAll = $('#checked-all')

// function render(num=0){
//     $btn.html(''); // 先空
//     console.log(num)
//     let d = tools.getChild(data,num);

//     list = d;//每次render 的时候都最好把最新的需要显示的数据更新

//     //如果没有length 就是没有子级
//     if(!d.length){
//         $f_empty.show();
//         return
//     }
//     $f_empty.hide();
//     let every = true;






//     function render(arr){
//         $box.html('');
//         $.each(arr,(i,item)=>{
//             let $folder=

//         });
     
    
//     }
//     render(data);







//     $.each(d,(i,item)=>{
//         // console.log(item)
//         // 只要有一个数据的布尔值为false,就不可能全部选中,只要不是全部选中
//         if(!item.checked){
//             every = false;
//             $checkedAll.removeClass('checked')
//         };
//         console.log(d);
//         console.log(item)
//         const {checked,id,title} = item
//         let $folder =$(`  <div class="file-item ${checked?'active':''} did="${id}">
//         <div class="item">
//             <lable class="checkbox ${checked?'active':''}"></lable>
//                 <div class="file-img">
//                     <i></i>
//                 </div>
//             <p class="file-title-box">
//                 <span class="file-title">${title}</span>
//                 <span class="file-edtor">
//                     <input class="edtor" value ="${title}"type="text">
//                 </span>
//             </p>
//         </div> 
//     </div>  
//         `);



//         let $img = $folder.find
//         ('file-img');
//         let $i = $folder.find(i)





//     });
//     $folder.find('input').hide();
//     $box.append($folder)

// }
// render(0)



// const $folders = $('.file-list');
// const $f_empty = $(".f-empt")
// const $checkedAll = $('#checked-all')


// function render(num = 0){
//     $folders.html('')
//     let d = tools.getChild(data,num);
//     list = d ;
//     console.log(d)


//     $.each(d,(i,item)=>{

//         const {checked,id,title} = item;
//         let $folder =$(`  <div class="file-item ${checked?'active':''} did="${id}">
//                 <div class="item">
//                     <lable class="checkbox ${checked?'active':''}"></lable>
//                         <div class="file-img">
//                             <i></i>
//                         </div>
//                     <p class="file-title-box">
//                         <span class="file-title">${title}</span>
//                         <span class="file-edtor">
//                             <input class="edtor" value ="${title}"type="text">
//                         </span>
//                     </p>
//                 </div> 
//             </div>  
//         `);
//         $folder.find('input').hide();
//         let $img = $folder.find('i');
        
//         let $ch = $folder.find('lable')

//         $folders.append($folder);
//     })

// }
// render(0)


// console.log(tools.getChild(data))

const $folders = $('.file-list') //放文件夹的盒子
const $f_empty = $('.g-empty')  //显示隐藏空的文件夹
const $checkedAll = $('.checked-all')

let every = true;
let returnVal = false; 

//渲染
function render(num = 0){
    every = true;//初始状态就是true
    $folders.html('')
    let d = tools.getChild(data,num);
    list = d;

    //无文件时
    if(!d.length){
        // $folders.hide();
        $f_empty.show();
        return;
    }
    // list = d ;
    // console.log(d)
    $f_empty.hide();

   
    // let every = true  //全选
    
    $.each(d,(i,item)=>{

        //只要有一个数据的布尔值为false就不可能全部选中,只要不是全部选中,checkedall就不能打勾
        if(!item.checked){
            every = false;
            $checkedAll.removeClass('checked')
        }


        const {checked,id,title} = item;
        let $folder =$(`  
            <div class="file-item"  >
                <div class="item ${checked?'active':''}" did="${id}"}>
                    <lable class="checkbox ${checked?'checked':''}"></lable>
                    <div class="file-img">
                            <i></i>
                    </div>
                    <p class="file-title-box">
                        <span class="file-title">${title}</span>
                        <span class="file-edtor">
                            <input class="edtor" value ="${title}"type="text">
                        </span>
                    </p>
                </div> 
            </div>  
        `);
        $folder.find('input').hide();
        //图片
        let $img = $folder.find('.file-img');
        let $i = $folder.find('.checkbox') //对勾

        //点击勾选
        $i.click(function(){
            data[id].checked = !data[id].checked;
            // console.log(data)
            render(num)
        })

        // console.log($img)


        // 点击图片
        $img.dblclick(function(){
            // console.log($(this).parent().attr('did'))
            // render($(this).parent().attr('did')*1)
            let id = $(this).parent().attr('did')*1;


            //只要双击进文件夹，先把当前对应数据的布尔值清掉
            d.forEach(item=>item.checked = false);
            $checkedAll.removeClass('checked'); //清掉全选

            render(id);
            createMenu(id)  //联动面包屑
        });

        $folders.append($folder);


    })

    //点击全选的    先off 避免render一次点一次  click之前先把之前的清楚
    $checkedAll.off().click(function(){
    //     // console.log(list);
    //     //如果list是个空数组，就不用render
        if(!list.length)return;
        d.forEach(item=>item.checked = !every);//先同步数据
        render(num);//再通过数据渲染页面
    });
    

    //只要是true 就说明全选中  else就是没全选中
    if(every){
        $checkedAll.addClass('checked');
    }


}
render(0)