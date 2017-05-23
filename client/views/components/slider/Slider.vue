<template src="./slider.html"></template>
<style src="./slider.scss" lang="scss" scoped></style>

<script>
import Tooltip from 'vue-bulma-tooltip'
import Slider from 'vue-bulma-slider'

export default {
  components: {
    Tooltip,
    Slider
  },

  data () {
    return {
      value: 23
    }
  },

  computed: {
    per () {
      return this.value + '%'
    }
  },

  methods: {
    update (val) {
      this.value = Number(val)
    }
  }

}
</script>
