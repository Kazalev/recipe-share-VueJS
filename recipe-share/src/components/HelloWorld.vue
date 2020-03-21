<template>
  <div>
    <p>Hello from HelloWorld Component</p>
    <br />
    <p>Hello from HelloWorld Component</p>
    <br />
    <p>Hello from HelloWorld Component</p>
    <br />
    <ul>
      <li v-for="(recipe, index) in recipes" v-bind:key="index">
        <p>{{ recipe.ingredients }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import { db } from "../firebase";
console.log(db);

export default {
  name: "HelloWorld",
  data: function() {
    return {
      recipes: []
    };
  },
  firestore: {
    recipes: db.collection('Recipes'),
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #000;
  margin: 40px 0 0;
  padding-bottom: 800px;
}

p {
  background-color: wheat;
  color: red;
}
</style>
