// Toggle the burger menu
const toggleBtn = document.querySelector(".toggle_btn")
const dropDownMenu = document.querySelector(".dropdown-menu")
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
}

//Fill e-mail field
function sendEmailDefault() {
    var email = "avneetsekhon88@gmail.com";
    window.open(`mailto:${email}?`);
}