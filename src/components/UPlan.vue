<template>
  <div class="u-plan">
    <section class="til-box">
      <div>
        <img src="../assets/images/icon/icon-hot.png" />
        <span> 优选计划</span>
      </div>
      <div class="c-orange">
        <img src="../assets/images/icon/icon-weal.png" />
        <span> 限时加息0.6%</span>
      </div>
    </section>
    <section class="u-main">
      <div class="dpf mb5">
        <div class="w50">
          <p class="c-orange mb5"><span class="fs16">8.2%</span>+0.6%</p>
          <p class="c9">期待年回报率</p>
        </div>
        <div class="w50">
          <p class="fs14 mb5">锁定期12个月</p>
          <p class="c9">到期后转入自由期，扔享8.8%</p>
        </div>
      </div>
      <div class="join-btn">立即加入</div>
      <div class="ticket-box"><span class="ticket c-orange">现金券</span></div>
    </section>
    <u-box
      v-for="(item, index) in uList"
      :key="index"
      :month="item.month"
      :rate="item.rate"
      :add="item.add"
      :full="item.full"
    ></u-box>
  </div>
</template>
<script>
import UBox from './UBox.vue'
let uList = [
  {
    month: 1,
    rate: 5.0,
    add: 0,
    full: true
  },
  {
    month: 3,
    rate: 5.6,
    add: 0,
    full: true
  },
  {
    month: 6,
    rate: 6.2,
    full: true
  },
  {
    month: 12,
    rate: 8.2,
    add: 0.6,
    full: false
  },
  {
    month: 24,
    rate: 9.2,
    full: false
  },
  {
    month: 36,
    rate: 10.2,
    add: 0.4,
    full: false
  }
]

export default {
  name: 'UPlan',
  components: {
    UBox
  },
  data () {
    return {
      navHeight: '',
      uList: []
    }
  },
  created () {
    uList.sort((a, b) => {
      if (a.full) {
        return a.full > b.full
      } else {
        return a.full < b.full
      }
    })
    this.uList = uList
  }
}
</script>
<style lang="less" scoped>
  .u-plan {
    .til-box {
      padding: .1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
    }
    .u-main {
      padding: .1rem;
      border-bottom: .1rem solid #eee;
      .join-btn {
        margin-top: .1rem;
        color: #fff;
        background-color: #FF6600;
        text-align: center;
        padding: .1rem;
        border-radius: 2px;
      }
      .ticket-box {
        padding: .1rem 0;
      }
      .ticket {
        border: 1px solid #FF6600;
        padding: 2px;
        border-radius: 2px;
      }
    }
  }
</style>
