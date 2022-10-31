const light_icon = document.querySelector(".light-icon");
const toggle = document.querySelector("#darkmode-toggle");

light_icon.addEventListener("click", function () {
    toggle.checked = !toggle.checked;
    if (toggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
});