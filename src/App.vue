<template>
  <div id="nav">
    <router-link to="/">Home 🏠</router-link> |
    <router-link to="/dogs">Dogs 🐶</router-link> |
    <router-link to="/cats">Cats 🐱</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffc107;
}
</style>
