import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import recipeDetails from './components/recipes/recipeDetails.vue';
import recipeAdd from './components/recipes/recipeAdd.vue';
import recipeEdit from './components/recipes/recipeEdit.vue';
import recipeSuggestion from "./components/recipes/recipeSuggestion.vue";
import NotFound from './components/shared/NotFound.vue';
import userProfile from './components/user/userProfile.vue';
import Salads from "./components/recipes/categories/Salads.vue";
import Soups from "./components/recipes/categories/Soups.vue";
import Main from "./components/recipes/categories/Main.vue";
import Desserts from "./components/recipes/categories/Desserts.vue";
import Drinks from "./components/recipes/categories/Drinks.vue";

function authGuard(to, from, next) {
  if (localStorage.getItem("userId") !== null) {
    next('/');
  } else {
    next();
  }
}

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: authGuard
  },
  {
    path: '/register',
    component: Register,
    beforeEnter: authGuard
  },
  {
    path: '/recipe/details/:id',
    name: 'recipeDetails',
    component: recipeDetails,
    props: true
  },
  {
    path: '/recipeAdd',
    name: 'recipeAdd',
    component: recipeAdd,
    props: true
  },
  {
    path: '/recipeEdit',
    name: 'recipeEdit',
    component: recipeEdit,
    props: true
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
  },
  {
    path: '/recipeSuggestion',
    name: 'recipeSuggestion',
    component: recipeSuggestion
  },
  {
    path: '/salads',
    name: 'Salads',
    component: Salads
  },
  {
    path: '/soups',
    name: 'Soups',
    component: Soups
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/desserts',
    name: 'Desserts',
    component: Desserts
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '*',
    component: NotFound
  }
]