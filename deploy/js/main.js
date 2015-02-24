$(function() {
  var options = {
    $menu: $('header .pure-menu'),
    panelSelector: 'section',
    easing: 'linear',
    offset: 60,
    keyboardNavigation: {
      enabled: true,
      nextPanelKey: 40,
      previousPanelKey: 38,
      wrapAround: true
    }
  };
  $('body').panelSnap(options);
  if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $( window ).scroll(function() {
      // $("#profile").css("margin-top", parseInt((window.pageYOffset/$(window).innerHeight()) * 100) - 60 + "%")
    });    
  }
});
