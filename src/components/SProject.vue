<template>
  <div class="s-project">
    <fix-til></fix-til>
    <pdf src="http://cdn.mozilla.net/pdfjs/tracemonkey.pdf"></pdf>
  </div>
</template>
<script>
import FixTil from './FixTil.vue'
import pdf from 'vue-pdf'

export default {
  name: 'SProject',
  components: {
    FixTil,
    pdf
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
