<template src="./emoji.html"></template>

<script>
import Vue from 'vue'
import { EmojiIcon, filter } from 'vue-bulma-emoji'

Vue.use(filter)

export default {
  components: {
    EmojiIcon
  }
}
</script>

<style src="./emoji.scss" lang="scss" scoped></style>
