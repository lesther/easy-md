//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menu_active");
});

//general filter
//search filter
$(document).ready(function() {
  $(".filter-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("panel_filter--active panel_active");
  });

  $(".panel_close").click(function(e) {
    e.preventDefault();

    $("#wrapper").removeClass();
  });
});


//richtext
//to do
//solo funciona con una clase .editor si hay otra en otro lado no lo corre
const SELECTOR_CONTAINER = '.editor';
const DEFAULT_CONFIG = {
  theme: 'bubble',
  bounds: SELECTOR_CONTAINER
};

new Quill(SELECTOR_CONTAINER, DEFAULT_CONFIG);
var editor = new Quill('.editor', {
  bounds: ".editor",
  theme: 'snow'
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
const scrollableElements = document.querySelectorAll('.tab_head, .scrollable, .group_nowrap-scroll, .table-responsive, .panel__wrap-right, .panel__wrap-left');

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
      element.style.cursor = 'auto';
      element.style.userSelect = 'auto';
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



//accordion
const headers = document.querySelectorAll('.accordion_header');

headers.forEach(header => {
  header.addEventListener('click', (event) => {
    const accordion = header.parentElement;
    if (accordion.classList.contains('accordion')) {
      header.classList.toggle('accordion_header--active');
      const body = accordion.querySelector('.accordion_body');
      if (body) {
        body.classList.toggle('accordion_body--active');
      }
      event.preventDefault();
    }
  });
});


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
});

document.addEventListener('click', (event) => {
  const multipleSelect = document.querySelector('.multiple-select');
  const toggleButton = document.querySelector('.multiple-select_toggle');

  if (event.target === toggleButton || toggleButton.contains(event.target)) {
    multipleSelect.classList.toggle('active');
  } else {
    if (!multipleSelect.contains(event.target)) {
      multipleSelect.classList.remove('active');
    }
  }
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
      const wrapSelection = document.querySelector('.multiple-select_selection');
      if (!wrapSelection.querySelector('.btn_tag-container')) {
        wrapSelection.remove();
      }
    }
  }
});


//preloader
const preloader = document.querySelector('.preloader');
const preloaderWrap = document.querySelector('.preloader_wrap');

setTimeout(() => {
    fadeOut(preloaderWrap, 500, () => {
        preloader.innerHTML = '';
        fadeOut(preloader, 500, () => {
            preloader.classList.add('hidden');
        });
    });
}, 2000);

function fadeOut(element, duration, callback) {
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const progress = timestamp - startTime;
        const opacity = Math.max(startOpacity - (progress / duration), 0);

        element.style.opacity = opacity;

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            if (typeof callback === 'function') {
                callback();
            }
        }
    }
    requestAnimationFrame(animate);
}