import Vue from 'vue';
import VueRouter from "vue-router";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)

Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/fruits', component: () => import('./components/Fruit/Index'),
            name: 'fruit.index'
        },
        {
            path: '/users/login', component: () => import('./components/User/Login'),
            name: 'user.login'
        },
        {
            path: '/users/registration', component: () => import('./components/User/Registration'),
            name: 'user.registration'
        },
        {
            path: '/users/personal', component: () => import('./components/User/Personal'),
            name: 'user.personal'
        },
        {
            path: '/home', component: () => import('./components/Home'),
            name: 'home'
        },
        {
            path: '*', component: () => import('./components/User/Registration'),
            name: 'No Page'
        }

    ]
})

route.beforeEach((to, from, next) => {

    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'home' || to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({
                name: 'home'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next();
})

export default route
