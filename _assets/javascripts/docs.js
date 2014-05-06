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

  $(document).on('click', '.show-obj', function(e) {
    var parent = $(this).parents('tr');
    parent.next('.doc-api-table-child').fadeToggle(200);

    e.preventDefault();
  });


  $(document).on('click', '.topic-nav-link', function(e) {
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).parents('.api-block').offset().top
    }, 500);

    e.preventDefault();
  });


  $(document).ready(function(){
    if (activeDoc) {
      var navList = $('.nav-doc-item');
      for (var i = 0, len = navList.length; i < len; i++) {
        var $nav = $(navList[i]);
        if (activeDoc == $nav.data('doc')) {
          var $container = $nav.parents('li'),
              topics = $('.slug-text'),
              topicsNav = '<ul class="topics-nav">';
          for (var j = 0, _len = topics.length; j < _len; j++) {
            var $topic = $(topics[j]);
            topicsNav += '<li class="topic-nav"><a class="topic-nav-link" href="#' + $topic.attr("id") + '">' + $topic.text() + '</a></li>'
          };
          topicsNav += '</ul>';

          $container.append($(topicsNav));
          break;
        }
      }
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