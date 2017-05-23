<template src="./progressTracker.html"></template>
<style src="./progressTracker.scss" lang="scss" scoped></style>

<script>
import ProgressTracker, { StepItem } from 'vue-bulma-progress-tracker'

export default {
  components: {
    ProgressTracker,
    StepItem
  },

  data () {
    return {
      stepItems: [
        {
          title: 'Step 1'
        },
        {
          title: 'Step 2'
        },
        {
          title: 'Step 3'
        },
        {
          title: 'Step 4'
        },
        {
          title: 'Step 5'
        }
      ]
    }
  }

}
</script>
