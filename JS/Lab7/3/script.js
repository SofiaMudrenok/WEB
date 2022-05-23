document.getElementById("contentOut").innerHTML = "";
function chooseAll() {
  let buttonchangeout1 = document.getElementById("Ice-cream");
  buttonchangeout1.style.color = "#000000";
  let buttonchangeout2 = document.getElementById("Hot-dog");
  buttonchangeout2.style.color = "#000000";
  let buttonchangeout3 = document.getElementById("Popcorn");
  buttonchangeout3.style.color = "#000000";
  let buttonchangeout4 = document.getElementById("Cookie");
  buttonchangeout4.style.color = "#000000";
}
function chooseIce() {
  let buttonchangeout1 = document.getElementById("Ice-cream");
  buttonchangeout1.style.color = "#000000";
  let buttonchangeout2 = document.getElementById("Hot-dog");
  buttonchangeout2.style.color = "rgb(133, 133, 133)";
  let buttonchangeout3 = document.getElementById("Popcorn");
  buttonchangeout3.style.color = "rgb(133, 133, 133)";
  let buttonchangeout4 = document.getElementById("Cookie");
  buttonchangeout4.style.color = "rgb(133, 133, 133)";
  document.getElementById("contentOut").innerHTML += " Ice-cream";
}
function chooseHot() {
  let buttonchangeout1 = document.getElementById("Ice-cream");
  buttonchangeout1.style.color = "rgb(133, 133, 133)";
  let buttonchangeout2 = document.getElementById("Hot-dog");
  buttonchangeout2.style.color = "#000000";
  let buttonchangeout3 = document.getElementById("Popcorn");
  buttonchangeout3.style.color = "rgb(133, 133, 133)";
  let buttonchangeout4 = document.getElementById("Cookie");
  buttonchangeout4.style.color = "rgb(133, 133, 133)";
  document.getElementById("contentOut").innerHTML += " Hot-dog";
}
function choosePop() {
  let buttonchangeout1 = document.getElementById("Ice-cream");
  buttonchangeout1.style.color = "rgb(133, 133, 133)";
  let buttonchangeout2 = document.getElementById("Hot-dog");
  buttonchangeout2.style.color = "rgb(133, 133, 133)";
  let buttonchangeout3 = document.getElementById("Popcorn");
  buttonchangeout3.style.color = "#000000";
  let buttonchangeout4 = document.getElementById("Cookie");
  buttonchangeout4.style.color = "rgb(133, 133, 133)";
  document.getElementById("contentOut").innerHTML += " Popcorn";
}
function chooseCookie() {
  let buttonchangeout1 = document.getElementById("Ice-cream");
  buttonchangeout1.style.color = "rgb(133, 133, 133)";
  let buttonchangeout2 = document.getElementById("Hot-dog");
  buttonchangeout2.style.color = "rgb(133, 133, 133)";
  let buttonchangeout3 = document.getElementById("Popcorn");
  buttonchangeout3.style.color = "rgb(133, 133, 133)";
  let buttonchangeout4 = document.getElementById("Cookie");
  buttonchangeout4.style.color = "#000000";
  document.getElementById("contentOut").innerHTML += " Cookie";
}
