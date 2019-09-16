<template>
  <div>
    问题：{{question}}
  </div>
</template>

<script>
export default {
  props: {},
  created() {
    const questionId = this.$route.params.id;
    const index = this.questionList.findIndex(item => item.questionId == questionId);

    if(index == -1) {

      this.$router.replace({name: 'err'})
      
      // this.$router.push({name: 'err'})
    }else {
      this.question = this.questionList[index].title;
    }
  },
  data() {
    return {
      question: '',
      questionList: [
        {
          questionId: 201901,
          title: "到底什么是se6中的class？ 怎么实现class？"
        },
        {
          questionId: 201902,
          title:
            "什么是es6中的箭头函数？ 与普通函数有什么区别？到底该不该使用箭头函数？"
        },
        {
          questionId: 201903,
          title:
            "什么是es6的解构赋值？每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>
