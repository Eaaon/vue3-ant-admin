import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';
import { PageEnum } from '@/enums/pageEnum';

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
// const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
// const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

// export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];
// export const asyncRoutes = [ ...routeModuleList];

export const asyncRoutes = []
// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: '登陆',
  },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  // PAGE_NOT_FOUND_ROUTE,
];
