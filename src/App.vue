<template>
  <div id="app">
    <!-- <modal msg="App Message"></modal> -->
    <!-- <ul class="nav">
      <li>
        <router-link to="/" tag="a">Home</router-link>
      </li>
      <li>
        <router-link to="/modal" tag="a">Modal</router-link>
      </li>
      <li>
        <router-link to="/test/10" tag="a">User 10</router-link>
      </li>
      <li>
        <router-link to="/test/12" tag="a">User 12</router-link>
      </li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
ul.nav {
  display: flex;
  list-style: none;
  justify-content: center;
}
.nav li a{
  color: black;
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;
}

</style>
