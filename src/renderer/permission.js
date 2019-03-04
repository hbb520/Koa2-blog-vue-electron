import router from './router';
import Cookies from 'js-cookie';

router.beforeEach((to, from, next) => {
  if (to.name == 'my-article') {
    if (localStorage.getItem('username')) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }


});

router.afterEach(() => {

});
