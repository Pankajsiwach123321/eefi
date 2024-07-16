const SHOW_NAV = document.querySelector("#show-nav"),
    NAV_BAR = document.querySelector("#navbar")
function HANDLE_HIDE_NAV() {
    NAV_BAR.classList.remove("start-0"),
        SHOW_NAV.classList.remove("opacity-0"),
        document.documentElement.classList.remove("overflow-hidden");
}
function HANDLE_NAV_OPEN() {
    NAV_BAR.classList.toggle("start-0"),
        document.documentElement.classList.toggle("overflow-hidden");
}