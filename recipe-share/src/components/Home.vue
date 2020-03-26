<template>
  <div>
    <app-recipe-card :passedRecipes="recipes"></app-recipe-card>
  </div>
</template>

<script>
import { db } from "../firebase";
import AppRecipeCard from "./recipes/recipeCard";

export default {
  name: "Home",
  data: function() {
    return {
      recipes: []
    };
  },
  firestore: {
    recipes: db.collection("Recipes")
  },
  methods: {},
  components: {
    AppRecipeCard
  }
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
