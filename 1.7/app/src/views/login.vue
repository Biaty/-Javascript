<template>
    <div>
        <p>请登录</p>
        用户名:<input type="text" />
        密码:<input type="password" />
        <button 
            @click="login"
        >请登录</button>
    </div>
</template>

<script>
    export default {
        data:{
            return:{
                uname:'',
                pass : ''
            }
        },
        methods:{
            login(){
                const {uname,pass} = this;
                setTimeout(()=>{
                    if(uname === "xx" && pass === "123"){
                        // this.$router.push ="/"
                        this.$router.repalce({
                            path:'/',
                            // params:{
                            //     un:'xx'
                            // }
                            query:{       // ?un=xx
                                un:'xx'
                            }
                        })
                    }
                },2000)               
            }
        }
    }
</script>

<style scoped>

</style>