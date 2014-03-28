(function(window, document){

  // DISQUS
  (function() {
    var disqus_shortname = 'vtexlab';
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  // CACHE SELECTORS
  var $body = $('body'),
      $header = $('#header'),
      $headerBtn = $('#header-button'),
      activePost = $('.active-post');

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

  console.log(animEndEventName);
  // PRIVATE FUNCTIONS

  // Redimensiona o tamanho da navegação entre posts para mante-las com a mesma altura
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
    document.title = postToRenderTitle;

    $postToRender.scrollTop(0);
    $('.post').off('scroll');

    $currentPost.on( animEndEventName, function() {
      console.log('END ANIMAÇÃO1');
      $currentPost.off( animEndEventName );
      endCurrPage = true;
      if( endNextPage ) {
        onEndAnimation( $currentPost, $postToRender );
      }
    }).addClass('post-scaleDown');

    $postToRender.on( animEndEventName, function() {
      console.log('END ANIMAÇÃO2');
      $postToRender.off( animEndEventName );
      endNextPage = true;
      if( endCurrPage ) {
        onEndAnimation( $currentPost, $postToRender );
      }
    }).addClass('post-moveFromBottom post-ontop');

    scrollListener($postToRender);
    resizePostNavHeight();

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

    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = window.location.href;
        this.page.identifier = $postToRenderTitle;  
      }
    });

  }

  // Evento de click da navegação. Preveni comportamento padrão e faz transição entre posts
  // TODO - Carregar normalmente caso página não esteja no BODY ainda
  $body.on('click', '.post-next a, .post-prev a', function(e) {
    var urlPostId = $(this).data('post-id');
    var post = document.getElementById('post' + getIdbyJekyllId(urlPostId));
    renderPost($(post));

    e.preventDefault();
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

    resizePostNavHeight();
    scrollListener($defaultPost);
  });

  $(window).resize(function(){
    resizePostNavHeight();
  });

  function scrollListener(post) {
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