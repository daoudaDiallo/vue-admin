<template src="./progressbar.html"></template>
<style src="./progressbar.scss" lang="scss" scoped></style>

<script>
import ProgressBar from 'vue-bulma-progress-bar'

export default {
  components: {
    ProgressBar
  },

  data () {
    return {
      dynamicValue: 60
    }
  },

  methods: {
    plus () {
      if (this.dynamicValue === 100) return
      this.dynamicValue += 10
    },

    minus () {
      if (this.dynamicValue === 0) return
      this.dynamicValue -= 10
    }
  }

}
</script>
