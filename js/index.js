/* Hamburger menu */

const hamburgerIcon = document.querySelector(".hamburger-button");
const closeHamburgerIcon = document.querySelector(".fa-xmark");
const body = document.body;
const backdrop = document.querySelector(".backdrop");
const activeMenu = document.querySelector(".backdrop-active"); 

  /* Open menu */

  function openMenu() {
    body.classList.add("menu-active");
    backdrop.classList.add("backdrop-active");
  }

  hamburgerIcon.addEventListener("click", openMenu);

  /* Close menu */

  function closeMenu () {
    body.classList.remove("menu-active");
    backdrop.classList.remove("backdrop-active");
  }

  closeHamburgerIcon.addEventListener("click", closeMenu);

  /* Close menu by clicking outside */

  

  // function menuClickOutside() {
  //   body.classList.remove ("menu-active");
  //   backdrop.classList.remove("backdrop-active");
  // }
  
  // function handleOutsideClick(event) {
  //   if (activeMenu.contain(event.target)) {
  //     menuClickOutside();
  //   }
  // }

  // document.addEventListener("click", handleOutsideClick);