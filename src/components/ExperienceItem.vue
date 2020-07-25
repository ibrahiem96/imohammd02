<template>
  <div id="job-outer-container">
    <div id="job-inner-container" v-for="item in items" :key="item">
      <h1 id="job-company">
        <i class="material-icons">work</i>
        {{ item.company }}
      </h1>
      <h2 id="job-title">{{ item.title }} | {{ item.years }}</h2>
      <ul>
        <li v-for="line in item.content" :key="line">
          {{ line }}
        </li>
      </ul>
    </div>

    <h2>
      <i id="more" class="material-icons rotate" v-on:click="more()">add</i>
      <i id="more" class="material-icons" v-on:click="more()">work</i>
    </h2>

    <div id="more-jobs-container">
      <div
        id="job-inner-container"
        class="moreJobsText"
        v-for="item in moreItems"
        :key="item"
      >
        <h1 id="job-company">
          <i class="material-icons">work</i>
          {{ item.company }}
        </h1>
        <h2 id="job-title">{{ item.title }} | {{ item.years }}</h2>
        <ul>
          <li v-for="line in item.content" :key="line">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
import experience from "../assets/experience.json";

function setNone(i) {
  document.getElementById("more-jobs-container").style.display = "none";
}

//Exporting this so it can be used in other components
export default {
  data() {
    return {
      items: experience.slice(0, 4),
      moreItems: experience.slice(4),
      isMoreOpen: false,
    };
  },
  methods: {
    //TODO: this needs work
    more() {
      document.querySelectorAll(".rotate").forEach((i) => {
        i.classList.toggle("down");
      });

      if (!this.isMoreOpen) {
        document.getElementById("more-jobs-container").style.display = "inline";
        document.querySelectorAll(".moreJobsText").forEach((i) => {
          i.style.opacity = 1;
        });
        this.isMoreOpen = true;
      } else if (this.isMoreOpen) {
        document.querySelectorAll(".moreJobsText").forEach((i) => {
          i.style.opacity = 0;
        });
        setTimeout(setNone, 2000);
        this.isMoreOpen = false;
      }
    },
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    //   this.renderChart(this.datacollection, this.options)
  },
};
</script>
