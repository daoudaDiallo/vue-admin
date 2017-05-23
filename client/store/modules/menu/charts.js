import lazyLoading from './lazyLoading'

export default {
  name: 'Charts',
  path: '/charts',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false,
    link: 'charts/index.vue'
  },
  component: lazyLoading('charts', true),

  children: [
    {
      name: 'Chartist',
      path: 'chartist',
      component: lazyLoading('charts/chartist/Chartist'),
      meta: {
        link: 'charts/chartist/Chartist.vue'
      }
    },
    {
      name: 'Chartjs',
      path: 'chartjs',
      component: lazyLoading('charts/chartjs/Chartjs'),
      meta: {
        link: 'charts/chartjs/Chartjs.vue'
      }
    },
    {
      name: 'Peity',
      path: 'peity',
      component: lazyLoading('charts/peity/Peity'),
      meta: {
        link: 'charts/peity/Peity.vue'
      }
    },
    {
      name: 'Plotly',
      path: 'plotly',
      component: lazyLoading('charts/plotly/Plotly'),
      meta: {
        link: 'charts/plotly/Plotly.vue'
      }
    }
  ]
}
