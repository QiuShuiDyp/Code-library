<template>
  <div>
    这是son组件{{msg}}
    <button @click="postMsg">传递信息给祖组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:""
    }
  },
  mounted () {
    console.log(this.$attrs)
    this.msg = this.$attrs.ques
  },
  methods: {
    postMsg(){
      console.log(this.$listeners)
      this.$listeners.getmessage('Hi')
    }
  }
}
</script>

<style>

</style>