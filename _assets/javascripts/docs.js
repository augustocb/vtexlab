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
    var href = $.attr(this, 'href');
    $('html, body').animate({
      scrollTop: $( href ).parents('.api-block').offset().top
    }, 700, 'easeOutCirc', function(){
      document.location.hash = href;
    });

    e.preventDefault();
  });


  $(document).ready(function(){
    if (activeDoc) {
      var navList = $('.nav-doc-item'),
          topics = $('.slug-text'),
          topicArr = [];

      $('.api-block:not(:first)').css('minHeight', $(window).height());

      $(topics).each(function(){
        var _obj = {};

        _obj.id = $(this).attr('id');
        _obj.pos = $(this).offset().top;

        topicArr.push(_obj);
      });

      $(window).on('scroll', function(){
        for (var i = topicArr.length - 1; i >= 0; i--) {
          if ( $(window).scrollTop() > topicArr[i].pos - 70 ) {
            $('.topic-nav-link').removeClass('active-topic-nav');
            $('#sidebar-nav-' + topicArr[i].id).addClass('active-topic-nav');
            break;
          }
        }
      });

      for (var i = 0, len = navList.length; i < len; i++) {
        var $nav = $(navList[i]);
        if (activeDoc == $nav.data('doc')) {
          $nav.addClass('active-nav-doc');
          var $container = $nav.parents('li'),
              topicsNav = '<ul class="topics-nav">';
          for (var j = 0, _len = topics.length; j < _len; j++) {
            var $topic = $(topics[j]);
            topicsNav += '<li class="topic-nav"><a id="sidebar-nav-' + $topic.attr("id") + '" class="topic-nav-link" href="#' + $topic.attr("id") + '">' + $topic.text() + '</a></li>'
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