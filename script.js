# Foolproof
for tourisut
$(function () {
  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass("is-open");
    } else {
      $(".header-sp-nav").css("display", "block");
      $(".header-sp-icon-wrap").addClass("is-open");
    }
  });

  if (window.innerWidth < 480) {
    document.getElementById("go-myanmar").href = "https://r-nakamura04.github.io/Foolproof/sp-myanmar.html";
    document.getElementById("go-indonesia").href = "sp-indonesia.html";
    document.getElementById("go-philippine").href = "sp-philippine.html";
    document.getElementById("go-singapore").href = "sp-singapore.html";
    document.getElementById("go-thailand").href = "sp-thailand.html";
    document.getElementById("go-cambodia").href = "sp-cambodia.html";
    document.getElementById("go-vietnam").href = "sp-vietnam.html";
    document.getElementById("go-malaysia").href = "sp-malaysia.html";
    document.getElementById("go-laos").href = "sp-laos.html";
    document.getElementById("go-top").href = "index.html";
    document.getElementById("go-foolproof").href = "sp-foolproof.html";
    document.getElementById("go-help").href = "sp-help.html";
  }
});
