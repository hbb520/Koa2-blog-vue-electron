import {signout} from '@/api/user';
import Titlebtn from '@/views/components/Titlebtn.vue';

export default {
  name: 'home',
  components: {Titlebtn},
  data() {
    return {
      imgR: process.env.imgR,
      avator: localStorage.getItem('avator'),
      showBackToTop: false,
      hover: false,
      scrollTop: 0,
      username: localStorage.getItem('username') ,
      logo: this.$Cookies.get('logo'),
      value: null,
      visible: false,
      loginIf: true,

    };

  },
  mounted() {
    if (this.username) {
      this.loginIf = true;
    } else {
      this.loginIf = false;
    }
  },
  beforeDestroy() {
  },
  created() {
    this.value = this.$route.query.title;
  },
  methods: {
    /**
     * 搜索
     * @author hbb
     * @param
     */
    search(){
      if (this.value) {
        this.$router.push({
          path: 'all-article',
          query: {
            title: this.value
          }
        });
      } else {
        this.$router.push({
          path: 'all-article'
        });
      }

    },
    loginOut(){
      signout().then(res => {
        this.$router.push({
          path: '/login'
        });
      });
    },
    goLogin(){
      this.$router.push(
        {path: '/login'}
      );
    }
  }
};
