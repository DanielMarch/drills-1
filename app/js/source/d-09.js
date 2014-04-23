(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#random').click(randomColor);
  }

  function randomColor(){
    var randomC = 'rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*(10+1))/10.0+')';
    document.getElementById('random').style.backgroundColor = randomC;
  }
})();
