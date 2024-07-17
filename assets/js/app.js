const SHOW_NAV = document.querySelector("#show-nav")
LINE1 = document.querySelector(".line-1")
LINE2 = document.querySelector(".line-2")
LINE3 = document.querySelector(".line-3")
NAV_BAR = document.querySelector("#navbar")
function HANDLE_HIDE_NAV() {
    NAV_BAR.classList.remove("start-0"),
        LINE1.classList.remove("activeline-1"),
        LINE2.classList.remove("activeline-2"),
        LINE3.classList.remove("activeline-3"),
        SHOW_NAV.classList.remove("opacity-0"),
        document.documentElement.classList.remove("overflow-hidden");
}
function HANDLE_NAV_OPEN() {
    NAV_BAR.classList.toggle("start-0"),
        LINE1.classList.toggle("activeline-1"),
        LINE2.classList.toggle("activeline-2"),
        LINE3.classList.toggle("activeline-3"),
        document.documentElement.classList.toggle("overflow-hidden");
}