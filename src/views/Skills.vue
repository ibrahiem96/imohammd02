<template>
  <section class="container">
    <h1>Skills</h1>
    <div class="columns">
      <div class="column">
        <h1>Cloud</h1>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h1>Programming</h1>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1>CI/CD</h1>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h1>Analytics</h1>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1>Environments</h1>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <!-- <h1>Environments</h1> -->
        <!-- <bar-chart></bar-chart> -->
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "@/components/SkillsChart";

export default {
  name: "Skills",
  components: {
    BarChart
  }
}
</script>
