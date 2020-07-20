import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)

//TODO: add skill charts component(horizontal bar charts)
//TODO: add experience component
//TODO: add projects component
//TODO: blog page
//TODO: social media

Vue.config.productionTip = false;

new Vue({
  router,
  watch: {
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || 'Ibrahiem Mohammad'
      },
       immediate: true
    }
  },
  render: h => h(App)
}).$mount('#app')