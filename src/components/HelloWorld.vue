<template>
	<div id="app">
		<header>
			<h1>Hello Todos！</h1>
		</header>
    <input type="text" value="" v-model="username" v-on:change="userNameChange">
    <p>{{doneTodosCount}}</p>
    <p>{{count}}</p>
    <input type="button"  value="提交" @click="submit">
	</div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
	export default {
    // props:["placeholder"],
    data(){
      return{
        username:''
      }
    },
    methods:{
      // submit(){
      //   this.$store.commit("showUserName");
      // },
      submit(){
        this.$store.commit('increment',{
          amount:10
        })
      },
      userNameChange(){
        this.$store.state.user_name = this.username;
      },
    },
    // computed: {
    //   doneTodosCount () {
    //     return this.$store.getters.doneTodosCount
    //   }
    // }
    // computed:{
    //   count(){
    //     return this.$store.state.count+3;
    //   }
    // }
    computed:{
      ...mapGetters(['doneTodosCount']),
      ...mapState(['count'])
    }
	}
</script>
