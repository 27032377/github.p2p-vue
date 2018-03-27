<template>
  <div class="disperse-box">
    <section class="til">
      <p class="dpi">{{useFor}}</p>
      <p v-if="localBol" class="dpi local-tag">实地认证</p>
    </section>
    <section class="detail-box">
      <div class="w40">
        <p class="c-main mb5"><span class="fs18">{{percent}}</span>%</p>
        <p class="c9">年利率</p>
      </div>
      <div class="w30">
        <p class="mb5"><span class="fs18">{{time}}</span>个月</p>
        <p class="c9"> &nbsp;&nbsp;&nbsp;&nbsp;期限</p>
      </div>
      <div class="w30 tc m-flex">
        <p class="full-btn" v-if="fullBol">已满标</p>
        <p class="join-btn" v-else>立即加入</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'DisperseBox',
  props: {
    useFor: {
      type: String,
      default: '装修'
    },
    percent: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 0
    },
    localBol: {
      type: Boolean,
      default: false
    },
    fullBol: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
  .disperse-box {
    padding: .1rem 0;
    margin: 0.1rem ;
    border-bottom: 1px solid #eee;
    .local-tag {
      border-radius: 2px;
      color: #fff;
      background-color: #0e4787;
      padding: 2px 5px;
      margin-left: .1rem;
    }
    .detail-box {
      display: flex;
      margin-top: .1rem;
    }
    .m-flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .full-btn {
      padding: .04rem .06rem;
      border: 1px solid #0e4787;
      border-radius: 2px;
      color: #0e4787;
      transform: rotate(-15deg);
    }
    .join-btn {
      padding: .04rem .06rem;
      background-color: #FF6600;
      border-radius: 2px;
      color: #fff;
      transform: rotate(-15deg);
    }
  }
</style>
