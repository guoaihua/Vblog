<template>
  <div class="page">
    <span class="line"></span>
    <el-container style="height: 250px">
      <el-aside width="300px">
          <div class="pic">
            <img src="@/assets/bg.jpg" alt="" style="width: 200px; height: 210px;">
          </div>
      </el-aside>
      <el-container>
        <el-header height="40px">清风徐来水波不兴</el-header>
        <el-main>
          <p><router-link :to="{name:'pageDetail',query:{pageId:1}}">{{text}}</router-link></p>
        </el-main>
        <el-footer height="40px">Footer</el-footer>
      </el-container>
    </el-container>
    <span class="line"></span>
    <el-container style="height: 250px">
      <el-aside width="300px">
        <div class="pic">
          <img src="@/assets/bg.jpg" alt="" style="width: 200px; height: 210px;">
        </div>
      </el-aside>
      <el-container>
        <el-header height="40px">清风徐来水波不兴</el-header>
        <el-main>
          <p><router-link :to="{name:'pageDetail',query:{pageId:2}}">{{text}}</router-link></p>
        </el-main>
        <el-footer height="40px">Footer</el-footer>
      </el-container>
    </el-container>
    <span class="line"></span>
    <el-container style="height: 250px">
      <el-aside width="300px">
        <div class="pic">
          <img src="@/assets/bg.jpg" alt="" style="width: 200px; height: 210px;">
        </div>
      </el-aside>
      <el-container>
        <el-header height="40px">清风徐来水波不兴</el-header>
        <el-main>
          <p><router-link :to="{name:'pageDetail',query:{pageId:3}}">{{text}}</router-link></p>
        </el-main>
        <el-footer height="40px">Footer</el-footer>
      </el-container>
    </el-container>
<!--        <router-link :to="{name:'pageDetail', query: {pageId: 1}}">312311</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 2}}">adsadsa</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 3}}">312311</router-link>
        <router-link :to="{name:'pageDetail', query: {pageId: 4}}">adsadsa</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      text: 'Flex 布局语法教程分类 编程技术 网页布局(layout)是CSS的一个重点应用。 布局的传统解决方案,基于盒状模型,依赖 display属性+ position属性+ float属性。它..Flex 布局语法教程分类 编程技术 网页布局(layout)是CSS的一个重点应用。 布局的传统解决方案,基于盒状模型,依赖 display属性+ posi 布局的传统解决方案,基于盒状模型,依赖 布局的传统解决方案,基于盒状模型,依赖 display属性+ position属性+ float属性。 布局的传统解决方案,基于盒状模型,依赖 display属性+ position属性+ float属性...'
    }
  }
}
</script>
<style scoped lang="scss">
    .page {
      display: flex;
      flex-direction: column;
      .line {
        width: 100%;
        height: 1px;
        background-color: #eee;
      }
      .el-container {
        width: 80%;
        margin: 20px auto;
        .el-aside {
          overflow-y: hidden;
          padding: 20px 50px;
        }
        .el-header {
          line-height: 40px;
          font-size: 25px;
          font-weight: bold;
          font-family: "宋体";
          text-align: left;
        }
        .el-main {
          overflow-y: hidden;
          padding: 0px 0px 20px  0px;
          p a{
            text-overflow: clip;
            text-decoration: none;
            color: #000000;
          }
        }

      }
    }
</style>
