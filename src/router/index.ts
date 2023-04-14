import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

export const router = createRouter({
  // 创建一个 hash 历史记录。
  // history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  history: createWebHistory(),
  // 应该添加到路由的初始路由列表。
  // routes: basicRoutes as unknown as RouteRecordRaw[],
  routes:[
    {
      path:'/',
      name:'home',
      component: () => import('@/views/home/Index.vue'),
      meta: {
        title: '首页',
      },
    }

  ],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});