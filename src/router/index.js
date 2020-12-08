import Vue from 'vue'
import VueRouter from 'vue-router'
import root from '@/views/Roots/'
import annotation from '@/views/annotation/index.vue'
import superwash from '@/views/Superwash/index.vue'
import defined from '@/views/defined/'
import wifi from '@/views/wifi/'
// 设置也买你
import setting from '@/views/setting/'
import timeset from '@/views/setting/timeset/'
import dishsetting from '@/views/setting/dishsetting/'
import aboutmachine from '@/views/setting/aboutmachine/'
import luminance from '@/views/setting/luminance/'
import saline from '@/views/setting/saline/'
import warningtone from '@/views/setting/warningtone'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: root, component: root },
    { path: '/annotation', name: annotation, component: annotation },
    { path: '/superwash', name: superwash, component: superwash },
    { path: '/defined', name: defined, component: defined },
    { path: '/setting', name: setting, component: setting },
    { path: '/timeset', name: timeset, component: timeset },
    { path: '/wifi', name: wifi, component: wifi },
    { path: '/aboutmachine', name: aboutmachine, component: aboutmachine },
    { path: '/dishsetting', name: dishsetting, component: dishsetting },
    { path: '/luminance', name: luminance, component: luminance },
    { path: '/saline', name: saline, component: saline },
    { path: '/warningtone', name: warningtone, component: warningtone }
]

const router = new VueRouter({
    routes
})
export default router