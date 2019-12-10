// 每个li的高度， 找到最短的li ，就把div插到最短li的里面

/*
    findIndex(callback)
        找到回调函数中return后符合条件的索引值,找不到为-1
    [1,2,3].findindex(e=>e==3) 
    callback(数组每项,索引,all)


    render()完发现 问题:
        当滚轮的时候,window.onscroll触发的次数非常多
        如果是触底就去请求服务器,那么会在同一时间触发若干次
        这样大大增加了服务器的压力
        导致如果数据太多 服务器压力会很大 会导致页面卡顿 体验不好
    解决方案:
    1:(停下来才触发) 防抖
        滚动停止下来的时候再触发
    2:  (降低频率) 节流
        每隔固定时间再触发这个事件 ,比如每隔200s再加载图片

*/
const box = document.querySelector('.body')
const lis = box.querySelectorAll('.body li')
const head = document.querySelector('.head')


// 找最短li  被内容撑开的高度 scrollHeight
function minEle(lis){
    //// 先变成数组,再用map 返回每一个的scrollHeight
    let ary = [...lis].map(ele=>ele.srcollHeight);
    // 找最小
    let min = Math.min(...ary);
   
    let index = ary.findIndex(item=>item===min);
    // 返回的是最短的索引  return出去一个对象 {,}  拿到了ele
    return{
        ele:lis[index],
        index,
        min  // 最短的高度
    }
}

function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight)
    let min = Math.min(ary)
    let index = ary.findIndex(item=>item===min)
    return{
        ele:lis[index],
        index,
        min
    }
}


// 当滚轮ok的时候再掉一次render
function render(){
    // 先获取元素  body 下的 li
    // 请求数据 （有id,pic,author,desc,height）  
    fetch('../data.json')
    //知道了是json方法
    .then(d=>d.json())
    //数据  形参data是变量
    .then(data=>{
        console.log(数据)
        //在循环数组的过程中去计算每个li 的高度 找到最短的li  ->需要去写个方法
        data.forEach((item,i)=>{ 
            let {ele} = minEle(lis);

            // 创建一个div className为 img_box 一个 img(有src) 两个p
            let div = document.createElement('div')
            div.className = 'img_box';
            let img = document.createElement('img')
            img.src = item.pic;
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            p1.className = 'desc';
            p2.className = 'author';
            p1.innerText = item.desc;
            p2.innerText = item.author;

            // img 两个p 插进div
            div.append(img);
            div.append(p1);
            div.append(p2);

            // div插进ele
            ele.append(div)

        })
    })
    
}
// 上来就调下
render()


// 防抖
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            cb.call(this,...arg)
        },time)
    }
}
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            cleratimeout(timer)
        }
        timer = setTimeout(() => {
            cb.call(this,...arg)
        }, time);
    }
}

// 节流
function throttling(cb,time){
    let prevtime = 0,
    timer;
    return function(...arg){
        let nowTime = +new Date;
        if(nowTime - prevTime > time){
            cb.call(this,...arg)
        }else{
            clearInterval(timer)
            timer = setTimeout(()=>{
                if(+new Date - prevTime > time){
                    cb.call(this,...arg)
                }
            },time)
        }
    }
    prevtime = nowTime
}





// 滚轮   判断触底 
// 滚动条的距离 + 可视区的高度 如果刚好≥最短的高度+head 的高度




/*
window.onscroll = function(){
    //解构 min 最短的距离
    let {min}=minEle(lis)

    // 滚动条的距离 
    let scroll = window.pageYoffset

    // 高度要跟滚动条相加
    //console.log(scroll + iH )
    // 头部被内容撑开的高度 head.offsetHeight
    //console.dir(min + head.offsetHeight)

    //判断触底  (会有小坑  点开页面就log出触底)
    // 解决方法1: if前 再加个 if(lis[0].children < 4)return;
    // 解决方法2 : if前加 if(lis[0].srcollHeight < iH)return; // 第一排高度小于可视区的高度
    // if(iH + scroll >= min+head.offsetHeight){
    //     console.log('触底了') 
    // }

    // if(lis[0].children < 4)return;
    if(lis[0].srcollHeight < iH)return; // 第一排高度小于可视区的高度
    if(iH + scroll >= min+head.offsetHeight){
        console.log('触底了') 
        render()
    }
    
}
*/
let iH = window.innerHeight  // 可视区的高度
window.onscroll = debounce(cb,200);

function fn(){
    if(box.srcollHeight < iH) return

    let {min} = minEle(lis)
    let scroll = window.pageYOffset

    if(iH + scroll >= min + head.offsetHeight){
        console.log('触底')
        render()
    }
}
let iH= window.innerHeight
window.onscroll = docunce(cb,200)

function fn(){
    if(box.scrollHeight<iH)return

    let {min} = minEle(lis)
    let scroll = window.pageYOffset

}
