<template>
  <div class="hello">
    <child :ques="ques" @getmessage="getMessage"></child>
    {{answ}}
  </div>
</template>

<script>
import child from './child.vue'
export default {
  components: { child },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data () {
    return {
      ques:'helloWorld',
      answ:''
    }
  },
  methods: {
    getMessage(param){
      this.answ = param
    }
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
