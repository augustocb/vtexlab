(function(window, document){

  console.log('DOCS');

  var $sidebar = $('#sidebar-docs-container'),
      $doc = $('#article-docs-container');

  $(window).load(function(){
    if ($sidebar.outerHeight() > $doc.outerHeight()) {
      $doc.height( $sidebar.outerHeight() );
    } else {
      $sidebar.height( $doc.outerHeight() );
    }
  });

}(window, document));