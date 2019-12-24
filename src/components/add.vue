<template>
    <div>
        <form>
           <p> 标题： <input type="text" v-model='title'></p>
           <p> 内容： <input type="text" v-model='value'></p>

            <p> <button @click='add'>添加</button></p>

        </form>
    </div>
</template>
<script>
export default {
   data() {
      return {
          title:'',
          value:''
      }
   },
   computed:{
   },
   methods:{
       add(){
           this.$store.commit('addList',{
               'title':this.title,
               'value':this.value
           })
           this.$router.push('/home/list')
       }
   }
}
</script>

<style scoped lang="scss">
</style>
