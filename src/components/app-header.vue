<template>
  <div class="header">
    <div class="logo">
      <span>zming</span>
    </div>
    <div class="nav">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
     background-color="#f5f5f5"
     active-text-color="#f5f5f5"
     >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped lang="scss">
    .header {
      width: 100%;
      height: 120px;
      background-color: #f5f5f5;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 30%;
      }
      .nav {
        width: 50%;
      }
    }
</style>
