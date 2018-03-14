<template>
  <div>My.vue</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'My',
  computed: {
    ...mapState({
      loading: state => state.loading,
      count: state => state.count,
      num () {
        return this.$store.getters.num
      }
    })
  },
  activated () {
    console.log(this.loading, this.count, this.num)
  }
}
</script>
