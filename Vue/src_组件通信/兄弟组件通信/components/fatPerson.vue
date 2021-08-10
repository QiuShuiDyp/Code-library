<template>
  <div style="background-color:yellow">{{msg}}{{otherMsg}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg:"这是胖子组件",
      otherMsg:''
    }
  },
  methods: {

  },
  mounted(){
    this.$root.event.$on('topic2',msg => this.otherMsg = msg)
    console.log(this.otherMsg)
  }
}
</script>

<style>

</style>