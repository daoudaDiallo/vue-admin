<template src="./chartist.html"></template>
<style src="./chartist.scss" scoped></style>

<script>
import Chartist from 'vue-bulma-chartist'

export default {
  components: {
    Chartist
  },

  data () {
    return {
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ],
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      linesOptions: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      },

      lineAreaData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [5, 9, 7, 8, 5, 3, 5, 4]
        ]
      },
      lineAreaOptions: {
        low: 0,
        showArea: true
      },

      barsData: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
          [5, 4, 3, 7],
          [3, 2, 9, 5],
          [1, 5, 8, 4],
          [2, 3, 4, 6],
          [4, 1, 2, 1]
        ]
      },
      barsOptions: {
        // Default mobile configuration
        stackBars: true,
        axisX: {
          labelInterpolationFnc (value) {
            return value.split(/\s+/).map((word) => word[0]).join('')
          }
        },
        axisY: {
          offset: 20
        }
      },
      barsResponsiveOptions: [
        // Options override for media > 400px
        ['screen and (min-width: 400px)', {
          reverseData: true,
          horizontalBars: true,
          axisX: {
            labelInterpolationFnc: function (n) { return n }
          },
          axisY: {
            offset: 60
          }
        }],
        // Options override for media > 800px
        ['screen and (min-width: 800px)', {
          stackBars: false,
          seriesBarDistance: 10
        }],
        // Options override for media > 1000px
        ['screen and (min-width: 1000px)', {
          reverseData: false,
          horizontalBars: false,
          seriesBarDistance: 15
        }]
      ],

      pieData: {
        series: [5, 3, 4]
      },
      pieOptions: {
        chartPadding: 30,
        labelOffset: 60,
        labelDirection: 'explode',
        labelInterpolationFnc (value) {
          return value
        }
      },

      gaugeData: {
        series: [20, 10, 30, 40]
      },
      gaugeOptions: {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: true
      },

      donutData: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
      },
      donutOptions: {
        donut: true
      }
    }
  },

  computed: {
    linesData () {
      return {
        labels: this.labels,
        series: this.series
      }
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      this.series.unshift(this.series.pop())
    }, 1597)
  }
}
</script>
