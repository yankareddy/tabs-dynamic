let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionButtonEl = document.getElementById("attractionsButton");

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionsTabEl.classList.add("d-none");

function aboutButton() {
    aboutTabEl.classList.remove("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.add("d-none");

    aboutButtonEl.classList.add("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionButtonEl.classList.remove("selected-button");
}

function timeToVisitButton() {
    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.remove("d-none");
    attractionsTabEl.classList.add("d-none");

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.add("selected-button");
    attractionButtonEl.classList.remove("selected-button");
}

function attractionsButton() {
    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.remove("d-none");

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionButtonEl.classList.add("selected-button");
}