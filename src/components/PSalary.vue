<template>
  <div class="p-salary">
    <section class="intro-box">
      <div class="w33">
        <p class="fs14"><span class="fs18 fwb">12</span>个月</p>
        <p class="c9">锁定期</p>
      </div>
      <div class="w33">
        <p class="c-orange fs14"><span class="fs18 fwb">8</span>%</p>
        <p class="c9">期待年回报率</p>
      </div>
      <div class="w33">
        <p class="fs14"><span class="fs18 fwb">26</span>日</p>
        <p class="c9">每月出借日(日)</p>
      </div>
    </section>
    <section class="touch-box" ref="touchBox">
      <p class="tc pt5 pb5 fs14">12个月，每月26日出借</p>
      <div class="tc mt5">
        <span class="dpi price">{{price}}</span>
        <span class="dpi pb5">元</span>
      </div>
      <div class="list-box" :style="`left: ${left}px`">
        <p class="s-list">0</p>
        <p class="s-list">1,000</p>
        <p class="s-list">2,000</p>
        <p class="s-list">3,000</p>
        <p class="s-list">4,000</p>
        <p class="s-list">5,000</p>
        <p class="s-list">6,000</p>
        <p class="s-list">7,000</p>
        <p class="s-list">8,000</p>
        <p class="s-list">9,000</p>
        <p class="s-list">10,000</p>
      </div>
    </section>
    <section class="total-box">
      <div class="w50">
        <p class="mb5 c-orange fs14">{{total}}</p>
        <p>出借本金(元)</p>
      </div>
      <div class="w50">
        <p class="mb5 c-orange fs14">{{profit}}</p>
        <p>期待回报(元)</p>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'PSalary',
  components: {},
  data () {
    return {
      left: 0,
      set: 0,
      price: 2500
    }
  },
  computed: {
    total () {
      return this.price * 12
    },
    profit () {
      return Math.round(this.price * 1.1)
    }
  },
  mounted () {
    let touchBox = this.$refs.touchBox
    let first
    touchBox.addEventListener('touchstart', e => {
      first = e.targetTouches[0].pageX
    }, false)
    let second
    let price = this.price
    touchBox.addEventListener('touchmove', e => {
      let set = this.set
      second = e.targetTouches[0].pageX
      this.left = second - first + set
      this.price = price - (second - first + set) * 12
    }, false)
    touchBox.addEventListener('touchend', e => {
      let left = this.left
      this.set = left
      console.log(left)
    }, false)
  }
}
</script>
<style lang="less" scoped>
  .p-salary {
    margin-top: 34px;
    .intro-box {
      display: flex;
      text-align: center;
      padding-bottom: .2rem;
    }
    .touch-box {
      padding: .2rem 0;
      background-color: #eee;
      position: relative;
      .price {
        padding: .05rem .1rem;
        border-bottom: 1px solid #ccc;
      }
      .s-list {
        padding: 0 20px;
      }
      .list-box {
        display: flex;
        flex-wrap: nowrap;
        position: fixed;
        bottom: 68%;
        overflow: hidden;
      }
    }
    .total-box {
      display: flex;
      text-align: center;
      padding: .2rem .1rem;
    }
  }
</style>
