$("footer").css("margin-top", document.body.clientWidth / 1.5 - 440);
window.onresize = function () {
  $("footer").css("margin-top", document.body.clientWidth / 1.5 - 440);
};
$(".btns .txt").mouseover(function () {
  var el = $(this).siblings(".svg").get(0);
  anime({
    targets: el,
    right: "-25",
    duration: "250",
    easing: "easeOutQuint",
  });
  var el = $(this).siblings(".underline").get(0);
  anime({
    targets: el,
    width: "100",
    duration: "250",
    easing: "easeOutQuint",
  });
});

$(".btns .txt").mouseout(function () {
  var el = $(this).siblings(".svg").get(0);
  anime({
    targets: el,
    right: "-20",
    duration: "250",
    easing: "easeOutQuint",
  });
  var el2 = $(this).siblings(".underline").get(0);
  anime({
    targets: el2,
    width: "0",
    duration: "250",
    easing: "easeOutQuint",
  });
});

$(document).ready(function () {
  var el = $(".cont-main h1").get(0);
  anime({
    targets: el,
    opacity: "1",
    delay: "500",
    duration: "1000",
    easing: "linear",
  });
  var el = $(".btns > div");
  anime({
    targets: [el[0], el[1], el[2]],
    opacity: "1",
    translateY: "-10",
    delay: anime.stagger(80, { start: 1500 }),
    duration: "500",
    easing: "easeOutSine",
  });
});
