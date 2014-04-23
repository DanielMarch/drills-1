(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(makeArray);
  }

  function makeArray(){
    var input = $('#value').val().split(',');
    var nums = [];
    for(var i = 0; i < input.length; i++){
      nums.push(i+1);
    }
    createBox(input);
    return nums;
  }

  function createBox(input){
    for(var i = 0; i < input.length; i++){
      var $block = $('<div>').addClass('box');
      var fourthPow = Math.pow(input[i], 4);
      $block.text(fourthPow);
      $('.results').append($block);
    }
  }
})();
