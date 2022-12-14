clk = document.querySelector(".buttons").addEventListener("click", calc);
var disp = document.querySelector(".display");
function calc() {
  on = event.target.id;

  switch (on) {
    case "=":
      if (disp.innerHTML == "") {
        disp.innerHTML = "";
      }else{
      try {
        disp.innerHTML = eval(disp.innerHTML);
      } catch {
        disp.innerHTML = "Invalid Expression";
      }}
      break;
    case "x":
      if (disp.innerHTML == "Invalid Expression") {
        disp.innerHTML = "";
      } else {
        disp.innerHTML = disp.innerHTML.slice(0, -1);
      }

      break;
    case "c":
      disp.innerHTML = "";
      break;
    default:
      if (disp.innerHTML == "Invalid Expression") {
        disp.innerHTML = on;
      } else {
        disp.innerHTML += on;
      }
  }
}

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
