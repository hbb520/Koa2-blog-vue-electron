import {create, getDetail, edit} from '@/api/user';
import ArticleRight from '@/views/components/article-right/index.vue';
import VueUEditor from '@/views/components/UEditor';

export default {
  name: 'home',
  components: {
    ArticleRight,
    VueUEditor
  },
  data() {
    return {
      BASE_API: process.env.BASE_API,
      imgR: process.env.imgR,
      avatar: localStorage.getItem('avatar') ,
      username: localStorage.getItem('username'),
      logo: this.$Cookies.get('logo'),
      title: '',
      DetailData: {},
      createPage: true,
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
      content: '',
      editorInstance: null,
      config: {
        toolbars: [[
          'fullscreen',
          'bold', 'italic', 'underline', 'fontfamily', 'fontsize', '|',
          'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
          'insertorderedlist', 'insertunorderedlist', '|',
          'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
          'emotion', 'autosubmit',
          'preview', 'cleardoc',
        ], [
          'forecolor', 'backcolor', 'horizontal', 'date', 'time', 'link', 'spechars', 'autotypeset', '|',
        ]],

        initialFrameWidth: '100%',  //初始化编辑器宽度,默认1000
        initialFrameHeight: 300,  //初始化编辑器高度,默认
        enableAutoSave: false,    //启用自动保存
        saveInterval: 50000,  //自动保存间隔时间， 单位ms
        // pasteplain: true,  //纯文本链接
        // retainOnlyLabelPasted: true,
        // elementPathEnabled: false  //是否启用元素路径，默认是显示
      }

    };

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function (to, from) {
      if (to.name == 'create') {
        this.createPage = true;
        this.title = null;
        this.editorInstance.setContent('');
      } else {
        this.createPage = false;
      }
    }
  },
  mounted() {
    if (this.$route.name == 'create') {
      this.createPage = true;
    } else {
      this.createPage = false;
    }
  },
  beforeDestroy() {
  },
  created() {


  },
  methods: {
    /**
     * 发布文章
     * @author hbb
     * @param
     */
    create(){
      if (!this.username) {
        this.$router.push({
          path: '/login'
        });
        return;
      }
      if (this.title == null || this.title == '') {
        this.$Message.info('请填写标题!');
        return;
      } else if (this.title.length < 5) {
        this.$Message.info('请丰富你的标题');
        return;
      }
      if (this.content == null || this.content == '') {
        this.$Message.info('请填写文章内容!');
        return;
      } else if (this.title.content < 10) {
        this.$Message.info('请丰富你的文章内容');
        return;
      }
      let tag = '';
      for (let i = 0; i < this.TagList.length; i++) {
        if (this.TagList[i].color == 'primary') {
          tag = this.TagList[i].tagText;
        }
      }
      create({
        title: this.title,
        content: this.content,
        tag: tag
      }).then(res => {
        if (res.code == 200) {
          this.$Message.success('发布成功!');
          this.$router.push('/all-article');
        } else {
          this.$Notice.warning({
            title: '发布失败',
            desc: '请检查内容是否有特殊字符串'
          });
        }

      });
    },
    /**
     * 编辑
     * @author hbb
     * @param
     */
    edit(){
      if (!this.username) {
        this.$router.push({
          path: '/login'
        });
        return;
      }
      if (this.content == null || this.content == '') {
        this.$Message.info('请填写什么!');
      }
      let tag = '';
      for (let i = 0; i < this.TagList.length; i++) {
        if (this.TagList[i].color == 'primary') {
          tag = this.TagList[i].tagText;
        }
      }
      edit({
        title: this.title,
        content: this.content,
        postId: this.$route.params.id,
        tag: tag
      }).then(res => {
        this.$Message.success('发布成功!');
        this.$router.push('/all-article');
      });
    },
    /**
     * 加载编辑器
     * @author hbb
     * @param
     */
    editorReady (editorInstance) {
      this.editorInstance = editorInstance;
      editorInstance.setContent('');
      editorInstance.addListener('contentChange', () => {
        this.content = editorInstance.getContent();
      });

      this.getDetail();

    },
    //图片上传成功 后的  回调
    uploadImageSuccess(res, file){
      this.editorInstance.execCommand('insertimage', {
        src: this.imgR + res.url,
      });
      this.progressShow = false;
      this.percent = 0;
    },
    onError(){
      this.progressShow = false;
      this.percent = 0;
      this.$Message.error('上传出错');
    },
    /**
     * 获取文章详情
     * @author hbb
     * @param
     */
    getDetail(){
      if (this.$route.params.id) {
        getDetail(this.$route.params.id).then(res => {
          this.DetailData = res.data;
          this.title = res.data.title;
          this.editorInstance.setContent(res.data.content);
        });
      }
    },
    /**
     * 点击标签
     * @author hbb
     * @param
     */
    tagClick(item){
      console.log(item);
      for (let i = 0; i < this.TagList.length; i++) {
        this.TagList[i].color = 'default';
      }
      item.color = 'primary';
    }
  }
};
