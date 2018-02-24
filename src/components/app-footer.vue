<template>
  <div class="footer">
    <span><i class="fab fa-github"></i></span>
   <span><i class="fab fa-qq"></i></span>
    <span><i class="fab fa-tencent-weibo"></i></span>
  </div>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped lang="scss">
    .footer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      box-shadow: 1px -3px 3px #eee;
      span {
        font-size: 30px;
        display: inline-block;
        margin: 20px;
      }
    }
</style>
