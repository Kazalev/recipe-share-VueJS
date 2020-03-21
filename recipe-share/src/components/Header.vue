<template>
  <div>
    <header>
        <router-link to="/home"> <img class="logo"
        src="../assets/recipe-share-logo.png"
        alt="logo"
        width="200px"
        height="100px"
        /> </router-link>
        <nav>
            <ul>
                <li> <router-link to="/">Салати</router-link> </li>
                <li> <router-link to="/">Супи</router-link> </li>
                <li> <router-link to="/">Основни Ястия</router-link> </li>
                <li> <router-link to="/">Десерти</router-link> </li>
                <li> <router-link to="/">Напитки</router-link> </li>
            </ul>
        </nav>
        <router-link to="/login"><a class="cta"><button>Вход</button></a></router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252A;
}

li, a, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    cursor: pointer;
    margin: -15px;
}

nav {
    list-style: none;
}

nav a:link {
  text-decoration: none;
}

nav li {
    display: inline-block;
    padding: 0px 20px;
}

nav li a {
    transition: all 0.3s ease 0s;
}

nav li a:hover {
    color: #0088a9
}

button {
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
</style>
