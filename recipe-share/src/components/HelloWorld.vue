<template>
  <div class="hello">
    <!-- <h3>{{ msg }}</h3> -->
    <p>Hello from HelloWorld Component</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #000;
  margin: 40px 0 0;
  padding-bottom: 800px;
}

p {
  color: blue;
}
</style>
