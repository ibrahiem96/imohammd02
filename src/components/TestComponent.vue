<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    render(){
        return (
            <div>
                <div class="columns">
                    <div class="column">
                        <h1>Cloud</h1>
                        <test2 id='skills-chart'></test2>
                    </div>
                    <div class="column">
                        <h1>Programming</h1>
                        <test></test>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>CI/CD</h1>
                        <test id='skills-chart'></test>
                    </div>
                    <div class="column">
                        <h1>Analytics</h1>
                        <test id='skills-chart'></test>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>Environments</h1>
                        <test id='skills-chart'></test>
                    </div>
                    <div class="column">
                    </div>
                </div>
            </div>
        )
    }
}

const test = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Mop', 'Kubernetes', 'Azure', 'Docker'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [10, 9, 8, 5]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          tooltips: {
            // callbacks: {
            //   title: function(){
            //     return ''
            //   },
            //   beforeLabel: function(tooltipItem, data){
            //     return data.datasets[tooltipItem.datasetIndex].label

            //   },
            //   label: function(tooltipItem) {
            //     return '$' + Number(tooltipItem.yLabel)
            //   }
            // }
            enabled: false
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                // Include a dollar sign in the ticks
                    // callback: function(value) {
                    //     return '$' + value;
                    // },
                display: true
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [ {
              stacked: true,
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }



const test2 = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Mop', 'Kubernetes', 'Azure', 'Docker'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [11, 19, 1, 5]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          tooltips: {
            // callbacks: {
            //   title: function(){
            //     return ''
            //   },
            //   beforeLabel: function(tooltipItem, data){
            //     return data.datasets[tooltipItem.datasetIndex].label

            //   },
            //   label: function(tooltipItem) {
            //     return '$' + Number(tooltipItem.yLabel)
            //   }
            // }
            enabled: false
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                // Include a dollar sign in the ticks
                    // callback: function(value) {
                    //     return '$' + value;
                    // },
                display: true
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [ {
              stacked: true,
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>