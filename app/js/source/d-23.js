/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/d61566ba7c8e6c69/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(temperature){
        console.log(temperature);
        addTempToChart(temperature);
    });
  }

  function addTempToChart(temperature){
    var temp = {};
    temp.degree = temperature.current_observation.temperature_string.slice(0,4);
    temp.zip = temperature.current_observation.display_location.zip;
    chart.dataProvider.push(temp);
    chart.validateData();
  }

  var chart;

  function makeChart(){
    chart = AmCharts.makeChart('weatherchart', {
        'type': 'serial',
        'theme': 'none',
        'dataProvider': [],
        'valueAxes': [{
            'gridColor':'#FFFFFF',
    		'gridAlpha': 0.2,
    		'dashLength': 0
        }],
        'gridAboveGraphs': true,
        'startDuration': 1,
        'graphs': [{
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 0.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'degree'
        }],
        'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
        },
        'categoryField': 'zip',
        'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0
        },
    	'exportConfig':{
    	  'menuTop': 0,
    	  'menuItems': [{
          'icon': '/lib/3/images/export.png',
          'format': 'png'
          }]
    	}
    });
  }
})();
