(function(window, document){
  var isLoading = false,
      fullLoad = false;
      page = 1;

  var checkScrollPos = function (){
    var pageHeight = document.body.clientHeight;

    window.onscroll = function (event) {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

      if (pageHeight - top < 1500) {
        if (!isLoading && !fullLoad) {
          loadPosts();      
        }
      }
    }
  };

  var loadPosts = function(){
    isLoading = true;

    if (page < TOTAL_PAGES) {
      $.get("/blog/page" + ++page + "/", function(response){
        var $posts = $($(response).find('#posts'));
        $('#more-posts').append(groupReleaseNotes($posts))

        isLoading = false;
        if (page >= TOTAL_PAGES) {
          fullLoad = true;
        }
      })
    }
  };

  var groupReleaseNotes = function(list) {
    var posts = $(list).find('.post-container');
    for (var i = 0, len = posts.lenght; i < len; i++) {
      var post = posts[i];
      // console.log(post);
    }
    return posts;
  };

  $(document).ready(function(){
    groupReleaseNotes($('#posts'));
  });

  $('#footer-logo').on('click', function(e){
    $("html, body").animate({ 
      scrollTop: 0
    }, 700, 'easeOutCirc');

    e.preventDefault();
  })

  window.onload = checkScrollPos();
}(window, document));