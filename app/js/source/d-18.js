(function(){
  'use strict';

  $(document).ready(initialize);

  var timer;
  var ticker = [];

  function initialize(){
    $('#get').click(resetTicker);
  }

  function resetTicker(){
    clearInterval(timer);
    var $tableCell = $('#quote tbody');
    $tableCell.children('tr').remove();
    ticker = $('#symbol').val().split(',').map(function(symbol){
      return symbol.toUpperCase().replace(' ','');
    });
    updateTable();
    timer = setInterval(updateTable, 1000);
  }

  function updateTable(){
    ticker.forEach(function(symbol){
      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
      $.getJSON(url, printPrice);
    });

    function printPrice(data){
      var symbol = data.Symbol;
      var price = data.LastPrice;
      var $row = $('#quote tbody tr:has(td:contains('+symbol+'))');
      if($row.length === 0){
        $row = $('<tr>');
        for(var i = 0; i < 2;++i){
          $row.append($('<td>'));
        }
        $('#quote tbody').append($row);
      }
      $row.children('td:first-child').text(symbol);
      $row.children('td:last-child').text('$'+price.toFixed(2));
    }
  }
})();
