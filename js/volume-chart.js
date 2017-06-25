$(function () {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var dataArray = Array.apply(null, Array(200)).map(function(item, index){
        return getRandomInt(5,100);
    });
    // var dataArray = Array(200).fill(getRandomInt(5,100));
    var data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(77, 214, 182, .3)",
            strokeColor: "rgba(77, 214, 182, 1)",
            pointColor: "rgba(77, 214, 182, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: dataArray
        }
      ],
      labels: Array(dataArray.length).fill('')
    };

    var option = {
      responsive: true,
      scaleShowLabels: false,
      showTooltips: false,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("chart-volume").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
});
