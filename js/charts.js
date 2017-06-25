$(function () {
    var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
        ]
    };

    var option = {
    responsive: true,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("energy").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
});

$(function () {
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("fillers").getContext('2d');
var myBarChart = new Chart(ctx).Bar(data, option); //'Line' defines type of the chart.
})

$(function () {
  var data = [
      {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },
      {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      },
      {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
      }
  ]
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("fillers-used").getContext('2d');

var myPieChart = new Chart(ctx).Pie(data,option); //'Line' defines type of the chart.
})












    // var ctx = document.getElementById('energy').getContext('2d');
    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'line',
    //
    //     // The data for our dataset
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    //         datasets: [{
    //             label: "Energy",
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [0, 10, 5, 2, 20, 30, 45],
    //         }]
    //     },
    //
    //     // Configuration options go here
    //     options: {}
    // });
    //
    //
    // var ctx = document.getElementById('fillers').getContext('2d');
    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',
    //
    //     // The data for our dataset
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    //         datasets: [{
    //             label: "Use of Filler Words",
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [45, 30, 20, 7, 8, 9, 4],
    //         }]
    //     },
    //
    //     // Configuration options go here
    //     options: {}
    // });
    //
    //
    //
    // var ctx = document.getElementById('fillers-used').getContext('2d');
    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'pie',
    //
    //     // The data for our dataset
    //     data: {
    //         labels: ["Umm", "Uhh", "So", "Basically", "Like"],
    //         datasets: [{
    //             label: "Use of Filler Words",
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(60, 25, 4)',
    //             data: [ 35, 25, 10, 5, 25],
    //         }]
    //       },
    //
    //
    //     // Configuration options go here
    //     options: {}
    // });
