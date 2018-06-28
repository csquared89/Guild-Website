$(".navbar-item.has-dropdown").hover(
  function () {
    $(".navbar-item.has-dropdown").addClass("is-active");
  },
  function () {
    $(".navbar-item.has-dropdown").removeClass("is-active");
});
