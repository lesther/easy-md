//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("menu_active");
});

//general filter
$(document).ready(function() {
  //panel
  $(".panel_section-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_section--active panel_section-active");
  });

  $(".notification-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_notification--active panel_active");
  });

  $(".plan-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_plan--active panel_active");
  });
 
  $(".profile_detail-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_profile-detail--active panel_active");
  });

  $(".profile_menu-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_profile-menu--active panel_active");
  });

  $(".doctor_filter-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_doctor-filter--active panel_active");
  });

  $(".chat-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_chat--active panel_active");
  });

  $(".detail-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_detail--active panel_active");
  });

  $(".diagnostic-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_diagnostic--active panel_active");
  });

  $(".date-card-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("panel_date-card--active panel_active");
  });

  //popup
  $(".popup_personal-info-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_personal-info--active popup_active");
  });

  $(".popup_general-info-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_general-info--active popup_active");
  });

  $(".popup_password-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_password--active popup_active");
  });

  $(".popup_new-consultation-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_new-consultation--active popup_active");
  });

  $(".popup_new-affiliate-remove-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_new-affiliate-remove--active popup_active");
  });

  $(".popup_new-affiliate-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_new-affiliate--active popup_active");
  });

  $(".popup_plans-toggle").click(function(e) {
    e.preventDefault();
    $("#body_wrapper").toggleClass("popup_plans--active popup_active");
  });

  // close
  $(".panel_close, .panel_cancel").click(function(e) {
    e.preventDefault();

    $("#body_wrapper").removeClass();
  });

  $(".popup_close, .popup_cancel").click(function(e) {
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

//timer
$(document).ready(function() {
  $('.timer').each(function() {
      let $this = $(this);
      let minutes = 0;
      let seconds = 0;

      function updateTimerDisplay() {
          let minutesStr = minutes < 10 ? '0' + minutes : minutes;
          let secondsStr = seconds < 10 ? '0' + seconds : seconds;
          $this.text(`${minutesStr}:${secondsStr}`);
      }

      setInterval(() => {
          seconds++;
          if (seconds === 60) {
              seconds = 0;
              minutes++;
          }
          updateTimerDisplay();
      }, 1000);
  });
});



//scroll_reverse
const containers = document.querySelectorAll('.scroll_reverse');
containers.forEach(container => {
    container.scrollTop = container.scrollHeight - container.clientHeight;
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


//drag
const functionContainer = {}
const draggableItems = document.querySelectorAll('.draggable');
draggableItems.forEach((draggable,index) => {
  functionContainer[index] = ({ movementX, movementY }) => {
    let getContainerStyle = window.getComputedStyle(draggable);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
    draggable.style.left = `${leftValue + movementX}px`;
    draggable.style.top = `${topValue + movementY}px`;
  }
  draggable.addEventListener('mousedown', function() {
    draggable.classList.add('moving');
    draggable.addEventListener("mousemove", functionContainer[index]);
  });

  draggable.addEventListener('mouseup', function() {
    draggable.classList.remove('moving');
    draggable.removeEventListener("mousemove", functionContainer[index]);
  });

  draggable .addEventListener('click', function(e) {
    e.preventDefault();
  });
});

//camera
class CameraStream {
  constructor(videoElement) {
      this.videoElement = videoElement;
      this.initCamera();
  }

  initCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        this.videoElement.srcObject = stream;
        this.videoElement.play();
    })
    .catch((error) => {
        console.error('Error al acceder a la cámara: ', error);
    });
  }
}

const videoElements = document.querySelectorAll('.video_call-media');

videoElements.forEach((videoElement) => {
  new CameraStream(videoElement);
});

const videoCall = new VideoCall();

document.addEventListener('DOMContentLoaded', () => {
  new VideoCall();
});