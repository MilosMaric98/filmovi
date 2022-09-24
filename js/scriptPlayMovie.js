let ime = localStorage.getItem("ime");
let desc = localStorage.getItem("desc");
let video = localStorage.getItem("video");

document.getElementById("naziv").innerHTML = ime;
document.getElementById("opis").innerHTML = desc;
document.getElementById("myVideo").src = video;

let loginRegister = document.querySelector(".login_register");
if (localStorage.getItem("regUser")) {
  loginRegister.textContent = localStorage.getItem("regUser");
}
let activeUser = document.querySelector(".activeUser");
loginRegister.addEventListener("click", function () {
  activeUser.classList.toggle("activeUser-active");
});
activeUser.addEventListener("click", function () {
  loginRegister.textContent = "";
  localStorage.removeItem("regUser");
  let login = document.createElement("a");
  let register = document.createElement("a");
  let slash = document.createElement("span");
  slash.textContent = " / ";
  login.textContent = "LOGIN";
  register.textContent = "REGISTER";
  loginRegister.appendChild(login);
  loginRegister.appendChild(slash);
  loginRegister.appendChild(register);
  activeUser.classList.remove("activeUser-active");
});
