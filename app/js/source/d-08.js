(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#toggle').click(toggle);
  }

  function toggle(){
    $('#toggle').toggleClass('green');
  }
})();
