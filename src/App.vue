<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cookie from './kit/cookie'
export default {
  created (){
    let vue = this;
	debugger
	let loginStatus = vue.getCookie("loginStatus")
	if(!loginStatus){
		vue.$router.push('./login');
	}
    
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{ margin:0;  padding:0;}
html,body{overflow: hidden}
#app{width: 1024px;margin: 0 auto;border:1px solid #D9D9D9;border-top:none;height: 100%;}
</style>
