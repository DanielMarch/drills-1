(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button').click(createBox);
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

  function createBox(){
    var input = $('#value').val().split(',');
    var numbers = makeArray(input[0], input[1]);
    var last3 = numbers.filter(lastThree, numbers);

    last3.forEach(function(number){
      var $block = $('<div>').addClass('box');
      $block.text(number);
      $('.results').append($block);
    });
  }

  function lastThree(number, index){
    return (this.length - 1 - index) < 3;
  }
})();
