<template>
  <div>
    <div class="container">
      <h1>{{recipe.name}}</h1>
      <div class="actions">
        <button @click="editHandler(recipe.id)" class="btn btn-primary">Edit</button>
        <button @click="deleteHandler(recipe.id)" class="btn btn-danger">Delete</button>
      </div>
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
        </ul> -->
      </div>
      <div class="textRecipe">
        <h5>Рецептата:</h5>
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
  props: {
    recipe: Object
  },
  data: function() {
    return {};
  },
  methods: {
    deleteHandler(id) {
      db.collection("Recipes")
        .doc(id)
        .delete();
        this.$router.push("/home");

      console.log("Recipe deleted successfully!");
    },
    editHandler(){
      
    }
  }
};
</script>

<style scoped>
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
  margin-left: -40%;
}

.sideInfo {
  border-left: 1px solid grey;
  border-top: 6px solid grey;
  margin-left: -30%;
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

.textRecipe p {
  text-align: justify;
}
</style>