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
                        <h1>Programming Languages</h1>
                        <programming id='skills-chart'></programming>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>Security Tools</h1>
                        <security id='skills-chart'></security>
                    </div>
                    <div class="column">
                        <h1>Observability</h1>
                        <observability id='skills-chart'></observability>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>Infrastructure</h1>
                        <infrastructure id='skills-chart'></infrastructure>
                    </div>
                    <div class="column">
                        <h1>Container Tools / Service Mesh</h1>
                        <containers id='skills-chart'></containers>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h1>CI/CD</h1>
                        <cicd id='skills-chart'></cicd>
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
          labels: ['AWS', 'GCP'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [5, 1]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          tooltips: {
            enabled: true
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                display: true
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [ {
              stacked: true,
              ticks: {
                max: 5
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

const containers = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Kubernetes', 'Docker', 'Istio', 'Linkerd'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f", "#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [5, 5, 1, 0.5]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          tooltips: {
            enabled: true
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                display: true
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [ {
              stacked: true,
              ticks: {
                max: 5
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
          labels: ['Python', 'Javascript', 'Java', 'Go'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f", "#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [5, 4, 3, 0.5]
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
            enabled: true
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
                max: 5
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

const infrastructure = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['AWS CF', 'Terraform', 'Spinnaker'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [3, 2, 0.5]
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
            enabled: true
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
                max: 5
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
const observability = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['AWS CW', 'PagerDuty', 'Datadog', 'Prometheus'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f", "#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [3, 3, 2, 1]
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
            enabled: true
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
                max: 5
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

const security = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Crowdstrike', 'Hashicorp Vault'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#3cba9f"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [1, 1]
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
            enabled: true
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
                max: 5
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

const cicd = {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Atlassian Bamboo', 'Github Actions'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [3, 1.5]
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
            enabled: true
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
                max: 5
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
              data: [3, 1, 1, 1]
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
            enabled: true
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
                max: 5
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
