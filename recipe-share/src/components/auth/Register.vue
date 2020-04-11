<template>
  <div class="wrapper">
    <div class="loginBox">
      <form @submit.prevent="register">
        <img src="../../assets/cook.png" class="user" />
        <h2>Register</h2>
        <input
          type="text"
          v-model="username"
          @blur="$v.username.$touch"
          placeholder="Enter Username"
        />
        <!-- if error -->
        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required" class="error">Username is required!</p>
        </template>
        <!-- end if error -->

        <input type="text" v-model="email" @blur="$v.email.$touch" placeholder="Enter Email" />
        <!-- if error -->
        <template v-if="$v.email.$error">
          <p v-if="!$v.email.required" class="error">Email is required!</p>
        </template>
        <!-- end if error -->

        <input
          type="text"
          v-model="fullName"
          @blur="$v.fullName.$touch"
          placeholder="Enter Full Name"
        />
        <!-- if error -->
        <template v-if="$v.fullName.$error">
          <p v-if="!$v.fullName.required" class="error">Name is required!</p>
        </template>
        <!-- end if error -->

        <input
          type="number"
          min="0"
          max="130"
          v-model.number="age"
          @blur="$v.age.$touch"
          placeholder="Enter Age"
        />
        <!-- if error -->
        <template v-if="$v.age.$error">
          <p v-if="!$v.age.required" class="error">Age is required!</p>
        </template>
        <!-- end if error -->
        <!-- TODO: v-model="age.number" -->

        <input type="text" v-model="img" @blur="$v.img.$touch" placeholder="Enter Image URL" />
        <!-- if error -->
        <template v-if="$v.img.$error">
          <p v-if="!$v.img.required" class="error">Image is required!</p>
        </template>
        <!-- end if error -->

        <input type="password" v-model="password" @blur="$v.password.$touch" placeholder="Enter Password" />
        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="error">Password is required</p>
          <p v-if="!$v.password.minLength" class="error">Password should be more than 6 symbols!</p>
        </template>

        <input type="password" v-model="rePassword" @blur="$v.rePassword.$touch" placeholder="Confirm Password" />
        <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="error">Passwords don't match!</p>
        </template>


        <button type="submit" :disabled="$v.$invalid">Register</button>
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
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Register",
  mixins: [validationMixin],
  data: function() {
    return {
      username: "",
      email: "",
      fullName: "",
      age: "",
      img: "",
      password: "",
      rePassword: "",
      currentUser: {
        email: ""
      }
    };
  },
  validations: {
    username: {
      required
    },
    email: {
      required,
      email
    },
    fullName: {
      required
    },
    age: {
      required
    },
    img: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    rePassword: {
      sameAs: sameAs("password")
    },
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
              this.$router.go("/");
            });
        })
        .catch(err => {
          alert(`Ooops. ${err.message}`);
        });

      db.collection("Users").add({
        username: this.username,
        email: this.email,
        fullName: this.fullName,
        age: this.age,
        img: this.img
      });
      console.log("User data was send successfully!");
    }
  }
};
</script>

<style scoped>
*{
  font-size: 22px;
}
.wrapper {
  background: url("../../assets/img01.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 750px;
}

.loginBox {
  position: relative;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 650px;
  padding: 80px 40px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
}

h2 {
  margin: 0;
  padding: 0, 0, 20px;
  color: #1e90ff;
  font-size: 28px;
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
  font-size: 22px;
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
  font-size: 18px;
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

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 1px;
  font-size: 16px;
  border-radius: 3px;
  color: black;
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