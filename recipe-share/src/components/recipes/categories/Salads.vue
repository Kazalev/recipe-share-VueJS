<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="card-grid" v-for="(recipe, index) in recipes" :key="index">
          <template v-if="recipe.category == 'Салати'">
            <div class="card" style="width: 18rem;">
              <img :src="recipe.img" class="card-img-top" :alt="recipe.name" />
              <div class="card-body">
                <h5 class="card-title">
                  <p>{{ recipe.name }}</p>
                </h5>
                <a href="#" class="btn btn-primary">Виж повече</a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../../firebase";

export default {
  name: "Salads",
  data: function() {
    return {
      recipes: []
    };
  },
  firestore: {
    recipes: db.collection("Recipes").orderBy("category")
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  margin: 10px;
}
.card {
  color: black;
}

img {
  border: 5px solid white;
}
</style>