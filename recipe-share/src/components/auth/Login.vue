<template>
  <div class="wrapper">
    <div v-if="authUser">
      <h1>Logged in as {{authUser.username}}</h1>
    </div>
    <div class="loginBox">
      <form @submit.prevent="login">
        <img src="../../assets/cook.png" class="user" />
        <h2>Login In Here</h2>
        <p>Email</p>
        <input type="text" v-model="email" placeholder="Enter Email" />
        <p>Password</p>
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button type="submit">Sign In</button>
        <br />
        <router-link to="/register">
          <a>Don't have an account? Register!</a>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../../firebase";

console.log(auth.currentUser);

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      currentUser: {
        email: ''
      },
      authUser: null
    };
  },
  methods: {
    login: function() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log(auth.currentUser.email);
          this.currentUser.email === auth.currentUser.email;
          alert(`You are logged in as ${this.email}`);
          this.$router.push("/home");
        })
        .catch(err => {
          alert(`Ooops. ${err.message}`);
        });
    }
  },
  created() {
    auth.onAuthStateChanged(user => { this.authUser = user});
  }
};
</script>

<style scoped>
.wrapper {
  background: url("../../assets/img01.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
  height: 600px;
}

.loginBox {
  position: relative;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 420px;
  padding: 80px 40px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
}

h2 {
  margin: 0;
  padding: 0, 0, 20px;
  color: #1e90ff;
  text-align: center;
}

.loginBox p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: #fff;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

button {
  width: 100%;
  margin-bottom: 20px;
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}

a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.user {
  width: 100px;
  height: 115px;
  overflow: hidden;
  position: absolute;
  top: calc(-100px / 2);
  left: calc(50% - 50px);
  border-radius: 50%;
}
</style>