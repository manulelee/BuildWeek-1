var stars = document.querySelectorAll("#stars img");

stars.forEach((element) => {
  element.addEventListener(
    "click",
    (rate = (event) => {
      value = parseInt(event.target.id);
      console.log(event.target);
      for (let i = 0; i < value; i++) {
        //stars[i].classList.remove("clicked");
        stars[i].classList.toggle("clicked");
        console.log(stars[i]);
      }
    })
  );
});
