import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';

createApp(App).use(Antd).mount('#app')
