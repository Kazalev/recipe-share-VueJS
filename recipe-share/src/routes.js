import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import recipeDetails from './components/recipes/recipeDetails.vue';
import NotFound from './components/shared/NotFound.vue';

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
    path: '*',
    component: NotFound
  }
]