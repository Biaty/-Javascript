<template>
  <div>
    {{$route.query.name}}:欢迎你
    <router-link tag="button" to="/about/dd/id/1">页面1</router-link>
    <router-link tag="button" to="/about/d/id/2">页面2</router-link>
    <router-link  tag="button" to="/public">公共路由</router-link>
    <router-link  tag="button" to="/p6">p6</router-link>
    <router-link  tag="button" :to="{name:'p4'}">p4</router-link>
  </div>
</template>

<script>
  export default {
    // data:{
      
    //   retrn:{
    //     name="xx"
    //   }
    // }
  }
</script>

<style scoped>

</style>