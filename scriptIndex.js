$(document).ready(function () {
  const listBackground = $("#list");
  const themes = $(".list-group-item");

  console.log(themes.index(0));

  themes.eq(0).click(function () {
    listBackground.css(
      "background-image",
      "url(" + "images/bg-charcoal.png" + ")"
    );
  });

  themes.eq(1).click(function () {
    listBackground.css(
      "background-image",
      "url(" + "images/bg-celadon.png" + ")"
    );
  });

  themes.eq(2).click(function () {
    listBackground.css("background-image", "url(" + "images/bg-rojo.png" + ")");
  });

  themes.eq(3).click(function () {
    listBackground.css(
      "background-image",
      "url(" + "images/bg-mardigras.png" + ")"
    );
  });
});
