(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(makeArray);
  }

  function makeArray(){
    var input = $('#value').val().split(',');
    var words = [];
    for(var i = 0; i < input.length; i++){
      words.push(i+1);
    }
    createBox(input);
    return words;
  }

  function createBox(input){
    for(var i = 0; i < input.length; i++){
      var $block = $('<div>').addClass('box');
      if(input[i].length % 2 === 0){
        var lowerCase = input[i].toLowerCase();
        $block.css('background-color','green');
        $block.text(lowerCase);
      }else{
        var upperCase = input[i].toUpperCase();
        $block.css('background-color','red');
        $block.text(upperCase);
      }
      $('.results').append($block);
    }
  }
})();
