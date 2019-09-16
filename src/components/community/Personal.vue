<template>
  <div>
    <button @click="handleClick">{{loginFlag ? '退出' : '登录'}}</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      loginFlag: false
    };
  },
  computed: {},
  created() {
    // 取到父级路由原信息
    this.loginFlag = this.$route.matched[0].meta.login;
  },
  mounted() {},
  watch: {},
  methods: {
    handleClick() {
      // 点击按钮值取反
      this.loginFlag = !this.loginFlag;
      // 再改变路由原信息
      this.$route.matched[0].meta.login = this.loginFlag
    }
  },
  components: {}
};
</script>

<style scoped>
button {
  margin: 20px;
  padding: 3px 10px;
}
</style>
