<script>
//Importing Line class from the vue-chartjs wrapper
import { Doughnut } from 'vue-chartjs'

//Exporting this so it can be used in other components
export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['Cleaning Supplies', 'Food', 'Rental Dumpster'],
        datasets: [
          {
            label: 'Funds Distribution',
            backgroundColor: [
              '#EEC705',
              '#14D37F',
              '#673AD5'
            ],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [188.65, 2430.09, 896.10]
          },
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        tooltips: {
          callbacks: {
            label: function(t,d) {
                return d.labels[t.index] + ': $' + d.datasets[t.datasetIndex].data[t.index].toLocaleString()
            }
          }
        },
        cutoutPercentage: 40,
        legend: {
          display: true
        },
        title: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
					animateScale: true,
					animateRotate: true
        }
      }
    }
  },
  mounted () {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
