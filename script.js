// Elements
const homeBtn = document.getElementById('home-btn');
const time = document.getElementById('time');
const nav = document.getElementById('navbar');
const heroWindow =document.getElementById("hero-window");
const project1Window = document.getElementById("project-1-window");
const project2Window = document.getElementById("project-2-window");
const project3Window = document.getElementById("project-3-window");
const contactWindow = document.getElementById("contact-window");

nav.addEventListener("click", () => {
  if (event.target.tagName == "BUTTON") {
    event.target.classList.toggle("active");
  }
});

// Make the DIV element draggable:
dragElement(heroWindow);
dragElement(project1Window);
dragElement(project2Window);
dragElement(project3Window);
dragElement(contactWindow);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "__title")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "__title").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(e);
    console.log(pos3, pos4);
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Set time to current time in the nav bar
setTime();

// Navigation Home click popup
homeBtn.addEventListener('click', () => {
  alert("hello world!");
});


// Updates the div element with the current time every second
function setTime() {
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59

    let amOrPm = "AM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        amOrPm = "PM";
    }
   min = (min < 10) ? "0" + min : min;

  var currentTime = `${hour}:${min}${amOrPm}`;
  time.innerText = currentTime;
  time.textContent = currentTime;

  // Call this function every second to set the time
    setTimeout(setTime, 1000);
}


