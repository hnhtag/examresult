import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Admin from '../components/Admin.vue'
import Result from '../components/Result.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: "Home",
        component: User
    },
    {
        path: '/admin',
        component: Admin
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