import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Chart: {
      state: {
        chartData: {
          datasets: [
            {
              backgroundColor: '#E98CDE',
              label: 'Зашли',
              data: [
                {
                  x: '2019-05-24T07:00:00+00:00',
                  y: 65,
                },
                {
                  x: '2019-05-24T08:00:00+00:00',
                  y: 84,
                },
                {
                  x: '2019-05-24T09:00:00+00:00',
                  y: 34,
                },
                {
                  x: '2019-05-24T10:00:00+00:00',
                  y: 34,
                },
                {
                  x: '2019-05-24T11:00:00+00:00',
                  y: 43,
                },
                {
                  x: '2019-05-24T12:00:00+00:00',
                  y: 21,
                },
              ],
            },
            {
              backgroundColor: '#492B7C',
              label: 'Прошли мимо',
              data: [
                {
                  x: '2019-05-24T07:00:00+00:00',
                  y: 334,
                },
                {
                  x: '2019-05-24T08:00:00+00:00',
                  y: 543,
                },
                {
                  x: '2019-05-24T09:00:00+00:00',
                  y: 347,
                },
                {
                  x: '2019-05-24T10:00:00+00:00',
                  y: 343,
                },
                {
                  x: '2019-05-24T11:00:00+00:00',
                  y: 432,
                },
                {
                  x: '2019-05-24T12:00:00+00:00',
                  y: 213,
                },
              ],
            },
          ],
        },
      },
      getters: {
        chartData(state) {
          return state.chartData;
        },
      },
      mutations: {

      },
      actions: {

      },
    },
  },
});
