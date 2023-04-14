import { createApp } from 'vue'
import '@/style/index.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { router, setupRouter } from '@/router';
// import { createPinia } from 'pinia'

const app = createApp(App);

// Configure routing
// 配置路由
// setupRouter(app);

app.use(router)

// app.use(createPinia())

app.use(Antd).mount('#app')
