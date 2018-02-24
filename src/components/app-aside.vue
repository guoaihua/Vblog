<template>
    <div class="aside">
      <div class="block"></div>
      <el-card :body-style="{ padding: '1px' }">
        <img src="../assets/bg.jpg" class="image">
        <div style="padding: 14px;background-color: #222222">
          <span>名字</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
import convertTime from '../utils/convertTime'
export default {
  name: 'app-aside',
  data () {
    return {
      currentDate: convertTime(new Date())
    }
  }
}
</script>

<style scoped lang="scss">
  .aside {
    width: 100%;
    height: 100%;
    background-color: #222;
    .block {
      width: 100%;
      height: 30px;
    }
    .el-card {
      width: 50%;
      margin: 0 auto;
      .time {
        font-size: 13px;
        color: #999;
      }
      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }
      .button {
        padding: 0;
        float: right;
      }
      .image {
        width: 100%;
        display: block;
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }
    }
  }
</style>
