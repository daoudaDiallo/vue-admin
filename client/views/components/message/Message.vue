<template src="./message.html"></template>

<script>
import Vue from 'vue'
import Message from 'vue-bulma-message'

const MessageComponent = Vue.extend(Message)

const openMessage = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 1500,
  container: '.messages'
}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Message
  },

  mounted () {
    openMessage({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0,
      showCloseButton: true
    })
  },

  methods: {
    openMessageWithType (type) {
      openMessage({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      })
    }
  }

}
</script>

<style src="./message.scss" lang="scss" scoped></style>
