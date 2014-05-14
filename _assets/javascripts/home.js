// Array.prototype.shuffle = function() {
//   var i = this.length, j, temp;
//   if ( i == 0 ) return this;
//   while ( --i ) {
//      j = Math.floor( Math.random() * ( i + 1 ) );
//      temp = this[i];
//      this[i] = this[j];
//      this[j] = temp;
//   }
//   return this;
// }

// var users = [
//   {
//     "name" : "Leandro Oriente",
//     "gravatar" : "6af7a326c14b57b9c486bc4e4dec63d1",
//     "job" : "Desenvolvedor"
//   },
//   {
//     "name" : "Rodrigo Muniz",
//     "gravatar" : "be9f1ffae553d1773a688904265e8551",
//     "job" : "Designer"
//   },
//   {
//     "name" : "Alex Tercete",
//     "gravatar" : "0a924b019abc814105713298e8cd507c",
//     "job" : "Desenvolvedor"
//   }
// ];

// var typeUsers = function(user) {
//   $(".title-card").typed({
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30,
//     backDelay: 500, 
//     callback: function(){
//       console.log('DONE');
//     }
//   });
// };

$(document).ready(function(){

  var $terminal = $('#terminal');

  $(document).on('scroll', function(e){
    if ( (($terminal.position().top) - 300) < $(window).scrollTop() ) {
      $('#terminal-empty').addClass('terminal-empty terminal-blur'); 
      $('#terminal-focus').addClass('terminal-focus'); 
    };
  });

  // var _users = users.shuffle();

  // var startUserType = window.setTimeout(typeUsers, 2000, [_users]);
  
  $('#know-portal').on('click', function(e) {
    console.log('ERROS');
    var pos = $('#start-content').position().top;
    
    $("html, body").animate({ 
      scrollTop: pos
    }, 700, 'easeOutCirc');

    e.preventDefault();
  });
});