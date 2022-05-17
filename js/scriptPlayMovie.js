var ime = sessionStorage.getItem("ime");
var desc = sessionStorage.getItem("desc");
var video = sessionStorage.getItem("video");

document.getElementById("naziv").innerHTML = ime;
document.getElementById("opis").innerHTML = desc;
document.getElementById("myVideo").src = video;