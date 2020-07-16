<template>
    <div>
      学生列表：
      <ul>
        <li v-for="(item, index) in studentList" :key="index">{{index}}--{{item}}</li>
      </ul>
    </div>
</template>

<script>

import{mapState, mapGetters} from 'vuex'

export default {
    props: {

    },
    data() {
        return {
          // studentList: []
        };
    },
    computed: {
      ...mapState('student', ['studentList']),
      // ...mapGetters(['newStudent'])

      // newStudent() {
      //   return this.$store.getters.newStudent
      // }
    },
    created() {
      // this.bus.$on('add', name => {
      //   this.studentList.push(name)
      // })
    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
