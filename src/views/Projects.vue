<template>
  <section class="container">
    <h1>Projects</h1>
    <div class="columns">
      <div class="column">
        <project-item></project-item>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";

export default {
  name: "Experience",
  components: {
    ProjectItem
  }
}
</script>

<style>

#proj-outer-container {
  text-align: left;
}

#proj-inner-container {
  padding-bottom: 50px;
}

#proj-company {
  font-style: italic;
  font-weight: bold;
}

#proj-title {
  font-weight: bold;
}

#proj-content {

}

</style>