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
    ExperienceItem,
  },
};
</script>

<style>

#job-outer-container {
  text-align: left;
}

#job-inner-container {
  padding-bottom: 2.5%;
}

#job-company {
  font-style: italic;
  font-weight: bold;
}

#job-title {
  font-weight: bold;
}

#more {
  cursor: pointer;
}

.moreJobsText {
  opacity: 0;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.rotate {
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.rotate.down {
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

li {
  list-style-type: square;
}
</style>
