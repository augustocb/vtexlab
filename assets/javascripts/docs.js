(function(window, document){

  var $sidebar = $('#sidebar-docs-container'),
      $doc = $('#article-docs-container');

  var headerHeight = $('#header').outerHeight();

  var $resizeContent = function() {
    var $sidebarw = ($(window).width() - $('#header-container').width()) / 2;
    $sidebar.width($sidebarw);
    $doc.width($(window).width() - $sidebar.width());
  }

  $resizeContent();
  $(window).on('resize', function(){
    $resizeContent();
  });

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > headerHeight) {
      $sidebar.addClass('fixed-sidebar');
    } else {
      $sidebar.removeClass('fixed-sidebar');
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