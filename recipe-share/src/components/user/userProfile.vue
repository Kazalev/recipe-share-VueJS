<template>
  <div class="container pb-4 pt-2">
    <!-- <div class="container userInfo mt-4 pb-5">
      <h1 class="p-4">Your personal information</h1>
      <div class="row">
        <img :src="usersFromDB[0].img" />
        <div class="col-sm text">
          <p>Email: {{ usersFromDB[0].email }}</p>
          <p>Username: {{ usersFromDB[0].username }}</p>
          <p>Age: {{ usersFromDB[0].age }}</p>
        </div>
      </div>
    </div> -->

    <div class="row">
      <div class="col-sm-4">
      <div class="profile-card">
        <div class="image-container">
          <img :src="usersFromDB[0].img" style="width: 100%" />
          <div class="title">
            <h2>{{usersFromDB[0].fullName}}</h2>
          </div>
        </div>
        <div class="main-container">
          <p>
            <i class="fas fa-user info"></i>
            Username - {{usersFromDB[0].username}}
          </p>
          <p>
            <i class="fas fa-at info"></i>
            Email - {{usersFromDB[0].email}}
          </p>
          <p>
            <i class="fas fa-sort-numeric-up info"></i>
            Age - {{usersFromDB[0].age}}
          </p>
          <hr />

          <blockquote class="blockquote text-center">
            <p
              class="mb-0"
            >"Programming isn't about what you know; it's about what you can figure out.”</p>
            <footer class="blockquote-footer">
              <cite title="Source Title">Chris Pine</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="col-sm-8 pl-5">
      <table
        v-if="email == 'kristian.kazalev@abv.bg'"
        class="table table-dark table-hover table-striped mt-4"
      >
        <thead>
          <tr>
            <th scope="col">Снимка</th>
            <th scope="col">Категория</th>
            <th scope="col">Име</th>
            <th scope="col">Трудност</th>
            <th scope="col">Време</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody v-for="(recipe, index) in recipesToConfirm" :key="index">
          <tr>
            <td><img :src="recipe.img" style="width: 75px; height: 50px;" /></td>
          <router-link :to="{ name: 'recipeDetails', params: { recipe }}">
            <td>{{recipe.category}}</td>
          </router-link>
            <td>{{recipe.name}}</td>
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
      email: "default",
      usersFromDB: null
    };
  },
  firestore: {
    recipesToConfirm: db.collection("recipesToConfirm"),
    usersFromDB: db
      .collection("Users")
      .where("email", "==", localStorage.getItem("UserEmail"))
  },
  created() {
    console.log(this.recipesToConfirm);
    this.email = localStorage.getItem("UserEmail");
    console.log(this.email);
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
        ingredients: recipe.ingredients,
        time: recipe.time,
        difficulty: recipe.difficulty,
        recipe: recipe.recipe
      });

      console.log("Data was approved successfully!");
      console.log(recipe.name);
      this.$notify({
        group: "foo",
        title: "Внимание!",
        text: "Успешно одобрихте рецептата!"
      });

      db.collection("recipesToConfirm")
        .doc(recipe.id)
        .delete();
    },
    disapproveHandler(id) {
      db.collection("recipesToConfirm")
        .doc(id)
        .delete();

      console.log("Recipe deleted successfully!");
      this.$notify({
        group: "foo",
        title: "Внимание!",
        text: "Успешно отхвърлихте рецептата!"
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: #3b4a4a;
}

.userInfo {
  background: url("../../assets/userBG-2.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.userInfo img {
  height: 340px;
  width: 290px;
  padding: 10px;
}

.text {
  font-size: 26px;
  text-align: left;
}

.profile-card {
  color: black;
  width: 400px;
  margin: auto;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
}

.image-container {
  position: relative;
}

.title h2 {
  text-align: left;
  padding-left: 20px;
}

.info {
  color: #4b4fe2;
  margin-right: 16px;
  font-size: 18px;
}

.main-container {
  text-align: left;
  padding: 20px;
}

tbody tr a td {
  cursor: default;
  color: white;
  text-decoration: none;
}
</style>