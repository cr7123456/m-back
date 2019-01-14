<template>
    <div>
      <team-header></team-header>
      <div class="content">
        <count-left></count-left>
        <count-right></count-right>
      </div>

    </div>
</template>

<script>
    import TeamHeader from "../components/team/TeamHeader";
    import CountLeft from "../components/case/CountLeft";
    import CountRight from "../components/case/CountRight";
    export default {
        name: "Case",
      components: {CountRight, CountLeft, TeamHeader}
    }
</script>

<style scoped>
 .content{
   width: 100%;
   height: 100%;
   /*overflow: hidden;*/
 }
</style>
