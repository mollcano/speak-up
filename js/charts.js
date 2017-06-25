
  var fireRefreshEventOnWindow = function () {
     var evt = document.createEvent("HTMLEvents");
     evt.initEvent('resize', true, false);
     window.dispatchEvent(evt);
 };

 $(".nav-link").click(function(){
   console.log("hit");
   setTimeout(fireRefreshEventOnWindow, 150)
 })


$(function () {
    var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Goal",
            fillColor: "rgba(35,206,107,0.2)",
            strokeColor: "rgba(35,206,107,1)",
            pointColor: "rgba(35,206,107,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [25, 25, 50, 50, 50, 50, 80]
        },
        {
            label: "Actual",
            fillColor: "rgba(67,58,63,0.2)",
            strokeColor: "rgba(77,224,182,1)",
            pointColor: "rgba(77,224,182,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [6, 25, 30, 36, 40, 50, 60]
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
            label: "Goal",
            fillColor: "rgba(77,214,182,0.5)",
            strokeColor: "rgba(77,214,1820.8)",
            highlightFill: "rgba(77,214,182,0.5)",
            highlightStroke: "rgba(77,214,1820.8)",
            data: [50, 50, 50, 30, 30, 10, 10]
        },
        {
            label: "Actual",
            fillColor: "rgba(67,58,63,0.75)",
            strokeColor: "rgba(67,58,63,205,1)",
            highlightFill: "rgba(67,58,63,0.75)",
            highlightStroke: "rgba(67,58,63,205,1)",
            data: [80, 60, 50, 40, 32, 20, 17]
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
          value: 100,
          color:"rgba(77,214,182,1)",
          highlight: "rgba(77,214,182,.5)",
          label: "5"
      },
      {
          value: 75,
          color: "rgba(35,206,107,1)",
          highlight: "rgba(35,206,107,1)",
          label: "4"
      },
      {
          value: 47,
          color: "#F9D1D1",
          highlight: "#FAFAFA",
          label: "3"
      },
      {
          value: 15,
          color: "rgba(77,224,182,1)",
          highlight: "rgba(77,224,182,.5)",
          label: "7"
      },
      {
          value: 30,
          color: "rgba(67,58,63,1)",
          highlight: "rgba(67,58,63,1)",
          label: "8"
      }
  ]
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("aa").getContext('2d');

var myPieChart = new Chart(ctx).Pie(data,option); //'Line' defines type of the chart.
})

$(function () {
    var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Goal",
            fillColor: "rgba(35,206,107,0.2)",
            strokeColor: "rgba(35,206,107,1)",
            pointColor: "rgba(35,206,107,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [25, 25, 50, 50, 50, 50, 80]
        },
        {
            label: "Actual",
            fillColor: "rgba(67,58,63,0.2)",
            strokeColor: "rgba(77,224,182,1)",
            pointColor: "rgba(77,224,182,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [6, 25, 30, 36, 40, 50, 60]
        }
        ]
    };

    var option = {
    responsive: true,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("energy2").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
});

$(function () {
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Goal",
            fillColor: "rgba(77,214,182,0.5)",
            strokeColor: "rgba(77,214,1820.8)",
            highlightFill: "rgba(77,214,182,0.5)",
            highlightStroke: "rgba(77,214,1820.8)",
            data: [50, 50, 50, 30, 30, 10, 10]
        },
        {
            label: "Actual",
            fillColor: "rgba(135,206,107,0.5)",
            strokeColor: "rgba(135,206,107,0.8)",
            highlightFill: "rgba(135,206,107,0.5)",
            highlightStroke: "rgba(135,206,107,0.8)",
            data: [80, 60, 50, 40, 32, 20, 17]
        }
    ]
};
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("fillers2").getContext('2d');
var myBarChart = new Chart(ctx).Bar(data, option); //'Line' defines type of the chart.
})

$(function () {
  var data = [
      {
          value: 100,
          color:"#23CD6B",
          highlight: "#FF5A5E",
          label: "5"
      },
      {
          value: 75,
          color: "#4DD6B6",
          highlight: "#5AD3D1",
          label: "4"
      },
      {
          value: 47,
          color: "#F9D1D1",
          highlight: "#FFC870",
          label: "3"
      },
      {
          value: 15,
          color: "#433A3F",
          highlight: "#800000",
          label: "7"
      },
      {
          value: 30,
          color: "#4DE0FF",
          highlight: "#FF5733",
          label: "8"
      }
  ]
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("aa2").getContext('2d');

var myPieChart = new Chart(ctx).Pie(data,option); //'Line' defines type of the chart.
})




$(function () {
    var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Words Per Minute",
            fillColor: "rgba(77,217,182,0.2)",
            strokeColor: "rgba(77,217,182,1)",
            pointColor: "rgba(67,58,63,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 60]
        }

        ]
    };

    var option = {
    responsive: true,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("wpm").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
});

$(function () {
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Number of Pauses",
            fillColor: "rgba(35,206,107,0.5)",
            strokeColor: "rgba(35,206,107,0.8)",
            highlightFill: "rgba(35,206,107,0.75)",
            highlightStroke: "rgba(35,206,107,1)",
            data: [3, 4, 8, 9, 4, 8, 13]
        },

    ]
};
var option = {
responsive: true,
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("pauses").getContext('2d');
var myBarChart = new Chart(ctx).Bar(data, option); //'Line' defines type of the chart.
})

$(function () {
  var data = [
      {
          value: 80,
          color:"rgba(35,206,107,1)",
          highlight: "rgba(35,206,107,.5)",
          label: "Um"
      },
      {
          value: 90,
          color: "rgba(77,217,182,1)",
          highlight: "rgba(77,217,182,.5)",
          label: "Uh"
      },
      {
          value: 78,
          color: "rgba(77,224,25,1)",
          highlight: "rgba(77,224,25,.5)",
          label: "So"
      },
      {
          value: 18,
          color: "rgba(67,58,63,1)",
          highlight: "rgba(67,58,63,.5)",
          label: "Basically"
      },
      {
          value: 45,
          color: "#F9D1D1",
          highlight: "#FAFAFA",
          label: "Like"
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
