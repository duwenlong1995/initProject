<template>
<div class="Home">
  <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</div>
</template>
<script>
// 解构
import { defineComponent} from 'vue'
// 模块化
export default defineComponent({
name:'Home', //组件名称
props: {
// 接收父组件数据
},
components: {
// 定义子组件
},
setup(){
// 这里没有this,直接使用props里数据
return {}
}
})
</script>
<style  lang='less' scoped>
/* scoped 使用得定义的样式只在本页面内生效  */

.el-container{
        height: 100vh;
    }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
 