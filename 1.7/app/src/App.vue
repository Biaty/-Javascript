<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link  tag="button" to="/">Home</router-link>
     <router-link tag="button" to="/about/dd/id/1">About1</router-link>
      <router-link tag="button" to="/about/d/id/2">About2</router-link>  -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
