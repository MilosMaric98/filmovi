let poruke = [
  {
    ime: "Petar",
    poruka:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non quae aliquid ut repellendus, voluptate accusantium eos unde ipsum et.",
  },
  {
    ime: "Jelena",
    poruka:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque modi adipisci, doloremque nulla aperiam possimus dolorem beatae fuga quae delectus mollitia aliquid placeat omnis aliquam, deleniti sint similique exercitationem!",
  },
  {
    ime: "Milica",
    poruka:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla placeat distinctio eum laborum pariatur. Quaerat?",
  },
  {
    ime: "Jovan",
    poruka:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eaque repellat culpa sed fugiat, assumenda id quisquam quibusdam magnam, voluptates nulla commodi quidem?",
  },
  {
    ime: "Aleksa",
    poruka:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi modi suscipit. Numquam itaque nam libero vitae harum rerum, a, molestias nihil blanditiis ipsa officia eaque totam eligendi animi aperiam quisquam obcaecati ducimus eum ullam?",
  },
];
let svePoruke = document.querySelector(".svePoruke");
for (let i = 0; i < poruke.length; i++) {
  svePoruke.innerHTML += `
      <h3>${poruke[i].ime}</h3>
      <p>${poruke[i].poruka}</p>`;
}
let message = document.querySelector(".message");
let btnPoruka = document.querySelector("#btnPoruka");
btnPoruka.addEventListener("click", () => {
  if (localStorage.getItem("regUser")) {
    svePoruke.innerHTML = "";
    let ime = document.getElementById("ime");
    let poruka = document.getElementById("poruka");
    poruke.push({ ime: ime.value, poruka: poruka.value });
    console.log(poruke);
    for (let i = 0; i < poruke.length; i++) {
      svePoruke.innerHTML += `
        <h3>${poruke[i].ime}</h3>
        <p>${poruke[i].poruka}</p>`;
    }
    ime.value = "";
    poruka.value = "";
  } else {
    message.textContent = "You must be logged in to post a message";
  }
});

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
