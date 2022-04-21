let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let burger_state = true;

burger.addEventListener("click", () => {
   if (burger_state) {
      burger_state = false;
      menu.classList.add("select");
      burger.classList.add("select");
   }
   else {
      burger_state = true;
      menu.classList.remove("select")
      burger.classList.remove("select");
   }
});