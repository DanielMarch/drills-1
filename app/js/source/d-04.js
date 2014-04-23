(function()
{
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button').click(exponent);
  }

  function exponent(){
    var input = $('#value').val().split('-');
    var values = [];
    for(var j = 0; j < input.length; ++j){
      values[j] = input[j].split(',');
    }
    values[0].forEach(function(num, index){
      num *= 1;
      var exp = values[1][index]*1;
        var result = 1;
      for(var i = 0; i < exp; ++i){
        result *= num;
      }
      var $divTop = $('<div>').addClass('top');
      var $divBottom = $('<div>').addClass('bottom');
      var $div = $('<div>');
      var topText = num;
      var $topSup = $('<sup>').text(exp);
      $divTop.text(topText);
      $divTop.append($topSup);
      $divBottom.text(result);
      $div.append($divTop);
      $div.append($divBottom);
      $('.results').append($div);
    });
  }
})();
