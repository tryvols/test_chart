<template>
  <div class="home">
    <Chart
      ref="chart"
      :chartdata="filteredChartData"
    />
    <ElDatePicker
      v-model="datetimeRange"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import { cloneDeep } from 'lodash';
import moment from 'moment';

export default {
  name: 'home',
  data: () => ({
    datetimeRange: [],
    chartData: {
      datasets: [{
        backgroundColor: '#E98CDE',
        label: 'Зашли',
        data: [{
          x: '2019-05-24T07:00:00+00:00',
          y: 65,
        }, {
          x: '2019-05-24T08:00:00+00:00',
          y: 84,
        }, {
          x: '2019-05-24T09:00:00+00:00',
          y: 34,
        }, {
          x: '2019-05-24T10:00:00+00:00',
          y: 34,
        }, {
          x: '2019-05-24T11:00:00+00:00',
          y: 43,
        }, {
          x: '2019-05-24T12:00:00+00:00',
          y: 21,
        }],
      }, {
        backgroundColor: '#492B7C',
        label: 'Прошли мимо',
        data: [{
          x: '2019-05-24T07:00:00+00:00',
          y: 334,
        }, {
          x: '2019-05-24T08:00:00+00:00',
          y: 543,
        }, {
          x: '2019-05-24T09:00:00+00:00',
          y: 347,
        }, {
          x: '2019-05-24T10:00:00+00:00',
          y: 343,
        }, {
          x: '2019-05-24T11:00:00+00:00',
          y: 432,
        }, {
          x: '2019-05-24T12:00:00+00:00',
          y: 213,
        }],
      }],
    },
  }),
  computed: {
    filteredChartData() {
      const chartData = cloneDeep(this.chartData);
      const startTime = moment(this.datetimeRange[0]);
      const endTime = moment(this.datetimeRange[1]);
      if (this.datetimeRange.length > 1) {
        chartData.datasets.forEach((set) => {
          set.data = set.data
            .filter(data => startTime < moment(data.x) && endTime > moment(data.x));
        });
      }
      return chartData;
    },
  },
  watch: {
    filteredChartData: {
      handler() {
        this.$nextTick(this.$refs.chart.render);
      },
      deep: true,
    },
  },
  components: {
    Chart,
  },
};
</script>
