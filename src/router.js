import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Learn from './views/Learn.vue'
// import Student from './views/Student.vue'
// import About from './views/About.vue'
// import Community from './views/Community.vue'

// import Academic from './components/community/Academic.vue'
// import Download from './components/community/Download.vue'
// import Personal from './components/community/Personal.vue'

// import Question from './components/Question.vue'
// import Err from './components/Err.vue'

// 路由懒加载
const Home = () => import('./views/Home.vue')
const Learn = () => import('./views/Learn.vue')
const Student = () => import('./views/Student.vue')
const About = () => import('./views/About.vue')
const Community = () => import('./views/Community.vue')

const Academic = () => import('./components/community/Academic.vue')
const Download = () => import('./components/community/Download.vue')
const Personal = () => import('./components/community/Personal.vue')

const Question = () => import('./components/Question.vue')
const Err = () => import('./components/Err.vue')
const ChangeCourse = () => import('./components/ChangeCourse.vue')

 
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      // 在一个页面配置多个组件
      components: {
        // 默认
        default: Home,
        // 需要另外添加的
        // 'academic': Academic
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: '/student',
      component: Student
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      // 路径重定向，设置默认路径
      redirect: '/community/academic',
      // 路由原信息
      meta: {
        login: false
      },
      children: [{
          path: 'academic',
          name: 'academic',
          component: Academic,
          // // 路由独享守卫
          // beforeEnter(to, from, next) {
          //   const answer = confirm('你还没有登录，需登录才可以浏览信息，要登陆嘛？')

          //   if(answer) {
          //     // 如果点击确定，下一步前往路径名为‘personal’的页面
          //     next({name: 'personal'})
          //   }else {
          //     // 如果点击取消，留着当前页
          //     next(false)
          //   }
          // }
        },
        {
          path: 'download',
          name: 'download',
          component: Download,
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal,
        }
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/err',
      name: 'err',
      component: Err
    },
    {
      path: '/learn/changeCourse',
      name: 'changeCourse',
      component: ChangeCourse
    },
    {
      path: '*',
      redirect(to) {
        if (to.path == '/') {
          return '/home'
        } else {
          return '/err'
        }
      }
    }
  ]
})

// 导航守卫
// 全局
// router.beforeEach((to, from, next) => {
//   // to：要到那里去
//   // from：从哪里来

//   if(to.path === '/community/academic'){
//     const answer = confirm('你还没有登录，需登录才可以浏览信息，要登陆嘛？')

//     if(answer) {
//       // 如果点击确定，下一步前往路径名为‘personal’的页面
//       next({name: 'personal'})
//     }else {
//       // 如果点击取消，留着当前页
//       next(false)
//     }
    
//   }else {
//     next()
//   }
// })

export default router;