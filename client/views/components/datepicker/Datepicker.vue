<template src="./datepicker.html"></template>

<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
  components: {
    Datepicker
  },

  data () {
    return {
      value: '2016-12-12'
    }
  },

  mounted () {
    const { checkIn, checkOut } = this.$refs
    checkIn.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
      checkOut.datepicker.set('minDate', selectedDates[0].fp_incr(1))
    })

    checkOut.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
      checkIn.datepicker.set('maxDate', dateStr)
    })
  },

  computed: {
    today () {
      return new Date()
    },
    maxDate () {
      let d = new Date()
      d.setDate(32)
      return d
    },
    placeholder () {
      return `minDate: today, maxDate: ${this.maxDate.getFullYear()}-${this.maxDate.getMonth() + 1}-${this.maxDate.getDate()}`
    },
    // https://github.com/chmln/flatpickr/blob/gh-pages/src/flatpickr.l10n.zh.js
    l10n () {
      return {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        months: {
          shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        }
      }
    }
  },

  watch: {
    value (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style src="./datepicker.scss" lang="scss" scoped></style>
