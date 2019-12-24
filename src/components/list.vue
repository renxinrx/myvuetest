<template>
    <div>
        <p>我是文章列表</p>
        <ul>
            <li v-for="(item,index) in list" :key='index'>
                {{index + 1}}---{{item.title}} --{{item.value}}
                
                <a @click='gotodetail(index)'>查看详情</a> 

            </li>
        </ul>
        <p><button @click='gotoadd'>添加文章</button></p>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   computed:{
       list(){
          return this.$store.state.list
       }
   },
   methods:{
       gotodetail(index){
           this.$store.commit('showdetail',index);
           this.$router.push('/detail')
       },
        gotoadd(){
           this.$router.push('/add');
       }
   }
}
</script>

<style scoped lang="scss">
</style>
