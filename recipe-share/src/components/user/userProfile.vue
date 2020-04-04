<template>
  <div class="container pb-4">
    <h1>Hello from User Profile page!</h1>
    <p>{{ email }}</p>
    <div>
      <table
        v-if="email == 'kristian.kazalev@abv.bg'"
        class="table table-dark table-hover table-striped"
      >
        <thead>
          <tr>
            <th scope="col">Категория</th>
            <th scope="col">Име</th>
            <th scope="col">Дата</th>
            <th scope="col">Трудност</th>
            <th scope="col">Време</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody v-for="(recipe, index) in recipesToConfirm" :key="index">
          <tr>
            <td>{{recipe.category}}</td>
            <td>{{recipe.name}}</td>
            <td>{{recipe.time}}</td>
            <td>{{recipe.difficulty}}</td>
            <td>{{recipe.time}} мин.</td>
            <td>
              <button @click="disapproveHandler(recipe.id)" class="btn btn-danger m-2">
                <i class="far fa-window-close"></i>
              </button>
              <button @click="approveHandler(recipe)" class="btn btn-success">
                <i class="far fa-check-square"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <router-link to="/recipeAdd">
        <button
          v-if="email == 'kristian.kazalev@abv.bg'"
          class="btn btn-success mt-4 mr-4"
        >Добави рецепта</button>
      </router-link>
      <router-link to="/recipeSuggestion">
        <button class="btn btn-primary mt-4">Предложи рецепта</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
// const admin1 = 'kristian.kazalev@abv.bg';
// const admin2 = 'desislava.stefanova@abv.bg';

export default {
  name: "userProfile",
  data: function() {
    return {
      recipesToConfirm: [],
      moveRecipe: Object,
      email: ""
    };
  },
  firestore: {
    recipesToConfirm: db.collection("recipesToConfirm")
  },
  created() {
    console.log(this.recipesToConfirm);
    this.email = localStorage.getItem("UserEmail");
  },
  methods: {
    approveHandler(recipe) {
      for (let i = 0; i < this.recipesToConfirm.length; i++) {
        this.moveRecipe = {
          name: this.recipesToConfirm[i].name,
          img: this.recipesToConfirm[i].img,
          time: this.recipesToConfirm[i].time,
          category: this.recipesToConfirm[i].category,
          difficulty: this.recipesToConfirm[i].difficulty,
          ingredients: this.recipesToConfirm[i].ingredients,
          date: new Date(),
          recipe: this.recipesToConfirm[i].textRecipe
        };
      }

      db.collection("Recipes").add({
        name: recipe.name,
        img: recipe.img,
        category: recipe.category,
        time: recipe.time,
        difficulty: recipe.difficulty
      });
      console.log("Data was approved successfully!");
      console.log(recipe.name);

      db.collection("recipesToConfirm")
        .doc(recipe.id)
        .delete();
    },
    disapproveHandler(id) {
      db.collection("recipesToConfirm")
        .doc(id)
        .delete();

      console.log("Recipe deleted successfully!");
    }
  }
};
</script>

<style>
</style>