<template>
  <div id="app">
    <notifications group="foo" style="padding-top: 15px" width="350px" />
    <notifications
      group="auth"
      style="padding-top: 15px"
      width="350px"
      :duration="5000"
      :speed="700"
    />
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
  data: function () {
    return {
      isAuth: localStorage.getItem("userId") !== null,
      speed: 1000,
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap");

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
  font-family: "Cormorant Garamond", serif;
  color: #edf0f1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
