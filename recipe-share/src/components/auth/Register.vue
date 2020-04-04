<template>
  <div class="wrapper">
    <div class="loginBox">
      <form @submit.prevent="register">
        <img src="../../assets/cook.png" class="user" />
        <h2>Регистрация</h2>
        <input type="text" v-model="username" placeholder="Enter Username" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="number" min="0" max="130" v-model="age" placeholder="Enter Age" />
        <!-- TODO: v-model="age.number" -->
        <input type="password" v-model="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Регистрация</button>
        <br />
        <router-link to="/login">
          <a>Already have an account? Sign In!</a>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../../firebase";
import { db } from "../../firebase";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      email: "",
      age: null,
      password: "",
      currentUser: {
        email: ""
      }
    };
  },
  methods: {
    register: function() {
      console.log({ email: this.email, password: this.password });

      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // alert(`Account created for ${this.email}`);
          auth
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              localStorage.setItem("UserEmail", auth.currentUser.email);
              localStorage.setItem("userId", auth.currentUser.uid);
              this.currentUser.email === auth.currentUser.email;
              // alert(`You are logged in as ${this.email}`);
              this.$router.push("/");
            });
        })
        .catch(err => {
          alert(`Ooops. ${err.message}`);
        });

      db.collection("Users").add({
        username: this.username,
        email: this.email,
        age: this.age
      });
      console.log("User data was send successfully!");
    }
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
  height: 700px;
}

.loginBox {
  position: relative;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 530px;
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>