import importTemplate from "../../util/importTemplate.js";

export default {
  components: {},
  data() {
    return {};
  },
  /* fix for githubpages
  template: await importTemplate(
    "../components/improvement-areas/improvement-areas.html"

  ),*/
  template: await importTemplate(
    "/vue-testes/components/improvement-areas/improvement-areas.html"
  ),
  methods: {
    getChart() {
      //console.log(typeof Chart);
      console.log(Chart);
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        //Chart(ctx, {
        //plugins: [plugin],
        type: "radar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          /*scales: {
            y: {
              beginAtZero: true,
            },
          },*/
        },
      });
    },
  },

  mounted() {
    console.log("onMounted ok!");
    this.getChart();
  },
};
