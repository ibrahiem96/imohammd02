<template>
  <section class="container">
    <h1>Experience</h1>
    <div class="columns">
      <div class="column">
        <!-- <h3>Funds Distribution</h3> -->
        <experience-item></experience-item>
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceItem from "@/components/ExperienceItem";

export default {
  name: "Experience",
  components: {
    ExperienceItem
  }
}
</script>
