import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Admin from '../components/Admin.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Result from '../components/Result.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: HelloWorld
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/result/:id',
        component: Result
    }
    
   
]

const router = new VueRouter({
    routes
})

export default router