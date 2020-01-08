<template>
  <div class="about">
    <router-link  tag="button" to="/">Home</router-link>
    <router-link tag="button" to="/about/dd/id/1">About1</router-link>
    <router-link tag="button" to="/about/d/id/2">About2</router-link> 

    <h1>This is an about page</h1>
    <div>{{$route.params.un}}</div>
    <div v-if="$route.params.id==1" >
      111页面
    </div>
    <div v-if="$route.params.id==2" >
      222页面
    </div>
  </div>
</template>

<script>
/*
  $route 
    获取路由的信息,(属性)

    this.$route.params
  $router
    跳转路由的方法 (方法)

*/


export default {
  data() {
    return {
      num:0
    }
  },
  created(){
    this.num= 1;
    // console.log('111')
    console.log('created')
    if(this.$route.params.id === "1"){
      // console.log('1')
      setTimeout(()=>{
        console.log("请求接口1")
      },1000)
    }else if(this.$route.params.id === "2"){
      setTimeout(()=>{
        console.log("请求接口2")      
      })
    }
  },
  watch: {
    '$route'(to,from){
      // console.log(to);
      // console.log(from)
      if(to.params.if === "1"){
        console.log('请求1接口')
      }else if(to.params.if === "2"){
        console.log('请求2接口')
      }
    }
  },
}
</script>