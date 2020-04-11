<template>
  <div>
    <div class="container">
      <div v-if="email == 'kristian.kazalev@abv.bg'" class="row actions p-2 justify-content-center">
        <button @click="editHandler(recipe)" class="btn btn-primary mr-2">Edit</button>
        <button @click="deleteHandler(recipe.id)" class="btn btn-danger">Delete</button>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <img :src="recipe.img" :alt="recipe.name" />
        </div>
        <div class="col-sm-5 sideInfo">
          <h2>{{recipe.name}}</h2>
          <p class="pt-5">
            <span>
              <i style="width: 22px;" class="far fa-clipboard"></i>
            </span>
            {{recipe.category}}
          </p>
          <p>
            <span>
              <i class="fas fa-list-ol"></i>
            </span>
            {{recipe.difficulty}}
          </p>
          <p>
            <span>
              <i class="far fa-clock"></i>
            </span>
            {{recipe.time}} мин.
          </p>
        </div>
      </div>
      <div class="ing">
        <h2>Необходими съставки:</h2>
        <!-- {{recipe.ingredients}}
        <ul 
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
              <th scope="col">Съставка</th>
              <th scope="col">Количество</th>
            </tr>
          </thead>
          <tbody v-for="(ingredient, index) in recipe.ingredients" :key="index">
            <tr>
              <td @click="$event.target.classList.toggle('green')">
                <i class="fas fa-check-circle"></i>
                {{ingredient.split(" - ")[0]}}
              </td>
              <td>{{ingredient.split(" - ")[1]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="textRecipe">
        <h5>
          <i class="far fa-file-alt"></i> Рецептата:
        </h5>
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
  name: "recipeDetails",
  props: {
    recipe: Object
  },
  data: function() {
    return {
      email: "",
      id: this.recipe.id,
      FireDocument: Object
    };
  },
  methods: {
    editHandler(recipe) {
      this.$router.push({ name: "recipeEdit", params: { recipe } });
    },
    deleteHandler(id) {
      let x = confirm("Ще изтриете тази рецепта завинаги!");
      if (x) {
        db.collection("Recipes")
          .doc(id)
          .delete();
        this.$router.push("/");

        console.log("Recipe deleted successfully!");
      }
    }
  },
  created() {
    this.email = localStorage.getItem("UserEmail");
    console.log(this.id);
  }
};
</script>

<style scoped>
.container{
  font-size: 21px;
}

.actions .btn {
  width: 150px;
  margin-bottom: 20px;
}
.green {
  color: #89c245;
}
.container {
  color: black;
  background: whitesmoke;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 1000px;
}

h2 {
  border-bottom: 1px solid rebeccapurple;
}

img {
  max-width: 580px;
  width: auto;
  height: 350px;
  border-radius: 2px;
}

.sideInfo {
}

.sideInfo h2 {
  text-align: center;
}

.sideInfo p {
  font-size: 24px;
  text-align: left;
  padding: 15px;
}

.sideInfo span {
  padding-right: 10px;
  border-right: 1px solid grey;
}

.ingredients {
  font-size: 18px;
  width: 400px;
}

.ing {
  padding: 20px 0px 0 0; /* top, rigth, bottom, left */
}
.ing h2 {
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding: 20px 0 20px 0;
  text-align: left;
}

table {
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

table {
  font-size: 21px;
}
</style>