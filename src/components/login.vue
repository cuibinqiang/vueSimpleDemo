<template>
    <div id="login">
        <el-form ref="form" :model="paramForm" label-width="80px" >
            <el-form-item label="账号" >
				<el-input type="text" v-model="paramForm.name" placeholder="请输入账号" size="10px"/></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="paramForm.pwd" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="register"><a>立即注册</a></el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    //import Top from './layout/header.vue'
    import Cookie from '../kit/cookie'
    export default {
        created () {//初始化时执行
            let vue, loginStatus
            vue = this
            loginStatus = vue.getCookie("loginStatus")
            if(loginStatus){
                console.log("之前登录过")
                setTimeout(function () {
                    vue.$router.push({name:'home', params:{msg:"自动登录",user:vue.$data.paramForm.name}})
                },2000)
            } else {
                console.log("没有登录过")
            }
        },
        data () {
            return {
				paramForm:{
					name:null,
					pwd:null
				}
            }
        },
        methods: {
            login () {
				debugger
                let vue, name, pwd,paramForm;
                vue = this;
				paramForm = vue.$data.paramForm;
                name = paramForm.name
                pwd = paramForm.pwd

                if(!name || !pwd) {
				   //弹出框
				   vue.msgTip("warning","登录账号或密码不正确")
                   return;
                } else {
                   if(name === '123456' && pwd === '111111'){
					   vue.msgTip("success","登录成功，即将跳转...");
                       vue.setCookie("loginStatus",true,1)
					   setTimeout(function(){
							vue.$router.push('./index')
					   },2000);		
                       
                   } else {
                       vue.msgTip("error","登录账号或密码不正确");
                   }
                }
            },
            register () {
                let vue = this
                console.log("这是一个空的事件哦！")
            },
			/*
			msg:提示信息
			type:提示类型(error：错误，warning：警告，success：成功，为空时则为普通消息提示框)
			*/
			msgTip(type,msg){
				this.$message({
				  message: msg,
				  type: type,
				  center: true,
				});	
			}
        }
    }
</script>

<style>

</style>