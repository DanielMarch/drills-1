/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/d61566ba7c8e6c69/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var loop = conditions.forecast.simpleforecast.forecastday;
    for(var i = 0; i < loop.length; i++){
      var days = loop[i].date.weekday;
      var imgs = loop[i].icon_url;
      append(days, imgs);
    }
  }

  function append(days, imgs){
    var result = '<div class="imgs"><img src="'+imgs+'"></img><div class="days">'+days+'</div></div>';
    $('#chartdiv').append(result);
  }
})();
