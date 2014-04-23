(function(){
  'use strict';

  $(document).ready(init);

  var clock;
  var timer;

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
  }

  function start(){
    clock = $('#display').text();
    timer = setInterval(updateClock, 1000);
  }

  function stop(){
    clearInterval(timer);
  }

  function updateClock(){
    clock++;
    $('#display').text(clock);
  }
})();
