<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app-content'
}
</script>

<style scoped>
    .content {
      width: 100%;
      height: 100%;
      background-color: lightgreen;
    }
</style>
