<template>
    <div>
        <p>标题：</p>
        <ul>
            <li v-for="(item,index) in list1" :key="index">
                {{item.title}}
            </li>
        </ul>
        <p><button @click='goback'>返回列表</button></p>
    </div>
</template>
<script>
export default {
   data() {
      return {
       
      }
   },
   computed:{
       list1(index){
         return this.$store.state.list1
       }
   },
   methods:{
       
       goback(){
           this.$router.push('/home/list')
       }
   }
}
</script>

<style scoped lang="scss">
</style>
