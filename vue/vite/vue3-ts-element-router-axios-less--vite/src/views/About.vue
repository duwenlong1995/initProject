<template>
<div class="About">
<!-- 定义子组件 -->
</div>
</template>
<script>
// 解构
import { defineComponent} from 'vue'
// 模块化
export default defineComponent({
name:'About', //组件名称
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
</style>
 