import {getAllPage, getMyPage} from '@/api/user';
import ArticleRight from '@/views/components/article-right/index.vue';
export default {
  name: 'all-article',
  components: {
    ArticleRight
  },
  data() {
    return {
      imgR: process.env.imgR,
      avatar:  localStorage.getItem("avatar") ,
      username: localStorage.getItem("username"),
      logo: this.$Cookies.get('logo'),
      queryData: {
        title: null
      },
      list: [],
      total: 0,
      TagList: [
        {
          color: 'primary',
          tagText: '前端'
        }, {
          color: 'default',
          tagText: 'vue'
        }, {
          color: 'default',
          tagText: 'react'
        }, {
          color: 'default',
          tagText: 'angular'
        }, {
          color: 'default',
          tagText: 'node.js'
        }, {
          color: 'default',
          tagText: '服务端'
        }, {
          color: 'default',
          tagText: '数据库'
        }, {
          color: 'default',
          tagText: '开发工具'
        }, {
          color: 'default',
          tagText: '服务器'
        }
      ],
      tag: null
    };

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function (to, from) {
      this.tag = null;
      this.queryData = {
        title: this.$route.query.title
      };
      this.getAllPage(1);
    },

  },
  mounted() {
  },
  beforeDestroy() {
  },
  created() {
    this.getAllPage(1);
  },
  methods: {
    /**
     * 获取所有文章分页
     * @author hbb
     * @param
     */
    getAllPage(page){
      this.currentPage = page;
      if (this.$route.query.title) {
        this.queryData.title = this.$route.query.title;
      }
      let data = {
        page: page,
        title: this.queryData.title,
        tag: this.tag
      };
      let type = 1;
      let is_recommend = 0;
      if (this.tag == '推荐') {
        is_recommend = 1;
        this.tag = null;
      }
      if (this.$route.path == '/all-article') {
        type = 1;
        data = {
          page: page,
          title: this.queryData.title,
          tag: this.tag,
          is_recommend: is_recommend
        };
      } else if (this.$route.path == '/my-article') {
        type = 2;
        data = {
          page: page
        };
      }
      getAllPage(data, type).then(res => {
        this.list = res.data;
        this.total = res.total;
        let imgReg = /<img.*?(?:>|\/>)/gi;
        let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        for (let i = 0; i < this.list.length; i++) {
          let arr = [];
          arr = this.list[i].content.match(imgReg);  // arr 为包含所有img标签的数组
          this.list[i].content = this.removeTAG(this.list[i].content);
          if (arr == null) {
            this.list[i].imgList = null;
          } else {
            this.list[i].imgList = arr;
          }

          this.list[i].moment = this.formatMsgTime(this.list[i].moment);
        }
      });
    },
    //分页函数
    handleCurrentChange(val){
      this.getAllPage(val);

    },
    /**
     * tab点击事件
     * @author hbb
     * @param
     */
    tabClick(name){

      if (name == '所有') {
        this.tag = null;
      } else {
        this.tag = name;
      }
      this.getAllPage(1);
    },
    /**
     * 提取字符串中所有img,并且组成数组
     * @param str
     * @param len
     */
    removeTAG(str, len){
      return str.replace(/<[^>]+>/g, '');
    },
    /**
     * 时间处理
     * @author hbb
     * @param
     */
    formatMsgTime (timespan) {
      let dateTime = new Date(timespan);
      let dateTime_1 = dateTime.getTime();
      let now = new Date();
      let now_new = now.getTime();  //typescript转换写法
      let milliseconds = 0;
      let timeSpanStr;
      milliseconds = now_new - dateTime_1;
      if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚';
      }
      else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
      }
      else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
      }
      else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
      }
      else if (milliseconds > 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = timespan;
      }
      return timeSpanStr;
    },
    goLink(link, id){
      this.$router.push({
        path: '/detail/' + id,
      });
    }
  }
};
