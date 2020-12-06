import Vue from 'vue'
import VueRouter from 'vue-router'
import root from '@/views/Roots/root.vue'
import annotation from '@/views/annotation/annotation.vue'
import superwash from '@/views/Superwash/Superwash.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: root, component: root },
    { path: '/annotation', name: annotation, component: annotation },
    { path: '/superwash',name:superwash,component: superwash}
]

const router = new VueRouter({
    routes
})

export default router