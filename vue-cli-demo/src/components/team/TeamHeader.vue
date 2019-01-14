<template>
    <header>
      <h1>IUUI</h1>
      <input type="text" placeholder="Search...">
      <div class="list">
        <a href="#">指南</a>
        <a href="#">案例</a>
        <a href="#">模板</a>
        <a href="#">团队</a>
      </div>

    </header>
</template>

<script>
    export default {
        name: "TeamHeader",

    }
</script>

<style scoped>
  header{
    height:70px;
  background: orange;
  }
  header h1{
    float:left;
    font-size: 40px;
    font-weight: 500;
    line-height:70px;
    color:#fff;
    text-shadow: 2px 2px 2px #fff;
    margin-left: 60px;
  }
  header input{
    float:left;
    width: 300px;
    height:40px;
    text-indent: 10px;
    background: white;
    border:1px solid #fff;
    border-radius: 4px;
    margin-top:15px;
    margin-left: 70px;
  }
  header .list{
    float:right;
    margin-right: 70px;
    height:70px;
    line-height: 70px;
  }
  header .list a{
    padding:0 20px;
    font-size: 16px;
    color:#fff;
    padding-bottom: 10px;

  }
  .list a:hover{
    color: red;
    border-bottom:3px solid red ;
  }

</style>
