function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var random_images = function(tag, dir, num) {
  var _img = document.getElementById(tag);
  if (_img) {
    var newImg = new Image;
    var randNumber = getRandomInt(1, num);
    newImg.src = "/images/" + dir + "/" + randNumber + ".png";
    newImg.onload = function() {
      $(_img).fadeOut(0, function() {
        // $(_img).attr("src", newImg.src);
        _img.style.backgroundImage = "url(" + newImg.src + ")";
      }).fadeIn(1000);
    }
  }
}

var round_robin_gifs = function(tag, dir, num) {
  var _img = document.getElementById(tag);
  if(_img){
    var i;
    for( i = 1; i <= num; i++ ){
      _img.src = "gifs/" + dir + "/" + i + ".gif";
    }
  }
}

$("document").ready(function() {
  random_images("homepage-image", "Home", 4)
  round_robin_gifs("homepage-gif", "Home", 1)
  random_images("s-cs-image", "Services/communication_specialist", 1)
  random_images("s-ci-image", "Services/change_implementation", 1)
  random_images("s-cv-image", "Services/corporate_visualizations", 1)
  random_images("s-is-image", "Services/industry_specific", 1)
  random_images("s-mn-image", "Services/meetings_negotiations", 1)
  random_images("s-nm-image", "Services/new_management", 1)
  random_images("s-p-image", "Services/presentations", 1)
  random_images("s-ps-image", "Services/public_speaking", 1)
  random_images("s-ts-image", "Services/team_specialists", 1)
  random_images("s-cb-image", "Services/confidence_booster", 1)
  random_images("about-image", "About", 4)
  round_robin_gifs("about-gif", "About", 1)
  random_images("contact-image", "Contact", 1)
});
