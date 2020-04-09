<template>
  <div>
    <h1>Hello from recipe Add Component</h1>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
          <form @submit.prevent="submitHandler()">
            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Име на ястието, десерта или напитката..."
              name="name"
              id="name"
              v-model="name"
              @blur="$v.name.$touch"
            />

            <!-- if error -->
            <template v-if="$v.name.$error">
              <p v-if="!$v.name.required" class="error">Name is required!</p>
            </template>
            <!-- end if error -->

            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Снимка..."
              v-model="imgUrl"
              @blur="$v.imgUrl.$touch"
            />

            <!-- if error -->
            <template v-if="$v.imgUrl.$error">
              <p v-if="!$v.imgUrl.required" class="error">Image is required!</p>
            </template>
            <!-- end if error -->

            <input
              class="form-control mb-3 error"
              type="number"
              placeholder="Време в минути..."
              v-model="time"
              @blur="$v.time.$touch"
            />

            <!-- if error -->
            <template v-if="$v.time.$error">
              <p v-if="!$v.time.required" class="error">Time is required!</p>
            </template>
            <!-- end if error -->

            <input
              class="form-control mb-3 error"
              type="text"
              placeholder="Съставка - Количество"
              v-model="ingredients"
              @blur="$v.ingredients.$touch"
            />

            <!-- if error -->
            <template v-if="$v.ingredients.$error">
              <p v-if="!$v.ingredients.required" class="error">Ingredients is required!</p>
            </template>
            <!-- end if error -->

            <!-- <div class="form-group" v-for="(ing, i) in ingredients" :key="i">
              <input
                type="text"
                class="form-control error"
                placeholder="Съставка - Количество"
                v-model="ing.name"
              />
              {{ing}}
              <div class="controls">
                <div
                  @click="remove(i)"
                  v-show="i || (!i && ingredients.length > 1)"
                  style="color: red;"
                >
                  <i class="fas fa-minus-circle"></i>
                </div>
                <div @click="add(i)" v-show="i == ingredients.length - 1" style="color: green;">
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>

              <i class="btn btn-success" @click="remove(i)" v-show="i || (!i && inputs.length > 1)">remove</i>
              <i class="btn btn-success" @click="add(i)" v-show="i == inputs.length - 1">add</i>
            </div>-->

            <select
              class="form-control mb-3 error"
              name="category"
              id="category"
              v-model="category"
              @change="$v.category.$touch"
            >
              <option :value="null">Избери категория...</option>
              <option value="Салати">Салати</option>
              <option value="Супи">Супи</option>
              <option value="Основни ястия">Основни ястия</option>
              <option value="Десерти">Десерти</option>
              <option value="Напитки">Напитки</option>
            </select>

            <!-- if error -->
            <template v-if="$v.category.$error">
              <p v-if="!$v.category.required" class="error">Category is required!</p>
            </template>
            <!-- end if error -->

            <select
              class="form-control mb-3 error"
              name="difficulty"
              id="difficulty"
              v-model="difficulty"
              @change="$v.difficulty.$touch"
            >
              <option :value="null">Избери трудност...</option>
              <option value="Лесна">Лесна</option>
              <option value="Средна">Средна</option>
              <option value="Трудна">Трудна</option>
            </select>

            <!-- if error -->
            <template v-if="$v.difficulty.$error">
              <p v-if="!$v.difficulty.required" class="error">Difficulty is required!</p>
            </template>
            <!-- end if error -->

            <textarea
              class="form-control mb-3 error"
              placeholder="Описание на рецептата..."
              name="recipe"
              id="recipe"
              v-model="recipe"
              @change="$v.recipe.$touch"
            ></textarea>

            <!-- if error -->
            <template v-if="$v.recipe.$error">
              <p v-if="!$v.recipe.required" class="error">Recipe is required!</p>
              <p v-else-if="!$v.recipe.minLength" class="error">Recipe must be at least 10 symbols!</p>
            </template>
            <!-- end if error -->

            <button type="submit" class="btn btn-success">Добави рецепта</button>
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
// const quantityRe = helpers.regex(
//   "quantityRe",
//   /([а-яА-Я]+\s[а-яА-Я]+)\s-\s((\d|\d.\d)\s[а-яА-Я]+\s[а-яА-Я]+)/gm
// );

export default {
  name: "recipeAdd",
  mixins: [validationMixin],
  data: function() {
    return {
      name: "",
      imgUrl: "",
      time: null,
      ingredients: [],
      category: null,
      difficulty: null,
      recipe: ""
    };
  },
  validations: {
    name: {
      required
    },
    imgUrl: {
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
  },
  methods: {
    add() {
      this.ingredients.push(name);
    },
    remove(i) {
      this.ingredients.splice(i, 1);
    },
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return this.$notify({
          group: "foo",
          title: "Опаа!",
          text: "Моля попълнете правилно всички полета!"
        });
      }

      console.log([this.ingredients]);
      let splited = this.ingredients.split(", ");
      console.log(splited);

      db.collection("Recipes").add({
        name: this.name,
        img: this.imgUrl,
        time: this.time,
        category: this.category,
        difficulty: this.difficulty,
        ingredients: splited,
        date: new Date(),
        recipe: this.recipe
      });

      console.log("Recipe was added successfully!");
      this.$notify({
        group: "foo",
        title: "Браво!",
        text: "Успешно добавихте нова рецепта!"
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