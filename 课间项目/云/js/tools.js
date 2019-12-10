let tools = (function(){
    //通过父级id找子级
    function getChild(data,id = 0){
        // 看下data下有没有这个id ,没有传入的id就null
        // console.log(id)
        if(!data[id])return null;


        let ary = Object.keys(data);
        // console.log(ary)

        // 看data下的item中的pid 是不是属于id
        return ary.filter(item=>data[item].pid === id).map(item=>data[item]);

    }

    function getChilds(id=-1){
        let ary = Object.keys(data); 
        return ary.filter(item=>data[item].pid === id).map(item=>data[item]);
    }
    // // 专门用来找一个父级的
    function  getParent(id){
        // data[id].pid是个数字
        if(data[id].pid === '-1')return null; //到-1就说明到顶了
        return data[data[id].pid] //父级的数据
    }

    // //找一堆父级的   getParents
    function getParents(id){
        // d.id => 当前数据
        let pdata = getParent(id); //父级数据 padta  通过传来的id 找当前父级
        let ary = [data[id]]; //先把自己存进去
        //一直循环到pdata为null
        while(pdata){
            ary.unshift(pdata);//把每次的父级都存到ary中
            pdata = getParent(pdata.id) //每次都要改变pdata
        }
    // console.log(ary);
    return ary
    }


    function bong(obj,obj2){
        let {left:l,top:t,bottom:b,right:r} = obj.getBoundingClientRect();
        let {left:l2,top:t2,bottom:b2,right:r2} = obj2.getBoundingClientRect();
        if(r < l2 || b < t2 || l > r2 || t > b2){
            // console.log('没碰到');
            return false;
        }else{
            // console.log('碰到');
            return true;
        }
    }

    return{
        getChild,
        getParents,
        getChilds,
        bong
    }
})();
