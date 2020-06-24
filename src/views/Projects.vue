<template>
  <section class="container">
    <h1>Projects</h1>
    <div class="columns">
      <!-- <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div> -->
      <div class="column">
        <!-- <h3>Funds Distribution</h3> -->
        <doughnut-chart></doughnut-chart>
      </div>
    </div>
  </section>
</template>

<script>
import DoughnutChart from "@/components/ProjectItem";

export default {
  name: "Projects",
  components: {
    DoughnutChart
  }
}
</script>
