<template>
    <div>
      <team-header></team-header>
      <guide-counter></guide-counter>
    </div>
</template>

<script>
    import GuideCounter from "../components/guide/GuideCounter";
    import TeamHeader from "../components/team/TeamHeader";
    export default {
        name: "Guide",
      components: {TeamHeader, GuideCounter}
    }
</script>

<style scoped>

</style>
