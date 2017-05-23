import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'Buttons',
      path: '/buttons',
      meta: {
        link: 'ui/buttons/Buttons.vue'
      },
      component: lazyLoading('ui/buttons/Buttons')
    },
    {
      name: 'Form',
      path: '/form',
      meta: {
        link: 'ui/form/Form.vue'
      },
      component: lazyLoading('ui/form/Form')
    },
    {
      name: 'Typography',
      path: '/typography',
      meta: {
        link: 'ui/typography/Typography.vue'
      },
      component: lazyLoading('ui/typography/Typography')
    },
    {
      name: 'Icons',
      path: '/icons',
      meta: {
        link: 'ui/icons/Icons.vue'
      },
      component: lazyLoading('ui/icons/Icons')
    }
  ]
}
