$('document').ready(function(){

    var $mainValue = $('nav').attr('data-main'),
        $subValue = $('nav').attr('data-sub');

    // 초기 로드 시 자동셋팅 영역
    loadActMenu($mainValue, $subValue);
    loadMenu($mainValue);

    var $nav = $('#gnb'),
        $navBtn = $('#gnb button'),
        $navBack = $('.gnb_back');

    var $actGnb = $('#actGnb'),
        $allGnb = $('#allGnb');

    $navBtn.on('click', function(){

      if($(this).hasClass('close')){

        $(this).removeClass('close');
        $(this).addClass('reopen');

        $nav.removeClass('on');
        $navBack.removeClass('on');

        $actGnb.addClass('on');
        $allGnb.removeClass('on');

      }else{
        if($(this).hasClass('open')){
            // 초기 로드
            $(this).removeClass('open');
        }else {
            // 재 오픈시
            $(this).removeClass('reopen');
        }
        $(this).addClass('close');

        $nav.addClass('on');
        $navBack.addClass('on');

        $actGnb.removeClass('on');
        $allGnb.addClass('on');
      }

      $allGnb.children('ul').children('li').removeClass('open');
      $allGnb.children('ul').children('li').eq($mainValue).addClass('open');
    });

    var mainMenu = $allGnb.find('.title');

    mainMenu.on("click", function(){

      mainMenu.parent('li').removeClass('open');
      $(this).parent('li').addClass('open');

    });
});

function loadActMenu(mainIndex, subIndex){

    var mainTitle = menuArr[mainIndex].main,
        mainHtml = '<li class="title">' + mainTitle + '</li>';

    $('nav').append('<div id="actGnb" class="on"><ul>' + mainHtml + '<li class="open"><ul></ul></li></ul></div>');

    var subLength = menuArr[mainIndex].sub.length;

    if( mainIndex === 2 ){

      var mainLink = menuArr[2].sub[0];

      $('nav #allGnb > ul > li').eq(i-1).after('<li><a href="'+ mainLink +'.html" class="title">' + mainTitle + '</a><ul></ul></li>');
    }

    for(i=0; i<subLength; i++){

        var subTitle = menuArr[mainIndex].sub[i];
        var subLink = linkArr[mainIndex].sub[i];

        if( i === 0 ) {
            $('nav #actGnb ul li.open ul').html('<li><a href="' + subLink + '.html">' + subTitle + '</a></li>');
        }else{
            $('nav #actGnb ul li.open ul li').eq(i-1).after('<li><a href="' + subLink + '.html">' + subTitle + '</a></li>');
        }

        $('nav #actGnb ul li.open ul').children('li').eq(subIndex).addClass('act');

    }
}

function loadMenu(mainIndex){

  var mainMenu = menuArr.length;

  $('nav').append('<div id="allGnb"><ul></ul></div>');

  for( i = 0; i < mainMenu; i++ ){
    var mainTitle = menuArr[i].main;

    if( i === 0 ) {
        $('nav #allGnb > ul').html('<li><a href="#!" class="title">' + mainTitle + '</a><ul></ul></li>');
    }else if( i === 2 ){

      var mainLink = linkArr[2].sub[0];

      $('nav #allGnb > ul > li').eq(i-1).after('<li><a href="'+ mainLink +'.html" class="title">' + mainTitle + '</a><ul></ul></li>');
    }else{
      
        $('nav #allGnb > ul > li').eq(i-1).after('<li><a href="#!" class="title">' + mainTitle + '</a><ul></ul></li>');
    }

    if( i < 2 ){
      var subLength = menuArr[i].sub.length;

      for( j=0; j<subLength; j++){

          var subTitle = menuArr[i].sub[j],
              subLink = linkArr[i].sub[j],
              subHtml = '<li><a href="' + subLink + '.html">' + subTitle + '</a></li>';

          if( j === 0 ) {
              $('nav #allGnb > ul > li').eq(i).children('ul').html(subHtml);
          }else{
              $('nav #allGnb > ul > li').eq(i).children('ul').find('li').eq(j-1).after(subHtml);
          }
      }
    }

  }

  $('nav #allGnb ul').children('li').eq(mainIndex).addClass('open');
  $('nav #allGnb ul').children('li:last-of-type').addClass('nonSub');
}

var menuArr = [
    {
        main : 'ABOUT',
        sub : ['Brand&History','Resume']
    },
    {
        main : 'PORTFOLIO',
        sub : ['In 2016','In 2017','In 2018']
    },
    {
        main : 'CONTACT',
        sub : ['']
    }
    // {
    //     main : 'sub03',
    //     sub : ['HTLM','CSS','Javascript/jQuery']
    // },
    // {
    //     main : 'sub04',
    //     sub : ['Header','Footer','Slide']
    // },
];

var linkArr = [
    {
        main : 'ABOUT',
        sub : ['branding','resume']
    },
    {
        main : 'PORTFOLIO',
        sub : ['portfolio_2016','portfolio_2017','portfolio_2018']
    },
    {
        main : 'CONTACT',
        sub : ['contact']
    }
];
