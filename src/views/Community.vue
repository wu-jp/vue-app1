<template>
    <div>
      <div class="nav">
        <router-link :to="{name: 'academic'}">学士讨论</router-link>
        <router-link :to="{name: 'download'}">资源下载</router-link>
        <router-link :to="{name: 'personal'}">个人中心</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

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

    },
    components: {

    },
};
</script>

<style scoped>

  .router-link-active{
    background-color: #000;
    color: #fff;
  }

  .nav a{
    display: inline-block;
    padding: 5px 15px;
    margin-right: 20px;
  }

</style>
