<template>
  <div id="proj-outer-container">
    <div id="proj-inner-container" v-for="item in items" :key="item">
      <h1 id="proj-company">
        <i class="material-icons">favorite</i>
        {{ item.company }}
      </h1>
      <h2 id="proj-title">{{ item.title }}</h2>
      <p id="proj-content">{{ item.content }}</p>
      <p id="website" v-if="item.website">
        <a v-bind:href="item.website">{{ item.websiteTitle }}</a>
      </p>
    </div>
  </div>
</template>


<script>
  import projects from '../assets/projects.json'
  //TODO: switch to appropriate icon
  // Exporting this so it can be used in other components
  export default {
    data () {
      return {
        items: projects
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
    //   this.renderChart(this.datacollection, this.options)
    }
  }
</script>