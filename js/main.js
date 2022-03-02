$(document).ready(function() {
    $(".myTabs").each(function() {
    
        var $myTabs = $(this);
    //0512修改START
        $myTabs.find(".tab_content").hide().last().show();
    //0512vu修改END
        $myTabs.find("ul.tabs li:first").addClass("active").show();
    
        $myTabs.find("ul.tabs li").click(function() {
            var $this = $(this);
    
            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".tab_content").hide();
    
            var activeTab = $this.find("a").attr("href");
            $(".part").siblings().removeClass("let_part_active");
            $(activeTab).fadeIn();
            $(activeTab).children(".part").addClass("let_part_active");

            return false;
        });
    });
});
$( "h2" ).click(function() {
    $('.tabsBTN_active').addClass('tabsBTN');
    $('.tabsBTN_active').removeClass('tabsBTN_active');
    $(this).parent().removeClass('tabsBTN');
    $(this).parent().addClass('tabsBTN_active');
    });
$(".sign_block button").click(function(){
    $(".sign_block p").fadeIn(200);
    $(".sign_block button").text("登出");
});
//pop//
$(".popclose").click(function() {
    $('.popup').fadeOut(200);
});
$(".leftBTN_pop").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
//scrollspy//
$(function() {
    var link = $('.scrollspy_item');
  //   upper label id
    var id =  $(this).attr('id');
    // Move to specific section when click on menu link
    link.on('click', function(e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
  //     upper label remove class
  $(this).addClass('active');
  $(this).children(".scrollspy_p").addClass('p_active');
  e.preventDefault();
    });
    // Run the scrNav when scroll
    $(window).on('scroll', function(){
      scrNav();
    });
    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('.let_part_active').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top-10,
            height = $(this).height();
        if(sTop >= offset && sTop < offset + height) {
            $(".scrollspy_item").removeClass("active");
            $(".scrollspy_p").removeClass("p_active");
            $('.scrollspy_box').find('[data-scroll="' + id + '"]').addClass('active');
            $('.scrollspy_box').find('[data-scroll="' + id + '"]').children(".scrollspy_p").addClass('p_active');
        }
        $( ".part_tab" ).click(function() {
                $(".active").removeClass("active");
                $(".p_active").removeClass("p_active");
                $(".fristevent").addClass("active");
                $(".fristevent p").addClass("p_active");
              });
      });
    }
    scrNav();
  });