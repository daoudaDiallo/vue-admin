<template src="./rating.html"></template>
<style src="./rating.scss" lang="scss" scoped></style>

<script>
import Rating from 'vue-bulma-rating'

export default {
  components: {
    Rating
  },

  data () {
    return {
      value: 3,
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ]
    }
  },

  methods: {
    update (val) {
      this.value = val
    }
  }

}
</script>
