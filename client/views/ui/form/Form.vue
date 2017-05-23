<template src="./form.html"></template>
<style src="./form.scss" lang="scss" scoped></style>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

export default {
  components: {
    Cleave
  },

  data () {
    return {
      demo: {
        value: '',
        rawValue: ''
      }
    }
  },

  methods: {
    onRawValueChanged (newVal) {
      this.demo.rawValue = newVal
    }
  },

  watch: {
    'demo.value' (newVal, oldVal) {
      console.log('value: new ->', newVal, 'old ->', oldVal)
    },
    'demo.rawValue' (newVal, oldVal) {
      console.log('rawValue: new ->', newVal, 'old ->', oldVal)
    }
  }
}
</script>
