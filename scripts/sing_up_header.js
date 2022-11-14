const $doc = $(document);
const $header = $("header");
const $main = $(".wrapper");

$doc.on("scroll", function() {
  // aktualna wartość skrola
  const scrollPos = $doc.scrollTop();

  // gdzie (ile pixeli)jest dany element od początku strony
  const sectionOffset = $main.offset().top;

  // jaka jest wysokość elementu
  const headerHeight = $header.outerHeight();

  // zmiana przezroczystości i na czarno biały
  if (scrollPos < sectionOffset) {
    $header.css({
      opacity: 1 - scrollPos / headerHeight,
      filter: "grayscale(" + (2 * scrollPos) / headerHeight + ")"
    });
  }
});
