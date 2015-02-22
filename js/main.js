$(function() {

  // var options = {
  //   $menu: $('header .pure-menu'),
  //   menuSelector: 'li a',
  //   panelSelector: 'pure-g',
  //   namespace: '.panelSnap',
  //   onSnapStart: function(){console.log("start");},
  //   onSnapFinish: function(){console.log("finish");},
  //   onActivate: function(){console.log("activate");},
  //   directionThreshold: 50,
  //   slideSpeed: 200,
  //   easing: 'linear',
  //   offset: 0,
  //   keyboardNavigation: {
  //     enabled: false,
  //     nextPanelKey: 40,
  //     previousPanelKey: 38,
  //     wrapAround: true
  //   }
  // };

  var options = {
    $menu: $('header .pure-menu'),
    panelSelector: 'section',
    easing: 'linear',
    keyboardNavigation: {
      enabled: true,
      nextPanelKey: 40,
      previousPanelKey: 38,
      wrapAround: true
    }
  };
  var bla = $('body').panelSnap(options);
  
  $( window ).scroll(function() {
    $("#profile").css("margin-top", parseInt((window.pageYOffset/$("#start").innerHeight()) * 150) + "%")
  });
});
