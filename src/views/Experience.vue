<template>
  <section class="container">
    <h1>Experience</h1>
    <div class="columns">
      <div class="column">
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

<style>

#job-outer-container {
  text-align: left;
}

#job-inner-container {
  padding-bottom: 50px;
}

#job-company {
  font-style: italic;
  font-weight: bold;
}

#job-title {
  font-weight: bold;
}

#job-content {

}

</style>