<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    render(){
        return (
            <div id="outer-container">
                <div class="columns">
                    <div class="column">
                        <h1>Cloud</h1>
                        <cloud id='skills-chart'></cloud>
                    </div>
                    <div class="column">
                        <h1>Programming</h1>
                        <programming id='skills-chart'></programming>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>CI/CD</h1>
                        <cicd id='skills-chart'></cicd>
                    </div>
                    <div class="column">
                        <h1>Analytics</h1>
                        <analytics id='skills-chart'></analytics>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>Environments</h1>
                        <environments id='skills-chart'></environments>
                    </div>
                    <div class="column">
                        <h1>Frameworks</h1>
                        <frameworks id='skills-chart'></frameworks>
                    </div>
                  </div>
            </div>
        )
    }
}

const cloud = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['AWS', 'Kubernetes', 'Docker'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9", "#b9e8e5"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [8, 8, 8]
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
              ticks: {
                max: 10
              },
              gridLines: {
                display: true
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



const programming = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Python', 'Javascript', 'Java'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [9, 8, 8]
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
              ticks: {
                max: 10
              },
              gridLines: {
                display: true
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

const cicd = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Bamboo', 'AWS CF', 'Chef', 'Terraform'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [10, 9, 6, 5]
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
              ticks: {
                max: 10
              },
              gridLines: {
                display: true
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
    }}
const analytics = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Datadog', 'AWS CW', 'PagerDuty'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [8, 8, 7]
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
              ticks: {
                max: 10
              },
              gridLines: {
                display: true
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
    }}

const environments = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Linux', 'Windows'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [8, 7]
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
              ticks: {
                max: 10
              },
              gridLines: {
                display: true
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
    }}

const frameworks = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['VueJS', 'Flask', 'FastAPI', 'Spring'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [7, 6, 6, 5]
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
              ticks: {
                max: 10
              },  
              gridLines: {
                display: true
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
    }}

</script>