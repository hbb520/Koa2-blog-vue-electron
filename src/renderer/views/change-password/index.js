import {get_userInfo, put_updateUserPs} from '@/api/user';
import ArticleRight from '@/views/components/article-right/index.vue';
export default {
  name: 'change-password',
  components: {
    ArticleRight
  },
  data() {
    return {
      imgR: process.env.imgR,
      avatar:  localStorage.getItem("avatar"),
      username:   localStorage.getItem("username"),
      logo: this.$Cookies.get('logo'),
      BASE_API: process.env.BASE_API,
      infoData: {},
      formItem: {
        oldPassword: null,
        newPassword: null,
        repeatpass: null
      },
    };

  },
  watch: {},
  mounted() {
  },
  beforeDestroy() {
  },
  created() {
    // this.get_userInfo();
  },
  methods: {
    /**
     * 获取用户详情
     * @author hbb
     * @param
     */
    get_userInfo(){
      get_userInfo().then(res => {
        this.infoData = res.data;
      });
    },

    /**
     * 修改用户
     * @author hbb
     * @param
     */
    put_updateUserPs(){
      put_updateUserPs({
        oldPassword: this.formItem.oldPassword,
        newPassword: this.formItem.newPassword,
        repeatpass: this.formItem.repeatpass,
      }).then(res => {
        if (res.code == 200) {
          this.$Message.success('修改成功');
          this.goLink('/login');
        } else {
          this.$Message.error(
            res.message
          );
        }

      });
    }
  }
};
