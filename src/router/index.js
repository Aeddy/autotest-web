import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const UserList = () => import('@/views/UserList');
const Index = () => import('@/views/Index');
const ContentFileDiff = () => import('@/views/ContentFileDiff');
const ContentDiffList = () => import('@/views/ContentDiffList');

const routes = [
  {
    path: '/',
    name: '用户管理',
    component: Index,
    enumerable: true,
    redirect: '/userList',
    children: [
      {
        path: '/userList',
        name: '用户列表',
        component: UserList,
      },
    ],
  },
  {
    path: '/',
    name: '差异分析',
    component: Index,
    enumerable: true,
    redirect: '/contentDiffList',
    children: [
      {
        path: '/contentDiffList',
        name: '差异文件列表',
        component: ContentDiffList,
      },
    ],
  },
  {
    path: '/',
    name: '差异分析',
    component: Index,
    enumerable: false,
    redirect: '/contentDiffList',
    children: [
      {
        path: '/contentFileDiff',
        name: '内容差异',
        enumerable: false,
        component: ContentFileDiff,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
