<template>
  <div class="login">
    <div>
      <div>
        <mt-field
          label="用户名："
          type="text"
          placeholder="请输入邮箱或手机号"
          v-model="username"
        ></mt-field>
        <div style="height: 20px;"></div>
        <mt-field
          label="密码："
          type="password"
          placeholder="请输入密码"
          v-model="password"
        ></mt-field>
        <div style="height: 20px;"></div>
        <mt-field label="验证码" v-model="code" placeholder="4位数验证码">
          <img @click="sendCode" :src="codeImg" alt="">
        </mt-field>
        <swipe-btn @click.native="login"></swipe-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { Field } from 'mint-ui'
import SwipeBtn from '@/components/SwipeBtn.vue'
import codeN from '@/assets/images/icon/code-n.png'
import codeY from '@/assets/images/icon/code-y.png'
import 'mint-ui/lib/style.min.css'

export default {
  components: {
    Field,
    SwipeBtn
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      codeAble: true
    }
  },
  computed: {
    codeImg () {
      return this.codeAble ? codeY : codeN
    }
  },
  methods: {
    sendCode () {
      if (!this.codeAble) {
        this.$store.dispatch({
          type: 'MY_TOAST',
          obj: {
            show: true,
            message: '稍等!<br/>变绿后重试发送',
            position: 'middle'
          }
        })
        return
      }
      this.codeAble = false
      this.$store.dispatch({
        type: 'MY_TOAST',
        obj: {
          show: true,
          message: '验证码已发送',
          position: 'middle'
        }
      })
      setTimeout(() => {
        this.codeAble = true
      }, 5000)
    },
    login () {
      if (!!this.username && !!this.password && !!this.code) {
        this.$router.push('/home')
      } else {
        this.$store.dispatch({
          type: 'MY_TOAST',
          obj: {
            show: true,
            message: '请输入账号信息',
            position: 'middle'
          }
        })
      }
    }
  }
}
</script>
<style lang="less">
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/images/image/image10.jpg");
    background-size:100% 100% ;
    .mint-cell {
      min-height: 40px !important;
      color: #666 !important;
      .mint-cell-wrapper {
        font-size: 14px !important;
      }
      .mint-cell-title {
        font-size: 14px !important;
      }
    }
  }
</style>
