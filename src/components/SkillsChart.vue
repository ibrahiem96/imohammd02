<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { HorizontalBar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['AWS', 'Kubernetes', 'Azure', 'Docker'],
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [8, 8, 5, 7]
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