<template>
  <div id="app">
    <router-link to="/user/foo">Go to foo</router-link><br/>
    <!-- <router-link to="/user/foo/111">Go to foo/111</router-link><br/>
    <router-link to="/user/foo/222">Go to foo/222</router-link><br/> -->
    <router-link to="/user/foo/profile">profile</router-link><br/>
    <router-link to="/user/foo/posts">posts</router-link><br/>
    <router-link to="/user/bar">Go to bar</router-link><br/>
    <router-link to="/user">Go to user</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
