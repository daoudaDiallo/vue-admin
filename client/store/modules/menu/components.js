import lazyLoading from './lazyLoading'

export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('components/Default'),
      meta: {
        link: 'components/Default.vue'
      }
    },
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump',
        link: 'components/backToTop/BackToTop.vue'
      },
      component: lazyLoading('components/backToTop/BackToTop')
    },
    {
      name: 'Brace',
      path: 'brace',
      meta: {
        description: 'Code editor component that based on brace',
        repository: 'https://github.com/vue-bulma/brace',
        link: 'components/brace/Brace.vue'
      },
      component: lazyLoading('components/brace/Brace')
    },
    {
      name: 'Collapse',
      path: 'collapse',
      meta: {
        description: 'Collapse component',
        repository: 'https://github.com/vue-bulma/collapse',
        link: 'components/collapse/Collapse.vue'
      },
      component: lazyLoading('components/collapse/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: 'https://github.com/vue-bulma/datepicker',
        link: 'components/datepicker/Datepicker.vue'
      },
      component: lazyLoading('components/datepicker/Datepicker')
    },
    {
      name: 'Emoji',
      path: 'emoji',
      meta: {
        description: 'Emoji Component is based on emojione.com',
        repository: 'https://github.com/vue-bulma/emoji',
        link: 'components/emoji/Emoji.vue'
      },
      component: lazyLoading('components/emoji/Emoji')
    },
    {
      name: 'Message',
      path: 'message',
      meta: {
        description: 'Message component',
        repository: 'https://github.com/vue-bulma/message',
        link: 'components/message/Message.vue'
      },
      component: lazyLoading('components/message/Message')
    },
    {
      name: 'Modal',
      path: 'modal',
      meta: {
        description: 'Modal component',
        repository: 'https://github.com/vue-bulma/modal',
        link: 'components/modal/Modal.vue'
      },
      component: lazyLoading('components/modal/Modal')
    },
    {
      name: 'Notification',
      path: 'notification',
      meta: {
        description: 'Notification component',
        repository: 'https://github.com/vue-bulma/notification',
        link: 'components/notification/Notification.vue'
      },
      component: lazyLoading('components/notification/Notification')
    },
    {
      name: 'ProgressBar',
      path: 'progress-bar',
      meta: {
        description: 'ProgressBar component',
        repository: 'https://github.com/vue-bulma/progress-bar',
        link: 'components/progressbar/ProgressBar.vue'
      },
      component: lazyLoading('components/progressbar/ProgressBar')
    },
    {
      name: 'ProgressTracker',
      path: 'progress-tracker',
      meta: {
        description: 'ProgressTracker component is based on progress-tracker',
        repository: 'https://github.com/vue-bulma/progress-tracker',
        link: 'components/progresstracker/ProgressTracker.vue'
      },
      component: lazyLoading('components/progresstracker/ProgressTracker')
    },
    {
      name: 'Quill',
      path: 'quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: 'https://github.com/vue-bulma/quill',
        link: 'components/quill/Quill.vue'
      },
      component: lazyLoading('components/quill/Quill')
    },
    {
      name: 'Rating',
      path: 'rating',
      meta: {
        description: 'Rating component is based on starability.css',
        repository: 'https://github.com/vue-bulma/rating',
        link: 'components/rating/Rating.vue'
      },
      component: lazyLoading('components/rating/Rating')
    },
    {
      name: 'Slider',
      path: 'slider',
      meta: {
        description: 'Slider component',
        repository: 'https://github.com/vue-bulma/slider',
        link: 'components/slider/Slider.vue'
      },
      component: lazyLoading('components/slider/Slider')
    },
    {
      name: 'Switch',
      path: 'switch',
      meta: {
        description: 'Switch component',
        repository: 'https://github.com/vue-bulma/switch',
        link: 'components/switch/Switch.vue'
      },
      component: lazyLoading('components/switch/Switch')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs',
        link: 'components/tabs/Tabs.vue'
      },
      component: lazyLoading('components/tabs/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: 'https://github.com/vue-bulma/tooltip',
        link: 'components/tooltip/Tooltip.vue'
      },
      component: lazyLoading('components/tooltip/Tooltip')
    },
    {
      name: 'Lory',
      path: 'lory',
      meta: {
        description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
        repository: 'https://github.com/vue-bulma/lory',
        link: 'components/lory/Lory.vue'
      },
      component: lazyLoading('components/lory/Lory')
    }
  ]
}
