jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 } }
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Google Map
  var get_latitude = $('#google-map').data('latitude');
  var get_longitude = $('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize_google_map);

});



// my map
  map = new OpenLayers.Map("mapdiv");

  map.addLayer(new OpenLayers.Layer.OSM());

  var oneTail = new OpenLayers.LonLat( -87.673119, 41.920974 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var paws = new OpenLayers.LonLat( -87.658689, 41.917837 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var antiCruelty = new OpenLayers.LonLat( -87.633563, 41.891414 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var felines = new OpenLayers.LonLat( -87.671651, 41.997946 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var newLeash = new OpenLayers.LonLat( -87.678731, 41.954157 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var fidoFriend = new OpenLayers.LonLat( -87.659096, 41.891649 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );
  var harmonyHouse = new OpenLayers.LonLat( -87.691431, 41.934146 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var lakeShore = new OpenLayers.LonLat( -87.838764, 42.015286 )
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          map.getProjectionObject() // to Spherical Mercator Projection
        );

  var zoom=12;

  var markers = new OpenLayers.Layer.Markers("Marker");
  map.addLayer(markers);

  map.setCenter (harmonyHouse, zoom);

  popup1 = new OpenLayers.Popup("oneTail",
            oneTail,
            new OpenLayers.Size(120,100),
            "<img src='myimg/oneTail.png' style='width:100%'>",
            true);

  popup2 = new OpenLayers.Popup("paws",
            paws,
            new OpenLayers.Size(120,130),
            "<img src='myimg/pawschicago.png' style='width:100%'>",
            true);

  popup3 = new OpenLayers.Popup("antiCruelty",
            antiCruelty,
            new OpenLayers.Size(120,140),
            "<img src='myimg/anticruelty.png' style='width:100%'>",
            true);

  popup4 = new OpenLayers.Popup("felines",
            felines,
            new OpenLayers.Size(124,50),
            "<img src='myimg/felines.png' style='width:100%'>",
            true);

  popup5 = new OpenLayers.Popup("newLeash",
            newLeash,
            new OpenLayers.Size(120,120),
            "<img src='myimg/newLeash.png' style='width:100%'>",
            true);

  popup6 = new OpenLayers.Popup("fidoFriend",
            fidoFriend,
            new OpenLayers.Size(120,150),
            "<img src='myimg/fidoFriend.png' style='width:100%'>",
            true);

  popup7 = new OpenLayers.Popup("harmonyHouse",
            harmonyHouse,
            new OpenLayers.Size(120,120),
            "<img src='myimg/harmonyHouse.png' style='width:100%'>",
            true);

  popup8 = new OpenLayers.Popup("lakeShore",
            lakeShore,
            new OpenLayers.Size(120,120),
            "<img src='myimg/lakeshore.png' style='width:100%'>",
            true);

  marker = new OpenLayers.Marker(oneTail);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup1);
  });

  marker = new OpenLayers.Marker(paws);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup2);
  });

  marker = new OpenLayers.Marker(antiCruelty);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup3);
  });

  marker = new OpenLayers.Marker(felines);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup4);
  });

  marker = new OpenLayers.Marker(newLeash);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup5);
  });

  marker = new OpenLayers.Marker(fidoFriend);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup6);
  });

  marker = new OpenLayers.Marker(harmonyHouse);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup7);
  });

  marker = new OpenLayers.Marker(lakeShore);
  markers.addMarker(marker);
  marker.events.register("click", marker, function(e){
        map.addPopup(popup8);
  });
