<script>
import { Bar } from 'vue-chartjs';

export default {
  mounted() {
    this.render();
  },
  props: {
    chartdata: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month',
            },
          }],
        },
      }),
    },
  },
  methods: {
    render() {
      this.renderChart(this.chartdata, this.options);
    },
  },
  extends: Bar,
};
</script>
