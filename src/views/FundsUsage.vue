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
      <div class="column">
        <h1>CI/CD</h1>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h1>Analytics</h1>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h1>Environments</h1>
        <bar-chart></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
// import LineChart from "@/components/UsageChart";
import BarChart from "@/components/GoalChart";
// import BubbleChart from "@/components/BubbleChart";
// import Reactive from "@/components/Reactive";

export default {
  name: "FundsUsage",
  components: {
    // LineChart
    BarChart,
    // BubbleChart,
    // Reactive
  }
}
</script>
