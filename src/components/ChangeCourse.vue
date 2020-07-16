<template>
    <div>
      <div class="change-area" v-if="isChange">
        <div class="box">
          <label for="">课程名称：</label>
          <input type="text" v-model="title">
        </div>
        <div class="box">
          <label for="">课程价格：</label>
          <input type="text" v-model="price">
        </div>
        <button class="confirm-btn" @click="confirm">提交修改</button>
      </div>

      <template v-else>
        <ul>
          <li v-for="(item, index) in courseList" :key="item.name" class="course">
            {{item.name}}
            {{item.price}}
            <button class="change-btn" @click="change(index)">点击修改</button>
          </li>
        </ul>
        <!-- <button class="change-over">已全部修改完成</button> -->
        <router-link :to="{name: 'learn'}" tag="button" class="change-over">已全部修改完成</router-link>
      </template>
      
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {

    },
    data() {
        return {
          isChange: false,
          title: '',
          price: 0,
          index: 0
        };
    },
    computed: {
      ...mapState('course', ['courseList'])
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      change(index) {
        // 获取到当前点击项的数据
        const course = this.courseList[index];
        this.isChange = true;
        this.title = course.name;
        this.price = course.price;
        this.index = index;
      },
      confirm() {
        const name = this.title;
        const price = this.price;
        const index = this.index;
        this.$store.commit('course/changeCourse',{index, name, price});
        this.isChange = false;
      }
    },
    components: {

    },
};
</script>

<style scoped>
.course-area {
  margin-bottom: 20px;
}

.course {
  max-width: 600px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}

.course:last-of-type {
  border: none;
}

.change-btn {
  background-color: #000;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  margin-left: 10px;
}

.change-area {
  display: inline-block;
}

.change-area .box {
  margin-bottom: 10px;
}

.change-area input {
  width: 528px;
  padding: 4px;
  border: 1px solid #e5e5e5;
}

.change-area input:hover {
  border-color: #9a9a9a;
}

.confirm-btn {
  display: block;
  margin: 0 auto;
  width: 200px;
  line-height: 30px;
  background-color: #000;
  color: #fff;
}

.change-over {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
}

</style>
