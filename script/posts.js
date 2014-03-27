(function(window, document){

  (function() {
    var disqus_shortname = 'vtexlab';
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  var $body = $('body'),
      $header = $('#header'),
      $headerBtn = $('#header-button'),
      activePost = $('.active-post');

  function resizePostNavHeight () {
    var highHeight = 0,
        $postNav = $('.post-nav a');    
    
    $postNav.each(function(i) {
      if ($(this).outerHeight() > highHeight) {
        highHeight = $(this).outerHeight();
      }
    });
    $('.post-pagination').outerHeight(highHeight);
    $postNav.outerHeight(highHeight);
  };

  function loadPosts (posts) {
    posts.forEach(function(postUrl, i){
      if ( !$('[data-url="' + postUrl + '"]').length ) {
        $.get(postUrl + '/', function(response){

          var $post = $(response).find('.post-apended');
          $post.data('title', $(response).filter('title').text());

          updatePostId($post);

          $('#post-wrapper').append($post);
        });
      };
    });
  };

  function getNavigationLinks (elem) {
    var urlList = [];
    elem.find('.post-nav a').each(function(){
      var $this = $(this);

      urlList.push($this.attr('href'));
    });

    return urlList;
  };

  function updatePostId (post) {
    var jekyllId = post.data('jekyll-id'),
        id = 'post' + getIdbyJekyllId(jekyllId);

    return post.attr('id', id);
  };

  function getIdbyJekyllId (jekyllId) {
    var id = jekyllId.replace(/[^a-z0-9]/gi,'-');
    return id;
  };

  function renderPost (post) {
    var $currentPost = $('.post-active'),
        $postToRender = post,
        $postToRenderURL = $postToRender.data('url') + '/',
        $postToRenderTitle = $postToRender.data('title');

    $currentPost.find('#disqus_thread').remove();
    $postToRender.find('#post-comments').append('<div id="disqus_thread">');

    loadPosts( getNavigationLinks($postToRender) );

    window.history.pushState({}, $postToRenderTitle, $postToRenderURL);
    document.title = $postToRenderTitle;

    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = window.location.href;
        this.page.identifier = $postToRenderTitle;  
      }
    });

    $currentPost.removeClass('post-active');
    $postToRender.addClass('post-active');

    $postToRender.scrollTop(0);
    scrollListener($postToRender);
    resizePostNavHeight();

    return $postToRender;
  };

  $body.on('click', '.post-next a, .post-prev a', function(e) {
    var urlPostId = $(this).data('post-id');
    var post = document.getElementById('post' + getIdbyJekyllId(urlPostId));
    renderPost($(post));
    e.preventDefault();
  });

  $headerBtn.on('click', function(){
    $header.removeClass('hide-header');
    $headerBtn.removeClass('header-button-active');
  });

  $(document).ready(function(){
    $defaultPost = $('.post-apended');
    $defaultPost.addClass('post-active');
    $defaultPost.find('#post-comments').append('<div id="disqus_thread">');

    updatePostId($defaultPost);
    loadPosts( getNavigationLinks($defaultPost) );

    resizePostNavHeight();
    scrollListener($defaultPost);
  });

  $(window).resize(function(){
    resizePostNavHeight();
  });

  function scrollListener(post) {
    console.log('SCROLL LISTENER');
    var lastScrollPost = 0;
    post.on('scroll', function(e){
      var scrollPos = post.scrollTop();
      if (scrollPos > 66) {
        if (scrollPos < (lastScrollPost - 50)) {
          $header.removeClass('hide-header');
          $headerBtn.removeClass('header-button-active');
        } else {
          $header.addClass('hide-header');
          $headerBtn.addClass('header-button-active');
        }
      }

      lastScrollPost = scrollPos;
    });
  };

}(window, document));