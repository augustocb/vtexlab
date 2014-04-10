(function(window, document){

  console.log('DOCS');

  var $sidebar = $('#sidebar-docs-container'),
      $doc = $('#article-docs-container');

  var headerHeight = $('#header').outerHeight();

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > headerHeight) {
      $('#sidebar-docs-container').addClass('fixed-sidebar');
    } else {
      $('#sidebar-docs-container').removeClass('fixed-sidebar');
    }
  });
  // $(window).load(function(){
  //   if ($sidebar.outerHeight() > $doc.outerHeight()) {
  //     $doc.height( $sidebar.outerHeight() );
  //   } else {
  //     $sidebar.height( $doc.outerHeight() );
  //   }
  // });

}(window, document));