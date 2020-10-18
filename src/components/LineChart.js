import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    date: Array,
    visits: Array,
    label: String,
    options: Object
  },
  mounted() {
    this.renderChart({
      labels: this.date,
      datasets: [{
        label: this.label,
        data: this.visits,
        backgroundColor: "rgba(68, 138, 255, 0.3)",
        borderColor: "rgb(68, 138, 255)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(68, 138, 255)",
      }]
    }, this.options);
  }
};