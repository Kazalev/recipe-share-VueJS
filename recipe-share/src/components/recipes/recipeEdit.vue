<template>
  <div>
    <h1>Hello from recipe Suggestion Component</h1>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
          <form @submit.prevent="editHandler(recipe.id, recipeToUpdate)">
            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Име на ястието, десерта или напитката..."
              name="name"
              id="name"
              v-model="recipeToUpdate.name"
            />
            {{recipeToUpdate.name}}
            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Снимка..."
              name="img"
              id="img"
              v-model="recipeToUpdate.img"
            />

            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Време"
              name="time"
              id="time"
              v-model="recipeToUpdate.time"
            />

            <select
              class="form-control mb-3 error"
              name="category"
              id="category"
              v-model="recipeToUpdate.category"
            >
              <option :value="null">Избери категория...</option>
              <option value="Салати">Салати</option>
              <option value="Супи">Супи</option>
              <option value="Основни ястия">Основни ястия</option>
              <option value="Десерти">Десерти</option>
              <option value="Напитки">Напитки</option>
            </select>

            <select
              class="form-control mb-3 error"
              name="difficulty"
              id="difficulty"
              v-model="recipeToUpdate.difficulty"
            >
              <option :value="null">Избери трудност...</option>
              <option value="Лесна">Лесна</option>
              <option value="Средна">Средна</option>
              <option value="Трудна">Трудна</option>
            </select>

            <textarea
              class="form-control mb-3 error"
              placeholder="Описание на рецептата..."
              name="recipe"
              id="recipe"
              v-model="recipeToUpdate.recipe"
            ></textarea>

            <button type="submit" class="btn btn-success">Промени рецепта</button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  name: "recipeEdit",
  props: {
    recipe: Object
  },
  data: function() {
    return {
      recipeToUpdate: {
        name: this.recipe.name,
        img: this.recipe.img,
        time: this.recipe.time,
        difficulty: this.recipe.difficulty,
        category: this.recipe.category,
        recipe: this.recipe.recipe
      }
    };
  },
  methods: {
    editHandler(id, recipeToUpdate) {
      console.log([id, recipeToUpdate.time, recipeToUpdate.name]);

      db.collection("Recipes")
        .doc(id)
        .update({
          name: recipeToUpdate.name,
          img: recipeToUpdate.img,
          time: recipeToUpdate.time,
          difficulty: recipeToUpdate.difficulty,
          category: recipeToUpdate.category,
          recipe: recipeToUpdate.recipe
        })
        .then(() => {
          console.log("Recipe updated!");
          alert("Recipe updated!");
        });
    }
  }
};
</script>

<style scoped>
.col-8 {
  margin-top: 30px;
  margin-bottom: 50px;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: grey;
  border-radius: 8px;
  opacity: 0.95;
}

.btn {
  margin-top: 30px;
  width: 50%;
}

h1 {
  margin-top: 30px;
  background-color: white;
  color: black;
  text-align: center;
  border-top: 4px solid red;
  border-bottom: 4px solid red;
}

.controls {
  float: right;
  font-size: 28px;
}

.controls div {
  padding-right: 10px;
  display: inline;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
  color: black;
}

input.error {
  border-left-color: #a8413f;
}
</style>