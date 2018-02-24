<template>
  <div class="header">
    <div class="logo">
      <span>logo名</span>
    </div>
    <div class="nav">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
     >
       <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
       <el-menu-item index="2"><router-link :to="{name: 'pageDetail', query: {pageId: 1}}">博客</router-link></el-menu-item>
       <el-menu-item index="3"><router-link :to="{name:'appMain'}">资源分享</router-link></el-menu-item>
        <el-submenu index="4">
          <template slot="title">个人中心</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="5"><router-link :to="{name:'appMain'}">后台管理</router-link></el-menu-item>
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
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 2px 3px #eee;
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
          border-bottom: 0px;
        }
      }
    }
</style>
