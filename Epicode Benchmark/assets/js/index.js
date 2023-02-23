let chechbox = document.getElementById("demo_opt_1");

let btnProceed = document.getElementById("pulsante");

btnProceed.disabled = true;
btnProceed.classList.add("disabled");

chechbox.addEventListener("click", function () {
  btnProceed.classList.remove("disabled");
  btnProceed.classList.add("pulsante");
  btnProceed.disabled = false;
  controllo();
});
function controllo() {
  if (chechbox.checked == true) {
    btnProceed.classList.remove("disabled");
    btnProceed.classList.add("pulsante");
    btnProceed.disabled = false;
  } else {
    btnProceed.classList.remove("pulsante");
    btnProceed.classList.add("disabled");
    btnProceed.disabled = true;
  }
}
