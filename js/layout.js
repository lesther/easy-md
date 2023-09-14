//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("menu_active");
});

//general filter
$(document).ready(function() {
  $(".panel-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel--active panel_active");
  });

  $(".notification-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_notification--active panel_active");
  });
 
  $(".new_chat-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_new-chat--active panel_active");
  });

  $(".popup_chat-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_chat--active popup_active");
  });

  // close
  $(".panel_close").click(function(e) {
    e.preventDefault();

    $("#body_wrapper").removeClass();
  });

  $(".popup_close").click(function(e) {
    e.preventDefault();

    $("#body_wrapper").removeClass();
  });
});

//tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  const tabButtons = tab.querySelectorAll(".tab_btn");
  const tabContents = tab.querySelectorAll(".tab_content");

  tab.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButtons.forEach(btn => {
        btn.classList.remove("tab_btn--active");
      });
      e.target.classList.add("tab_btn--active");

      tabContents.forEach(content => {
        content.classList.remove("tab_content--active");
      });
      const element = tab.querySelector(`#${id}`);
      element.classList.add("tab_content--active");
    }
  };
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

//panel resizable
interact('.panel_resizable')
  .resizable({
    edges: { left: true, right: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

        x = (parseFloat(x) || 0) + event.deltaRect.left
        y = (parseFloat(y) || 0) + event.deltaRect.top

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`
        })

        Object.assign(event.target.dataset, { x, y })
      }
    }
})


//dropdown
const multipleSelects = document.querySelectorAll('.multiple-select');

multipleSelects.forEach((multipleSelect) => {
  const toggleButtons = multipleSelect.querySelectorAll('.multiple-select_toggle');
  const selection = multipleSelect.querySelector('.multiple-select_selection');

  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      multipleSelect.classList.toggle('active');
    });
  });

  document.addEventListener('click', (event) => {
    if (!multipleSelect.contains(event.target)) {
      multipleSelect.classList.remove('active');
    }
  });
});


//dropdown simple
const dropdownToggles = document.querySelectorAll('.btn-dropdown_toggle');

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdown = event.target.closest('.btn-dropdown');
    dropdown.classList.toggle('active');
  });
});

document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.btn-dropdown');

  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
});


//select multiple tags
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn_tag-close')) {
    event.preventDefault();
    const btnTagContainer = event.target.closest('.btn_tag-container');
    if (btnTagContainer) {
      btnTagContainer.remove();
      
      const wrapSelections = document.querySelectorAll('.multiple-select_selection');
      
      wrapSelections.forEach((wrapSelection) => {
        const isEmpty = !wrapSelection.querySelector('.btn_tag-container');
        if (isEmpty) {
          wrapSelection.remove();
        }
      });
    }
  }
});