import {login, create} from '@/api/user.js';

export default {
  components: {},
  data () {
    return {
      rememberPW: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: true, message: '请填写用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {type: 'string', min: 6, message: '您的密码太短了', trigger: 'blur'}
        ]
      },
      loading: false,
      imgR: process.env.imgR,
    };
  },
  methods: {
    handleSubmit(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          login({
            name: this.formInline.user,
            password: this.formInline.password,
          },).then(res => {
            if (res) {
              if (res.code == 200) {
                // this.$Cookies.set('avator', res.avator);
                // this.$Cookies.set('username', res.username);
                localStorage.setItem('avator', res.avator);
                localStorage.setItem('username', res.username);
                this.$router.push({
                  path: '/all-article'
                });
              } else {
                this.$Message.error('用户名密码错误');
              }
            }
          });
        } else {

        }
      });

    },
  },
  mounted(){


  },
  created(){

  },

};


