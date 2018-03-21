<template>
  <div class="home">
    <s-home v-show="selected == '首页'"></s-home>
    <s-project v-show="selected == '项目'"></s-project>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" :src="homeImg" />
        首页
      </mt-tab-item>
      <mt-tab-item id="项目">
        <img slot="icon" :src="projectImg" />
        项目
      </mt-tab-item>
      <mt-tab-item id="福利">
        <img slot="icon" :src="giftImg" />
        福利
      </mt-tab-item>
      <mt-tab-item id="用户">
        <img slot="icon" :src="myImg" />
        用户
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem, TabContainer } from 'mint-ui'
import SHome from '../components/SHome.vue'
import SProject from '../components/SProject.vue'
import 'mint-ui/lib/style.min.css'
import iHome from '../assets/images/icon/icon-home.png'
import iHomeS from '../assets/images/icon/icon-home-s.png'
import iProject from '../assets/images/icon/icon-project.png'
import iProjectS from '../assets/images/icon/icon-project-s.png'
import iGift from '../assets/images/icon/icon-gift.png'
import iGiftS from '../assets/images/icon/icon-gift-s.png'
import iMy from '../assets/images/icon/icon-my.png'
import iMyS from '../assets/images/icon/icon-my-s.png'

export default {
  name: 'Home',
  components: {
    Tabbar,
    TabItem,
    TabContainer,
    SHome,
    SProject
  },
  data () {
    return {
      selected: '首页'
    }
  },
  computed: {
    homeImg () {
      if (this.selected === '首页') {
        return iHomeS
      } else {
        return iHome
      }
    },
    projectImg () {
      if (this.selected === '项目') {
        return iProjectS
      } else {
        return iProject
      }
    },
    giftImg () {
      if (this.selected === '福利') {
        return iGiftS
      } else {
        return iGift
      }
    },
    myImg () {
      if (this.selected === '用户') {
        return iMyS
      } else {
        return iMy
      }
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  .home {
    .is-selected {
      color: #0000CC !important;
    }
    .mint-tab-item {
      background-color: #fff !important;
    }
    .mint-tab-item {
      border-top: 1px solid #999;
    }
  }
</style>
