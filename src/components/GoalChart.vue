<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Goal Status'],
          datasets: [
            {
              label: 'Funds Raised',
              backgroundColor: '#2CC45E',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [3970]
            },
            {
              label: 'Funds Remaining',
              backgroundColor: '#E1E1E1',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#00000',
              //Data to be represented on y-axis
              data: [1230]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          tooltips: {
            callbacks: {
              title: function(){
                return ''

              },
              beforeLabel: function(tooltipItem, data){
                return data.datasets[tooltipItem.datasetIndex].label

              },
              label: function(tooltipItem) {
                return '$' + Number(tooltipItem.yLabel)
              }
            }
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                // Include a dollar sign in the ticks
                    callback: function(value) {
                        return '$' + value;
                    },
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
            display: true
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