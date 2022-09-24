const users = [
  {
    firstName: "Milos",
    lastName: "Maric",
    email: "milos@gmail.com",
    password: "milos123",
  },
  {
    firstName: "Aleksa",
    lastName: "Djuric",
    email: "aleksa@gmail.com",
    password: "aleksa123",
  },
];

let loginRegister = document.querySelector(".login_register");

let btnRegisted = document.querySelector("#btnRegister");
let spanMessage = document.querySelector("#message");
btnRegisted.addEventListener("click", () => {
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  if (
    fname.value.replace(" ", "") === "" ||
    lname.value.replace(" ", "") === "" ||
    email.value.replace(" ", "") === "" ||
    password.value.replace(" ", "") === "" ||
    fname.value.replace(" ", "") === " " ||
    lname.value.replace(" ", "") === " " ||
    email.value.replace(" ", "") === " "
  ) {
    spanMessage.textContent = "You must enter all fields!";
  } else if (password.value.length < 5) {
    spanMessage.textContent = "Password must have at least 5 characters!";
  } else if (
    !email.value.includes("@") ||
    email.value.startsWith("@") ||
    email.value.endsWith("@")
  ) {
    spanMessage.textContent = "Invalid email";
  } else {
    for (let i = 0; i < users.length; i++) {
      if (email.value.replace(" ", "") === users[i].email) {
        spanMessage.textContent = "User already exist!";
        break;
      } else {
        let obj = {};
        obj.firstName = fname.value;
        obj.lastName = lname.value;
        obj.email = email.value;
        obj.password = password.value;
        users.push(obj);
        location.href = "index.html";
        let registeredUser = obj.firstName + " " + obj.lastName;
        localStorage.setItem("regUser", registeredUser);
        loginRegister.textContent = obj.firstName + " " + obj.lastName;
        break;
      }
    }
  }
  fname.value = "";
  lname.value = "";
  email.value = "";
  password.value = "";

  //console.log(users[i].email);
  console.log(users);
});

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
