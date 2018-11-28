$(function() {
  "use strict";

  var chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(231,233,237)"
  };
  var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var DAYS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];

  typeof Chart != "undefined" &&
    ((function() {
      var randomScalingFactor = function() {
        return (
          (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100)
        );
      };

      var config = {
        type: "line",
        data: {
          labels: DAYS,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: chartColors.red,
              borderColor: chartColors.red,
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ],
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Nombre Utilisateur Actif Par Jour"
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Jour"
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value"
                }
              }
            ]
          }
        }
      };

      var ctx = document.getElementById("actif_user_jour").getContext("2d");
      var myLine = new Chart(ctx, config);

      var colorNames = Object.keys(chartColors);
    })(),
    (function() {
      var randomScalingFactor = function() {
        return (
          (Math.random() > 0.5 ? 1.0 : 2.0) * Math.round(Math.random() * 100)
        );
      };

      var color = Chart.helpers.color;
      var barChartData = {
        labels: MONTHS,
        datasets: [
          {
            label: "Nombre Utilsateur Actif Par Mois",
            backgroundColor: color(chartColors.red)
              .alpha(0.5)
              .rgbString(),
            borderColor: chartColors.red,
            borderWidth: 1,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ]
          }
        ]
      };

      var ctx = document.getElementById("actif_user_mois").getContext("2d");
      window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: {
          responsive: true,
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Nombre Utilisateur Actif Par Mois"
          }
        }
      });
    })(),
    (function() {
      var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
      };

      var config = {
        type: "pie",
        data: {
          datasets: [
            {
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ],
              backgroundColor: [
                chartColors.red,
                chartColors.orange,
                chartColors.yellow,
                chartColors.green,
                chartColors.blue
              ],
              label: "Simple Test"
            }
          ],
          labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
        },
        options: {
          responsive: true
        }
      };

      var ctx = document.getElementById("chartjs-pie").getContext("2d");
      new Chart(ctx, config);
    })());
});
