import Vue from 'vue'
import Vuex from 'vuex'

import student from '@/modules/student'
import course from '@/modules/course'


Vue.use(Vuex)


export default new Vuex.Store({
  strict: true, // 严格模式
  modules: {
    course,
    student
  }
  
})
