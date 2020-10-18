<template>
  <div class="page-container">
    <Title cover="Аналитика" />
    <md-card class="md-card-container">
      <md-card-header>
        <div class="md-title">Аналитика по визитам</div>
      </md-card-header>

      <md-card-content>
        <LineChart
          label="Посещение"
          :date="chartData.date"
          :visits="chartData.visits"
          :options="chartOptions"
        />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import LineChart from "@/components/LineChart";
import data from "@/api";
import { divideData } from "@/helpers";

export default {
  name: "Analitics",
  data: () => ({
    chartData: divideData(data),
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0
        }
      },
    }
  }),
  mounted() {},
  components: {
    Title,
    LineChart
  }
};
</script>
