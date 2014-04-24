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
    var $shares = $('#shares').val() * 1;
    var $div = $('<div>').addClass('indQuote');
    var $divTop = $('<div>').addClass('top').text('Shares: ' + $shares);
    var $divMiddle = $('<div>').addClass('middle').text('Price: $ ' + data.LastPrice);
    var $divBottom = $('<div>').addClass('bottom').text('Position: $ ' + ((data.LastPrice * 1) * $shares));
    $div.append($divTop);
    $div.append($divMiddle);
    $div.append($divBottom);
    $('#quote').append($div);
  }
})();
