<template>
  <div class="m-popup">
    <mt-popup
      v-show="isShow"
      :position="position"
      :visible.sync="isShow"
      modal
      closeOnClickModal
    >
      <div>{{content}}</div>
    </mt-popup>
  </div>
</template>
<script>
import { Popup } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

export default {
  name: 'MPopup',
  components: {
    Popup
  },
  props: {
    position: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      content: 'xxxx'
    }
  },
  methods: {
    showPop () {
      this.isShow = true
      this.content = '点击了清单'
    }
  }
}
</script>
