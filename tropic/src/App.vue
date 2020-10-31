<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <api msg="To do's List" />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import api from "./components/api.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    api,
  },
};
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
