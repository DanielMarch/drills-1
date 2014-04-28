/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  var number;
  var chart;

  function init(){
    $('#get').click(get);
    makeDonut();
  }

  function get(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    number = $('#number').val();
    $.getJSON(url, function(quote){quoteProduct(quote);});
  }

  function quoteProduct(quote){
    var stock = {};
    stock.ticker = quote.Symbol;
    stock.price = quote.LastPrice * number;
    chart.dataProvider.push(stock);
    chart.validateData();
  }

  function makeDonut(){
        chart = AmCharts.makeChart('chartdiv', {
        'type': 'pie',
    	'theme': 'chalk',
        'titles': [{
            'text': 'Portfolio Value Breakdown',
            'size': 16
        }],
        'dataProvider': [],
        'valueField': 'price',
        'titleField': 'ticker',
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	}
    });
  }
})();
