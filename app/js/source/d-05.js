(function()
{
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button').click(square);
  }

  function makeArray(start, end){
    start *= 1;
    end *= 1;
    var array = [];
    for(var i = start; i <= end; ++i){
      array.push(i);
    }
    return array;
  }

  function square(){
    var input = $('#value').val().split(',');
    var numbers = makeArray(input[0], input[1]);
    var sort = numbers.map(squareNum).filter(even);
    sort.forEach(function(number){
      var $block = $('<div>').addClass('box');
      $block.text(number);
      $('.results').append($block);
    });
  }

  function squareNum(number){
    return number * number;
  }

  function even(number){
   return number && (number % 2 === 0);
  }
})();
