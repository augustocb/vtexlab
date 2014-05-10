var disqus_shortname = 'vtexlab',
    disqus_url, disqus_identifier;

(function(window, document){

  // CACHE SELECTORS
  var $body = $('body'),
      $header = $('#header'),
      $headerBtn = $('#header-button'),
      activePost = $('.post');

  // GLOBAL VARS
  var isAnimating = false,
      endCurrPage = false,
      endNextPage = false,
      animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
      },
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

  // DISQUS
  (function() {
    console.log(activePost.data());
    disqus_url = activePost.data('absUrl');
    disqus_identifier = activePost.data('absUrl');

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  // FB
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '734398799953187',
      xfbml      : true,
      version    : 'v2.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  // TWITTER

  !function(d,s,id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }}(document,"script","twitter-wjs");

  // PRIVATE FUNCTIONS

  // Redimensiona o tamanho da navegação entre posts para mante-las com a mesma altura
  function resizePostNavHeight (post) {
    var highHeight = 0,
        $postNav = post.find('.post-nav a');    
    
    $postNav.each(function(i) {
      if ($(this).outerHeight() > highHeight) {
        highHeight = $(this).outerHeight();
      }
    });
    if ($postNav.length == 1) {
      $postNav.parent('.post-nav').addClass('full-post-nav');
    };
    $('.post-pagination').outerHeight(highHeight);
    $postNav.outerHeight(highHeight);
  };

  // Carrega novos posts e insere no body
  function loadPosts (posts) {
    posts.forEach(function(postUrl, i){
      if ( !$('[data-url="' + postUrl + '"]').length ) {
        $.get(postUrl + '/', function(response){

          var $post = $(response).find('.post');
          $post.data('title', $(response).filter('title').text());

          updatePostId($post);

          $('#post-wrapper').append($post);
        });
      };
    });
  };

  // Retorna a lista de urls da navegação
  function getNavigationLinks (elem) {
    var urlList = [];
    elem.find('.post-nav a').each(function(){
      var $this = $(this);

      urlList.push($this.attr('href'));
    });

    return urlList;
  };

  // Atualiza ID único do post
  function updatePostId (post) {
    var jekyllId = post.data('jekyll-id'),
        id = 'post' + getIdbyJekyllId(jekyllId);

    return post.attr('id', id);
  };

  // Retorna ID com base no ID do Jekyll
  function getIdbyJekyllId (jekyllId) {
    var id = jekyllId.replace(/[^a-z0-9]/gi,'-');
    return id;
  };

  // Faz a transição entre Posts
  function renderPost (post) {
    
    if( isAnimating ) {
      return false;
    }

    isAnimating = true;

    var $currentPost = $('.post-active'),
        $postToRender = post,
        postToRenderURL = $postToRender.data('url') + '/',
        postToRenderTitle = $postToRender.data('title');

    // Inicia o carregamento dos próximos posts. Sim, somos apressadinhos
    loadPosts( getNavigationLinks($postToRender) );

    // Atualiza titulo do site e URL
    window.history.pushState({}, postToRenderTitle, postToRenderURL);
    window.onpopstate = function(event) {    
      if(event && event.state) {
        location.reload(); 
      }
    }
    document.title = postToRenderTitle;

    $postToRender.scrollTop(0);
    $('.post').off('scroll');

    $currentPost.on( animEndEventName, function() {
      $currentPost.off( animEndEventName );
      endCurrPage = true;
      if( endNextPage ) {
        onEndAnimation( $currentPost, $postToRender );
      }
    }).addClass('post-scaleDown');

    $postToRender.on( animEndEventName, function() {
      $postToRender.off( animEndEventName );
      endNextPage = true;
      if( endCurrPage ) {
        onEndAnimation( $currentPost, $postToRender );
      }
    }).addClass('post-moveFromBottom post-ontop');

    scrollListener($postToRender);
    resizePostNavHeight($postToRender);

    return $postToRender;
  };

  function onEndAnimation( $outpage, $inpage ) {
    endCurrPage = false;
    endNextPage = false;
    resetPage( $outpage, $inpage );
    isAnimating = false;
  }

  function resetPage( $outpage, $inpage ) {
    $outpage.removeClass('post-scaleDown post-active');
    $inpage.removeClass('post-moveFromBottom post-ontop').addClass('post-active');
    
    // Reseta o disqus para carregar novos comentários
    $outpage.find('#disqus_thread').remove();
    $inpage.find('#post-comments').append('<div id="disqus_thread">');
    

    // RESET FB LIKE BTN
    if (FB && FB.XFBML) {
      FB.XFBML.parse();
    }

    // RESET TWITTER
    if (twttr && twttr.widgets) {
      twttr.widgets.load();
    }

    // RESET DISQUS
    if (DISQUS) {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.shortname = "vtexlab";
          this.page.url = $inpage.data('absUrl');
          this.page.identifier = $inpage.data('absUrl');
          this.page.title = $inpage.data('title');
        }
      });
    }

  }

  // Evento de click da navegação. Preveni comportamento padrão e faz transição entre posts
  $body.on('click', '.post-next a, .post-prev a', function(e) {
    var urlPostId = $(this).data('post-id');
    var post = document.getElementById('post' + getIdbyJekyllId(urlPostId));
    if (post) {
      renderPost($(post));
      e.preventDefault();
    }
  });

  // HEADER
  $headerBtn.on('click', function(){
    $header.removeClass('hide-header');
    $headerBtn.removeClass('header-button-active');
  });

  $(document).ready(function(){
    $defaultPost = $('.post');
    $defaultPost.addClass('post-active');
    $defaultPost.find('#post-comments').append('<div id="disqus_thread">');

    updatePostId($defaultPost);
    loadPosts( getNavigationLinks($defaultPost) );

    resizePostNavHeight($defaultPost);
    scrollListener($defaultPost);
  });

  $(window).on('mousemove', function(e){
    if (e.pageY < 40) {
      $header.removeClass('hide-header');
      $headerBtn.removeClass('header-button-active');
    };
  });

  $(window).resize(function(){
    resizePostNavHeight($('.post-active'));
  });

  function scrollListener(post) {
    var lastScrollPost = 0;
    post.on('scroll', function(e){
      var scrollPos = post.scrollTop();
      if (scrollPos > 66) {
        if (scrollPos < (lastScrollPost)) {
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