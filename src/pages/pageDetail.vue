<template>
  <div class="detail" v-html="compiledMarkdown">
    qewqewq 这是我的页面
  </div>
</template>

<script>
import marked from 'marked'
import msg from '../assets/README.md'
export default {
  name: 'detail',
  data () {
    return {
      context: msg
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.context, {sanitize: true})
    }
  }
}
</script>

<style scoped>

</style>
