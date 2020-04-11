<template>
  <div class="row justify-content-center">
    <div class="card-grid" v-for="(recipe, index) in recipes" :key="index">
      <div class="card" style="width: 16rem; height: 20rem;" v-if="recipe.category == 'Десерти' ">
        <router-link :to="{ name: 'recipeDetails', params: { recipe, id: recipe.id }}">
          <img :src="recipe.img" class="card-img-top" :alt="recipe.name" />
        </router-link>
        <div class="card-body align-items-end">
          <router-link :to="{ name: 'recipeDetails', params: { recipe, id: recipe.id }}">
            <h3 class="card-title">{{ recipe.name }}</h3>
          </router-link>
          <router-link :to="{ name: 'recipeDetails', params: { recipe, id: recipe.id }}">
            <a href="#" style="" class="btn btn-secondary">Виж повече</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        recipes: Array
    }
}
</script>

<style>
.card {
  display: inline-block;
  margin: 10px;
  color: black;
}

img {
  cursor: default;
  height: 180px;
  width: 254px;
  border: 5px solid white;
}

.card-body a {
  text-decoration: none;
}

.card-body a h6 {
  cursor: default;
  color: black;
  text-decoration: none;
}
</style>