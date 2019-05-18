<template>
  <div id="app">
    <Header/>
    <Users/>
  </div>
</template>

<script>
import Users from "./components/users/Users";
import Header from "./components/header/Header";

export default {
  name: "App",
  components: {
    Users,
    Header
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
