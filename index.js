// set-up nav-bar menjadi hamburger
// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// memunculkan side-bar ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar side-bar untuk menghilangkan side-bar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Menyapa visitor di h1
var visitorName = prompt("Masukkan nama Anda");
document.getElementById("visitor-name").innerText = visitorName;

//Memunculkan nama di output
function validateForm() {
  var name = document.forms["contact-form"]["full-name"].value;
  var email = document.forms["contact-form"]["e-mail"].value;
  var messages = document.forms["contact-form"]["messages"].value;

  if (name == "" || email == "" || messages == "") {
    alert("Ada input yang belum diisi. Isi terlebih dahulu!");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-messages").innerText = messages;
  return false;
}
