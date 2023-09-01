//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("menu_active");
});

//general filter
//search filter
$(document).ready(function() {
  $(".panel-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel--active panel_active");
  });

  $(".panel_close").click(function(e) {
    e.preventDefault();

    $("#body_wrapper").removeClass();
  });
});
 
//drag scroll
const scrollableElements = document.querySelectorAll('.tab_head, .scrollable, .group_nowrap-scroll,  .group_nowrap-scroll--lg, .table_responsive, .panel__wrap-right, .panel__wrap-left');

scrollableElements.forEach(function(element) {
  let startX, startY, startScrollLeft, startScrollTop;

  element.addEventListener('mousedown', function(e) {
    startX = e.pageX;
    startY = e.pageY;
    startScrollLeft = element.scrollLeft;
    startScrollTop = element.scrollTop;

    element.style.cursor = 'grabbing';
    element.style.userSelect = 'none';

    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', function() {
      element.style.cursor = 'grab';
      element.style.userSelect = 'grab';
      document.removeEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
      const deltaX = e.pageX - startX;
      const deltaY = e.pageY - startY;

      element.scrollLeft = startScrollLeft - deltaX;
      element.scrollTop = startScrollTop - deltaY;
    }
  });
});
