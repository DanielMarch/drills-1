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
      if(input[i] % 2 === 1){
        var Cube = Math.pow(input[i], 3);
        $block.css('background-color','red');
        $block.text(Cube);
      }else{
        var Square = input[i] * input[i];
        $block.css('background-color','blue');
        $block.text(Square);
      }
      $('.results').append($block);
    }
  }
})();
