import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
/**
 * ------------------------------------------------------------------
 * 路由配置
 * ------------------------------------------------------------------
 * @param redirect 重定向
 * @param meta>index 用于菜单的 default-active
 */
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: require('@/views/login/index.vue').default,
      meta: {title: '登录'},
    },
    {
      path: '/sginup',
      component: require('@/views/sginup/index').default,
      meta: {title: '注册'},
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/views/home/index.vue').default,
      meta: {title: '首页'},
      redirect: '/all-article',
      children: [
        {
          path: '/all-article',
          name: 'all-article',
          component: require('@/views/all-article/index.vue').default,
          meta: {title: '所有文章'},
        },
        {
          path: '/my-article',
          name: 'my-article',
          component: require('@/views/all-article/index.vue').default,
          meta: {title: '我的文章'},
        },
        {
          path: '/create',
          name: 'create',
          component: require('@/views/create/index.vue').default,
          meta: {title: '发表文章'},
        },
        {
          path: '/edit/:id',
          name: 'edit',
          component: require('@/views/create/index.vue').default,
          meta: {title: '编辑文章'},
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: require('@/views/detail/index.vue').default,
          meta: {title: '文章详情'},
        }, {
          path: '/people',
          name: 'people',
          component: require('@/views/people/index.vue').default,
          meta: {title: '我的个人首页'},
        }, {
          path: '/change-password',
          name: 'change-password',
          component: require('@/views/change-password/index.vue').default,
          meta: {title: '修改密码'},
        },

      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
