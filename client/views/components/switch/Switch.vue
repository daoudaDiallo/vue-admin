<template src="./switch.html"></template>
<style src="./switch.scss" lang="scss" scoped></style>

<script>
// do not use below code, because `Switch` is svg tag.
// import Switch from 'vue-bulma-switch'
import VbSwitch from 'vue-bulma-switch'

export default {
  components: {
    VbSwitch
  },

  data () {
    return {
      value: false
    }
  },

  computed: {
    switchStat () {
      return this.value ? 'On' : 'Off'
    }
  }
}
</script>
