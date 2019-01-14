<template>
<div class="conlef">
  <el-row class="tac">
    <el-col :span="5">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">

            <span>基础</span>
          </template>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title">

            <span>快速入门</span>
          </template>

        </el-submenu>



      </el-menu>
    </el-col>

  </el-row>
</div>
</template>

<script>

    export default {
        name: "CountLeft",
       methods:{
         handleOpen(key, keyPath) {
           console.log(key, keyPath);
         },
         handleClose(key, keyPath) {
           console.log(key, keyPath);
         }
       }

    }
</script>

<style scoped>



</style>
