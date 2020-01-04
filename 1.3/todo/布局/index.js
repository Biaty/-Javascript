new Vue({
    el:'.todoapp',
    data:{
        all:false,
        val:'',
        ary:[
            {
                id:0,
                txt:'第一条啦',
                checked:false,
                onoff:false
            },
            {
                id:1,
                txt:'第二条啦',
                checked:true,
                onoff:false
            }
        ]
    },
    methods: {
        //按回车键创建数据
        add(){
            if(!this.val)return;
            this.ary.unshift({
                id:+new Date,
                txt:this.val,
                checked:false,
                onfoff:false
            })
            // this.val = '';
            console.log(this.ary)
        },
        //删除
        rm(id){
            this.ary=this.ary.filter(e=>e.id !==id)
        },
        // 全选
        changeAll(ev){
            // this.ary = this.ary.map(e=>{
            //     e.checked = ev.target.checked;
            //     return e;
            // })
            this.ary = this.ary.map(e=>{
                e.checked = ev.target.checked;
                return e;
            })
        },
        // 双击修改
        replace({id,txt},num){
            this.onoff_FN(id,true);
            this.$refs.edit[num].value = txt;
            /*
                改变数据之后，一个元素会刷新，刷新之后就看不见select
            */
            Vue.nextTick( ()=> {
                // DOM 更新了
                this.$refs.edit[num].focus();  
            })
        },
        off({id,txt,onoff},ev){
            // console.log(onoff)
            if(!onoff)return;
            const {value} = ev.target;
            //有内容并且内容不一样，这个时候才需要修改数据
            if(value && txt != value){
                this.ary.forEach(e=>{
                    if(e.id === id){
                        e.txt = value;
                    }
                });
            }
            this.onoff_FN(id,false);
            // this.ary.forEach(e=>{
            //     if(e.id === id){
            //         e.onoff = false;
            //     }
            // });
        },
        onoff_FN(id,b){
            this.ary.forEach(e=>{
                if(e.id === id){
                    e.onoff = b;
                }
            });
        }
    
    },
    watch: {
        ary:{
            handler(){
                // console.log(this.ary);
                this.all = this.ary.every(e=>e.checked);
            },
            deep:true,
            immediate: true
        }
    },
    
})