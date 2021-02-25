function jumpForest() {
  window.open("./../subHTML/human-destiny/Forest.html","_blank");
}
function jumpAir() {
  window.open("./../subHTML/human-destiny/Air.html","_blank");
}
function jumpWater() {
  window.open("./../subHTML/human-destiny/Water.html","_blank");
}

$(".container .section").mouseenter(function () {
  var el = $(this).find("video").get(0);
  var el2 = $(this).children(".text").get(0);
  el.play();
  anime({
    targets: el2,
    opacity: 0,
    duration: 200,
    easing: "linear",
  });
  anime({
    targets: el,
    scale: 1.2,
    easing: "easeOutQuint",
    duration: 400,
  });
  anime({
    targets: el,
    easing: "easeInQuint",
    duration: 200,
    update: function (anim) {
      el.style.filter = "brightness(" + (60 + anim.progress / 2.5) + "%";
    },
  });
});

$(".container .section").mouseleave(function () {
  var el = $(this).find("video").get(0);
  var el2 = $(this).children(".text").get(0);
  el.pause();
  anime({
    targets: el2,
    opacity: 1,
    duration: 200,
    easing: "linear",
  });
  anime({
    targets: el,
    scale: 1,
    easing: "easeOutQuint",
    duration: 400,
  });
  anime({
    targets: el,
    easing: "easeInQuint",
    duration: 200,
    update: function (anim) {
      el.style.filter = "brightness(" + (100 - anim.progress / 2.5) + "%";
    },
  });
});
