(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(){
    var x = $('#value1').val() * 1;
    var y = $('#value2').val() * 1;
    var z = x + y;
    $('#sum').text(z);
  }
})();
