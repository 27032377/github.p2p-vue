<template>
  <div></div>
</template>
<script>
export default {
  name: 'FirstIn',
  activated () {
    const notFirst = window.sessionStorage.getItem('not_first') || ''
    if (notFirst) {
      this.$router.replace('/home')
    } else {
      this.$router.replace('/FirstIn')
    }
  }
}
</script>
