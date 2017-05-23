import lazyLoading from './lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'fa-table',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/tables/basic',
      meta: {
        label: 'Basic Tables',
        link: 'tables/tables.vue'
      },
      component: lazyLoading('tables/tables')
    }
  ]
}
