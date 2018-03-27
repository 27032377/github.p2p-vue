<template>
  <div class="p-disperse">
    <section class="nav-box">
      <div :class="`w33 ${complexActive}`" @click="complexClick">综合排序</div>
      <div :class="`w33 m-flex ${oneActive}`" @click="itemOneClick">
        <p>按利率</p>
        <div>
          <div><img class="w40" :src="imgOneUp" /></div>
          <div><img class="w40" :src="imgOneDown" /></div>
        </div>
      </div>
      <div :class="`w33 m-flex ${twoActive}`" @click="itemTwoClick">
        <p>按期限</p>
        <div>
          <div><img class="w40" :src="imgTwoUp" /></div>
          <div><img class="w40" :src="imgTwoDown" /></div>
        </div>
      </div>
    </section>
    <section class="list-box">
      <disperse-box
        v-for="(item, index) in detailList"
        :key="index"
        :useFor="item.useFor"
        :percent="item.percent"
        :time="item.time"
        :localBol="item.localBol"
        :fullBol="item.fullBol"
      ></disperse-box>
    </section>
  </div>
</template>
<script>
import DisperseBox from './DisperseBox.vue'
import upN from '../assets/images/icon/icon-up-n.png'
import upY from '../assets/images/icon/icon-up-y.png'
import downN from '../assets/images/icon/icon-down-n.png'
import downY from '../assets/images/icon/icon-down-y.png'

let details = [
  {
    useFor: '资金周转',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 0
  },
  {
    useFor: '装修',
    percent: 10.2,
    time: 24,
    localBol: false,
    fullBol: true,
    index: 1
  },
  {
    useFor: '日常生活消费',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: false,
    index: 2
  },
  {
    useFor: '扩大生产/经营',
    percent: 8.0,
    time: 12,
    localBol: true,
    fullBol: true,
    index: 3
  },
  {
    useFor: '增购新车',
    percent: 9.6,
    time: 24,
    localBol: true,
    fullBol: true,
    index: 4
  },
  {
    useFor: '教育支出',
    percent: 10.2,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 5
  },
  {
    useFor: '资金周转',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 6
  },
  {
    useFor: '日常生活消费',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 7
  },
  {
    useFor: '日常生活消费',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 8
  },
  {
    useFor: '扩大生产/经营',
    percent: 9.6,
    time: 36,
    localBol: true,
    fullBol: true,
    index: 9
  }
]
export default {
  name: 'PDisperse',
  components: {
    DisperseBox
  },
  data () {
    return {
      imgOneUp: upN,
      imgOneDown: downN,
      imgOneSwi: false,
      imgTwoUp: upN,
      imgTwoDown: downN,
      imgTwoSwi: false,
      complexActive: 'c-back',
      oneActive: '',
      twoActive: '',
      detailList: details
    }
  },
  computed: {},
  methods: {
    complexClick () {
      this.reset()
      this.complexActive = 'c-back'
      details.sort((a, b) => a.index > b.index)
    },
    itemOneClick () {
      this.reset()
      this.oneActive = 'c-back'
      if (!this.imgOneSwi) {
        this.imgOneUp = upY
        this.imgOneDown = downN
        this.imgOneSwi = true
        details.sort((a, b) => a.percent > b.percent)
      } else {
        this.imgOneUp = upN
        this.imgOneDown = downY
        this.imgOneSwi = false
        details.sort((a, b) => a.percent < b.percent)
      }
      this.detailList = details
    },
    itemTwoClick () {
      this.reset()
      this.twoActive = 'c-back'
      if (!this.imgTwoSwi) {
        this.imgTwoUp = upY
        this.imgTwoDown = downN
        this.imgTwoSwi = true
        details.sort((a, b) => a.time > b.time)
      } else {
        this.imgTwoUp = upN
        this.imgTwoDown = downY
        this.imgTwoSwi = false
        details.sort((a, b) => a.time > b.time)
      }
    },
    reset () {
      this.complexActive = ''
      this.oneActive = ''
      this.twoActive = ''
      this.imgOneUp = upN
      this.imgOneDown = downN
      this.imgTwoUp = upN
      this.imgTwoDown = downN
    }
  }
}
</script>
<style lang="less">
  .p-disperse {
    width: 100%;
    .nav-box {
      position: fixed;
      left: 0;
      width: 100%;
      top: 44px;
      display: flex;
      text-align: center;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #eee;
    }
    .list-box {
      margin-top: 44px;
    }
    .m-flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
