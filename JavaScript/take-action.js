$("ul li a").mouseenter(function () {
  var el = $(this).parent("li").get(0);
  console.log(el);
  anime({
    targets: el,
    background: "#3a5a40",
    color: "#FFF",
    easing: "easeOutCirc",
    borderColor: "#3a5a40",
    duration: 300,
  });
});

$("ul li a").mouseleave(function () {
  var el = $(this).parent("li").get(0);
  console.log(el);
  anime({
    targets: el,
    background: "#FFF",
    color: "#3a5a40",
    easing: "easeOutCirc",
    duration: 300,
  });
});
