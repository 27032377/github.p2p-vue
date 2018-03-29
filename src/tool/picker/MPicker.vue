<template>
  <div class="m-picker" v-show="isShow">
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
import { Picker } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

export default {
  name: 'MToast',
  components: {
    Picker
  },
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      isShow: false
    }
  },
  methods: {
    onValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    showPicker () {
      this.isShow = true
    }
  }
}
</script>
<style lang="less">
  .m-picker {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
  }
</style>
