(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(makeArray);
  }

  function makeArray(){
    var input = $('#value').val().split(',');
    createBox(input);
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
