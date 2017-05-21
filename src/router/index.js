import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Location from '@/components/Location'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/location',
            name: 'location',
            component: Location
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        }
    ]
})
