// 每个li的高度， 找到最短的li ，就把div插到最短li的里面

/*
    findIndex(callback)
        找到回调函数中return后符合条件的索引值,找不到为-1
    [1,2,3].findindex(e=>e==3) 
    callback(数组每项,索引,all)


*/



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




// 滚轮   判断触底 
// 滚动条的距离 + 可视区的高度 如果刚好≥最短的高度+head 的高度



let iH = window.innerHeight  // 可视区的高度
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
    }
    
}