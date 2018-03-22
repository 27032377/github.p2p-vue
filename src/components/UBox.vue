<template>
  <div class="u-box">
    <section class="u-til fs14">U计划-{{month}}月</section>
    <section class="u-content">
      <div class="w40">
        <p class="intro1 c-orange">
          <span class="fs16">{{rate}}</span>%
          <span v-if="!!add && add > 0">+{{add}}%</span>
        </p>
        <p class="intro1 c9">期待年回报率</p>
      </div>
      <div class="w30 intro-box">
        <p class="intro1"><span class="fs16">{{month}}</span>个月</p>
        <p class="intro1 c9">锁定期</p>
      </div>
      <div class="intro2">
        <span v-if="full" class="join-btn-n">已满标</span>
        <span v-else class="join-btn-y">立即加入</span>
      </div>
    </section>
    <section class="ticket-box">
      <span class="ticket">现金券</span>
    </section>
  </div>
</template>
<script>
export default {
  name: 'UBox',
  props: {
    month: {
      type: Number,
      default: 12
    },
    rate: {
      type: Number,
      default: 8.2
    },
    add: {
      type: Number,
      default: 0
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  .u-box {
    border-bottom: .1rem solid #eee;
    .u-til {
      padding: .15rem .1rem;
      border-bottom: 1px solid #eee;
    }
    .u-content {
      padding: .15rem 0.1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
    }
    .intro1 {
      height: .2rem;
      line-height: .2rem;
    }
    .intro2 {
      height: .4rem;
      line-height: .4rem;
      box-sizing: border-box;
    }
    .join-btn-y {
      background-color: #FF6600;
      color: #fff;
      padding: .05rem .1rem;
      border-radius: 2px;
    }
    .join-btn-n {
      padding: .05rem .1rem;
      border-radius: 2px;
      border: 1px solid #ccc;
      color: #ccc;
    }
    .ticket-box {
      padding: .1rem;
      .ticket {
        border: 1px solid #FF6600;
        color: #FF6600;
        padding: 0.02rem;
        border-radius: 2px;
      }
    }
  }
</style>
