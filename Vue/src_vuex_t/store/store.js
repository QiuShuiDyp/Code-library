export default {
  // 状态对象
  state:{
    name:'张三',
    age:12,
    work:'学生',
    sex:'boy',
    level:'三'
  },
  getters: {
    stateCount:(state) => {
      return state
    },
    introductSelf:(state, getters)=>{
      return `大家好，我是${state.level}年级的${state.name},今年${state.age}岁,${getters.stateCount.name}`
    }
  },
  mutations: {
    addAge(state,num=1){
      if (typeof(num) === 'object'){
        state.age +=1
      }else if (typeof(num) === 'number'){
        state.age += num
      }
    }
  },
  actions: {
    // addAge (context) {
    //   context.commit('addAge')
    // },
    // context参数与 store 实例具有相同方法和属性
    addAge(context){
      // 使用setTimeout实现异步
      setTimeout(() => {
       context.commit('addAge',1)
       context.dispatch('addTenAge', context.state.age)
      }, 1000);
    },
    addTenAge(context,num){
      setTimeout(()=>{
        context.commit('addAge', num)
      },1000)
    }
  },
}