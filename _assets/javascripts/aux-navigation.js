(function(window, document){
  $('#footer-logo').on('click', function(e){
    $("html, body").animate({ 
      scrollTop: 0
    }, 700, 'easeOutCirc');

    e.preventDefault();
  });
}(window, document));