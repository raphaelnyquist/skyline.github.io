function getStyle() {
    var temp = document.querySelector("#menu").style.display;
    return temp;
}

function switch01() {
    var current = getStyle();
    if (current == "none") {
        document.querySelector("#menu").style.display = "block";
    }
    else {
        document.querySelector("#menu").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#menu").style.display = "none";

    document.querySelector("#navbar-toggle").onclick = switch01;
})