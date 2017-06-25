$(function () {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var dataArray1 = Array.apply(null, Array(30)).map(function(item, index){
        return getRandomInt(0,5);
    });
    // var dataArray = Array(200).fill(getRandomInt(5,100));
    var data1 = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(77, 214, 182, .3)",
            strokeColor: "rgba(77, 214, 182, 1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: dataArray1
        }
      ],
      labels: Array(dataArray1.length).fill('')
    };

    var option1 = {
      responsive: true,
      scaleShowLabels: false,
      showTooltips: false,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("chart-pace").getContext('2d');
    var myBarChart = new Chart(ctx).Bar(data1, option1);
    var dataArray2 = Array.apply(null, Array(30)).map(function(item, index){
        return getRandomInt(0,3);
    });
    // var dataArray = Array(200).fill(getRandomInt(5,100));
    var data2 = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(77, 214, 182, .3)",
            strokeColor: "rgba(77, 214, 182, 1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: dataArray2
        }
      ],
      labels: Array(dataArray2.length).fill('')
    };

    var option2 = {
      responsive: true,
      scaleShowLabels: false,
      showTooltips: false,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("chart-pace-2").getContext('2d');
    var myBarChart = new Chart(ctx).Bar(data2, option2);
});
