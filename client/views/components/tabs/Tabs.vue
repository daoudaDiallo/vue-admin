<template src="./tabs.html"></template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

export default {
  components: {
    Tabs,
    TabPane
  },

  data () {
    return {
      items: [
        {
          icon: 'image',
          label: 'Pictures',
          desc: 'Simple responsive horizontal navigation tabs, with different styles'
        },
        {
          icon: 'music',
          label: 'Music',
          desc: 'Music Tab'
        },
        {
          icon: 'film',
          label: 'Videos',
          desc: 'Video Tab'
        },
        {
          icon: 'file-text-o',
          label: 'Documents',
          desc: 'Document Tab'
        }
      ]
    }
  },

  mounted () {
    this.items.splice(0, 1)
    setInterval(() => {
      this.randomTabs()
    }, 3000)
  },

  methods: {
    randomTabs () {
      this.items.unshift(this.items.pop())
    }
  }
}
</script>

<style src="./tabs.scss" lang="scss"></style>
