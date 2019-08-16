import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AvuePlugin from '../packages/' // 引入自定义插件
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELEMENT)
Vue.use(AvuePlugin)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
