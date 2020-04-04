<template>
  <div>
    <!-- <router-link to="/recipeAdd">
      <button class="btn btn-success mt-4">Добави рецепта</button>
    </router-link>
    <router-link to="/recipeSuggestion">
      <button class="btn btn-primary mt-4">Предложи рецепта</button>
    </router-link> -->
    <div class="container pt-4">
      <div class="row">
        <div class="col" v-for="(recipe, index) in passedRecipes" :key="index">
          <div class="card mb-3">
            <!-- v-if="index < 4" -->
            <router-link :to="{ name: 'recipeDetails', params: { recipe, id: recipe.id }}">
              <h5 class="card-header">{{ recipe.name }}</h5>
            </router-link>
            <!-- <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </div>-->
            <img style="height: 250px;" v-bind:src="recipe.img" v-bind:alt="recipe.name" />
            <!-- <div class="card-body">
              <p
                class="card-text"
              >{{  }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ recipe.time }}</li>
              <li class="list-group-item">{{ recipe.difficulty }}</li>
              <li class="list-group-item">{{ recipe.category }}</li>
            </ul>-->
            <div class="card-body">
              <router-link :to="{ name: 'recipeDetails', params: { recipe }}">
                <a href="#" class="card-link">Виж цялата рецепта!</a>
              </router-link>
            </div>
            <div class="card-footer text-muted">{{ recipe.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    passedRecipes: Array,
    isAuth: Boolean
  },
  data: function() {
    return {};
  },
  created: function() {
    for (let i = 0; i < this.passedRecipes.length; i++) {
      // console.log(this.passedRecipes[i].date);
    }
  }
};
</script>

<style scoped>
h5 {
  color: darkgoldenrod;
}

h5:hover {
  color: #1f360b;
  cursor: pointer;
}
</style>