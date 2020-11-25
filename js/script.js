$(document).ready(
  function() {

    // quando vado in hover sugli a, devono cambiare colore e non avere il text decoration
    $("a").mouseenter(
      function() {
        $(this).css({
          'color': '#191c1f',
          'textDecoration': 'none'
        });
      }
    );

    $("a").mouseleave(
      function() {
        $(this).css("color", "#b0b1b2");
      }
    );


  }
);
