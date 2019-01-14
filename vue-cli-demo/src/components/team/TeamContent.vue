<template>
     <div class="content">
          <ul>
            <li>
               <p class="easy">海量资源</p>
              <div class="tri"></div>
               <span class="inr">无需东奔西跑，上下求索。在这里都可以找到一切框架应有尽有。</span>
            </li>
            <li>
               <p class="easy">简单易用</p>
              <div class="tril"></div>
              <span class="inr">无论你是菜鸟还是大牛。在这里都可以构建自己的应用。</span>
            </li>
            <li>
              <p class="easy">灵活高效</p>
              <div class="trill"></div>
              <span class="inr">简单小巧的核心，最省心的优化，足以应付任何规模的应用。</span>
            </li>
          </ul>

     </div>

</template>

<script>
    export default {
        name: "TeamContent"
    }
</script>

<style scoped>
.content{
  width: 100%;
  background: url(../../../static/img/content.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

}
.easy{
  width: 90%;
  height: 140px;
  border-radius: 50%;
  background: red;
  font-size: 50px;
  line-height: 140px;
  color: white;
  text-align: center;
  margin: 20px auto;
}
.content ul{
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

  .content ul li{
    width: 33%;
     float: left;
    text-align: center;
  }
  .inr{
    display: block;
    width: 60%;
    font-size: 30px;
    color: black;
    background: white;
    line-height: 40px;
    border-radius: 10px;
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    position: relative;
  }
  .tri{
    position: absolute;
    left: 201px;
    top: 839px;
    width:0px;
    height:0px;
    border-top:20px solid rgba(0,0,0,0);
    border-right:20px solid  rgba(0,0,0,0);
    border-bottom:20px solid white;
    border-left:20px solid  rgba(0,0,0,0);
  }
.trill{
  position: absolute;
  left: 1090px;
  top: 839px;
  width:0px;
  height:0px;
  border-top:20px solid rgba(0,0,0,0);
  border-right:20px solid  rgba(0,0,0,0);
  border-bottom:20px solid white;
  border-left:20px solid  rgba(0,0,0,0);
}
.tril{
  position: absolute;
  left: 648px;
  top: 839px;
  width:0px;
  height:0px;
  border-top:20px solid rgba(0,0,0,0);
  border-right:20px solid  rgba(0,0,0,0);
  border-bottom:20px solid white;
  border-left:20px solid  rgba(0,0,0,0);
}

</style>
