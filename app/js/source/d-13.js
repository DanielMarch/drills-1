(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(makeArray);
  }

  function makeArray(){
    var input = $('#value').val().split('-');
    oddAdd(input);
    oddSum(input);
  }

  function oddAdd(input){
    var add = input[0].split('+').filter(odd);
    addNum(add);
  }

  function oddSum(input){
    var sum = input[1].split('*').filter(odd);
    sumNum(sum);
  }

  function odd(num){
    return num % 2 ===1;
  }

  function addNum(x){
    var $block = $('<div>').addClass('box');
    var y = 0;
    for(var i = 0; i < x.length; i++){
      y = (x[i]*1) + y;
    }
    $block.text(y);
    $('.sum').append($block);
  }

  function sumNum(x){
    var $block = $('<div>').addClass('box');
    var y = 1;
    for(var i = 0; i < x.length; i++){
      y = (x[i]*1) * y;
    }
    $block.text(y);
    $('.pro').append($block);
  }
})();
