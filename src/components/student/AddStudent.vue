<template>
    <div>
      添加学生：
      <input type="text" v-model="name" @keyup.enter="changeStudent(name)">
      <button @click="changeStudent(name)">添加</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {

    },
    data() {
        return {
          name: ''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      // add() {

      //   if(this.name == ''){
      //     alert('输入内容为空')
      //   }else {

      //     // this.$store.dispatch('student/changeStudent', this.name);
      //     this.name = ''
      //   }
      // },

      ...mapActions('student', ['changeStudent'])

    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
