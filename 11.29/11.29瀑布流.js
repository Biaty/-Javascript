const box = document.querySelector('body')
const lis = box.querySelectorAll('.body li')
const head = document.querySelector('head')

function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight)
    let min = Math.min(...ary)
    let index = ary.findIndex(item => item ===min)
    return {
        ele:lis[index],
        index,
        min
    }

    
}
// 防抖
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            cb.call(this,...arg)
        },time)
    }
}

// 节流
function throttling(cb,time){
    let prevtime = 0,
    timer;
    return function(...arg){
        let nowTime = +new Date;
        if(nowTme - prevTime > time){
            cb.call(this,...arg)
        }else{
            clearInterval(timer)
            timer = seTimeout(()=>{
                if(+new Date - prevtime>time){
                    cb.call(this,...arg)
                }
            },time)
        }
        prevtime = nowTime
    }
}



function render(){
    fetch('../data.json')
    .then(d=>d.json())
    .then(ary=>{
        ary.forEach((item,i)=>{
            let {ele} = minEle(lis);
            let div = document.createElement('div');
            let img = document.createElement('img') 
            let p1 = docuemnt.createElement('p')
            let p2 = docuemnt.createElement('p')

            div.className = 'img_box'
            img.src = item.pic
            p1.className = 'desc'
            p2.className = 'author'

            p1.innerText = 'desc'
            p2.innerText =  'author'

            div.append(img)
            div.append(p1);
            div.append(p2);
            ele.append(div);
            setTimeout(()=>{
                img.style.opacity =1 
            })
        });
    });
};
render()


// 判断触底
let iH = window.innerHeight
window.onscroll = debounce(fn,200);
function fn(){
    if(box.scrollHeight<iH)return

    let {min} = minEle(lis)
    let scroll = window.pageYOffset;

    if(iH +scroll >=min+head.offsetHeight){
        console.log('chudile')
        render()
    }
}
