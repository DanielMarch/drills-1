(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(makeArray1);
  }

  function makeArray1(){
    var symbol = $('#symbol').val().trim().toUpperCase().split(',');
    extractArray(symbol);
  }

  function extractArray(symbol){
    var x;
    var array = [];
    for(var i = 0; i < symbol.length; i++){
      x = (symbol[i]);
      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+x+'&callback=?';
      $.getJSON(url, function(data){
          array.push(data.LastPrice);
          if(array.length === symbol.length){
            var $block = $('<div>').addClass('box');
            var j = 0;
            for(var i = 0; i < array.length; i++){
              j = (array[i]*1) + j;
            }
            $block.text('$'+j);
            $('#quote').append($block);
          }
      });
    }
  }
})();
