<template src="./modal.html"></template>

<script>
import Vue from 'vue'
import Modal from './modals/Modal'
import ImageModal from './modals/ImageModal'
import CardModal from './modals/CardModal'

const ImageModalComponent = Vue.extend(ImageModal)
const CardModalComponent = Vue.extend(CardModal)

const openImageModal = (propsData = {
  visible: true
}) => {
  return new ImageModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

const openCardModal = (propsData = {
  visible: true
}) => {
  return new CardModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Modal
  },

  data () {
    return {
      showModal: true,
      cardModal: null,
      imageModal: null
    }
  },

  methods: {
    openModalBasic () {
      this.showModal = true
    },

    closeModalBasic () {
      this.showModal = false
    },

    openModalImage () {
      const imageModal = this.imageModal || (this.imageModal = openImageModal())
      imageModal.$children[0].active()
    },

    openModalCard () {
      const cardModal = this.cardModal || (this.cardModal = openCardModal({
        title: 'Modal title',
        url: this.$store.state.pkg.homepage
      }))
      cardModal.$children[0].active()
    }
  }
}
</script>

<style>
</style>
