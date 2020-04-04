<template>
  <div>
    <!-- Footer -->
    <footer class="page-footer font-small pt-4">
      <!-- Footer Links -->
      <div class="container text-center text-md-left">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-4 mx-auto">
            <!-- Content -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Recipe Share</h5>
            <p>
              This is simple VueJS Project Created for SoftUni Front-End Frameworks course.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="https://softuni.bg/" target="_blank">≫ SoftUni</a>
              </li>
              <li>
                <a href="https://softuni.bg/trainings/2820/vuejs-march-2020" target="_blank">≫ VueJS Course</a>
              </li>
              <li>
                <a href="#!" target="_blank">Link 3</a>
              </li>
              <li>
                <a href="#!" target="_blank">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h5>

            <ul class="list-unstyled">
              <li>
                <router-link to="/home"><a>≫ Home</a></router-link>
              </li>
              <li>
                <router-link to="/register"><a>≫ Registration</a></router-link>
              </li>
              <li>
                <router-link to="/login"><a>≫ Login</a></router-link>
              </li>
              <li>
                <a>≫ Products</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Categories</h5>

            <ul class="list-unstyled">
              <li>
                <router-link to="/salads"><a>≫ Salads</a></router-link>
              </li>
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <hr />

      <!-- Social buttons -->
      <ul class="list-unstyled list-inline text-center social-icons">
        <li class="list-inline-item">
          <a
            class="btn-floating btn-fb mx-1"
            href="https://www.facebook.com/kristian.kazalev"
            target="_blank"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a
            class="btn-floating btn-instagram mx-1"
            href="https://www.instagram.com/kristian.kazalev/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-github mx-1" href="https://github.com/Kazalev" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a
            class="btn-floating btn-li mx-1"
            href="https://www.linkedin.com/in/kristian-kazalev-456548182/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a
            class="btn-floating btn-pinterest mx-1"
            href="https://www.pinterest.com/"
            target="_blank"
          >
            <i class="fab fa-pinterest"></i>
          </a>
        </li>
      </ul>
      <!-- Social buttons -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © {{ new Date().getFullYear() }} Copyright
        <p>SoftUni Front-End Frameworks | VueJS | Kristian Kazalev</p>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-footer {
  background-color: #2d393d;
  color: white;
}

.social-icons {
  font-size: 34px;
}

.social-icons li a {
  color: white;
}

.social-icons li a:hover {
  color: lightblue;
}

.social-icons li i:hover {
  transform: scale(1.3);
  transition: 500ms;
}

.col-md-2 > ul > li > a {
  text-decoration: none;
  color: cornsilk;
  font-size: 15px;
}

.col-md-2 > ul > li > a:hover {
  transform: scale(1.3);
  padding-left: 15px;
  transition: 750ms;
}
</style>
