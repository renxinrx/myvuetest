<template>
    <div class='home'>
        <ul>
            <li><router-link :to="{name:'user'}">用户中心</router-link></li>
            <li><router-link :to="{name:'list'}">文章列表</router-link></li>
        </ul>
        
        <router-view/>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   computed:{
   },
   methods:{
   }
}
</script>

<style scoped lang="scss">
    .home{
        ul{
            display: flex;
            width: 100%;
            position:fixed;
            bottom:0;
            left:0;
            flex-flow:row nowarp;
            justify-content:space-around;
        }
        li{
            flex:1;
            height:60px;
            line-height: 60px;
            text-align: center;
            outline: none;
            a{
                width:100%;
                display: inline-block;
                color:#333;
                cursor: pointer;
                &.active{
                    color:#fff;
                    background-color:#4747c7;
                }
            }
        }

    }
</style>
