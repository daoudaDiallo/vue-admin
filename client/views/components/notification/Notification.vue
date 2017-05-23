<template src="./notification.html"></template>
<style src="./notification.scss" lang="scss" scoped></style>

<script>
import Vue from 'vue'
import Notification from 'vue-bulma-notification'

const NotificationComponent = Vue.extend(Notification)

const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Notification
  },

  mounted () {
    openNotification({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0
    })
  },

  methods: {
    openNotificationWithType (type) {
      openNotification({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      })
    }
  }

}
</script>
