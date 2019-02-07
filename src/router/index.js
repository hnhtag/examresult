import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: User
    },
    {
        path: '/admin',
        component: Admin
    }
]

const router = new VueRouter({
    routes
})

export default router