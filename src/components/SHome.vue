<template>
  <div class="s-home" ref="sHome">
    <section class="swipe-box">
      <mt-swipe>
        <mt-swipe-item>
          <img src="../assets/images/swipe/swipe01.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/swipe/swipe02.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/swipe/swipe03.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/swipe/swipe04.jpg" />
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="fund-box">
      <div class="content">
        <div class="clearfix">
          <p class="fl c9 fs12">总资产(元)</p>
          <p class="fr c9 fs14">⊙</p>
        </div>
        <p class="fwb fs16 money">10,015.63</p>
        <div class="des c9">
          <p class="des-1">账户余额 <span class="c0">0.00元</span></p>
          <p class="des-2">累计回报 <span class="c0">15.63元</span></p>
        </div>
        <div class="border-line"></div>
        <m-more></m-more>
      </div>
    </section>
    <section class="hot-til">
      <div class="til-text">
        <img src="../assets/images/icon/icon-fire.png" />
        <span>&nbsp;&nbsp;&nbsp;热门产品</span>
      </div>
    </section>
    <section class="hox-box">
      <div class="til fs14 mb5">优选计划</div>
      <div class="interest">
        <div class="w50">
          <p class="mb5 fs16 c-main">8.2% + <span class="fs12">0.2%</span></p>
          <p class="c9">期待年回报</p>
        </div>
        <div class="w50">
          <p class="mb5 fs14 fwb">锁定期12个月</p>
          <p class="c9">到期后转入自由期，扔享8.4%</p>
        </div>
      </div>
      <div class="tc join-btn">立即加入</div>
    </section>
    <section class="b-line"></section>
    <section class="notice">
      <img src="../assets/images/icon/icon-horn.png" />
      <span class="fs12 fwb">&nbsp;&nbsp;民生银行存管系统升级后的操作提示</span>
    </section>
    <section class="b-line"></section>
    <section class="safe-til">
      <img src="../assets/images/icon/icon-star.png" />
      <span>&nbsp;&nbsp;专业稳健</span>
    </section>
    <section class="intro-box">
      <div class="intro1">
        <div class="w50 tc">
          <p class="fwb fs16 mb5">533<span class="fs12">亿</span></p>
          <p class="c9">累计成交金额（元）</p>
        </div>
        <div class="w50 tc">
          <p class="fwb fs16 mb5">628<span class="fs12">万</span></p>
          <p class="c9">累计注册人数</p>
        </div>
      </div>
      <div class="intro2">
        <div class="w30 a-box">
          <p class="fs14 fwb mb5">多重保障</p>
          <p>银行资金存管</p>
        </div>
        <div class="w30 b-box">
          <p class="fs14 fwb mb5">企业荣誉</p>
          <p>合规性位居前列</p>
        </div>
        <div class="w30 c-box">
          <p class="fs14 fwb mb5">业绩报告</p>
          <p>7年稳健运营</p>
        </div>
      </div>
      <div class="intro3">
        <div class="w30">
          <div class="mb5">
            <img class="w100" src="../assets/images/icon/icon-building.png" />
          </div>
          <p>关于人人贷</p>
        </div>
        <div class="w30">
          <div class="mb5">
            <img class="w100" src="../assets/images/icon/icon-file.png" />
          </div>
          <p>信息披露</p>
        </div>
        <div class="w30">
          <div class="mb5">
            <img class="w100" src="../assets/images/icon/icon-scholar.png" />
          </div>
          <p>投资者教育</p>
        </div>
      </div>
    </section>
    <footer-intro></footer-intro>
    <fix-til v-show="tilShow" title="人人贷">
      <img slot="bell" src="../assets/images/icon/icon-bell.png" alt="">
    </fix-til>
  </div>
</template>
<script>
import {Swipe, SwipeItem} from 'mint-ui'
import MMore from './MMore.vue'
import FixTil from './FixTil.vue'
import FooterIntro from './FooterIntro.vue'
import 'mint-ui/lib/style.min.css'

export default {
  name: 'SHome',
  components: {
    Swipe,
    SwipeItem,
    MMore,
    FixTil,
    FooterIntro
  },
  data () {
    return {
      tilShow: false
    }
  },
  mounted () {
    let sHome = this.$refs.sHome
    sHome.addEventListener('touchmove', e => {
      let top = document.body.scrollTop
      this.tilShow = top > 10
    }, false)
  },
  methods: {}
}
</script>
<style lang="less">
  .s-home {
    width: 100%;
    height: 100%;
    .swipe-box {
      height: 2.1rem;
    }
    .mint-swipe-indicators {
      bottom: 4rem !important;
      .mint-swipe-indicator {
        opacity: 0.7;
      }
    }
    .fund-box {
      position: absolute;
      width: 94%;
      left: 3%;
      top: 1.8rem;
      background-color: #fff;
      box-shadow: 3px 3px 3px #ccc;
      max-height: 1.3rem;
      .content {
        padding: 0.1rem 0.1rem 0 0.1rem;
      }
      .money {
        margin: 0.05rem 0;
      }
      .des-1 {
        display: inline-block;
      }
      .des-2 {
        display: inline-block;
        margin-left: 0.15rem;
      }
      .border-line {
        height: 0.15rem;
        border-bottom: 1px solid #ccc;
      }
      .btn-box {
        display: flex;
        height: .4rem;
        line-height: .4rem;
        justify-content: space-between;
      }
    }
    .hot-til {
      height: 1.5rem;
      width: 100%;
      position: relative;
      border-bottom: 1px solid #ddd;
      .til-text {
        width: 100%;
        position: absolute;
        left: 0;
        text-align: center;
        bottom: 0.1rem;
      }
    }
    .hox-box {
      padding: 0.1rem;
      margin-bottom: .1rem;
      .interest {
        display: flex;
        margin-bottom: .1rem;
      }
      .join-btn {
        background-color: #FF6600;
        color: #fff;
        border-radius: 2px;
        height: .4rem;
        line-height: .4rem;
        font-size: 14px;
        letter-spacing: 2px;
      }
    }
    .b-line {
      width: 100%;
      height: .1rem;
      background: #eee;
    }
    .notice {
      height: .4rem;
      line-height: .4rem;
      padding: 0 0.1rem;
    }
    .safe-til {
      padding: 0 0.1rem;
      height: .4rem;
      line-height: .4rem;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
    .intro-box {
      padding: .1rem;
      .intro1 {
        display: flex;
        margin-bottom: .1rem;
      }
      .intro2 {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-bottom: .1rem;
        .a-box {
          .n-box;
          background-color: #3366FF;
        }
        .b-box {
          .n-box;
          background-color: #0033FF;
        }
        .c-box {
          .n-box;
          background-color: #FF9933;
        }
      }
      .intro3 {
        display: flex;
        justify-content: space-between;
        text-align: center;
      }
      .n-box {
        padding: .2rem 0;
        color: #fff;
        border-radius: 2px;
      }
    }
  }
</style>
