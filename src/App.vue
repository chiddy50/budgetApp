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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Datakojo Testing</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(link, index) in nav_links" :class="{'active': isCurrent(link.to)}" :key="index">
                    <router-link class="nav-link" :to="link.to">{{link.label}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      nav_links: [
          {to: "/", label: "Home"} //,
          // {to: "/template", label: "Template"},
          // {to: "/gui", label: "GUI"}
      ]
    }
  },
  methods: {
      isCurrent(nowPath) {
          var current_path = location.href.split("#")[1];
          return current_path === nowPath;
      }
      
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

button.btn.btn-default{
  background: rgb(214, 200, 203);
}

</style>
