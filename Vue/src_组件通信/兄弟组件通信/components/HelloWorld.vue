<template>
  <div class="hello">
    <shin-person></shin-person>
    <fat-person></fat-person>
  </div>
</template>

<script>
import fatPerson from './fatPerson'
import shinPerson from './shinPerson.vue'
export default {
  components: { shinPerson, fatPerson },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
