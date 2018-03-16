<template>
  <div :style="height" v-show="show" class="my-toast">
    <div class="c-box" :style="seat" v-html="message"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'MyToast',
  props: {
    message: {
      type: String,
      default: '加载中...'
    },
    show: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'middle'
    },
    time: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    ...mapState({
      height: state => `height: ${state.scrollHeight}px;`
    }),
    seat () {
      switch (this.position) {
        case 'top':
          return 'top: 10%;'
        case 'bottom':
          return 'bottom: 10%'
        default:
          return 'top: 40%;'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        setTimeout(() => {
          this.$store.dispatch({
            type: 'MY_TOAST',
            obj: {
              show: false
            }
          })
        }, this.time)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .my-toast {
    width: 100%;
    position: absolute;
    z-index: 101;
    left: 0;
    top: 0;
    .c-box {
      width: 40%;
      left: 30%;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      text-align: center;
      padding: 15px 10px;
      position: fixed;
      border-radius: 6px;
      line-height: 24px;
    }
  }
</style>
