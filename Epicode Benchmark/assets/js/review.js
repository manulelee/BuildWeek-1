var stars = document.querySelectorAll("#stars img");

stars.forEach((element) => {
  element.addEventListener(
    "click",
    (rate = (event) => {
      console.log(event.target);
      for (let i = 0; i < event.target.value; i++) {
        event.target.classList.toggle("clicked");
      }
    })
  );
});
