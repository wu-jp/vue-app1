export default {
  namespaced: true,
  state: {
    studentList: [],
  },
  mutations: {
    changeStudent(state, name) {
      state.studentList.push(name)
    }
  },
  actions: {
    // 执行异步操作
    // ctx表示上下文，相当于state
    changeStudent(ctx, name) {
      setTimeout(() => {
        ctx.commit('changeStudent', name)
      }, 1000);
    }
  },
  getters: {
    // 相当于计算属性

    newStudent (state) {
      return state.studentList.map( (item, index) => {
        if( index == 0 ){
          return '**' + item
        }else if( index > 2 ){
          return '**' + item + '**'
        }else {
          return item + '**'
        }
      })
    }
  }
}