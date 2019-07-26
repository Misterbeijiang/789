import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/bottombar/index',
      name: 'Bottombar', 
      component: resolve=>(require(["@/pages/bottombar"],resolve)),
      children:[
        {
          path:"/bottombar/index",
          name:"Index",
          component: resolve=>(require(["@/pages/index"],resolve))
        },
        {
          path:"/bottombar/shopping/:name",
          name:"Shopping",
          component: resolve=>(require(["@/pages/shopping"],resolve))
        },
        {
          path:"/bottombar/sellcar",
          name:"Sellcar",
          component: resolve=>(require(["@/pages/sellcar"],resolve))
        },
        {
          path: '/bottombar/shoppingcart/cart',
          name: 'Shoppingcart',
          component: resolve=>(require(["@/pages/shoppingcart"],resolve)),
          children:[
            {
              path: '/bottombar/shoppingcart/all',
              name: 'All',
              component: resolve=>(require(["@/pages/all"],resolve))
            },
            {
              path: '/bottombar/shoppingcart/cart',
              name: 'Cart',
              component: resolve=>(require(["@/pages/cart"],resolve))
            }
          ],redirect:'/bottombar/shoppingcart/cart'
        },
        {
          path:"/bottombar/userinfo",
          name:"/Userinfo",
          component: resolve=>(require(["@/pages/userinfo"],resolve))
        },

      ]
    }, 
    {
      path: '/zhao',
      name: 'Zhao',
      component: resolve=>(require(["@/pages/zhao"],resolve))
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve=>(require(["@/pages/login"],resolve))
    },
    {
      path: '/staler',
      name: 'Staler',
      component: resolve=>(require(["@/pages/staler"],resolve))
    },
    {
      path: '/filtershopping',
      name: 'filtershopping',
      component: resolve=>(require(["@/pages/filtershopping"],resolve)),
      children:[
        {
          path: '/filtershopping/:name',
          name: 'filtershopping',
          component: resolve=>(require(["@/pages/filtershopping"],resolve))
        }
      ]
    },
    {
      path: '/carinfo',
      name: 'Carinfo',
      component: resolve=>(require(["@/pages/carinfo"],resolve))
    },
    {
      path: '/wenti',
      name: 'Wenti',
      component: resolve=>(require(["@/pages/wenti"],resolve))
    },
    {
      path: '/xieyi',
      name: 'Xieyi',
      component: resolve=>(require(["@/pages/xieyi"],resolve))
    },
    {
      path: '/sfyz',
      name: 'Sfyz',
      component: resolve=>(require(["@/pages/sfyz"],resolve))
    },
    {
      path: '/shangchuan',
      name: 'Shangchuan',
      component: resolve=>(require(["@/pages/shangchuan"],resolve))
    },
    {
      path:"/index",
      name:"Index",
      component: resolve=>(require(["@/pages/index"],resolve)),
      children:[
        {
          path: '/index/:name',
          name: 'index',
          component: resolve=>(require(["@/pages/index"],resolve))
        },
      ]
    },
    {
      path:"/shopping",
      name:"shopping",
      component: resolve=>(require(["@/pages/shopping"],resolve)),
      children:[
        {
          path: '/shopping/:name',
          name: 'shopping',
          component: resolve=>(require(["@/pages/shopping"],resolve))
        },
      ]
    },
      {
        path:"/page/:id",
        name:"Page",
        component: resolve=>(require(["@/pages/page"],resolve))
      },
     
      {
        path: '/contract',
        name: 'Contract',
        component: resolve=>(require(["@/pages/contract"],resolve))
      },
      { 
        path: '/videodetection',
        name: 'Videodetection',
        component: resolve=>(require(["@/pages/videodetection"],resolve))
      },
      { 
        path: '/goodcar',
        name: 'Goodcar',
        component: resolve=>(require(["@/pages/goodcar"],resolve))
      },
      {
        path: '/valuable',
        name: 'Valuable',
        component: resolve=>(require(["@/pages/valuable"],resolve))
      },
      {
        path: '/brand',
        name: 'Brand',
        component: resolve=>(require(["@/pages/brand"],resolve))
      },
      {
        path: '/locationStr',
        name: 'LocationStr',
        component: resolve=>(require(["@/pages/LocationStr"],resolve))
      },
      {
        path: '/home',
        name: 'home',
        component: resolve=>(require(["@/pages/home"],resolve)),    
        children:[
          {
            path: '/home/:name',
            name: 'home',
            component: resolve=>(require(["@/pages/home"],resolve))
          },
        ]
      },
      {
        path: '/homebarand',
        name: 'homebarand',
        component: resolve=>(require(["@/pages/homebarand"],resolve)),
        children:[
          {
            path: '/homebarand/:name',
            name: 'homebarand',
            component: resolve=>(require(["@/pages/shopping"],resolve))
          },
        ]
      }, 
      {
        path:'/yichenggou',
        name:'Yichenggou',
        component: resolve=>(require(["@/pages/yichenggou"],resolve))
      },
      {
        path:'/jiancebaogao',
        name:'Jiancebaogao',
        component: resolve=>(require(["@/pages/jiancebaogao"],resolve))
      },
      {
        path:'/canshu',
        name:'Canshu',
        component: resolve=>(require(["@/pages/canshu"],resolve))
      },
     

      {
        path: '/datails',
        name: 'Datails',
        component: resolve=>(require(["@/pages/datails"],resolve))
      },
      
      {
        path: '/sousuo',
        name: 'Sousuo',
        component: resolve=>(require(["@/pages/Sousuo"],resolve))
      },
      {
        path: '/register',
        name: 'Register',
        component: resolve=>(require(["@/pages/Register"],resolve))
      },
  
      {
        path: '/serve',
        name: 'Serve',
        component: resolve=>(require(["@/pages/serve"],resolve))
      },
      {
        path: '/Filter',
        name: 'filter',
        component: resolve=>(require(["@/pages/Filter"],resolve)),
        children:[
          {
            path: '/Filter/:id',
            name: 'filter',
            component: resolve=>(require(["@/pages/Filter"],resolve))
          },
        ]
      },
      {
        path: '/bulekefu',
        name: 'Bulekefu', 
        component: resolve=>(require(["@/pages/Bulekefu"],resolve))
      },
     
      {
        path:"/*",redirect:"/bottombar/index"
      }
  ]
})
