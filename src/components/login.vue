<template>
    <div class='login'>
        <form v-if='islogin'>
            <p><span>用户名：</span><input type="text" v-model='name'></p>
            <p><span>密码：</span><input type="password" v-model='pass'></p>
        </form>
        <form v-else>
            <p><span>用户名：</span><input type="text" v-model='name'></p>
            <p><span>密码：</span><input type="password" v-model='pass'></p>
            <p><span>确认密码：</span><input type="password" v-model='repass'></p>
            <p>
                <button @click='confirm'>确定</button>
                <button @click='cancle'>取消</button>
            </p>
        </form>
        <footer>
            <button class="btn" @click='login'>登录</button>
            <button class="btn" @click='reg'>注册</button>
        </footer>
    </div>
</template>
<script>
export default {
   data() {
      return {
          islogin:true,
          name:'',
          pass:'',
          repass:''

      }
   },
   computed:{
   },
   methods:{
       login(){
           this.islogin = true
           if(this.name=='' || this.pass == ''){
               alert('请输入用户名或密码')
           }else{
               if(this.name === localStorage.name && this.pass === localStorage.pass){
                   this.islogin = false
                   this.$router.push('/home')
               }else{
                   alert('用户名或密码错误')
               }
           }
           this.name = '';
           this.pass = '';
       },
       reg(){
            this.islogin = false; 
       },
    //    取消
       cancle(){
           this.islogin = true; 
       },
    //    确认注册
       confirm(){
            if(this.pass === this.repass){
                localStorage.setItem('name',this.name);
                localStorage.setItem('pass',this.pass);
                localStorage.setItem('repass',this.repass);
                this.islogin = true; 
                this.name = '';
                this.pass = '';
            }else{
                alert('两次密码输入不一致');
            }
       }

   }
}
</script>

<style scoped lang="scss">
.login{
    width:96%;
    margin:10px auto;
    input{
        margin-top:20px;
        margin-left:10px;
        height:26px;
        line-height: 26px;
    }
    span{
        display:inline-block;
        width:80px;
        text-align: right;
    }
    footer{
        position:fixed;
        bottom:5px;
        left:0;
        width:100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content:space-around;
        .btn{
            flex:1;
            height:60px;
            line-height: 60px;
            margin-top:50px;
            background-color:#4747c7;
            color:#fff;
            border-radius:5px;
            outline: none;
        }
    }
    
}

</style>
