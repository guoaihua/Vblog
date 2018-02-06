<template>
  <div class="page">
        <router-link :to="{name:'pageDetail', query: {pageId: 1}}">312311</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 2}}">adsadsa</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 3}}">312311</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 4}}">adsadsa</router-link>
  </div>
</template>

<script>
export default {
  name: 'page'
}
</script>
<style scoped>

</style>
