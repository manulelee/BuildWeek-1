var stars = document.querySelectorAll("#stars img");

stars.forEach((element) => {
  element.addEventListener(
    "click",
    (rate = (event) => {
      value = parseInt(event.target.id);
      //console.log(event.target);
      stars.forEach((element) => {
        element.classList.remove("clicked");
      });
      for (let i = 0; i < value; i++) {
        stars[i].classList.toggle("clicked");
        //console.log(stars[i]);
      }
    })
  );
});
