<template>
  <div>
    {{msg}}
    <button @click="postMessage">发送信息</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'我是瘦子',
      otherMsg:'',
      helloMsg:'你好，胖子'
    }
  },
  methods: {
    postMessage(){
      this.$root.event.$emit('topic2', this.helloMsg)
    }
  },
  mounted () {
    this.$root.event.$emit('topic2', this.helloMsg)
  }
}
</script>

<style>

</style>