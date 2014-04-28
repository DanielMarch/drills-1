/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  var value;

  function init(){
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/d61566ba7c8e6c69/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(wind){
        getWind(wind);
    });
  }

  function getWind(wind){
    value = wind.current_observation.wind_mph;
    makeDial();
  }

  function makeDial(){
        var gaugeChart = AmCharts.makeChart('chartdiv', {
        'type': 'gauge',
    	'theme': 'light',
        'axes': [{
            'axisThickness':1,
             'axisAlpha':0.2,
             'tickAlpha':0.2,
             'valueInterval':5,
            'bands': [{
                'color': '#84b761',
                'endValue': 30,
                'startValue': 0
            }, {
                'color': '#fdd400',
                'endValue': 60,
                'startValue': 30
            }, {
                'color': '#cc4748',
                'endValue': 100,
                'innerRadius': '95%',
                'startValue': 60
            }],
            'bottomText': '0 mp/h',
            'bottomTextYOffset': -20,
            'endValue': 100
        }],
        'arrows': [{}]
    });

    setInterval(randomValue, 2000);

     // set random value
    function randomValue() {
        gaugeChart.arrows[0].setValue(value);
        gaugeChart.axes[0].setBottomText(value + ' mp/h');
    }
  }
})();
