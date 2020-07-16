<template>
  <ul>
    <router-link tag="li" :to="{name: 'question', params: {id: item.questionId} }" v-for="item in questionList" :key="item.questionId">{{ item.title }}</router-link>
  </ul>
</template>

<script>
import { nextTick } from 'q';
export default {
  props: {},
  // 组件内部守卫
  beforeRouteEnter(to, from, next) {
    const isLogin = to.matched[0].meta.login;
    if(isLogin) {
      next();
      return;
    }
    const answer = confirm('你还没有登录，需登录才可以浏览信息，要登陆嘛？')

    if(answer) {
      // 如果点击确定，下一步前往路径名为‘personal’的页面
      next({name: 'personal'})
    }else {
      // 如果点击取消，留着当前页
      next(false)
    }
  },
  beforeRouteLeave(to, from, next) {
    const answer = confirm('确定要离开嘛？')
    if(answer) {
      next()
    }else{
      next(false)
    }
  },
  data() {
    return {
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
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped>

ul {
  margin-top: 20px;
}

ul li {
  margin: 10px 0;
}

</style>
