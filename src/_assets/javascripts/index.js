(function(window, document){

  console.log('READY');
  var $security = $('#security-detail'),
      $vtexid = $('#vtexid-detail');

  $(document).on('scroll', function(e){
    console.log($security.position().top);

    if ( ($security.position().top - 250) < $(window).scrollTop() ) {
      $('.key').addClass('key-animation');
      $('.lock-open').addClass('lock-fadeIn');
    };

    if ( ($vtexid.position().top - 500) < $(window).scrollTop() ) {
      $('.galaxy-display').addClass('show-galaxy');
      $('.digital').addClass('active');
      $('.digital-stars').addClass('active');
    }
  });

}(window, document));