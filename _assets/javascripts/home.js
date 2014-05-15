$(document).ready(function(){

  var $terminal = $('#terminal'),
      $community = $('#community');

  var qeaAnimateStarted = false;

  var animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
      },
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

  var qea = [
    {
      'question' : 'Qual a melhor plataforma de e-commerce do mundo?',
      'status' : false,
      'answer' : {
        'name' : 'Leandro Oriente',
        'role' : 'Desenvolvedor',
        'picture' :  'http://gravatar.com/avatar/6af7a326c14b57b9c486bc4e4dec63d1?d=identicon',
        'response' : 'Existem outras?'
      }
    },
    {
      'question' : 'Qual o sentido da vida?',
      'status' : false,
      'answer' : {
        'name' : 'Guilherme Rodrigues',
        'role' : 'Desenvolvedor e blogueiro',
        'picture' :  'http://gravatar.com/avatar/74cefebbca01465c41d22dd1468451d1?d=identicon',
        'response' : '42'
      }
    },
    {
      'question' : 'What does the fox say?',
      'status' : false,
      'answer' : {
        'name' : 'The Fox',
        'role' : 'youtube superstar',
        'picture' :  '/images/the-fox.jpg',
        'response' : 'wa-pa-pa-pa-pa-pa-pa-pa-pa-pow'
      }
    }
  ];

  function getLastActiveQuestion() {
    var active = null;

    for (var i = 0, len = qea.length; i < len; i++) {
      if (qea[i].status) {
        if (qea[i + 1]) {
          qea[i + 1].status = true;
          active = qea[i + 1];          
        } else {
          qea[0].status = true;
          active = qea[0];
        }

        qea[i].status = false;
        break;
      }
    };

    if (active) {
      return active;
    } else {
      qea[0].status = true;
      return qea[0]
    }
  };

  function updateQuestion (item) {
    $('#question-text').text(item.question);
    $('#answer-text').text(item.answer.response);
    $('#answer-name').text(item.answer.name);
    $('#answer-role').text(item.answer.role);
    $('#answer-img').attr('src', item.answer.picture);
  };

  function animateQuestion () {
    qeaAnimateStarted = true;
    $community.addClass('come');
    setTimeout(function(){
      $community.addClass('go-away');
      setTimeout(function(){
        updateQuestion(getLastActiveQuestion());
        $community.removeClass('go-away come');
        setTimeout(function(){
          animateQuestion();
        }, 20);
      }, 800);
    }, 7500);
  };

  updateQuestion(getLastActiveQuestion());

  $(document).on('scroll', function(e){
    if ($(window).width() > 992) {
      if ( (($terminal.position().top) - 300) < $(window).scrollTop() ) {
        $('#terminal-empty').addClass('terminal-empty terminal-blur'); 
        $('#terminal-focus').addClass('terminal-focus'); 
      };

      if ( (($community.position().top) - 300) < $(window).scrollTop() ) {
        if (!qeaAnimateStarted) {
          animateQuestion();
        }
      };
    }
  });
});