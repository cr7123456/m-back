<template>
    <div class="warp">
      <div class="back">
        <team-header></team-header>
        <div class="int">
          <div class="container">
            <div class="cube cube--1">
              <div class="side side--back">
                <div class="side__inner"></div>
              </div>
              <div class="side side--left">
                <div class="side__inner"></div>
              </div>
              <div class="side side--right">
                <div class="side__inner"></div>
              </div>
              <div class="side side--top">
                <div class="side__inner"></div>
              </div>
              <div class="side side--bottom">
                <div class="side__inner"></div>
              </div>
              <div class="side side--front">
                <div class="side__inner"></div>
              </div>
            </div>

            <div class="cube cube--2">
              <div class="side side--back">
                <div class="side__inner"></div>
              </div>
              <div class="side side--left">
                <div class="side__inner"></div>
              </div>
              <div class="side side--right">
                <div class="side__inner"></div>
              </div>
              <div class="side side--top">
                <div class="side__inner"></div>
              </div>
              <div class="side side--bottom">
                <div class="side__inner"></div>
              </div>
              <div class="side side--front">
                <div class="side__inner"></div>
              </div>
            </div>

            <div class="cube cube--3">
              <div class="side side--back">
                <div class="side__inner"></div>
              </div>
              <div class="side side--left">
                <div class="side__inner"></div>
              </div>
              <div class="side side--right">
                <div class="side__inner"></div>
              </div>
              <div class="side side--top">
                <div class="side__inner"></div>
              </div>
              <div class="side side--bottom">
                <div class="side__inner"></div>
              </div>
              <div class="side side--front">
                <div class="side__inner"></div>
              </div>
            </div>
          </div>
             <p class="inr-title">为您搭建最完美、最便捷的前端框架</p>
             <p class="subtitle">一切精彩，尽在其中...</p>
          <p class="choose">
            <span >起步</span> <span>下载</span>
          </p>
          <p class="last">
            <span >当前版本：1.0.9</span> <span>下载量：23565</span>
          </p>

        </div>
      </div>

      <team-content></team-content>
      <team-footer></team-footer>
    </div>
</template>

<script>

    import TeamHeader from "../components/team/TeamHeader";
    import TeamContent from "../components/team/TeamContent";
    import TeamFooter from "../components/team/TeamFooter";
    export default {
        name: "Team",
      components: {TeamFooter, TeamContent, TeamHeader}
    }
</script>

<style scoped>
.back{
  background: url(../../static/img/indexbg.gif) no-repeat;
  background-size: 100% 100%;
}
.int{
  width: 100%;
  overflow: hidden;
}
  .inr-title{

    font-size: 50px;
    font-weight: 600;
    color: white;
  /*padding: 10px 0;*/
  line-height: 60px;
    margin: 30px auto;
    text-align: center;
  }
  .subtitle{
    line-height: 40px;
    font-size: 30px;
    font-weight: 400;
    color: white;
    width: 100%;
    height: 40px;
    margin: 0  auto 25px;
    text-align: center;
  }
.choose{
  width: 100%;
  margin: 20px auto;
  text-align: center;
}
.choose span{
  display: inline-block;
  background: white;
  width: 90px;
  height: 40px;
  line-height: 20px;
  font-size: 25px;
  font-weight: 400;
  color: black;
  padding: 10px;
  border-radius: 20px;
}
.last{
  width: 100%;
  height: 20px;
  margin: 22px auto;
  text-align: center;
}
.last span:nth-child(1){
  margin-right: 20px;
}
.last span{
  display: inline-block;
  font-size: 18px;
  font-weight: 200;
  color: white;

}
.choose span:nth-child(1){
  margin-right: 60px;
}
.choose span:hover {
  background: green;
  color: white;
}
.container {
  width: 10em;
  height: 10em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-animation: rotate 12s infinite linear;
  animation: rotate 12s infinite linear;
  margin: 100px auto;
  background: white;
  border-radius: 50%;
}

.cube {
  position: absolute;
  width: 10em;
  height: 10em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.cube--2 {
  -webkit-transform: rotateX(45deg) rotateY(45deg);
  transform: rotateX(45deg) rotateY(45deg);
}
.cube--3 {
  -webkit-transform: rotateX(45deg) rotateZ(45deg);
  transform: rotateX(45deg) rotateZ(45deg);
}

.side {
  position: absolute;
  width: 10em;
  height: 10em;
  border: 2px dotted rgba(255, 213, 0, 0.35);
  border-radius: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.side::before, .side::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  box-sizing: border-box;
  border-radius: inherit;
  border: 1px solid;
  box-shadow: inset 0 0 2em, 0 0 2em;
}
.side::before {
  width: 2.5em;
  height: 2.5em;
  color: gold;
}
.side::after {
  width: 1.5em;
  height: 1.5em;
  -webkit-transform: translateZ(-2em);
  transform: translateZ(-2em);
  box-shadow: inset 0 0 1em, 0 0 1em;
  color: teal;
}

.side--back {
  -webkit-transform: translateZ(-5em) rotateY(180deg);
  transform: translateZ(-5em) rotateY(180deg);
}

.side--left {
  -webkit-transform: translateX(-5em) rotateY(-90deg);
  transform: translateX(-5em) rotateY(-90deg);
}

.side--right {
  -webkit-transform: translateX(5em) rotateY(90deg);
  transform: translateX(5em) rotateY(90deg);
}

.side--top {
  -webkit-transform: translateY(-5em) rotateX(90deg);
  transform: translateY(-5em) rotateX(90deg);
}

.side--bottom {
  -webkit-transform: translateY(5em) rotateX(-90deg);
  transform: translateY(5em) rotateX(-90deg);
}

.side--front {
  -webkit-transform: translateZ(5em);
  transform: translateZ(5em);
}

.side__inner {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 5em;
  height: 5em;
  margin: auto;
  border-radius: inherit;
  border: 1px solid;
  box-shadow: inset 0 0 2em;
  color: orangered;
  -webkit-transform: translateZ(2em);
  transform: translateZ(2em);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.side__inner::before, .side__inner::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  box-sizing: border-box;
  border-radius: inherit;
  border: 1px solid;
  box-shadow: inset 0 0 2em, 0 0 2em;
}
.side__inner::before {
  width: 2.5em;
  height: 2.5em;
  -webkit-transform: translateZ(2em);
  transform: translateZ(2em);
  color: crimson;
}
.side__inner::after {
  width: 1.5em;
  height: 1.5em;
  -webkit-transform: translateZ(4em);
  transform: translateZ(4em);
  color: purple;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
}
</style>
