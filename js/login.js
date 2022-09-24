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

let btnLogin = document.querySelector("#btnLogin");
let spanMessage = document.querySelector("#message");
btnLogin.addEventListener("click", () => {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
    if (
      email.value.replace(" ", "") !== users[i].email ||
      password.value !== users[i].password
    ) {
      spanMessage.textContent = "Invalid email or password";
    } else {
      location.href = "index.html";
      let registeredUser = users[i].firstName + " " + users[i].lastName;
      localStorage.setItem("regUser", registeredUser);
      loginRegister.textContent = users[i].firstName + " " + users[i].lastName;
      break;
    }
  }

  email.value = "";
  password.value = "";

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
