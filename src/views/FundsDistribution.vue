<template>
  <section class="container">
    <h1>Donation Funds Distribution</h1>
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
    <!-- <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="datacollection"></reactive>
        <button class="button is-primary" @click="fillData()">Randomize</button>
      </div>
    </div> -->
  </section>
</template>

<script>
// import LineChart from "@/components/UsageChart";
// import BarChart from "@/components/GoalChart";
// import BubbleChart from "@/components/BubbleChart";
import DoughnutChart from "@/components/DistChart";

export default {
  name: "GoalChart",
  components: {
    // LineChart
    // BarChart
    // BubbleChart,
    DoughnutChart
  }
}
</script>
