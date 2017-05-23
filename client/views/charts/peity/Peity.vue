<template src="./peity.html"></template>

<script>
import Peity from 'vue-peity'

export default {
  components: {
    Peity
  },

  data () {
    return {
      data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]
    }
  },

  computed: {
    lineData () {
      return this.data.toString()
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      let random = Math.round(Math.random() * 10)
      this.data.shift()
      this.data.push(random)
    }, 1024)
  }
}
</script>
