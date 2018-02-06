<template>
    <div class="main">
      <el-container>
        <el-aside width="20%"><app-aside></app-aside></el-aside>
        <el-container>
          <el-header height="90px">
            <app-header></app-header>
          </el-header>
          <el-main> <app-content></app-content></el-main>
          <el-footer> <app-footer></app-footer></el-footer>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import appHeader from '@/components/app-header.vue'
import appAside from '@/components/app-aside.vue'
import appContent from '@/components/app-content.vue'
import appFooter from '@/components/app-footer.vue'
export default {
  name: 'app-main',
  components: {
    appHeader, appAside, appContent, appFooter
  }
}
</script>

<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    .el-container {
      height: 100%;
    }
  }
</style>
