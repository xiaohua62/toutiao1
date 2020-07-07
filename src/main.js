import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/icon.less'
// 导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 动态设置rem基准值
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
