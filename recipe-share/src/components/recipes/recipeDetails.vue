<template>
  <div>
    <div class="container">
      <div v-if="email == 'kristian.kazalev@abv.bg'" class="actions p-2">
        <button @click="editHandler(recipe)" class="btn btn-primary mr-2">Edit</button>
        <button @click="deleteHandler(recipe.id)" class="btn btn-danger">Delete</button>
      </div>
      <h1>{{recipe.name}}</h1>
      <div class="row">
        <div class="col">
          <img :src="recipe.img" :alt="recipe.name" />
        </div>
        <div class="col-md-auto pt-4 sideInfo">
          <p>
            <i class="far fa-bookmark"></i>
            | {{recipe.category}}
          </p>
          <p>
            <i class="fas fa-list-ol"></i>
            | {{recipe.difficulty}}
          </p>
          <p>
            <i class="far fa-clock"></i>
            | {{recipe.time}}
          </p>
        </div>
      </div>
      <div class="ing">
        <h5>Необходими съставки:</h5>
        <!-- {{recipe.ingredients}} -->
        <!-- <ul 
          class="fa-ul ingredients"
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
        >
          <li style="text-align:left;">
            <span class="fa-li">
              <i class="far fa-check-circle"></i>
            </span>
            <p class="ingredient">{{ingredient.split(" - ")[0]}}</p>
            <p class="quantity">{{ingredient.split(" - ")[1]}}</p>
          </li>
        </ul>-->
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col" style="width: 20px;"></th>
              <th scope="col">Съставка</th>
              <th scope="col">Количество</th>
            </tr>
          </thead>
          <tbody v-for="(ingredient, index) in recipe.ingredients" :key="index">
            <tr>
              <td style="text-align: center;"><i class="far fa-check-circle"></i></td>
              <td>{{ingredient.split(" - ")[0]}}</td>
              <td>{{ingredient.split(" - ")[1]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="textRecipe">
        <h5><i class="far fa-file-alt"></i> Рецептата:</h5>
        <div>
          <p>{{recipe.recipe}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  name: 'recipeDetails',
  props: {
    recipe: Object
  },
  data: function() {
    return {
      email: "",
    };
  },
  methods: {
    deleteHandler(id) {
      db.collection("Recipes")
        .doc(id)
        .delete();
      this.$router.push("/");

      console.log("Recipe deleted successfully!");
    },
    editHandler(recipe) {
      this.$router.push({ name: "recipeEdit", params: { recipe } });
    },
  },
  created() {
    console.log(this.recipesToConfirm);
    this.email = localStorage.getItem("UserEmail");
  }
};
</script>

<style scoped>
.actions {
  text-align: right;
  margin-bottom: -50px;
}

.container {
  color: black;
  border: 1px solid red;
  background: whitesmoke;
}

h1 {
  border-bottom: 1px solid rebeccapurple;
}

.row {
  background: white;
}

img {
  float: left;
  width: 500px;
  height: 400px;
}

.sideInfo {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-top: 6px solid grey;
  margin-left: -50%;
}

.ingredients {
  font-size: 18px;
  width: 400px;
}

.ing {
  padding: 20px 0px 0 0; /* top, rigth, bottom, left */
}
.ing h5 {
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding: 20px 0 20px 0;
  text-align: left;
}

table{
  text-align: left;
}

ul p {
  display: inline;
}

ul .ingredient {
  color: blue;
}

ul .quantity {
  color: red;
  float: right;
  text-align: justify;
}

.textRecipe h5 {
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding: 20px 0 20px 0;
  text-align: left;
}

.far {
  color: red;
}

.textRecipe p {
  text-align: justify;
}
</style>