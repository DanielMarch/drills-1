(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
    createBox(data);
    });
  }

  function createBox(data){
    var $div = $('<div>').addClass('indQuote');
    var $divTop = $('<div>').addClass('top').text(data.Symbol);
    var $divMiddle = $('<div>').addClass('middle').text(data.Name);
    var $divBottom = $('<div>').addClass('bottom').text('$' + data.LastPrice);
    $div.append($divTop);
    $div.append($divMiddle);
    $div.append($divBottom);
    $('#quote').append($div);
  }
})();
