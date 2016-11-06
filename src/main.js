import Vue from 'vue'
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter)

import App from './App'
import list from './components/list'


// Vue.config.debug = true;


// const User = {
//   template:'<div><h2>User {{ $route.params.id }}</h2> <router-view></router-view> </div>'
// }

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
//
// const foo = { template: '<div>foo</div>' }
// const bar = { template: '<div>Bar</div>' }
// const baz = { template: '<div>Baz</div>' }



//
//
// const routes = [
//     { path: '/a', redirect: '/b'},
//     { path: 'b',redirect: { name: 'other' }},
//     { path: '/',components: { default: foo, a: bar, b: baz } },
//     { path: '/other',components: { default: bar, a: foo, b: baz } },
//     { path: '/user/:id', component: User, name:User,
//       children: [
//         { path: '',component:UserHome },
//         { path: 'profile',component:UserProfile },
//         { path: 'posts',component:UserPosts}
//       ]
//     }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   // base: __dirname,
//   routes // （缩写）相当于 routes: routes
// })




// const app = new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
//   router,
//   render: h => h(App)
// }).$mount('#app')
//




/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
