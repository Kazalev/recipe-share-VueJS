<template>
  <div>
    <header>
        <img class="logo"
        src="https://lh3.googleusercontent.com/proxy/iM-qov-JQP6n4F0KsGYaOYnETJBrWAU5M9iZFzLPXEicJdZqzeCKg9yTI7Iou4ECssIEU9zYcR7nBAbt-gxvqIlZW6u19sAXRhsKp2KRfQ"
        alt="logo"
        width="200px"
        height="100px"
        />
        <nav>
            <ul>
                <li><a href="#">Салати</a></li>
                <li><a href="#">Супи</a></li>
                <li><a href="#">Основни Ястия</a></li>
                <li><a href="#">Десерти</a></li>
                <li><a href="#">Напитки</a></li>
            </ul>
        </nav>
        <a class="cta" href="#"><button>Вход</button></a>
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
