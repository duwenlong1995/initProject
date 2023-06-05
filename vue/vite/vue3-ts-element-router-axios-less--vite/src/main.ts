import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import TDesign from 'tdesign-vue-next';
 
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';


createApp(App).use(TDesign).use(ElementPlus).use(store).use(router).mount('#app')
