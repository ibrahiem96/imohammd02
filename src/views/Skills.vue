<template>
  <section class="container">
    <h1>Skills</h1>
    <h3>(measured in years of experience)</h3>
    <div class="columns">
      <div class="column">
        <skills-chart></skills-chart>
      </div>
    </div>
  </section>
</template>

<script>
import SkillsChart from "@/components/SkillsComponent";

export default {
  name: "Experience",
  components: {
    SkillsChart
  }
}
</script>

<style>	

#skills-chart {	
  height: 150px;	
  width: 350px;	
}	
#outer-container {	
  margin-left: 10%;	
}	
</style>