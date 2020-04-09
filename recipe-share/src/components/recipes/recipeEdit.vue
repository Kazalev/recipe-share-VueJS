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
              @blur="$v.recipeToUpdate.name.$touch"
            />

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.name.$error">
              <p v-if="!$v.recipeToUpdate.name.required" class="error">Name is required!</p>
            </template>
            <!-- end if error -->

            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Снимка..."
              name="img"
              id="img"
              v-model="recipeToUpdate.img"
              @blur="$v.recipeToUpdate.img.$touch"
            />

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.img.$error">
              <p v-if="!$v.recipeToUpdate.img.required" class="error">Image is required!</p>
            </template>
            <!-- end if error -->

            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Време"
              name="time"
              id="time"
              v-model="recipeToUpdate.time"
              @blur="$v.recipeToUpdate.time.$touch"
            />

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.time.$error">
              <p v-if="!$v.recipeToUpdate.time.required" class="error">Time is required!</p>
            </template>
            <!-- end if error -->

            <textarea
              class="form-control mb-3 error"
              placeholder="Съставка - Количество"
              name="ingredients"
              id="ingredients"
              v-model="recipeToUpdate.ingredients"
              @change="$v.recipeToUpdate.ingredients.$touch"
            ></textarea>
            {{recipeToUpdate.ingredients}}

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.ingredients.$error">
              <p v-if="!$v.recipeToUpdate.ingredients.required" class="error">Ingredients is required!</p>
            </template>
            <!-- end if error -->

            <select
              class="form-control mb-3 error"
              name="category"
              id="category"
              v-model="recipeToUpdate.category"
              @change="$v.recipeToUpdate.category.$touch"
            >
              <option :value="null">Избери категория...</option>
              <option value="Салати">Салати</option>
              <option value="Супи">Супи</option>
              <option value="Основни ястия">Основни ястия</option>
              <option value="Десерти">Десерти</option>
              <option value="Напитки">Напитки</option>
            </select>

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.category.$error">
              <p v-if="!$v.recipeToUpdate.category.required" class="error">Category is required!</p>
            </template>
            <!-- end if error -->

            <select
              class="form-control mb-3 error"
              name="difficulty"
              id="difficulty"
              v-model="recipeToUpdate.difficulty"
              @change="$v.recipeToUpdate.difficulty.$touch"
            >
              <option :value="null">Избери трудност...</option>
              <option value="Лесна">Лесна</option>
              <option value="Средна">Средна</option>
              <option value="Трудна">Трудна</option>
            </select>

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.difficulty.$error">
              <p v-if="!$v.recipeToUpdate.difficulty.required" class="error">Difficulty is required!</p>
            </template>
            <!-- end if error -->

            <textarea
              class="form-control mb-3 error"
              placeholder="Описание на рецептата..."
              name="recipe"
              id="recipe"
              v-model="recipeToUpdate.recipe"
              @change="$v.recipeToUpdate.recipe.$touch"
            ></textarea>

            <!-- if error -->
            <template v-if="$v.recipeToUpdate.recipe.$error">
              <p v-if="!$v.recipeToUpdate.recipe.required" class="error">Recipe is required!</p>
              <p v-else-if="!$v.recipeToUpdate.recipe.minLength" class="error">Recipe must be at least 10 symbols!</p>
            </template>
            <!-- end if error -->

            <!-- <vue-editor v-model="recipeToUpdate.recipe" /> -->

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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
// import { VueEditor } from "vue2-editor";

export default {
  name: "recipeEdit",
  mixins: [validationMixin],
  // components: { VueEditor },
  props: {
    recipe: Object
  },
  data: function() {
    return {
      recipeToUpdate: {
        name: this.recipe.name,
        img: this.recipe.img,
        time: this.recipe.time,
        ingredients: this.recipe.ingredients,
        difficulty: this.recipe.difficulty,
        category: this.recipe.category,
        recipe: this.recipe.recipe
      }
    };
  },
  validations: {
    recipeToUpdate: {
      name: {
        required
      },
      img: {
        required
      },
      time: {
        required
      },
      ingredients: {
        required
      },
      category: {
        required
      },
      difficulty: {
        required
      },
      recipe: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    editHandler(id, recipeToUpdate) {
      this.$v.$touch();
      if (this.$v.$error) {
        return this.$notify({
          group: "foo",
          title: "Опаа!",
          text: "Моля попълнете правилно всички полета!"
        });
      }

      console.log([id, recipeToUpdate.time, recipeToUpdate.name]);

      console.log([this.recipeToUpdate.ingredients]);
      let splited = this.recipeToUpdate.ingredients.split(", ");
      console.log(splited);

      db.collection("Recipes")
        .doc(id)
        .update({
          name: recipeToUpdate.name,
          img: recipeToUpdate.img,
          time: recipeToUpdate.time,
          ingredients: splited,
          difficulty: recipeToUpdate.difficulty,
          category: recipeToUpdate.category,
          recipe: recipeToUpdate.recipe
        })
        .then(() => {
          console.log("Recipe updated!");
          alert("Recipe updated!");
        });

        this.$router.push("/");
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