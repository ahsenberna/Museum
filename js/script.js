const arrows = document.querySelectorAll(".arrow");
const museumLists = document.querySelectorAll(".museum-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = museumLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      museumLists[i].style.transform = `translateX(${
        museumLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      museumLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
$(document).ready(function(){
  alert('Müze web sitemize hoş geldiniz!');
});
function initMap() {
  var location = {lat: -34.397, lng: 150.644};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}
$(document).ready(function(){
  initMap();
});


