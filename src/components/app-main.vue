<template>
    <div class="main">
      <el-container>
        <el-collapse-transition>
        <el-aside width="20%" v-show="isOpen">
          <i class="el-icon-circle-close-outline asideBtn" @click="closeCard"></i>
          <app-aside></app-aside></el-aside>
        </el-collapse-transition>
        <el-container>
          <el-header height="120px">
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
  data () {
    return {
      isOpen: true
    }
  },
  components: {
    appHeader, appAside, appContent, appFooter
  },
  methods: {
    closeCard () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    .el-container {
      height: 100%;
      .el-aside {
        position: relative;
        .asideBtn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
        }
      }
    }
  }
</style>
