<template src="./brace.html"></template>

<script>
import Brace from 'vue-bulma-brace'
// this is just an example. you don't want to import those things.
import * as brace from 'brace'
import 'brace/ext/modelist'
import 'brace/ext/themelist'
const modelist = brace.acequire('ace/ext/modelist')
const themelist = brace.acequire('ace/ext/themelist')

export default {
  components: {
    Brace
  },

  data () {
    return {
      code: '',
      modes: modelist.modes,
      themes: themelist.themes,
      fontsize: ['12px', '13px', '14px', '16px', '18px', '20px', '22px', '24px'],
      codefolding: ['manual', 'markbegin', 'markbeginend'],
      softwrap: ['off', '50', 'free'],
      selected: {
        mode: 'json',
        theme: 'github',
        fontsize: '12px',
        codefolding: 'markbegin',
        softwrap: 'free',
        selectionstyle: 'text',
        highlightline: 'true'
      }
    }
  },

  methods: {
    oncodeChange (code) {
      this.code = code
    }
  }
}
</script>

<style src="./brace.scss" lang="scss" scoped></style>
