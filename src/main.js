import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

router.beforeEach((to, from, next) => {
  // 判断是否从其他页面跳转到 "/" 页面
  if (to.path === '/') {
    // 在进入 "/" 页面时，将外部滚动条位置设置为底部
    window.scrollTo(0, 0);
  }
  // 继续导航
  next();
});