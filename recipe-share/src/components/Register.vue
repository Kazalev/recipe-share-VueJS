<template>
  <div class="wrapper">
    <div class="loginBox">
      <form>
        <img src="../assets/cook.png" class="user" />
        <h2>Регистрация</h2>
        <input type="text" name placeholder="Enter Username" />
        <input type="text" name placeholder="Enter Email" />
        <input type="number" min="0" max="130" name placeholder="Enter Age" />
        <input type="password" name placeholder="Enter Password" />
        <input type="rePassword" name placeholder="Confirm Password" />
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
export default {
  name: "Register"
};
</script>

<style scoped>
.wrapper {
  background: url("../assets/img01.jpg") no-repeat center center fixed;
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
input[type=number] {
  -moz-appearance: textfield;
}
</style>