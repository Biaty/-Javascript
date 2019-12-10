function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight)
    let min = Math.min(...ary)
    let index = ary.findIndex(ele=>ele.min)
    return{
        ele:lis[index],
        index

    }
}


fetch('../date.json')
.then(d=>d.json)
.then(data=>{
    data.foreach((item,i)=>{
        let {ele} = minEle(ele)
    })
})