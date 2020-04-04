<template>
  <div id="app">
    <Header @onAuth="isAuth = $event" :isAuth="isAuth" />
    <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  name: "App",
  data: function() {
    return {
      isAuth: localStorage.getItem("userId") !== null
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  background: url("assets/background1.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
