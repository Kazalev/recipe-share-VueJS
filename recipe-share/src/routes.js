import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import recipeDetails from './components/recipes/recipeDetails.vue';
import recipeAdd from './components/recipes/recipeAdd.vue';
import NotFound from './components/shared/NotFound.vue';
import userProfile from './components/user/userProfile.vue';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
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
    component: recipeAdd
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
  },
  {
    path: '*',
    component: NotFound
  }
]