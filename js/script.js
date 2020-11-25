$(document).ready(
  function() {

    // le <a> che hanno la classe active devono avere questo colore sempre
    $("a.active").css("color", "#191c1f");
    // tutti gli ul che sono dei dropdown
    var dropdownUl = $("ul.dropdown_item");
    // tutti gli li che hanno classe position_relative
    var liPositionRelative = $("li.position_relative");
    // VERSIONE CON IL MOUSE ALL'HOVER--------------------------------

    // quando vado sopra con il mouse alla li che contiene il dropdown menu
    liPositionRelative.mouseenter(
      function() {
        $(this).children("a").css("color", "#191c1f");
        var indexLi = $(this).index();
        $(dropdownUl[indexLi]).fadeIn("fast");
      }
    );

    // quando sposto il mouse dalla li che contiene il dropdown menu
    liPositionRelative.mouseleave(
      function() {
        $(this).children("a").css("color", "#b0b1b2");
        var indexLi = $(this).index();
        $(dropdownUl[indexLi]).fadeOut(200);
      }
    );

    // VERSIONE CON IL CLICK--------------------------------


  }
);
