<template>
  <div class="hello">
    <div>
      <h1>个人信息</h1>
      <span>姓名:{{name}}</span> &nbsp;
      <span>年龄:{{age}}</span><br>
      <span>职业:{{work}}</span>&nbsp;
      <span>性别:{{sex}}</span><br>
      <span>年级:{{level}}</span><br>
      <span>自我介绍:{{introductSelf}}</span><br>
      <div>
    </div>
      <button @click="addAge">变更年龄</button>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'年级'
    }
  },
  computed: {
    // 声明计算属性的方式
    name(){
      return this.$store.state.name
    },
    age(){
      return this.$store.state.age
    },
    //mapState函数简写计算属性的方法1
    ...mapState({
      // 入参是state
      work:state => state.work,
      // 可以给state进行一个重命名
      sex:'sex',
      level(state){
        return state.level+this.msg
      }
    }),
    // introductSelf(){
    //   return this.$store.getters.introductSelf
    // }
    // mapGetters
    ...mapGetters([
      'introductSelf'
    ]),
    // mapState简写方式2——如果计算属性的名称和state 的子节点名称相同时，可以使用mapState传一个字符数组
    // ...mapState([
    //   'work','sex'
    // ])
  },
  methods: {
    // mapMutations
    // ...mapMutations([
    //   'addAge'
    // ]),
    // addAge(){
    //   return this.$store.commit('addAge',10)
    // },
    addAge(){
      this.$store.dispatch('addAge', 10)
    }
    // ...mapActions([
    //   'addAge'
    // ])
  }
}
</script>

<style scoped>

</style>
