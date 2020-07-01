<template>
  <section class="container">
    <h1>Skills</h1>
    <charts></charts>
  </section>
</template>

<script>
// import BarChart from "@/components/SkillsChart";
import charts from "@/components/TestComponent"

export default {
  name: "Skills",
  components: {
    // BarChart,
    charts
  }
}
</script>

<style>

#skills-chart {
  height: 150px;
  width: 350px;
}

</style>
