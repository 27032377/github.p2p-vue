<template>
  <div class="s-project">
    <mt-navbar v-model="selected" fixed>
      <mt-tab-item id="U计划">U计划</mt-tab-item>
      <mt-tab-item id="薪计划">薪计划</mt-tab-item>
      <mt-tab-item id="散标">散标</mt-tab-item>
      <mt-tab-item id="债权">债权</mt-tab-item>
    </mt-navbar>
    <div style="height: 44px;width: 100%;"></div>
    <u-plan v-show="selected == 'U计划'"></u-plan>
    <p-salary v-show="selected == '薪计划'"></p-salary>
    <p-disperse v-show="selected == '散标'"></p-disperse>
    <footer-intro v-show="footSwi"></footer-intro>
  </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui'
import UPlan from './UPlan.vue'
import PSalary from './PSalary.vue'
import PDisperse from './PDisperse.vue'
import FooterIntro from './FooterIntro.vue'
import 'mint-ui/lib/style.min.css'
import {mapState} from 'vuex'

export default {
  name: 'SProject',
  components: {
    Navbar,
    TabItem,
    UPlan,
    PSalary,
    PDisperse,
    FooterIntro
  },
  data () {
    return {
      selected: 'U计划'
    }
  },
  computed: {
    ...mapState({
      footSwi: state => state.footSwi
    })
  },
  watch: {
    selected (val) {
      switch (val) {
        case 'U计划':
          this.$store.dispatch({
            type: 'TURN_FOOT',
            bol: true
          })
          break
        case '薪计划':
        case '散标':
        case '债权':
          this.$store.dispatch({
            type: 'TURN_FOOT',
            bol: false
          })
          break
        default:
          this.$store.dispatch({
            type: 'TURN_FOOT',
            bol: true
          })
          break
      }
    }
  }
}
</script>
<style lang="less">
  .s-project {
    width: 100%;
    min-height: 100%;
    .mint-navbar {
      background-color: #0e4787;
      color: #999;
      font-size: 14px;
      letter-spacing: 1px;
      .is-selected {
        color: #fff;
        border: none;
      }
    }
  }
</style>
