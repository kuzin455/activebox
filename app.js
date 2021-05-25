$(function () {
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();

  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let introH = intro.innerHeight();

    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
    console.log(scrollPos);
  });


  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elId = $(this).data("scroll");
    let elOffset = $(elId).offset().top;

    $("html, body").animate({
      scrollTop: elOffset - 70
    }, 700)
    console.log(elOffset)
  }) 
});
