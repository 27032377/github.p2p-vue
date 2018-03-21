<template>
  <div class="s-project">
    <fix-til></fix-til>
  </div>
</template>
<script>
import FixTil from './FixTil.vue'

export default {
  name: 'SProject',
  components: {
    FixTil
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  .s-project {
    width: 100%;
    min-height: 100%;
  }
</style>
