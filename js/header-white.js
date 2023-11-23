const header = document.createElement("header");

  header.innerHTML=`
  <header>
  <div class="backdrop"></div>
  <div id="navigation-line">
    <div class="logo-text-desktop logo-text-desktop-white">
      <a href="index.html"><picture>
        <source media="(min-width: 768px)" srcset="assets/svg/valdres-logo-large-white.svg">
        <img src="assets/svg/valdres-logo-small-white.svg" alt="Visit Valdres logo">
      </picture></a>
      <a href="index.html"><picture id="logo-with-title">
        <source media="(min-width: 768px)" srcset="assets/svg/main-logo-white.svg">
        <img src="assets/svg/main-logo-mobile-white.svg" alt="header test reading Visit Valdres">
      </picture></a>
    </div>    
    <nav id="navbar" class="navbar-white">
      <ul id="menu-list" class="menu-list menu-list-white">
        <li><i class="fa-solid fa-xmark"></i></li>
        <li><a href="index.html">Home</a></li>
        <li><a class= "body-blogs-page" href="blogs.html">Blogs</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>     
    </nav>
    <div class="hamburger-container">
    <i class="fa-solid fa-bars hamburger-button hamburger-button-white"></i>
  </div>
  </div>
</header>` 

document.body.prepend(header);

 /* Setting active state on navigation */ 

 function setActivePage() {
  const body = document.querySelector("body");

  const bodyClass = body.classList[0];

  console.log(bodyClass);

  const navLinks = document.querySelectorAll("#menu-list a");

  navLinks.forEach(link => {
    if (link.classList.contains(bodyClass)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
 }

 window.onload = setActivePage;