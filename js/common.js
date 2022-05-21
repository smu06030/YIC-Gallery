// 메뉴 스크롤시 고정
$(document).ready(function() {
    var jbOffset = $('.tab_nav').offset();
    $(window).scroll(function() {    
      if ($(this).scrollTop() > jbOffset.top) {
        $('.tab_nav').addClass('menuFixed');
      }
      else {
        $('.tab_nav').removeClass('menuFixed');
      }
    });

// 상단으로 이동하는 top 버튼
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.top').fadeIn();
      } else {
        $('.top').fadeOut();
      }
    });
    $('.top').click( function() {
      $('html, body').animate({ scrollTop : 0 }, 400);
      return false;
    });

// 부드러운 스크롤
    $("html").easeScroll({
      arrowScroll: 80,
      stepSize: 80
    });

  });

function mouseover(){
  var n = document.getElementById("img_p");
  n.style.display = "block";
}
function mouseout(){
  var n = document.getElementById("img_p");
  n.style.display = "none";
}
function mouseover_2(){
  var n = document.getElementById("img_p_2");
  n.style.display = "block";
}
function mouseout_2(){
  var n = document.getElementById("img_p_2");
  n.style.display = "none";
}

// 구글 맵
var map;
    function initMap() {
      var myLatLng = {lat: 37.584842, lng: 126.925209};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Welcome to YIC Gallery'
      });
    }