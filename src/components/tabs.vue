<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" tab-position="top">
    <el-tab-pane label="用户管理" name="first">这是用户管理的内容</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">{{secondContent}}</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">这是角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">这是定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  import Login from './login.vue'
  export default {
    data() {
      return {
        activeName: 'first',
		secondContent:'',
		
      }
    },
	methods:{
		handleClick(tab, event) {
			let vue = this;
			let name = tab.name;
			if(name=="second"){
				vue.$data.secondContent='测试的sdsfdsf';
			}
		}
	}
  };
</script>