<template>
  <div class="header">
    <div class="logo">
      <span>logo名</span>
    </div>
    <div class="nav">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
     background-color="#f5f5f5"
     active-text-color="black"
     >
        <el-menu-item index="1">首页</el-menu-item>
       <el-menu-item index="2">博客</el-menu-item>
       <el-menu-item index="3">分享</el-menu-item>
       <el-menu-item index="4">留言</el-menu-item>
        <el-submenu index="5">
          <template slot="title">个人中心</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">后台管理</a></el-menu-item>
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
      height: 90px;
      background-color: #f5f5f5;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 30%;
        span {
          font-size: 20px;
          line-height: 90px;
        }
      }
      .nav {
        width: 50%;
        height: 60px;
        .el-menu-demo {
          margin: 17px;
        }
      }
    }
</style>
