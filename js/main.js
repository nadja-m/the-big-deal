var controller;

$(function(){
  // create main scroll controller
  controller = new ScrollMagic.Controller();

  // begin resize logic

  function resize() {
    $('.page').css('height', $(window).height());
  }

  $(window).on('resize', resize);
  resize();
});
