<template>
  <div id="job-outer-container">
    <div id="job-inner-container" v-for="item in items" :key="item">
      <h1 id="job-company">
        <i class="material-icons">cloud</i>
        {{ item.company }}
      </h1>
      <h2 id="job-title">{{ item.title }}</h2>
      <p id="job-content">{{ item.content }}</p>
    </div>
  </div>
</template>


<script>
  //Exporting this so it can be used in other components
  export default {
    data () {
      return {
        items: [
          {
            company: 'Fitch Ratings',
            title: 'Cloud Engineer',
            years: 'Apr 2019 - Present',
            content: 'AWS | Kubernetes | Docker '
          },
          {
            company: 'Fitch Ratings',
            title: 'Cloud Engineer',
            years: 'Apr 2019 - Present',
            content: 'AWS | Kubernetes | Docker '
          }
        ]
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
    //   this.renderChart(this.datacollection, this.options)
    }
  }
</script>