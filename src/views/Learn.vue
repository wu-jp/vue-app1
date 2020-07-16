<template>
    <div>
      <course-list></course-list>
      <!-- <button class="change-course-btn">修改课程</button> -->
      <router-link :to="{name: 'changeCourse'}" class="change-course-btn" tag="button">修改课程</router-link>
    </div>
</template>

<script>

import CourseList from '@/components/learn/CourseList'

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
      CourseList,

    },
};
</script>

<style scoped>
.change-course-btn {
  display: block;
  margin: 40px auto;
  width: 200px;
  line-height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
