import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  user_name:'',
  count:1,
  todos:[
    {id:1,text:'...',done:true},
    {id:2,text:'eerew',done:true},
    {id:2,text:'eerew',done:false}
  ]
}

// 更改state的状态
const mutations = {
  showUserName(state)
  {
    alert(state.user_name);
  },
  // increment(state,n){
  //   state.count+=n;
  // },
  increment(state,payload){
    state.count+=payload.amount;
  }
}

const actions = {
  increment(context){
    context.commit('increment');
  }
}

const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
